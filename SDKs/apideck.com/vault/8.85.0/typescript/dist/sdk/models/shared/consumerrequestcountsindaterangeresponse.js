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
import { RequestCountAllocation } from "./requestcountallocation";
var ConsumerRequestCountsInDateRangeResponseData = /** @class */ (function (_super) {
    __extends(ConsumerRequestCountsInDateRangeResponseData, _super);
    function ConsumerRequestCountsInDateRangeResponseData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aggregated_request_count" }),
        __metadata("design:type", Number)
    ], ConsumerRequestCountsInDateRangeResponseData.prototype, "aggregatedRequestCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=application_id" }),
        __metadata("design:type", String)
    ], ConsumerRequestCountsInDateRangeResponseData.prototype, "applicationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consumer_id" }),
        __metadata("design:type", String)
    ], ConsumerRequestCountsInDateRangeResponseData.prototype, "consumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_datetime" }),
        __metadata("design:type", String)
    ], ConsumerRequestCountsInDateRangeResponseData.prototype, "endDatetime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request_counts" }),
        __metadata("design:type", RequestCountAllocation)
    ], ConsumerRequestCountsInDateRangeResponseData.prototype, "requestCounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_datetime" }),
        __metadata("design:type", String)
    ], ConsumerRequestCountsInDateRangeResponseData.prototype, "startDatetime", void 0);
    return ConsumerRequestCountsInDateRangeResponseData;
}(SpeakeasyBase));
export { ConsumerRequestCountsInDateRangeResponseData };
var ConsumerRequestCountsInDateRangeResponse = /** @class */ (function (_super) {
    __extends(ConsumerRequestCountsInDateRangeResponse, _super);
    function ConsumerRequestCountsInDateRangeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", ConsumerRequestCountsInDateRangeResponseData)
    ], ConsumerRequestCountsInDateRangeResponse.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ConsumerRequestCountsInDateRangeResponse.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status_code" }),
        __metadata("design:type", Number)
    ], ConsumerRequestCountsInDateRangeResponse.prototype, "statusCode", void 0);
    return ConsumerRequestCountsInDateRangeResponse;
}(SpeakeasyBase));
export { ConsumerRequestCountsInDateRangeResponse };
