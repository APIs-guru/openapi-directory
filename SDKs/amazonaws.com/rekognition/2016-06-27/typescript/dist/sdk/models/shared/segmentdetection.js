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
import { ShotSegment } from "./shotsegment";
import { TechnicalCueSegment } from "./technicalcuesegment";
import { SegmentTypeEnum } from "./segmenttypeenum";
// SegmentDetection
/**
 * A technical cue or shot detection segment detected in a video. An array of <code>SegmentDetection</code> objects containing all segments detected in a stored video is returned by <a>GetSegmentDetection</a>.
**/
var SegmentDetection = /** @class */ (function (_super) {
    __extends(SegmentDetection, _super);
    function SegmentDetection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DurationFrames" }),
        __metadata("design:type", Number)
    ], SegmentDetection.prototype, "durationFrames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DurationMillis" }),
        __metadata("design:type", Number)
    ], SegmentDetection.prototype, "durationMillis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DurationSMPTE" }),
        __metadata("design:type", String)
    ], SegmentDetection.prototype, "durationSmpte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndFrameNumber" }),
        __metadata("design:type", Number)
    ], SegmentDetection.prototype, "endFrameNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndTimecodeSMPTE" }),
        __metadata("design:type", String)
    ], SegmentDetection.prototype, "endTimecodeSmpte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndTimestampMillis" }),
        __metadata("design:type", Number)
    ], SegmentDetection.prototype, "endTimestampMillis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShotSegment" }),
        __metadata("design:type", ShotSegment)
    ], SegmentDetection.prototype, "shotSegment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartFrameNumber" }),
        __metadata("design:type", Number)
    ], SegmentDetection.prototype, "startFrameNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartTimecodeSMPTE" }),
        __metadata("design:type", String)
    ], SegmentDetection.prototype, "startTimecodeSmpte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartTimestampMillis" }),
        __metadata("design:type", Number)
    ], SegmentDetection.prototype, "startTimestampMillis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TechnicalCueSegment" }),
        __metadata("design:type", TechnicalCueSegment)
    ], SegmentDetection.prototype, "technicalCueSegment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], SegmentDetection.prototype, "type", void 0);
    return SegmentDetection;
}(SpeakeasyBase));
export { SegmentDetection };
