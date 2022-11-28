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
var ProductNotifierCreatePathParams = /** @class */ (function (_super) {
    __extends(ProductNotifierCreatePathParams, _super);
    function ProductNotifierCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=orderId" }),
        __metadata("design:type", String)
    ], ProductNotifierCreatePathParams.prototype, "orderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=type" }),
        __metadata("design:type", String)
    ], ProductNotifierCreatePathParams.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uri" }),
        __metadata("design:type", String)
    ], ProductNotifierCreatePathParams.prototype, "uri", void 0);
    return ProductNotifierCreatePathParams;
}(SpeakeasyBase));
export { ProductNotifierCreatePathParams };
var ProductNotifierCreateSecurity = /** @class */ (function (_super) {
    __extends(ProductNotifierCreateSecurity, _super);
    function ProductNotifierCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeUserKey)
    ], ProductNotifierCreateSecurity.prototype, "userKey", void 0);
    return ProductNotifierCreateSecurity;
}(SpeakeasyBase));
export { ProductNotifierCreateSecurity };
var ProductNotifierCreateRequest = /** @class */ (function (_super) {
    __extends(ProductNotifierCreateRequest, _super);
    function ProductNotifierCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProductNotifierCreatePathParams)
    ], ProductNotifierCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProductNotifierCreateSecurity)
    ], ProductNotifierCreateRequest.prototype, "security", void 0);
    return ProductNotifierCreateRequest;
}(SpeakeasyBase));
export { ProductNotifierCreateRequest };
var ProductNotifierCreateResponse = /** @class */ (function (_super) {
    __extends(ProductNotifierCreateResponse, _super);
    function ProductNotifierCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProductNotifierCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ProductNotifierCreateResponse.prototype, "productNotifierCreate200ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ProductNotifierCreateResponse.prototype, "productNotifierCreateDefaultApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProductNotifierCreateResponse.prototype, "statusCode", void 0);
    return ProductNotifierCreateResponse;
}(SpeakeasyBase));
export { ProductNotifierCreateResponse };
