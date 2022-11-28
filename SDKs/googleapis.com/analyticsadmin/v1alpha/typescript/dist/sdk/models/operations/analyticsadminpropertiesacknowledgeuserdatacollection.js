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
var AnalyticsadminPropertiesAcknowledgeUserDataCollectionPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesAcknowledgeUserDataCollectionPathParams, _super);
    function AnalyticsadminPropertiesAcknowledgeUserDataCollectionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=property" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesAcknowledgeUserDataCollectionPathParams.prototype, "property", void 0);
    return AnalyticsadminPropertiesAcknowledgeUserDataCollectionPathParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesAcknowledgeUserDataCollectionPathParams };
var AnalyticsadminPropertiesAcknowledgeUserDataCollectionQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesAcknowledgeUserDataCollectionQueryParams, _super);
    function AnalyticsadminPropertiesAcknowledgeUserDataCollectionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesAcknowledgeUserDataCollectionQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesAcknowledgeUserDataCollectionQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesAcknowledgeUserDataCollectionQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesAcknowledgeUserDataCollectionQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesAcknowledgeUserDataCollectionQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesAcknowledgeUserDataCollectionQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesAcknowledgeUserDataCollectionQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsadminPropertiesAcknowledgeUserDataCollectionQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesAcknowledgeUserDataCollectionQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesAcknowledgeUserDataCollectionQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesAcknowledgeUserDataCollectionQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticsadminPropertiesAcknowledgeUserDataCollectionQueryParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesAcknowledgeUserDataCollectionQueryParams };
var AnalyticsadminPropertiesAcknowledgeUserDataCollectionSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesAcknowledgeUserDataCollectionSecurity, _super);
    function AnalyticsadminPropertiesAcknowledgeUserDataCollectionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesAcknowledgeUserDataCollectionSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesAcknowledgeUserDataCollectionSecurity.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesAcknowledgeUserDataCollectionSecurity;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesAcknowledgeUserDataCollectionSecurity };
var AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest, _super);
    function AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesAcknowledgeUserDataCollectionPathParams)
    ], AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesAcknowledgeUserDataCollectionQueryParams)
    ], AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionRequest)
    ], AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesAcknowledgeUserDataCollectionSecurity)
    ], AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest.prototype, "security", void 0);
    return AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest };
var AnalyticsadminPropertiesAcknowledgeUserDataCollectionResponse = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesAcknowledgeUserDataCollectionResponse, _super);
    function AnalyticsadminPropertiesAcknowledgeUserDataCollectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesAcknowledgeUserDataCollectionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], AnalyticsadminPropertiesAcknowledgeUserDataCollectionResponse.prototype, "googleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsadminPropertiesAcknowledgeUserDataCollectionResponse.prototype, "statusCode", void 0);
    return AnalyticsadminPropertiesAcknowledgeUserDataCollectionResponse;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesAcknowledgeUserDataCollectionResponse };
