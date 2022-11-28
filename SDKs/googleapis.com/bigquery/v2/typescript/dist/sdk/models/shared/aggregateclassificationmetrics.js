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
// AggregateClassificationMetrics
/**
 * Aggregate metrics for classification/classifier models. For multi-class models, the metrics are either macro-averaged or micro-averaged. When macro-averaged, the metrics are calculated for each label and then an unweighted average is taken of those values. When micro-averaged, the metric is calculated globally by counting the total number of correctly predicted rows.
**/
var AggregateClassificationMetrics = /** @class */ (function (_super) {
    __extends(AggregateClassificationMetrics, _super);
    function AggregateClassificationMetrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accuracy" }),
        __metadata("design:type", Number)
    ], AggregateClassificationMetrics.prototype, "accuracy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=f1Score" }),
        __metadata("design:type", Number)
    ], AggregateClassificationMetrics.prototype, "f1Score", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logLoss" }),
        __metadata("design:type", Number)
    ], AggregateClassificationMetrics.prototype, "logLoss", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=precision" }),
        __metadata("design:type", Number)
    ], AggregateClassificationMetrics.prototype, "precision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recall" }),
        __metadata("design:type", Number)
    ], AggregateClassificationMetrics.prototype, "recall", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rocAuc" }),
        __metadata("design:type", Number)
    ], AggregateClassificationMetrics.prototype, "rocAuc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=threshold" }),
        __metadata("design:type", Number)
    ], AggregateClassificationMetrics.prototype, "threshold", void 0);
    return AggregateClassificationMetrics;
}(SpeakeasyBase));
export { AggregateClassificationMetrics };
