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
var ListPortfoliosForProductQueryParams = /** @class */ (function (_super) {
    __extends(ListPortfoliosForProductQueryParams, _super);
    function ListPortfoliosForProductQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", String)
    ], ListPortfoliosForProductQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageToken" }),
        __metadata("design:type", String)
    ], ListPortfoliosForProductQueryParams.prototype, "pageToken", void 0);
    return ListPortfoliosForProductQueryParams;
}(SpeakeasyBase));
export { ListPortfoliosForProductQueryParams };
export var ListPortfoliosForProductXAmzTargetEnum;
(function (ListPortfoliosForProductXAmzTargetEnum) {
    ListPortfoliosForProductXAmzTargetEnum["Aws242ServiceCatalogServiceListPortfoliosForProduct"] = "AWS242ServiceCatalogService.ListPortfoliosForProduct";
})(ListPortfoliosForProductXAmzTargetEnum || (ListPortfoliosForProductXAmzTargetEnum = {}));
var ListPortfoliosForProductHeaders = /** @class */ (function (_super) {
    __extends(ListPortfoliosForProductHeaders, _super);
    function ListPortfoliosForProductHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListPortfoliosForProductHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListPortfoliosForProductHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListPortfoliosForProductHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListPortfoliosForProductHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListPortfoliosForProductHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListPortfoliosForProductHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListPortfoliosForProductHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListPortfoliosForProductHeaders.prototype, "xAmzTarget", void 0);
    return ListPortfoliosForProductHeaders;
}(SpeakeasyBase));
export { ListPortfoliosForProductHeaders };
var ListPortfoliosForProductRequest = /** @class */ (function (_super) {
    __extends(ListPortfoliosForProductRequest, _super);
    function ListPortfoliosForProductRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListPortfoliosForProductQueryParams)
    ], ListPortfoliosForProductRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListPortfoliosForProductHeaders)
    ], ListPortfoliosForProductRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListPortfoliosForProductInput)
    ], ListPortfoliosForProductRequest.prototype, "request", void 0);
    return ListPortfoliosForProductRequest;
}(SpeakeasyBase));
export { ListPortfoliosForProductRequest };
var ListPortfoliosForProductResponse = /** @class */ (function (_super) {
    __extends(ListPortfoliosForProductResponse, _super);
    function ListPortfoliosForProductResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListPortfoliosForProductResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListPortfoliosForProductResponse.prototype, "invalidParametersException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListPortfoliosForProductOutput)
    ], ListPortfoliosForProductResponse.prototype, "listPortfoliosForProductOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListPortfoliosForProductResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListPortfoliosForProductResponse.prototype, "statusCode", void 0);
    return ListPortfoliosForProductResponse;
}(SpeakeasyBase));
export { ListPortfoliosForProductResponse };
