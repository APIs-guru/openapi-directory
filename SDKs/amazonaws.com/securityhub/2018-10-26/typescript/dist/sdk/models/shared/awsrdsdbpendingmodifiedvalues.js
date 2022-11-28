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
import { AwsRdsPendingCloudWatchLogsExports } from "./awsrdspendingcloudwatchlogsexports";
import { AwsRdsDbProcessorFeature } from "./awsrdsdbprocessorfeature";
// AwsRdsDbPendingModifiedValues
/**
 * Changes to a DB instance that are currently pending.
**/
var AwsRdsDbPendingModifiedValues = /** @class */ (function (_super) {
    __extends(AwsRdsDbPendingModifiedValues, _super);
    function AwsRdsDbPendingModifiedValues() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllocatedStorage" }),
        __metadata("design:type", Number)
    ], AwsRdsDbPendingModifiedValues.prototype, "allocatedStorage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BackupRetentionPeriod" }),
        __metadata("design:type", Number)
    ], AwsRdsDbPendingModifiedValues.prototype, "backupRetentionPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CaCertificateIdentifier" }),
        __metadata("design:type", String)
    ], AwsRdsDbPendingModifiedValues.prototype, "caCertificateIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DbInstanceClass" }),
        __metadata("design:type", String)
    ], AwsRdsDbPendingModifiedValues.prototype, "dbInstanceClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DbInstanceIdentifier" }),
        __metadata("design:type", String)
    ], AwsRdsDbPendingModifiedValues.prototype, "dbInstanceIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DbSubnetGroupName" }),
        __metadata("design:type", String)
    ], AwsRdsDbPendingModifiedValues.prototype, "dbSubnetGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EngineVersion" }),
        __metadata("design:type", String)
    ], AwsRdsDbPendingModifiedValues.prototype, "engineVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Iops" }),
        __metadata("design:type", Number)
    ], AwsRdsDbPendingModifiedValues.prototype, "iops", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LicenseModel" }),
        __metadata("design:type", String)
    ], AwsRdsDbPendingModifiedValues.prototype, "licenseModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MasterUserPassword" }),
        __metadata("design:type", String)
    ], AwsRdsDbPendingModifiedValues.prototype, "masterUserPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MultiAZ" }),
        __metadata("design:type", Boolean)
    ], AwsRdsDbPendingModifiedValues.prototype, "multiAz", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PendingCloudWatchLogsExports" }),
        __metadata("design:type", AwsRdsPendingCloudWatchLogsExports)
    ], AwsRdsDbPendingModifiedValues.prototype, "pendingCloudWatchLogsExports", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Port" }),
        __metadata("design:type", Number)
    ], AwsRdsDbPendingModifiedValues.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProcessorFeatures", elemType: AwsRdsDbProcessorFeature }),
        __metadata("design:type", Array)
    ], AwsRdsDbPendingModifiedValues.prototype, "processorFeatures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StorageType" }),
        __metadata("design:type", String)
    ], AwsRdsDbPendingModifiedValues.prototype, "storageType", void 0);
    return AwsRdsDbPendingModifiedValues;
}(SpeakeasyBase));
export { AwsRdsDbPendingModifiedValues };
