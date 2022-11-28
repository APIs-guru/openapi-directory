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
var AnalyticsManagementExperimentsUpdatePathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsUpdatePathParams, _super);
    function AnalyticsManagementExperimentsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsUpdatePathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=experimentId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsUpdatePathParams.prototype, "experimentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsUpdatePathParams.prototype, "profileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsUpdatePathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementExperimentsUpdatePathParams;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsUpdatePathParams };
var AnalyticsManagementExperimentsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsUpdateQueryParams, _super);
    function AnalyticsManagementExperimentsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementExperimentsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsUpdateQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementExperimentsUpdateQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsUpdateQueryParams };
var AnalyticsManagementExperimentsUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsUpdateSecurityOption1, _super);
    function AnalyticsManagementExperimentsUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementExperimentsUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementExperimentsUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsManagementExperimentsUpdateSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsUpdateSecurityOption1 };
var AnalyticsManagementExperimentsUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsUpdateSecurityOption2, _super);
    function AnalyticsManagementExperimentsUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementExperimentsUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementExperimentsUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsManagementExperimentsUpdateSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsUpdateSecurityOption2 };
var AnalyticsManagementExperimentsUpdateSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsUpdateSecurity, _super);
    function AnalyticsManagementExperimentsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementExperimentsUpdateSecurityOption1)
    ], AnalyticsManagementExperimentsUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementExperimentsUpdateSecurityOption2)
    ], AnalyticsManagementExperimentsUpdateSecurity.prototype, "option2", void 0);
    return AnalyticsManagementExperimentsUpdateSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsUpdateSecurity };
var AnalyticsManagementExperimentsUpdateRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsUpdateRequest, _super);
    function AnalyticsManagementExperimentsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementExperimentsUpdatePathParams)
    ], AnalyticsManagementExperimentsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementExperimentsUpdateQueryParams)
    ], AnalyticsManagementExperimentsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Experiment)
    ], AnalyticsManagementExperimentsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementExperimentsUpdateSecurity)
    ], AnalyticsManagementExperimentsUpdateRequest.prototype, "security", void 0);
    return AnalyticsManagementExperimentsUpdateRequest;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsUpdateRequest };
var AnalyticsManagementExperimentsUpdateResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsUpdateResponse, _super);
    function AnalyticsManagementExperimentsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Experiment)
    ], AnalyticsManagementExperimentsUpdateResponse.prototype, "experiment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementExperimentsUpdateResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementExperimentsUpdateResponse;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsUpdateResponse };
