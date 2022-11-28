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
var AnalyticsadminPropertiesUserLinksBatchDeletePathParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksBatchDeletePathParams, _super);
    function AnalyticsadminPropertiesUserLinksBatchDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksBatchDeletePathParams.prototype, "parent", void 0);
    return AnalyticsadminPropertiesUserLinksBatchDeletePathParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksBatchDeletePathParams };
var AnalyticsadminPropertiesUserLinksBatchDeleteQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksBatchDeleteQueryParams, _super);
    function AnalyticsadminPropertiesUserLinksBatchDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksBatchDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksBatchDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksBatchDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksBatchDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksBatchDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksBatchDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksBatchDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsadminPropertiesUserLinksBatchDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksBatchDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksBatchDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksBatchDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticsadminPropertiesUserLinksBatchDeleteQueryParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksBatchDeleteQueryParams };
var AnalyticsadminPropertiesUserLinksBatchDeleteSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksBatchDeleteSecurity, _super);
    function AnalyticsadminPropertiesUserLinksBatchDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesUserLinksBatchDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesUserLinksBatchDeleteSecurity.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesUserLinksBatchDeleteSecurity;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksBatchDeleteSecurity };
var AnalyticsadminPropertiesUserLinksBatchDeleteRequest = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksBatchDeleteRequest, _super);
    function AnalyticsadminPropertiesUserLinksBatchDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesUserLinksBatchDeletePathParams)
    ], AnalyticsadminPropertiesUserLinksBatchDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesUserLinksBatchDeleteQueryParams)
    ], AnalyticsadminPropertiesUserLinksBatchDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1alphaBatchDeleteUserLinksRequest)
    ], AnalyticsadminPropertiesUserLinksBatchDeleteRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesUserLinksBatchDeleteSecurity)
    ], AnalyticsadminPropertiesUserLinksBatchDeleteRequest.prototype, "security", void 0);
    return AnalyticsadminPropertiesUserLinksBatchDeleteRequest;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksBatchDeleteRequest };
var AnalyticsadminPropertiesUserLinksBatchDeleteResponse = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksBatchDeleteResponse, _super);
    function AnalyticsadminPropertiesUserLinksBatchDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksBatchDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], AnalyticsadminPropertiesUserLinksBatchDeleteResponse.prototype, "googleProtobufEmpty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsadminPropertiesUserLinksBatchDeleteResponse.prototype, "statusCode", void 0);
    return AnalyticsadminPropertiesUserLinksBatchDeleteResponse;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksBatchDeleteResponse };
