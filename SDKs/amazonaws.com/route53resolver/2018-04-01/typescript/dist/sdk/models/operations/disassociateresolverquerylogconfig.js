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
export var DisassociateResolverQueryLogConfigXAmzTargetEnum;
(function (DisassociateResolverQueryLogConfigXAmzTargetEnum) {
    DisassociateResolverQueryLogConfigXAmzTargetEnum["Route53ResolverDisassociateResolverQueryLogConfig"] = "Route53Resolver.DisassociateResolverQueryLogConfig";
})(DisassociateResolverQueryLogConfigXAmzTargetEnum || (DisassociateResolverQueryLogConfigXAmzTargetEnum = {}));
var DisassociateResolverQueryLogConfigHeaders = /** @class */ (function (_super) {
    __extends(DisassociateResolverQueryLogConfigHeaders, _super);
    function DisassociateResolverQueryLogConfigHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DisassociateResolverQueryLogConfigHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DisassociateResolverQueryLogConfigHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DisassociateResolverQueryLogConfigHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DisassociateResolverQueryLogConfigHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DisassociateResolverQueryLogConfigHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DisassociateResolverQueryLogConfigHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DisassociateResolverQueryLogConfigHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DisassociateResolverQueryLogConfigHeaders.prototype, "xAmzTarget", void 0);
    return DisassociateResolverQueryLogConfigHeaders;
}(SpeakeasyBase));
export { DisassociateResolverQueryLogConfigHeaders };
var DisassociateResolverQueryLogConfigRequest = /** @class */ (function (_super) {
    __extends(DisassociateResolverQueryLogConfigRequest, _super);
    function DisassociateResolverQueryLogConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DisassociateResolverQueryLogConfigHeaders)
    ], DisassociateResolverQueryLogConfigRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DisassociateResolverQueryLogConfigRequest)
    ], DisassociateResolverQueryLogConfigRequest.prototype, "request", void 0);
    return DisassociateResolverQueryLogConfigRequest;
}(SpeakeasyBase));
export { DisassociateResolverQueryLogConfigRequest };
var DisassociateResolverQueryLogConfigResponse = /** @class */ (function (_super) {
    __extends(DisassociateResolverQueryLogConfigResponse, _super);
    function DisassociateResolverQueryLogConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateResolverQueryLogConfigResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DisassociateResolverQueryLogConfigResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DisassociateResolverQueryLogConfigResponse)
    ], DisassociateResolverQueryLogConfigResponse.prototype, "disassociateResolverQueryLogConfigResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateResolverQueryLogConfigResponse.prototype, "internalServiceErrorException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateResolverQueryLogConfigResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateResolverQueryLogConfigResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateResolverQueryLogConfigResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DisassociateResolverQueryLogConfigResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateResolverQueryLogConfigResponse.prototype, "throttlingException", void 0);
    return DisassociateResolverQueryLogConfigResponse;
}(SpeakeasyBase));
export { DisassociateResolverQueryLogConfigResponse };
