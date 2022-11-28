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
var AdsenseUrlchannelsListPathParams = /** @class */ (function (_super) {
    __extends(AdsenseUrlchannelsListPathParams, _super);
    function AdsenseUrlchannelsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=adClientId" }),
        __metadata("design:type", String)
    ], AdsenseUrlchannelsListPathParams.prototype, "adClientId", void 0);
    return AdsenseUrlchannelsListPathParams;
}(SpeakeasyBase));
export { AdsenseUrlchannelsListPathParams };
var AdsenseUrlchannelsListQueryParams = /** @class */ (function (_super) {
    __extends(AdsenseUrlchannelsListQueryParams, _super);
    function AdsenseUrlchannelsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsenseUrlchannelsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsenseUrlchannelsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsenseUrlchannelsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], AdsenseUrlchannelsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsenseUrlchannelsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AdsenseUrlchannelsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsenseUrlchannelsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsenseUrlchannelsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsenseUrlchannelsListQueryParams.prototype, "userIp", void 0);
    return AdsenseUrlchannelsListQueryParams;
}(SpeakeasyBase));
export { AdsenseUrlchannelsListQueryParams };
var AdsenseUrlchannelsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdsenseUrlchannelsListSecurityOption1, _super);
    function AdsenseUrlchannelsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseUrlchannelsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseUrlchannelsListSecurityOption1.prototype, "oauth2c", void 0);
    return AdsenseUrlchannelsListSecurityOption1;
}(SpeakeasyBase));
export { AdsenseUrlchannelsListSecurityOption1 };
var AdsenseUrlchannelsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdsenseUrlchannelsListSecurityOption2, _super);
    function AdsenseUrlchannelsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseUrlchannelsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseUrlchannelsListSecurityOption2.prototype, "oauth2c", void 0);
    return AdsenseUrlchannelsListSecurityOption2;
}(SpeakeasyBase));
export { AdsenseUrlchannelsListSecurityOption2 };
var AdsenseUrlchannelsListSecurity = /** @class */ (function (_super) {
    __extends(AdsenseUrlchannelsListSecurity, _super);
    function AdsenseUrlchannelsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseUrlchannelsListSecurityOption1)
    ], AdsenseUrlchannelsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseUrlchannelsListSecurityOption2)
    ], AdsenseUrlchannelsListSecurity.prototype, "option2", void 0);
    return AdsenseUrlchannelsListSecurity;
}(SpeakeasyBase));
export { AdsenseUrlchannelsListSecurity };
var AdsenseUrlchannelsListRequest = /** @class */ (function (_super) {
    __extends(AdsenseUrlchannelsListRequest, _super);
    function AdsenseUrlchannelsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseUrlchannelsListPathParams)
    ], AdsenseUrlchannelsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseUrlchannelsListQueryParams)
    ], AdsenseUrlchannelsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseUrlchannelsListSecurity)
    ], AdsenseUrlchannelsListRequest.prototype, "security", void 0);
    return AdsenseUrlchannelsListRequest;
}(SpeakeasyBase));
export { AdsenseUrlchannelsListRequest };
var AdsenseUrlchannelsListResponse = /** @class */ (function (_super) {
    __extends(AdsenseUrlchannelsListResponse, _super);
    function AdsenseUrlchannelsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsenseUrlchannelsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsenseUrlchannelsListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UrlChannels)
    ], AdsenseUrlchannelsListResponse.prototype, "urlChannels", void 0);
    return AdsenseUrlchannelsListResponse;
}(SpeakeasyBase));
export { AdsenseUrlchannelsListResponse };
