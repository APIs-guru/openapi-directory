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
var DirectoryResourcesCalendarsInsertPathParams = /** @class */ (function (_super) {
    __extends(DirectoryResourcesCalendarsInsertPathParams, _super);
    function DirectoryResourcesCalendarsInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsInsertPathParams.prototype, "customer", void 0);
    return DirectoryResourcesCalendarsInsertPathParams;
}(SpeakeasyBase));
export { DirectoryResourcesCalendarsInsertPathParams };
var DirectoryResourcesCalendarsInsertQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryResourcesCalendarsInsertQueryParams, _super);
    function DirectoryResourcesCalendarsInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsInsertQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsInsertQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsInsertQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryResourcesCalendarsInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsInsertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsInsertQueryParams.prototype, "uploadProtocol", void 0);
    return DirectoryResourcesCalendarsInsertQueryParams;
}(SpeakeasyBase));
export { DirectoryResourcesCalendarsInsertQueryParams };
var DirectoryResourcesCalendarsInsertSecurity = /** @class */ (function (_super) {
    __extends(DirectoryResourcesCalendarsInsertSecurity, _super);
    function DirectoryResourcesCalendarsInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryResourcesCalendarsInsertSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryResourcesCalendarsInsertSecurity.prototype, "oauth2c", void 0);
    return DirectoryResourcesCalendarsInsertSecurity;
}(SpeakeasyBase));
export { DirectoryResourcesCalendarsInsertSecurity };
var DirectoryResourcesCalendarsInsertRequest = /** @class */ (function (_super) {
    __extends(DirectoryResourcesCalendarsInsertRequest, _super);
    function DirectoryResourcesCalendarsInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryResourcesCalendarsInsertPathParams)
    ], DirectoryResourcesCalendarsInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryResourcesCalendarsInsertQueryParams)
    ], DirectoryResourcesCalendarsInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CalendarResource)
    ], DirectoryResourcesCalendarsInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryResourcesCalendarsInsertSecurity)
    ], DirectoryResourcesCalendarsInsertRequest.prototype, "security", void 0);
    return DirectoryResourcesCalendarsInsertRequest;
}(SpeakeasyBase));
export { DirectoryResourcesCalendarsInsertRequest };
var DirectoryResourcesCalendarsInsertResponse = /** @class */ (function (_super) {
    __extends(DirectoryResourcesCalendarsInsertResponse, _super);
    function DirectoryResourcesCalendarsInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CalendarResource)
    ], DirectoryResourcesCalendarsInsertResponse.prototype, "calendarResource", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryResourcesCalendarsInsertResponse.prototype, "statusCode", void 0);
    return DirectoryResourcesCalendarsInsertResponse;
}(SpeakeasyBase));
export { DirectoryResourcesCalendarsInsertResponse };
