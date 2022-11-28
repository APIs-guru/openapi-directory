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
var GroupsGetStatisticsListPathParams = /** @class */ (function (_super) {
    __extends(GroupsGetStatisticsListPathParams, _super);
    function GroupsGetStatisticsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GroupsGetStatisticsListPathParams.prototype, "id", void 0);
    return GroupsGetStatisticsListPathParams;
}(SpeakeasyBase));
export { GroupsGetStatisticsListPathParams };
export var GroupsGetStatisticsListGroupByEnum;
(function (GroupsGetStatisticsListGroupByEnum) {
    GroupsGetStatisticsListGroupByEnum["Week"] = "week";
    GroupsGetStatisticsListGroupByEnum["Month"] = "month";
})(GroupsGetStatisticsListGroupByEnum || (GroupsGetStatisticsListGroupByEnum = {}));
export var GroupsGetStatisticsListTimeFrameEnum;
(function (GroupsGetStatisticsListTimeFrameEnum) {
    GroupsGetStatisticsListTimeFrameEnum["Today"] = "today";
    GroupsGetStatisticsListTimeFrameEnum["Yesterday"] = "yesterday";
    GroupsGetStatisticsListTimeFrameEnum["Last7"] = "last7";
    GroupsGetStatisticsListTimeFrameEnum["Last30"] = "last30";
    GroupsGetStatisticsListTimeFrameEnum["Lastmonth"] = "lastmonth";
    GroupsGetStatisticsListTimeFrameEnum["Currentmonth"] = "currentmonth";
    GroupsGetStatisticsListTimeFrameEnum["Previousmonth"] = "previousmonth";
    GroupsGetStatisticsListTimeFrameEnum["Last90"] = "last90";
    GroupsGetStatisticsListTimeFrameEnum["Last120"] = "last120";
    GroupsGetStatisticsListTimeFrameEnum["Last180"] = "last180";
    GroupsGetStatisticsListTimeFrameEnum["Last12months"] = "last12months";
    GroupsGetStatisticsListTimeFrameEnum["Lastyear"] = "lastyear";
    GroupsGetStatisticsListTimeFrameEnum["Currentyear"] = "currentyear";
    GroupsGetStatisticsListTimeFrameEnum["Beginning"] = "beginning";
    GroupsGetStatisticsListTimeFrameEnum["Custom"] = "custom";
})(GroupsGetStatisticsListTimeFrameEnum || (GroupsGetStatisticsListTimeFrameEnum = {}));
var GroupsGetStatisticsListQueryParams = /** @class */ (function (_super) {
    __extends(GroupsGetStatisticsListQueryParams, _super);
    function GroupsGetStatisticsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDay" }),
        __metadata("design:type", String)
    ], GroupsGetStatisticsListQueryParams.prototype, "fromDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupBy" }),
        __metadata("design:type", String)
    ], GroupsGetStatisticsListQueryParams.prototype, "groupBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeFrame" }),
        __metadata("design:type", String)
    ], GroupsGetStatisticsListQueryParams.prototype, "timeFrame", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDay" }),
        __metadata("design:type", String)
    ], GroupsGetStatisticsListQueryParams.prototype, "toDay", void 0);
    return GroupsGetStatisticsListQueryParams;
}(SpeakeasyBase));
export { GroupsGetStatisticsListQueryParams };
var GroupsGetStatisticsListRequest = /** @class */ (function (_super) {
    __extends(GroupsGetStatisticsListRequest, _super);
    function GroupsGetStatisticsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupsGetStatisticsListPathParams)
    ], GroupsGetStatisticsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupsGetStatisticsListQueryParams)
    ], GroupsGetStatisticsListRequest.prototype, "queryParams", void 0);
    return GroupsGetStatisticsListRequest;
}(SpeakeasyBase));
export { GroupsGetStatisticsListRequest };
var GroupsGetStatisticsListResponse = /** @class */ (function (_super) {
    __extends(GroupsGetStatisticsListResponse, _super);
    function GroupsGetStatisticsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult)
    ], GroupsGetStatisticsListResponse.prototype, "apiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GroupsGetStatisticsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GroupsGetStatisticsListResponse.prototype, "statusCode", void 0);
    return GroupsGetStatisticsListResponse;
}(SpeakeasyBase));
export { GroupsGetStatisticsListResponse };
