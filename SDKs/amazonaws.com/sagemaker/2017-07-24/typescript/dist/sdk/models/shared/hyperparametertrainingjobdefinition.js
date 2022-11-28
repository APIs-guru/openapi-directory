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
import { HyperParameterAlgorithmSpecification } from "./hyperparameteralgorithmspecification";
import { CheckpointConfig } from "./checkpointconfig";
import { ParameterRanges } from "./parameterranges";
import { Channel } from "./channel";
import { OutputDataConfig } from "./outputdataconfig";
import { ResourceConfig } from "./resourceconfig";
import { RetryStrategy } from "./retrystrategy";
import { StoppingCondition } from "./stoppingcondition";
import { HyperParameterTuningJobObjective } from "./hyperparametertuningjobobjective";
import { VpcConfig } from "./vpcconfig";
// HyperParameterTrainingJobDefinition
/**
 * Defines the training jobs launched by a hyperparameter tuning job.
**/
var HyperParameterTrainingJobDefinition = /** @class */ (function (_super) {
    __extends(HyperParameterTrainingJobDefinition, _super);
    function HyperParameterTrainingJobDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AlgorithmSpecification" }),
        __metadata("design:type", HyperParameterAlgorithmSpecification)
    ], HyperParameterTrainingJobDefinition.prototype, "algorithmSpecification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CheckpointConfig" }),
        __metadata("design:type", CheckpointConfig)
    ], HyperParameterTrainingJobDefinition.prototype, "checkpointConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefinitionName" }),
        __metadata("design:type", String)
    ], HyperParameterTrainingJobDefinition.prototype, "definitionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableInterContainerTrafficEncryption" }),
        __metadata("design:type", Boolean)
    ], HyperParameterTrainingJobDefinition.prototype, "enableInterContainerTrafficEncryption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableManagedSpotTraining" }),
        __metadata("design:type", Boolean)
    ], HyperParameterTrainingJobDefinition.prototype, "enableManagedSpotTraining", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableNetworkIsolation" }),
        __metadata("design:type", Boolean)
    ], HyperParameterTrainingJobDefinition.prototype, "enableNetworkIsolation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HyperParameterRanges" }),
        __metadata("design:type", ParameterRanges)
    ], HyperParameterTrainingJobDefinition.prototype, "hyperParameterRanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InputDataConfig", elemType: Channel }),
        __metadata("design:type", Array)
    ], HyperParameterTrainingJobDefinition.prototype, "inputDataConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutputDataConfig" }),
        __metadata("design:type", OutputDataConfig)
    ], HyperParameterTrainingJobDefinition.prototype, "outputDataConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceConfig" }),
        __metadata("design:type", ResourceConfig)
    ], HyperParameterTrainingJobDefinition.prototype, "resourceConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RetryStrategy" }),
        __metadata("design:type", RetryStrategy)
    ], HyperParameterTrainingJobDefinition.prototype, "retryStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleArn" }),
        __metadata("design:type", String)
    ], HyperParameterTrainingJobDefinition.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StaticHyperParameters" }),
        __metadata("design:type", Map)
    ], HyperParameterTrainingJobDefinition.prototype, "staticHyperParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StoppingCondition" }),
        __metadata("design:type", StoppingCondition)
    ], HyperParameterTrainingJobDefinition.prototype, "stoppingCondition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TuningObjective" }),
        __metadata("design:type", HyperParameterTuningJobObjective)
    ], HyperParameterTrainingJobDefinition.prototype, "tuningObjective", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VpcConfig" }),
        __metadata("design:type", VpcConfig)
    ], HyperParameterTrainingJobDefinition.prototype, "vpcConfig", void 0);
    return HyperParameterTrainingJobDefinition;
}(SpeakeasyBase));
export { HyperParameterTrainingJobDefinition };
