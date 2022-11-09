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
export var UpdatePortfolioShareXAmzTargetEnum;
(function (UpdatePortfolioShareXAmzTargetEnum) {
    UpdatePortfolioShareXAmzTargetEnum["Aws242ServiceCatalogServiceUpdatePortfolioShare"] = "AWS242ServiceCatalogService.UpdatePortfolioShare";
})(UpdatePortfolioShareXAmzTargetEnum || (UpdatePortfolioShareXAmzTargetEnum = {}));
var UpdatePortfolioShareHeaders = /** @class */ (function (_super) {
    __extends(UpdatePortfolioShareHeaders, _super);
    function UpdatePortfolioShareHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdatePortfolioShareHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdatePortfolioShareHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdatePortfolioShareHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdatePortfolioShareHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdatePortfolioShareHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdatePortfolioShareHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdatePortfolioShareHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], UpdatePortfolioShareHeaders.prototype, "xAmzTarget", void 0);
    return UpdatePortfolioShareHeaders;
}(SpeakeasyBase));
export { UpdatePortfolioShareHeaders };
var UpdatePortfolioShareRequest = /** @class */ (function (_super) {
    __extends(UpdatePortfolioShareRequest, _super);
    function UpdatePortfolioShareRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdatePortfolioShareHeaders)
    ], UpdatePortfolioShareRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdatePortfolioShareInput)
    ], UpdatePortfolioShareRequest.prototype, "request", void 0);
    return UpdatePortfolioShareRequest;
}(SpeakeasyBase));
export { UpdatePortfolioShareRequest };
var UpdatePortfolioShareResponse = /** @class */ (function (_super) {
    __extends(UpdatePortfolioShareResponse, _super);
    function UpdatePortfolioShareResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdatePortfolioShareResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdatePortfolioShareResponse.prototype, "invalidParametersException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdatePortfolioShareResponse.prototype, "invalidStateException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdatePortfolioShareResponse.prototype, "operationNotSupportedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdatePortfolioShareResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdatePortfolioShareResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UpdatePortfolioShareOutput)
    ], UpdatePortfolioShareResponse.prototype, "updatePortfolioShareOutput", void 0);
    return UpdatePortfolioShareResponse;
}(SpeakeasyBase));
export { UpdatePortfolioShareResponse };
