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
var AnalyticsManagementAccountUserLinksListPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementAccountUserLinksListPathParams, _super);
    function AnalyticsManagementAccountUserLinksListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementAccountUserLinksListPathParams.prototype, "accountId", void 0);
    return AnalyticsManagementAccountUserLinksListPathParams;
}(SpeakeasyBase));
export { AnalyticsManagementAccountUserLinksListPathParams };
var AnalyticsManagementAccountUserLinksListQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementAccountUserLinksListQueryParams, _super);
    function AnalyticsManagementAccountUserLinksListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementAccountUserLinksListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementAccountUserLinksListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementAccountUserLinksListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max-results" }),
        __metadata("design:type", Number)
    ], AnalyticsManagementAccountUserLinksListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementAccountUserLinksListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementAccountUserLinksListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementAccountUserLinksListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start-index" }),
        __metadata("design:type", Number)
    ], AnalyticsManagementAccountUserLinksListQueryParams.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementAccountUserLinksListQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementAccountUserLinksListQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementAccountUserLinksListQueryParams };
var AnalyticsManagementAccountUserLinksListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementAccountUserLinksListSecurityOption1, _super);
    function AnalyticsManagementAccountUserLinksListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementAccountUserLinksListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementAccountUserLinksListSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsManagementAccountUserLinksListSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsManagementAccountUserLinksListSecurityOption1 };
var AnalyticsManagementAccountUserLinksListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementAccountUserLinksListSecurityOption2, _super);
    function AnalyticsManagementAccountUserLinksListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementAccountUserLinksListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementAccountUserLinksListSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsManagementAccountUserLinksListSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsManagementAccountUserLinksListSecurityOption2 };
var AnalyticsManagementAccountUserLinksListSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementAccountUserLinksListSecurity, _super);
    function AnalyticsManagementAccountUserLinksListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementAccountUserLinksListSecurityOption1)
    ], AnalyticsManagementAccountUserLinksListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementAccountUserLinksListSecurityOption2)
    ], AnalyticsManagementAccountUserLinksListSecurity.prototype, "option2", void 0);
    return AnalyticsManagementAccountUserLinksListSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementAccountUserLinksListSecurity };
var AnalyticsManagementAccountUserLinksListRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementAccountUserLinksListRequest, _super);
    function AnalyticsManagementAccountUserLinksListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementAccountUserLinksListPathParams)
    ], AnalyticsManagementAccountUserLinksListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementAccountUserLinksListQueryParams)
    ], AnalyticsManagementAccountUserLinksListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementAccountUserLinksListSecurity)
    ], AnalyticsManagementAccountUserLinksListRequest.prototype, "security", void 0);
    return AnalyticsManagementAccountUserLinksListRequest;
}(SpeakeasyBase));
export { AnalyticsManagementAccountUserLinksListRequest };
var AnalyticsManagementAccountUserLinksListResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementAccountUserLinksListResponse, _super);
    function AnalyticsManagementAccountUserLinksListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementAccountUserLinksListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EntityUserLinks)
    ], AnalyticsManagementAccountUserLinksListResponse.prototype, "entityUserLinks", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementAccountUserLinksListResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementAccountUserLinksListResponse;
}(SpeakeasyBase));
export { AnalyticsManagementAccountUserLinksListResponse };
