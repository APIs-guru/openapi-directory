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
export var ReportsActivitiesListApplicationNameEnum;
(function (ReportsActivitiesListApplicationNameEnum) {
    ReportsActivitiesListApplicationNameEnum["AccessTransparency"] = "access_transparency";
    ReportsActivitiesListApplicationNameEnum["Admin"] = "admin";
    ReportsActivitiesListApplicationNameEnum["Calendar"] = "calendar";
    ReportsActivitiesListApplicationNameEnum["Chat"] = "chat";
    ReportsActivitiesListApplicationNameEnum["Drive"] = "drive";
    ReportsActivitiesListApplicationNameEnum["Gcp"] = "gcp";
    ReportsActivitiesListApplicationNameEnum["Gplus"] = "gplus";
    ReportsActivitiesListApplicationNameEnum["Groups"] = "groups";
    ReportsActivitiesListApplicationNameEnum["GroupsEnterprise"] = "groups_enterprise";
    ReportsActivitiesListApplicationNameEnum["Jamboard"] = "jamboard";
    ReportsActivitiesListApplicationNameEnum["Login"] = "login";
    ReportsActivitiesListApplicationNameEnum["Meet"] = "meet";
    ReportsActivitiesListApplicationNameEnum["Mobile"] = "mobile";
    ReportsActivitiesListApplicationNameEnum["Rules"] = "rules";
    ReportsActivitiesListApplicationNameEnum["Saml"] = "saml";
    ReportsActivitiesListApplicationNameEnum["Token"] = "token";
    ReportsActivitiesListApplicationNameEnum["UserAccounts"] = "user_accounts";
    ReportsActivitiesListApplicationNameEnum["ContextAwareAccess"] = "context_aware_access";
    ReportsActivitiesListApplicationNameEnum["Chrome"] = "chrome";
    ReportsActivitiesListApplicationNameEnum["DataStudio"] = "data_studio";
    ReportsActivitiesListApplicationNameEnum["Keep"] = "keep";
})(ReportsActivitiesListApplicationNameEnum || (ReportsActivitiesListApplicationNameEnum = {}));
var ReportsActivitiesListPathParams = /** @class */ (function (_super) {
    __extends(ReportsActivitiesListPathParams, _super);
    function ReportsActivitiesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=applicationName" }),
        __metadata("design:type", String)
    ], ReportsActivitiesListPathParams.prototype, "applicationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userKey" }),
        __metadata("design:type", String)
    ], ReportsActivitiesListPathParams.prototype, "userKey", void 0);
    return ReportsActivitiesListPathParams;
}(SpeakeasyBase));
export { ReportsActivitiesListPathParams };
var ReportsActivitiesListQueryParams = /** @class */ (function (_super) {
    __extends(ReportsActivitiesListQueryParams, _super);
    function ReportsActivitiesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ReportsActivitiesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ReportsActivitiesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=actorIpAddress" }),
        __metadata("design:type", String)
    ], ReportsActivitiesListQueryParams.prototype, "actorIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ReportsActivitiesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ReportsActivitiesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customerId" }),
        __metadata("design:type", String)
    ], ReportsActivitiesListQueryParams.prototype, "customerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endTime" }),
        __metadata("design:type", String)
    ], ReportsActivitiesListQueryParams.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=eventName" }),
        __metadata("design:type", String)
    ], ReportsActivitiesListQueryParams.prototype, "eventName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ReportsActivitiesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filters" }),
        __metadata("design:type", String)
    ], ReportsActivitiesListQueryParams.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupIdFilter" }),
        __metadata("design:type", String)
    ], ReportsActivitiesListQueryParams.prototype, "groupIdFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ReportsActivitiesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ReportsActivitiesListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ReportsActivitiesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orgUnitID" }),
        __metadata("design:type", String)
    ], ReportsActivitiesListQueryParams.prototype, "orgUnitId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ReportsActivitiesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ReportsActivitiesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ReportsActivitiesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTime" }),
        __metadata("design:type", String)
    ], ReportsActivitiesListQueryParams.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ReportsActivitiesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ReportsActivitiesListQueryParams.prototype, "uploadProtocol", void 0);
    return ReportsActivitiesListQueryParams;
}(SpeakeasyBase));
export { ReportsActivitiesListQueryParams };
var ReportsActivitiesListSecurity = /** @class */ (function (_super) {
    __extends(ReportsActivitiesListSecurity, _super);
    function ReportsActivitiesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReportsActivitiesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReportsActivitiesListSecurity.prototype, "oauth2c", void 0);
    return ReportsActivitiesListSecurity;
}(SpeakeasyBase));
export { ReportsActivitiesListSecurity };
var ReportsActivitiesListRequest = /** @class */ (function (_super) {
    __extends(ReportsActivitiesListRequest, _super);
    function ReportsActivitiesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReportsActivitiesListPathParams)
    ], ReportsActivitiesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReportsActivitiesListQueryParams)
    ], ReportsActivitiesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReportsActivitiesListSecurity)
    ], ReportsActivitiesListRequest.prototype, "security", void 0);
    return ReportsActivitiesListRequest;
}(SpeakeasyBase));
export { ReportsActivitiesListRequest };
var ReportsActivitiesListResponse = /** @class */ (function (_super) {
    __extends(ReportsActivitiesListResponse, _super);
    function ReportsActivitiesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Activities)
    ], ReportsActivitiesListResponse.prototype, "activities", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReportsActivitiesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReportsActivitiesListResponse.prototype, "statusCode", void 0);
    return ReportsActivitiesListResponse;
}(SpeakeasyBase));
export { ReportsActivitiesListResponse };
