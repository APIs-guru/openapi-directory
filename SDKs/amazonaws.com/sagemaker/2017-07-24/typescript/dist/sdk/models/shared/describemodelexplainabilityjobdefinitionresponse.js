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
var DescribeModelExplainabilityJobDefinitionResponse = /** @class */ (function (_super) {
    __extends(DescribeModelExplainabilityJobDefinitionResponse, _super);
    function DescribeModelExplainabilityJobDefinitionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], DescribeModelExplainabilityJobDefinitionResponse.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JobDefinitionArn" }),
        __metadata("design:type", String)
    ], DescribeModelExplainabilityJobDefinitionResponse.prototype, "jobDefinitionArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JobDefinitionName" }),
        __metadata("design:type", String)
    ], DescribeModelExplainabilityJobDefinitionResponse.prototype, "jobDefinitionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JobResources" }),
        __metadata("design:type", MonitoringResources)
    ], DescribeModelExplainabilityJobDefinitionResponse.prototype, "jobResources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelExplainabilityAppSpecification" }),
        __metadata("design:type", ModelExplainabilityAppSpecification)
    ], DescribeModelExplainabilityJobDefinitionResponse.prototype, "modelExplainabilityAppSpecification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelExplainabilityBaselineConfig" }),
        __metadata("design:type", ModelExplainabilityBaselineConfig)
    ], DescribeModelExplainabilityJobDefinitionResponse.prototype, "modelExplainabilityBaselineConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelExplainabilityJobInput" }),
        __metadata("design:type", ModelExplainabilityJobInput)
    ], DescribeModelExplainabilityJobDefinitionResponse.prototype, "modelExplainabilityJobInput", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelExplainabilityJobOutputConfig" }),
        __metadata("design:type", MonitoringOutputConfig)
    ], DescribeModelExplainabilityJobDefinitionResponse.prototype, "modelExplainabilityJobOutputConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkConfig" }),
        __metadata("design:type", MonitoringNetworkConfig)
    ], DescribeModelExplainabilityJobDefinitionResponse.prototype, "networkConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleArn" }),
        __metadata("design:type", String)
    ], DescribeModelExplainabilityJobDefinitionResponse.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StoppingCondition" }),
        __metadata("design:type", MonitoringStoppingCondition)
    ], DescribeModelExplainabilityJobDefinitionResponse.prototype, "stoppingCondition", void 0);
    return DescribeModelExplainabilityJobDefinitionResponse;
}(SpeakeasyBase));
export { DescribeModelExplainabilityJobDefinitionResponse };
