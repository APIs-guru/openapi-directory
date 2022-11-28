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
var DirectoryResourcesCalendarsDeletePathParams = /** @class */ (function (_super) {
    __extends(DirectoryResourcesCalendarsDeletePathParams, _super);
    function DirectoryResourcesCalendarsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=calendarResourceId" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsDeletePathParams.prototype, "calendarResourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsDeletePathParams.prototype, "customer", void 0);
    return DirectoryResourcesCalendarsDeletePathParams;
}(SpeakeasyBase));
export { DirectoryResourcesCalendarsDeletePathParams };
var DirectoryResourcesCalendarsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryResourcesCalendarsDeleteQueryParams, _super);
    function DirectoryResourcesCalendarsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryResourcesCalendarsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return DirectoryResourcesCalendarsDeleteQueryParams;
}(SpeakeasyBase));
export { DirectoryResourcesCalendarsDeleteQueryParams };
var DirectoryResourcesCalendarsDeleteSecurity = /** @class */ (function (_super) {
    __extends(DirectoryResourcesCalendarsDeleteSecurity, _super);
    function DirectoryResourcesCalendarsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryResourcesCalendarsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryResourcesCalendarsDeleteSecurity.prototype, "oauth2c", void 0);
    return DirectoryResourcesCalendarsDeleteSecurity;
}(SpeakeasyBase));
export { DirectoryResourcesCalendarsDeleteSecurity };
var DirectoryResourcesCalendarsDeleteRequest = /** @class */ (function (_super) {
    __extends(DirectoryResourcesCalendarsDeleteRequest, _super);
    function DirectoryResourcesCalendarsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryResourcesCalendarsDeletePathParams)
    ], DirectoryResourcesCalendarsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryResourcesCalendarsDeleteQueryParams)
    ], DirectoryResourcesCalendarsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryResourcesCalendarsDeleteSecurity)
    ], DirectoryResourcesCalendarsDeleteRequest.prototype, "security", void 0);
    return DirectoryResourcesCalendarsDeleteRequest;
}(SpeakeasyBase));
export { DirectoryResourcesCalendarsDeleteRequest };
var DirectoryResourcesCalendarsDeleteResponse = /** @class */ (function (_super) {
    __extends(DirectoryResourcesCalendarsDeleteResponse, _super);
    function DirectoryResourcesCalendarsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryResourcesCalendarsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryResourcesCalendarsDeleteResponse.prototype, "statusCode", void 0);
    return DirectoryResourcesCalendarsDeleteResponse;
}(SpeakeasyBase));
export { DirectoryResourcesCalendarsDeleteResponse };
