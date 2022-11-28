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
var InvoiceApiUriQueryParams = /** @class */ (function (_super) {
    __extends(InvoiceApiUriQueryParams, _super);
    function InvoiceApiUriQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", Number)
    ], InvoiceApiUriQueryParams.prototype, "id", void 0);
    return InvoiceApiUriQueryParams;
}(SpeakeasyBase));
export { InvoiceApiUriQueryParams };
var InvoiceApiUriHeaders = /** @class */ (function (_super) {
    __extends(InvoiceApiUriHeaders, _super);
    function InvoiceApiUriHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" }),
        __metadata("design:type", String)
    ], InvoiceApiUriHeaders.prototype, "xAuthKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" }),
        __metadata("design:type", String)
    ], InvoiceApiUriHeaders.prototype, "xAuthSecret", void 0);
    return InvoiceApiUriHeaders;
}(SpeakeasyBase));
export { InvoiceApiUriHeaders };
var InvoiceApiUriRequest = /** @class */ (function (_super) {
    __extends(InvoiceApiUriRequest, _super);
    function InvoiceApiUriRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InvoiceApiUriQueryParams)
    ], InvoiceApiUriRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InvoiceApiUriHeaders)
    ], InvoiceApiUriRequest.prototype, "headers", void 0);
    return InvoiceApiUriRequest;
}(SpeakeasyBase));
export { InvoiceApiUriRequest };
var InvoiceApiUriResponse = /** @class */ (function (_super) {
    __extends(InvoiceApiUriResponse, _super);
    function InvoiceApiUriResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], InvoiceApiUriResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InvoiceApiUriResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InvoiceUriApiModel)
    ], InvoiceApiUriResponse.prototype, "invoiceUriApiModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InvoiceApiUriResponse.prototype, "statusCode", void 0);
    return InvoiceApiUriResponse;
}(SpeakeasyBase));
export { InvoiceApiUriResponse };
