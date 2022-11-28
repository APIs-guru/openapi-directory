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
var AndroidenterpriseProductsGenerateApprovalUrlPathParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseProductsGenerateApprovalUrlPathParams, _super);
    function AndroidenterpriseProductsGenerateApprovalUrlPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterpriseId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseProductsGenerateApprovalUrlPathParams.prototype, "enterpriseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseProductsGenerateApprovalUrlPathParams.prototype, "productId", void 0);
    return AndroidenterpriseProductsGenerateApprovalUrlPathParams;
}(SpeakeasyBase));
export { AndroidenterpriseProductsGenerateApprovalUrlPathParams };
var AndroidenterpriseProductsGenerateApprovalUrlQueryParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseProductsGenerateApprovalUrlQueryParams, _super);
    function AndroidenterpriseProductsGenerateApprovalUrlQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidenterpriseProductsGenerateApprovalUrlQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseProductsGenerateApprovalUrlQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidenterpriseProductsGenerateApprovalUrlQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidenterpriseProductsGenerateApprovalUrlQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidenterpriseProductsGenerateApprovalUrlQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidenterpriseProductsGenerateApprovalUrlQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languageCode" }),
        __metadata("design:type", String)
    ], AndroidenterpriseProductsGenerateApprovalUrlQueryParams.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseProductsGenerateApprovalUrlQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidenterpriseProductsGenerateApprovalUrlQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidenterpriseProductsGenerateApprovalUrlQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidenterpriseProductsGenerateApprovalUrlQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidenterpriseProductsGenerateApprovalUrlQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidenterpriseProductsGenerateApprovalUrlQueryParams;
}(SpeakeasyBase));
export { AndroidenterpriseProductsGenerateApprovalUrlQueryParams };
var AndroidenterpriseProductsGenerateApprovalUrlSecurity = /** @class */ (function (_super) {
    __extends(AndroidenterpriseProductsGenerateApprovalUrlSecurity, _super);
    function AndroidenterpriseProductsGenerateApprovalUrlSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidenterpriseProductsGenerateApprovalUrlSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidenterpriseProductsGenerateApprovalUrlSecurity.prototype, "oauth2c", void 0);
    return AndroidenterpriseProductsGenerateApprovalUrlSecurity;
}(SpeakeasyBase));
export { AndroidenterpriseProductsGenerateApprovalUrlSecurity };
var AndroidenterpriseProductsGenerateApprovalUrlRequest = /** @class */ (function (_super) {
    __extends(AndroidenterpriseProductsGenerateApprovalUrlRequest, _super);
    function AndroidenterpriseProductsGenerateApprovalUrlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseProductsGenerateApprovalUrlPathParams)
    ], AndroidenterpriseProductsGenerateApprovalUrlRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseProductsGenerateApprovalUrlQueryParams)
    ], AndroidenterpriseProductsGenerateApprovalUrlRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseProductsGenerateApprovalUrlSecurity)
    ], AndroidenterpriseProductsGenerateApprovalUrlRequest.prototype, "security", void 0);
    return AndroidenterpriseProductsGenerateApprovalUrlRequest;
}(SpeakeasyBase));
export { AndroidenterpriseProductsGenerateApprovalUrlRequest };
var AndroidenterpriseProductsGenerateApprovalUrlResponse = /** @class */ (function (_super) {
    __extends(AndroidenterpriseProductsGenerateApprovalUrlResponse, _super);
    function AndroidenterpriseProductsGenerateApprovalUrlResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidenterpriseProductsGenerateApprovalUrlResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ProductsGenerateApprovalUrlResponse)
    ], AndroidenterpriseProductsGenerateApprovalUrlResponse.prototype, "productsGenerateApprovalUrlResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidenterpriseProductsGenerateApprovalUrlResponse.prototype, "statusCode", void 0);
    return AndroidenterpriseProductsGenerateApprovalUrlResponse;
}(SpeakeasyBase));
export { AndroidenterpriseProductsGenerateApprovalUrlResponse };
