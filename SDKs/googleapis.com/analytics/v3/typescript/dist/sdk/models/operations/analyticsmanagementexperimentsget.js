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
var AnalyticsManagementExperimentsGetPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsGetPathParams, _super);
    function AnalyticsManagementExperimentsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsGetPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=experimentId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsGetPathParams.prototype, "experimentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsGetPathParams.prototype, "profileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsGetPathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementExperimentsGetPathParams;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsGetPathParams };
var AnalyticsManagementExperimentsGetQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsGetQueryParams, _super);
    function AnalyticsManagementExperimentsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementExperimentsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsGetQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementExperimentsGetQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsGetQueryParams };
var AnalyticsManagementExperimentsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsGetSecurityOption1, _super);
    function AnalyticsManagementExperimentsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementExperimentsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementExperimentsGetSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsManagementExperimentsGetSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsGetSecurityOption1 };
var AnalyticsManagementExperimentsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsGetSecurityOption2, _super);
    function AnalyticsManagementExperimentsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementExperimentsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementExperimentsGetSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsManagementExperimentsGetSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsGetSecurityOption2 };
var AnalyticsManagementExperimentsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsGetSecurityOption3, _super);
    function AnalyticsManagementExperimentsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementExperimentsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementExperimentsGetSecurityOption3.prototype, "oauth2c", void 0);
    return AnalyticsManagementExperimentsGetSecurityOption3;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsGetSecurityOption3 };
var AnalyticsManagementExperimentsGetSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsGetSecurity, _super);
    function AnalyticsManagementExperimentsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementExperimentsGetSecurityOption1)
    ], AnalyticsManagementExperimentsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementExperimentsGetSecurityOption2)
    ], AnalyticsManagementExperimentsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementExperimentsGetSecurityOption3)
    ], AnalyticsManagementExperimentsGetSecurity.prototype, "option3", void 0);
    return AnalyticsManagementExperimentsGetSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsGetSecurity };
var AnalyticsManagementExperimentsGetRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsGetRequest, _super);
    function AnalyticsManagementExperimentsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementExperimentsGetPathParams)
    ], AnalyticsManagementExperimentsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementExperimentsGetQueryParams)
    ], AnalyticsManagementExperimentsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementExperimentsGetSecurity)
    ], AnalyticsManagementExperimentsGetRequest.prototype, "security", void 0);
    return AnalyticsManagementExperimentsGetRequest;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsGetRequest };
var AnalyticsManagementExperimentsGetResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsGetResponse, _super);
    function AnalyticsManagementExperimentsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Experiment)
    ], AnalyticsManagementExperimentsGetResponse.prototype, "experiment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementExperimentsGetResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementExperimentsGetResponse;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsGetResponse };
