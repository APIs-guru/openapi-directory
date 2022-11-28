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
import { AwsEcsServiceCapacityProviderStrategyDetails } from "./awsecsservicecapacityproviderstrategydetails";
import { AwsEcsServiceDeploymentConfigurationDetails } from "./awsecsservicedeploymentconfigurationdetails";
import { AwsEcsServiceDeploymentControllerDetails } from "./awsecsservicedeploymentcontrollerdetails";
import { AwsEcsServiceLoadBalancersDetails } from "./awsecsserviceloadbalancersdetails";
import { AwsEcsServiceNetworkConfigurationDetails } from "./awsecsservicenetworkconfigurationdetails";
import { AwsEcsServicePlacementConstraintsDetails } from "./awsecsserviceplacementconstraintsdetails";
import { AwsEcsServicePlacementStrategiesDetails } from "./awsecsserviceplacementstrategiesdetails";
import { AwsEcsServiceServiceRegistriesDetails } from "./awsecsserviceserviceregistriesdetails";
// AwsEcsServiceDetails
/**
 * Provides details about a service within an ECS cluster.
**/
var AwsEcsServiceDetails = /** @class */ (function (_super) {
    __extends(AwsEcsServiceDetails, _super);
    function AwsEcsServiceDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CapacityProviderStrategy", elemType: AwsEcsServiceCapacityProviderStrategyDetails }),
        __metadata("design:type", Array)
    ], AwsEcsServiceDetails.prototype, "capacityProviderStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Cluster" }),
        __metadata("design:type", String)
    ], AwsEcsServiceDetails.prototype, "cluster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeploymentConfiguration" }),
        __metadata("design:type", AwsEcsServiceDeploymentConfigurationDetails)
    ], AwsEcsServiceDetails.prototype, "deploymentConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeploymentController" }),
        __metadata("design:type", AwsEcsServiceDeploymentControllerDetails)
    ], AwsEcsServiceDetails.prototype, "deploymentController", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DesiredCount" }),
        __metadata("design:type", Number)
    ], AwsEcsServiceDetails.prototype, "desiredCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableEcsManagedTags" }),
        __metadata("design:type", Boolean)
    ], AwsEcsServiceDetails.prototype, "enableEcsManagedTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableExecuteCommand" }),
        __metadata("design:type", Boolean)
    ], AwsEcsServiceDetails.prototype, "enableExecuteCommand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HealthCheckGracePeriodSeconds" }),
        __metadata("design:type", Number)
    ], AwsEcsServiceDetails.prototype, "healthCheckGracePeriodSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LaunchType" }),
        __metadata("design:type", String)
    ], AwsEcsServiceDetails.prototype, "launchType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LoadBalancers", elemType: AwsEcsServiceLoadBalancersDetails }),
        __metadata("design:type", Array)
    ], AwsEcsServiceDetails.prototype, "loadBalancers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], AwsEcsServiceDetails.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkConfiguration" }),
        __metadata("design:type", AwsEcsServiceNetworkConfigurationDetails)
    ], AwsEcsServiceDetails.prototype, "networkConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlacementConstraints", elemType: AwsEcsServicePlacementConstraintsDetails }),
        __metadata("design:type", Array)
    ], AwsEcsServiceDetails.prototype, "placementConstraints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlacementStrategies", elemType: AwsEcsServicePlacementStrategiesDetails }),
        __metadata("design:type", Array)
    ], AwsEcsServiceDetails.prototype, "placementStrategies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlatformVersion" }),
        __metadata("design:type", String)
    ], AwsEcsServiceDetails.prototype, "platformVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PropagateTags" }),
        __metadata("design:type", String)
    ], AwsEcsServiceDetails.prototype, "propagateTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Role" }),
        __metadata("design:type", String)
    ], AwsEcsServiceDetails.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchedulingStrategy" }),
        __metadata("design:type", String)
    ], AwsEcsServiceDetails.prototype, "schedulingStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServiceArn" }),
        __metadata("design:type", String)
    ], AwsEcsServiceDetails.prototype, "serviceArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServiceName" }),
        __metadata("design:type", String)
    ], AwsEcsServiceDetails.prototype, "serviceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServiceRegistries", elemType: AwsEcsServiceServiceRegistriesDetails }),
        __metadata("design:type", Array)
    ], AwsEcsServiceDetails.prototype, "serviceRegistries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaskDefinition" }),
        __metadata("design:type", String)
    ], AwsEcsServiceDetails.prototype, "taskDefinition", void 0);
    return AwsEcsServiceDetails;
}(SpeakeasyBase));
export { AwsEcsServiceDetails };
