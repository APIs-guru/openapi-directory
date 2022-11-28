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
import { AlgorithmSpecification } from "./algorithmspecification";
import { CheckpointConfig } from "./checkpointconfig";
import { DebugHookConfig } from "./debughookconfig";
import { DebugRuleConfiguration } from "./debugruleconfiguration";
import { ExperimentConfig } from "./experimentconfig";
import { Channel } from "./channel";
import { OutputDataConfig } from "./outputdataconfig";
import { ProfilerConfig } from "./profilerconfig";
import { ProfilerRuleConfiguration } from "./profilerruleconfiguration";
import { ResourceConfig } from "./resourceconfig";
import { RetryStrategy } from "./retrystrategy";
import { StoppingCondition } from "./stoppingcondition";
import { Tag } from "./tag";
import { TensorBoardOutputConfig } from "./tensorboardoutputconfig";
import { VpcConfig } from "./vpcconfig";
var CreateTrainingJobRequest = /** @class */ (function (_super) {
    __extends(CreateTrainingJobRequest, _super);
    function CreateTrainingJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AlgorithmSpecification" }),
        __metadata("design:type", AlgorithmSpecification)
    ], CreateTrainingJobRequest.prototype, "algorithmSpecification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CheckpointConfig" }),
        __metadata("design:type", CheckpointConfig)
    ], CreateTrainingJobRequest.prototype, "checkpointConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DebugHookConfig" }),
        __metadata("design:type", DebugHookConfig)
    ], CreateTrainingJobRequest.prototype, "debugHookConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DebugRuleConfigurations", elemType: DebugRuleConfiguration }),
        __metadata("design:type", Array)
    ], CreateTrainingJobRequest.prototype, "debugRuleConfigurations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableInterContainerTrafficEncryption" }),
        __metadata("design:type", Boolean)
    ], CreateTrainingJobRequest.prototype, "enableInterContainerTrafficEncryption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableManagedSpotTraining" }),
        __metadata("design:type", Boolean)
    ], CreateTrainingJobRequest.prototype, "enableManagedSpotTraining", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableNetworkIsolation" }),
        __metadata("design:type", Boolean)
    ], CreateTrainingJobRequest.prototype, "enableNetworkIsolation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Environment" }),
        __metadata("design:type", Map)
    ], CreateTrainingJobRequest.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExperimentConfig" }),
        __metadata("design:type", ExperimentConfig)
    ], CreateTrainingJobRequest.prototype, "experimentConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HyperParameters" }),
        __metadata("design:type", Map)
    ], CreateTrainingJobRequest.prototype, "hyperParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InputDataConfig", elemType: Channel }),
        __metadata("design:type", Array)
    ], CreateTrainingJobRequest.prototype, "inputDataConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutputDataConfig" }),
        __metadata("design:type", OutputDataConfig)
    ], CreateTrainingJobRequest.prototype, "outputDataConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProfilerConfig" }),
        __metadata("design:type", ProfilerConfig)
    ], CreateTrainingJobRequest.prototype, "profilerConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProfilerRuleConfigurations", elemType: ProfilerRuleConfiguration }),
        __metadata("design:type", Array)
    ], CreateTrainingJobRequest.prototype, "profilerRuleConfigurations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceConfig" }),
        __metadata("design:type", ResourceConfig)
    ], CreateTrainingJobRequest.prototype, "resourceConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RetryStrategy" }),
        __metadata("design:type", RetryStrategy)
    ], CreateTrainingJobRequest.prototype, "retryStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleArn" }),
        __metadata("design:type", String)
    ], CreateTrainingJobRequest.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StoppingCondition" }),
        __metadata("design:type", StoppingCondition)
    ], CreateTrainingJobRequest.prototype, "stoppingCondition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], CreateTrainingJobRequest.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TensorBoardOutputConfig" }),
        __metadata("design:type", TensorBoardOutputConfig)
    ], CreateTrainingJobRequest.prototype, "tensorBoardOutputConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrainingJobName" }),
        __metadata("design:type", String)
    ], CreateTrainingJobRequest.prototype, "trainingJobName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VpcConfig" }),
        __metadata("design:type", VpcConfig)
    ], CreateTrainingJobRequest.prototype, "vpcConfig", void 0);
    return CreateTrainingJobRequest;
}(SpeakeasyBase));
export { CreateTrainingJobRequest };
