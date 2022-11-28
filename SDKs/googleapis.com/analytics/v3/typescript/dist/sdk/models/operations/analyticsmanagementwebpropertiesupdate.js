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
var AnalyticsManagementWebpropertiesUpdatePathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebpropertiesUpdatePathParams, _super);
    function AnalyticsManagementWebpropertiesUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertiesUpdatePathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertiesUpdatePathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementWebpropertiesUpdatePathParams;
}(SpeakeasyBase));
export { AnalyticsManagementWebpropertiesUpdatePathParams };
var AnalyticsManagementWebpropertiesUpdateQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebpropertiesUpdateQueryParams, _super);
    function AnalyticsManagementWebpropertiesUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertiesUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertiesUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertiesUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertiesUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementWebpropertiesUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertiesUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertiesUpdateQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementWebpropertiesUpdateQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementWebpropertiesUpdateQueryParams };
var AnalyticsManagementWebpropertiesUpdateSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebpropertiesUpdateSecurity, _super);
    function AnalyticsManagementWebpropertiesUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementWebpropertiesUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementWebpropertiesUpdateSecurity.prototype, "oauth2c", void 0);
    return AnalyticsManagementWebpropertiesUpdateSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementWebpropertiesUpdateSecurity };
var AnalyticsManagementWebpropertiesUpdateRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebpropertiesUpdateRequest, _super);
    function AnalyticsManagementWebpropertiesUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementWebpropertiesUpdatePathParams)
    ], AnalyticsManagementWebpropertiesUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementWebpropertiesUpdateQueryParams)
    ], AnalyticsManagementWebpropertiesUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.WebpropertyInput)
    ], AnalyticsManagementWebpropertiesUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementWebpropertiesUpdateSecurity)
    ], AnalyticsManagementWebpropertiesUpdateRequest.prototype, "security", void 0);
    return AnalyticsManagementWebpropertiesUpdateRequest;
}(SpeakeasyBase));
export { AnalyticsManagementWebpropertiesUpdateRequest };
var AnalyticsManagementWebpropertiesUpdateResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebpropertiesUpdateResponse, _super);
    function AnalyticsManagementWebpropertiesUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertiesUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementWebpropertiesUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Webproperty)
    ], AnalyticsManagementWebpropertiesUpdateResponse.prototype, "webproperty", void 0);
    return AnalyticsManagementWebpropertiesUpdateResponse;
}(SpeakeasyBase));
export { AnalyticsManagementWebpropertiesUpdateResponse };
