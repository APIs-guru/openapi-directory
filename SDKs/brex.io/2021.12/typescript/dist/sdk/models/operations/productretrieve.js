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
var ProductRetrievePathParams = /** @class */ (function (_super) {
    __extends(ProductRetrievePathParams, _super);
    function ProductRetrievePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=orderId" }),
        __metadata("design:type", String)
    ], ProductRetrievePathParams.prototype, "orderId", void 0);
    return ProductRetrievePathParams;
}(SpeakeasyBase));
export { ProductRetrievePathParams };
var ProductRetrieveSecurity = /** @class */ (function (_super) {
    __extends(ProductRetrieveSecurity, _super);
    function ProductRetrieveSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeUserKey)
    ], ProductRetrieveSecurity.prototype, "userKey", void 0);
    return ProductRetrieveSecurity;
}(SpeakeasyBase));
export { ProductRetrieveSecurity };
var ProductRetrieveRequest = /** @class */ (function (_super) {
    __extends(ProductRetrieveRequest, _super);
    function ProductRetrieveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProductRetrievePathParams)
    ], ProductRetrieveRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProductRetrieveSecurity)
    ], ProductRetrieveRequest.prototype, "security", void 0);
    return ProductRetrieveRequest;
}(SpeakeasyBase));
export { ProductRetrieveRequest };
var ProductRetrieveResponse = /** @class */ (function (_super) {
    __extends(ProductRetrieveResponse, _super);
    function ProductRetrieveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProductRetrieveResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ProductRetrieveResponse.prototype, "productRetrieve200ApplicationJsonOneOf", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ProductRetrieveResponse.prototype, "productRetrieveDefaultApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProductRetrieveResponse.prototype, "statusCode", void 0);
    return ProductRetrieveResponse;
}(SpeakeasyBase));
export { ProductRetrieveResponse };
