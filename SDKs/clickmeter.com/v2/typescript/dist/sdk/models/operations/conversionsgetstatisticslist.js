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
var ConversionsGetStatisticsListPathParams = /** @class */ (function (_super) {
    __extends(ConversionsGetStatisticsListPathParams, _super);
    function ConversionsGetStatisticsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversionId" }),
        __metadata("design:type", Number)
    ], ConversionsGetStatisticsListPathParams.prototype, "conversionId", void 0);
    return ConversionsGetStatisticsListPathParams;
}(SpeakeasyBase));
export { ConversionsGetStatisticsListPathParams };
export var ConversionsGetStatisticsListGroupByEnum;
(function (ConversionsGetStatisticsListGroupByEnum) {
    ConversionsGetStatisticsListGroupByEnum["Week"] = "week";
    ConversionsGetStatisticsListGroupByEnum["Month"] = "month";
})(ConversionsGetStatisticsListGroupByEnum || (ConversionsGetStatisticsListGroupByEnum = {}));
export var ConversionsGetStatisticsListTimeFrameEnum;
(function (ConversionsGetStatisticsListTimeFrameEnum) {
    ConversionsGetStatisticsListTimeFrameEnum["Today"] = "today";
    ConversionsGetStatisticsListTimeFrameEnum["Yesterday"] = "yesterday";
    ConversionsGetStatisticsListTimeFrameEnum["Last7"] = "last7";
    ConversionsGetStatisticsListTimeFrameEnum["Last30"] = "last30";
    ConversionsGetStatisticsListTimeFrameEnum["Lastmonth"] = "lastmonth";
    ConversionsGetStatisticsListTimeFrameEnum["Currentmonth"] = "currentmonth";
    ConversionsGetStatisticsListTimeFrameEnum["Previousmonth"] = "previousmonth";
    ConversionsGetStatisticsListTimeFrameEnum["Last90"] = "last90";
    ConversionsGetStatisticsListTimeFrameEnum["Last120"] = "last120";
    ConversionsGetStatisticsListTimeFrameEnum["Last180"] = "last180";
    ConversionsGetStatisticsListTimeFrameEnum["Last12months"] = "last12months";
    ConversionsGetStatisticsListTimeFrameEnum["Lastyear"] = "lastyear";
    ConversionsGetStatisticsListTimeFrameEnum["Currentyear"] = "currentyear";
    ConversionsGetStatisticsListTimeFrameEnum["Beginning"] = "beginning";
    ConversionsGetStatisticsListTimeFrameEnum["Custom"] = "custom";
})(ConversionsGetStatisticsListTimeFrameEnum || (ConversionsGetStatisticsListTimeFrameEnum = {}));
var ConversionsGetStatisticsListQueryParams = /** @class */ (function (_super) {
    __extends(ConversionsGetStatisticsListQueryParams, _super);
    function ConversionsGetStatisticsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDay" }),
        __metadata("design:type", String)
    ], ConversionsGetStatisticsListQueryParams.prototype, "fromDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupBy" }),
        __metadata("design:type", String)
    ], ConversionsGetStatisticsListQueryParams.prototype, "groupBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeFrame" }),
        __metadata("design:type", String)
    ], ConversionsGetStatisticsListQueryParams.prototype, "timeFrame", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDay" }),
        __metadata("design:type", String)
    ], ConversionsGetStatisticsListQueryParams.prototype, "toDay", void 0);
    return ConversionsGetStatisticsListQueryParams;
}(SpeakeasyBase));
export { ConversionsGetStatisticsListQueryParams };
var ConversionsGetStatisticsListRequest = /** @class */ (function (_super) {
    __extends(ConversionsGetStatisticsListRequest, _super);
    function ConversionsGetStatisticsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConversionsGetStatisticsListPathParams)
    ], ConversionsGetStatisticsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConversionsGetStatisticsListQueryParams)
    ], ConversionsGetStatisticsListRequest.prototype, "queryParams", void 0);
    return ConversionsGetStatisticsListRequest;
}(SpeakeasyBase));
export { ConversionsGetStatisticsListRequest };
var ConversionsGetStatisticsListResponse = /** @class */ (function (_super) {
    __extends(ConversionsGetStatisticsListResponse, _super);
    function ConversionsGetStatisticsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult)
    ], ConversionsGetStatisticsListResponse.prototype, "apiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConversionsGetStatisticsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ConversionsGetStatisticsListResponse.prototype, "statusCode", void 0);
    return ConversionsGetStatisticsListResponse;
}(SpeakeasyBase));
export { ConversionsGetStatisticsListResponse };
