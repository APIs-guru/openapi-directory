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
import { PendingCloudwatchLogsExports } from "./pendingcloudwatchlogsexports";
import { ProcessorFeature } from "./processorfeature";
// PendingModifiedValues
/**
 *  This data type is used as a response element in the <code>ModifyDBInstance</code> operation and contains changes that will be applied during the next maintenance window.
**/
var PendingModifiedValues = /** @class */ (function (_super) {
    __extends(PendingModifiedValues, _super);
    function PendingModifiedValues() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PendingModifiedValues.prototype, "allocatedStorage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PendingModifiedValues.prototype, "backupRetentionPeriod", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PendingModifiedValues.prototype, "caCertificateIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PendingModifiedValues.prototype, "dbInstanceClass", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PendingModifiedValues.prototype, "dbInstanceIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PendingModifiedValues.prototype, "dbSubnetGroupName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PendingModifiedValues.prototype, "engineVersion", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], PendingModifiedValues.prototype, "iamDatabaseAuthenticationEnabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PendingModifiedValues.prototype, "iops", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PendingModifiedValues.prototype, "licenseModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PendingModifiedValues.prototype, "masterUserPassword", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], PendingModifiedValues.prototype, "multiAz", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PendingCloudwatchLogsExports)
    ], PendingModifiedValues.prototype, "pendingCloudwatchLogsExports", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PendingModifiedValues.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: ProcessorFeature }),
        __metadata("design:type", Array)
    ], PendingModifiedValues.prototype, "processorFeatures", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PendingModifiedValues.prototype, "storageType", void 0);
    return PendingModifiedValues;
}(SpeakeasyBase));
export { PendingModifiedValues };
