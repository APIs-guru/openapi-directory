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
import { RootDeviceTypeEnum } from "./rootdevicetypeenum";
var CreateInstanceRequest = /** @class */ (function (_super) {
    __extends(CreateInstanceRequest, _super);
    function CreateInstanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AgentVersion" }),
        __metadata("design:type", String)
    ], CreateInstanceRequest.prototype, "agentVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AmiId" }),
        __metadata("design:type", String)
    ], CreateInstanceRequest.prototype, "amiId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Architecture" }),
        __metadata("design:type", String)
    ], CreateInstanceRequest.prototype, "architecture", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoScalingType" }),
        __metadata("design:type", String)
    ], CreateInstanceRequest.prototype, "autoScalingType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AvailabilityZone" }),
        __metadata("design:type", String)
    ], CreateInstanceRequest.prototype, "availabilityZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BlockDeviceMappings", elemType: BlockDeviceMapping }),
        __metadata("design:type", Array)
    ], CreateInstanceRequest.prototype, "blockDeviceMappings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EbsOptimized" }),
        __metadata("design:type", Boolean)
    ], CreateInstanceRequest.prototype, "ebsOptimized", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Hostname" }),
        __metadata("design:type", String)
    ], CreateInstanceRequest.prototype, "hostname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstallUpdatesOnBoot" }),
        __metadata("design:type", Boolean)
    ], CreateInstanceRequest.prototype, "installUpdatesOnBoot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceType" }),
        __metadata("design:type", String)
    ], CreateInstanceRequest.prototype, "instanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LayerIds" }),
        __metadata("design:type", Array)
    ], CreateInstanceRequest.prototype, "layerIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Os" }),
        __metadata("design:type", String)
    ], CreateInstanceRequest.prototype, "os", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RootDeviceType" }),
        __metadata("design:type", String)
    ], CreateInstanceRequest.prototype, "rootDeviceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SshKeyName" }),
        __metadata("design:type", String)
    ], CreateInstanceRequest.prototype, "sshKeyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StackId" }),
        __metadata("design:type", String)
    ], CreateInstanceRequest.prototype, "stackId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubnetId" }),
        __metadata("design:type", String)
    ], CreateInstanceRequest.prototype, "subnetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tenancy" }),
        __metadata("design:type", String)
    ], CreateInstanceRequest.prototype, "tenancy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VirtualizationType" }),
        __metadata("design:type", String)
    ], CreateInstanceRequest.prototype, "virtualizationType", void 0);
    return CreateInstanceRequest;
}(SpeakeasyBase));
export { CreateInstanceRequest };
