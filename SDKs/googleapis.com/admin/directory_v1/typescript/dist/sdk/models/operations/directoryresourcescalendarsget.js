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
var DirectoryResourcesCalendarsGetPathParams = /** @class */ (function (_super) {
    __extends(DirectoryResourcesCalendarsGetPathParams, _super);
    function DirectoryResourcesCalendarsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=calendarResourceId" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsGetPathParams.prototype, "calendarResourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsGetPathParams.prototype, "customer", void 0);
    return DirectoryResourcesCalendarsGetPathParams;
}(SpeakeasyBase));
export { DirectoryResourcesCalendarsGetPathParams };
var DirectoryResourcesCalendarsGetQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryResourcesCalendarsGetQueryParams, _super);
    function DirectoryResourcesCalendarsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryResourcesCalendarsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsGetQueryParams.prototype, "uploadProtocol", void 0);
    return DirectoryResourcesCalendarsGetQueryParams;
}(SpeakeasyBase));
export { DirectoryResourcesCalendarsGetQueryParams };
var DirectoryResourcesCalendarsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DirectoryResourcesCalendarsGetSecurityOption1, _super);
    function DirectoryResourcesCalendarsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryResourcesCalendarsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryResourcesCalendarsGetSecurityOption1.prototype, "oauth2c", void 0);
    return DirectoryResourcesCalendarsGetSecurityOption1;
}(SpeakeasyBase));
export { DirectoryResourcesCalendarsGetSecurityOption1 };
var DirectoryResourcesCalendarsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DirectoryResourcesCalendarsGetSecurityOption2, _super);
    function DirectoryResourcesCalendarsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryResourcesCalendarsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryResourcesCalendarsGetSecurityOption2.prototype, "oauth2c", void 0);
    return DirectoryResourcesCalendarsGetSecurityOption2;
}(SpeakeasyBase));
export { DirectoryResourcesCalendarsGetSecurityOption2 };
var DirectoryResourcesCalendarsGetSecurity = /** @class */ (function (_super) {
    __extends(DirectoryResourcesCalendarsGetSecurity, _super);
    function DirectoryResourcesCalendarsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryResourcesCalendarsGetSecurityOption1)
    ], DirectoryResourcesCalendarsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryResourcesCalendarsGetSecurityOption2)
    ], DirectoryResourcesCalendarsGetSecurity.prototype, "option2", void 0);
    return DirectoryResourcesCalendarsGetSecurity;
}(SpeakeasyBase));
export { DirectoryResourcesCalendarsGetSecurity };
var DirectoryResourcesCalendarsGetRequest = /** @class */ (function (_super) {
    __extends(DirectoryResourcesCalendarsGetRequest, _super);
    function DirectoryResourcesCalendarsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryResourcesCalendarsGetPathParams)
    ], DirectoryResourcesCalendarsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryResourcesCalendarsGetQueryParams)
    ], DirectoryResourcesCalendarsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryResourcesCalendarsGetSecurity)
    ], DirectoryResourcesCalendarsGetRequest.prototype, "security", void 0);
    return DirectoryResourcesCalendarsGetRequest;
}(SpeakeasyBase));
export { DirectoryResourcesCalendarsGetRequest };
var DirectoryResourcesCalendarsGetResponse = /** @class */ (function (_super) {
    __extends(DirectoryResourcesCalendarsGetResponse, _super);
    function DirectoryResourcesCalendarsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CalendarResource)
    ], DirectoryResourcesCalendarsGetResponse.prototype, "calendarResource", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryResourcesCalendarsGetResponse.prototype, "statusCode", void 0);
    return DirectoryResourcesCalendarsGetResponse;
}(SpeakeasyBase));
export { DirectoryResourcesCalendarsGetResponse };
