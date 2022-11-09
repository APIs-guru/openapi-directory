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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var ProductUpdateActionPathParams = /** @class */ (function (_super) {
    __extends(ProductUpdateActionPathParams, _super);
    function ProductUpdateActionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=action" }),
        __metadata("design:type", String)
    ], ProductUpdateActionPathParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=orderId" }),
        __metadata("design:type", String)
    ], ProductUpdateActionPathParams.prototype, "orderId", void 0);
    return ProductUpdateActionPathParams;
}(SpeakeasyBase));
export { ProductUpdateActionPathParams };
var ProductUpdateActionRequestBody = /** @class */ (function (_super) {
    __extends(ProductUpdateActionRequestBody, _super);
    function ProductUpdateActionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=credits;" }),
        __metadata("design:type", Number)
    ], ProductUpdateActionRequestBody.prototype, "credits", void 0);
    return ProductUpdateActionRequestBody;
}(SpeakeasyBase));
export { ProductUpdateActionRequestBody };
var ProductUpdateActionSecurity = /** @class */ (function (_super) {
    __extends(ProductUpdateActionSecurity, _super);
    function ProductUpdateActionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeUserKey)
    ], ProductUpdateActionSecurity.prototype, "userKey", void 0);
    return ProductUpdateActionSecurity;
}(SpeakeasyBase));
export { ProductUpdateActionSecurity };
var ProductUpdateActionRequest = /** @class */ (function (_super) {
    __extends(ProductUpdateActionRequest, _super);
    function ProductUpdateActionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ProductUpdateActionPathParams)
    ], ProductUpdateActionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", ProductUpdateActionRequestBody)
    ], ProductUpdateActionRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ProductUpdateActionSecurity)
    ], ProductUpdateActionRequest.prototype, "security", void 0);
    return ProductUpdateActionRequest;
}(SpeakeasyBase));
export { ProductUpdateActionRequest };
var ProductUpdateActionResponse = /** @class */ (function (_super) {
    __extends(ProductUpdateActionResponse, _super);
    function ProductUpdateActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ProductUpdateActionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ProductUpdateActionResponse.prototype, "productUpdateAction200ApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ProductUpdateActionResponse.prototype, "productUpdateActionDefaultApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ProductUpdateActionResponse.prototype, "statusCode", void 0);
    return ProductUpdateActionResponse;
}(SpeakeasyBase));
export { ProductUpdateActionResponse };
