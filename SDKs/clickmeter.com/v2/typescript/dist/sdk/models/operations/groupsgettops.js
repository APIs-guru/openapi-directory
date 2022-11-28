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
var GroupsGetTopsPathParams = /** @class */ (function (_super) {
    __extends(GroupsGetTopsPathParams, _super);
    function GroupsGetTopsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GroupsGetTopsPathParams.prototype, "id", void 0);
    return GroupsGetTopsPathParams;
}(SpeakeasyBase));
export { GroupsGetTopsPathParams };
export var GroupsGetTopsHittypeEnum;
(function (GroupsGetTopsHittypeEnum) {
    GroupsGetTopsHittypeEnum["Clicks"] = "clicks";
    GroupsGetTopsHittypeEnum["Views"] = "views";
})(GroupsGetTopsHittypeEnum || (GroupsGetTopsHittypeEnum = {}));
export var GroupsGetTopsTimeframeEnum;
(function (GroupsGetTopsTimeframeEnum) {
    GroupsGetTopsTimeframeEnum["Yesterday"] = "yesterday";
    GroupsGetTopsTimeframeEnum["Last7"] = "last7";
    GroupsGetTopsTimeframeEnum["Last30"] = "last30";
    GroupsGetTopsTimeframeEnum["Lastmonth"] = "lastmonth";
    GroupsGetTopsTimeframeEnum["Currentmonth"] = "currentmonth";
    GroupsGetTopsTimeframeEnum["Previousmonth"] = "previousmonth";
    GroupsGetTopsTimeframeEnum["Last90"] = "last90";
    GroupsGetTopsTimeframeEnum["Last120"] = "last120";
    GroupsGetTopsTimeframeEnum["Last180"] = "last180";
    GroupsGetTopsTimeframeEnum["Beginning"] = "beginning";
    GroupsGetTopsTimeframeEnum["Custom"] = "custom";
})(GroupsGetTopsTimeframeEnum || (GroupsGetTopsTimeframeEnum = {}));
export var GroupsGetTopsTypeEnum;
(function (GroupsGetTopsTypeEnum) {
    GroupsGetTopsTypeEnum["Browsers"] = "browsers";
    GroupsGetTopsTypeEnum["Browsersfamilies"] = "browsersfamilies";
    GroupsGetTopsTypeEnum["Platforms"] = "platforms";
    GroupsGetTopsTypeEnum["Cities"] = "cities";
    GroupsGetTopsTypeEnum["Countries"] = "countries";
    GroupsGetTopsTypeEnum["Isps"] = "isps";
    GroupsGetTopsTypeEnum["Ips"] = "ips";
    GroupsGetTopsTypeEnum["Oss"] = "oss";
    GroupsGetTopsTypeEnum["Ossfamilies"] = "ossfamilies";
    GroupsGetTopsTypeEnum["Keywords"] = "keywords";
    GroupsGetTopsTypeEnum["Referrers"] = "referrers";
    GroupsGetTopsTypeEnum["Destinations"] = "destinations";
    GroupsGetTopsTypeEnum["Languages"] = "languages";
    GroupsGetTopsTypeEnum["Params"] = "params";
})(GroupsGetTopsTypeEnum || (GroupsGetTopsTypeEnum = {}));
var GroupsGetTopsQueryParams = /** @class */ (function (_super) {
    __extends(GroupsGetTopsQueryParams, _super);
    function GroupsGetTopsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDay" }),
        __metadata("design:type", String)
    ], GroupsGetTopsQueryParams.prototype, "fromDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hittype" }),
        __metadata("design:type", String)
    ], GroupsGetTopsQueryParams.prototype, "hittype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeframe" }),
        __metadata("design:type", String)
    ], GroupsGetTopsQueryParams.prototype, "timeframe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDay" }),
        __metadata("design:type", String)
    ], GroupsGetTopsQueryParams.prototype, "toDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GroupsGetTopsQueryParams.prototype, "type", void 0);
    return GroupsGetTopsQueryParams;
}(SpeakeasyBase));
export { GroupsGetTopsQueryParams };
var GroupsGetTopsRequest = /** @class */ (function (_super) {
    __extends(GroupsGetTopsRequest, _super);
    function GroupsGetTopsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupsGetTopsPathParams)
    ], GroupsGetTopsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupsGetTopsQueryParams)
    ], GroupsGetTopsRequest.prototype, "queryParams", void 0);
    return GroupsGetTopsRequest;
}(SpeakeasyBase));
export { GroupsGetTopsRequest };
var GroupsGetTopsResponse = /** @class */ (function (_super) {
    __extends(GroupsGetTopsResponse, _super);
    function GroupsGetTopsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreDtoTopsTop)
    ], GroupsGetTopsResponse.prototype, "apiCoreDtoTopsTop", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GroupsGetTopsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GroupsGetTopsResponse.prototype, "statusCode", void 0);
    return GroupsGetTopsResponse;
}(SpeakeasyBase));
export { GroupsGetTopsResponse };
