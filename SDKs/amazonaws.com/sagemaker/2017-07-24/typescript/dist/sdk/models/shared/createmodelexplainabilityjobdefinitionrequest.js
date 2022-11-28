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
import { MonitoringResources } from "./monitoringresources";
import { ModelExplainabilityAppSpecification } from "./modelexplainabilityappspecification";
import { ModelExplainabilityBaselineConfig } from "./modelexplainabilitybaselineconfig";
import { ModelExplainabilityJobInput } from "./modelexplainabilityjobinput";
import { MonitoringOutputConfig } from "./monitoringoutputconfig";
import { MonitoringNetworkConfig } from "./monitoringnetworkconfig";
import { MonitoringStoppingCondition } from "./monitoringstoppingcondition";
import { Tag } from "./tag";
var CreateModelExplainabilityJobDefinitionRequest = /** @class */ (function (_super) {
    __extends(CreateModelExplainabilityJobDefinitionRequest, _super);
    function CreateModelExplainabilityJobDefinitionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JobDefinitionName" }),
        __metadata("design:type", String)
    ], CreateModelExplainabilityJobDefinitionRequest.prototype, "jobDefinitionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JobResources" }),
        __metadata("design:type", MonitoringResources)
    ], CreateModelExplainabilityJobDefinitionRequest.prototype, "jobResources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelExplainabilityAppSpecification" }),
        __metadata("design:type", ModelExplainabilityAppSpecification)
    ], CreateModelExplainabilityJobDefinitionRequest.prototype, "modelExplainabilityAppSpecification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelExplainabilityBaselineConfig" }),
        __metadata("design:type", ModelExplainabilityBaselineConfig)
    ], CreateModelExplainabilityJobDefinitionRequest.prototype, "modelExplainabilityBaselineConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelExplainabilityJobInput" }),
        __metadata("design:type", ModelExplainabilityJobInput)
    ], CreateModelExplainabilityJobDefinitionRequest.prototype, "modelExplainabilityJobInput", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelExplainabilityJobOutputConfig" }),
        __metadata("design:type", MonitoringOutputConfig)
    ], CreateModelExplainabilityJobDefinitionRequest.prototype, "modelExplainabilityJobOutputConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkConfig" }),
        __metadata("design:type", MonitoringNetworkConfig)
    ], CreateModelExplainabilityJobDefinitionRequest.prototype, "networkConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleArn" }),
        __metadata("design:type", String)
    ], CreateModelExplainabilityJobDefinitionRequest.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StoppingCondition" }),
        __metadata("design:type", MonitoringStoppingCondition)
    ], CreateModelExplainabilityJobDefinitionRequest.prototype, "stoppingCondition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], CreateModelExplainabilityJobDefinitionRequest.prototype, "tags", void 0);
    return CreateModelExplainabilityJobDefinitionRequest;
}(SpeakeasyBase));
export { CreateModelExplainabilityJobDefinitionRequest };
