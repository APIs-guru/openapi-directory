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
var CreateProductPathParams = /** @class */ (function (_super) {
    __extends(CreateProductPathParams, _super);
    function CreateProductPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], CreateProductPathParams.prototype, "organizationId", void 0);
    return CreateProductPathParams;
}(SpeakeasyBase));
export { CreateProductPathParams };
var CreateProductRequests = /** @class */ (function (_super) {
    __extends(CreateProductRequests, _super);
    function CreateProductRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.CreateProductRequest)
    ], CreateProductRequests.prototype, "createProductRequest", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateProductRequest)
    ], CreateProductRequests.prototype, "createProductRequest1", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.CreateProductRequest)
    ], CreateProductRequests.prototype, "createProductRequest2", void 0);
    return CreateProductRequests;
}(SpeakeasyBase));
export { CreateProductRequests };
var CreateProductRequest = /** @class */ (function (_super) {
    __extends(CreateProductRequest, _super);
    function CreateProductRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateProductPathParams)
    ], CreateProductRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateProductRequests)
    ], CreateProductRequest.prototype, "request", void 0);
    return CreateProductRequest;
}(SpeakeasyBase));
export { CreateProductRequest };
var CreateProductResponse = /** @class */ (function (_super) {
    __extends(CreateProductResponse, _super);
    function CreateProductResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateProductResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ProductModel)
    ], CreateProductResponse.prototype, "productModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ProductModelHaljson)
    ], CreateProductResponse.prototype, "productModelHaljson", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateProductResponse.prototype, "statusCode", void 0);
    return CreateProductResponse;
}(SpeakeasyBase));
export { CreateProductResponse };
