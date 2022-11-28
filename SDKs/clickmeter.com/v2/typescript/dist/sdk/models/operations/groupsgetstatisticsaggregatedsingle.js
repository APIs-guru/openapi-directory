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
export var GroupsGetStatisticsAggregatedSingleStatusEnum;
(function (GroupsGetStatisticsAggregatedSingleStatusEnum) {
    GroupsGetStatisticsAggregatedSingleStatusEnum["Deleted"] = "deleted";
    GroupsGetStatisticsAggregatedSingleStatusEnum["Active"] = "active";
})(GroupsGetStatisticsAggregatedSingleStatusEnum || (GroupsGetStatisticsAggregatedSingleStatusEnum = {}));
export var GroupsGetStatisticsAggregatedSingleTimeFrameEnum;
(function (GroupsGetStatisticsAggregatedSingleTimeFrameEnum) {
    GroupsGetStatisticsAggregatedSingleTimeFrameEnum["Today"] = "today";
    GroupsGetStatisticsAggregatedSingleTimeFrameEnum["Yesterday"] = "yesterday";
    GroupsGetStatisticsAggregatedSingleTimeFrameEnum["Last7"] = "last7";
    GroupsGetStatisticsAggregatedSingleTimeFrameEnum["Last30"] = "last30";
    GroupsGetStatisticsAggregatedSingleTimeFrameEnum["Lastmonth"] = "lastmonth";
    GroupsGetStatisticsAggregatedSingleTimeFrameEnum["Currentmonth"] = "currentmonth";
    GroupsGetStatisticsAggregatedSingleTimeFrameEnum["Previousmonth"] = "previousmonth";
    GroupsGetStatisticsAggregatedSingleTimeFrameEnum["Last90"] = "last90";
    GroupsGetStatisticsAggregatedSingleTimeFrameEnum["Last120"] = "last120";
    GroupsGetStatisticsAggregatedSingleTimeFrameEnum["Last180"] = "last180";
    GroupsGetStatisticsAggregatedSingleTimeFrameEnum["Last12months"] = "last12months";
    GroupsGetStatisticsAggregatedSingleTimeFrameEnum["Lastyear"] = "lastyear";
    GroupsGetStatisticsAggregatedSingleTimeFrameEnum["Currentyear"] = "currentyear";
    GroupsGetStatisticsAggregatedSingleTimeFrameEnum["Beginning"] = "beginning";
    GroupsGetStatisticsAggregatedSingleTimeFrameEnum["Custom"] = "custom";
})(GroupsGetStatisticsAggregatedSingleTimeFrameEnum || (GroupsGetStatisticsAggregatedSingleTimeFrameEnum = {}));
var GroupsGetStatisticsAggregatedSingleQueryParams = /** @class */ (function (_super) {
    __extends(GroupsGetStatisticsAggregatedSingleQueryParams, _super);
    function GroupsGetStatisticsAggregatedSingleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=favourite" }),
        __metadata("design:type", Boolean)
    ], GroupsGetStatisticsAggregatedSingleQueryParams.prototype, "favourite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDay" }),
        __metadata("design:type", String)
    ], GroupsGetStatisticsAggregatedSingleQueryParams.prototype, "fromDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hourly" }),
        __metadata("design:type", Boolean)
    ], GroupsGetStatisticsAggregatedSingleQueryParams.prototype, "hourly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], GroupsGetStatisticsAggregatedSingleQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" }),
        __metadata("design:type", String)
    ], GroupsGetStatisticsAggregatedSingleQueryParams.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeFrame" }),
        __metadata("design:type", String)
    ], GroupsGetStatisticsAggregatedSingleQueryParams.prototype, "timeFrame", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDay" }),
        __metadata("design:type", String)
    ], GroupsGetStatisticsAggregatedSingleQueryParams.prototype, "toDay", void 0);
    return GroupsGetStatisticsAggregatedSingleQueryParams;
}(SpeakeasyBase));
export { GroupsGetStatisticsAggregatedSingleQueryParams };
var GroupsGetStatisticsAggregatedSingleRequest = /** @class */ (function (_super) {
    __extends(GroupsGetStatisticsAggregatedSingleRequest, _super);
    function GroupsGetStatisticsAggregatedSingleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupsGetStatisticsAggregatedSingleQueryParams)
    ], GroupsGetStatisticsAggregatedSingleRequest.prototype, "queryParams", void 0);
    return GroupsGetStatisticsAggregatedSingleRequest;
}(SpeakeasyBase));
export { GroupsGetStatisticsAggregatedSingleRequest };
var GroupsGetStatisticsAggregatedSingleResponse = /** @class */ (function (_super) {
    __extends(GroupsGetStatisticsAggregatedSingleResponse, _super);
    function GroupsGetStatisticsAggregatedSingleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreDtoAggregatedAggregatedResult)
    ], GroupsGetStatisticsAggregatedSingleResponse.prototype, "apiCoreDtoAggregatedAggregatedResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GroupsGetStatisticsAggregatedSingleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GroupsGetStatisticsAggregatedSingleResponse.prototype, "statusCode", void 0);
    return GroupsGetStatisticsAggregatedSingleResponse;
}(SpeakeasyBase));
export { GroupsGetStatisticsAggregatedSingleResponse };
