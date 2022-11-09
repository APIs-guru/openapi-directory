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
export var GetResolverQueryLogConfigAssociationXAmzTargetEnum;
(function (GetResolverQueryLogConfigAssociationXAmzTargetEnum) {
    GetResolverQueryLogConfigAssociationXAmzTargetEnum["Route53ResolverGetResolverQueryLogConfigAssociation"] = "Route53Resolver.GetResolverQueryLogConfigAssociation";
})(GetResolverQueryLogConfigAssociationXAmzTargetEnum || (GetResolverQueryLogConfigAssociationXAmzTargetEnum = {}));
var GetResolverQueryLogConfigAssociationHeaders = /** @class */ (function (_super) {
    __extends(GetResolverQueryLogConfigAssociationHeaders, _super);
    function GetResolverQueryLogConfigAssociationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetResolverQueryLogConfigAssociationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetResolverQueryLogConfigAssociationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetResolverQueryLogConfigAssociationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetResolverQueryLogConfigAssociationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetResolverQueryLogConfigAssociationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetResolverQueryLogConfigAssociationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetResolverQueryLogConfigAssociationHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], GetResolverQueryLogConfigAssociationHeaders.prototype, "xAmzTarget", void 0);
    return GetResolverQueryLogConfigAssociationHeaders;
}(SpeakeasyBase));
export { GetResolverQueryLogConfigAssociationHeaders };
var GetResolverQueryLogConfigAssociationRequest = /** @class */ (function (_super) {
    __extends(GetResolverQueryLogConfigAssociationRequest, _super);
    function GetResolverQueryLogConfigAssociationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetResolverQueryLogConfigAssociationHeaders)
    ], GetResolverQueryLogConfigAssociationRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetResolverQueryLogConfigAssociationRequest)
    ], GetResolverQueryLogConfigAssociationRequest.prototype, "request", void 0);
    return GetResolverQueryLogConfigAssociationRequest;
}(SpeakeasyBase));
export { GetResolverQueryLogConfigAssociationRequest };
var GetResolverQueryLogConfigAssociationResponse = /** @class */ (function (_super) {
    __extends(GetResolverQueryLogConfigAssociationResponse, _super);
    function GetResolverQueryLogConfigAssociationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetResolverQueryLogConfigAssociationResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetResolverQueryLogConfigAssociationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetResolverQueryLogConfigAssociationResponse)
    ], GetResolverQueryLogConfigAssociationResponse.prototype, "getResolverQueryLogConfigAssociationResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetResolverQueryLogConfigAssociationResponse.prototype, "internalServiceErrorException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetResolverQueryLogConfigAssociationResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetResolverQueryLogConfigAssociationResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetResolverQueryLogConfigAssociationResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetResolverQueryLogConfigAssociationResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetResolverQueryLogConfigAssociationResponse.prototype, "throttlingException", void 0);
    return GetResolverQueryLogConfigAssociationResponse;
}(SpeakeasyBase));
export { GetResolverQueryLogConfigAssociationResponse };
