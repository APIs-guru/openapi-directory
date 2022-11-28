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
export var GroupsGetStatisticsAllListGroupByEnum;
(function (GroupsGetStatisticsAllListGroupByEnum) {
    GroupsGetStatisticsAllListGroupByEnum["Deleted"] = "deleted";
    GroupsGetStatisticsAllListGroupByEnum["Active"] = "active";
})(GroupsGetStatisticsAllListGroupByEnum || (GroupsGetStatisticsAllListGroupByEnum = {}));
export var GroupsGetStatisticsAllListTimeFrameEnum;
(function (GroupsGetStatisticsAllListTimeFrameEnum) {
    GroupsGetStatisticsAllListTimeFrameEnum["Today"] = "today";
    GroupsGetStatisticsAllListTimeFrameEnum["Yesterday"] = "yesterday";
    GroupsGetStatisticsAllListTimeFrameEnum["Last7"] = "last7";
    GroupsGetStatisticsAllListTimeFrameEnum["Last30"] = "last30";
    GroupsGetStatisticsAllListTimeFrameEnum["Lastmonth"] = "lastmonth";
    GroupsGetStatisticsAllListTimeFrameEnum["Currentmonth"] = "currentmonth";
    GroupsGetStatisticsAllListTimeFrameEnum["Previousmonth"] = "previousmonth";
    GroupsGetStatisticsAllListTimeFrameEnum["Last90"] = "last90";
    GroupsGetStatisticsAllListTimeFrameEnum["Last120"] = "last120";
    GroupsGetStatisticsAllListTimeFrameEnum["Last180"] = "last180";
    GroupsGetStatisticsAllListTimeFrameEnum["Last12months"] = "last12months";
    GroupsGetStatisticsAllListTimeFrameEnum["Lastyear"] = "lastyear";
    GroupsGetStatisticsAllListTimeFrameEnum["Currentyear"] = "currentyear";
    GroupsGetStatisticsAllListTimeFrameEnum["Beginning"] = "beginning";
    GroupsGetStatisticsAllListTimeFrameEnum["Custom"] = "custom";
})(GroupsGetStatisticsAllListTimeFrameEnum || (GroupsGetStatisticsAllListTimeFrameEnum = {}));
var GroupsGetStatisticsAllListQueryParams = /** @class */ (function (_super) {
    __extends(GroupsGetStatisticsAllListQueryParams, _super);
    function GroupsGetStatisticsAllListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=favourite" }),
        __metadata("design:type", Boolean)
    ], GroupsGetStatisticsAllListQueryParams.prototype, "favourite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDay" }),
        __metadata("design:type", String)
    ], GroupsGetStatisticsAllListQueryParams.prototype, "fromDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupBy" }),
        __metadata("design:type", String)
    ], GroupsGetStatisticsAllListQueryParams.prototype, "groupBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], GroupsGetStatisticsAllListQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" }),
        __metadata("design:type", String)
    ], GroupsGetStatisticsAllListQueryParams.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeFrame" }),
        __metadata("design:type", String)
    ], GroupsGetStatisticsAllListQueryParams.prototype, "timeFrame", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDay" }),
        __metadata("design:type", String)
    ], GroupsGetStatisticsAllListQueryParams.prototype, "toDay", void 0);
    return GroupsGetStatisticsAllListQueryParams;
}(SpeakeasyBase));
export { GroupsGetStatisticsAllListQueryParams };
var GroupsGetStatisticsAllListRequest = /** @class */ (function (_super) {
    __extends(GroupsGetStatisticsAllListRequest, _super);
    function GroupsGetStatisticsAllListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupsGetStatisticsAllListQueryParams)
    ], GroupsGetStatisticsAllListRequest.prototype, "queryParams", void 0);
    return GroupsGetStatisticsAllListRequest;
}(SpeakeasyBase));
export { GroupsGetStatisticsAllListRequest };
var GroupsGetStatisticsAllListResponse = /** @class */ (function (_super) {
    __extends(GroupsGetStatisticsAllListResponse, _super);
    function GroupsGetStatisticsAllListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult)
    ], GroupsGetStatisticsAllListResponse.prototype, "apiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GroupsGetStatisticsAllListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GroupsGetStatisticsAllListResponse.prototype, "statusCode", void 0);
    return GroupsGetStatisticsAllListResponse;
}(SpeakeasyBase));
export { GroupsGetStatisticsAllListResponse };
