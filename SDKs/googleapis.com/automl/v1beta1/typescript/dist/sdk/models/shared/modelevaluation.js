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
import { ClassificationEvaluationMetrics } from "./classificationevaluationmetrics";
import { ImageObjectDetectionEvaluationMetrics } from "./imageobjectdetectionevaluationmetrics";
import { RegressionEvaluationMetrics } from "./regressionevaluationmetrics";
import { TextExtractionEvaluationMetrics } from "./textextractionevaluationmetrics";
import { TextSentimentEvaluationMetrics } from "./textsentimentevaluationmetrics";
import { TranslationEvaluationMetrics } from "./translationevaluationmetrics";
import { VideoObjectTrackingEvaluationMetrics } from "./videoobjecttrackingevaluationmetrics";
// ModelEvaluation
/**
 * Evaluation results of a model.
**/
var ModelEvaluation = /** @class */ (function (_super) {
    __extends(ModelEvaluation, _super);
    function ModelEvaluation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotationSpecId" }),
        __metadata("design:type", String)
    ], ModelEvaluation.prototype, "annotationSpecId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=classificationEvaluationMetrics" }),
        __metadata("design:type", ClassificationEvaluationMetrics)
    ], ModelEvaluation.prototype, "classificationEvaluationMetrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], ModelEvaluation.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ModelEvaluation.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=evaluatedExampleCount" }),
        __metadata("design:type", Number)
    ], ModelEvaluation.prototype, "evaluatedExampleCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageObjectDetectionEvaluationMetrics" }),
        __metadata("design:type", ImageObjectDetectionEvaluationMetrics)
    ], ModelEvaluation.prototype, "imageObjectDetectionEvaluationMetrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ModelEvaluation.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regressionEvaluationMetrics" }),
        __metadata("design:type", RegressionEvaluationMetrics)
    ], ModelEvaluation.prototype, "regressionEvaluationMetrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textExtractionEvaluationMetrics" }),
        __metadata("design:type", TextExtractionEvaluationMetrics)
    ], ModelEvaluation.prototype, "textExtractionEvaluationMetrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textSentimentEvaluationMetrics" }),
        __metadata("design:type", TextSentimentEvaluationMetrics)
    ], ModelEvaluation.prototype, "textSentimentEvaluationMetrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=translationEvaluationMetrics" }),
        __metadata("design:type", TranslationEvaluationMetrics)
    ], ModelEvaluation.prototype, "translationEvaluationMetrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoObjectTrackingEvaluationMetrics" }),
        __metadata("design:type", VideoObjectTrackingEvaluationMetrics)
    ], ModelEvaluation.prototype, "videoObjectTrackingEvaluationMetrics", void 0);
    return ModelEvaluation;
}(SpeakeasyBase));
export { ModelEvaluation };
