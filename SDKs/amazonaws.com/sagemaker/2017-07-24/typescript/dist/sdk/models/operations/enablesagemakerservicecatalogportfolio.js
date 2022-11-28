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
export var EnableSagemakerServicecatalogPortfolioXAmzTargetEnum;
(function (EnableSagemakerServicecatalogPortfolioXAmzTargetEnum) {
    EnableSagemakerServicecatalogPortfolioXAmzTargetEnum["SageMakerEnableSagemakerServicecatalogPortfolio"] = "SageMaker.EnableSagemakerServicecatalogPortfolio";
})(EnableSagemakerServicecatalogPortfolioXAmzTargetEnum || (EnableSagemakerServicecatalogPortfolioXAmzTargetEnum = {}));
var EnableSagemakerServicecatalogPortfolioHeaders = /** @class */ (function (_super) {
    __extends(EnableSagemakerServicecatalogPortfolioHeaders, _super);
    function EnableSagemakerServicecatalogPortfolioHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], EnableSagemakerServicecatalogPortfolioHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], EnableSagemakerServicecatalogPortfolioHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], EnableSagemakerServicecatalogPortfolioHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], EnableSagemakerServicecatalogPortfolioHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], EnableSagemakerServicecatalogPortfolioHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], EnableSagemakerServicecatalogPortfolioHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], EnableSagemakerServicecatalogPortfolioHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], EnableSagemakerServicecatalogPortfolioHeaders.prototype, "xAmzTarget", void 0);
    return EnableSagemakerServicecatalogPortfolioHeaders;
}(SpeakeasyBase));
export { EnableSagemakerServicecatalogPortfolioHeaders };
var EnableSagemakerServicecatalogPortfolioRequest = /** @class */ (function (_super) {
    __extends(EnableSagemakerServicecatalogPortfolioRequest, _super);
    function EnableSagemakerServicecatalogPortfolioRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnableSagemakerServicecatalogPortfolioHeaders)
    ], EnableSagemakerServicecatalogPortfolioRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], EnableSagemakerServicecatalogPortfolioRequest.prototype, "request", void 0);
    return EnableSagemakerServicecatalogPortfolioRequest;
}(SpeakeasyBase));
export { EnableSagemakerServicecatalogPortfolioRequest };
var EnableSagemakerServicecatalogPortfolioResponse = /** @class */ (function (_super) {
    __extends(EnableSagemakerServicecatalogPortfolioResponse, _super);
    function EnableSagemakerServicecatalogPortfolioResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EnableSagemakerServicecatalogPortfolioResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], EnableSagemakerServicecatalogPortfolioResponse.prototype, "enableSagemakerServicecatalogPortfolioOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EnableSagemakerServicecatalogPortfolioResponse.prototype, "statusCode", void 0);
    return EnableSagemakerServicecatalogPortfolioResponse;
}(SpeakeasyBase));
export { EnableSagemakerServicecatalogPortfolioResponse };
