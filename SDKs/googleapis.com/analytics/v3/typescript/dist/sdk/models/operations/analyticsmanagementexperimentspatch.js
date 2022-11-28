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
var AnalyticsManagementExperimentsPatchPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsPatchPathParams, _super);
    function AnalyticsManagementExperimentsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsPatchPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=experimentId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsPatchPathParams.prototype, "experimentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsPatchPathParams.prototype, "profileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsPatchPathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementExperimentsPatchPathParams;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsPatchPathParams };
var AnalyticsManagementExperimentsPatchQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsPatchQueryParams, _super);
    function AnalyticsManagementExperimentsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementExperimentsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsPatchQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementExperimentsPatchQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsPatchQueryParams };
var AnalyticsManagementExperimentsPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsPatchSecurityOption1, _super);
    function AnalyticsManagementExperimentsPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementExperimentsPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementExperimentsPatchSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsManagementExperimentsPatchSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsPatchSecurityOption1 };
var AnalyticsManagementExperimentsPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsPatchSecurityOption2, _super);
    function AnalyticsManagementExperimentsPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementExperimentsPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementExperimentsPatchSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsManagementExperimentsPatchSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsPatchSecurityOption2 };
var AnalyticsManagementExperimentsPatchSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsPatchSecurity, _super);
    function AnalyticsManagementExperimentsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementExperimentsPatchSecurityOption1)
    ], AnalyticsManagementExperimentsPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementExperimentsPatchSecurityOption2)
    ], AnalyticsManagementExperimentsPatchSecurity.prototype, "option2", void 0);
    return AnalyticsManagementExperimentsPatchSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsPatchSecurity };
var AnalyticsManagementExperimentsPatchRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsPatchRequest, _super);
    function AnalyticsManagementExperimentsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementExperimentsPatchPathParams)
    ], AnalyticsManagementExperimentsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementExperimentsPatchQueryParams)
    ], AnalyticsManagementExperimentsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Experiment)
    ], AnalyticsManagementExperimentsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementExperimentsPatchSecurity)
    ], AnalyticsManagementExperimentsPatchRequest.prototype, "security", void 0);
    return AnalyticsManagementExperimentsPatchRequest;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsPatchRequest };
var AnalyticsManagementExperimentsPatchResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsPatchResponse, _super);
    function AnalyticsManagementExperimentsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Experiment)
    ], AnalyticsManagementExperimentsPatchResponse.prototype, "experiment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementExperimentsPatchResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementExperimentsPatchResponse;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsPatchResponse };
