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
var SearchProductsQueryParams = /** @class */ (function (_super) {
    __extends(SearchProductsQueryParams, _super);
    function SearchProductsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", String)
    ], SearchProductsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageToken" }),
        __metadata("design:type", String)
    ], SearchProductsQueryParams.prototype, "pageToken", void 0);
    return SearchProductsQueryParams;
}(SpeakeasyBase));
export { SearchProductsQueryParams };
export var SearchProductsXAmzTargetEnum;
(function (SearchProductsXAmzTargetEnum) {
    SearchProductsXAmzTargetEnum["Aws242ServiceCatalogServiceSearchProducts"] = "AWS242ServiceCatalogService.SearchProducts";
})(SearchProductsXAmzTargetEnum || (SearchProductsXAmzTargetEnum = {}));
var SearchProductsHeaders = /** @class */ (function (_super) {
    __extends(SearchProductsHeaders, _super);
    function SearchProductsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], SearchProductsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], SearchProductsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], SearchProductsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], SearchProductsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], SearchProductsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], SearchProductsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], SearchProductsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], SearchProductsHeaders.prototype, "xAmzTarget", void 0);
    return SearchProductsHeaders;
}(SpeakeasyBase));
export { SearchProductsHeaders };
var SearchProductsRequest = /** @class */ (function (_super) {
    __extends(SearchProductsRequest, _super);
    function SearchProductsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SearchProductsQueryParams)
    ], SearchProductsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SearchProductsHeaders)
    ], SearchProductsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SearchProductsInput)
    ], SearchProductsRequest.prototype, "request", void 0);
    return SearchProductsRequest;
}(SpeakeasyBase));
export { SearchProductsRequest };
var SearchProductsResponse = /** @class */ (function (_super) {
    __extends(SearchProductsResponse, _super);
    function SearchProductsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SearchProductsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], SearchProductsResponse.prototype, "invalidParametersException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SearchProductsOutput)
    ], SearchProductsResponse.prototype, "searchProductsOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SearchProductsResponse.prototype, "statusCode", void 0);
    return SearchProductsResponse;
}(SpeakeasyBase));
export { SearchProductsResponse };
