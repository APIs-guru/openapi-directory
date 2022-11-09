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
export var CreateResolverQueryLogConfigXAmzTargetEnum;
(function (CreateResolverQueryLogConfigXAmzTargetEnum) {
    CreateResolverQueryLogConfigXAmzTargetEnum["Route53ResolverCreateResolverQueryLogConfig"] = "Route53Resolver.CreateResolverQueryLogConfig";
})(CreateResolverQueryLogConfigXAmzTargetEnum || (CreateResolverQueryLogConfigXAmzTargetEnum = {}));
var CreateResolverQueryLogConfigHeaders = /** @class */ (function (_super) {
    __extends(CreateResolverQueryLogConfigHeaders, _super);
    function CreateResolverQueryLogConfigHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateResolverQueryLogConfigHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateResolverQueryLogConfigHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateResolverQueryLogConfigHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateResolverQueryLogConfigHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateResolverQueryLogConfigHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateResolverQueryLogConfigHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateResolverQueryLogConfigHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], CreateResolverQueryLogConfigHeaders.prototype, "xAmzTarget", void 0);
    return CreateResolverQueryLogConfigHeaders;
}(SpeakeasyBase));
export { CreateResolverQueryLogConfigHeaders };
var CreateResolverQueryLogConfigRequest = /** @class */ (function (_super) {
    __extends(CreateResolverQueryLogConfigRequest, _super);
    function CreateResolverQueryLogConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateResolverQueryLogConfigHeaders)
    ], CreateResolverQueryLogConfigRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateResolverQueryLogConfigRequest)
    ], CreateResolverQueryLogConfigRequest.prototype, "request", void 0);
    return CreateResolverQueryLogConfigRequest;
}(SpeakeasyBase));
export { CreateResolverQueryLogConfigRequest };
var CreateResolverQueryLogConfigResponse = /** @class */ (function (_super) {
    __extends(CreateResolverQueryLogConfigResponse, _super);
    function CreateResolverQueryLogConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateResolverQueryLogConfigResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateResolverQueryLogConfigResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateResolverQueryLogConfigResponse)
    ], CreateResolverQueryLogConfigResponse.prototype, "createResolverQueryLogConfigResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateResolverQueryLogConfigResponse.prototype, "internalServiceErrorException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateResolverQueryLogConfigResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateResolverQueryLogConfigResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateResolverQueryLogConfigResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateResolverQueryLogConfigResponse.prototype, "resourceExistsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateResolverQueryLogConfigResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateResolverQueryLogConfigResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateResolverQueryLogConfigResponse.prototype, "throttlingException", void 0);
    return CreateResolverQueryLogConfigResponse;
}(SpeakeasyBase));
export { CreateResolverQueryLogConfigResponse };
