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
var ListAcceptedPortfolioSharesQueryParams = /** @class */ (function (_super) {
    __extends(ListAcceptedPortfolioSharesQueryParams, _super);
    function ListAcceptedPortfolioSharesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", String)
    ], ListAcceptedPortfolioSharesQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageToken" }),
        __metadata("design:type", String)
    ], ListAcceptedPortfolioSharesQueryParams.prototype, "pageToken", void 0);
    return ListAcceptedPortfolioSharesQueryParams;
}(SpeakeasyBase));
export { ListAcceptedPortfolioSharesQueryParams };
export var ListAcceptedPortfolioSharesXAmzTargetEnum;
(function (ListAcceptedPortfolioSharesXAmzTargetEnum) {
    ListAcceptedPortfolioSharesXAmzTargetEnum["Aws242ServiceCatalogServiceListAcceptedPortfolioShares"] = "AWS242ServiceCatalogService.ListAcceptedPortfolioShares";
})(ListAcceptedPortfolioSharesXAmzTargetEnum || (ListAcceptedPortfolioSharesXAmzTargetEnum = {}));
var ListAcceptedPortfolioSharesHeaders = /** @class */ (function (_super) {
    __extends(ListAcceptedPortfolioSharesHeaders, _super);
    function ListAcceptedPortfolioSharesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListAcceptedPortfolioSharesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListAcceptedPortfolioSharesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListAcceptedPortfolioSharesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListAcceptedPortfolioSharesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListAcceptedPortfolioSharesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListAcceptedPortfolioSharesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListAcceptedPortfolioSharesHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListAcceptedPortfolioSharesHeaders.prototype, "xAmzTarget", void 0);
    return ListAcceptedPortfolioSharesHeaders;
}(SpeakeasyBase));
export { ListAcceptedPortfolioSharesHeaders };
var ListAcceptedPortfolioSharesRequest = /** @class */ (function (_super) {
    __extends(ListAcceptedPortfolioSharesRequest, _super);
    function ListAcceptedPortfolioSharesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAcceptedPortfolioSharesQueryParams)
    ], ListAcceptedPortfolioSharesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAcceptedPortfolioSharesHeaders)
    ], ListAcceptedPortfolioSharesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListAcceptedPortfolioSharesInput)
    ], ListAcceptedPortfolioSharesRequest.prototype, "request", void 0);
    return ListAcceptedPortfolioSharesRequest;
}(SpeakeasyBase));
export { ListAcceptedPortfolioSharesRequest };
var ListAcceptedPortfolioSharesResponse = /** @class */ (function (_super) {
    __extends(ListAcceptedPortfolioSharesResponse, _super);
    function ListAcceptedPortfolioSharesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListAcceptedPortfolioSharesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAcceptedPortfolioSharesResponse.prototype, "invalidParametersException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListAcceptedPortfolioSharesOutput)
    ], ListAcceptedPortfolioSharesResponse.prototype, "listAcceptedPortfolioSharesOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAcceptedPortfolioSharesResponse.prototype, "operationNotSupportedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListAcceptedPortfolioSharesResponse.prototype, "statusCode", void 0);
    return ListAcceptedPortfolioSharesResponse;
}(SpeakeasyBase));
export { ListAcceptedPortfolioSharesResponse };
