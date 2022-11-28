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
var AnalyticsadminPropertiesDataStreamsListPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDataStreamsListPathParams, _super);
    function AnalyticsadminPropertiesDataStreamsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDataStreamsListPathParams.prototype, "parent", void 0);
    return AnalyticsadminPropertiesDataStreamsListPathParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDataStreamsListPathParams };
var AnalyticsadminPropertiesDataStreamsListQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDataStreamsListQueryParams, _super);
    function AnalyticsadminPropertiesDataStreamsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDataStreamsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDataStreamsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDataStreamsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDataStreamsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDataStreamsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDataStreamsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDataStreamsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AnalyticsadminPropertiesDataStreamsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDataStreamsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsadminPropertiesDataStreamsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDataStreamsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDataStreamsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDataStreamsListQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticsadminPropertiesDataStreamsListQueryParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDataStreamsListQueryParams };
var AnalyticsadminPropertiesDataStreamsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDataStreamsListSecurityOption1, _super);
    function AnalyticsadminPropertiesDataStreamsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesDataStreamsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesDataStreamsListSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesDataStreamsListSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDataStreamsListSecurityOption1 };
var AnalyticsadminPropertiesDataStreamsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDataStreamsListSecurityOption2, _super);
    function AnalyticsadminPropertiesDataStreamsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesDataStreamsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesDataStreamsListSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesDataStreamsListSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDataStreamsListSecurityOption2 };
var AnalyticsadminPropertiesDataStreamsListSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDataStreamsListSecurity, _super);
    function AnalyticsadminPropertiesDataStreamsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsadminPropertiesDataStreamsListSecurityOption1)
    ], AnalyticsadminPropertiesDataStreamsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsadminPropertiesDataStreamsListSecurityOption2)
    ], AnalyticsadminPropertiesDataStreamsListSecurity.prototype, "option2", void 0);
    return AnalyticsadminPropertiesDataStreamsListSecurity;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDataStreamsListSecurity };
var AnalyticsadminPropertiesDataStreamsListRequest = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDataStreamsListRequest, _super);
    function AnalyticsadminPropertiesDataStreamsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesDataStreamsListPathParams)
    ], AnalyticsadminPropertiesDataStreamsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesDataStreamsListQueryParams)
    ], AnalyticsadminPropertiesDataStreamsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesDataStreamsListSecurity)
    ], AnalyticsadminPropertiesDataStreamsListRequest.prototype, "security", void 0);
    return AnalyticsadminPropertiesDataStreamsListRequest;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDataStreamsListRequest };
var AnalyticsadminPropertiesDataStreamsListResponse = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDataStreamsListResponse, _super);
    function AnalyticsadminPropertiesDataStreamsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDataStreamsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1alphaListDataStreamsResponse)
    ], AnalyticsadminPropertiesDataStreamsListResponse.prototype, "googleAnalyticsAdminV1alphaListDataStreamsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsadminPropertiesDataStreamsListResponse.prototype, "statusCode", void 0);
    return AnalyticsadminPropertiesDataStreamsListResponse;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDataStreamsListResponse };
