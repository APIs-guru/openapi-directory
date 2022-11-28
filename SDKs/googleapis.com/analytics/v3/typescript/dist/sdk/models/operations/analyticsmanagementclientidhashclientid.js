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
var AnalyticsManagementClientIdHashClientIdQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementClientIdHashClientIdQueryParams, _super);
    function AnalyticsManagementClientIdHashClientIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementClientIdHashClientIdQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementClientIdHashClientIdQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementClientIdHashClientIdQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementClientIdHashClientIdQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementClientIdHashClientIdQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementClientIdHashClientIdQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementClientIdHashClientIdQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementClientIdHashClientIdQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementClientIdHashClientIdQueryParams };
var AnalyticsManagementClientIdHashClientIdSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementClientIdHashClientIdSecurityOption1, _super);
    function AnalyticsManagementClientIdHashClientIdSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementClientIdHashClientIdSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementClientIdHashClientIdSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsManagementClientIdHashClientIdSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsManagementClientIdHashClientIdSecurityOption1 };
var AnalyticsManagementClientIdHashClientIdSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementClientIdHashClientIdSecurityOption2, _super);
    function AnalyticsManagementClientIdHashClientIdSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementClientIdHashClientIdSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementClientIdHashClientIdSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsManagementClientIdHashClientIdSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsManagementClientIdHashClientIdSecurityOption2 };
var AnalyticsManagementClientIdHashClientIdSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementClientIdHashClientIdSecurity, _super);
    function AnalyticsManagementClientIdHashClientIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementClientIdHashClientIdSecurityOption1)
    ], AnalyticsManagementClientIdHashClientIdSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementClientIdHashClientIdSecurityOption2)
    ], AnalyticsManagementClientIdHashClientIdSecurity.prototype, "option2", void 0);
    return AnalyticsManagementClientIdHashClientIdSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementClientIdHashClientIdSecurity };
var AnalyticsManagementClientIdHashClientIdRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementClientIdHashClientIdRequest, _super);
    function AnalyticsManagementClientIdHashClientIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementClientIdHashClientIdQueryParams)
    ], AnalyticsManagementClientIdHashClientIdRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.HashClientIdRequest)
    ], AnalyticsManagementClientIdHashClientIdRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementClientIdHashClientIdSecurity)
    ], AnalyticsManagementClientIdHashClientIdRequest.prototype, "security", void 0);
    return AnalyticsManagementClientIdHashClientIdRequest;
}(SpeakeasyBase));
export { AnalyticsManagementClientIdHashClientIdRequest };
var AnalyticsManagementClientIdHashClientIdResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementClientIdHashClientIdResponse, _super);
    function AnalyticsManagementClientIdHashClientIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementClientIdHashClientIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HashClientIdResponse)
    ], AnalyticsManagementClientIdHashClientIdResponse.prototype, "hashClientIdResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementClientIdHashClientIdResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementClientIdHashClientIdResponse;
}(SpeakeasyBase));
export { AnalyticsManagementClientIdHashClientIdResponse };
