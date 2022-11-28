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
import { AwsRedshiftClusterClusterNode } from "./awsredshiftclusterclusternode";
import { AwsRedshiftClusterClusterParameterGroup } from "./awsredshiftclusterclusterparametergroup";
import { AwsRedshiftClusterClusterSecurityGroup } from "./awsredshiftclusterclustersecuritygroup";
import { AwsRedshiftClusterClusterSnapshotCopyStatus } from "./awsredshiftclusterclustersnapshotcopystatus";
import { AwsRedshiftClusterDeferredMaintenanceWindow } from "./awsredshiftclusterdeferredmaintenancewindow";
import { AwsRedshiftClusterElasticIpStatus } from "./awsredshiftclusterelasticipstatus";
import { AwsRedshiftClusterEndpoint } from "./awsredshiftclusterendpoint";
import { AwsRedshiftClusterHsmStatus } from "./awsredshiftclusterhsmstatus";
import { AwsRedshiftClusterIamRole } from "./awsredshiftclusteriamrole";
import { AwsRedshiftClusterPendingModifiedValues } from "./awsredshiftclusterpendingmodifiedvalues";
import { AwsRedshiftClusterResizeInfo } from "./awsredshiftclusterresizeinfo";
import { AwsRedshiftClusterRestoreStatus } from "./awsredshiftclusterrestorestatus";
import { AwsRedshiftClusterVpcSecurityGroup } from "./awsredshiftclustervpcsecuritygroup";
// AwsRedshiftClusterDetails
/**
 * Details about an Amazon Redshift cluster.
**/
var AwsRedshiftClusterDetails = /** @class */ (function (_super) {
    __extends(AwsRedshiftClusterDetails, _super);
    function AwsRedshiftClusterDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllowVersionUpgrade" }),
        __metadata("design:type", Boolean)
    ], AwsRedshiftClusterDetails.prototype, "allowVersionUpgrade", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutomatedSnapshotRetentionPeriod" }),
        __metadata("design:type", Number)
    ], AwsRedshiftClusterDetails.prototype, "automatedSnapshotRetentionPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AvailabilityZone" }),
        __metadata("design:type", String)
    ], AwsRedshiftClusterDetails.prototype, "availabilityZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClusterAvailabilityStatus" }),
        __metadata("design:type", String)
    ], AwsRedshiftClusterDetails.prototype, "clusterAvailabilityStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClusterCreateTime" }),
        __metadata("design:type", String)
    ], AwsRedshiftClusterDetails.prototype, "clusterCreateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClusterIdentifier" }),
        __metadata("design:type", String)
    ], AwsRedshiftClusterDetails.prototype, "clusterIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClusterNodes", elemType: AwsRedshiftClusterClusterNode }),
        __metadata("design:type", Array)
    ], AwsRedshiftClusterDetails.prototype, "clusterNodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClusterParameterGroups", elemType: AwsRedshiftClusterClusterParameterGroup }),
        __metadata("design:type", Array)
    ], AwsRedshiftClusterDetails.prototype, "clusterParameterGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClusterPublicKey" }),
        __metadata("design:type", String)
    ], AwsRedshiftClusterDetails.prototype, "clusterPublicKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClusterRevisionNumber" }),
        __metadata("design:type", String)
    ], AwsRedshiftClusterDetails.prototype, "clusterRevisionNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClusterSecurityGroups", elemType: AwsRedshiftClusterClusterSecurityGroup }),
        __metadata("design:type", Array)
    ], AwsRedshiftClusterDetails.prototype, "clusterSecurityGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClusterSnapshotCopyStatus" }),
        __metadata("design:type", AwsRedshiftClusterClusterSnapshotCopyStatus)
    ], AwsRedshiftClusterDetails.prototype, "clusterSnapshotCopyStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClusterStatus" }),
        __metadata("design:type", String)
    ], AwsRedshiftClusterDetails.prototype, "clusterStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClusterSubnetGroupName" }),
        __metadata("design:type", String)
    ], AwsRedshiftClusterDetails.prototype, "clusterSubnetGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClusterVersion" }),
        __metadata("design:type", String)
    ], AwsRedshiftClusterDetails.prototype, "clusterVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DBName" }),
        __metadata("design:type", String)
    ], AwsRedshiftClusterDetails.prototype, "dbName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeferredMaintenanceWindows", elemType: AwsRedshiftClusterDeferredMaintenanceWindow }),
        __metadata("design:type", Array)
    ], AwsRedshiftClusterDetails.prototype, "deferredMaintenanceWindows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ElasticIpStatus" }),
        __metadata("design:type", AwsRedshiftClusterElasticIpStatus)
    ], AwsRedshiftClusterDetails.prototype, "elasticIpStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ElasticResizeNumberOfNodeOptions" }),
        __metadata("design:type", String)
    ], AwsRedshiftClusterDetails.prototype, "elasticResizeNumberOfNodeOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Encrypted" }),
        __metadata("design:type", Boolean)
    ], AwsRedshiftClusterDetails.prototype, "encrypted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Endpoint" }),
        __metadata("design:type", AwsRedshiftClusterEndpoint)
    ], AwsRedshiftClusterDetails.prototype, "endpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnhancedVpcRouting" }),
        __metadata("design:type", Boolean)
    ], AwsRedshiftClusterDetails.prototype, "enhancedVpcRouting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpectedNextSnapshotScheduleTime" }),
        __metadata("design:type", String)
    ], AwsRedshiftClusterDetails.prototype, "expectedNextSnapshotScheduleTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpectedNextSnapshotScheduleTimeStatus" }),
        __metadata("design:type", String)
    ], AwsRedshiftClusterDetails.prototype, "expectedNextSnapshotScheduleTimeStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HsmStatus" }),
        __metadata("design:type", AwsRedshiftClusterHsmStatus)
    ], AwsRedshiftClusterDetails.prototype, "hsmStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IamRoles", elemType: AwsRedshiftClusterIamRole }),
        __metadata("design:type", Array)
    ], AwsRedshiftClusterDetails.prototype, "iamRoles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KmsKeyId" }),
        __metadata("design:type", String)
    ], AwsRedshiftClusterDetails.prototype, "kmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaintenanceTrackName" }),
        __metadata("design:type", String)
    ], AwsRedshiftClusterDetails.prototype, "maintenanceTrackName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ManualSnapshotRetentionPeriod" }),
        __metadata("design:type", Number)
    ], AwsRedshiftClusterDetails.prototype, "manualSnapshotRetentionPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MasterUsername" }),
        __metadata("design:type", String)
    ], AwsRedshiftClusterDetails.prototype, "masterUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NextMaintenanceWindowStartTime" }),
        __metadata("design:type", String)
    ], AwsRedshiftClusterDetails.prototype, "nextMaintenanceWindowStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NodeType" }),
        __metadata("design:type", String)
    ], AwsRedshiftClusterDetails.prototype, "nodeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberOfNodes" }),
        __metadata("design:type", Number)
    ], AwsRedshiftClusterDetails.prototype, "numberOfNodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PendingActions" }),
        __metadata("design:type", Array)
    ], AwsRedshiftClusterDetails.prototype, "pendingActions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PendingModifiedValues" }),
        __metadata("design:type", AwsRedshiftClusterPendingModifiedValues)
    ], AwsRedshiftClusterDetails.prototype, "pendingModifiedValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreferredMaintenanceWindow" }),
        __metadata("design:type", String)
    ], AwsRedshiftClusterDetails.prototype, "preferredMaintenanceWindow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PubliclyAccessible" }),
        __metadata("design:type", Boolean)
    ], AwsRedshiftClusterDetails.prototype, "publiclyAccessible", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResizeInfo" }),
        __metadata("design:type", AwsRedshiftClusterResizeInfo)
    ], AwsRedshiftClusterDetails.prototype, "resizeInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RestoreStatus" }),
        __metadata("design:type", AwsRedshiftClusterRestoreStatus)
    ], AwsRedshiftClusterDetails.prototype, "restoreStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SnapshotScheduleIdentifier" }),
        __metadata("design:type", String)
    ], AwsRedshiftClusterDetails.prototype, "snapshotScheduleIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SnapshotScheduleState" }),
        __metadata("design:type", String)
    ], AwsRedshiftClusterDetails.prototype, "snapshotScheduleState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VpcId" }),
        __metadata("design:type", String)
    ], AwsRedshiftClusterDetails.prototype, "vpcId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VpcSecurityGroups", elemType: AwsRedshiftClusterVpcSecurityGroup }),
        __metadata("design:type", Array)
    ], AwsRedshiftClusterDetails.prototype, "vpcSecurityGroups", void 0);
    return AwsRedshiftClusterDetails;
}(SpeakeasyBase));
export { AwsRedshiftClusterDetails };
