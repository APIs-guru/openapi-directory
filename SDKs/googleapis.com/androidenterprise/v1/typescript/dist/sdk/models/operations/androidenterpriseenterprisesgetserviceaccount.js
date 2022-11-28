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
var AndroidenterpriseEnterprisesGetServiceAccountPathParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseEnterprisesGetServiceAccountPathParams, _super);
    function AndroidenterpriseEnterprisesGetServiceAccountPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterpriseId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesGetServiceAccountPathParams.prototype, "enterpriseId", void 0);
    return AndroidenterpriseEnterprisesGetServiceAccountPathParams;
}(SpeakeasyBase));
export { AndroidenterpriseEnterprisesGetServiceAccountPathParams };
export var AndroidenterpriseEnterprisesGetServiceAccountKeyTypeEnum;
(function (AndroidenterpriseEnterprisesGetServiceAccountKeyTypeEnum) {
    AndroidenterpriseEnterprisesGetServiceAccountKeyTypeEnum["GoogleCredentials"] = "googleCredentials";
    AndroidenterpriseEnterprisesGetServiceAccountKeyTypeEnum["Pkcs12"] = "pkcs12";
})(AndroidenterpriseEnterprisesGetServiceAccountKeyTypeEnum || (AndroidenterpriseEnterprisesGetServiceAccountKeyTypeEnum = {}));
var AndroidenterpriseEnterprisesGetServiceAccountQueryParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseEnterprisesGetServiceAccountQueryParams, _super);
    function AndroidenterpriseEnterprisesGetServiceAccountQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesGetServiceAccountQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesGetServiceAccountQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesGetServiceAccountQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesGetServiceAccountQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesGetServiceAccountQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesGetServiceAccountQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keyType" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesGetServiceAccountQueryParams.prototype, "keyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesGetServiceAccountQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidenterpriseEnterprisesGetServiceAccountQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesGetServiceAccountQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesGetServiceAccountQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesGetServiceAccountQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidenterpriseEnterprisesGetServiceAccountQueryParams;
}(SpeakeasyBase));
export { AndroidenterpriseEnterprisesGetServiceAccountQueryParams };
var AndroidenterpriseEnterprisesGetServiceAccountSecurity = /** @class */ (function (_super) {
    __extends(AndroidenterpriseEnterprisesGetServiceAccountSecurity, _super);
    function AndroidenterpriseEnterprisesGetServiceAccountSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidenterpriseEnterprisesGetServiceAccountSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidenterpriseEnterprisesGetServiceAccountSecurity.prototype, "oauth2c", void 0);
    return AndroidenterpriseEnterprisesGetServiceAccountSecurity;
}(SpeakeasyBase));
export { AndroidenterpriseEnterprisesGetServiceAccountSecurity };
var AndroidenterpriseEnterprisesGetServiceAccountRequest = /** @class */ (function (_super) {
    __extends(AndroidenterpriseEnterprisesGetServiceAccountRequest, _super);
    function AndroidenterpriseEnterprisesGetServiceAccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseEnterprisesGetServiceAccountPathParams)
    ], AndroidenterpriseEnterprisesGetServiceAccountRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseEnterprisesGetServiceAccountQueryParams)
    ], AndroidenterpriseEnterprisesGetServiceAccountRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseEnterprisesGetServiceAccountSecurity)
    ], AndroidenterpriseEnterprisesGetServiceAccountRequest.prototype, "security", void 0);
    return AndroidenterpriseEnterprisesGetServiceAccountRequest;
}(SpeakeasyBase));
export { AndroidenterpriseEnterprisesGetServiceAccountRequest };
var AndroidenterpriseEnterprisesGetServiceAccountResponse = /** @class */ (function (_super) {
    __extends(AndroidenterpriseEnterprisesGetServiceAccountResponse, _super);
    function AndroidenterpriseEnterprisesGetServiceAccountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesGetServiceAccountResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceAccount)
    ], AndroidenterpriseEnterprisesGetServiceAccountResponse.prototype, "serviceAccount", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidenterpriseEnterprisesGetServiceAccountResponse.prototype, "statusCode", void 0);
    return AndroidenterpriseEnterprisesGetServiceAccountResponse;
}(SpeakeasyBase));
export { AndroidenterpriseEnterprisesGetServiceAccountResponse };
