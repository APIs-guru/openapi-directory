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
import * as shared from "../shared";
export var AggregatedGetConversionsSummarySortDirectionEnum;
(function (AggregatedGetConversionsSummarySortDirectionEnum) {
    AggregatedGetConversionsSummarySortDirectionEnum["Asc"] = "asc";
    AggregatedGetConversionsSummarySortDirectionEnum["Desc"] = "desc";
})(AggregatedGetConversionsSummarySortDirectionEnum || (AggregatedGetConversionsSummarySortDirectionEnum = {}));
export var AggregatedGetConversionsSummaryStatusEnum;
(function (AggregatedGetConversionsSummaryStatusEnum) {
    AggregatedGetConversionsSummaryStatusEnum["Deleted"] = "deleted";
    AggregatedGetConversionsSummaryStatusEnum["Active"] = "active";
})(AggregatedGetConversionsSummaryStatusEnum || (AggregatedGetConversionsSummaryStatusEnum = {}));
export var AggregatedGetConversionsSummaryTimeFrameEnum;
(function (AggregatedGetConversionsSummaryTimeFrameEnum) {
    AggregatedGetConversionsSummaryTimeFrameEnum["Today"] = "today";
    AggregatedGetConversionsSummaryTimeFrameEnum["Yesterday"] = "yesterday";
    AggregatedGetConversionsSummaryTimeFrameEnum["Last7"] = "last7";
    AggregatedGetConversionsSummaryTimeFrameEnum["Last30"] = "last30";
    AggregatedGetConversionsSummaryTimeFrameEnum["Lastmonth"] = "lastmonth";
    AggregatedGetConversionsSummaryTimeFrameEnum["Currentmonth"] = "currentmonth";
    AggregatedGetConversionsSummaryTimeFrameEnum["Previousmonth"] = "previousmonth";
    AggregatedGetConversionsSummaryTimeFrameEnum["Last90"] = "last90";
    AggregatedGetConversionsSummaryTimeFrameEnum["Last120"] = "last120";
    AggregatedGetConversionsSummaryTimeFrameEnum["Last180"] = "last180";
    AggregatedGetConversionsSummaryTimeFrameEnum["Last12months"] = "last12months";
    AggregatedGetConversionsSummaryTimeFrameEnum["Lastyear"] = "lastyear";
    AggregatedGetConversionsSummaryTimeFrameEnum["Currentyear"] = "currentyear";
    AggregatedGetConversionsSummaryTimeFrameEnum["Beginning"] = "beginning";
    AggregatedGetConversionsSummaryTimeFrameEnum["Custom"] = "custom";
})(AggregatedGetConversionsSummaryTimeFrameEnum || (AggregatedGetConversionsSummaryTimeFrameEnum = {}));
var AggregatedGetConversionsSummaryQueryParams = /** @class */ (function (_super) {
    __extends(AggregatedGetConversionsSummaryQueryParams, _super);
    function AggregatedGetConversionsSummaryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDay" }),
        __metadata("design:type", String)
    ], AggregatedGetConversionsSummaryQueryParams.prototype, "fromDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], AggregatedGetConversionsSummaryQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], AggregatedGetConversionsSummaryQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" }),
        __metadata("design:type", String)
    ], AggregatedGetConversionsSummaryQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortDirection" }),
        __metadata("design:type", String)
    ], AggregatedGetConversionsSummaryQueryParams.prototype, "sortDirection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], AggregatedGetConversionsSummaryQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=textSearch" }),
        __metadata("design:type", String)
    ], AggregatedGetConversionsSummaryQueryParams.prototype, "textSearch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeFrame" }),
        __metadata("design:type", String)
    ], AggregatedGetConversionsSummaryQueryParams.prototype, "timeFrame", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDay" }),
        __metadata("design:type", String)
    ], AggregatedGetConversionsSummaryQueryParams.prototype, "toDay", void 0);
    return AggregatedGetConversionsSummaryQueryParams;
}(SpeakeasyBase));
export { AggregatedGetConversionsSummaryQueryParams };
var AggregatedGetConversionsSummaryRequest = /** @class */ (function (_super) {
    __extends(AggregatedGetConversionsSummaryRequest, _super);
    function AggregatedGetConversionsSummaryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AggregatedGetConversionsSummaryQueryParams)
    ], AggregatedGetConversionsSummaryRequest.prototype, "queryParams", void 0);
    return AggregatedGetConversionsSummaryRequest;
}(SpeakeasyBase));
export { AggregatedGetConversionsSummaryRequest };
var AggregatedGetConversionsSummaryResponse = /** @class */ (function (_super) {
    __extends(AggregatedGetConversionsSummaryResponse, _super);
    function AggregatedGetConversionsSummaryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreDtoAggregatedAggregatedSummaryResult)
    ], AggregatedGetConversionsSummaryResponse.prototype, "apiCoreDtoAggregatedAggregatedSummaryResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AggregatedGetConversionsSummaryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AggregatedGetConversionsSummaryResponse.prototype, "statusCode", void 0);
    return AggregatedGetConversionsSummaryResponse;
}(SpeakeasyBase));
export { AggregatedGetConversionsSummaryResponse };
