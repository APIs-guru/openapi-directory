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
var AdsenseAdunitsCustomchannelsListPathParams = /** @class */ (function (_super) {
    __extends(AdsenseAdunitsCustomchannelsListPathParams, _super);
    function AdsenseAdunitsCustomchannelsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=adClientId" }),
        __metadata("design:type", String)
    ], AdsenseAdunitsCustomchannelsListPathParams.prototype, "adClientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=adUnitId" }),
        __metadata("design:type", String)
    ], AdsenseAdunitsCustomchannelsListPathParams.prototype, "adUnitId", void 0);
    return AdsenseAdunitsCustomchannelsListPathParams;
}(SpeakeasyBase));
export { AdsenseAdunitsCustomchannelsListPathParams };
var AdsenseAdunitsCustomchannelsListQueryParams = /** @class */ (function (_super) {
    __extends(AdsenseAdunitsCustomchannelsListQueryParams, _super);
    function AdsenseAdunitsCustomchannelsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsenseAdunitsCustomchannelsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsenseAdunitsCustomchannelsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsenseAdunitsCustomchannelsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], AdsenseAdunitsCustomchannelsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsenseAdunitsCustomchannelsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AdsenseAdunitsCustomchannelsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsenseAdunitsCustomchannelsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsenseAdunitsCustomchannelsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsenseAdunitsCustomchannelsListQueryParams.prototype, "userIp", void 0);
    return AdsenseAdunitsCustomchannelsListQueryParams;
}(SpeakeasyBase));
export { AdsenseAdunitsCustomchannelsListQueryParams };
var AdsenseAdunitsCustomchannelsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdsenseAdunitsCustomchannelsListSecurityOption1, _super);
    function AdsenseAdunitsCustomchannelsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAdunitsCustomchannelsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAdunitsCustomchannelsListSecurityOption1.prototype, "oauth2c", void 0);
    return AdsenseAdunitsCustomchannelsListSecurityOption1;
}(SpeakeasyBase));
export { AdsenseAdunitsCustomchannelsListSecurityOption1 };
var AdsenseAdunitsCustomchannelsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdsenseAdunitsCustomchannelsListSecurityOption2, _super);
    function AdsenseAdunitsCustomchannelsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAdunitsCustomchannelsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAdunitsCustomchannelsListSecurityOption2.prototype, "oauth2c", void 0);
    return AdsenseAdunitsCustomchannelsListSecurityOption2;
}(SpeakeasyBase));
export { AdsenseAdunitsCustomchannelsListSecurityOption2 };
var AdsenseAdunitsCustomchannelsListSecurity = /** @class */ (function (_super) {
    __extends(AdsenseAdunitsCustomchannelsListSecurity, _super);
    function AdsenseAdunitsCustomchannelsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAdunitsCustomchannelsListSecurityOption1)
    ], AdsenseAdunitsCustomchannelsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAdunitsCustomchannelsListSecurityOption2)
    ], AdsenseAdunitsCustomchannelsListSecurity.prototype, "option2", void 0);
    return AdsenseAdunitsCustomchannelsListSecurity;
}(SpeakeasyBase));
export { AdsenseAdunitsCustomchannelsListSecurity };
var AdsenseAdunitsCustomchannelsListRequest = /** @class */ (function (_super) {
    __extends(AdsenseAdunitsCustomchannelsListRequest, _super);
    function AdsenseAdunitsCustomchannelsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAdunitsCustomchannelsListPathParams)
    ], AdsenseAdunitsCustomchannelsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAdunitsCustomchannelsListQueryParams)
    ], AdsenseAdunitsCustomchannelsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAdunitsCustomchannelsListSecurity)
    ], AdsenseAdunitsCustomchannelsListRequest.prototype, "security", void 0);
    return AdsenseAdunitsCustomchannelsListRequest;
}(SpeakeasyBase));
export { AdsenseAdunitsCustomchannelsListRequest };
var AdsenseAdunitsCustomchannelsListResponse = /** @class */ (function (_super) {
    __extends(AdsenseAdunitsCustomchannelsListResponse, _super);
    function AdsenseAdunitsCustomchannelsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsenseAdunitsCustomchannelsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CustomChannels)
    ], AdsenseAdunitsCustomchannelsListResponse.prototype, "customChannels", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsenseAdunitsCustomchannelsListResponse.prototype, "statusCode", void 0);
    return AdsenseAdunitsCustomchannelsListResponse;
}(SpeakeasyBase));
export { AdsenseAdunitsCustomchannelsListResponse };
