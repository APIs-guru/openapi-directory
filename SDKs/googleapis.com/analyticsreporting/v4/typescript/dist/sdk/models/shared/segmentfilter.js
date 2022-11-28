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
import { SequenceSegment } from "./sequencesegment";
import { SimpleSegment } from "./simplesegment";
// SegmentFilter
/**
 * SegmentFilter defines the segment to be either a simple or a sequence segment. A simple segment condition contains dimension and metric conditions to select the sessions or users. A sequence segment condition can be used to select users or sessions based on sequential conditions.
**/
var SegmentFilter = /** @class */ (function (_super) {
    __extends(SegmentFilter, _super);
    function SegmentFilter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=not" }),
        __metadata("design:type", Boolean)
    ], SegmentFilter.prototype, "not", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sequenceSegment" }),
        __metadata("design:type", SequenceSegment)
    ], SegmentFilter.prototype, "sequenceSegment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=simpleSegment" }),
        __metadata("design:type", SimpleSegment)
    ], SegmentFilter.prototype, "simpleSegment", void 0);
    return SegmentFilter;
}(SpeakeasyBase));
export { SegmentFilter };
