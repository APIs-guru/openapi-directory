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
import { GlobalExplanation } from "./globalexplanation";
import { DataSplitResult } from "./datasplitresult";
import { EvaluationMetrics } from "./evaluationmetrics";
import { IterationResult } from "./iterationresult";
import { TrainingOptions } from "./trainingoptions";
// TrainingRun
/**
 * Information about a single training query run for the model.
**/
var TrainingRun = /** @class */ (function (_super) {
    __extends(TrainingRun, _super);
    function TrainingRun() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=classLevelGlobalExplanations", elemType: GlobalExplanation }),
        __metadata("design:type", Array)
    ], TrainingRun.prototype, "classLevelGlobalExplanations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataSplitResult" }),
        __metadata("design:type", DataSplitResult)
    ], TrainingRun.prototype, "dataSplitResult", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=evaluationMetrics" }),
        __metadata("design:type", EvaluationMetrics)
    ], TrainingRun.prototype, "evaluationMetrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modelLevelGlobalExplanation" }),
        __metadata("design:type", GlobalExplanation)
    ], TrainingRun.prototype, "modelLevelGlobalExplanation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: IterationResult }),
        __metadata("design:type", Array)
    ], TrainingRun.prototype, "results", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], TrainingRun.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trainingOptions" }),
        __metadata("design:type", TrainingOptions)
    ], TrainingRun.prototype, "trainingOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trainingStartTime" }),
        __metadata("design:type", String)
    ], TrainingRun.prototype, "trainingStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vertexAiModelId" }),
        __metadata("design:type", String)
    ], TrainingRun.prototype, "vertexAiModelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vertexAiModelVersion" }),
        __metadata("design:type", String)
    ], TrainingRun.prototype, "vertexAiModelVersion", void 0);
    return TrainingRun;
}(SpeakeasyBase));
export { TrainingRun };
// TrainingRunInput
/**
 * Information about a single training query run for the model.
**/
var TrainingRunInput = /** @class */ (function (_super) {
    __extends(TrainingRunInput, _super);
    function TrainingRunInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataSplitResult" }),
        __metadata("design:type", DataSplitResult)
    ], TrainingRunInput.prototype, "dataSplitResult", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=evaluationMetrics" }),
        __metadata("design:type", EvaluationMetrics)
    ], TrainingRunInput.prototype, "evaluationMetrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modelLevelGlobalExplanation" }),
        __metadata("design:type", GlobalExplanation)
    ], TrainingRunInput.prototype, "modelLevelGlobalExplanation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trainingOptions" }),
        __metadata("design:type", TrainingOptions)
    ], TrainingRunInput.prototype, "trainingOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vertexAiModelId" }),
        __metadata("design:type", String)
    ], TrainingRunInput.prototype, "vertexAiModelId", void 0);
    return TrainingRunInput;
}(SpeakeasyBase));
export { TrainingRunInput };
