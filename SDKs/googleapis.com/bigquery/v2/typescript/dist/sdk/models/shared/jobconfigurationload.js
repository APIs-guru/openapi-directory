var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Clustering } from "./clustering";
import { ConnectionProperty } from "./connectionproperty";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { TableReference } from "./tablereference";
import { DestinationTableProperties } from "./destinationtableproperties";
import { HivePartitioningOptions } from "./hivepartitioningoptions";
import { ParquetOptions } from "./parquetoptions";
import { RangePartitioning } from "./rangepartitioning";
import { TableSchema } from "./tableschema";
import { TimePartitioning } from "./timepartitioning";
var JobConfigurationLoad = /** @class */ (function (_super) {
    __extends(JobConfigurationLoad, _super);
    function JobConfigurationLoad() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowJaggedRows" }),
        __metadata("design:type", Boolean)
    ], JobConfigurationLoad.prototype, "allowJaggedRows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowQuotedNewlines" }),
        __metadata("design:type", Boolean)
    ], JobConfigurationLoad.prototype, "allowQuotedNewlines", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autodetect" }),
        __metadata("design:type", Boolean)
    ], JobConfigurationLoad.prototype, "autodetect", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clustering" }),
        __metadata("design:type", Clustering)
    ], JobConfigurationLoad.prototype, "clustering", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectionProperties", elemType: ConnectionProperty }),
        __metadata("design:type", Array)
    ], JobConfigurationLoad.prototype, "connectionProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createDisposition" }),
        __metadata("design:type", String)
    ], JobConfigurationLoad.prototype, "createDisposition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createSession" }),
        __metadata("design:type", Boolean)
    ], JobConfigurationLoad.prototype, "createSession", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=decimalTargetTypes" }),
        __metadata("design:type", Array)
    ], JobConfigurationLoad.prototype, "decimalTargetTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationEncryptionConfiguration" }),
        __metadata("design:type", EncryptionConfiguration)
    ], JobConfigurationLoad.prototype, "destinationEncryptionConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationTable" }),
        __metadata("design:type", TableReference)
    ], JobConfigurationLoad.prototype, "destinationTable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationTableProperties" }),
        __metadata("design:type", DestinationTableProperties)
    ], JobConfigurationLoad.prototype, "destinationTableProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encoding" }),
        __metadata("design:type", String)
    ], JobConfigurationLoad.prototype, "encoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fieldDelimiter" }),
        __metadata("design:type", String)
    ], JobConfigurationLoad.prototype, "fieldDelimiter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hivePartitioningOptions" }),
        __metadata("design:type", HivePartitioningOptions)
    ], JobConfigurationLoad.prototype, "hivePartitioningOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ignoreUnknownValues" }),
        __metadata("design:type", Boolean)
    ], JobConfigurationLoad.prototype, "ignoreUnknownValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jsonExtension" }),
        __metadata("design:type", String)
    ], JobConfigurationLoad.prototype, "jsonExtension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxBadRecords" }),
        __metadata("design:type", Number)
    ], JobConfigurationLoad.prototype, "maxBadRecords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nullMarker" }),
        __metadata("design:type", String)
    ], JobConfigurationLoad.prototype, "nullMarker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parquetOptions" }),
        __metadata("design:type", ParquetOptions)
    ], JobConfigurationLoad.prototype, "parquetOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preserveAsciiControlCharacters" }),
        __metadata("design:type", Boolean)
    ], JobConfigurationLoad.prototype, "preserveAsciiControlCharacters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projectionFields" }),
        __metadata("design:type", Array)
    ], JobConfigurationLoad.prototype, "projectionFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quote" }),
        __metadata("design:type", String)
    ], JobConfigurationLoad.prototype, "quote", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rangePartitioning" }),
        __metadata("design:type", RangePartitioning)
    ], JobConfigurationLoad.prototype, "rangePartitioning", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=referenceFileSchemaUri" }),
        __metadata("design:type", String)
    ], JobConfigurationLoad.prototype, "referenceFileSchemaUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schema" }),
        __metadata("design:type", TableSchema)
    ], JobConfigurationLoad.prototype, "schema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schemaInline" }),
        __metadata("design:type", String)
    ], JobConfigurationLoad.prototype, "schemaInline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schemaInlineFormat" }),
        __metadata("design:type", String)
    ], JobConfigurationLoad.prototype, "schemaInlineFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schemaUpdateOptions" }),
        __metadata("design:type", Array)
    ], JobConfigurationLoad.prototype, "schemaUpdateOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skipLeadingRows" }),
        __metadata("design:type", Number)
    ], JobConfigurationLoad.prototype, "skipLeadingRows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceFormat" }),
        __metadata("design:type", String)
    ], JobConfigurationLoad.prototype, "sourceFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceUris" }),
        __metadata("design:type", Array)
    ], JobConfigurationLoad.prototype, "sourceUris", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timePartitioning" }),
        __metadata("design:type", TimePartitioning)
    ], JobConfigurationLoad.prototype, "timePartitioning", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useAvroLogicalTypes" }),
        __metadata("design:type", Boolean)
    ], JobConfigurationLoad.prototype, "useAvroLogicalTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=writeDisposition" }),
        __metadata("design:type", String)
    ], JobConfigurationLoad.prototype, "writeDisposition", void 0);
    return JobConfigurationLoad;
}(SpeakeasyBase));
export { JobConfigurationLoad };
