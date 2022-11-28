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
var InvoiceApiDeleteHeaders = /** @class */ (function (_super) {
    __extends(InvoiceApiDeleteHeaders, _super);
    function InvoiceApiDeleteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" }),
        __metadata("design:type", String)
    ], InvoiceApiDeleteHeaders.prototype, "xAuthKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" }),
        __metadata("design:type", String)
    ], InvoiceApiDeleteHeaders.prototype, "xAuthSecret", void 0);
    return InvoiceApiDeleteHeaders;
}(SpeakeasyBase));
export { InvoiceApiDeleteHeaders };
var InvoiceApiDeleteRequests = /** @class */ (function (_super) {
    __extends(InvoiceApiDeleteRequests, _super);
    function InvoiceApiDeleteRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], InvoiceApiDeleteRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.InvoiceDeleteApiModel)
    ], InvoiceApiDeleteRequests.prototype, "invoiceDeleteApiModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.InvoiceDeleteApiModel)
    ], InvoiceApiDeleteRequests.prototype, "invoiceDeleteApiModel1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.InvoiceDeleteApiModel)
    ], InvoiceApiDeleteRequests.prototype, "invoiceDeleteApiModel2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/html" }),
        __metadata("design:type", Uint8Array)
    ], InvoiceApiDeleteRequests.prototype, "textHtml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], InvoiceApiDeleteRequests.prototype, "textXml", void 0);
    return InvoiceApiDeleteRequests;
}(SpeakeasyBase));
export { InvoiceApiDeleteRequests };
var InvoiceApiDeleteRequest = /** @class */ (function (_super) {
    __extends(InvoiceApiDeleteRequest, _super);
    function InvoiceApiDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InvoiceApiDeleteHeaders)
    ], InvoiceApiDeleteRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InvoiceApiDeleteRequests)
    ], InvoiceApiDeleteRequest.prototype, "request", void 0);
    return InvoiceApiDeleteRequest;
}(SpeakeasyBase));
export { InvoiceApiDeleteRequest };
var InvoiceApiDeleteResponse = /** @class */ (function (_super) {
    __extends(InvoiceApiDeleteResponse, _super);
    function InvoiceApiDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], InvoiceApiDeleteResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InvoiceApiDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InvoiceApiDeleteResponse.prototype, "invoiceApiDelete200ApplicationJsonInt32Integer", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InvoiceApiDeleteResponse.prototype, "invoiceApiDelete200TextJsonInt32Integer", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InvoiceApiDeleteResponse.prototype, "statusCode", void 0);
    return InvoiceApiDeleteResponse;
}(SpeakeasyBase));
export { InvoiceApiDeleteResponse };
