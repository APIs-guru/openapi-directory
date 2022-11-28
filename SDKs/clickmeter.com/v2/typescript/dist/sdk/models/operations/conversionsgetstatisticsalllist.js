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
export var ConversionsGetStatisticsAllListGroupByEnum;
(function (ConversionsGetStatisticsAllListGroupByEnum) {
    ConversionsGetStatisticsAllListGroupByEnum["Week"] = "week";
    ConversionsGetStatisticsAllListGroupByEnum["Month"] = "month";
})(ConversionsGetStatisticsAllListGroupByEnum || (ConversionsGetStatisticsAllListGroupByEnum = {}));
export var ConversionsGetStatisticsAllListStatusEnum;
(function (ConversionsGetStatisticsAllListStatusEnum) {
    ConversionsGetStatisticsAllListStatusEnum["Deleted"] = "deleted";
    ConversionsGetStatisticsAllListStatusEnum["Active"] = "active";
})(ConversionsGetStatisticsAllListStatusEnum || (ConversionsGetStatisticsAllListStatusEnum = {}));
export var ConversionsGetStatisticsAllListTimeFrameEnum;
(function (ConversionsGetStatisticsAllListTimeFrameEnum) {
    ConversionsGetStatisticsAllListTimeFrameEnum["Today"] = "today";
    ConversionsGetStatisticsAllListTimeFrameEnum["Yesterday"] = "yesterday";
    ConversionsGetStatisticsAllListTimeFrameEnum["Last7"] = "last7";
    ConversionsGetStatisticsAllListTimeFrameEnum["Last30"] = "last30";
    ConversionsGetStatisticsAllListTimeFrameEnum["Lastmonth"] = "lastmonth";
    ConversionsGetStatisticsAllListTimeFrameEnum["Currentmonth"] = "currentmonth";
    ConversionsGetStatisticsAllListTimeFrameEnum["Previousmonth"] = "previousmonth";
    ConversionsGetStatisticsAllListTimeFrameEnum["Last90"] = "last90";
    ConversionsGetStatisticsAllListTimeFrameEnum["Last120"] = "last120";
    ConversionsGetStatisticsAllListTimeFrameEnum["Last180"] = "last180";
    ConversionsGetStatisticsAllListTimeFrameEnum["Last12months"] = "last12months";
    ConversionsGetStatisticsAllListTimeFrameEnum["Lastyear"] = "lastyear";
    ConversionsGetStatisticsAllListTimeFrameEnum["Currentyear"] = "currentyear";
    ConversionsGetStatisticsAllListTimeFrameEnum["Beginning"] = "beginning";
    ConversionsGetStatisticsAllListTimeFrameEnum["Custom"] = "custom";
})(ConversionsGetStatisticsAllListTimeFrameEnum || (ConversionsGetStatisticsAllListTimeFrameEnum = {}));
var ConversionsGetStatisticsAllListQueryParams = /** @class */ (function (_super) {
    __extends(ConversionsGetStatisticsAllListQueryParams, _super);
    function ConversionsGetStatisticsAllListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDay" }),
        __metadata("design:type", String)
    ], ConversionsGetStatisticsAllListQueryParams.prototype, "fromDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupBy" }),
        __metadata("design:type", String)
    ], ConversionsGetStatisticsAllListQueryParams.prototype, "groupBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], ConversionsGetStatisticsAllListQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeFrame" }),
        __metadata("design:type", String)
    ], ConversionsGetStatisticsAllListQueryParams.prototype, "timeFrame", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDay" }),
        __metadata("design:type", String)
    ], ConversionsGetStatisticsAllListQueryParams.prototype, "toDay", void 0);
    return ConversionsGetStatisticsAllListQueryParams;
}(SpeakeasyBase));
export { ConversionsGetStatisticsAllListQueryParams };
var ConversionsGetStatisticsAllListRequest = /** @class */ (function (_super) {
    __extends(ConversionsGetStatisticsAllListRequest, _super);
    function ConversionsGetStatisticsAllListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConversionsGetStatisticsAllListQueryParams)
    ], ConversionsGetStatisticsAllListRequest.prototype, "queryParams", void 0);
    return ConversionsGetStatisticsAllListRequest;
}(SpeakeasyBase));
export { ConversionsGetStatisticsAllListRequest };
var ConversionsGetStatisticsAllListResponse = /** @class */ (function (_super) {
    __extends(ConversionsGetStatisticsAllListResponse, _super);
    function ConversionsGetStatisticsAllListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult)
    ], ConversionsGetStatisticsAllListResponse.prototype, "apiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConversionsGetStatisticsAllListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ConversionsGetStatisticsAllListResponse.prototype, "statusCode", void 0);
    return ConversionsGetStatisticsAllListResponse;
}(SpeakeasyBase));
export { ConversionsGetStatisticsAllListResponse };
