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
import { AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails } from "./awsautoscalinglaunchconfigurationblockdevicemappingsdetails";
import { AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails } from "./awsautoscalinglaunchconfigurationinstancemonitoringdetails";
// AwsAutoScalingLaunchConfigurationDetails
/**
 * Details about a launch configuration.
**/
var AwsAutoScalingLaunchConfigurationDetails = /** @class */ (function (_super) {
    __extends(AwsAutoScalingLaunchConfigurationDetails, _super);
    function AwsAutoScalingLaunchConfigurationDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AssociatePublicIpAddress" }),
        __metadata("design:type", Boolean)
    ], AwsAutoScalingLaunchConfigurationDetails.prototype, "associatePublicIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BlockDeviceMappings", elemType: AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails }),
        __metadata("design:type", Array)
    ], AwsAutoScalingLaunchConfigurationDetails.prototype, "blockDeviceMappings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClassicLinkVpcId" }),
        __metadata("design:type", String)
    ], AwsAutoScalingLaunchConfigurationDetails.prototype, "classicLinkVpcId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClassicLinkVpcSecurityGroups" }),
        __metadata("design:type", Array)
    ], AwsAutoScalingLaunchConfigurationDetails.prototype, "classicLinkVpcSecurityGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedTime" }),
        __metadata("design:type", String)
    ], AwsAutoScalingLaunchConfigurationDetails.prototype, "createdTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EbsOptimized" }),
        __metadata("design:type", Boolean)
    ], AwsAutoScalingLaunchConfigurationDetails.prototype, "ebsOptimized", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IamInstanceProfile" }),
        __metadata("design:type", String)
    ], AwsAutoScalingLaunchConfigurationDetails.prototype, "iamInstanceProfile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageId" }),
        __metadata("design:type", String)
    ], AwsAutoScalingLaunchConfigurationDetails.prototype, "imageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceMonitoring" }),
        __metadata("design:type", AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails)
    ], AwsAutoScalingLaunchConfigurationDetails.prototype, "instanceMonitoring", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceType" }),
        __metadata("design:type", String)
    ], AwsAutoScalingLaunchConfigurationDetails.prototype, "instanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KernelId" }),
        __metadata("design:type", String)
    ], AwsAutoScalingLaunchConfigurationDetails.prototype, "kernelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeyName" }),
        __metadata("design:type", String)
    ], AwsAutoScalingLaunchConfigurationDetails.prototype, "keyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LaunchConfigurationName" }),
        __metadata("design:type", String)
    ], AwsAutoScalingLaunchConfigurationDetails.prototype, "launchConfigurationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlacementTenancy" }),
        __metadata("design:type", String)
    ], AwsAutoScalingLaunchConfigurationDetails.prototype, "placementTenancy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RamdiskId" }),
        __metadata("design:type", String)
    ], AwsAutoScalingLaunchConfigurationDetails.prototype, "ramdiskId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecurityGroups" }),
        __metadata("design:type", Array)
    ], AwsAutoScalingLaunchConfigurationDetails.prototype, "securityGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SpotPrice" }),
        __metadata("design:type", String)
    ], AwsAutoScalingLaunchConfigurationDetails.prototype, "spotPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserData" }),
        __metadata("design:type", String)
    ], AwsAutoScalingLaunchConfigurationDetails.prototype, "userData", void 0);
    return AwsAutoScalingLaunchConfigurationDetails;
}(SpeakeasyBase));
export { AwsAutoScalingLaunchConfigurationDetails };
