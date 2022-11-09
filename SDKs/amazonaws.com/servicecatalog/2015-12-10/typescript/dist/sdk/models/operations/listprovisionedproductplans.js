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
export var ListProvisionedProductPlansXAmzTargetEnum;
(function (ListProvisionedProductPlansXAmzTargetEnum) {
    ListProvisionedProductPlansXAmzTargetEnum["Aws242ServiceCatalogServiceListProvisionedProductPlans"] = "AWS242ServiceCatalogService.ListProvisionedProductPlans";
})(ListProvisionedProductPlansXAmzTargetEnum || (ListProvisionedProductPlansXAmzTargetEnum = {}));
var ListProvisionedProductPlansHeaders = /** @class */ (function (_super) {
    __extends(ListProvisionedProductPlansHeaders, _super);
    function ListProvisionedProductPlansHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListProvisionedProductPlansHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListProvisionedProductPlansHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListProvisionedProductPlansHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListProvisionedProductPlansHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListProvisionedProductPlansHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListProvisionedProductPlansHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListProvisionedProductPlansHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListProvisionedProductPlansHeaders.prototype, "xAmzTarget", void 0);
    return ListProvisionedProductPlansHeaders;
}(SpeakeasyBase));
export { ListProvisionedProductPlansHeaders };
var ListProvisionedProductPlansRequest = /** @class */ (function (_super) {
    __extends(ListProvisionedProductPlansRequest, _super);
    function ListProvisionedProductPlansRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListProvisionedProductPlansHeaders)
    ], ListProvisionedProductPlansRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListProvisionedProductPlansInput)
    ], ListProvisionedProductPlansRequest.prototype, "request", void 0);
    return ListProvisionedProductPlansRequest;
}(SpeakeasyBase));
export { ListProvisionedProductPlansRequest };
var ListProvisionedProductPlansResponse = /** @class */ (function (_super) {
    __extends(ListProvisionedProductPlansResponse, _super);
    function ListProvisionedProductPlansResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListProvisionedProductPlansResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListProvisionedProductPlansResponse.prototype, "invalidParametersException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListProvisionedProductPlansOutput)
    ], ListProvisionedProductPlansResponse.prototype, "listProvisionedProductPlansOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListProvisionedProductPlansResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListProvisionedProductPlansResponse.prototype, "statusCode", void 0);
    return ListProvisionedProductPlansResponse;
}(SpeakeasyBase));
export { ListProvisionedProductPlansResponse };
