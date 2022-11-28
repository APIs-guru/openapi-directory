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
// AwsRdsDbClusterSnapshotDetails
/**
 * Information about an Amazon RDS DB cluster snapshot.
**/
var AwsRdsDbClusterSnapshotDetails = /** @class */ (function (_super) {
    __extends(AwsRdsDbClusterSnapshotDetails, _super);
    function AwsRdsDbClusterSnapshotDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllocatedStorage" }),
        __metadata("design:type", Number)
    ], AwsRdsDbClusterSnapshotDetails.prototype, "allocatedStorage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AvailabilityZones" }),
        __metadata("design:type", Array)
    ], AwsRdsDbClusterSnapshotDetails.prototype, "availabilityZones", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClusterCreateTime" }),
        __metadata("design:type", String)
    ], AwsRdsDbClusterSnapshotDetails.prototype, "clusterCreateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DbClusterIdentifier" }),
        __metadata("design:type", String)
    ], AwsRdsDbClusterSnapshotDetails.prototype, "dbClusterIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DbClusterSnapshotIdentifier" }),
        __metadata("design:type", String)
    ], AwsRdsDbClusterSnapshotDetails.prototype, "dbClusterSnapshotIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Engine" }),
        __metadata("design:type", String)
    ], AwsRdsDbClusterSnapshotDetails.prototype, "engine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EngineVersion" }),
        __metadata("design:type", String)
    ], AwsRdsDbClusterSnapshotDetails.prototype, "engineVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IamDatabaseAuthenticationEnabled" }),
        __metadata("design:type", Boolean)
    ], AwsRdsDbClusterSnapshotDetails.prototype, "iamDatabaseAuthenticationEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KmsKeyId" }),
        __metadata("design:type", String)
    ], AwsRdsDbClusterSnapshotDetails.prototype, "kmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LicenseModel" }),
        __metadata("design:type", String)
    ], AwsRdsDbClusterSnapshotDetails.prototype, "licenseModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MasterUsername" }),
        __metadata("design:type", String)
    ], AwsRdsDbClusterSnapshotDetails.prototype, "masterUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PercentProgress" }),
        __metadata("design:type", Number)
    ], AwsRdsDbClusterSnapshotDetails.prototype, "percentProgress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Port" }),
        __metadata("design:type", Number)
    ], AwsRdsDbClusterSnapshotDetails.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SnapshotCreateTime" }),
        __metadata("design:type", String)
    ], AwsRdsDbClusterSnapshotDetails.prototype, "snapshotCreateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SnapshotType" }),
        __metadata("design:type", String)
    ], AwsRdsDbClusterSnapshotDetails.prototype, "snapshotType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], AwsRdsDbClusterSnapshotDetails.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StorageEncrypted" }),
        __metadata("design:type", Boolean)
    ], AwsRdsDbClusterSnapshotDetails.prototype, "storageEncrypted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VpcId" }),
        __metadata("design:type", String)
    ], AwsRdsDbClusterSnapshotDetails.prototype, "vpcId", void 0);
    return AwsRdsDbClusterSnapshotDetails;
}(SpeakeasyBase));
export { AwsRdsDbClusterSnapshotDetails };
