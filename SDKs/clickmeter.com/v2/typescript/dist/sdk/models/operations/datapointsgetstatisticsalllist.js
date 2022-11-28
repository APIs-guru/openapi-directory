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
export var DataPointsGetStatisticsAllListGroupByEnum;
(function (DataPointsGetStatisticsAllListGroupByEnum) {
    DataPointsGetStatisticsAllListGroupByEnum["Week"] = "week";
    DataPointsGetStatisticsAllListGroupByEnum["Month"] = "month";
})(DataPointsGetStatisticsAllListGroupByEnum || (DataPointsGetStatisticsAllListGroupByEnum = {}));
export var DataPointsGetStatisticsAllListStatusEnum;
(function (DataPointsGetStatisticsAllListStatusEnum) {
    DataPointsGetStatisticsAllListStatusEnum["Deleted"] = "deleted";
    DataPointsGetStatisticsAllListStatusEnum["Active"] = "active";
    DataPointsGetStatisticsAllListStatusEnum["Paused"] = "paused";
    DataPointsGetStatisticsAllListStatusEnum["Spam"] = "spam";
})(DataPointsGetStatisticsAllListStatusEnum || (DataPointsGetStatisticsAllListStatusEnum = {}));
export var DataPointsGetStatisticsAllListTimeFrameEnum;
(function (DataPointsGetStatisticsAllListTimeFrameEnum) {
    DataPointsGetStatisticsAllListTimeFrameEnum["Today"] = "today";
    DataPointsGetStatisticsAllListTimeFrameEnum["Yesterday"] = "yesterday";
    DataPointsGetStatisticsAllListTimeFrameEnum["Last7"] = "last7";
    DataPointsGetStatisticsAllListTimeFrameEnum["Last30"] = "last30";
    DataPointsGetStatisticsAllListTimeFrameEnum["Lastmonth"] = "lastmonth";
    DataPointsGetStatisticsAllListTimeFrameEnum["Currentmonth"] = "currentmonth";
    DataPointsGetStatisticsAllListTimeFrameEnum["Previousmonth"] = "previousmonth";
    DataPointsGetStatisticsAllListTimeFrameEnum["Last90"] = "last90";
    DataPointsGetStatisticsAllListTimeFrameEnum["Last120"] = "last120";
    DataPointsGetStatisticsAllListTimeFrameEnum["Last180"] = "last180";
    DataPointsGetStatisticsAllListTimeFrameEnum["Last12months"] = "last12months";
    DataPointsGetStatisticsAllListTimeFrameEnum["Lastyear"] = "lastyear";
    DataPointsGetStatisticsAllListTimeFrameEnum["Currentyear"] = "currentyear";
    DataPointsGetStatisticsAllListTimeFrameEnum["Beginning"] = "beginning";
    DataPointsGetStatisticsAllListTimeFrameEnum["Custom"] = "custom";
})(DataPointsGetStatisticsAllListTimeFrameEnum || (DataPointsGetStatisticsAllListTimeFrameEnum = {}));
export var DataPointsGetStatisticsAllListTypeEnum;
(function (DataPointsGetStatisticsAllListTypeEnum) {
    DataPointsGetStatisticsAllListTypeEnum["Tp"] = "tp";
    DataPointsGetStatisticsAllListTypeEnum["Tl"] = "tl";
})(DataPointsGetStatisticsAllListTypeEnum || (DataPointsGetStatisticsAllListTypeEnum = {}));
var DataPointsGetStatisticsAllListQueryParams = /** @class */ (function (_super) {
    __extends(DataPointsGetStatisticsAllListQueryParams, _super);
    function DataPointsGetStatisticsAllListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=favourite" }),
        __metadata("design:type", Boolean)
    ], DataPointsGetStatisticsAllListQueryParams.prototype, "favourite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDay" }),
        __metadata("design:type", String)
    ], DataPointsGetStatisticsAllListQueryParams.prototype, "fromDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupBy" }),
        __metadata("design:type", String)
    ], DataPointsGetStatisticsAllListQueryParams.prototype, "groupBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], DataPointsGetStatisticsAllListQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" }),
        __metadata("design:type", String)
    ], DataPointsGetStatisticsAllListQueryParams.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeFrame" }),
        __metadata("design:type", String)
    ], DataPointsGetStatisticsAllListQueryParams.prototype, "timeFrame", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDay" }),
        __metadata("design:type", String)
    ], DataPointsGetStatisticsAllListQueryParams.prototype, "toDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], DataPointsGetStatisticsAllListQueryParams.prototype, "type", void 0);
    return DataPointsGetStatisticsAllListQueryParams;
}(SpeakeasyBase));
export { DataPointsGetStatisticsAllListQueryParams };
var DataPointsGetStatisticsAllListRequest = /** @class */ (function (_super) {
    __extends(DataPointsGetStatisticsAllListRequest, _super);
    function DataPointsGetStatisticsAllListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataPointsGetStatisticsAllListQueryParams)
    ], DataPointsGetStatisticsAllListRequest.prototype, "queryParams", void 0);
    return DataPointsGetStatisticsAllListRequest;
}(SpeakeasyBase));
export { DataPointsGetStatisticsAllListRequest };
var DataPointsGetStatisticsAllListResponse = /** @class */ (function (_super) {
    __extends(DataPointsGetStatisticsAllListResponse, _super);
    function DataPointsGetStatisticsAllListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult)
    ], DataPointsGetStatisticsAllListResponse.prototype, "apiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataPointsGetStatisticsAllListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataPointsGetStatisticsAllListResponse.prototype, "statusCode", void 0);
    return DataPointsGetStatisticsAllListResponse;
}(SpeakeasyBase));
export { DataPointsGetStatisticsAllListResponse };
