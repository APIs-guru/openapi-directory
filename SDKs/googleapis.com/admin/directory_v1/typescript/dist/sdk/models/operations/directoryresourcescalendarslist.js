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
var DirectoryResourcesCalendarsListPathParams = /** @class */ (function (_super) {
    __extends(DirectoryResourcesCalendarsListPathParams, _super);
    function DirectoryResourcesCalendarsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsListPathParams.prototype, "customer", void 0);
    return DirectoryResourcesCalendarsListPathParams;
}(SpeakeasyBase));
export { DirectoryResourcesCalendarsListPathParams };
var DirectoryResourcesCalendarsListQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryResourcesCalendarsListQueryParams, _super);
    function DirectoryResourcesCalendarsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DirectoryResourcesCalendarsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryResourcesCalendarsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsListQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsListQueryParams.prototype, "uploadProtocol", void 0);
    return DirectoryResourcesCalendarsListQueryParams;
}(SpeakeasyBase));
export { DirectoryResourcesCalendarsListQueryParams };
var DirectoryResourcesCalendarsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DirectoryResourcesCalendarsListSecurityOption1, _super);
    function DirectoryResourcesCalendarsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryResourcesCalendarsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryResourcesCalendarsListSecurityOption1.prototype, "oauth2c", void 0);
    return DirectoryResourcesCalendarsListSecurityOption1;
}(SpeakeasyBase));
export { DirectoryResourcesCalendarsListSecurityOption1 };
var DirectoryResourcesCalendarsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DirectoryResourcesCalendarsListSecurityOption2, _super);
    function DirectoryResourcesCalendarsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryResourcesCalendarsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryResourcesCalendarsListSecurityOption2.prototype, "oauth2c", void 0);
    return DirectoryResourcesCalendarsListSecurityOption2;
}(SpeakeasyBase));
export { DirectoryResourcesCalendarsListSecurityOption2 };
var DirectoryResourcesCalendarsListSecurity = /** @class */ (function (_super) {
    __extends(DirectoryResourcesCalendarsListSecurity, _super);
    function DirectoryResourcesCalendarsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryResourcesCalendarsListSecurityOption1)
    ], DirectoryResourcesCalendarsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryResourcesCalendarsListSecurityOption2)
    ], DirectoryResourcesCalendarsListSecurity.prototype, "option2", void 0);
    return DirectoryResourcesCalendarsListSecurity;
}(SpeakeasyBase));
export { DirectoryResourcesCalendarsListSecurity };
var DirectoryResourcesCalendarsListRequest = /** @class */ (function (_super) {
    __extends(DirectoryResourcesCalendarsListRequest, _super);
    function DirectoryResourcesCalendarsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryResourcesCalendarsListPathParams)
    ], DirectoryResourcesCalendarsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryResourcesCalendarsListQueryParams)
    ], DirectoryResourcesCalendarsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryResourcesCalendarsListSecurity)
    ], DirectoryResourcesCalendarsListRequest.prototype, "security", void 0);
    return DirectoryResourcesCalendarsListRequest;
}(SpeakeasyBase));
export { DirectoryResourcesCalendarsListRequest };
var DirectoryResourcesCalendarsListResponse = /** @class */ (function (_super) {
    __extends(DirectoryResourcesCalendarsListResponse, _super);
    function DirectoryResourcesCalendarsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CalendarResources)
    ], DirectoryResourcesCalendarsListResponse.prototype, "calendarResources", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryResourcesCalendarsListResponse.prototype, "statusCode", void 0);
    return DirectoryResourcesCalendarsListResponse;
}(SpeakeasyBase));
export { DirectoryResourcesCalendarsListResponse };
