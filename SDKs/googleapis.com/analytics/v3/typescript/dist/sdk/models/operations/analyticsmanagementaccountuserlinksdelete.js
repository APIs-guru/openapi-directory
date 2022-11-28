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
var AnalyticsManagementAccountUserLinksDeletePathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementAccountUserLinksDeletePathParams, _super);
    function AnalyticsManagementAccountUserLinksDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementAccountUserLinksDeletePathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linkId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementAccountUserLinksDeletePathParams.prototype, "linkId", void 0);
    return AnalyticsManagementAccountUserLinksDeletePathParams;
}(SpeakeasyBase));
export { AnalyticsManagementAccountUserLinksDeletePathParams };
var AnalyticsManagementAccountUserLinksDeleteQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementAccountUserLinksDeleteQueryParams, _super);
    function AnalyticsManagementAccountUserLinksDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementAccountUserLinksDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementAccountUserLinksDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementAccountUserLinksDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementAccountUserLinksDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementAccountUserLinksDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementAccountUserLinksDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementAccountUserLinksDeleteQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementAccountUserLinksDeleteQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementAccountUserLinksDeleteQueryParams };
var AnalyticsManagementAccountUserLinksDeleteSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementAccountUserLinksDeleteSecurity, _super);
    function AnalyticsManagementAccountUserLinksDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementAccountUserLinksDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementAccountUserLinksDeleteSecurity.prototype, "oauth2c", void 0);
    return AnalyticsManagementAccountUserLinksDeleteSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementAccountUserLinksDeleteSecurity };
var AnalyticsManagementAccountUserLinksDeleteRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementAccountUserLinksDeleteRequest, _super);
    function AnalyticsManagementAccountUserLinksDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementAccountUserLinksDeletePathParams)
    ], AnalyticsManagementAccountUserLinksDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementAccountUserLinksDeleteQueryParams)
    ], AnalyticsManagementAccountUserLinksDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementAccountUserLinksDeleteSecurity)
    ], AnalyticsManagementAccountUserLinksDeleteRequest.prototype, "security", void 0);
    return AnalyticsManagementAccountUserLinksDeleteRequest;
}(SpeakeasyBase));
export { AnalyticsManagementAccountUserLinksDeleteRequest };
var AnalyticsManagementAccountUserLinksDeleteResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementAccountUserLinksDeleteResponse, _super);
    function AnalyticsManagementAccountUserLinksDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementAccountUserLinksDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementAccountUserLinksDeleteResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementAccountUserLinksDeleteResponse;
}(SpeakeasyBase));
export { AnalyticsManagementAccountUserLinksDeleteResponse };
