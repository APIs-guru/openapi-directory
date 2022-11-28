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
var AnalyticsManagementWebpropertyUserLinksListPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebpropertyUserLinksListPathParams, _super);
    function AnalyticsManagementWebpropertyUserLinksListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertyUserLinksListPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertyUserLinksListPathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementWebpropertyUserLinksListPathParams;
}(SpeakeasyBase));
export { AnalyticsManagementWebpropertyUserLinksListPathParams };
var AnalyticsManagementWebpropertyUserLinksListQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebpropertyUserLinksListQueryParams, _super);
    function AnalyticsManagementWebpropertyUserLinksListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertyUserLinksListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertyUserLinksListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertyUserLinksListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max-results" }),
        __metadata("design:type", Number)
    ], AnalyticsManagementWebpropertyUserLinksListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertyUserLinksListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementWebpropertyUserLinksListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertyUserLinksListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start-index" }),
        __metadata("design:type", Number)
    ], AnalyticsManagementWebpropertyUserLinksListQueryParams.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertyUserLinksListQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementWebpropertyUserLinksListQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementWebpropertyUserLinksListQueryParams };
var AnalyticsManagementWebpropertyUserLinksListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebpropertyUserLinksListSecurityOption1, _super);
    function AnalyticsManagementWebpropertyUserLinksListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementWebpropertyUserLinksListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementWebpropertyUserLinksListSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsManagementWebpropertyUserLinksListSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsManagementWebpropertyUserLinksListSecurityOption1 };
var AnalyticsManagementWebpropertyUserLinksListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebpropertyUserLinksListSecurityOption2, _super);
    function AnalyticsManagementWebpropertyUserLinksListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementWebpropertyUserLinksListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementWebpropertyUserLinksListSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsManagementWebpropertyUserLinksListSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsManagementWebpropertyUserLinksListSecurityOption2 };
var AnalyticsManagementWebpropertyUserLinksListSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebpropertyUserLinksListSecurity, _super);
    function AnalyticsManagementWebpropertyUserLinksListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementWebpropertyUserLinksListSecurityOption1)
    ], AnalyticsManagementWebpropertyUserLinksListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementWebpropertyUserLinksListSecurityOption2)
    ], AnalyticsManagementWebpropertyUserLinksListSecurity.prototype, "option2", void 0);
    return AnalyticsManagementWebpropertyUserLinksListSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementWebpropertyUserLinksListSecurity };
var AnalyticsManagementWebpropertyUserLinksListRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebpropertyUserLinksListRequest, _super);
    function AnalyticsManagementWebpropertyUserLinksListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementWebpropertyUserLinksListPathParams)
    ], AnalyticsManagementWebpropertyUserLinksListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementWebpropertyUserLinksListQueryParams)
    ], AnalyticsManagementWebpropertyUserLinksListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementWebpropertyUserLinksListSecurity)
    ], AnalyticsManagementWebpropertyUserLinksListRequest.prototype, "security", void 0);
    return AnalyticsManagementWebpropertyUserLinksListRequest;
}(SpeakeasyBase));
export { AnalyticsManagementWebpropertyUserLinksListRequest };
var AnalyticsManagementWebpropertyUserLinksListResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebpropertyUserLinksListResponse, _super);
    function AnalyticsManagementWebpropertyUserLinksListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertyUserLinksListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EntityUserLinks)
    ], AnalyticsManagementWebpropertyUserLinksListResponse.prototype, "entityUserLinks", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementWebpropertyUserLinksListResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementWebpropertyUserLinksListResponse;
}(SpeakeasyBase));
export { AnalyticsManagementWebpropertyUserLinksListResponse };
