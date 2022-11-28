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
export var DataPointsGetStatisticsAggregatedSingleStatusEnum;
(function (DataPointsGetStatisticsAggregatedSingleStatusEnum) {
    DataPointsGetStatisticsAggregatedSingleStatusEnum["Deleted"] = "deleted";
    DataPointsGetStatisticsAggregatedSingleStatusEnum["Active"] = "active";
    DataPointsGetStatisticsAggregatedSingleStatusEnum["Paused"] = "paused";
    DataPointsGetStatisticsAggregatedSingleStatusEnum["Spam"] = "spam";
})(DataPointsGetStatisticsAggregatedSingleStatusEnum || (DataPointsGetStatisticsAggregatedSingleStatusEnum = {}));
export var DataPointsGetStatisticsAggregatedSingleTimeFrameEnum;
(function (DataPointsGetStatisticsAggregatedSingleTimeFrameEnum) {
    DataPointsGetStatisticsAggregatedSingleTimeFrameEnum["Today"] = "today";
    DataPointsGetStatisticsAggregatedSingleTimeFrameEnum["Yesterday"] = "yesterday";
    DataPointsGetStatisticsAggregatedSingleTimeFrameEnum["Last7"] = "last7";
    DataPointsGetStatisticsAggregatedSingleTimeFrameEnum["Last30"] = "last30";
    DataPointsGetStatisticsAggregatedSingleTimeFrameEnum["Lastmonth"] = "lastmonth";
    DataPointsGetStatisticsAggregatedSingleTimeFrameEnum["Currentmonth"] = "currentmonth";
    DataPointsGetStatisticsAggregatedSingleTimeFrameEnum["Previousmonth"] = "previousmonth";
    DataPointsGetStatisticsAggregatedSingleTimeFrameEnum["Last90"] = "last90";
    DataPointsGetStatisticsAggregatedSingleTimeFrameEnum["Last120"] = "last120";
    DataPointsGetStatisticsAggregatedSingleTimeFrameEnum["Last180"] = "last180";
    DataPointsGetStatisticsAggregatedSingleTimeFrameEnum["Last12months"] = "last12months";
    DataPointsGetStatisticsAggregatedSingleTimeFrameEnum["Lastyear"] = "lastyear";
    DataPointsGetStatisticsAggregatedSingleTimeFrameEnum["Currentyear"] = "currentyear";
    DataPointsGetStatisticsAggregatedSingleTimeFrameEnum["Beginning"] = "beginning";
    DataPointsGetStatisticsAggregatedSingleTimeFrameEnum["Custom"] = "custom";
})(DataPointsGetStatisticsAggregatedSingleTimeFrameEnum || (DataPointsGetStatisticsAggregatedSingleTimeFrameEnum = {}));
export var DataPointsGetStatisticsAggregatedSingleTypeEnum;
(function (DataPointsGetStatisticsAggregatedSingleTypeEnum) {
    DataPointsGetStatisticsAggregatedSingleTypeEnum["Tp"] = "tp";
    DataPointsGetStatisticsAggregatedSingleTypeEnum["Tl"] = "tl";
})(DataPointsGetStatisticsAggregatedSingleTypeEnum || (DataPointsGetStatisticsAggregatedSingleTypeEnum = {}));
var DataPointsGetStatisticsAggregatedSingleQueryParams = /** @class */ (function (_super) {
    __extends(DataPointsGetStatisticsAggregatedSingleQueryParams, _super);
    function DataPointsGetStatisticsAggregatedSingleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=favourite" }),
        __metadata("design:type", Boolean)
    ], DataPointsGetStatisticsAggregatedSingleQueryParams.prototype, "favourite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDay" }),
        __metadata("design:type", String)
    ], DataPointsGetStatisticsAggregatedSingleQueryParams.prototype, "fromDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hourly" }),
        __metadata("design:type", Boolean)
    ], DataPointsGetStatisticsAggregatedSingleQueryParams.prototype, "hourly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], DataPointsGetStatisticsAggregatedSingleQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" }),
        __metadata("design:type", String)
    ], DataPointsGetStatisticsAggregatedSingleQueryParams.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeFrame" }),
        __metadata("design:type", String)
    ], DataPointsGetStatisticsAggregatedSingleQueryParams.prototype, "timeFrame", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDay" }),
        __metadata("design:type", String)
    ], DataPointsGetStatisticsAggregatedSingleQueryParams.prototype, "toDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], DataPointsGetStatisticsAggregatedSingleQueryParams.prototype, "type", void 0);
    return DataPointsGetStatisticsAggregatedSingleQueryParams;
}(SpeakeasyBase));
export { DataPointsGetStatisticsAggregatedSingleQueryParams };
var DataPointsGetStatisticsAggregatedSingleRequest = /** @class */ (function (_super) {
    __extends(DataPointsGetStatisticsAggregatedSingleRequest, _super);
    function DataPointsGetStatisticsAggregatedSingleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataPointsGetStatisticsAggregatedSingleQueryParams)
    ], DataPointsGetStatisticsAggregatedSingleRequest.prototype, "queryParams", void 0);
    return DataPointsGetStatisticsAggregatedSingleRequest;
}(SpeakeasyBase));
export { DataPointsGetStatisticsAggregatedSingleRequest };
var DataPointsGetStatisticsAggregatedSingleResponse = /** @class */ (function (_super) {
    __extends(DataPointsGetStatisticsAggregatedSingleResponse, _super);
    function DataPointsGetStatisticsAggregatedSingleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreDtoAggregatedAggregatedResult)
    ], DataPointsGetStatisticsAggregatedSingleResponse.prototype, "apiCoreDtoAggregatedAggregatedResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataPointsGetStatisticsAggregatedSingleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataPointsGetStatisticsAggregatedSingleResponse.prototype, "statusCode", void 0);
    return DataPointsGetStatisticsAggregatedSingleResponse;
}(SpeakeasyBase));
export { DataPointsGetStatisticsAggregatedSingleResponse };
