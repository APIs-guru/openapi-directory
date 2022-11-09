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
export var CreatePortfolioXAmzTargetEnum;
(function (CreatePortfolioXAmzTargetEnum) {
    CreatePortfolioXAmzTargetEnum["Aws242ServiceCatalogServiceCreatePortfolio"] = "AWS242ServiceCatalogService.CreatePortfolio";
})(CreatePortfolioXAmzTargetEnum || (CreatePortfolioXAmzTargetEnum = {}));
var CreatePortfolioHeaders = /** @class */ (function (_super) {
    __extends(CreatePortfolioHeaders, _super);
    function CreatePortfolioHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreatePortfolioHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreatePortfolioHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreatePortfolioHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreatePortfolioHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreatePortfolioHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreatePortfolioHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreatePortfolioHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], CreatePortfolioHeaders.prototype, "xAmzTarget", void 0);
    return CreatePortfolioHeaders;
}(SpeakeasyBase));
export { CreatePortfolioHeaders };
var CreatePortfolioRequest = /** @class */ (function (_super) {
    __extends(CreatePortfolioRequest, _super);
    function CreatePortfolioRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreatePortfolioHeaders)
    ], CreatePortfolioRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreatePortfolioInput)
    ], CreatePortfolioRequest.prototype, "request", void 0);
    return CreatePortfolioRequest;
}(SpeakeasyBase));
export { CreatePortfolioRequest };
var CreatePortfolioResponse = /** @class */ (function (_super) {
    __extends(CreatePortfolioResponse, _super);
    function CreatePortfolioResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreatePortfolioResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreatePortfolioOutput)
    ], CreatePortfolioResponse.prototype, "createPortfolioOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreatePortfolioResponse.prototype, "invalidParametersException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreatePortfolioResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreatePortfolioResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreatePortfolioResponse.prototype, "tagOptionNotMigratedException", void 0);
    return CreatePortfolioResponse;
}(SpeakeasyBase));
export { CreatePortfolioResponse };
