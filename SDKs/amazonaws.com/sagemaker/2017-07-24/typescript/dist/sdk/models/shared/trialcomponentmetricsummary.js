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
// TrialComponentMetricSummary
/**
 * A summary of the metrics of a trial component.
**/
var TrialComponentMetricSummary = /** @class */ (function (_super) {
    __extends(TrialComponentMetricSummary, _super);
    function TrialComponentMetricSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Avg" }),
        __metadata("design:type", Number)
    ], TrialComponentMetricSummary.prototype, "avg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Count" }),
        __metadata("design:type", Number)
    ], TrialComponentMetricSummary.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Last" }),
        __metadata("design:type", Number)
    ], TrialComponentMetricSummary.prototype, "last", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Max" }),
        __metadata("design:type", Number)
    ], TrialComponentMetricSummary.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetricName" }),
        __metadata("design:type", String)
    ], TrialComponentMetricSummary.prototype, "metricName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Min" }),
        __metadata("design:type", Number)
    ], TrialComponentMetricSummary.prototype, "min", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceArn" }),
        __metadata("design:type", String)
    ], TrialComponentMetricSummary.prototype, "sourceArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StdDev" }),
        __metadata("design:type", Number)
    ], TrialComponentMetricSummary.prototype, "stdDev", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TimeStamp" }),
        __metadata("design:type", Date)
    ], TrialComponentMetricSummary.prototype, "timeStamp", void 0);
    return TrialComponentMetricSummary;
}(SpeakeasyBase));
export { TrialComponentMetricSummary };
