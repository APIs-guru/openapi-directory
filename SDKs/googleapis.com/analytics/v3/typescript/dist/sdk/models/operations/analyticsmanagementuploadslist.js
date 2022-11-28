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
var AnalyticsManagementUploadsListPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUploadsListPathParams, _super);
    function AnalyticsManagementUploadsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUploadsListPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customDataSourceId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUploadsListPathParams.prototype, "customDataSourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUploadsListPathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementUploadsListPathParams;
}(SpeakeasyBase));
export { AnalyticsManagementUploadsListPathParams };
var AnalyticsManagementUploadsListQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUploadsListQueryParams, _super);
    function AnalyticsManagementUploadsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUploadsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUploadsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUploadsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max-results" }),
        __metadata("design:type", Number)
    ], AnalyticsManagementUploadsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUploadsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementUploadsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUploadsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start-index" }),
        __metadata("design:type", Number)
    ], AnalyticsManagementUploadsListQueryParams.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUploadsListQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementUploadsListQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementUploadsListQueryParams };
var AnalyticsManagementUploadsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUploadsListSecurityOption1, _super);
    function AnalyticsManagementUploadsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementUploadsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementUploadsListSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsManagementUploadsListSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsManagementUploadsListSecurityOption1 };
var AnalyticsManagementUploadsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUploadsListSecurityOption2, _super);
    function AnalyticsManagementUploadsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementUploadsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementUploadsListSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsManagementUploadsListSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsManagementUploadsListSecurityOption2 };
var AnalyticsManagementUploadsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUploadsListSecurityOption3, _super);
    function AnalyticsManagementUploadsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementUploadsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementUploadsListSecurityOption3.prototype, "oauth2c", void 0);
    return AnalyticsManagementUploadsListSecurityOption3;
}(SpeakeasyBase));
export { AnalyticsManagementUploadsListSecurityOption3 };
var AnalyticsManagementUploadsListSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUploadsListSecurity, _super);
    function AnalyticsManagementUploadsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementUploadsListSecurityOption1)
    ], AnalyticsManagementUploadsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementUploadsListSecurityOption2)
    ], AnalyticsManagementUploadsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementUploadsListSecurityOption3)
    ], AnalyticsManagementUploadsListSecurity.prototype, "option3", void 0);
    return AnalyticsManagementUploadsListSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementUploadsListSecurity };
var AnalyticsManagementUploadsListRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUploadsListRequest, _super);
    function AnalyticsManagementUploadsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementUploadsListPathParams)
    ], AnalyticsManagementUploadsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementUploadsListQueryParams)
    ], AnalyticsManagementUploadsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementUploadsListSecurity)
    ], AnalyticsManagementUploadsListRequest.prototype, "security", void 0);
    return AnalyticsManagementUploadsListRequest;
}(SpeakeasyBase));
export { AnalyticsManagementUploadsListRequest };
var AnalyticsManagementUploadsListResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUploadsListResponse, _super);
    function AnalyticsManagementUploadsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementUploadsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementUploadsListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Uploads)
    ], AnalyticsManagementUploadsListResponse.prototype, "uploads", void 0);
    return AnalyticsManagementUploadsListResponse;
}(SpeakeasyBase));
export { AnalyticsManagementUploadsListResponse };
