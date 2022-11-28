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
var GroupsGetDatapointsSummaryPathParams = /** @class */ (function (_super) {
    __extends(GroupsGetDatapointsSummaryPathParams, _super);
    function GroupsGetDatapointsSummaryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GroupsGetDatapointsSummaryPathParams.prototype, "id", void 0);
    return GroupsGetDatapointsSummaryPathParams;
}(SpeakeasyBase));
export { GroupsGetDatapointsSummaryPathParams };
export var GroupsGetDatapointsSummarySortDirectionEnum;
(function (GroupsGetDatapointsSummarySortDirectionEnum) {
    GroupsGetDatapointsSummarySortDirectionEnum["Asc"] = "asc";
    GroupsGetDatapointsSummarySortDirectionEnum["Desc"] = "desc";
})(GroupsGetDatapointsSummarySortDirectionEnum || (GroupsGetDatapointsSummarySortDirectionEnum = {}));
export var GroupsGetDatapointsSummaryStatusEnum;
(function (GroupsGetDatapointsSummaryStatusEnum) {
    GroupsGetDatapointsSummaryStatusEnum["Deleted"] = "deleted";
    GroupsGetDatapointsSummaryStatusEnum["Active"] = "active";
})(GroupsGetDatapointsSummaryStatusEnum || (GroupsGetDatapointsSummaryStatusEnum = {}));
export var GroupsGetDatapointsSummaryTimeFrameEnum;
(function (GroupsGetDatapointsSummaryTimeFrameEnum) {
    GroupsGetDatapointsSummaryTimeFrameEnum["Today"] = "today";
    GroupsGetDatapointsSummaryTimeFrameEnum["Yesterday"] = "yesterday";
    GroupsGetDatapointsSummaryTimeFrameEnum["Last7"] = "last7";
    GroupsGetDatapointsSummaryTimeFrameEnum["Last30"] = "last30";
    GroupsGetDatapointsSummaryTimeFrameEnum["Lastmonth"] = "lastmonth";
    GroupsGetDatapointsSummaryTimeFrameEnum["Currentmonth"] = "currentmonth";
    GroupsGetDatapointsSummaryTimeFrameEnum["Previousmonth"] = "previousmonth";
    GroupsGetDatapointsSummaryTimeFrameEnum["Last90"] = "last90";
    GroupsGetDatapointsSummaryTimeFrameEnum["Last120"] = "last120";
    GroupsGetDatapointsSummaryTimeFrameEnum["Last180"] = "last180";
    GroupsGetDatapointsSummaryTimeFrameEnum["Last12months"] = "last12months";
    GroupsGetDatapointsSummaryTimeFrameEnum["Lastyear"] = "lastyear";
    GroupsGetDatapointsSummaryTimeFrameEnum["Currentyear"] = "currentyear";
    GroupsGetDatapointsSummaryTimeFrameEnum["Beginning"] = "beginning";
    GroupsGetDatapointsSummaryTimeFrameEnum["Custom"] = "custom";
})(GroupsGetDatapointsSummaryTimeFrameEnum || (GroupsGetDatapointsSummaryTimeFrameEnum = {}));
export var GroupsGetDatapointsSummaryTypeEnum;
(function (GroupsGetDatapointsSummaryTypeEnum) {
    GroupsGetDatapointsSummaryTypeEnum["Tp"] = "tp";
    GroupsGetDatapointsSummaryTypeEnum["Tl"] = "tl";
})(GroupsGetDatapointsSummaryTypeEnum || (GroupsGetDatapointsSummaryTypeEnum = {}));
var GroupsGetDatapointsSummaryQueryParams = /** @class */ (function (_super) {
    __extends(GroupsGetDatapointsSummaryQueryParams, _super);
    function GroupsGetDatapointsSummaryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=favourite" }),
        __metadata("design:type", Boolean)
    ], GroupsGetDatapointsSummaryQueryParams.prototype, "favourite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDay" }),
        __metadata("design:type", String)
    ], GroupsGetDatapointsSummaryQueryParams.prototype, "fromDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GroupsGetDatapointsSummaryQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GroupsGetDatapointsSummaryQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" }),
        __metadata("design:type", String)
    ], GroupsGetDatapointsSummaryQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortDirection" }),
        __metadata("design:type", String)
    ], GroupsGetDatapointsSummaryQueryParams.prototype, "sortDirection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], GroupsGetDatapointsSummaryQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" }),
        __metadata("design:type", String)
    ], GroupsGetDatapointsSummaryQueryParams.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=textSearch" }),
        __metadata("design:type", String)
    ], GroupsGetDatapointsSummaryQueryParams.prototype, "textSearch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeFrame" }),
        __metadata("design:type", String)
    ], GroupsGetDatapointsSummaryQueryParams.prototype, "timeFrame", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDay" }),
        __metadata("design:type", String)
    ], GroupsGetDatapointsSummaryQueryParams.prototype, "toDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GroupsGetDatapointsSummaryQueryParams.prototype, "type", void 0);
    return GroupsGetDatapointsSummaryQueryParams;
}(SpeakeasyBase));
export { GroupsGetDatapointsSummaryQueryParams };
var GroupsGetDatapointsSummaryRequest = /** @class */ (function (_super) {
    __extends(GroupsGetDatapointsSummaryRequest, _super);
    function GroupsGetDatapointsSummaryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupsGetDatapointsSummaryPathParams)
    ], GroupsGetDatapointsSummaryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupsGetDatapointsSummaryQueryParams)
    ], GroupsGetDatapointsSummaryRequest.prototype, "queryParams", void 0);
    return GroupsGetDatapointsSummaryRequest;
}(SpeakeasyBase));
export { GroupsGetDatapointsSummaryRequest };
var GroupsGetDatapointsSummaryResponse = /** @class */ (function (_super) {
    __extends(GroupsGetDatapointsSummaryResponse, _super);
    function GroupsGetDatapointsSummaryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreDtoAggregatedAggregatedSummaryResult)
    ], GroupsGetDatapointsSummaryResponse.prototype, "apiCoreDtoAggregatedAggregatedSummaryResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GroupsGetDatapointsSummaryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GroupsGetDatapointsSummaryResponse.prototype, "statusCode", void 0);
    return GroupsGetDatapointsSummaryResponse;
}(SpeakeasyBase));
export { GroupsGetDatapointsSummaryResponse };
