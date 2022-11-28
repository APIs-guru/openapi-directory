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
import { BoundingBoxMetricsEntry } from "./boundingboxmetricsentry";
// VideoObjectTrackingEvaluationMetrics
/**
 * Model evaluation metrics for video object tracking problems. Evaluates prediction quality of both labeled bounding boxes and labeled tracks (i.e. series of bounding boxes sharing same label and instance ID).
**/
var VideoObjectTrackingEvaluationMetrics = /** @class */ (function (_super) {
    __extends(VideoObjectTrackingEvaluationMetrics, _super);
    function VideoObjectTrackingEvaluationMetrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=boundingBoxMeanAveragePrecision" }),
        __metadata("design:type", Number)
    ], VideoObjectTrackingEvaluationMetrics.prototype, "boundingBoxMeanAveragePrecision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=boundingBoxMetricsEntries", elemType: BoundingBoxMetricsEntry }),
        __metadata("design:type", Array)
    ], VideoObjectTrackingEvaluationMetrics.prototype, "boundingBoxMetricsEntries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=evaluatedBoundingBoxCount" }),
        __metadata("design:type", Number)
    ], VideoObjectTrackingEvaluationMetrics.prototype, "evaluatedBoundingBoxCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=evaluatedFrameCount" }),
        __metadata("design:type", Number)
    ], VideoObjectTrackingEvaluationMetrics.prototype, "evaluatedFrameCount", void 0);
    return VideoObjectTrackingEvaluationMetrics;
}(SpeakeasyBase));
export { VideoObjectTrackingEvaluationMetrics };
