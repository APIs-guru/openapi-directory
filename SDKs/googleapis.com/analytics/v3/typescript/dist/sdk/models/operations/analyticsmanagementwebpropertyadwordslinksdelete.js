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
var AnalyticsManagementWebPropertyAdWordsLinksDeletePathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebPropertyAdWordsLinksDeletePathParams, _super);
    function AnalyticsManagementWebPropertyAdWordsLinksDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksDeletePathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyAdWordsLinkId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksDeletePathParams.prototype, "webPropertyAdWordsLinkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksDeletePathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementWebPropertyAdWordsLinksDeletePathParams;
}(SpeakeasyBase));
export { AnalyticsManagementWebPropertyAdWordsLinksDeletePathParams };
var AnalyticsManagementWebPropertyAdWordsLinksDeleteQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebPropertyAdWordsLinksDeleteQueryParams, _super);
    function AnalyticsManagementWebPropertyAdWordsLinksDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementWebPropertyAdWordsLinksDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksDeleteQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementWebPropertyAdWordsLinksDeleteQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementWebPropertyAdWordsLinksDeleteQueryParams };
var AnalyticsManagementWebPropertyAdWordsLinksDeleteSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebPropertyAdWordsLinksDeleteSecurity, _super);
    function AnalyticsManagementWebPropertyAdWordsLinksDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementWebPropertyAdWordsLinksDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementWebPropertyAdWordsLinksDeleteSecurity.prototype, "oauth2c", void 0);
    return AnalyticsManagementWebPropertyAdWordsLinksDeleteSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementWebPropertyAdWordsLinksDeleteSecurity };
var AnalyticsManagementWebPropertyAdWordsLinksDeleteRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebPropertyAdWordsLinksDeleteRequest, _super);
    function AnalyticsManagementWebPropertyAdWordsLinksDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementWebPropertyAdWordsLinksDeletePathParams)
    ], AnalyticsManagementWebPropertyAdWordsLinksDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementWebPropertyAdWordsLinksDeleteQueryParams)
    ], AnalyticsManagementWebPropertyAdWordsLinksDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementWebPropertyAdWordsLinksDeleteSecurity)
    ], AnalyticsManagementWebPropertyAdWordsLinksDeleteRequest.prototype, "security", void 0);
    return AnalyticsManagementWebPropertyAdWordsLinksDeleteRequest;
}(SpeakeasyBase));
export { AnalyticsManagementWebPropertyAdWordsLinksDeleteRequest };
var AnalyticsManagementWebPropertyAdWordsLinksDeleteResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebPropertyAdWordsLinksDeleteResponse, _super);
    function AnalyticsManagementWebPropertyAdWordsLinksDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementWebPropertyAdWordsLinksDeleteResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementWebPropertyAdWordsLinksDeleteResponse;
}(SpeakeasyBase));
export { AnalyticsManagementWebPropertyAdWordsLinksDeleteResponse };
