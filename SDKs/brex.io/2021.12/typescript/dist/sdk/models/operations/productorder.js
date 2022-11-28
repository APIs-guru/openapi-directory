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
var ProductOrderPathParams = /** @class */ (function (_super) {
    __extends(ProductOrderPathParams, _super);
    function ProductOrderPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sku" }),
        __metadata("design:type", String)
    ], ProductOrderPathParams.prototype, "sku", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subjectId" }),
        __metadata("design:type", String)
    ], ProductOrderPathParams.prototype, "subjectId", void 0);
    return ProductOrderPathParams;
}(SpeakeasyBase));
export { ProductOrderPathParams };
var ProductOrderSecurity = /** @class */ (function (_super) {
    __extends(ProductOrderSecurity, _super);
    function ProductOrderSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeUserKey)
    ], ProductOrderSecurity.prototype, "userKey", void 0);
    return ProductOrderSecurity;
}(SpeakeasyBase));
export { ProductOrderSecurity };
var ProductOrderRequest = /** @class */ (function (_super) {
    __extends(ProductOrderRequest, _super);
    function ProductOrderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProductOrderPathParams)
    ], ProductOrderRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProductOrderSecurity)
    ], ProductOrderRequest.prototype, "security", void 0);
    return ProductOrderRequest;
}(SpeakeasyBase));
export { ProductOrderRequest };
var ProductOrderResponse = /** @class */ (function (_super) {
    __extends(ProductOrderResponse, _super);
    function ProductOrderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProductOrderResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ProductOrderResponse.prototype, "productOrder200ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ProductOrderResponse.prototype, "productOrderDefaultApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProductOrderResponse.prototype, "statusCode", void 0);
    return ProductOrderResponse;
}(SpeakeasyBase));
export { ProductOrderResponse };
