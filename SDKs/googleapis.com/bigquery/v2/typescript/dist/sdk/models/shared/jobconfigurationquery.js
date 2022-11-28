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
import { DatasetReference } from "./datasetreference";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { TableReference } from "./tablereference";
import { QueryParameter } from "./queryparameter";
import { RangePartitioning } from "./rangepartitioning";
import { ExternalDataConfiguration } from "./externaldataconfiguration";
import { TimePartitioning } from "./timepartitioning";
import { UserDefinedFunctionResource } from "./userdefinedfunctionresource";
var JobConfigurationQuery = /** @class */ (function (_super) {
    __extends(JobConfigurationQuery, _super);
    function JobConfigurationQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowLargeResults" }),
        __metadata("design:type", Boolean)
    ], JobConfigurationQuery.prototype, "allowLargeResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clustering" }),
        __metadata("design:type", Clustering)
    ], JobConfigurationQuery.prototype, "clustering", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectionProperties", elemType: ConnectionProperty }),
        __metadata("design:type", Array)
    ], JobConfigurationQuery.prototype, "connectionProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createDisposition" }),
        __metadata("design:type", String)
    ], JobConfigurationQuery.prototype, "createDisposition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createSession" }),
        __metadata("design:type", Boolean)
    ], JobConfigurationQuery.prototype, "createSession", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultDataset" }),
        __metadata("design:type", DatasetReference)
    ], JobConfigurationQuery.prototype, "defaultDataset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationEncryptionConfiguration" }),
        __metadata("design:type", EncryptionConfiguration)
    ], JobConfigurationQuery.prototype, "destinationEncryptionConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationTable" }),
        __metadata("design:type", TableReference)
    ], JobConfigurationQuery.prototype, "destinationTable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flattenResults" }),
        __metadata("design:type", Boolean)
    ], JobConfigurationQuery.prototype, "flattenResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumBillingTier" }),
        __metadata("design:type", Number)
    ], JobConfigurationQuery.prototype, "maximumBillingTier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumBytesBilled" }),
        __metadata("design:type", String)
    ], JobConfigurationQuery.prototype, "maximumBytesBilled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameterMode" }),
        __metadata("design:type", String)
    ], JobConfigurationQuery.prototype, "parameterMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preserveNulls" }),
        __metadata("design:type", Boolean)
    ], JobConfigurationQuery.prototype, "preserveNulls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", String)
    ], JobConfigurationQuery.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query" }),
        __metadata("design:type", String)
    ], JobConfigurationQuery.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryParameters", elemType: QueryParameter }),
        __metadata("design:type", Array)
    ], JobConfigurationQuery.prototype, "queryParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rangePartitioning" }),
        __metadata("design:type", RangePartitioning)
    ], JobConfigurationQuery.prototype, "rangePartitioning", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schemaUpdateOptions" }),
        __metadata("design:type", Array)
    ], JobConfigurationQuery.prototype, "schemaUpdateOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tableDefinitions", elemType: ExternalDataConfiguration }),
        __metadata("design:type", Map)
    ], JobConfigurationQuery.prototype, "tableDefinitions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timePartitioning" }),
        __metadata("design:type", TimePartitioning)
    ], JobConfigurationQuery.prototype, "timePartitioning", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useLegacySql" }),
        __metadata("design:type", Boolean)
    ], JobConfigurationQuery.prototype, "useLegacySql", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useQueryCache" }),
        __metadata("design:type", Boolean)
    ], JobConfigurationQuery.prototype, "useQueryCache", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userDefinedFunctionResources", elemType: UserDefinedFunctionResource }),
        __metadata("design:type", Array)
    ], JobConfigurationQuery.prototype, "userDefinedFunctionResources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=writeDisposition" }),
        __metadata("design:type", String)
    ], JobConfigurationQuery.prototype, "writeDisposition", void 0);
    return JobConfigurationQuery;
}(SpeakeasyBase));
export { JobConfigurationQuery };
