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
var AnalyticsadminPropertiesAudiencesListPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesAudiencesListPathParams, _super);
    function AnalyticsadminPropertiesAudiencesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesAudiencesListPathParams.prototype, "parent", void 0);
    return AnalyticsadminPropertiesAudiencesListPathParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesAudiencesListPathParams };
var AnalyticsadminPropertiesAudiencesListQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesAudiencesListQueryParams, _super);
    function AnalyticsadminPropertiesAudiencesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesAudiencesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesAudiencesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesAudiencesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesAudiencesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesAudiencesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesAudiencesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesAudiencesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AnalyticsadminPropertiesAudiencesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesAudiencesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsadminPropertiesAudiencesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesAudiencesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesAudiencesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesAudiencesListQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticsadminPropertiesAudiencesListQueryParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesAudiencesListQueryParams };
var AnalyticsadminPropertiesAudiencesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesAudiencesListSecurityOption1, _super);
    function AnalyticsadminPropertiesAudiencesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesAudiencesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesAudiencesListSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesAudiencesListSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesAudiencesListSecurityOption1 };
var AnalyticsadminPropertiesAudiencesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesAudiencesListSecurityOption2, _super);
    function AnalyticsadminPropertiesAudiencesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesAudiencesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesAudiencesListSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesAudiencesListSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesAudiencesListSecurityOption2 };
var AnalyticsadminPropertiesAudiencesListSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesAudiencesListSecurity, _super);
    function AnalyticsadminPropertiesAudiencesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsadminPropertiesAudiencesListSecurityOption1)
    ], AnalyticsadminPropertiesAudiencesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsadminPropertiesAudiencesListSecurityOption2)
    ], AnalyticsadminPropertiesAudiencesListSecurity.prototype, "option2", void 0);
    return AnalyticsadminPropertiesAudiencesListSecurity;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesAudiencesListSecurity };
var AnalyticsadminPropertiesAudiencesListRequest = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesAudiencesListRequest, _super);
    function AnalyticsadminPropertiesAudiencesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesAudiencesListPathParams)
    ], AnalyticsadminPropertiesAudiencesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesAudiencesListQueryParams)
    ], AnalyticsadminPropertiesAudiencesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesAudiencesListSecurity)
    ], AnalyticsadminPropertiesAudiencesListRequest.prototype, "security", void 0);
    return AnalyticsadminPropertiesAudiencesListRequest;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesAudiencesListRequest };
var AnalyticsadminPropertiesAudiencesListResponse = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesAudiencesListResponse, _super);
    function AnalyticsadminPropertiesAudiencesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesAudiencesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1alphaListAudiencesResponse)
    ], AnalyticsadminPropertiesAudiencesListResponse.prototype, "googleAnalyticsAdminV1alphaListAudiencesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsadminPropertiesAudiencesListResponse.prototype, "statusCode", void 0);
    return AnalyticsadminPropertiesAudiencesListResponse;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesAudiencesListResponse };
