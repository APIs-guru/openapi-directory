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
// ClassificationEvaluationMetricsConfidenceMetricsEntry
/**
 * Metrics for a single confidence threshold.
**/
var ClassificationEvaluationMetricsConfidenceMetricsEntry = /** @class */ (function (_super) {
    __extends(ClassificationEvaluationMetricsConfidenceMetricsEntry, _super);
    function ClassificationEvaluationMetricsConfidenceMetricsEntry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=confidenceThreshold" }),
        __metadata("design:type", Number)
    ], ClassificationEvaluationMetricsConfidenceMetricsEntry.prototype, "confidenceThreshold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=f1Score" }),
        __metadata("design:type", Number)
    ], ClassificationEvaluationMetricsConfidenceMetricsEntry.prototype, "f1Score", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=f1ScoreAt1" }),
        __metadata("design:type", Number)
    ], ClassificationEvaluationMetricsConfidenceMetricsEntry.prototype, "f1ScoreAt1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=falseNegativeCount" }),
        __metadata("design:type", String)
    ], ClassificationEvaluationMetricsConfidenceMetricsEntry.prototype, "falseNegativeCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=falsePositiveCount" }),
        __metadata("design:type", String)
    ], ClassificationEvaluationMetricsConfidenceMetricsEntry.prototype, "falsePositiveCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=falsePositiveRate" }),
        __metadata("design:type", Number)
    ], ClassificationEvaluationMetricsConfidenceMetricsEntry.prototype, "falsePositiveRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=falsePositiveRateAt1" }),
        __metadata("design:type", Number)
    ], ClassificationEvaluationMetricsConfidenceMetricsEntry.prototype, "falsePositiveRateAt1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=positionThreshold" }),
        __metadata("design:type", Number)
    ], ClassificationEvaluationMetricsConfidenceMetricsEntry.prototype, "positionThreshold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=precision" }),
        __metadata("design:type", Number)
    ], ClassificationEvaluationMetricsConfidenceMetricsEntry.prototype, "precision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=precisionAt1" }),
        __metadata("design:type", Number)
    ], ClassificationEvaluationMetricsConfidenceMetricsEntry.prototype, "precisionAt1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recall" }),
        __metadata("design:type", Number)
    ], ClassificationEvaluationMetricsConfidenceMetricsEntry.prototype, "recall", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recallAt1" }),
        __metadata("design:type", Number)
    ], ClassificationEvaluationMetricsConfidenceMetricsEntry.prototype, "recallAt1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trueNegativeCount" }),
        __metadata("design:type", String)
    ], ClassificationEvaluationMetricsConfidenceMetricsEntry.prototype, "trueNegativeCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=truePositiveCount" }),
        __metadata("design:type", String)
    ], ClassificationEvaluationMetricsConfidenceMetricsEntry.prototype, "truePositiveCount", void 0);
    return ClassificationEvaluationMetricsConfidenceMetricsEntry;
}(SpeakeasyBase));
export { ClassificationEvaluationMetricsConfidenceMetricsEntry };
