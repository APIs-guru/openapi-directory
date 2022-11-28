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
var AdsenseCustomchannelsGetPathParams = /** @class */ (function (_super) {
    __extends(AdsenseCustomchannelsGetPathParams, _super);
    function AdsenseCustomchannelsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=adClientId" }),
        __metadata("design:type", String)
    ], AdsenseCustomchannelsGetPathParams.prototype, "adClientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customChannelId" }),
        __metadata("design:type", String)
    ], AdsenseCustomchannelsGetPathParams.prototype, "customChannelId", void 0);
    return AdsenseCustomchannelsGetPathParams;
}(SpeakeasyBase));
export { AdsenseCustomchannelsGetPathParams };
var AdsenseCustomchannelsGetQueryParams = /** @class */ (function (_super) {
    __extends(AdsenseCustomchannelsGetQueryParams, _super);
    function AdsenseCustomchannelsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsenseCustomchannelsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsenseCustomchannelsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsenseCustomchannelsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsenseCustomchannelsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsenseCustomchannelsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsenseCustomchannelsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsenseCustomchannelsGetQueryParams.prototype, "userIp", void 0);
    return AdsenseCustomchannelsGetQueryParams;
}(SpeakeasyBase));
export { AdsenseCustomchannelsGetQueryParams };
var AdsenseCustomchannelsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdsenseCustomchannelsGetSecurityOption1, _super);
    function AdsenseCustomchannelsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseCustomchannelsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseCustomchannelsGetSecurityOption1.prototype, "oauth2c", void 0);
    return AdsenseCustomchannelsGetSecurityOption1;
}(SpeakeasyBase));
export { AdsenseCustomchannelsGetSecurityOption1 };
var AdsenseCustomchannelsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdsenseCustomchannelsGetSecurityOption2, _super);
    function AdsenseCustomchannelsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseCustomchannelsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseCustomchannelsGetSecurityOption2.prototype, "oauth2c", void 0);
    return AdsenseCustomchannelsGetSecurityOption2;
}(SpeakeasyBase));
export { AdsenseCustomchannelsGetSecurityOption2 };
var AdsenseCustomchannelsGetSecurity = /** @class */ (function (_super) {
    __extends(AdsenseCustomchannelsGetSecurity, _super);
    function AdsenseCustomchannelsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseCustomchannelsGetSecurityOption1)
    ], AdsenseCustomchannelsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseCustomchannelsGetSecurityOption2)
    ], AdsenseCustomchannelsGetSecurity.prototype, "option2", void 0);
    return AdsenseCustomchannelsGetSecurity;
}(SpeakeasyBase));
export { AdsenseCustomchannelsGetSecurity };
var AdsenseCustomchannelsGetRequest = /** @class */ (function (_super) {
    __extends(AdsenseCustomchannelsGetRequest, _super);
    function AdsenseCustomchannelsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseCustomchannelsGetPathParams)
    ], AdsenseCustomchannelsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseCustomchannelsGetQueryParams)
    ], AdsenseCustomchannelsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseCustomchannelsGetSecurity)
    ], AdsenseCustomchannelsGetRequest.prototype, "security", void 0);
    return AdsenseCustomchannelsGetRequest;
}(SpeakeasyBase));
export { AdsenseCustomchannelsGetRequest };
var AdsenseCustomchannelsGetResponse = /** @class */ (function (_super) {
    __extends(AdsenseCustomchannelsGetResponse, _super);
    function AdsenseCustomchannelsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsenseCustomchannelsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CustomChannel)
    ], AdsenseCustomchannelsGetResponse.prototype, "customChannel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsenseCustomchannelsGetResponse.prototype, "statusCode", void 0);
    return AdsenseCustomchannelsGetResponse;
}(SpeakeasyBase));
export { AdsenseCustomchannelsGetResponse };
