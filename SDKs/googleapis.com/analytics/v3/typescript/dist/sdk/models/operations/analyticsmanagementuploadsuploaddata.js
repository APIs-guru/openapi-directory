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
var AnalyticsManagementUploadsUploadDataPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUploadsUploadDataPathParams, _super);
    function AnalyticsManagementUploadsUploadDataPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUploadsUploadDataPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customDataSourceId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUploadsUploadDataPathParams.prototype, "customDataSourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUploadsUploadDataPathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementUploadsUploadDataPathParams;
}(SpeakeasyBase));
export { AnalyticsManagementUploadsUploadDataPathParams };
var AnalyticsManagementUploadsUploadDataQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUploadsUploadDataQueryParams, _super);
    function AnalyticsManagementUploadsUploadDataQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUploadsUploadDataQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUploadsUploadDataQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUploadsUploadDataQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUploadsUploadDataQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementUploadsUploadDataQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUploadsUploadDataQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementUploadsUploadDataQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementUploadsUploadDataQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementUploadsUploadDataQueryParams };
var AnalyticsManagementUploadsUploadDataSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUploadsUploadDataSecurityOption1, _super);
    function AnalyticsManagementUploadsUploadDataSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementUploadsUploadDataSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementUploadsUploadDataSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsManagementUploadsUploadDataSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsManagementUploadsUploadDataSecurityOption1 };
var AnalyticsManagementUploadsUploadDataSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUploadsUploadDataSecurityOption2, _super);
    function AnalyticsManagementUploadsUploadDataSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementUploadsUploadDataSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementUploadsUploadDataSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsManagementUploadsUploadDataSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsManagementUploadsUploadDataSecurityOption2 };
var AnalyticsManagementUploadsUploadDataSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUploadsUploadDataSecurity, _super);
    function AnalyticsManagementUploadsUploadDataSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementUploadsUploadDataSecurityOption1)
    ], AnalyticsManagementUploadsUploadDataSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementUploadsUploadDataSecurityOption2)
    ], AnalyticsManagementUploadsUploadDataSecurity.prototype, "option2", void 0);
    return AnalyticsManagementUploadsUploadDataSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementUploadsUploadDataSecurity };
var AnalyticsManagementUploadsUploadDataRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUploadsUploadDataRequest, _super);
    function AnalyticsManagementUploadsUploadDataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementUploadsUploadDataPathParams)
    ], AnalyticsManagementUploadsUploadDataRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementUploadsUploadDataQueryParams)
    ], AnalyticsManagementUploadsUploadDataRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementUploadsUploadDataSecurity)
    ], AnalyticsManagementUploadsUploadDataRequest.prototype, "security", void 0);
    return AnalyticsManagementUploadsUploadDataRequest;
}(SpeakeasyBase));
export { AnalyticsManagementUploadsUploadDataRequest };
var AnalyticsManagementUploadsUploadDataResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementUploadsUploadDataResponse, _super);
    function AnalyticsManagementUploadsUploadDataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementUploadsUploadDataResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementUploadsUploadDataResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Upload)
    ], AnalyticsManagementUploadsUploadDataResponse.prototype, "upload", void 0);
    return AnalyticsManagementUploadsUploadDataResponse;
}(SpeakeasyBase));
export { AnalyticsManagementUploadsUploadDataResponse };
