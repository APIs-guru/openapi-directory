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
var AnalyticsadminPropertiesUserLinksListPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksListPathParams, _super);
    function AnalyticsadminPropertiesUserLinksListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksListPathParams.prototype, "parent", void 0);
    return AnalyticsadminPropertiesUserLinksListPathParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksListPathParams };
var AnalyticsadminPropertiesUserLinksListQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksListQueryParams, _super);
    function AnalyticsadminPropertiesUserLinksListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AnalyticsadminPropertiesUserLinksListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsadminPropertiesUserLinksListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksListQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticsadminPropertiesUserLinksListQueryParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksListQueryParams };
var AnalyticsadminPropertiesUserLinksListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksListSecurityOption1, _super);
    function AnalyticsadminPropertiesUserLinksListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesUserLinksListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesUserLinksListSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesUserLinksListSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksListSecurityOption1 };
var AnalyticsadminPropertiesUserLinksListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksListSecurityOption2, _super);
    function AnalyticsadminPropertiesUserLinksListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesUserLinksListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesUserLinksListSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesUserLinksListSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksListSecurityOption2 };
var AnalyticsadminPropertiesUserLinksListSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksListSecurity, _super);
    function AnalyticsadminPropertiesUserLinksListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsadminPropertiesUserLinksListSecurityOption1)
    ], AnalyticsadminPropertiesUserLinksListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsadminPropertiesUserLinksListSecurityOption2)
    ], AnalyticsadminPropertiesUserLinksListSecurity.prototype, "option2", void 0);
    return AnalyticsadminPropertiesUserLinksListSecurity;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksListSecurity };
var AnalyticsadminPropertiesUserLinksListRequest = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksListRequest, _super);
    function AnalyticsadminPropertiesUserLinksListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesUserLinksListPathParams)
    ], AnalyticsadminPropertiesUserLinksListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesUserLinksListQueryParams)
    ], AnalyticsadminPropertiesUserLinksListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesUserLinksListSecurity)
    ], AnalyticsadminPropertiesUserLinksListRequest.prototype, "security", void 0);
    return AnalyticsadminPropertiesUserLinksListRequest;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksListRequest };
var AnalyticsadminPropertiesUserLinksListResponse = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksListResponse, _super);
    function AnalyticsadminPropertiesUserLinksListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1alphaListUserLinksResponse)
    ], AnalyticsadminPropertiesUserLinksListResponse.prototype, "googleAnalyticsAdminV1alphaListUserLinksResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsadminPropertiesUserLinksListResponse.prototype, "statusCode", void 0);
    return AnalyticsadminPropertiesUserLinksListResponse;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksListResponse };
