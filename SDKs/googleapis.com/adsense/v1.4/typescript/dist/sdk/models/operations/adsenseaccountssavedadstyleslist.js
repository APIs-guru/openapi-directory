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
var AdsenseAccountsSavedadstylesListPathParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsSavedadstylesListPathParams, _super);
    function AdsenseAccountsSavedadstylesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AdsenseAccountsSavedadstylesListPathParams.prototype, "accountId", void 0);
    return AdsenseAccountsSavedadstylesListPathParams;
}(SpeakeasyBase));
export { AdsenseAccountsSavedadstylesListPathParams };
var AdsenseAccountsSavedadstylesListQueryParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsSavedadstylesListQueryParams, _super);
    function AdsenseAccountsSavedadstylesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsenseAccountsSavedadstylesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsenseAccountsSavedadstylesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsenseAccountsSavedadstylesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], AdsenseAccountsSavedadstylesListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsenseAccountsSavedadstylesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AdsenseAccountsSavedadstylesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsenseAccountsSavedadstylesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsenseAccountsSavedadstylesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsenseAccountsSavedadstylesListQueryParams.prototype, "userIp", void 0);
    return AdsenseAccountsSavedadstylesListQueryParams;
}(SpeakeasyBase));
export { AdsenseAccountsSavedadstylesListQueryParams };
var AdsenseAccountsSavedadstylesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsSavedadstylesListSecurityOption1, _super);
    function AdsenseAccountsSavedadstylesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsSavedadstylesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsSavedadstylesListSecurityOption1.prototype, "oauth2c", void 0);
    return AdsenseAccountsSavedadstylesListSecurityOption1;
}(SpeakeasyBase));
export { AdsenseAccountsSavedadstylesListSecurityOption1 };
var AdsenseAccountsSavedadstylesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsSavedadstylesListSecurityOption2, _super);
    function AdsenseAccountsSavedadstylesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsSavedadstylesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsSavedadstylesListSecurityOption2.prototype, "oauth2c", void 0);
    return AdsenseAccountsSavedadstylesListSecurityOption2;
}(SpeakeasyBase));
export { AdsenseAccountsSavedadstylesListSecurityOption2 };
var AdsenseAccountsSavedadstylesListSecurity = /** @class */ (function (_super) {
    __extends(AdsenseAccountsSavedadstylesListSecurity, _super);
    function AdsenseAccountsSavedadstylesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsSavedadstylesListSecurityOption1)
    ], AdsenseAccountsSavedadstylesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsSavedadstylesListSecurityOption2)
    ], AdsenseAccountsSavedadstylesListSecurity.prototype, "option2", void 0);
    return AdsenseAccountsSavedadstylesListSecurity;
}(SpeakeasyBase));
export { AdsenseAccountsSavedadstylesListSecurity };
var AdsenseAccountsSavedadstylesListRequest = /** @class */ (function (_super) {
    __extends(AdsenseAccountsSavedadstylesListRequest, _super);
    function AdsenseAccountsSavedadstylesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsSavedadstylesListPathParams)
    ], AdsenseAccountsSavedadstylesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsSavedadstylesListQueryParams)
    ], AdsenseAccountsSavedadstylesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsSavedadstylesListSecurity)
    ], AdsenseAccountsSavedadstylesListRequest.prototype, "security", void 0);
    return AdsenseAccountsSavedadstylesListRequest;
}(SpeakeasyBase));
export { AdsenseAccountsSavedadstylesListRequest };
var AdsenseAccountsSavedadstylesListResponse = /** @class */ (function (_super) {
    __extends(AdsenseAccountsSavedadstylesListResponse, _super);
    function AdsenseAccountsSavedadstylesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsenseAccountsSavedadstylesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SavedAdStyles)
    ], AdsenseAccountsSavedadstylesListResponse.prototype, "savedAdStyles", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsenseAccountsSavedadstylesListResponse.prototype, "statusCode", void 0);
    return AdsenseAccountsSavedadstylesListResponse;
}(SpeakeasyBase));
export { AdsenseAccountsSavedadstylesListResponse };
