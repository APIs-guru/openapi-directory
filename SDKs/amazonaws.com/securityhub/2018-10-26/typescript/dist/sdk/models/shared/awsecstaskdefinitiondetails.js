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
import { AwsEcsTaskDefinitionContainerDefinitionsDetails } from "./awsecstaskdefinitioncontainerdefinitionsdetails";
import { AwsEcsTaskDefinitionInferenceAcceleratorsDetails } from "./awsecstaskdefinitioninferenceacceleratorsdetails";
import { AwsEcsTaskDefinitionPlacementConstraintsDetails } from "./awsecstaskdefinitionplacementconstraintsdetails";
import { AwsEcsTaskDefinitionProxyConfigurationDetails } from "./awsecstaskdefinitionproxyconfigurationdetails";
import { AwsEcsTaskDefinitionVolumesDetails } from "./awsecstaskdefinitionvolumesdetails";
// AwsEcsTaskDefinitionDetails
/**
 * details about a task definition. A task definition describes the container and volume definitions of an Amazon Elastic Container Service task.
**/
var AwsEcsTaskDefinitionDetails = /** @class */ (function (_super) {
    __extends(AwsEcsTaskDefinitionDetails, _super);
    function AwsEcsTaskDefinitionDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContainerDefinitions", elemType: AwsEcsTaskDefinitionContainerDefinitionsDetails }),
        __metadata("design:type", Array)
    ], AwsEcsTaskDefinitionDetails.prototype, "containerDefinitions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Cpu" }),
        __metadata("design:type", String)
    ], AwsEcsTaskDefinitionDetails.prototype, "cpu", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExecutionRoleArn" }),
        __metadata("design:type", String)
    ], AwsEcsTaskDefinitionDetails.prototype, "executionRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Family" }),
        __metadata("design:type", String)
    ], AwsEcsTaskDefinitionDetails.prototype, "family", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InferenceAccelerators", elemType: AwsEcsTaskDefinitionInferenceAcceleratorsDetails }),
        __metadata("design:type", Array)
    ], AwsEcsTaskDefinitionDetails.prototype, "inferenceAccelerators", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IpcMode" }),
        __metadata("design:type", String)
    ], AwsEcsTaskDefinitionDetails.prototype, "ipcMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Memory" }),
        __metadata("design:type", String)
    ], AwsEcsTaskDefinitionDetails.prototype, "memory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkMode" }),
        __metadata("design:type", String)
    ], AwsEcsTaskDefinitionDetails.prototype, "networkMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PidMode" }),
        __metadata("design:type", String)
    ], AwsEcsTaskDefinitionDetails.prototype, "pidMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlacementConstraints", elemType: AwsEcsTaskDefinitionPlacementConstraintsDetails }),
        __metadata("design:type", Array)
    ], AwsEcsTaskDefinitionDetails.prototype, "placementConstraints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProxyConfiguration" }),
        __metadata("design:type", AwsEcsTaskDefinitionProxyConfigurationDetails)
    ], AwsEcsTaskDefinitionDetails.prototype, "proxyConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequiresCompatibilities" }),
        __metadata("design:type", Array)
    ], AwsEcsTaskDefinitionDetails.prototype, "requiresCompatibilities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaskRoleArn" }),
        __metadata("design:type", String)
    ], AwsEcsTaskDefinitionDetails.prototype, "taskRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Volumes", elemType: AwsEcsTaskDefinitionVolumesDetails }),
        __metadata("design:type", Array)
    ], AwsEcsTaskDefinitionDetails.prototype, "volumes", void 0);
    return AwsEcsTaskDefinitionDetails;
}(SpeakeasyBase));
export { AwsEcsTaskDefinitionDetails };
