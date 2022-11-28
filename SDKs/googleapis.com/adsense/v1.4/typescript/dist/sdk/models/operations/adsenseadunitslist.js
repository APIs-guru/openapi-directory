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
var AdsenseAdunitsListPathParams = /** @class */ (function (_super) {
    __extends(AdsenseAdunitsListPathParams, _super);
    function AdsenseAdunitsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=adClientId" }),
        __metadata("design:type", String)
    ], AdsenseAdunitsListPathParams.prototype, "adClientId", void 0);
    return AdsenseAdunitsListPathParams;
}(SpeakeasyBase));
export { AdsenseAdunitsListPathParams };
var AdsenseAdunitsListQueryParams = /** @class */ (function (_super) {
    __extends(AdsenseAdunitsListQueryParams, _super);
    function AdsenseAdunitsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsenseAdunitsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsenseAdunitsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeInactive" }),
        __metadata("design:type", Boolean)
    ], AdsenseAdunitsListQueryParams.prototype, "includeInactive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsenseAdunitsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], AdsenseAdunitsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsenseAdunitsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AdsenseAdunitsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsenseAdunitsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsenseAdunitsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsenseAdunitsListQueryParams.prototype, "userIp", void 0);
    return AdsenseAdunitsListQueryParams;
}(SpeakeasyBase));
export { AdsenseAdunitsListQueryParams };
var AdsenseAdunitsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdsenseAdunitsListSecurityOption1, _super);
    function AdsenseAdunitsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAdunitsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAdunitsListSecurityOption1.prototype, "oauth2c", void 0);
    return AdsenseAdunitsListSecurityOption1;
}(SpeakeasyBase));
export { AdsenseAdunitsListSecurityOption1 };
var AdsenseAdunitsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdsenseAdunitsListSecurityOption2, _super);
    function AdsenseAdunitsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAdunitsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAdunitsListSecurityOption2.prototype, "oauth2c", void 0);
    return AdsenseAdunitsListSecurityOption2;
}(SpeakeasyBase));
export { AdsenseAdunitsListSecurityOption2 };
var AdsenseAdunitsListSecurity = /** @class */ (function (_super) {
    __extends(AdsenseAdunitsListSecurity, _super);
    function AdsenseAdunitsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAdunitsListSecurityOption1)
    ], AdsenseAdunitsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAdunitsListSecurityOption2)
    ], AdsenseAdunitsListSecurity.prototype, "option2", void 0);
    return AdsenseAdunitsListSecurity;
}(SpeakeasyBase));
export { AdsenseAdunitsListSecurity };
var AdsenseAdunitsListRequest = /** @class */ (function (_super) {
    __extends(AdsenseAdunitsListRequest, _super);
    function AdsenseAdunitsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAdunitsListPathParams)
    ], AdsenseAdunitsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAdunitsListQueryParams)
    ], AdsenseAdunitsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAdunitsListSecurity)
    ], AdsenseAdunitsListRequest.prototype, "security", void 0);
    return AdsenseAdunitsListRequest;
}(SpeakeasyBase));
export { AdsenseAdunitsListRequest };
var AdsenseAdunitsListResponse = /** @class */ (function (_super) {
    __extends(AdsenseAdunitsListResponse, _super);
    function AdsenseAdunitsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AdUnits)
    ], AdsenseAdunitsListResponse.prototype, "adUnits", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsenseAdunitsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsenseAdunitsListResponse.prototype, "statusCode", void 0);
    return AdsenseAdunitsListResponse;
}(SpeakeasyBase));
export { AdsenseAdunitsListResponse };
