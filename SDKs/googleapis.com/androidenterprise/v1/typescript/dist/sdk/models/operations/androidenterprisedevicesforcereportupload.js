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
var AndroidenterpriseDevicesForceReportUploadPathParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseDevicesForceReportUploadPathParams, _super);
    function AndroidenterpriseDevicesForceReportUploadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseDevicesForceReportUploadPathParams.prototype, "deviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterpriseId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseDevicesForceReportUploadPathParams.prototype, "enterpriseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseDevicesForceReportUploadPathParams.prototype, "userId", void 0);
    return AndroidenterpriseDevicesForceReportUploadPathParams;
}(SpeakeasyBase));
export { AndroidenterpriseDevicesForceReportUploadPathParams };
var AndroidenterpriseDevicesForceReportUploadQueryParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseDevicesForceReportUploadQueryParams, _super);
    function AndroidenterpriseDevicesForceReportUploadQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidenterpriseDevicesForceReportUploadQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseDevicesForceReportUploadQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidenterpriseDevicesForceReportUploadQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidenterpriseDevicesForceReportUploadQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidenterpriseDevicesForceReportUploadQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidenterpriseDevicesForceReportUploadQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseDevicesForceReportUploadQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidenterpriseDevicesForceReportUploadQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidenterpriseDevicesForceReportUploadQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidenterpriseDevicesForceReportUploadQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidenterpriseDevicesForceReportUploadQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidenterpriseDevicesForceReportUploadQueryParams;
}(SpeakeasyBase));
export { AndroidenterpriseDevicesForceReportUploadQueryParams };
var AndroidenterpriseDevicesForceReportUploadSecurity = /** @class */ (function (_super) {
    __extends(AndroidenterpriseDevicesForceReportUploadSecurity, _super);
    function AndroidenterpriseDevicesForceReportUploadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidenterpriseDevicesForceReportUploadSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidenterpriseDevicesForceReportUploadSecurity.prototype, "oauth2c", void 0);
    return AndroidenterpriseDevicesForceReportUploadSecurity;
}(SpeakeasyBase));
export { AndroidenterpriseDevicesForceReportUploadSecurity };
var AndroidenterpriseDevicesForceReportUploadRequest = /** @class */ (function (_super) {
    __extends(AndroidenterpriseDevicesForceReportUploadRequest, _super);
    function AndroidenterpriseDevicesForceReportUploadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseDevicesForceReportUploadPathParams)
    ], AndroidenterpriseDevicesForceReportUploadRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseDevicesForceReportUploadQueryParams)
    ], AndroidenterpriseDevicesForceReportUploadRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseDevicesForceReportUploadSecurity)
    ], AndroidenterpriseDevicesForceReportUploadRequest.prototype, "security", void 0);
    return AndroidenterpriseDevicesForceReportUploadRequest;
}(SpeakeasyBase));
export { AndroidenterpriseDevicesForceReportUploadRequest };
var AndroidenterpriseDevicesForceReportUploadResponse = /** @class */ (function (_super) {
    __extends(AndroidenterpriseDevicesForceReportUploadResponse, _super);
    function AndroidenterpriseDevicesForceReportUploadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidenterpriseDevicesForceReportUploadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidenterpriseDevicesForceReportUploadResponse.prototype, "statusCode", void 0);
    return AndroidenterpriseDevicesForceReportUploadResponse;
}(SpeakeasyBase));
export { AndroidenterpriseDevicesForceReportUploadResponse };
