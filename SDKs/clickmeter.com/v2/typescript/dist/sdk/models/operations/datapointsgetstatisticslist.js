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
var DataPointsGetStatisticsListPathParams = /** @class */ (function (_super) {
    __extends(DataPointsGetStatisticsListPathParams, _super);
    function DataPointsGetStatisticsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], DataPointsGetStatisticsListPathParams.prototype, "id", void 0);
    return DataPointsGetStatisticsListPathParams;
}(SpeakeasyBase));
export { DataPointsGetStatisticsListPathParams };
export var DataPointsGetStatisticsListGroupByEnum;
(function (DataPointsGetStatisticsListGroupByEnum) {
    DataPointsGetStatisticsListGroupByEnum["Week"] = "week";
    DataPointsGetStatisticsListGroupByEnum["Month"] = "month";
})(DataPointsGetStatisticsListGroupByEnum || (DataPointsGetStatisticsListGroupByEnum = {}));
export var DataPointsGetStatisticsListTimeFrameEnum;
(function (DataPointsGetStatisticsListTimeFrameEnum) {
    DataPointsGetStatisticsListTimeFrameEnum["Today"] = "today";
    DataPointsGetStatisticsListTimeFrameEnum["Yesterday"] = "yesterday";
    DataPointsGetStatisticsListTimeFrameEnum["Last7"] = "last7";
    DataPointsGetStatisticsListTimeFrameEnum["Last30"] = "last30";
    DataPointsGetStatisticsListTimeFrameEnum["Lastmonth"] = "lastmonth";
    DataPointsGetStatisticsListTimeFrameEnum["Currentmonth"] = "currentmonth";
    DataPointsGetStatisticsListTimeFrameEnum["Previousmonth"] = "previousmonth";
    DataPointsGetStatisticsListTimeFrameEnum["Last90"] = "last90";
    DataPointsGetStatisticsListTimeFrameEnum["Last120"] = "last120";
    DataPointsGetStatisticsListTimeFrameEnum["Last180"] = "last180";
    DataPointsGetStatisticsListTimeFrameEnum["Last12months"] = "last12months";
    DataPointsGetStatisticsListTimeFrameEnum["Lastyear"] = "lastyear";
    DataPointsGetStatisticsListTimeFrameEnum["Currentyear"] = "currentyear";
    DataPointsGetStatisticsListTimeFrameEnum["Beginning"] = "beginning";
    DataPointsGetStatisticsListTimeFrameEnum["Custom"] = "custom";
})(DataPointsGetStatisticsListTimeFrameEnum || (DataPointsGetStatisticsListTimeFrameEnum = {}));
var DataPointsGetStatisticsListQueryParams = /** @class */ (function (_super) {
    __extends(DataPointsGetStatisticsListQueryParams, _super);
    function DataPointsGetStatisticsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDay" }),
        __metadata("design:type", String)
    ], DataPointsGetStatisticsListQueryParams.prototype, "fromDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupBy" }),
        __metadata("design:type", String)
    ], DataPointsGetStatisticsListQueryParams.prototype, "groupBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeFrame" }),
        __metadata("design:type", String)
    ], DataPointsGetStatisticsListQueryParams.prototype, "timeFrame", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDay" }),
        __metadata("design:type", String)
    ], DataPointsGetStatisticsListQueryParams.prototype, "toDay", void 0);
    return DataPointsGetStatisticsListQueryParams;
}(SpeakeasyBase));
export { DataPointsGetStatisticsListQueryParams };
var DataPointsGetStatisticsListRequest = /** @class */ (function (_super) {
    __extends(DataPointsGetStatisticsListRequest, _super);
    function DataPointsGetStatisticsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataPointsGetStatisticsListPathParams)
    ], DataPointsGetStatisticsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataPointsGetStatisticsListQueryParams)
    ], DataPointsGetStatisticsListRequest.prototype, "queryParams", void 0);
    return DataPointsGetStatisticsListRequest;
}(SpeakeasyBase));
export { DataPointsGetStatisticsListRequest };
var DataPointsGetStatisticsListResponse = /** @class */ (function (_super) {
    __extends(DataPointsGetStatisticsListResponse, _super);
    function DataPointsGetStatisticsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult)
    ], DataPointsGetStatisticsListResponse.prototype, "apiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataPointsGetStatisticsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataPointsGetStatisticsListResponse.prototype, "statusCode", void 0);
    return DataPointsGetStatisticsListResponse;
}(SpeakeasyBase));
export { DataPointsGetStatisticsListResponse };
