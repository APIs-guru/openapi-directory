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
var GetUsersMeSubscriptionsVideosQueryParams = /** @class */ (function (_super) {
    __extends(GetUsersMeSubscriptionsVideosQueryParams, _super);
    function GetUsersMeSubscriptionsVideosQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=categoryOneOf" }),
        __metadata("design:type", Object)
    ], GetUsersMeSubscriptionsVideosQueryParams.prototype, "categoryOneOf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" }),
        __metadata("design:type", Number)
    ], GetUsersMeSubscriptionsVideosQueryParams.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetUsersMeSubscriptionsVideosQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isLive" }),
        __metadata("design:type", Boolean)
    ], GetUsersMeSubscriptionsVideosQueryParams.prototype, "isLive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=languageOneOf" }),
        __metadata("design:type", Object)
    ], GetUsersMeSubscriptionsVideosQueryParams.prototype, "languageOneOf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=licenceOneOf" }),
        __metadata("design:type", Object)
    ], GetUsersMeSubscriptionsVideosQueryParams.prototype, "licenceOneOf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nsfw" }),
        __metadata("design:type", String)
    ], GetUsersMeSubscriptionsVideosQueryParams.prototype, "nsfw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skipCount" }),
        __metadata("design:type", String)
    ], GetUsersMeSubscriptionsVideosQueryParams.prototype, "skipCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetUsersMeSubscriptionsVideosQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], GetUsersMeSubscriptionsVideosQueryParams.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=tagsAllOf" }),
        __metadata("design:type", Object)
    ], GetUsersMeSubscriptionsVideosQueryParams.prototype, "tagsAllOf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=tagsOneOf" }),
        __metadata("design:type", Object)
    ], GetUsersMeSubscriptionsVideosQueryParams.prototype, "tagsOneOf", void 0);
    return GetUsersMeSubscriptionsVideosQueryParams;
}(SpeakeasyBase));
export { GetUsersMeSubscriptionsVideosQueryParams };
var GetUsersMeSubscriptionsVideosSecurity = /** @class */ (function (_super) {
    __extends(GetUsersMeSubscriptionsVideosSecurity, _super);
    function GetUsersMeSubscriptionsVideosSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetUsersMeSubscriptionsVideosSecurity.prototype, "oAuth2", void 0);
    return GetUsersMeSubscriptionsVideosSecurity;
}(SpeakeasyBase));
export { GetUsersMeSubscriptionsVideosSecurity };
var GetUsersMeSubscriptionsVideosRequest = /** @class */ (function (_super) {
    __extends(GetUsersMeSubscriptionsVideosRequest, _super);
    function GetUsersMeSubscriptionsVideosRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersMeSubscriptionsVideosQueryParams)
    ], GetUsersMeSubscriptionsVideosRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersMeSubscriptionsVideosSecurity)
    ], GetUsersMeSubscriptionsVideosRequest.prototype, "security", void 0);
    return GetUsersMeSubscriptionsVideosRequest;
}(SpeakeasyBase));
export { GetUsersMeSubscriptionsVideosRequest };
var GetUsersMeSubscriptionsVideosResponse = /** @class */ (function (_super) {
    __extends(GetUsersMeSubscriptionsVideosResponse, _super);
    function GetUsersMeSubscriptionsVideosResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUsersMeSubscriptionsVideosResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUsersMeSubscriptionsVideosResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetUsersMeSubscriptionsVideosResponse.prototype, "videoListResponse", void 0);
    return GetUsersMeSubscriptionsVideosResponse;
}(SpeakeasyBase));
export { GetUsersMeSubscriptionsVideosResponse };
