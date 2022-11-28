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
export var AggregatedGetStatisticsListGroupByEnum;
(function (AggregatedGetStatisticsListGroupByEnum) {
    AggregatedGetStatisticsListGroupByEnum["Week"] = "week";
    AggregatedGetStatisticsListGroupByEnum["Month"] = "month";
})(AggregatedGetStatisticsListGroupByEnum || (AggregatedGetStatisticsListGroupByEnum = {}));
export var AggregatedGetStatisticsListTimeFrameEnum;
(function (AggregatedGetStatisticsListTimeFrameEnum) {
    AggregatedGetStatisticsListTimeFrameEnum["Today"] = "today";
    AggregatedGetStatisticsListTimeFrameEnum["Yesterday"] = "yesterday";
    AggregatedGetStatisticsListTimeFrameEnum["Last7"] = "last7";
    AggregatedGetStatisticsListTimeFrameEnum["Last30"] = "last30";
    AggregatedGetStatisticsListTimeFrameEnum["Lastmonth"] = "lastmonth";
    AggregatedGetStatisticsListTimeFrameEnum["Currentmonth"] = "currentmonth";
    AggregatedGetStatisticsListTimeFrameEnum["Previousmonth"] = "previousmonth";
    AggregatedGetStatisticsListTimeFrameEnum["Last90"] = "last90";
    AggregatedGetStatisticsListTimeFrameEnum["Last120"] = "last120";
    AggregatedGetStatisticsListTimeFrameEnum["Last180"] = "last180";
    AggregatedGetStatisticsListTimeFrameEnum["Last12months"] = "last12months";
    AggregatedGetStatisticsListTimeFrameEnum["Lastyear"] = "lastyear";
    AggregatedGetStatisticsListTimeFrameEnum["Currentyear"] = "currentyear";
    AggregatedGetStatisticsListTimeFrameEnum["Beginning"] = "beginning";
    AggregatedGetStatisticsListTimeFrameEnum["Custom"] = "custom";
})(AggregatedGetStatisticsListTimeFrameEnum || (AggregatedGetStatisticsListTimeFrameEnum = {}));
var AggregatedGetStatisticsListQueryParams = /** @class */ (function (_super) {
    __extends(AggregatedGetStatisticsListQueryParams, _super);
    function AggregatedGetStatisticsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDay" }),
        __metadata("design:type", String)
    ], AggregatedGetStatisticsListQueryParams.prototype, "fromDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupBy" }),
        __metadata("design:type", String)
    ], AggregatedGetStatisticsListQueryParams.prototype, "groupBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeFrame" }),
        __metadata("design:type", String)
    ], AggregatedGetStatisticsListQueryParams.prototype, "timeFrame", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDay" }),
        __metadata("design:type", String)
    ], AggregatedGetStatisticsListQueryParams.prototype, "toDay", void 0);
    return AggregatedGetStatisticsListQueryParams;
}(SpeakeasyBase));
export { AggregatedGetStatisticsListQueryParams };
var AggregatedGetStatisticsListRequest = /** @class */ (function (_super) {
    __extends(AggregatedGetStatisticsListRequest, _super);
    function AggregatedGetStatisticsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AggregatedGetStatisticsListQueryParams)
    ], AggregatedGetStatisticsListRequest.prototype, "queryParams", void 0);
    return AggregatedGetStatisticsListRequest;
}(SpeakeasyBase));
export { AggregatedGetStatisticsListRequest };
var AggregatedGetStatisticsListResponse = /** @class */ (function (_super) {
    __extends(AggregatedGetStatisticsListResponse, _super);
    function AggregatedGetStatisticsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult)
    ], AggregatedGetStatisticsListResponse.prototype, "apiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AggregatedGetStatisticsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AggregatedGetStatisticsListResponse.prototype, "statusCode", void 0);
    return AggregatedGetStatisticsListResponse;
}(SpeakeasyBase));
export { AggregatedGetStatisticsListResponse };
