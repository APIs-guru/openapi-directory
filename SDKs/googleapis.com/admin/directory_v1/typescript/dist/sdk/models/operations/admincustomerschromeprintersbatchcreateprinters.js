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
var AdminCustomersChromePrintersBatchCreatePrintersPathParams = /** @class */ (function (_super) {
    __extends(AdminCustomersChromePrintersBatchCreatePrintersPathParams, _super);
    function AdminCustomersChromePrintersBatchCreatePrintersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintersBatchCreatePrintersPathParams.prototype, "parent", void 0);
    return AdminCustomersChromePrintersBatchCreatePrintersPathParams;
}(SpeakeasyBase));
export { AdminCustomersChromePrintersBatchCreatePrintersPathParams };
var AdminCustomersChromePrintersBatchCreatePrintersQueryParams = /** @class */ (function (_super) {
    __extends(AdminCustomersChromePrintersBatchCreatePrintersQueryParams, _super);
    function AdminCustomersChromePrintersBatchCreatePrintersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintersBatchCreatePrintersQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintersBatchCreatePrintersQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintersBatchCreatePrintersQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintersBatchCreatePrintersQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintersBatchCreatePrintersQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintersBatchCreatePrintersQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintersBatchCreatePrintersQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdminCustomersChromePrintersBatchCreatePrintersQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintersBatchCreatePrintersQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintersBatchCreatePrintersQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintersBatchCreatePrintersQueryParams.prototype, "uploadProtocol", void 0);
    return AdminCustomersChromePrintersBatchCreatePrintersQueryParams;
}(SpeakeasyBase));
export { AdminCustomersChromePrintersBatchCreatePrintersQueryParams };
var AdminCustomersChromePrintersBatchCreatePrintersSecurity = /** @class */ (function (_super) {
    __extends(AdminCustomersChromePrintersBatchCreatePrintersSecurity, _super);
    function AdminCustomersChromePrintersBatchCreatePrintersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdminCustomersChromePrintersBatchCreatePrintersSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdminCustomersChromePrintersBatchCreatePrintersSecurity.prototype, "oauth2c", void 0);
    return AdminCustomersChromePrintersBatchCreatePrintersSecurity;
}(SpeakeasyBase));
export { AdminCustomersChromePrintersBatchCreatePrintersSecurity };
var AdminCustomersChromePrintersBatchCreatePrintersRequest = /** @class */ (function (_super) {
    __extends(AdminCustomersChromePrintersBatchCreatePrintersRequest, _super);
    function AdminCustomersChromePrintersBatchCreatePrintersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdminCustomersChromePrintersBatchCreatePrintersPathParams)
    ], AdminCustomersChromePrintersBatchCreatePrintersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdminCustomersChromePrintersBatchCreatePrintersQueryParams)
    ], AdminCustomersChromePrintersBatchCreatePrintersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchCreatePrintersRequestInput)
    ], AdminCustomersChromePrintersBatchCreatePrintersRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdminCustomersChromePrintersBatchCreatePrintersSecurity)
    ], AdminCustomersChromePrintersBatchCreatePrintersRequest.prototype, "security", void 0);
    return AdminCustomersChromePrintersBatchCreatePrintersRequest;
}(SpeakeasyBase));
export { AdminCustomersChromePrintersBatchCreatePrintersRequest };
var AdminCustomersChromePrintersBatchCreatePrintersResponse = /** @class */ (function (_super) {
    __extends(AdminCustomersChromePrintersBatchCreatePrintersResponse, _super);
    function AdminCustomersChromePrintersBatchCreatePrintersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchCreatePrintersResponse)
    ], AdminCustomersChromePrintersBatchCreatePrintersResponse.prototype, "batchCreatePrintersResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdminCustomersChromePrintersBatchCreatePrintersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdminCustomersChromePrintersBatchCreatePrintersResponse.prototype, "statusCode", void 0);
    return AdminCustomersChromePrintersBatchCreatePrintersResponse;
}(SpeakeasyBase));
export { AdminCustomersChromePrintersBatchCreatePrintersResponse };
