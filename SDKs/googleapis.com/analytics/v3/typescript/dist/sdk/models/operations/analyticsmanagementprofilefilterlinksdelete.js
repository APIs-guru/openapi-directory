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
var AnalyticsManagementProfileFilterLinksDeletePathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileFilterLinksDeletePathParams, _super);
    function AnalyticsManagementProfileFilterLinksDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksDeletePathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linkId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksDeletePathParams.prototype, "linkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksDeletePathParams.prototype, "profileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksDeletePathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementProfileFilterLinksDeletePathParams;
}(SpeakeasyBase));
export { AnalyticsManagementProfileFilterLinksDeletePathParams };
var AnalyticsManagementProfileFilterLinksDeleteQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileFilterLinksDeleteQueryParams, _super);
    function AnalyticsManagementProfileFilterLinksDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementProfileFilterLinksDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksDeleteQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementProfileFilterLinksDeleteQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementProfileFilterLinksDeleteQueryParams };
var AnalyticsManagementProfileFilterLinksDeleteSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileFilterLinksDeleteSecurity, _super);
    function AnalyticsManagementProfileFilterLinksDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementProfileFilterLinksDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementProfileFilterLinksDeleteSecurity.prototype, "oauth2c", void 0);
    return AnalyticsManagementProfileFilterLinksDeleteSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementProfileFilterLinksDeleteSecurity };
var AnalyticsManagementProfileFilterLinksDeleteRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileFilterLinksDeleteRequest, _super);
    function AnalyticsManagementProfileFilterLinksDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementProfileFilterLinksDeletePathParams)
    ], AnalyticsManagementProfileFilterLinksDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementProfileFilterLinksDeleteQueryParams)
    ], AnalyticsManagementProfileFilterLinksDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementProfileFilterLinksDeleteSecurity)
    ], AnalyticsManagementProfileFilterLinksDeleteRequest.prototype, "security", void 0);
    return AnalyticsManagementProfileFilterLinksDeleteRequest;
}(SpeakeasyBase));
export { AnalyticsManagementProfileFilterLinksDeleteRequest };
var AnalyticsManagementProfileFilterLinksDeleteResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileFilterLinksDeleteResponse, _super);
    function AnalyticsManagementProfileFilterLinksDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementProfileFilterLinksDeleteResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementProfileFilterLinksDeleteResponse;
}(SpeakeasyBase));
export { AnalyticsManagementProfileFilterLinksDeleteResponse };
