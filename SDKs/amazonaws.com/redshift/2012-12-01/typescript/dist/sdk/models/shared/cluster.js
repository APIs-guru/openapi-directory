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
import { AquaConfiguration } from "./aquaconfiguration";
import { ClusterNode } from "./clusternode";
import { ClusterParameterGroupStatus } from "./clusterparametergroupstatus";
import { ClusterSecurityGroupMembership } from "./clustersecuritygroupmembership";
import { ClusterSnapshotCopyStatus } from "./clustersnapshotcopystatus";
import { DataTransferProgress } from "./datatransferprogress";
import { DeferredMaintenanceWindow } from "./deferredmaintenancewindow";
import { ElasticIpStatus } from "./elasticipstatus";
import { Endpoint } from "./endpoint";
import { HsmStatus } from "./hsmstatus";
import { ClusterIamRole } from "./clusteriamrole";
import { PendingModifiedValues } from "./pendingmodifiedvalues";
import { ResizeInfo } from "./resizeinfo";
import { RestoreStatus } from "./restorestatus";
import { ScheduleStateEnum } from "./schedulestateenum";
import { Tag } from "./tag";
import { VpcSecurityGroupMembership } from "./vpcsecuritygroupmembership";
// Cluster
/**
 * Describes a cluster.
**/
var Cluster = /** @class */ (function (_super) {
    __extends(Cluster, _super);
    function Cluster() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], Cluster.prototype, "allowVersionUpgrade", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AquaConfiguration)
    ], Cluster.prototype, "aquaConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Cluster.prototype, "automatedSnapshotRetentionPeriod", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Cluster.prototype, "availabilityZone", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Cluster.prototype, "availabilityZoneRelocationStatus", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Cluster.prototype, "clusterAvailabilityStatus", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], Cluster.prototype, "clusterCreateTime", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Cluster.prototype, "clusterIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Cluster.prototype, "clusterNamespaceArn", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: ClusterNode }),
        __metadata("design:type", Array)
    ], Cluster.prototype, "clusterNodes", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: ClusterParameterGroupStatus }),
        __metadata("design:type", Array)
    ], Cluster.prototype, "clusterParameterGroups", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Cluster.prototype, "clusterPublicKey", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Cluster.prototype, "clusterRevisionNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: ClusterSecurityGroupMembership }),
        __metadata("design:type", Array)
    ], Cluster.prototype, "clusterSecurityGroups", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClusterSnapshotCopyStatus)
    ], Cluster.prototype, "clusterSnapshotCopyStatus", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Cluster.prototype, "clusterStatus", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Cluster.prototype, "clusterSubnetGroupName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Cluster.prototype, "clusterVersion", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Cluster.prototype, "dbName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataTransferProgress)
    ], Cluster.prototype, "dataTransferProgress", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DeferredMaintenanceWindow }),
        __metadata("design:type", Array)
    ], Cluster.prototype, "deferredMaintenanceWindows", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ElasticIpStatus)
    ], Cluster.prototype, "elasticIpStatus", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Cluster.prototype, "elasticResizeNumberOfNodeOptions", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], Cluster.prototype, "encrypted", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Endpoint)
    ], Cluster.prototype, "endpoint", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], Cluster.prototype, "enhancedVpcRouting", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], Cluster.prototype, "expectedNextSnapshotScheduleTime", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Cluster.prototype, "expectedNextSnapshotScheduleTimeStatus", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HsmStatus)
    ], Cluster.prototype, "hsmStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: ClusterIamRole }),
        __metadata("design:type", Array)
    ], Cluster.prototype, "iamRoles", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Cluster.prototype, "kmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Cluster.prototype, "maintenanceTrackName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Cluster.prototype, "manualSnapshotRetentionPeriod", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Cluster.prototype, "masterUsername", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Cluster.prototype, "modifyStatus", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], Cluster.prototype, "nextMaintenanceWindowStartTime", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Cluster.prototype, "nodeType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Cluster.prototype, "numberOfNodes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], Cluster.prototype, "pendingActions", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PendingModifiedValues)
    ], Cluster.prototype, "pendingModifiedValues", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Cluster.prototype, "preferredMaintenanceWindow", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], Cluster.prototype, "publiclyAccessible", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResizeInfo)
    ], Cluster.prototype, "resizeInfo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RestoreStatus)
    ], Cluster.prototype, "restoreStatus", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Cluster.prototype, "snapshotScheduleIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Cluster.prototype, "snapshotScheduleState", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: Tag }),
        __metadata("design:type", Array)
    ], Cluster.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Cluster.prototype, "totalStorageCapacityInMegaBytes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Cluster.prototype, "vpcId", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: VpcSecurityGroupMembership }),
        __metadata("design:type", Array)
    ], Cluster.prototype, "vpcSecurityGroups", void 0);
    return Cluster;
}(SpeakeasyBase));
export { Cluster };
