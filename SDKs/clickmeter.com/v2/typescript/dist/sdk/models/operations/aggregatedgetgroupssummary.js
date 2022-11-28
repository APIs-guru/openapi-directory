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
export var AggregatedGetGroupsSummarySortDirectionEnum;
(function (AggregatedGetGroupsSummarySortDirectionEnum) {
    AggregatedGetGroupsSummarySortDirectionEnum["Asc"] = "asc";
    AggregatedGetGroupsSummarySortDirectionEnum["Desc"] = "desc";
})(AggregatedGetGroupsSummarySortDirectionEnum || (AggregatedGetGroupsSummarySortDirectionEnum = {}));
export var AggregatedGetGroupsSummaryStatusEnum;
(function (AggregatedGetGroupsSummaryStatusEnum) {
    AggregatedGetGroupsSummaryStatusEnum["Deleted"] = "deleted";
    AggregatedGetGroupsSummaryStatusEnum["Active"] = "active";
})(AggregatedGetGroupsSummaryStatusEnum || (AggregatedGetGroupsSummaryStatusEnum = {}));
export var AggregatedGetGroupsSummaryTimeFrameEnum;
(function (AggregatedGetGroupsSummaryTimeFrameEnum) {
    AggregatedGetGroupsSummaryTimeFrameEnum["Today"] = "today";
    AggregatedGetGroupsSummaryTimeFrameEnum["Yesterday"] = "yesterday";
    AggregatedGetGroupsSummaryTimeFrameEnum["Last7"] = "last7";
    AggregatedGetGroupsSummaryTimeFrameEnum["Last30"] = "last30";
    AggregatedGetGroupsSummaryTimeFrameEnum["Lastmonth"] = "lastmonth";
    AggregatedGetGroupsSummaryTimeFrameEnum["Currentmonth"] = "currentmonth";
    AggregatedGetGroupsSummaryTimeFrameEnum["Previousmonth"] = "previousmonth";
    AggregatedGetGroupsSummaryTimeFrameEnum["Last90"] = "last90";
    AggregatedGetGroupsSummaryTimeFrameEnum["Last120"] = "last120";
    AggregatedGetGroupsSummaryTimeFrameEnum["Last180"] = "last180";
    AggregatedGetGroupsSummaryTimeFrameEnum["Last12months"] = "last12months";
    AggregatedGetGroupsSummaryTimeFrameEnum["Lastyear"] = "lastyear";
    AggregatedGetGroupsSummaryTimeFrameEnum["Currentyear"] = "currentyear";
    AggregatedGetGroupsSummaryTimeFrameEnum["Beginning"] = "beginning";
    AggregatedGetGroupsSummaryTimeFrameEnum["Custom"] = "custom";
})(AggregatedGetGroupsSummaryTimeFrameEnum || (AggregatedGetGroupsSummaryTimeFrameEnum = {}));
var AggregatedGetGroupsSummaryQueryParams = /** @class */ (function (_super) {
    __extends(AggregatedGetGroupsSummaryQueryParams, _super);
    function AggregatedGetGroupsSummaryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=favourite" }),
        __metadata("design:type", Boolean)
    ], AggregatedGetGroupsSummaryQueryParams.prototype, "favourite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDay" }),
        __metadata("design:type", String)
    ], AggregatedGetGroupsSummaryQueryParams.prototype, "fromDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], AggregatedGetGroupsSummaryQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], AggregatedGetGroupsSummaryQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" }),
        __metadata("design:type", String)
    ], AggregatedGetGroupsSummaryQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortDirection" }),
        __metadata("design:type", String)
    ], AggregatedGetGroupsSummaryQueryParams.prototype, "sortDirection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], AggregatedGetGroupsSummaryQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" }),
        __metadata("design:type", String)
    ], AggregatedGetGroupsSummaryQueryParams.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=textSearch" }),
        __metadata("design:type", String)
    ], AggregatedGetGroupsSummaryQueryParams.prototype, "textSearch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeFrame" }),
        __metadata("design:type", String)
    ], AggregatedGetGroupsSummaryQueryParams.prototype, "timeFrame", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDay" }),
        __metadata("design:type", String)
    ], AggregatedGetGroupsSummaryQueryParams.prototype, "toDay", void 0);
    return AggregatedGetGroupsSummaryQueryParams;
}(SpeakeasyBase));
export { AggregatedGetGroupsSummaryQueryParams };
var AggregatedGetGroupsSummaryRequest = /** @class */ (function (_super) {
    __extends(AggregatedGetGroupsSummaryRequest, _super);
    function AggregatedGetGroupsSummaryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AggregatedGetGroupsSummaryQueryParams)
    ], AggregatedGetGroupsSummaryRequest.prototype, "queryParams", void 0);
    return AggregatedGetGroupsSummaryRequest;
}(SpeakeasyBase));
export { AggregatedGetGroupsSummaryRequest };
var AggregatedGetGroupsSummaryResponse = /** @class */ (function (_super) {
    __extends(AggregatedGetGroupsSummaryResponse, _super);
    function AggregatedGetGroupsSummaryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreDtoAggregatedAggregatedSummaryResult)
    ], AggregatedGetGroupsSummaryResponse.prototype, "apiCoreDtoAggregatedAggregatedSummaryResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AggregatedGetGroupsSummaryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AggregatedGetGroupsSummaryResponse.prototype, "statusCode", void 0);
    return AggregatedGetGroupsSummaryResponse;
}(SpeakeasyBase));
export { AggregatedGetGroupsSummaryResponse };
