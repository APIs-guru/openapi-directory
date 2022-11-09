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
export var ImportAsProvisionedProductXAmzTargetEnum;
(function (ImportAsProvisionedProductXAmzTargetEnum) {
    ImportAsProvisionedProductXAmzTargetEnum["Aws242ServiceCatalogServiceImportAsProvisionedProduct"] = "AWS242ServiceCatalogService.ImportAsProvisionedProduct";
})(ImportAsProvisionedProductXAmzTargetEnum || (ImportAsProvisionedProductXAmzTargetEnum = {}));
var ImportAsProvisionedProductHeaders = /** @class */ (function (_super) {
    __extends(ImportAsProvisionedProductHeaders, _super);
    function ImportAsProvisionedProductHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ImportAsProvisionedProductHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ImportAsProvisionedProductHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ImportAsProvisionedProductHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ImportAsProvisionedProductHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ImportAsProvisionedProductHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ImportAsProvisionedProductHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ImportAsProvisionedProductHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ImportAsProvisionedProductHeaders.prototype, "xAmzTarget", void 0);
    return ImportAsProvisionedProductHeaders;
}(SpeakeasyBase));
export { ImportAsProvisionedProductHeaders };
var ImportAsProvisionedProductRequest = /** @class */ (function (_super) {
    __extends(ImportAsProvisionedProductRequest, _super);
    function ImportAsProvisionedProductRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ImportAsProvisionedProductHeaders)
    ], ImportAsProvisionedProductRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ImportAsProvisionedProductInput)
    ], ImportAsProvisionedProductRequest.prototype, "request", void 0);
    return ImportAsProvisionedProductRequest;
}(SpeakeasyBase));
export { ImportAsProvisionedProductRequest };
var ImportAsProvisionedProductResponse = /** @class */ (function (_super) {
    __extends(ImportAsProvisionedProductResponse, _super);
    function ImportAsProvisionedProductResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ImportAsProvisionedProductResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ImportAsProvisionedProductResponse.prototype, "duplicateResourceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ImportAsProvisionedProductOutput)
    ], ImportAsProvisionedProductResponse.prototype, "importAsProvisionedProductOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ImportAsProvisionedProductResponse.prototype, "invalidParametersException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ImportAsProvisionedProductResponse.prototype, "invalidStateException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ImportAsProvisionedProductResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ImportAsProvisionedProductResponse.prototype, "statusCode", void 0);
    return ImportAsProvisionedProductResponse;
}(SpeakeasyBase));
export { ImportAsProvisionedProductResponse };
