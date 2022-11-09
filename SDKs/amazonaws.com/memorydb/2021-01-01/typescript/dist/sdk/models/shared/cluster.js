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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AzStatusEnum } from "./azstatusenum";
import { Endpoint } from "./endpoint";
import { ClusterPendingUpdates } from "./clusterpendingupdates";
// Cluster
/**
 * Contains all of the attributes of a specific cluster.
**/
var Cluster = /** @class */ (function (_super) {
    __extends(Cluster, _super);
    function Cluster() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ACLName" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "aclName", void 0);
    __decorate([
        Metadata({ data: "json, name=ARN" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "arn", void 0);
    __decorate([
        Metadata({ data: "json, name=AutoMinorVersionUpgrade" }),
        __metadata("design:type", Boolean)
    ], Cluster.prototype, "autoMinorVersionUpgrade", void 0);
    __decorate([
        Metadata({ data: "json, name=AvailabilityMode" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "availabilityMode", void 0);
    __decorate([
        Metadata({ data: "json, name=ClusterEndpoint" }),
        __metadata("design:type", Endpoint)
    ], Cluster.prototype, "clusterEndpoint", void 0);
    __decorate([
        Metadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=EnginePatchVersion" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "enginePatchVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=EngineVersion" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "engineVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=KmsKeyId" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "kmsKeyId", void 0);
    __decorate([
        Metadata({ data: "json, name=MaintenanceWindow" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "maintenanceWindow", void 0);
    __decorate([
        Metadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=NodeType" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "nodeType", void 0);
    __decorate([
        Metadata({ data: "json, name=NumberOfShards" }),
        __metadata("design:type", Number)
    ], Cluster.prototype, "numberOfShards", void 0);
    __decorate([
        Metadata({ data: "json, name=ParameterGroupName" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "parameterGroupName", void 0);
    __decorate([
        Metadata({ data: "json, name=ParameterGroupStatus" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "parameterGroupStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=PendingUpdates" }),
        __metadata("design:type", ClusterPendingUpdates)
    ], Cluster.prototype, "pendingUpdates", void 0);
    __decorate([
        Metadata({ data: "json, name=SecurityGroups", elemType: shared.SecurityGroupMembership }),
        __metadata("design:type", Array)
    ], Cluster.prototype, "securityGroups", void 0);
    __decorate([
        Metadata({ data: "json, name=Shards", elemType: shared.Shard }),
        __metadata("design:type", Array)
    ], Cluster.prototype, "shards", void 0);
    __decorate([
        Metadata({ data: "json, name=SnapshotRetentionLimit" }),
        __metadata("design:type", Number)
    ], Cluster.prototype, "snapshotRetentionLimit", void 0);
    __decorate([
        Metadata({ data: "json, name=SnapshotWindow" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "snapshotWindow", void 0);
    __decorate([
        Metadata({ data: "json, name=SnsTopicArn" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "snsTopicArn", void 0);
    __decorate([
        Metadata({ data: "json, name=SnsTopicStatus" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "snsTopicStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=SubnetGroupName" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "subnetGroupName", void 0);
    __decorate([
        Metadata({ data: "json, name=TLSEnabled" }),
        __metadata("design:type", Boolean)
    ], Cluster.prototype, "tlsEnabled", void 0);
    return Cluster;
}(SpeakeasyBase));
export { Cluster };
