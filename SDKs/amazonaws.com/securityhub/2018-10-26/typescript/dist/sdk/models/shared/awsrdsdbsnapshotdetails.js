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
import { AwsRdsDbProcessorFeature } from "./awsrdsdbprocessorfeature";
// AwsRdsDbSnapshotDetails
/**
 * Provides details about an Amazon RDS DB cluster snapshot.
**/
var AwsRdsDbSnapshotDetails = /** @class */ (function (_super) {
    __extends(AwsRdsDbSnapshotDetails, _super);
    function AwsRdsDbSnapshotDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllocatedStorage" }),
        __metadata("design:type", Number)
    ], AwsRdsDbSnapshotDetails.prototype, "allocatedStorage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AvailabilityZone" }),
        __metadata("design:type", String)
    ], AwsRdsDbSnapshotDetails.prototype, "availabilityZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DbInstanceIdentifier" }),
        __metadata("design:type", String)
    ], AwsRdsDbSnapshotDetails.prototype, "dbInstanceIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DbSnapshotIdentifier" }),
        __metadata("design:type", String)
    ], AwsRdsDbSnapshotDetails.prototype, "dbSnapshotIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DbiResourceId" }),
        __metadata("design:type", String)
    ], AwsRdsDbSnapshotDetails.prototype, "dbiResourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Encrypted" }),
        __metadata("design:type", Boolean)
    ], AwsRdsDbSnapshotDetails.prototype, "encrypted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Engine" }),
        __metadata("design:type", String)
    ], AwsRdsDbSnapshotDetails.prototype, "engine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EngineVersion" }),
        __metadata("design:type", String)
    ], AwsRdsDbSnapshotDetails.prototype, "engineVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IamDatabaseAuthenticationEnabled" }),
        __metadata("design:type", Boolean)
    ], AwsRdsDbSnapshotDetails.prototype, "iamDatabaseAuthenticationEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceCreateTime" }),
        __metadata("design:type", String)
    ], AwsRdsDbSnapshotDetails.prototype, "instanceCreateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Iops" }),
        __metadata("design:type", Number)
    ], AwsRdsDbSnapshotDetails.prototype, "iops", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KmsKeyId" }),
        __metadata("design:type", String)
    ], AwsRdsDbSnapshotDetails.prototype, "kmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LicenseModel" }),
        __metadata("design:type", String)
    ], AwsRdsDbSnapshotDetails.prototype, "licenseModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MasterUsername" }),
        __metadata("design:type", String)
    ], AwsRdsDbSnapshotDetails.prototype, "masterUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OptionGroupName" }),
        __metadata("design:type", String)
    ], AwsRdsDbSnapshotDetails.prototype, "optionGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PercentProgress" }),
        __metadata("design:type", Number)
    ], AwsRdsDbSnapshotDetails.prototype, "percentProgress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Port" }),
        __metadata("design:type", Number)
    ], AwsRdsDbSnapshotDetails.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProcessorFeatures", elemType: AwsRdsDbProcessorFeature }),
        __metadata("design:type", Array)
    ], AwsRdsDbSnapshotDetails.prototype, "processorFeatures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SnapshotCreateTime" }),
        __metadata("design:type", String)
    ], AwsRdsDbSnapshotDetails.prototype, "snapshotCreateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SnapshotType" }),
        __metadata("design:type", String)
    ], AwsRdsDbSnapshotDetails.prototype, "snapshotType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceDbSnapshotIdentifier" }),
        __metadata("design:type", String)
    ], AwsRdsDbSnapshotDetails.prototype, "sourceDbSnapshotIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceRegion" }),
        __metadata("design:type", String)
    ], AwsRdsDbSnapshotDetails.prototype, "sourceRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], AwsRdsDbSnapshotDetails.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StorageType" }),
        __metadata("design:type", String)
    ], AwsRdsDbSnapshotDetails.prototype, "storageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TdeCredentialArn" }),
        __metadata("design:type", String)
    ], AwsRdsDbSnapshotDetails.prototype, "tdeCredentialArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Timezone" }),
        __metadata("design:type", String)
    ], AwsRdsDbSnapshotDetails.prototype, "timezone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VpcId" }),
        __metadata("design:type", String)
    ], AwsRdsDbSnapshotDetails.prototype, "vpcId", void 0);
    return AwsRdsDbSnapshotDetails;
}(SpeakeasyBase));
export { AwsRdsDbSnapshotDetails };
