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
import { ConfusionMatrix } from "./confusionmatrix";
// TextSentimentEvaluationMetrics
/**
 * Model evaluation metrics for text sentiment problems.
**/
var TextSentimentEvaluationMetrics = /** @class */ (function (_super) {
    __extends(TextSentimentEvaluationMetrics, _super);
    function TextSentimentEvaluationMetrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotationSpecId" }),
        __metadata("design:type", Array)
    ], TextSentimentEvaluationMetrics.prototype, "annotationSpecId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=confusionMatrix" }),
        __metadata("design:type", ConfusionMatrix)
    ], TextSentimentEvaluationMetrics.prototype, "confusionMatrix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=f1Score" }),
        __metadata("design:type", Number)
    ], TextSentimentEvaluationMetrics.prototype, "f1Score", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linearKappa" }),
        __metadata("design:type", Number)
    ], TextSentimentEvaluationMetrics.prototype, "linearKappa", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meanAbsoluteError" }),
        __metadata("design:type", Number)
    ], TextSentimentEvaluationMetrics.prototype, "meanAbsoluteError", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meanSquaredError" }),
        __metadata("design:type", Number)
    ], TextSentimentEvaluationMetrics.prototype, "meanSquaredError", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=precision" }),
        __metadata("design:type", Number)
    ], TextSentimentEvaluationMetrics.prototype, "precision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quadraticKappa" }),
        __metadata("design:type", Number)
    ], TextSentimentEvaluationMetrics.prototype, "quadraticKappa", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recall" }),
        __metadata("design:type", Number)
    ], TextSentimentEvaluationMetrics.prototype, "recall", void 0);
    return TextSentimentEvaluationMetrics;
}(SpeakeasyBase));
export { TextSentimentEvaluationMetrics };
