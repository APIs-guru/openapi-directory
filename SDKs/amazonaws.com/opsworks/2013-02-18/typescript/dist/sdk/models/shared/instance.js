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
import { ArchitectureEnum } from "./architectureenum";
import { AutoScalingTypeEnum } from "./autoscalingtypeenum";
import { BlockDeviceMapping } from "./blockdevicemapping";
import { ReportedOs } from "./reportedos";
import { RootDeviceTypeEnum } from "./rootdevicetypeenum";
import { VirtualizationTypeEnum } from "./virtualizationtypeenum";
// Instance
/**
 * Describes an instance.
**/
var Instance = /** @class */ (function (_super) {
    __extends(Instance, _super);
    function Instance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AgentVersion" }),
        __metadata("design:type", String)
    ], Instance.prototype, "agentVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AmiId" }),
        __metadata("design:type", String)
    ], Instance.prototype, "amiId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Architecture" }),
        __metadata("design:type", String)
    ], Instance.prototype, "architecture", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Arn" }),
        __metadata("design:type", String)
    ], Instance.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoScalingType" }),
        __metadata("design:type", String)
    ], Instance.prototype, "autoScalingType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AvailabilityZone" }),
        __metadata("design:type", String)
    ], Instance.prototype, "availabilityZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BlockDeviceMappings", elemType: BlockDeviceMapping }),
        __metadata("design:type", Array)
    ], Instance.prototype, "blockDeviceMappings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedAt" }),
        __metadata("design:type", String)
    ], Instance.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EbsOptimized" }),
        __metadata("design:type", Boolean)
    ], Instance.prototype, "ebsOptimized", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Ec2InstanceId" }),
        __metadata("design:type", String)
    ], Instance.prototype, "ec2InstanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EcsClusterArn" }),
        __metadata("design:type", String)
    ], Instance.prototype, "ecsClusterArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EcsContainerInstanceArn" }),
        __metadata("design:type", String)
    ], Instance.prototype, "ecsContainerInstanceArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ElasticIp" }),
        __metadata("design:type", String)
    ], Instance.prototype, "elasticIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Hostname" }),
        __metadata("design:type", String)
    ], Instance.prototype, "hostname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InfrastructureClass" }),
        __metadata("design:type", String)
    ], Instance.prototype, "infrastructureClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstallUpdatesOnBoot" }),
        __metadata("design:type", Boolean)
    ], Instance.prototype, "installUpdatesOnBoot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceId" }),
        __metadata("design:type", String)
    ], Instance.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceProfileArn" }),
        __metadata("design:type", String)
    ], Instance.prototype, "instanceProfileArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceType" }),
        __metadata("design:type", String)
    ], Instance.prototype, "instanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastServiceErrorId" }),
        __metadata("design:type", String)
    ], Instance.prototype, "lastServiceErrorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LayerIds" }),
        __metadata("design:type", Array)
    ], Instance.prototype, "layerIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Os" }),
        __metadata("design:type", String)
    ], Instance.prototype, "os", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Platform" }),
        __metadata("design:type", String)
    ], Instance.prototype, "platform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PrivateDns" }),
        __metadata("design:type", String)
    ], Instance.prototype, "privateDns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PrivateIp" }),
        __metadata("design:type", String)
    ], Instance.prototype, "privateIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PublicDns" }),
        __metadata("design:type", String)
    ], Instance.prototype, "publicDns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PublicIp" }),
        __metadata("design:type", String)
    ], Instance.prototype, "publicIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RegisteredBy" }),
        __metadata("design:type", String)
    ], Instance.prototype, "registeredBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReportedAgentVersion" }),
        __metadata("design:type", String)
    ], Instance.prototype, "reportedAgentVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReportedOs" }),
        __metadata("design:type", ReportedOs)
    ], Instance.prototype, "reportedOs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RootDeviceType" }),
        __metadata("design:type", String)
    ], Instance.prototype, "rootDeviceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RootDeviceVolumeId" }),
        __metadata("design:type", String)
    ], Instance.prototype, "rootDeviceVolumeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" }),
        __metadata("design:type", Array)
    ], Instance.prototype, "securityGroupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SshHostDsaKeyFingerprint" }),
        __metadata("design:type", String)
    ], Instance.prototype, "sshHostDsaKeyFingerprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SshHostRsaKeyFingerprint" }),
        __metadata("design:type", String)
    ], Instance.prototype, "sshHostRsaKeyFingerprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SshKeyName" }),
        __metadata("design:type", String)
    ], Instance.prototype, "sshKeyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StackId" }),
        __metadata("design:type", String)
    ], Instance.prototype, "stackId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], Instance.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubnetId" }),
        __metadata("design:type", String)
    ], Instance.prototype, "subnetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tenancy" }),
        __metadata("design:type", String)
    ], Instance.prototype, "tenancy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VirtualizationType" }),
        __metadata("design:type", String)
    ], Instance.prototype, "virtualizationType", void 0);
    return Instance;
}(SpeakeasyBase));
export { Instance };
