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
var AdsenseCustomchannelsListPathParams = /** @class */ (function (_super) {
    __extends(AdsenseCustomchannelsListPathParams, _super);
    function AdsenseCustomchannelsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=adClientId" }),
        __metadata("design:type", String)
    ], AdsenseCustomchannelsListPathParams.prototype, "adClientId", void 0);
    return AdsenseCustomchannelsListPathParams;
}(SpeakeasyBase));
export { AdsenseCustomchannelsListPathParams };
var AdsenseCustomchannelsListQueryParams = /** @class */ (function (_super) {
    __extends(AdsenseCustomchannelsListQueryParams, _super);
    function AdsenseCustomchannelsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsenseCustomchannelsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsenseCustomchannelsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsenseCustomchannelsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], AdsenseCustomchannelsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsenseCustomchannelsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AdsenseCustomchannelsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsenseCustomchannelsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsenseCustomchannelsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsenseCustomchannelsListQueryParams.prototype, "userIp", void 0);
    return AdsenseCustomchannelsListQueryParams;
}(SpeakeasyBase));
export { AdsenseCustomchannelsListQueryParams };
var AdsenseCustomchannelsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdsenseCustomchannelsListSecurityOption1, _super);
    function AdsenseCustomchannelsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseCustomchannelsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseCustomchannelsListSecurityOption1.prototype, "oauth2c", void 0);
    return AdsenseCustomchannelsListSecurityOption1;
}(SpeakeasyBase));
export { AdsenseCustomchannelsListSecurityOption1 };
var AdsenseCustomchannelsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdsenseCustomchannelsListSecurityOption2, _super);
    function AdsenseCustomchannelsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseCustomchannelsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseCustomchannelsListSecurityOption2.prototype, "oauth2c", void 0);
    return AdsenseCustomchannelsListSecurityOption2;
}(SpeakeasyBase));
export { AdsenseCustomchannelsListSecurityOption2 };
var AdsenseCustomchannelsListSecurity = /** @class */ (function (_super) {
    __extends(AdsenseCustomchannelsListSecurity, _super);
    function AdsenseCustomchannelsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseCustomchannelsListSecurityOption1)
    ], AdsenseCustomchannelsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseCustomchannelsListSecurityOption2)
    ], AdsenseCustomchannelsListSecurity.prototype, "option2", void 0);
    return AdsenseCustomchannelsListSecurity;
}(SpeakeasyBase));
export { AdsenseCustomchannelsListSecurity };
var AdsenseCustomchannelsListRequest = /** @class */ (function (_super) {
    __extends(AdsenseCustomchannelsListRequest, _super);
    function AdsenseCustomchannelsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseCustomchannelsListPathParams)
    ], AdsenseCustomchannelsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseCustomchannelsListQueryParams)
    ], AdsenseCustomchannelsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseCustomchannelsListSecurity)
    ], AdsenseCustomchannelsListRequest.prototype, "security", void 0);
    return AdsenseCustomchannelsListRequest;
}(SpeakeasyBase));
export { AdsenseCustomchannelsListRequest };
var AdsenseCustomchannelsListResponse = /** @class */ (function (_super) {
    __extends(AdsenseCustomchannelsListResponse, _super);
    function AdsenseCustomchannelsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsenseCustomchannelsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CustomChannels)
    ], AdsenseCustomchannelsListResponse.prototype, "customChannels", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsenseCustomchannelsListResponse.prototype, "statusCode", void 0);
    return AdsenseCustomchannelsListResponse;
}(SpeakeasyBase));
export { AdsenseCustomchannelsListResponse };
