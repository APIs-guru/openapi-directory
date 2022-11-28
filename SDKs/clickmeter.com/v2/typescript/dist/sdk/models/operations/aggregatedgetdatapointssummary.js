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
export var AggregatedGetDatapointsSummarySortDirectionEnum;
(function (AggregatedGetDatapointsSummarySortDirectionEnum) {
    AggregatedGetDatapointsSummarySortDirectionEnum["Asc"] = "asc";
    AggregatedGetDatapointsSummarySortDirectionEnum["Desc"] = "desc";
})(AggregatedGetDatapointsSummarySortDirectionEnum || (AggregatedGetDatapointsSummarySortDirectionEnum = {}));
export var AggregatedGetDatapointsSummaryStatusEnum;
(function (AggregatedGetDatapointsSummaryStatusEnum) {
    AggregatedGetDatapointsSummaryStatusEnum["Deleted"] = "deleted";
    AggregatedGetDatapointsSummaryStatusEnum["Active"] = "active";
    AggregatedGetDatapointsSummaryStatusEnum["Paused"] = "paused";
    AggregatedGetDatapointsSummaryStatusEnum["Spam"] = "spam";
})(AggregatedGetDatapointsSummaryStatusEnum || (AggregatedGetDatapointsSummaryStatusEnum = {}));
export var AggregatedGetDatapointsSummaryTimeFrameEnum;
(function (AggregatedGetDatapointsSummaryTimeFrameEnum) {
    AggregatedGetDatapointsSummaryTimeFrameEnum["Today"] = "today";
    AggregatedGetDatapointsSummaryTimeFrameEnum["Yesterday"] = "yesterday";
    AggregatedGetDatapointsSummaryTimeFrameEnum["Last7"] = "last7";
    AggregatedGetDatapointsSummaryTimeFrameEnum["Last30"] = "last30";
    AggregatedGetDatapointsSummaryTimeFrameEnum["Lastmonth"] = "lastmonth";
    AggregatedGetDatapointsSummaryTimeFrameEnum["Currentmonth"] = "currentmonth";
    AggregatedGetDatapointsSummaryTimeFrameEnum["Previousmonth"] = "previousmonth";
    AggregatedGetDatapointsSummaryTimeFrameEnum["Last90"] = "last90";
    AggregatedGetDatapointsSummaryTimeFrameEnum["Last120"] = "last120";
    AggregatedGetDatapointsSummaryTimeFrameEnum["Last180"] = "last180";
    AggregatedGetDatapointsSummaryTimeFrameEnum["Last12months"] = "last12months";
    AggregatedGetDatapointsSummaryTimeFrameEnum["Lastyear"] = "lastyear";
    AggregatedGetDatapointsSummaryTimeFrameEnum["Currentyear"] = "currentyear";
    AggregatedGetDatapointsSummaryTimeFrameEnum["Beginning"] = "beginning";
    AggregatedGetDatapointsSummaryTimeFrameEnum["Custom"] = "custom";
})(AggregatedGetDatapointsSummaryTimeFrameEnum || (AggregatedGetDatapointsSummaryTimeFrameEnum = {}));
export var AggregatedGetDatapointsSummaryTypeEnum;
(function (AggregatedGetDatapointsSummaryTypeEnum) {
    AggregatedGetDatapointsSummaryTypeEnum["Tp"] = "tp";
    AggregatedGetDatapointsSummaryTypeEnum["Tl"] = "tl";
})(AggregatedGetDatapointsSummaryTypeEnum || (AggregatedGetDatapointsSummaryTypeEnum = {}));
var AggregatedGetDatapointsSummaryQueryParams = /** @class */ (function (_super) {
    __extends(AggregatedGetDatapointsSummaryQueryParams, _super);
    function AggregatedGetDatapointsSummaryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=favourite" }),
        __metadata("design:type", Boolean)
    ], AggregatedGetDatapointsSummaryQueryParams.prototype, "favourite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDay" }),
        __metadata("design:type", String)
    ], AggregatedGetDatapointsSummaryQueryParams.prototype, "fromDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupId" }),
        __metadata("design:type", Number)
    ], AggregatedGetDatapointsSummaryQueryParams.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], AggregatedGetDatapointsSummaryQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], AggregatedGetDatapointsSummaryQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" }),
        __metadata("design:type", String)
    ], AggregatedGetDatapointsSummaryQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortDirection" }),
        __metadata("design:type", String)
    ], AggregatedGetDatapointsSummaryQueryParams.prototype, "sortDirection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], AggregatedGetDatapointsSummaryQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" }),
        __metadata("design:type", String)
    ], AggregatedGetDatapointsSummaryQueryParams.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=textSearch" }),
        __metadata("design:type", String)
    ], AggregatedGetDatapointsSummaryQueryParams.prototype, "textSearch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeFrame" }),
        __metadata("design:type", String)
    ], AggregatedGetDatapointsSummaryQueryParams.prototype, "timeFrame", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDay" }),
        __metadata("design:type", String)
    ], AggregatedGetDatapointsSummaryQueryParams.prototype, "toDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], AggregatedGetDatapointsSummaryQueryParams.prototype, "type", void 0);
    return AggregatedGetDatapointsSummaryQueryParams;
}(SpeakeasyBase));
export { AggregatedGetDatapointsSummaryQueryParams };
var AggregatedGetDatapointsSummaryRequest = /** @class */ (function (_super) {
    __extends(AggregatedGetDatapointsSummaryRequest, _super);
    function AggregatedGetDatapointsSummaryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AggregatedGetDatapointsSummaryQueryParams)
    ], AggregatedGetDatapointsSummaryRequest.prototype, "queryParams", void 0);
    return AggregatedGetDatapointsSummaryRequest;
}(SpeakeasyBase));
export { AggregatedGetDatapointsSummaryRequest };
var AggregatedGetDatapointsSummaryResponse = /** @class */ (function (_super) {
    __extends(AggregatedGetDatapointsSummaryResponse, _super);
    function AggregatedGetDatapointsSummaryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreDtoAggregatedAggregatedSummaryResult)
    ], AggregatedGetDatapointsSummaryResponse.prototype, "apiCoreDtoAggregatedAggregatedSummaryResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AggregatedGetDatapointsSummaryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AggregatedGetDatapointsSummaryResponse.prototype, "statusCode", void 0);
    return AggregatedGetDatapointsSummaryResponse;
}(SpeakeasyBase));
export { AggregatedGetDatapointsSummaryResponse };
