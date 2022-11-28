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
var AdmobAccountsMediationReportGeneratePathParams = /** @class */ (function (_super) {
    __extends(AdmobAccountsMediationReportGeneratePathParams, _super);
    function AdmobAccountsMediationReportGeneratePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AdmobAccountsMediationReportGeneratePathParams.prototype, "parent", void 0);
    return AdmobAccountsMediationReportGeneratePathParams;
}(SpeakeasyBase));
export { AdmobAccountsMediationReportGeneratePathParams };
var AdmobAccountsMediationReportGenerateQueryParams = /** @class */ (function (_super) {
    __extends(AdmobAccountsMediationReportGenerateQueryParams, _super);
    function AdmobAccountsMediationReportGenerateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AdmobAccountsMediationReportGenerateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AdmobAccountsMediationReportGenerateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdmobAccountsMediationReportGenerateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AdmobAccountsMediationReportGenerateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdmobAccountsMediationReportGenerateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdmobAccountsMediationReportGenerateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdmobAccountsMediationReportGenerateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdmobAccountsMediationReportGenerateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdmobAccountsMediationReportGenerateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AdmobAccountsMediationReportGenerateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AdmobAccountsMediationReportGenerateQueryParams.prototype, "uploadProtocol", void 0);
    return AdmobAccountsMediationReportGenerateQueryParams;
}(SpeakeasyBase));
export { AdmobAccountsMediationReportGenerateQueryParams };
var AdmobAccountsMediationReportGenerateSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdmobAccountsMediationReportGenerateSecurityOption1, _super);
    function AdmobAccountsMediationReportGenerateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdmobAccountsMediationReportGenerateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdmobAccountsMediationReportGenerateSecurityOption1.prototype, "oauth2c", void 0);
    return AdmobAccountsMediationReportGenerateSecurityOption1;
}(SpeakeasyBase));
export { AdmobAccountsMediationReportGenerateSecurityOption1 };
var AdmobAccountsMediationReportGenerateSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdmobAccountsMediationReportGenerateSecurityOption2, _super);
    function AdmobAccountsMediationReportGenerateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdmobAccountsMediationReportGenerateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdmobAccountsMediationReportGenerateSecurityOption2.prototype, "oauth2c", void 0);
    return AdmobAccountsMediationReportGenerateSecurityOption2;
}(SpeakeasyBase));
export { AdmobAccountsMediationReportGenerateSecurityOption2 };
var AdmobAccountsMediationReportGenerateSecurity = /** @class */ (function (_super) {
    __extends(AdmobAccountsMediationReportGenerateSecurity, _super);
    function AdmobAccountsMediationReportGenerateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdmobAccountsMediationReportGenerateSecurityOption1)
    ], AdmobAccountsMediationReportGenerateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdmobAccountsMediationReportGenerateSecurityOption2)
    ], AdmobAccountsMediationReportGenerateSecurity.prototype, "option2", void 0);
    return AdmobAccountsMediationReportGenerateSecurity;
}(SpeakeasyBase));
export { AdmobAccountsMediationReportGenerateSecurity };
var AdmobAccountsMediationReportGenerateRequest = /** @class */ (function (_super) {
    __extends(AdmobAccountsMediationReportGenerateRequest, _super);
    function AdmobAccountsMediationReportGenerateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdmobAccountsMediationReportGeneratePathParams)
    ], AdmobAccountsMediationReportGenerateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdmobAccountsMediationReportGenerateQueryParams)
    ], AdmobAccountsMediationReportGenerateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GenerateMediationReportRequest)
    ], AdmobAccountsMediationReportGenerateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdmobAccountsMediationReportGenerateSecurity)
    ], AdmobAccountsMediationReportGenerateRequest.prototype, "security", void 0);
    return AdmobAccountsMediationReportGenerateRequest;
}(SpeakeasyBase));
export { AdmobAccountsMediationReportGenerateRequest };
var AdmobAccountsMediationReportGenerateResponse = /** @class */ (function (_super) {
    __extends(AdmobAccountsMediationReportGenerateResponse, _super);
    function AdmobAccountsMediationReportGenerateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdmobAccountsMediationReportGenerateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GenerateMediationReportResponse)
    ], AdmobAccountsMediationReportGenerateResponse.prototype, "generateMediationReportResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdmobAccountsMediationReportGenerateResponse.prototype, "statusCode", void 0);
    return AdmobAccountsMediationReportGenerateResponse;
}(SpeakeasyBase));
export { AdmobAccountsMediationReportGenerateResponse };
