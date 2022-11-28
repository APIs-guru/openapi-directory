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
import { MonitoringBaselineConfig } from "./monitoringbaselineconfig";
import { MonitoringAppSpecification } from "./monitoringappspecification";
import { MonitoringInput } from "./monitoringinput";
import { MonitoringOutputConfig } from "./monitoringoutputconfig";
import { MonitoringResources } from "./monitoringresources";
import { NetworkConfig } from "./networkconfig";
import { MonitoringStoppingCondition } from "./monitoringstoppingcondition";
// MonitoringJobDefinition
/**
 * Defines the monitoring job.
**/
var MonitoringJobDefinition = /** @class */ (function (_super) {
    __extends(MonitoringJobDefinition, _super);
    function MonitoringJobDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BaselineConfig" }),
        __metadata("design:type", MonitoringBaselineConfig)
    ], MonitoringJobDefinition.prototype, "baselineConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Environment" }),
        __metadata("design:type", Map)
    ], MonitoringJobDefinition.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MonitoringAppSpecification" }),
        __metadata("design:type", MonitoringAppSpecification)
    ], MonitoringJobDefinition.prototype, "monitoringAppSpecification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MonitoringInputs", elemType: MonitoringInput }),
        __metadata("design:type", Array)
    ], MonitoringJobDefinition.prototype, "monitoringInputs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MonitoringOutputConfig" }),
        __metadata("design:type", MonitoringOutputConfig)
    ], MonitoringJobDefinition.prototype, "monitoringOutputConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MonitoringResources" }),
        __metadata("design:type", MonitoringResources)
    ], MonitoringJobDefinition.prototype, "monitoringResources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkConfig" }),
        __metadata("design:type", NetworkConfig)
    ], MonitoringJobDefinition.prototype, "networkConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleArn" }),
        __metadata("design:type", String)
    ], MonitoringJobDefinition.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StoppingCondition" }),
        __metadata("design:type", MonitoringStoppingCondition)
    ], MonitoringJobDefinition.prototype, "stoppingCondition", void 0);
    return MonitoringJobDefinition;
}(SpeakeasyBase));
export { MonitoringJobDefinition };
