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
var ProductOrderUboRequestBody = /** @class */ (function (_super) {
    __extends(ProductOrderUboRequestBody, _super);
    function ProductOrderUboRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=callbackUrl;" }),
        __metadata("design:type", String)
    ], ProductOrderUboRequestBody.prototype, "callbackUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=credits;" }),
        __metadata("design:type", Number)
    ], ProductOrderUboRequestBody.prototype, "credits", void 0);
    __decorate([
        Metadata({ data: "form, name=includeDocs;" }),
        __metadata("design:type", Boolean)
    ], ProductOrderUboRequestBody.prototype, "includeDocs", void 0);
    __decorate([
        Metadata({ data: "form, name=levels;" }),
        __metadata("design:type", String)
    ], ProductOrderUboRequestBody.prototype, "levels", void 0);
    __decorate([
        Metadata({ data: "form, name=strategy;" }),
        __metadata("design:type", String)
    ], ProductOrderUboRequestBody.prototype, "strategy", void 0);
    __decorate([
        Metadata({ data: "form, name=subjectId;" }),
        __metadata("design:type", String)
    ], ProductOrderUboRequestBody.prototype, "subjectId", void 0);
    return ProductOrderUboRequestBody;
}(SpeakeasyBase));
export { ProductOrderUboRequestBody };
var ProductOrderUboSecurity = /** @class */ (function (_super) {
    __extends(ProductOrderUboSecurity, _super);
    function ProductOrderUboSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeUserKey)
    ], ProductOrderUboSecurity.prototype, "userKey", void 0);
    return ProductOrderUboSecurity;
}(SpeakeasyBase));
export { ProductOrderUboSecurity };
var ProductOrderUboRequest = /** @class */ (function (_super) {
    __extends(ProductOrderUboRequest, _super);
    function ProductOrderUboRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", ProductOrderUboRequestBody)
    ], ProductOrderUboRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ProductOrderUboSecurity)
    ], ProductOrderUboRequest.prototype, "security", void 0);
    return ProductOrderUboRequest;
}(SpeakeasyBase));
export { ProductOrderUboRequest };
var ProductOrderUboResponse = /** @class */ (function (_super) {
    __extends(ProductOrderUboResponse, _super);
    function ProductOrderUboResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ProductOrderUboResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ProductOrderUboResponse.prototype, "productOrderUbo200ApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ProductOrderUboResponse.prototype, "productOrderUboDefaultApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ProductOrderUboResponse.prototype, "statusCode", void 0);
    return ProductOrderUboResponse;
}(SpeakeasyBase));
export { ProductOrderUboResponse };
