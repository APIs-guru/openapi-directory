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
var AnalyticsManagementExperimentsInsertPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsInsertPathParams, _super);
    function AnalyticsManagementExperimentsInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsInsertPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsInsertPathParams.prototype, "profileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsInsertPathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementExperimentsInsertPathParams;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsInsertPathParams };
var AnalyticsManagementExperimentsInsertQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsInsertQueryParams, _super);
    function AnalyticsManagementExperimentsInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementExperimentsInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsInsertQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementExperimentsInsertQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsInsertQueryParams };
var AnalyticsManagementExperimentsInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsInsertSecurityOption1, _super);
    function AnalyticsManagementExperimentsInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementExperimentsInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementExperimentsInsertSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsManagementExperimentsInsertSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsInsertSecurityOption1 };
var AnalyticsManagementExperimentsInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsInsertSecurityOption2, _super);
    function AnalyticsManagementExperimentsInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementExperimentsInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementExperimentsInsertSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsManagementExperimentsInsertSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsInsertSecurityOption2 };
var AnalyticsManagementExperimentsInsertSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsInsertSecurity, _super);
    function AnalyticsManagementExperimentsInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementExperimentsInsertSecurityOption1)
    ], AnalyticsManagementExperimentsInsertSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementExperimentsInsertSecurityOption2)
    ], AnalyticsManagementExperimentsInsertSecurity.prototype, "option2", void 0);
    return AnalyticsManagementExperimentsInsertSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsInsertSecurity };
var AnalyticsManagementExperimentsInsertRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsInsertRequest, _super);
    function AnalyticsManagementExperimentsInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementExperimentsInsertPathParams)
    ], AnalyticsManagementExperimentsInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementExperimentsInsertQueryParams)
    ], AnalyticsManagementExperimentsInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Experiment)
    ], AnalyticsManagementExperimentsInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementExperimentsInsertSecurity)
    ], AnalyticsManagementExperimentsInsertRequest.prototype, "security", void 0);
    return AnalyticsManagementExperimentsInsertRequest;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsInsertRequest };
var AnalyticsManagementExperimentsInsertResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsInsertResponse, _super);
    function AnalyticsManagementExperimentsInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Experiment)
    ], AnalyticsManagementExperimentsInsertResponse.prototype, "experiment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementExperimentsInsertResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementExperimentsInsertResponse;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsInsertResponse };
