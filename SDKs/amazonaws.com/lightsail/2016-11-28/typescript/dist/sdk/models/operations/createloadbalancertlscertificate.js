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
export var CreateLoadBalancerTlsCertificateXAmzTargetEnum;
(function (CreateLoadBalancerTlsCertificateXAmzTargetEnum) {
    CreateLoadBalancerTlsCertificateXAmzTargetEnum["Lightsail20161128CreateLoadBalancerTlsCertificate"] = "Lightsail_20161128.CreateLoadBalancerTlsCertificate";
})(CreateLoadBalancerTlsCertificateXAmzTargetEnum || (CreateLoadBalancerTlsCertificateXAmzTargetEnum = {}));
var CreateLoadBalancerTlsCertificateHeaders = /** @class */ (function (_super) {
    __extends(CreateLoadBalancerTlsCertificateHeaders, _super);
    function CreateLoadBalancerTlsCertificateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateLoadBalancerTlsCertificateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateLoadBalancerTlsCertificateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateLoadBalancerTlsCertificateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateLoadBalancerTlsCertificateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateLoadBalancerTlsCertificateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateLoadBalancerTlsCertificateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateLoadBalancerTlsCertificateHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], CreateLoadBalancerTlsCertificateHeaders.prototype, "xAmzTarget", void 0);
    return CreateLoadBalancerTlsCertificateHeaders;
}(SpeakeasyBase));
export { CreateLoadBalancerTlsCertificateHeaders };
var CreateLoadBalancerTlsCertificateRequest = /** @class */ (function (_super) {
    __extends(CreateLoadBalancerTlsCertificateRequest, _super);
    function CreateLoadBalancerTlsCertificateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateLoadBalancerTlsCertificateHeaders)
    ], CreateLoadBalancerTlsCertificateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateLoadBalancerTlsCertificateRequest)
    ], CreateLoadBalancerTlsCertificateRequest.prototype, "request", void 0);
    return CreateLoadBalancerTlsCertificateRequest;
}(SpeakeasyBase));
export { CreateLoadBalancerTlsCertificateRequest };
var CreateLoadBalancerTlsCertificateResponse = /** @class */ (function (_super) {
    __extends(CreateLoadBalancerTlsCertificateResponse, _super);
    function CreateLoadBalancerTlsCertificateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateLoadBalancerTlsCertificateResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateLoadBalancerTlsCertificateResponse.prototype, "accountSetupInProgressException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateLoadBalancerTlsCertificateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateLoadBalancerTlsCertificateResult)
    ], CreateLoadBalancerTlsCertificateResponse.prototype, "createLoadBalancerTlsCertificateResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateLoadBalancerTlsCertificateResponse.prototype, "invalidInputException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateLoadBalancerTlsCertificateResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateLoadBalancerTlsCertificateResponse.prototype, "operationFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateLoadBalancerTlsCertificateResponse.prototype, "serviceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateLoadBalancerTlsCertificateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateLoadBalancerTlsCertificateResponse.prototype, "unauthenticatedException", void 0);
    return CreateLoadBalancerTlsCertificateResponse;
}(SpeakeasyBase));
export { CreateLoadBalancerTlsCertificateResponse };
