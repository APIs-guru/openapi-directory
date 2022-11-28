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
var AnalyticsadminPropertiesUserLinksCreatePathParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksCreatePathParams, _super);
    function AnalyticsadminPropertiesUserLinksCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksCreatePathParams.prototype, "parent", void 0);
    return AnalyticsadminPropertiesUserLinksCreatePathParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksCreatePathParams };
var AnalyticsadminPropertiesUserLinksCreateQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksCreateQueryParams, _super);
    function AnalyticsadminPropertiesUserLinksCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=notifyNewUser" }),
        __metadata("design:type", Boolean)
    ], AnalyticsadminPropertiesUserLinksCreateQueryParams.prototype, "notifyNewUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsadminPropertiesUserLinksCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksCreateQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticsadminPropertiesUserLinksCreateQueryParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksCreateQueryParams };
var AnalyticsadminPropertiesUserLinksCreateSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksCreateSecurity, _super);
    function AnalyticsadminPropertiesUserLinksCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesUserLinksCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesUserLinksCreateSecurity.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesUserLinksCreateSecurity;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksCreateSecurity };
var AnalyticsadminPropertiesUserLinksCreateRequest = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksCreateRequest, _super);
    function AnalyticsadminPropertiesUserLinksCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesUserLinksCreatePathParams)
    ], AnalyticsadminPropertiesUserLinksCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesUserLinksCreateQueryParams)
    ], AnalyticsadminPropertiesUserLinksCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1alphaUserLinkInput)
    ], AnalyticsadminPropertiesUserLinksCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesUserLinksCreateSecurity)
    ], AnalyticsadminPropertiesUserLinksCreateRequest.prototype, "security", void 0);
    return AnalyticsadminPropertiesUserLinksCreateRequest;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksCreateRequest };
var AnalyticsadminPropertiesUserLinksCreateResponse = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksCreateResponse, _super);
    function AnalyticsadminPropertiesUserLinksCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1alphaUserLink)
    ], AnalyticsadminPropertiesUserLinksCreateResponse.prototype, "googleAnalyticsAdminV1alphaUserLink", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsadminPropertiesUserLinksCreateResponse.prototype, "statusCode", void 0);
    return AnalyticsadminPropertiesUserLinksCreateResponse;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksCreateResponse };
