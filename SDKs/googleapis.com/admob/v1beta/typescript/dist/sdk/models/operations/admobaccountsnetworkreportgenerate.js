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
var AdmobAccountsNetworkReportGeneratePathParams = /** @class */ (function (_super) {
    __extends(AdmobAccountsNetworkReportGeneratePathParams, _super);
    function AdmobAccountsNetworkReportGeneratePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AdmobAccountsNetworkReportGeneratePathParams.prototype, "parent", void 0);
    return AdmobAccountsNetworkReportGeneratePathParams;
}(SpeakeasyBase));
export { AdmobAccountsNetworkReportGeneratePathParams };
var AdmobAccountsNetworkReportGenerateQueryParams = /** @class */ (function (_super) {
    __extends(AdmobAccountsNetworkReportGenerateQueryParams, _super);
    function AdmobAccountsNetworkReportGenerateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AdmobAccountsNetworkReportGenerateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AdmobAccountsNetworkReportGenerateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdmobAccountsNetworkReportGenerateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AdmobAccountsNetworkReportGenerateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdmobAccountsNetworkReportGenerateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdmobAccountsNetworkReportGenerateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdmobAccountsNetworkReportGenerateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdmobAccountsNetworkReportGenerateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdmobAccountsNetworkReportGenerateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AdmobAccountsNetworkReportGenerateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AdmobAccountsNetworkReportGenerateQueryParams.prototype, "uploadProtocol", void 0);
    return AdmobAccountsNetworkReportGenerateQueryParams;
}(SpeakeasyBase));
export { AdmobAccountsNetworkReportGenerateQueryParams };
var AdmobAccountsNetworkReportGenerateSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdmobAccountsNetworkReportGenerateSecurityOption1, _super);
    function AdmobAccountsNetworkReportGenerateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdmobAccountsNetworkReportGenerateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdmobAccountsNetworkReportGenerateSecurityOption1.prototype, "oauth2c", void 0);
    return AdmobAccountsNetworkReportGenerateSecurityOption1;
}(SpeakeasyBase));
export { AdmobAccountsNetworkReportGenerateSecurityOption1 };
var AdmobAccountsNetworkReportGenerateSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdmobAccountsNetworkReportGenerateSecurityOption2, _super);
    function AdmobAccountsNetworkReportGenerateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdmobAccountsNetworkReportGenerateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdmobAccountsNetworkReportGenerateSecurityOption2.prototype, "oauth2c", void 0);
    return AdmobAccountsNetworkReportGenerateSecurityOption2;
}(SpeakeasyBase));
export { AdmobAccountsNetworkReportGenerateSecurityOption2 };
var AdmobAccountsNetworkReportGenerateSecurity = /** @class */ (function (_super) {
    __extends(AdmobAccountsNetworkReportGenerateSecurity, _super);
    function AdmobAccountsNetworkReportGenerateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdmobAccountsNetworkReportGenerateSecurityOption1)
    ], AdmobAccountsNetworkReportGenerateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdmobAccountsNetworkReportGenerateSecurityOption2)
    ], AdmobAccountsNetworkReportGenerateSecurity.prototype, "option2", void 0);
    return AdmobAccountsNetworkReportGenerateSecurity;
}(SpeakeasyBase));
export { AdmobAccountsNetworkReportGenerateSecurity };
var AdmobAccountsNetworkReportGenerateRequest = /** @class */ (function (_super) {
    __extends(AdmobAccountsNetworkReportGenerateRequest, _super);
    function AdmobAccountsNetworkReportGenerateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdmobAccountsNetworkReportGeneratePathParams)
    ], AdmobAccountsNetworkReportGenerateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdmobAccountsNetworkReportGenerateQueryParams)
    ], AdmobAccountsNetworkReportGenerateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GenerateNetworkReportRequest)
    ], AdmobAccountsNetworkReportGenerateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdmobAccountsNetworkReportGenerateSecurity)
    ], AdmobAccountsNetworkReportGenerateRequest.prototype, "security", void 0);
    return AdmobAccountsNetworkReportGenerateRequest;
}(SpeakeasyBase));
export { AdmobAccountsNetworkReportGenerateRequest };
var AdmobAccountsNetworkReportGenerateResponse = /** @class */ (function (_super) {
    __extends(AdmobAccountsNetworkReportGenerateResponse, _super);
    function AdmobAccountsNetworkReportGenerateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdmobAccountsNetworkReportGenerateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GenerateNetworkReportResponse)
    ], AdmobAccountsNetworkReportGenerateResponse.prototype, "generateNetworkReportResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdmobAccountsNetworkReportGenerateResponse.prototype, "statusCode", void 0);
    return AdmobAccountsNetworkReportGenerateResponse;
}(SpeakeasyBase));
export { AdmobAccountsNetworkReportGenerateResponse };
