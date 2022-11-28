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
var SegmentAnalyticsQueryParams = /** @class */ (function (_super) {
    __extends(SegmentAnalyticsQueryParams, _super);
    function SegmentAnalyticsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ending_at" }),
        __metadata("design:type", String)
    ], SegmentAnalyticsQueryParams.prototype, "endingAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=length" }),
        __metadata("design:type", String)
    ], SegmentAnalyticsQueryParams.prototype, "length", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=segment_id" }),
        __metadata("design:type", String)
    ], SegmentAnalyticsQueryParams.prototype, "segmentId", void 0);
    return SegmentAnalyticsQueryParams;
}(SpeakeasyBase));
export { SegmentAnalyticsQueryParams };
var SegmentAnalyticsRequest = /** @class */ (function (_super) {
    __extends(SegmentAnalyticsRequest, _super);
    function SegmentAnalyticsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SegmentAnalyticsQueryParams)
    ], SegmentAnalyticsRequest.prototype, "queryParams", void 0);
    return SegmentAnalyticsRequest;
}(SpeakeasyBase));
export { SegmentAnalyticsRequest };
var SegmentAnalyticsResponse = /** @class */ (function (_super) {
    __extends(SegmentAnalyticsResponse, _super);
    function SegmentAnalyticsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SegmentAnalyticsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SegmentAnalyticsResponse.prototype, "statusCode", void 0);
    return SegmentAnalyticsResponse;
}(SpeakeasyBase));
export { SegmentAnalyticsResponse };
