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
var AnalyticsManagementWebpropertiesInsertPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebpropertiesInsertPathParams, _super);
    function AnalyticsManagementWebpropertiesInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertiesInsertPathParams.prototype, "accountId", void 0);
    return AnalyticsManagementWebpropertiesInsertPathParams;
}(SpeakeasyBase));
export { AnalyticsManagementWebpropertiesInsertPathParams };
var AnalyticsManagementWebpropertiesInsertQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebpropertiesInsertQueryParams, _super);
    function AnalyticsManagementWebpropertiesInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertiesInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertiesInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertiesInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertiesInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementWebpropertiesInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertiesInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertiesInsertQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementWebpropertiesInsertQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementWebpropertiesInsertQueryParams };
var AnalyticsManagementWebpropertiesInsertSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebpropertiesInsertSecurity, _super);
    function AnalyticsManagementWebpropertiesInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementWebpropertiesInsertSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementWebpropertiesInsertSecurity.prototype, "oauth2c", void 0);
    return AnalyticsManagementWebpropertiesInsertSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementWebpropertiesInsertSecurity };
var AnalyticsManagementWebpropertiesInsertRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebpropertiesInsertRequest, _super);
    function AnalyticsManagementWebpropertiesInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementWebpropertiesInsertPathParams)
    ], AnalyticsManagementWebpropertiesInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementWebpropertiesInsertQueryParams)
    ], AnalyticsManagementWebpropertiesInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.WebpropertyInput)
    ], AnalyticsManagementWebpropertiesInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementWebpropertiesInsertSecurity)
    ], AnalyticsManagementWebpropertiesInsertRequest.prototype, "security", void 0);
    return AnalyticsManagementWebpropertiesInsertRequest;
}(SpeakeasyBase));
export { AnalyticsManagementWebpropertiesInsertRequest };
var AnalyticsManagementWebpropertiesInsertResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebpropertiesInsertResponse, _super);
    function AnalyticsManagementWebpropertiesInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertiesInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementWebpropertiesInsertResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Webproperty)
    ], AnalyticsManagementWebpropertiesInsertResponse.prototype, "webproperty", void 0);
    return AnalyticsManagementWebpropertiesInsertResponse;
}(SpeakeasyBase));
export { AnalyticsManagementWebpropertiesInsertResponse };
