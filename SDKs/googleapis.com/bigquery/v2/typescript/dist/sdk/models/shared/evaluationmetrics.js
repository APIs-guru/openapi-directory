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
import { ArimaForecastingMetrics } from "./arimaforecastingmetrics";
import { BinaryClassificationMetrics } from "./binaryclassificationmetrics";
import { ClusteringMetrics } from "./clusteringmetrics";
import { DimensionalityReductionMetrics } from "./dimensionalityreductionmetrics";
import { MultiClassClassificationMetrics } from "./multiclassclassificationmetrics";
import { RankingMetrics } from "./rankingmetrics";
import { RegressionMetrics } from "./regressionmetrics";
// EvaluationMetrics
/**
 * Evaluation metrics of a model. These are either computed on all training data or just the eval data based on whether eval data was used during training. These are not present for imported models.
**/
var EvaluationMetrics = /** @class */ (function (_super) {
    __extends(EvaluationMetrics, _super);
    function EvaluationMetrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arimaForecastingMetrics" }),
        __metadata("design:type", ArimaForecastingMetrics)
    ], EvaluationMetrics.prototype, "arimaForecastingMetrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=binaryClassificationMetrics" }),
        __metadata("design:type", BinaryClassificationMetrics)
    ], EvaluationMetrics.prototype, "binaryClassificationMetrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clusteringMetrics" }),
        __metadata("design:type", ClusteringMetrics)
    ], EvaluationMetrics.prototype, "clusteringMetrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimensionalityReductionMetrics" }),
        __metadata("design:type", DimensionalityReductionMetrics)
    ], EvaluationMetrics.prototype, "dimensionalityReductionMetrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=multiClassClassificationMetrics" }),
        __metadata("design:type", MultiClassClassificationMetrics)
    ], EvaluationMetrics.prototype, "multiClassClassificationMetrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rankingMetrics" }),
        __metadata("design:type", RankingMetrics)
    ], EvaluationMetrics.prototype, "rankingMetrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regressionMetrics" }),
        __metadata("design:type", RegressionMetrics)
    ], EvaluationMetrics.prototype, "regressionMetrics", void 0);
    return EvaluationMetrics;
}(SpeakeasyBase));
export { EvaluationMetrics };
