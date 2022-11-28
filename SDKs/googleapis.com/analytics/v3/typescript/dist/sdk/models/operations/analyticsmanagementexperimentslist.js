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
var AnalyticsManagementExperimentsListPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsListPathParams, _super);
    function AnalyticsManagementExperimentsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsListPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsListPathParams.prototype, "profileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsListPathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementExperimentsListPathParams;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsListPathParams };
var AnalyticsManagementExperimentsListQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsListQueryParams, _super);
    function AnalyticsManagementExperimentsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max-results" }),
        __metadata("design:type", Number)
    ], AnalyticsManagementExperimentsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementExperimentsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start-index" }),
        __metadata("design:type", Number)
    ], AnalyticsManagementExperimentsListQueryParams.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsListQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementExperimentsListQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsListQueryParams };
var AnalyticsManagementExperimentsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsListSecurityOption1, _super);
    function AnalyticsManagementExperimentsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementExperimentsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementExperimentsListSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsManagementExperimentsListSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsListSecurityOption1 };
var AnalyticsManagementExperimentsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsListSecurityOption2, _super);
    function AnalyticsManagementExperimentsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementExperimentsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementExperimentsListSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsManagementExperimentsListSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsListSecurityOption2 };
var AnalyticsManagementExperimentsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsListSecurityOption3, _super);
    function AnalyticsManagementExperimentsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementExperimentsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementExperimentsListSecurityOption3.prototype, "oauth2c", void 0);
    return AnalyticsManagementExperimentsListSecurityOption3;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsListSecurityOption3 };
var AnalyticsManagementExperimentsListSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsListSecurity, _super);
    function AnalyticsManagementExperimentsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementExperimentsListSecurityOption1)
    ], AnalyticsManagementExperimentsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementExperimentsListSecurityOption2)
    ], AnalyticsManagementExperimentsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementExperimentsListSecurityOption3)
    ], AnalyticsManagementExperimentsListSecurity.prototype, "option3", void 0);
    return AnalyticsManagementExperimentsListSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsListSecurity };
var AnalyticsManagementExperimentsListRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsListRequest, _super);
    function AnalyticsManagementExperimentsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementExperimentsListPathParams)
    ], AnalyticsManagementExperimentsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementExperimentsListQueryParams)
    ], AnalyticsManagementExperimentsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementExperimentsListSecurity)
    ], AnalyticsManagementExperimentsListRequest.prototype, "security", void 0);
    return AnalyticsManagementExperimentsListRequest;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsListRequest };
var AnalyticsManagementExperimentsListResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementExperimentsListResponse, _super);
    function AnalyticsManagementExperimentsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementExperimentsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Experiments)
    ], AnalyticsManagementExperimentsListResponse.prototype, "experiments", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementExperimentsListResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementExperimentsListResponse;
}(SpeakeasyBase));
export { AnalyticsManagementExperimentsListResponse };
