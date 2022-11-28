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
import { CallbackStepMetadata } from "./callbackstepmetadata";
import { ConditionStepMetadata } from "./conditionstepmetadata";
import { LambdaStepMetadata } from "./lambdastepmetadata";
import { ModelStepMetadata } from "./modelstepmetadata";
import { ProcessingJobStepMetadata } from "./processingjobstepmetadata";
import { RegisterModelStepMetadata } from "./registermodelstepmetadata";
import { TrainingJobStepMetadata } from "./trainingjobstepmetadata";
import { TransformJobStepMetadata } from "./transformjobstepmetadata";
import { TuningJobStepMetaData } from "./tuningjobstepmetadata";
// PipelineExecutionStepMetadata
/**
 * Metadata for a step execution.
**/
var PipelineExecutionStepMetadata = /** @class */ (function (_super) {
    __extends(PipelineExecutionStepMetadata, _super);
    function PipelineExecutionStepMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Callback" }),
        __metadata("design:type", CallbackStepMetadata)
    ], PipelineExecutionStepMetadata.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Condition" }),
        __metadata("design:type", ConditionStepMetadata)
    ], PipelineExecutionStepMetadata.prototype, "condition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Lambda" }),
        __metadata("design:type", LambdaStepMetadata)
    ], PipelineExecutionStepMetadata.prototype, "lambda", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Model" }),
        __metadata("design:type", ModelStepMetadata)
    ], PipelineExecutionStepMetadata.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProcessingJob" }),
        __metadata("design:type", ProcessingJobStepMetadata)
    ], PipelineExecutionStepMetadata.prototype, "processingJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RegisterModel" }),
        __metadata("design:type", RegisterModelStepMetadata)
    ], PipelineExecutionStepMetadata.prototype, "registerModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrainingJob" }),
        __metadata("design:type", TrainingJobStepMetadata)
    ], PipelineExecutionStepMetadata.prototype, "trainingJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TransformJob" }),
        __metadata("design:type", TransformJobStepMetadata)
    ], PipelineExecutionStepMetadata.prototype, "transformJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TuningJob" }),
        __metadata("design:type", TuningJobStepMetaData)
    ], PipelineExecutionStepMetadata.prototype, "tuningJob", void 0);
    return PipelineExecutionStepMetadata;
}(SpeakeasyBase));
export { PipelineExecutionStepMetadata };
