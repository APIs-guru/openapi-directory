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
var AnalyticsManagementUploadsDeleteUploadDataPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUploadsDeleteUploadDataPathParams, _super);
    function AnalyticsManagementUploadsDeleteUploadDataPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUploadsDeleteUploadDataPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customDataSourceId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUploadsDeleteUploadDataPathParams.prototype, "customDataSourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUploadsDeleteUploadDataPathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementUploadsDeleteUploadDataPathParams;
}(SpeakeasyBase));
export { AnalyticsManagementUploadsDeleteUploadDataPathParams };
var AnalyticsManagementUploadsDeleteUploadDataQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUploadsDeleteUploadDataQueryParams, _super);
    function AnalyticsManagementUploadsDeleteUploadDataQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUploadsDeleteUploadDataQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUploadsDeleteUploadDataQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUploadsDeleteUploadDataQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUploadsDeleteUploadDataQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementUploadsDeleteUploadDataQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUploadsDeleteUploadDataQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUploadsDeleteUploadDataQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementUploadsDeleteUploadDataQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementUploadsDeleteUploadDataQueryParams };
var AnalyticsManagementUploadsDeleteUploadDataSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUploadsDeleteUploadDataSecurityOption1, _super);
    function AnalyticsManagementUploadsDeleteUploadDataSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementUploadsDeleteUploadDataSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementUploadsDeleteUploadDataSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsManagementUploadsDeleteUploadDataSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsManagementUploadsDeleteUploadDataSecurityOption1 };
var AnalyticsManagementUploadsDeleteUploadDataSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUploadsDeleteUploadDataSecurityOption2, _super);
    function AnalyticsManagementUploadsDeleteUploadDataSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementUploadsDeleteUploadDataSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementUploadsDeleteUploadDataSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsManagementUploadsDeleteUploadDataSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsManagementUploadsDeleteUploadDataSecurityOption2 };
var AnalyticsManagementUploadsDeleteUploadDataSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUploadsDeleteUploadDataSecurity, _super);
    function AnalyticsManagementUploadsDeleteUploadDataSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementUploadsDeleteUploadDataSecurityOption1)
    ], AnalyticsManagementUploadsDeleteUploadDataSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementUploadsDeleteUploadDataSecurityOption2)
    ], AnalyticsManagementUploadsDeleteUploadDataSecurity.prototype, "option2", void 0);
    return AnalyticsManagementUploadsDeleteUploadDataSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementUploadsDeleteUploadDataSecurity };
var AnalyticsManagementUploadsDeleteUploadDataRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUploadsDeleteUploadDataRequest, _super);
    function AnalyticsManagementUploadsDeleteUploadDataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementUploadsDeleteUploadDataPathParams)
    ], AnalyticsManagementUploadsDeleteUploadDataRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementUploadsDeleteUploadDataQueryParams)
    ], AnalyticsManagementUploadsDeleteUploadDataRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AnalyticsDataimportDeleteUploadDataRequest)
    ], AnalyticsManagementUploadsDeleteUploadDataRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementUploadsDeleteUploadDataSecurity)
    ], AnalyticsManagementUploadsDeleteUploadDataRequest.prototype, "security", void 0);
    return AnalyticsManagementUploadsDeleteUploadDataRequest;
}(SpeakeasyBase));
export { AnalyticsManagementUploadsDeleteUploadDataRequest };
var AnalyticsManagementUploadsDeleteUploadDataResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUploadsDeleteUploadDataResponse, _super);
    function AnalyticsManagementUploadsDeleteUploadDataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementUploadsDeleteUploadDataResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementUploadsDeleteUploadDataResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementUploadsDeleteUploadDataResponse;
}(SpeakeasyBase));
export { AnalyticsManagementUploadsDeleteUploadDataResponse };
