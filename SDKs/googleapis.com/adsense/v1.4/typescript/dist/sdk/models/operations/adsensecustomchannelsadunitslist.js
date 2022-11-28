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
var AdsenseCustomchannelsAdunitsListPathParams = /** @class */ (function (_super) {
    __extends(AdsenseCustomchannelsAdunitsListPathParams, _super);
    function AdsenseCustomchannelsAdunitsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=adClientId" }),
        __metadata("design:type", String)
    ], AdsenseCustomchannelsAdunitsListPathParams.prototype, "adClientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customChannelId" }),
        __metadata("design:type", String)
    ], AdsenseCustomchannelsAdunitsListPathParams.prototype, "customChannelId", void 0);
    return AdsenseCustomchannelsAdunitsListPathParams;
}(SpeakeasyBase));
export { AdsenseCustomchannelsAdunitsListPathParams };
var AdsenseCustomchannelsAdunitsListQueryParams = /** @class */ (function (_super) {
    __extends(AdsenseCustomchannelsAdunitsListQueryParams, _super);
    function AdsenseCustomchannelsAdunitsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsenseCustomchannelsAdunitsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsenseCustomchannelsAdunitsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeInactive" }),
        __metadata("design:type", Boolean)
    ], AdsenseCustomchannelsAdunitsListQueryParams.prototype, "includeInactive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsenseCustomchannelsAdunitsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], AdsenseCustomchannelsAdunitsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsenseCustomchannelsAdunitsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AdsenseCustomchannelsAdunitsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsenseCustomchannelsAdunitsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsenseCustomchannelsAdunitsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsenseCustomchannelsAdunitsListQueryParams.prototype, "userIp", void 0);
    return AdsenseCustomchannelsAdunitsListQueryParams;
}(SpeakeasyBase));
export { AdsenseCustomchannelsAdunitsListQueryParams };
var AdsenseCustomchannelsAdunitsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdsenseCustomchannelsAdunitsListSecurityOption1, _super);
    function AdsenseCustomchannelsAdunitsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseCustomchannelsAdunitsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseCustomchannelsAdunitsListSecurityOption1.prototype, "oauth2c", void 0);
    return AdsenseCustomchannelsAdunitsListSecurityOption1;
}(SpeakeasyBase));
export { AdsenseCustomchannelsAdunitsListSecurityOption1 };
var AdsenseCustomchannelsAdunitsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdsenseCustomchannelsAdunitsListSecurityOption2, _super);
    function AdsenseCustomchannelsAdunitsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseCustomchannelsAdunitsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseCustomchannelsAdunitsListSecurityOption2.prototype, "oauth2c", void 0);
    return AdsenseCustomchannelsAdunitsListSecurityOption2;
}(SpeakeasyBase));
export { AdsenseCustomchannelsAdunitsListSecurityOption2 };
var AdsenseCustomchannelsAdunitsListSecurity = /** @class */ (function (_super) {
    __extends(AdsenseCustomchannelsAdunitsListSecurity, _super);
    function AdsenseCustomchannelsAdunitsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseCustomchannelsAdunitsListSecurityOption1)
    ], AdsenseCustomchannelsAdunitsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseCustomchannelsAdunitsListSecurityOption2)
    ], AdsenseCustomchannelsAdunitsListSecurity.prototype, "option2", void 0);
    return AdsenseCustomchannelsAdunitsListSecurity;
}(SpeakeasyBase));
export { AdsenseCustomchannelsAdunitsListSecurity };
var AdsenseCustomchannelsAdunitsListRequest = /** @class */ (function (_super) {
    __extends(AdsenseCustomchannelsAdunitsListRequest, _super);
    function AdsenseCustomchannelsAdunitsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseCustomchannelsAdunitsListPathParams)
    ], AdsenseCustomchannelsAdunitsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseCustomchannelsAdunitsListQueryParams)
    ], AdsenseCustomchannelsAdunitsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseCustomchannelsAdunitsListSecurity)
    ], AdsenseCustomchannelsAdunitsListRequest.prototype, "security", void 0);
    return AdsenseCustomchannelsAdunitsListRequest;
}(SpeakeasyBase));
export { AdsenseCustomchannelsAdunitsListRequest };
var AdsenseCustomchannelsAdunitsListResponse = /** @class */ (function (_super) {
    __extends(AdsenseCustomchannelsAdunitsListResponse, _super);
    function AdsenseCustomchannelsAdunitsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AdUnits)
    ], AdsenseCustomchannelsAdunitsListResponse.prototype, "adUnits", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsenseCustomchannelsAdunitsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsenseCustomchannelsAdunitsListResponse.prototype, "statusCode", void 0);
    return AdsenseCustomchannelsAdunitsListResponse;
}(SpeakeasyBase));
export { AdsenseCustomchannelsAdunitsListResponse };
