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
var DescribePortfolioSharesQueryParams = /** @class */ (function (_super) {
    __extends(DescribePortfolioSharesQueryParams, _super);
    function DescribePortfolioSharesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", String)
    ], DescribePortfolioSharesQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageToken" }),
        __metadata("design:type", String)
    ], DescribePortfolioSharesQueryParams.prototype, "pageToken", void 0);
    return DescribePortfolioSharesQueryParams;
}(SpeakeasyBase));
export { DescribePortfolioSharesQueryParams };
export var DescribePortfolioSharesXAmzTargetEnum;
(function (DescribePortfolioSharesXAmzTargetEnum) {
    DescribePortfolioSharesXAmzTargetEnum["Aws242ServiceCatalogServiceDescribePortfolioShares"] = "AWS242ServiceCatalogService.DescribePortfolioShares";
})(DescribePortfolioSharesXAmzTargetEnum || (DescribePortfolioSharesXAmzTargetEnum = {}));
var DescribePortfolioSharesHeaders = /** @class */ (function (_super) {
    __extends(DescribePortfolioSharesHeaders, _super);
    function DescribePortfolioSharesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribePortfolioSharesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribePortfolioSharesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribePortfolioSharesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribePortfolioSharesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribePortfolioSharesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribePortfolioSharesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribePortfolioSharesHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribePortfolioSharesHeaders.prototype, "xAmzTarget", void 0);
    return DescribePortfolioSharesHeaders;
}(SpeakeasyBase));
export { DescribePortfolioSharesHeaders };
var DescribePortfolioSharesRequest = /** @class */ (function (_super) {
    __extends(DescribePortfolioSharesRequest, _super);
    function DescribePortfolioSharesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DescribePortfolioSharesQueryParams)
    ], DescribePortfolioSharesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DescribePortfolioSharesHeaders)
    ], DescribePortfolioSharesRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribePortfolioSharesInput)
    ], DescribePortfolioSharesRequest.prototype, "request", void 0);
    return DescribePortfolioSharesRequest;
}(SpeakeasyBase));
export { DescribePortfolioSharesRequest };
var DescribePortfolioSharesResponse = /** @class */ (function (_super) {
    __extends(DescribePortfolioSharesResponse, _super);
    function DescribePortfolioSharesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DescribePortfolioSharesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DescribePortfolioSharesOutput)
    ], DescribePortfolioSharesResponse.prototype, "describePortfolioSharesOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribePortfolioSharesResponse.prototype, "invalidParametersException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribePortfolioSharesResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DescribePortfolioSharesResponse.prototype, "statusCode", void 0);
    return DescribePortfolioSharesResponse;
}(SpeakeasyBase));
export { DescribePortfolioSharesResponse };
