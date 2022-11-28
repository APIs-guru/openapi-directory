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
var AnalyticsadminPropertiesUserLinksBatchGetPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksBatchGetPathParams, _super);
    function AnalyticsadminPropertiesUserLinksBatchGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksBatchGetPathParams.prototype, "parent", void 0);
    return AnalyticsadminPropertiesUserLinksBatchGetPathParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksBatchGetPathParams };
var AnalyticsadminPropertiesUserLinksBatchGetQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksBatchGetQueryParams, _super);
    function AnalyticsadminPropertiesUserLinksBatchGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksBatchGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksBatchGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksBatchGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksBatchGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksBatchGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksBatchGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=names" }),
        __metadata("design:type", Array)
    ], AnalyticsadminPropertiesUserLinksBatchGetQueryParams.prototype, "names", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksBatchGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsadminPropertiesUserLinksBatchGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksBatchGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksBatchGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksBatchGetQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticsadminPropertiesUserLinksBatchGetQueryParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksBatchGetQueryParams };
var AnalyticsadminPropertiesUserLinksBatchGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksBatchGetSecurityOption1, _super);
    function AnalyticsadminPropertiesUserLinksBatchGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesUserLinksBatchGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesUserLinksBatchGetSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesUserLinksBatchGetSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksBatchGetSecurityOption1 };
var AnalyticsadminPropertiesUserLinksBatchGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksBatchGetSecurityOption2, _super);
    function AnalyticsadminPropertiesUserLinksBatchGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesUserLinksBatchGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesUserLinksBatchGetSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesUserLinksBatchGetSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksBatchGetSecurityOption2 };
var AnalyticsadminPropertiesUserLinksBatchGetSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksBatchGetSecurity, _super);
    function AnalyticsadminPropertiesUserLinksBatchGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsadminPropertiesUserLinksBatchGetSecurityOption1)
    ], AnalyticsadminPropertiesUserLinksBatchGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsadminPropertiesUserLinksBatchGetSecurityOption2)
    ], AnalyticsadminPropertiesUserLinksBatchGetSecurity.prototype, "option2", void 0);
    return AnalyticsadminPropertiesUserLinksBatchGetSecurity;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksBatchGetSecurity };
var AnalyticsadminPropertiesUserLinksBatchGetRequest = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksBatchGetRequest, _super);
    function AnalyticsadminPropertiesUserLinksBatchGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesUserLinksBatchGetPathParams)
    ], AnalyticsadminPropertiesUserLinksBatchGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesUserLinksBatchGetQueryParams)
    ], AnalyticsadminPropertiesUserLinksBatchGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesUserLinksBatchGetSecurity)
    ], AnalyticsadminPropertiesUserLinksBatchGetRequest.prototype, "security", void 0);
    return AnalyticsadminPropertiesUserLinksBatchGetRequest;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksBatchGetRequest };
var AnalyticsadminPropertiesUserLinksBatchGetResponse = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksBatchGetResponse, _super);
    function AnalyticsadminPropertiesUserLinksBatchGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksBatchGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse)
    ], AnalyticsadminPropertiesUserLinksBatchGetResponse.prototype, "googleAnalyticsAdminV1alphaBatchGetUserLinksResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsadminPropertiesUserLinksBatchGetResponse.prototype, "statusCode", void 0);
    return AnalyticsadminPropertiesUserLinksBatchGetResponse;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksBatchGetResponse };
