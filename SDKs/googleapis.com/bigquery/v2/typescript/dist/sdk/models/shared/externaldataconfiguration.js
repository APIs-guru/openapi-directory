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
import { AvroOptions } from "./avrooptions";
import { BigtableOptions } from "./bigtableoptions";
import { CsvOptions } from "./csvoptions";
import { GoogleSheetsOptions } from "./googlesheetsoptions";
import { HivePartitioningOptions } from "./hivepartitioningoptions";
import { ParquetOptions } from "./parquetoptions";
import { TableSchema } from "./tableschema";
var ExternalDataConfiguration = /** @class */ (function (_super) {
    __extends(ExternalDataConfiguration, _super);
    function ExternalDataConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autodetect" }),
        __metadata("design:type", Boolean)
    ], ExternalDataConfiguration.prototype, "autodetect", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avroOptions" }),
        __metadata("design:type", AvroOptions)
    ], ExternalDataConfiguration.prototype, "avroOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bigtableOptions" }),
        __metadata("design:type", BigtableOptions)
    ], ExternalDataConfiguration.prototype, "bigtableOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compression" }),
        __metadata("design:type", String)
    ], ExternalDataConfiguration.prototype, "compression", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectionId" }),
        __metadata("design:type", String)
    ], ExternalDataConfiguration.prototype, "connectionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=csvOptions" }),
        __metadata("design:type", CsvOptions)
    ], ExternalDataConfiguration.prototype, "csvOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=decimalTargetTypes" }),
        __metadata("design:type", Array)
    ], ExternalDataConfiguration.prototype, "decimalTargetTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=googleSheetsOptions" }),
        __metadata("design:type", GoogleSheetsOptions)
    ], ExternalDataConfiguration.prototype, "googleSheetsOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hivePartitioningOptions" }),
        __metadata("design:type", HivePartitioningOptions)
    ], ExternalDataConfiguration.prototype, "hivePartitioningOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ignoreUnknownValues" }),
        __metadata("design:type", Boolean)
    ], ExternalDataConfiguration.prototype, "ignoreUnknownValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxBadRecords" }),
        __metadata("design:type", Number)
    ], ExternalDataConfiguration.prototype, "maxBadRecords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadataCacheMode" }),
        __metadata("design:type", String)
    ], ExternalDataConfiguration.prototype, "metadataCacheMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectMetadata" }),
        __metadata("design:type", String)
    ], ExternalDataConfiguration.prototype, "objectMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parquetOptions" }),
        __metadata("design:type", ParquetOptions)
    ], ExternalDataConfiguration.prototype, "parquetOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=referenceFileSchemaUri" }),
        __metadata("design:type", String)
    ], ExternalDataConfiguration.prototype, "referenceFileSchemaUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schema" }),
        __metadata("design:type", TableSchema)
    ], ExternalDataConfiguration.prototype, "schema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceFormat" }),
        __metadata("design:type", String)
    ], ExternalDataConfiguration.prototype, "sourceFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceUris" }),
        __metadata("design:type", Array)
    ], ExternalDataConfiguration.prototype, "sourceUris", void 0);
    return ExternalDataConfiguration;
}(SpeakeasyBase));
export { ExternalDataConfiguration };
