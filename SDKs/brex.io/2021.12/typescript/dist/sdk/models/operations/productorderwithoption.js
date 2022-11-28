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
var ProductOrderWithOptionPathParams = /** @class */ (function (_super) {
    __extends(ProductOrderWithOptionPathParams, _super);
    function ProductOrderWithOptionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=option" }),
        __metadata("design:type", String)
    ], ProductOrderWithOptionPathParams.prototype, "option", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sku" }),
        __metadata("design:type", String)
    ], ProductOrderWithOptionPathParams.prototype, "sku", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subjectId" }),
        __metadata("design:type", String)
    ], ProductOrderWithOptionPathParams.prototype, "subjectId", void 0);
    return ProductOrderWithOptionPathParams;
}(SpeakeasyBase));
export { ProductOrderWithOptionPathParams };
var ProductOrderWithOptionSecurity = /** @class */ (function (_super) {
    __extends(ProductOrderWithOptionSecurity, _super);
    function ProductOrderWithOptionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeUserKey)
    ], ProductOrderWithOptionSecurity.prototype, "userKey", void 0);
    return ProductOrderWithOptionSecurity;
}(SpeakeasyBase));
export { ProductOrderWithOptionSecurity };
var ProductOrderWithOptionRequest = /** @class */ (function (_super) {
    __extends(ProductOrderWithOptionRequest, _super);
    function ProductOrderWithOptionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProductOrderWithOptionPathParams)
    ], ProductOrderWithOptionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProductOrderWithOptionSecurity)
    ], ProductOrderWithOptionRequest.prototype, "security", void 0);
    return ProductOrderWithOptionRequest;
}(SpeakeasyBase));
export { ProductOrderWithOptionRequest };
var ProductOrderWithOptionResponse = /** @class */ (function (_super) {
    __extends(ProductOrderWithOptionResponse, _super);
    function ProductOrderWithOptionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProductOrderWithOptionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ProductOrderWithOptionResponse.prototype, "productOrderWithOption200ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ProductOrderWithOptionResponse.prototype, "productOrderWithOptionDefaultApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProductOrderWithOptionResponse.prototype, "statusCode", void 0);
    return ProductOrderWithOptionResponse;
}(SpeakeasyBase));
export { ProductOrderWithOptionResponse };
