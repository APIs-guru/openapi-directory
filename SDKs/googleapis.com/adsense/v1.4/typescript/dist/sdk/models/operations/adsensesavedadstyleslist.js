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
var AdsenseSavedadstylesListQueryParams = /** @class */ (function (_super) {
    __extends(AdsenseSavedadstylesListQueryParams, _super);
    function AdsenseSavedadstylesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsenseSavedadstylesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsenseSavedadstylesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsenseSavedadstylesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], AdsenseSavedadstylesListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsenseSavedadstylesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AdsenseSavedadstylesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsenseSavedadstylesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsenseSavedadstylesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsenseSavedadstylesListQueryParams.prototype, "userIp", void 0);
    return AdsenseSavedadstylesListQueryParams;
}(SpeakeasyBase));
export { AdsenseSavedadstylesListQueryParams };
var AdsenseSavedadstylesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdsenseSavedadstylesListSecurityOption1, _super);
    function AdsenseSavedadstylesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseSavedadstylesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseSavedadstylesListSecurityOption1.prototype, "oauth2c", void 0);
    return AdsenseSavedadstylesListSecurityOption1;
}(SpeakeasyBase));
export { AdsenseSavedadstylesListSecurityOption1 };
var AdsenseSavedadstylesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdsenseSavedadstylesListSecurityOption2, _super);
    function AdsenseSavedadstylesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseSavedadstylesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseSavedadstylesListSecurityOption2.prototype, "oauth2c", void 0);
    return AdsenseSavedadstylesListSecurityOption2;
}(SpeakeasyBase));
export { AdsenseSavedadstylesListSecurityOption2 };
var AdsenseSavedadstylesListSecurity = /** @class */ (function (_super) {
    __extends(AdsenseSavedadstylesListSecurity, _super);
    function AdsenseSavedadstylesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseSavedadstylesListSecurityOption1)
    ], AdsenseSavedadstylesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseSavedadstylesListSecurityOption2)
    ], AdsenseSavedadstylesListSecurity.prototype, "option2", void 0);
    return AdsenseSavedadstylesListSecurity;
}(SpeakeasyBase));
export { AdsenseSavedadstylesListSecurity };
var AdsenseSavedadstylesListRequest = /** @class */ (function (_super) {
    __extends(AdsenseSavedadstylesListRequest, _super);
    function AdsenseSavedadstylesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseSavedadstylesListQueryParams)
    ], AdsenseSavedadstylesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseSavedadstylesListSecurity)
    ], AdsenseSavedadstylesListRequest.prototype, "security", void 0);
    return AdsenseSavedadstylesListRequest;
}(SpeakeasyBase));
export { AdsenseSavedadstylesListRequest };
var AdsenseSavedadstylesListResponse = /** @class */ (function (_super) {
    __extends(AdsenseSavedadstylesListResponse, _super);
    function AdsenseSavedadstylesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsenseSavedadstylesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SavedAdStyles)
    ], AdsenseSavedadstylesListResponse.prototype, "savedAdStyles", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsenseSavedadstylesListResponse.prototype, "statusCode", void 0);
    return AdsenseSavedadstylesListResponse;
}(SpeakeasyBase));
export { AdsenseSavedadstylesListResponse };
