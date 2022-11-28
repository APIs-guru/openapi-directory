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
var InvoiceApiStatusQueryParams = /** @class */ (function (_super) {
    __extends(InvoiceApiStatusQueryParams, _super);
    function InvoiceApiStatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", Number)
    ], InvoiceApiStatusQueryParams.prototype, "id", void 0);
    return InvoiceApiStatusQueryParams;
}(SpeakeasyBase));
export { InvoiceApiStatusQueryParams };
var InvoiceApiStatusHeaders = /** @class */ (function (_super) {
    __extends(InvoiceApiStatusHeaders, _super);
    function InvoiceApiStatusHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" }),
        __metadata("design:type", String)
    ], InvoiceApiStatusHeaders.prototype, "xAuthKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" }),
        __metadata("design:type", String)
    ], InvoiceApiStatusHeaders.prototype, "xAuthSecret", void 0);
    return InvoiceApiStatusHeaders;
}(SpeakeasyBase));
export { InvoiceApiStatusHeaders };
export var InvoiceApiStatus200ApplicationJsonEnum;
(function (InvoiceApiStatus200ApplicationJsonEnum) {
    InvoiceApiStatus200ApplicationJsonEnum["Draft"] = "Draft";
    InvoiceApiStatus200ApplicationJsonEnum["Paid"] = "Paid";
    InvoiceApiStatus200ApplicationJsonEnum["Unpaid"] = "Unpaid";
    InvoiceApiStatus200ApplicationJsonEnum["Overdue"] = "Overdue";
    InvoiceApiStatus200ApplicationJsonEnum["Void"] = "Void";
})(InvoiceApiStatus200ApplicationJsonEnum || (InvoiceApiStatus200ApplicationJsonEnum = {}));
export var InvoiceApiStatus200TextJsonEnum;
(function (InvoiceApiStatus200TextJsonEnum) {
    InvoiceApiStatus200TextJsonEnum["Draft"] = "Draft";
    InvoiceApiStatus200TextJsonEnum["Paid"] = "Paid";
    InvoiceApiStatus200TextJsonEnum["Unpaid"] = "Unpaid";
    InvoiceApiStatus200TextJsonEnum["Overdue"] = "Overdue";
    InvoiceApiStatus200TextJsonEnum["Void"] = "Void";
})(InvoiceApiStatus200TextJsonEnum || (InvoiceApiStatus200TextJsonEnum = {}));
var InvoiceApiStatusRequest = /** @class */ (function (_super) {
    __extends(InvoiceApiStatusRequest, _super);
    function InvoiceApiStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InvoiceApiStatusQueryParams)
    ], InvoiceApiStatusRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InvoiceApiStatusHeaders)
    ], InvoiceApiStatusRequest.prototype, "headers", void 0);
    return InvoiceApiStatusRequest;
}(SpeakeasyBase));
export { InvoiceApiStatusRequest };
var InvoiceApiStatusResponse = /** @class */ (function (_super) {
    __extends(InvoiceApiStatusResponse, _super);
    function InvoiceApiStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], InvoiceApiStatusResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InvoiceApiStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InvoiceApiStatusResponse.prototype, "invoiceApiStatus200ApplicationJsonStringEnum", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InvoiceApiStatusResponse.prototype, "invoiceApiStatus200TextJsonStringEnum", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InvoiceApiStatusResponse.prototype, "statusCode", void 0);
    return InvoiceApiStatusResponse;
}(SpeakeasyBase));
export { InvoiceApiStatusResponse };
