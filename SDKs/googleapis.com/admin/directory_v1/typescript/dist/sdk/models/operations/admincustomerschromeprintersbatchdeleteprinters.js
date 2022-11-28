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
var AdminCustomersChromePrintersBatchDeletePrintersPathParams = /** @class */ (function (_super) {
    __extends(AdminCustomersChromePrintersBatchDeletePrintersPathParams, _super);
    function AdminCustomersChromePrintersBatchDeletePrintersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintersBatchDeletePrintersPathParams.prototype, "parent", void 0);
    return AdminCustomersChromePrintersBatchDeletePrintersPathParams;
}(SpeakeasyBase));
export { AdminCustomersChromePrintersBatchDeletePrintersPathParams };
var AdminCustomersChromePrintersBatchDeletePrintersQueryParams = /** @class */ (function (_super) {
    __extends(AdminCustomersChromePrintersBatchDeletePrintersQueryParams, _super);
    function AdminCustomersChromePrintersBatchDeletePrintersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintersBatchDeletePrintersQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintersBatchDeletePrintersQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintersBatchDeletePrintersQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintersBatchDeletePrintersQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintersBatchDeletePrintersQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintersBatchDeletePrintersQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintersBatchDeletePrintersQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdminCustomersChromePrintersBatchDeletePrintersQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintersBatchDeletePrintersQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintersBatchDeletePrintersQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintersBatchDeletePrintersQueryParams.prototype, "uploadProtocol", void 0);
    return AdminCustomersChromePrintersBatchDeletePrintersQueryParams;
}(SpeakeasyBase));
export { AdminCustomersChromePrintersBatchDeletePrintersQueryParams };
var AdminCustomersChromePrintersBatchDeletePrintersSecurity = /** @class */ (function (_super) {
    __extends(AdminCustomersChromePrintersBatchDeletePrintersSecurity, _super);
    function AdminCustomersChromePrintersBatchDeletePrintersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdminCustomersChromePrintersBatchDeletePrintersSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdminCustomersChromePrintersBatchDeletePrintersSecurity.prototype, "oauth2c", void 0);
    return AdminCustomersChromePrintersBatchDeletePrintersSecurity;
}(SpeakeasyBase));
export { AdminCustomersChromePrintersBatchDeletePrintersSecurity };
var AdminCustomersChromePrintersBatchDeletePrintersRequest = /** @class */ (function (_super) {
    __extends(AdminCustomersChromePrintersBatchDeletePrintersRequest, _super);
    function AdminCustomersChromePrintersBatchDeletePrintersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdminCustomersChromePrintersBatchDeletePrintersPathParams)
    ], AdminCustomersChromePrintersBatchDeletePrintersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdminCustomersChromePrintersBatchDeletePrintersQueryParams)
    ], AdminCustomersChromePrintersBatchDeletePrintersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchDeletePrintersRequest)
    ], AdminCustomersChromePrintersBatchDeletePrintersRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdminCustomersChromePrintersBatchDeletePrintersSecurity)
    ], AdminCustomersChromePrintersBatchDeletePrintersRequest.prototype, "security", void 0);
    return AdminCustomersChromePrintersBatchDeletePrintersRequest;
}(SpeakeasyBase));
export { AdminCustomersChromePrintersBatchDeletePrintersRequest };
var AdminCustomersChromePrintersBatchDeletePrintersResponse = /** @class */ (function (_super) {
    __extends(AdminCustomersChromePrintersBatchDeletePrintersResponse, _super);
    function AdminCustomersChromePrintersBatchDeletePrintersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchDeletePrintersResponse)
    ], AdminCustomersChromePrintersBatchDeletePrintersResponse.prototype, "batchDeletePrintersResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintersBatchDeletePrintersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdminCustomersChromePrintersBatchDeletePrintersResponse.prototype, "statusCode", void 0);
    return AdminCustomersChromePrintersBatchDeletePrintersResponse;
}(SpeakeasyBase));
export { AdminCustomersChromePrintersBatchDeletePrintersResponse };
