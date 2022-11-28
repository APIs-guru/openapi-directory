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
var GroupsGetStatisticsSinglePathParams = /** @class */ (function (_super) {
    __extends(GroupsGetStatisticsSinglePathParams, _super);
    function GroupsGetStatisticsSinglePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GroupsGetStatisticsSinglePathParams.prototype, "id", void 0);
    return GroupsGetStatisticsSinglePathParams;
}(SpeakeasyBase));
export { GroupsGetStatisticsSinglePathParams };
export var GroupsGetStatisticsSingleTimeFrameEnum;
(function (GroupsGetStatisticsSingleTimeFrameEnum) {
    GroupsGetStatisticsSingleTimeFrameEnum["Today"] = "today";
    GroupsGetStatisticsSingleTimeFrameEnum["Yesterday"] = "yesterday";
    GroupsGetStatisticsSingleTimeFrameEnum["Last7"] = "last7";
    GroupsGetStatisticsSingleTimeFrameEnum["Last30"] = "last30";
    GroupsGetStatisticsSingleTimeFrameEnum["Lastmonth"] = "lastmonth";
    GroupsGetStatisticsSingleTimeFrameEnum["Currentmonth"] = "currentmonth";
    GroupsGetStatisticsSingleTimeFrameEnum["Previousmonth"] = "previousmonth";
    GroupsGetStatisticsSingleTimeFrameEnum["Last90"] = "last90";
    GroupsGetStatisticsSingleTimeFrameEnum["Last120"] = "last120";
    GroupsGetStatisticsSingleTimeFrameEnum["Last180"] = "last180";
    GroupsGetStatisticsSingleTimeFrameEnum["Last12months"] = "last12months";
    GroupsGetStatisticsSingleTimeFrameEnum["Lastyear"] = "lastyear";
    GroupsGetStatisticsSingleTimeFrameEnum["Currentyear"] = "currentyear";
    GroupsGetStatisticsSingleTimeFrameEnum["Beginning"] = "beginning";
    GroupsGetStatisticsSingleTimeFrameEnum["Custom"] = "custom";
})(GroupsGetStatisticsSingleTimeFrameEnum || (GroupsGetStatisticsSingleTimeFrameEnum = {}));
var GroupsGetStatisticsSingleQueryParams = /** @class */ (function (_super) {
    __extends(GroupsGetStatisticsSingleQueryParams, _super);
    function GroupsGetStatisticsSingleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDay" }),
        __metadata("design:type", String)
    ], GroupsGetStatisticsSingleQueryParams.prototype, "fromDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hourly" }),
        __metadata("design:type", Boolean)
    ], GroupsGetStatisticsSingleQueryParams.prototype, "hourly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeFrame" }),
        __metadata("design:type", String)
    ], GroupsGetStatisticsSingleQueryParams.prototype, "timeFrame", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDay" }),
        __metadata("design:type", String)
    ], GroupsGetStatisticsSingleQueryParams.prototype, "toDay", void 0);
    return GroupsGetStatisticsSingleQueryParams;
}(SpeakeasyBase));
export { GroupsGetStatisticsSingleQueryParams };
var GroupsGetStatisticsSingleRequest = /** @class */ (function (_super) {
    __extends(GroupsGetStatisticsSingleRequest, _super);
    function GroupsGetStatisticsSingleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupsGetStatisticsSinglePathParams)
    ], GroupsGetStatisticsSingleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupsGetStatisticsSingleQueryParams)
    ], GroupsGetStatisticsSingleRequest.prototype, "queryParams", void 0);
    return GroupsGetStatisticsSingleRequest;
}(SpeakeasyBase));
export { GroupsGetStatisticsSingleRequest };
var GroupsGetStatisticsSingleResponse = /** @class */ (function (_super) {
    __extends(GroupsGetStatisticsSingleResponse, _super);
    function GroupsGetStatisticsSingleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreDtoAggregatedAggregatedResult)
    ], GroupsGetStatisticsSingleResponse.prototype, "apiCoreDtoAggregatedAggregatedResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GroupsGetStatisticsSingleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GroupsGetStatisticsSingleResponse.prototype, "statusCode", void 0);
    return GroupsGetStatisticsSingleResponse;
}(SpeakeasyBase));
export { GroupsGetStatisticsSingleResponse };
