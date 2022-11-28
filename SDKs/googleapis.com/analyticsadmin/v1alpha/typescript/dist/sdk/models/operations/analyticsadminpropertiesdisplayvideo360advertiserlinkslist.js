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
var AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListPathParams, _super);
    function AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListPathParams.prototype, "parent", void 0);
    return AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListPathParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListPathParams };
var AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListQueryParams, _super);
    function AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListQueryParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListQueryParams };
var AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurityOption1, _super);
    function AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurityOption1 };
var AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurityOption2, _super);
    function AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurityOption2 };
var AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurity, _super);
    function AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurityOption1)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurityOption2)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurity.prototype, "option2", void 0);
    return AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurity;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurity };
var AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListRequest = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListRequest, _super);
    function AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListPathParams)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListQueryParams)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurity)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListRequest.prototype, "security", void 0);
    return AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListRequest;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListRequest };
var AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListResponse = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListResponse, _super);
    function AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListResponse.prototype, "googleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListResponse.prototype, "statusCode", void 0);
    return AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListResponse;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListResponse };
