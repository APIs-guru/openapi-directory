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
var CreateClusterRequest = /** @class */ (function (_super) {
    __extends(CreateClusterRequest, _super);
    function CreateClusterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ACLName" }),
        __metadata("design:type", String)
    ], CreateClusterRequest.prototype, "aclName", void 0);
    __decorate([
        Metadata({ data: "json, name=AutoMinorVersionUpgrade" }),
        __metadata("design:type", Boolean)
    ], CreateClusterRequest.prototype, "autoMinorVersionUpgrade", void 0);
    __decorate([
        Metadata({ data: "json, name=ClusterName" }),
        __metadata("design:type", String)
    ], CreateClusterRequest.prototype, "clusterName", void 0);
    __decorate([
        Metadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], CreateClusterRequest.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=EngineVersion" }),
        __metadata("design:type", String)
    ], CreateClusterRequest.prototype, "engineVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=KmsKeyId" }),
        __metadata("design:type", String)
    ], CreateClusterRequest.prototype, "kmsKeyId", void 0);
    __decorate([
        Metadata({ data: "json, name=MaintenanceWindow" }),
        __metadata("design:type", String)
    ], CreateClusterRequest.prototype, "maintenanceWindow", void 0);
    __decorate([
        Metadata({ data: "json, name=NodeType" }),
        __metadata("design:type", String)
    ], CreateClusterRequest.prototype, "nodeType", void 0);
    __decorate([
        Metadata({ data: "json, name=NumReplicasPerShard" }),
        __metadata("design:type", Number)
    ], CreateClusterRequest.prototype, "numReplicasPerShard", void 0);
    __decorate([
        Metadata({ data: "json, name=NumShards" }),
        __metadata("design:type", Number)
    ], CreateClusterRequest.prototype, "numShards", void 0);
    __decorate([
        Metadata({ data: "json, name=ParameterGroupName" }),
        __metadata("design:type", String)
    ], CreateClusterRequest.prototype, "parameterGroupName", void 0);
    __decorate([
        Metadata({ data: "json, name=Port" }),
        __metadata("design:type", Number)
    ], CreateClusterRequest.prototype, "port", void 0);
    __decorate([
        Metadata({ data: "json, name=SecurityGroupIds" }),
        __metadata("design:type", Array)
    ], CreateClusterRequest.prototype, "securityGroupIds", void 0);
    __decorate([
        Metadata({ data: "json, name=SnapshotArns" }),
        __metadata("design:type", Array)
    ], CreateClusterRequest.prototype, "snapshotArns", void 0);
    __decorate([
        Metadata({ data: "json, name=SnapshotName" }),
        __metadata("design:type", String)
    ], CreateClusterRequest.prototype, "snapshotName", void 0);
    __decorate([
        Metadata({ data: "json, name=SnapshotRetentionLimit" }),
        __metadata("design:type", Number)
    ], CreateClusterRequest.prototype, "snapshotRetentionLimit", void 0);
    __decorate([
        Metadata({ data: "json, name=SnapshotWindow" }),
        __metadata("design:type", String)
    ], CreateClusterRequest.prototype, "snapshotWindow", void 0);
    __decorate([
        Metadata({ data: "json, name=SnsTopicArn" }),
        __metadata("design:type", String)
    ], CreateClusterRequest.prototype, "snsTopicArn", void 0);
    __decorate([
        Metadata({ data: "json, name=SubnetGroupName" }),
        __metadata("design:type", String)
    ], CreateClusterRequest.prototype, "subnetGroupName", void 0);
    __decorate([
        Metadata({ data: "json, name=TLSEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateClusterRequest.prototype, "tlsEnabled", void 0);
    __decorate([
        Metadata({ data: "json, name=Tags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], CreateClusterRequest.prototype, "tags", void 0);
    return CreateClusterRequest;
}(SpeakeasyBase));
export { CreateClusterRequest };
