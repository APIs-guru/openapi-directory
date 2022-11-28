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
var GroupsGetHitsPathParams = /** @class */ (function (_super) {
    __extends(GroupsGetHitsPathParams, _super);
    function GroupsGetHitsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GroupsGetHitsPathParams.prototype, "id", void 0);
    return GroupsGetHitsPathParams;
}(SpeakeasyBase));
export { GroupsGetHitsPathParams };
export var GroupsGetHitsFilterEnum;
(function (GroupsGetHitsFilterEnum) {
    GroupsGetHitsFilterEnum["Spiders"] = "spiders";
    GroupsGetHitsFilterEnum["Uniques"] = "uniques";
    GroupsGetHitsFilterEnum["Nonuniques"] = "nonuniques";
    GroupsGetHitsFilterEnum["Conversions"] = "conversions";
})(GroupsGetHitsFilterEnum || (GroupsGetHitsFilterEnum = {}));
export var GroupsGetHitsTimeframeEnum;
(function (GroupsGetHitsTimeframeEnum) {
    GroupsGetHitsTimeframeEnum["Yesterday"] = "yesterday";
    GroupsGetHitsTimeframeEnum["Last7"] = "last7";
    GroupsGetHitsTimeframeEnum["Last30"] = "last30";
    GroupsGetHitsTimeframeEnum["Lastmonth"] = "lastmonth";
    GroupsGetHitsTimeframeEnum["Currentmonth"] = "currentmonth";
    GroupsGetHitsTimeframeEnum["Previousmonth"] = "previousmonth";
    GroupsGetHitsTimeframeEnum["Last90"] = "last90";
    GroupsGetHitsTimeframeEnum["Last120"] = "last120";
    GroupsGetHitsTimeframeEnum["Last180"] = "last180";
    GroupsGetHitsTimeframeEnum["Custom"] = "custom";
})(GroupsGetHitsTimeframeEnum || (GroupsGetHitsTimeframeEnum = {}));
var GroupsGetHitsQueryParams = /** @class */ (function (_super) {
    __extends(GroupsGetHitsQueryParams, _super);
    function GroupsGetHitsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GroupsGetHitsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDay" }),
        __metadata("design:type", String)
    ], GroupsGetHitsQueryParams.prototype, "fromDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GroupsGetHitsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GroupsGetHitsQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeframe" }),
        __metadata("design:type", String)
    ], GroupsGetHitsQueryParams.prototype, "timeframe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDay" }),
        __metadata("design:type", String)
    ], GroupsGetHitsQueryParams.prototype, "toDay", void 0);
    return GroupsGetHitsQueryParams;
}(SpeakeasyBase));
export { GroupsGetHitsQueryParams };
var GroupsGetHitsRequest = /** @class */ (function (_super) {
    __extends(GroupsGetHitsRequest, _super);
    function GroupsGetHitsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupsGetHitsPathParams)
    ], GroupsGetHitsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupsGetHitsQueryParams)
    ], GroupsGetHitsRequest.prototype, "queryParams", void 0);
    return GroupsGetHitsRequest;
}(SpeakeasyBase));
export { GroupsGetHitsRequest };
var GroupsGetHitsResponse = /** @class */ (function (_super) {
    __extends(GroupsGetHitsResponse, _super);
    function GroupsGetHitsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreDtoClickStreamHitListPage)
    ], GroupsGetHitsResponse.prototype, "apiCoreDtoClickStreamHitListPage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GroupsGetHitsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GroupsGetHitsResponse.prototype, "statusCode", void 0);
    return GroupsGetHitsResponse;
}(SpeakeasyBase));
export { GroupsGetHitsResponse };
