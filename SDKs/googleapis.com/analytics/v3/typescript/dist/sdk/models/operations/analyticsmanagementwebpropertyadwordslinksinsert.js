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
var AnalyticsManagementWebPropertyAdWordsLinksInsertPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebPropertyAdWordsLinksInsertPathParams, _super);
    function AnalyticsManagementWebPropertyAdWordsLinksInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksInsertPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksInsertPathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementWebPropertyAdWordsLinksInsertPathParams;
}(SpeakeasyBase));
export { AnalyticsManagementWebPropertyAdWordsLinksInsertPathParams };
var AnalyticsManagementWebPropertyAdWordsLinksInsertQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebPropertyAdWordsLinksInsertQueryParams, _super);
    function AnalyticsManagementWebPropertyAdWordsLinksInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementWebPropertyAdWordsLinksInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksInsertQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementWebPropertyAdWordsLinksInsertQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementWebPropertyAdWordsLinksInsertQueryParams };
var AnalyticsManagementWebPropertyAdWordsLinksInsertSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebPropertyAdWordsLinksInsertSecurity, _super);
    function AnalyticsManagementWebPropertyAdWordsLinksInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementWebPropertyAdWordsLinksInsertSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementWebPropertyAdWordsLinksInsertSecurity.prototype, "oauth2c", void 0);
    return AnalyticsManagementWebPropertyAdWordsLinksInsertSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementWebPropertyAdWordsLinksInsertSecurity };
var AnalyticsManagementWebPropertyAdWordsLinksInsertRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebPropertyAdWordsLinksInsertRequest, _super);
    function AnalyticsManagementWebPropertyAdWordsLinksInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementWebPropertyAdWordsLinksInsertPathParams)
    ], AnalyticsManagementWebPropertyAdWordsLinksInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementWebPropertyAdWordsLinksInsertQueryParams)
    ], AnalyticsManagementWebPropertyAdWordsLinksInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.EntityAdWordsLink)
    ], AnalyticsManagementWebPropertyAdWordsLinksInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementWebPropertyAdWordsLinksInsertSecurity)
    ], AnalyticsManagementWebPropertyAdWordsLinksInsertRequest.prototype, "security", void 0);
    return AnalyticsManagementWebPropertyAdWordsLinksInsertRequest;
}(SpeakeasyBase));
export { AnalyticsManagementWebPropertyAdWordsLinksInsertRequest };
var AnalyticsManagementWebPropertyAdWordsLinksInsertResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebPropertyAdWordsLinksInsertResponse, _super);
    function AnalyticsManagementWebPropertyAdWordsLinksInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EntityAdWordsLink)
    ], AnalyticsManagementWebPropertyAdWordsLinksInsertResponse.prototype, "entityAdWordsLink", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementWebPropertyAdWordsLinksInsertResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementWebPropertyAdWordsLinksInsertResponse;
}(SpeakeasyBase));
export { AnalyticsManagementWebPropertyAdWordsLinksInsertResponse };
