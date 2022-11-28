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
var AnalyticsadminPropertiesUserLinksBatchUpdatePathParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksBatchUpdatePathParams, _super);
    function AnalyticsadminPropertiesUserLinksBatchUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksBatchUpdatePathParams.prototype, "parent", void 0);
    return AnalyticsadminPropertiesUserLinksBatchUpdatePathParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksBatchUpdatePathParams };
var AnalyticsadminPropertiesUserLinksBatchUpdateQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksBatchUpdateQueryParams, _super);
    function AnalyticsadminPropertiesUserLinksBatchUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksBatchUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksBatchUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksBatchUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksBatchUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksBatchUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksBatchUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksBatchUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsadminPropertiesUserLinksBatchUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksBatchUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksBatchUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksBatchUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticsadminPropertiesUserLinksBatchUpdateQueryParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksBatchUpdateQueryParams };
var AnalyticsadminPropertiesUserLinksBatchUpdateSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksBatchUpdateSecurity, _super);
    function AnalyticsadminPropertiesUserLinksBatchUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesUserLinksBatchUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesUserLinksBatchUpdateSecurity.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesUserLinksBatchUpdateSecurity;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksBatchUpdateSecurity };
var AnalyticsadminPropertiesUserLinksBatchUpdateRequest = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksBatchUpdateRequest, _super);
    function AnalyticsadminPropertiesUserLinksBatchUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesUserLinksBatchUpdatePathParams)
    ], AnalyticsadminPropertiesUserLinksBatchUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesUserLinksBatchUpdateQueryParams)
    ], AnalyticsadminPropertiesUserLinksBatchUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksRequestInput)
    ], AnalyticsadminPropertiesUserLinksBatchUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesUserLinksBatchUpdateSecurity)
    ], AnalyticsadminPropertiesUserLinksBatchUpdateRequest.prototype, "security", void 0);
    return AnalyticsadminPropertiesUserLinksBatchUpdateRequest;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksBatchUpdateRequest };
var AnalyticsadminPropertiesUserLinksBatchUpdateResponse = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksBatchUpdateResponse, _super);
    function AnalyticsadminPropertiesUserLinksBatchUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksBatchUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse)
    ], AnalyticsadminPropertiesUserLinksBatchUpdateResponse.prototype, "googleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsadminPropertiesUserLinksBatchUpdateResponse.prototype, "statusCode", void 0);
    return AnalyticsadminPropertiesUserLinksBatchUpdateResponse;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksBatchUpdateResponse };
