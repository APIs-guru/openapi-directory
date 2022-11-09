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
// ClusterConfiguration
/**
 * A list of cluster configuration options.
**/
var ClusterConfiguration = /** @class */ (function (_super) {
    __extends(ClusterConfiguration, _super);
    function ClusterConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ClusterConfiguration.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=EngineVersion" }),
        __metadata("design:type", String)
    ], ClusterConfiguration.prototype, "engineVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=MaintenanceWindow" }),
        __metadata("design:type", String)
    ], ClusterConfiguration.prototype, "maintenanceWindow", void 0);
    __decorate([
        Metadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ClusterConfiguration.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=NodeType" }),
        __metadata("design:type", String)
    ], ClusterConfiguration.prototype, "nodeType", void 0);
    __decorate([
        Metadata({ data: "json, name=NumShards" }),
        __metadata("design:type", Number)
    ], ClusterConfiguration.prototype, "numShards", void 0);
    __decorate([
        Metadata({ data: "json, name=ParameterGroupName" }),
        __metadata("design:type", String)
    ], ClusterConfiguration.prototype, "parameterGroupName", void 0);
    __decorate([
        Metadata({ data: "json, name=Port" }),
        __metadata("design:type", Number)
    ], ClusterConfiguration.prototype, "port", void 0);
    __decorate([
        Metadata({ data: "json, name=Shards", elemType: shared.ShardDetail }),
        __metadata("design:type", Array)
    ], ClusterConfiguration.prototype, "shards", void 0);
    __decorate([
        Metadata({ data: "json, name=SnapshotRetentionLimit" }),
        __metadata("design:type", Number)
    ], ClusterConfiguration.prototype, "snapshotRetentionLimit", void 0);
    __decorate([
        Metadata({ data: "json, name=SnapshotWindow" }),
        __metadata("design:type", String)
    ], ClusterConfiguration.prototype, "snapshotWindow", void 0);
    __decorate([
        Metadata({ data: "json, name=SubnetGroupName" }),
        __metadata("design:type", String)
    ], ClusterConfiguration.prototype, "subnetGroupName", void 0);
    __decorate([
        Metadata({ data: "json, name=TopicArn" }),
        __metadata("design:type", String)
    ], ClusterConfiguration.prototype, "topicArn", void 0);
    __decorate([
        Metadata({ data: "json, name=VpcId" }),
        __metadata("design:type", String)
    ], ClusterConfiguration.prototype, "vpcId", void 0);
    return ClusterConfiguration;
}(SpeakeasyBase));
export { ClusterConfiguration };
