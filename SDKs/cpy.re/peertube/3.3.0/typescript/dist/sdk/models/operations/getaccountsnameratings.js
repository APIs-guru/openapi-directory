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
var GetAccountsNameRatingsPathParams = /** @class */ (function (_super) {
    __extends(GetAccountsNameRatingsPathParams, _super);
    function GetAccountsNameRatingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], GetAccountsNameRatingsPathParams.prototype, "name", void 0);
    return GetAccountsNameRatingsPathParams;
}(SpeakeasyBase));
export { GetAccountsNameRatingsPathParams };
export var GetAccountsNameRatingsRatingEnum;
(function (GetAccountsNameRatingsRatingEnum) {
    GetAccountsNameRatingsRatingEnum["Like"] = "like";
    GetAccountsNameRatingsRatingEnum["Dislike"] = "dislike";
})(GetAccountsNameRatingsRatingEnum || (GetAccountsNameRatingsRatingEnum = {}));
var GetAccountsNameRatingsQueryParams = /** @class */ (function (_super) {
    __extends(GetAccountsNameRatingsQueryParams, _super);
    function GetAccountsNameRatingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" }),
        __metadata("design:type", Number)
    ], GetAccountsNameRatingsQueryParams.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rating" }),
        __metadata("design:type", String)
    ], GetAccountsNameRatingsQueryParams.prototype, "rating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetAccountsNameRatingsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], GetAccountsNameRatingsQueryParams.prototype, "start", void 0);
    return GetAccountsNameRatingsQueryParams;
}(SpeakeasyBase));
export { GetAccountsNameRatingsQueryParams };
var GetAccountsNameRatingsSecurity = /** @class */ (function (_super) {
    __extends(GetAccountsNameRatingsSecurity, _super);
    function GetAccountsNameRatingsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetAccountsNameRatingsSecurity.prototype, "oAuth2", void 0);
    return GetAccountsNameRatingsSecurity;
}(SpeakeasyBase));
export { GetAccountsNameRatingsSecurity };
var GetAccountsNameRatingsRequest = /** @class */ (function (_super) {
    __extends(GetAccountsNameRatingsRequest, _super);
    function GetAccountsNameRatingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsNameRatingsPathParams)
    ], GetAccountsNameRatingsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsNameRatingsQueryParams)
    ], GetAccountsNameRatingsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsNameRatingsSecurity)
    ], GetAccountsNameRatingsRequest.prototype, "security", void 0);
    return GetAccountsNameRatingsRequest;
}(SpeakeasyBase));
export { GetAccountsNameRatingsRequest };
var GetAccountsNameRatingsResponse = /** @class */ (function (_super) {
    __extends(GetAccountsNameRatingsResponse, _super);
    function GetAccountsNameRatingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAccountsNameRatingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAccountsNameRatingsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], GetAccountsNameRatingsResponse.prototype, "videoRatings", void 0);
    return GetAccountsNameRatingsResponse;
}(SpeakeasyBase));
export { GetAccountsNameRatingsResponse };
