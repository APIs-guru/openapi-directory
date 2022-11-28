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
import { ModelBiasAppSpecification } from "./modelbiasappspecification";
import { ModelBiasBaselineConfig } from "./modelbiasbaselineconfig";
import { ModelBiasJobInput } from "./modelbiasjobinput";
import { MonitoringOutputConfig } from "./monitoringoutputconfig";
import { MonitoringNetworkConfig } from "./monitoringnetworkconfig";
import { MonitoringStoppingCondition } from "./monitoringstoppingcondition";
var DescribeModelBiasJobDefinitionResponse = /** @class */ (function (_super) {
    __extends(DescribeModelBiasJobDefinitionResponse, _super);
    function DescribeModelBiasJobDefinitionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], DescribeModelBiasJobDefinitionResponse.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JobDefinitionArn" }),
        __metadata("design:type", String)
    ], DescribeModelBiasJobDefinitionResponse.prototype, "jobDefinitionArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JobDefinitionName" }),
        __metadata("design:type", String)
    ], DescribeModelBiasJobDefinitionResponse.prototype, "jobDefinitionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JobResources" }),
        __metadata("design:type", MonitoringResources)
    ], DescribeModelBiasJobDefinitionResponse.prototype, "jobResources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelBiasAppSpecification" }),
        __metadata("design:type", ModelBiasAppSpecification)
    ], DescribeModelBiasJobDefinitionResponse.prototype, "modelBiasAppSpecification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelBiasBaselineConfig" }),
        __metadata("design:type", ModelBiasBaselineConfig)
    ], DescribeModelBiasJobDefinitionResponse.prototype, "modelBiasBaselineConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelBiasJobInput" }),
        __metadata("design:type", ModelBiasJobInput)
    ], DescribeModelBiasJobDefinitionResponse.prototype, "modelBiasJobInput", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelBiasJobOutputConfig" }),
        __metadata("design:type", MonitoringOutputConfig)
    ], DescribeModelBiasJobDefinitionResponse.prototype, "modelBiasJobOutputConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkConfig" }),
        __metadata("design:type", MonitoringNetworkConfig)
    ], DescribeModelBiasJobDefinitionResponse.prototype, "networkConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleArn" }),
        __metadata("design:type", String)
    ], DescribeModelBiasJobDefinitionResponse.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StoppingCondition" }),
        __metadata("design:type", MonitoringStoppingCondition)
    ], DescribeModelBiasJobDefinitionResponse.prototype, "stoppingCondition", void 0);
    return DescribeModelBiasJobDefinitionResponse;
}(SpeakeasyBase));
export { DescribeModelBiasJobDefinitionResponse };
