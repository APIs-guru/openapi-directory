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
var ProductStatusPathParams = /** @class */ (function (_super) {
    __extends(ProductStatusPathParams, _super);
    function ProductStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=orderId" }),
        __metadata("design:type", String)
    ], ProductStatusPathParams.prototype, "orderId", void 0);
    return ProductStatusPathParams;
}(SpeakeasyBase));
export { ProductStatusPathParams };
var ProductStatusSecurity = /** @class */ (function (_super) {
    __extends(ProductStatusSecurity, _super);
    function ProductStatusSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeUserKey)
    ], ProductStatusSecurity.prototype, "userKey", void 0);
    return ProductStatusSecurity;
}(SpeakeasyBase));
export { ProductStatusSecurity };
var ProductStatusRequest = /** @class */ (function (_super) {
    __extends(ProductStatusRequest, _super);
    function ProductStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProductStatusPathParams)
    ], ProductStatusRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProductStatusSecurity)
    ], ProductStatusRequest.prototype, "security", void 0);
    return ProductStatusRequest;
}(SpeakeasyBase));
export { ProductStatusRequest };
var ProductStatusResponse = /** @class */ (function (_super) {
    __extends(ProductStatusResponse, _super);
    function ProductStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProductStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ProductStatusResponse.prototype, "productStatus200ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ProductStatusResponse.prototype, "productStatusDefaultApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProductStatusResponse.prototype, "statusCode", void 0);
    return ProductStatusResponse;
}(SpeakeasyBase));
export { ProductStatusResponse };
