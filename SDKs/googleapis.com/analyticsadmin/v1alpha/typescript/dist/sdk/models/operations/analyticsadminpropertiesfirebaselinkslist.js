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
var AnalyticsadminPropertiesFirebaseLinksListPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesFirebaseLinksListPathParams, _super);
    function AnalyticsadminPropertiesFirebaseLinksListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesFirebaseLinksListPathParams.prototype, "parent", void 0);
    return AnalyticsadminPropertiesFirebaseLinksListPathParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesFirebaseLinksListPathParams };
var AnalyticsadminPropertiesFirebaseLinksListQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesFirebaseLinksListQueryParams, _super);
    function AnalyticsadminPropertiesFirebaseLinksListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesFirebaseLinksListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesFirebaseLinksListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesFirebaseLinksListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesFirebaseLinksListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesFirebaseLinksListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesFirebaseLinksListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesFirebaseLinksListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AnalyticsadminPropertiesFirebaseLinksListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesFirebaseLinksListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsadminPropertiesFirebaseLinksListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesFirebaseLinksListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesFirebaseLinksListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesFirebaseLinksListQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticsadminPropertiesFirebaseLinksListQueryParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesFirebaseLinksListQueryParams };
var AnalyticsadminPropertiesFirebaseLinksListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesFirebaseLinksListSecurityOption1, _super);
    function AnalyticsadminPropertiesFirebaseLinksListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesFirebaseLinksListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesFirebaseLinksListSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesFirebaseLinksListSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesFirebaseLinksListSecurityOption1 };
var AnalyticsadminPropertiesFirebaseLinksListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesFirebaseLinksListSecurityOption2, _super);
    function AnalyticsadminPropertiesFirebaseLinksListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesFirebaseLinksListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesFirebaseLinksListSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesFirebaseLinksListSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesFirebaseLinksListSecurityOption2 };
var AnalyticsadminPropertiesFirebaseLinksListSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesFirebaseLinksListSecurity, _super);
    function AnalyticsadminPropertiesFirebaseLinksListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsadminPropertiesFirebaseLinksListSecurityOption1)
    ], AnalyticsadminPropertiesFirebaseLinksListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsadminPropertiesFirebaseLinksListSecurityOption2)
    ], AnalyticsadminPropertiesFirebaseLinksListSecurity.prototype, "option2", void 0);
    return AnalyticsadminPropertiesFirebaseLinksListSecurity;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesFirebaseLinksListSecurity };
var AnalyticsadminPropertiesFirebaseLinksListRequest = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesFirebaseLinksListRequest, _super);
    function AnalyticsadminPropertiesFirebaseLinksListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesFirebaseLinksListPathParams)
    ], AnalyticsadminPropertiesFirebaseLinksListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesFirebaseLinksListQueryParams)
    ], AnalyticsadminPropertiesFirebaseLinksListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesFirebaseLinksListSecurity)
    ], AnalyticsadminPropertiesFirebaseLinksListRequest.prototype, "security", void 0);
    return AnalyticsadminPropertiesFirebaseLinksListRequest;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesFirebaseLinksListRequest };
var AnalyticsadminPropertiesFirebaseLinksListResponse = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesFirebaseLinksListResponse, _super);
    function AnalyticsadminPropertiesFirebaseLinksListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesFirebaseLinksListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse)
    ], AnalyticsadminPropertiesFirebaseLinksListResponse.prototype, "googleAnalyticsAdminV1alphaListFirebaseLinksResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsadminPropertiesFirebaseLinksListResponse.prototype, "statusCode", void 0);
    return AnalyticsadminPropertiesFirebaseLinksListResponse;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesFirebaseLinksListResponse };
