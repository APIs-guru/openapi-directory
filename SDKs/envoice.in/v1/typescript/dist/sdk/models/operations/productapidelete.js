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
var ProductApiDeleteHeaders = /** @class */ (function (_super) {
    __extends(ProductApiDeleteHeaders, _super);
    function ProductApiDeleteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" }),
        __metadata("design:type", String)
    ], ProductApiDeleteHeaders.prototype, "xAuthKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" }),
        __metadata("design:type", String)
    ], ProductApiDeleteHeaders.prototype, "xAuthSecret", void 0);
    return ProductApiDeleteHeaders;
}(SpeakeasyBase));
export { ProductApiDeleteHeaders };
var ProductApiDeleteRequests = /** @class */ (function (_super) {
    __extends(ProductApiDeleteRequests, _super);
    function ProductApiDeleteRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], ProductApiDeleteRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ProductDeleteApiModel)
    ], ProductApiDeleteRequests.prototype, "productDeleteApiModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.ProductDeleteApiModel)
    ], ProductApiDeleteRequests.prototype, "productDeleteApiModel1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ProductDeleteApiModel)
    ], ProductApiDeleteRequests.prototype, "productDeleteApiModel2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/html" }),
        __metadata("design:type", Uint8Array)
    ], ProductApiDeleteRequests.prototype, "textHtml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], ProductApiDeleteRequests.prototype, "textXml", void 0);
    return ProductApiDeleteRequests;
}(SpeakeasyBase));
export { ProductApiDeleteRequests };
var ProductApiDeleteRequest = /** @class */ (function (_super) {
    __extends(ProductApiDeleteRequest, _super);
    function ProductApiDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProductApiDeleteHeaders)
    ], ProductApiDeleteRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProductApiDeleteRequests)
    ], ProductApiDeleteRequest.prototype, "request", void 0);
    return ProductApiDeleteRequest;
}(SpeakeasyBase));
export { ProductApiDeleteRequest };
var ProductApiDeleteResponse = /** @class */ (function (_super) {
    __extends(ProductApiDeleteResponse, _super);
    function ProductApiDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ProductApiDeleteResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProductApiDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProductApiDeleteResponse.prototype, "productApiDelete200ApplicationJsonInt32Integer", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProductApiDeleteResponse.prototype, "productApiDelete200TextJsonInt32Integer", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProductApiDeleteResponse.prototype, "statusCode", void 0);
    return ProductApiDeleteResponse;
}(SpeakeasyBase));
export { ProductApiDeleteResponse };
