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
export var PutResolverQueryLogConfigPolicyXAmzTargetEnum;
(function (PutResolverQueryLogConfigPolicyXAmzTargetEnum) {
    PutResolverQueryLogConfigPolicyXAmzTargetEnum["Route53ResolverPutResolverQueryLogConfigPolicy"] = "Route53Resolver.PutResolverQueryLogConfigPolicy";
})(PutResolverQueryLogConfigPolicyXAmzTargetEnum || (PutResolverQueryLogConfigPolicyXAmzTargetEnum = {}));
var PutResolverQueryLogConfigPolicyHeaders = /** @class */ (function (_super) {
    __extends(PutResolverQueryLogConfigPolicyHeaders, _super);
    function PutResolverQueryLogConfigPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutResolverQueryLogConfigPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutResolverQueryLogConfigPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutResolverQueryLogConfigPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutResolverQueryLogConfigPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutResolverQueryLogConfigPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutResolverQueryLogConfigPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutResolverQueryLogConfigPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], PutResolverQueryLogConfigPolicyHeaders.prototype, "xAmzTarget", void 0);
    return PutResolverQueryLogConfigPolicyHeaders;
}(SpeakeasyBase));
export { PutResolverQueryLogConfigPolicyHeaders };
var PutResolverQueryLogConfigPolicyRequest = /** @class */ (function (_super) {
    __extends(PutResolverQueryLogConfigPolicyRequest, _super);
    function PutResolverQueryLogConfigPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutResolverQueryLogConfigPolicyHeaders)
    ], PutResolverQueryLogConfigPolicyRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PutResolverQueryLogConfigPolicyRequest)
    ], PutResolverQueryLogConfigPolicyRequest.prototype, "request", void 0);
    return PutResolverQueryLogConfigPolicyRequest;
}(SpeakeasyBase));
export { PutResolverQueryLogConfigPolicyRequest };
var PutResolverQueryLogConfigPolicyResponse = /** @class */ (function (_super) {
    __extends(PutResolverQueryLogConfigPolicyResponse, _super);
    function PutResolverQueryLogConfigPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutResolverQueryLogConfigPolicyResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutResolverQueryLogConfigPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutResolverQueryLogConfigPolicyResponse.prototype, "internalServiceErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutResolverQueryLogConfigPolicyResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutResolverQueryLogConfigPolicyResponse.prototype, "invalidPolicyDocument", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutResolverQueryLogConfigPolicyResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PutResolverQueryLogConfigPolicyResponse)
    ], PutResolverQueryLogConfigPolicyResponse.prototype, "putResolverQueryLogConfigPolicyResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutResolverQueryLogConfigPolicyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutResolverQueryLogConfigPolicyResponse.prototype, "unknownResourceException", void 0);
    return PutResolverQueryLogConfigPolicyResponse;
}(SpeakeasyBase));
export { PutResolverQueryLogConfigPolicyResponse };
