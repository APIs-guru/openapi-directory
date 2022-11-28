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
var AnalyticsManagementExperimentsDeletePathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsDeletePathParams, _super);
    function AnalyticsManagementExperimentsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsDeletePathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=experimentId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsDeletePathParams.prototype, "experimentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsDeletePathParams.prototype, "profileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsDeletePathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementExperimentsDeletePathParams;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsDeletePathParams };
var AnalyticsManagementExperimentsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsDeleteQueryParams, _super);
    function AnalyticsManagementExperimentsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementExperimentsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsDeleteQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementExperimentsDeleteQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsDeleteQueryParams };
var AnalyticsManagementExperimentsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsDeleteSecurityOption1, _super);
    function AnalyticsManagementExperimentsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementExperimentsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementExperimentsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsManagementExperimentsDeleteSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsDeleteSecurityOption1 };
var AnalyticsManagementExperimentsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsDeleteSecurityOption2, _super);
    function AnalyticsManagementExperimentsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementExperimentsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementExperimentsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsManagementExperimentsDeleteSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsDeleteSecurityOption2 };
var AnalyticsManagementExperimentsDeleteSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsDeleteSecurity, _super);
    function AnalyticsManagementExperimentsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementExperimentsDeleteSecurityOption1)
    ], AnalyticsManagementExperimentsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementExperimentsDeleteSecurityOption2)
    ], AnalyticsManagementExperimentsDeleteSecurity.prototype, "option2", void 0);
    return AnalyticsManagementExperimentsDeleteSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsDeleteSecurity };
var AnalyticsManagementExperimentsDeleteRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsDeleteRequest, _super);
    function AnalyticsManagementExperimentsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementExperimentsDeletePathParams)
    ], AnalyticsManagementExperimentsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementExperimentsDeleteQueryParams)
    ], AnalyticsManagementExperimentsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementExperimentsDeleteSecurity)
    ], AnalyticsManagementExperimentsDeleteRequest.prototype, "security", void 0);
    return AnalyticsManagementExperimentsDeleteRequest;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsDeleteRequest };
var AnalyticsManagementExperimentsDeleteResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsDeleteResponse, _super);
    function AnalyticsManagementExperimentsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementExperimentsDeleteResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementExperimentsDeleteResponse;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsDeleteResponse };
