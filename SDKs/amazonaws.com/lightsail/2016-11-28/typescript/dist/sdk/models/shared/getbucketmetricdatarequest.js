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
import { BucketMetricNameEnum } from "./bucketmetricnameenum";
import { MetricUnitEnum } from "./metricunitenum";
var GetBucketMetricDataRequest = /** @class */ (function (_super) {
    __extends(GetBucketMetricDataRequest, _super);
    function GetBucketMetricDataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bucketName" }),
        __metadata("design:type", String)
    ], GetBucketMetricDataRequest.prototype, "bucketName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", Date)
    ], GetBucketMetricDataRequest.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metricName" }),
        __metadata("design:type", String)
    ], GetBucketMetricDataRequest.prototype, "metricName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=period" }),
        __metadata("design:type", Number)
    ], GetBucketMetricDataRequest.prototype, "period", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", Date)
    ], GetBucketMetricDataRequest.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statistics" }),
        __metadata("design:type", Array)
    ], GetBucketMetricDataRequest.prototype, "statistics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit" }),
        __metadata("design:type", String)
    ], GetBucketMetricDataRequest.prototype, "unit", void 0);
    return GetBucketMetricDataRequest;
}(SpeakeasyBase));
export { GetBucketMetricDataRequest };
