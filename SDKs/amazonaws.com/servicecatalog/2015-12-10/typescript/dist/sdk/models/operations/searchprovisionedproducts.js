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
var SearchProvisionedProductsQueryParams = /** @class */ (function (_super) {
    __extends(SearchProvisionedProductsQueryParams, _super);
    function SearchProvisionedProductsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", String)
    ], SearchProvisionedProductsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageToken" }),
        __metadata("design:type", String)
    ], SearchProvisionedProductsQueryParams.prototype, "pageToken", void 0);
    return SearchProvisionedProductsQueryParams;
}(SpeakeasyBase));
export { SearchProvisionedProductsQueryParams };
export var SearchProvisionedProductsXAmzTargetEnum;
(function (SearchProvisionedProductsXAmzTargetEnum) {
    SearchProvisionedProductsXAmzTargetEnum["Aws242ServiceCatalogServiceSearchProvisionedProducts"] = "AWS242ServiceCatalogService.SearchProvisionedProducts";
})(SearchProvisionedProductsXAmzTargetEnum || (SearchProvisionedProductsXAmzTargetEnum = {}));
var SearchProvisionedProductsHeaders = /** @class */ (function (_super) {
    __extends(SearchProvisionedProductsHeaders, _super);
    function SearchProvisionedProductsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], SearchProvisionedProductsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], SearchProvisionedProductsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], SearchProvisionedProductsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], SearchProvisionedProductsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], SearchProvisionedProductsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], SearchProvisionedProductsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], SearchProvisionedProductsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], SearchProvisionedProductsHeaders.prototype, "xAmzTarget", void 0);
    return SearchProvisionedProductsHeaders;
}(SpeakeasyBase));
export { SearchProvisionedProductsHeaders };
var SearchProvisionedProductsRequest = /** @class */ (function (_super) {
    __extends(SearchProvisionedProductsRequest, _super);
    function SearchProvisionedProductsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SearchProvisionedProductsQueryParams)
    ], SearchProvisionedProductsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SearchProvisionedProductsHeaders)
    ], SearchProvisionedProductsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SearchProvisionedProductsInput)
    ], SearchProvisionedProductsRequest.prototype, "request", void 0);
    return SearchProvisionedProductsRequest;
}(SpeakeasyBase));
export { SearchProvisionedProductsRequest };
var SearchProvisionedProductsResponse = /** @class */ (function (_super) {
    __extends(SearchProvisionedProductsResponse, _super);
    function SearchProvisionedProductsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SearchProvisionedProductsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], SearchProvisionedProductsResponse.prototype, "invalidParametersException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SearchProvisionedProductsOutput)
    ], SearchProvisionedProductsResponse.prototype, "searchProvisionedProductsOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SearchProvisionedProductsResponse.prototype, "statusCode", void 0);
    return SearchProvisionedProductsResponse;
}(SpeakeasyBase));
export { SearchProvisionedProductsResponse };
