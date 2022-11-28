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
var AnalyticsManagementGoalsUpdatePathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementGoalsUpdatePathParams, _super);
    function AnalyticsManagementGoalsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementGoalsUpdatePathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=goalId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementGoalsUpdatePathParams.prototype, "goalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementGoalsUpdatePathParams.prototype, "profileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementGoalsUpdatePathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementGoalsUpdatePathParams;
}(SpeakeasyBase));
export { AnalyticsManagementGoalsUpdatePathParams };
var AnalyticsManagementGoalsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementGoalsUpdateQueryParams, _super);
    function AnalyticsManagementGoalsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementGoalsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementGoalsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementGoalsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementGoalsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementGoalsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementGoalsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementGoalsUpdateQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementGoalsUpdateQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementGoalsUpdateQueryParams };
var AnalyticsManagementGoalsUpdateSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementGoalsUpdateSecurity, _super);
    function AnalyticsManagementGoalsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementGoalsUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementGoalsUpdateSecurity.prototype, "oauth2c", void 0);
    return AnalyticsManagementGoalsUpdateSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementGoalsUpdateSecurity };
var AnalyticsManagementGoalsUpdateRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementGoalsUpdateRequest, _super);
    function AnalyticsManagementGoalsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementGoalsUpdatePathParams)
    ], AnalyticsManagementGoalsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementGoalsUpdateQueryParams)
    ], AnalyticsManagementGoalsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Goal)
    ], AnalyticsManagementGoalsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementGoalsUpdateSecurity)
    ], AnalyticsManagementGoalsUpdateRequest.prototype, "security", void 0);
    return AnalyticsManagementGoalsUpdateRequest;
}(SpeakeasyBase));
export { AnalyticsManagementGoalsUpdateRequest };
var AnalyticsManagementGoalsUpdateResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementGoalsUpdateResponse, _super);
    function AnalyticsManagementGoalsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementGoalsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Goal)
    ], AnalyticsManagementGoalsUpdateResponse.prototype, "goal", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementGoalsUpdateResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementGoalsUpdateResponse;
}(SpeakeasyBase));
export { AnalyticsManagementGoalsUpdateResponse };
