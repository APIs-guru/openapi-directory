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
var SearchProductsAsAdminQueryParams = /** @class */ (function (_super) {
    __extends(SearchProductsAsAdminQueryParams, _super);
    function SearchProductsAsAdminQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", String)
    ], SearchProductsAsAdminQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageToken" }),
        __metadata("design:type", String)
    ], SearchProductsAsAdminQueryParams.prototype, "pageToken", void 0);
    return SearchProductsAsAdminQueryParams;
}(SpeakeasyBase));
export { SearchProductsAsAdminQueryParams };
export var SearchProductsAsAdminXAmzTargetEnum;
(function (SearchProductsAsAdminXAmzTargetEnum) {
    SearchProductsAsAdminXAmzTargetEnum["Aws242ServiceCatalogServiceSearchProductsAsAdmin"] = "AWS242ServiceCatalogService.SearchProductsAsAdmin";
})(SearchProductsAsAdminXAmzTargetEnum || (SearchProductsAsAdminXAmzTargetEnum = {}));
var SearchProductsAsAdminHeaders = /** @class */ (function (_super) {
    __extends(SearchProductsAsAdminHeaders, _super);
    function SearchProductsAsAdminHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], SearchProductsAsAdminHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], SearchProductsAsAdminHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], SearchProductsAsAdminHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], SearchProductsAsAdminHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], SearchProductsAsAdminHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], SearchProductsAsAdminHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], SearchProductsAsAdminHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], SearchProductsAsAdminHeaders.prototype, "xAmzTarget", void 0);
    return SearchProductsAsAdminHeaders;
}(SpeakeasyBase));
export { SearchProductsAsAdminHeaders };
var SearchProductsAsAdminRequest = /** @class */ (function (_super) {
    __extends(SearchProductsAsAdminRequest, _super);
    function SearchProductsAsAdminRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchProductsAsAdminQueryParams)
    ], SearchProductsAsAdminRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchProductsAsAdminHeaders)
    ], SearchProductsAsAdminRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SearchProductsAsAdminInput)
    ], SearchProductsAsAdminRequest.prototype, "request", void 0);
    return SearchProductsAsAdminRequest;
}(SpeakeasyBase));
export { SearchProductsAsAdminRequest };
var SearchProductsAsAdminResponse = /** @class */ (function (_super) {
    __extends(SearchProductsAsAdminResponse, _super);
    function SearchProductsAsAdminResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchProductsAsAdminResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SearchProductsAsAdminResponse.prototype, "invalidParametersException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SearchProductsAsAdminResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SearchProductsAsAdminOutput)
    ], SearchProductsAsAdminResponse.prototype, "searchProductsAsAdminOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchProductsAsAdminResponse.prototype, "statusCode", void 0);
    return SearchProductsAsAdminResponse;
}(SpeakeasyBase));
export { SearchProductsAsAdminResponse };
