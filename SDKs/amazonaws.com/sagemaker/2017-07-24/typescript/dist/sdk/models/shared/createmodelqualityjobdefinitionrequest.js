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
import { ModelQualityAppSpecification } from "./modelqualityappspecification";
import { ModelQualityBaselineConfig } from "./modelqualitybaselineconfig";
import { ModelQualityJobInput } from "./modelqualityjobinput";
import { MonitoringOutputConfig } from "./monitoringoutputconfig";
import { MonitoringNetworkConfig } from "./monitoringnetworkconfig";
import { MonitoringStoppingCondition } from "./monitoringstoppingcondition";
import { Tag } from "./tag";
var CreateModelQualityJobDefinitionRequest = /** @class */ (function (_super) {
    __extends(CreateModelQualityJobDefinitionRequest, _super);
    function CreateModelQualityJobDefinitionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JobDefinitionName" }),
        __metadata("design:type", String)
    ], CreateModelQualityJobDefinitionRequest.prototype, "jobDefinitionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JobResources" }),
        __metadata("design:type", MonitoringResources)
    ], CreateModelQualityJobDefinitionRequest.prototype, "jobResources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelQualityAppSpecification" }),
        __metadata("design:type", ModelQualityAppSpecification)
    ], CreateModelQualityJobDefinitionRequest.prototype, "modelQualityAppSpecification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelQualityBaselineConfig" }),
        __metadata("design:type", ModelQualityBaselineConfig)
    ], CreateModelQualityJobDefinitionRequest.prototype, "modelQualityBaselineConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelQualityJobInput" }),
        __metadata("design:type", ModelQualityJobInput)
    ], CreateModelQualityJobDefinitionRequest.prototype, "modelQualityJobInput", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelQualityJobOutputConfig" }),
        __metadata("design:type", MonitoringOutputConfig)
    ], CreateModelQualityJobDefinitionRequest.prototype, "modelQualityJobOutputConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkConfig" }),
        __metadata("design:type", MonitoringNetworkConfig)
    ], CreateModelQualityJobDefinitionRequest.prototype, "networkConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleArn" }),
        __metadata("design:type", String)
    ], CreateModelQualityJobDefinitionRequest.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StoppingCondition" }),
        __metadata("design:type", MonitoringStoppingCondition)
    ], CreateModelQualityJobDefinitionRequest.prototype, "stoppingCondition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], CreateModelQualityJobDefinitionRequest.prototype, "tags", void 0);
    return CreateModelQualityJobDefinitionRequest;
}(SpeakeasyBase));
export { CreateModelQualityJobDefinitionRequest };
