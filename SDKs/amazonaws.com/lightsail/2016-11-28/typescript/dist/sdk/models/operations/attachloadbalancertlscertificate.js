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
export var AttachLoadBalancerTlsCertificateXAmzTargetEnum;
(function (AttachLoadBalancerTlsCertificateXAmzTargetEnum) {
    AttachLoadBalancerTlsCertificateXAmzTargetEnum["Lightsail20161128AttachLoadBalancerTlsCertificate"] = "Lightsail_20161128.AttachLoadBalancerTlsCertificate";
})(AttachLoadBalancerTlsCertificateXAmzTargetEnum || (AttachLoadBalancerTlsCertificateXAmzTargetEnum = {}));
var AttachLoadBalancerTlsCertificateHeaders = /** @class */ (function (_super) {
    __extends(AttachLoadBalancerTlsCertificateHeaders, _super);
    function AttachLoadBalancerTlsCertificateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], AttachLoadBalancerTlsCertificateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], AttachLoadBalancerTlsCertificateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], AttachLoadBalancerTlsCertificateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], AttachLoadBalancerTlsCertificateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], AttachLoadBalancerTlsCertificateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], AttachLoadBalancerTlsCertificateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], AttachLoadBalancerTlsCertificateHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], AttachLoadBalancerTlsCertificateHeaders.prototype, "xAmzTarget", void 0);
    return AttachLoadBalancerTlsCertificateHeaders;
}(SpeakeasyBase));
export { AttachLoadBalancerTlsCertificateHeaders };
var AttachLoadBalancerTlsCertificateRequest = /** @class */ (function (_super) {
    __extends(AttachLoadBalancerTlsCertificateRequest, _super);
    function AttachLoadBalancerTlsCertificateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AttachLoadBalancerTlsCertificateHeaders)
    ], AttachLoadBalancerTlsCertificateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AttachLoadBalancerTlsCertificateRequest)
    ], AttachLoadBalancerTlsCertificateRequest.prototype, "request", void 0);
    return AttachLoadBalancerTlsCertificateRequest;
}(SpeakeasyBase));
export { AttachLoadBalancerTlsCertificateRequest };
var AttachLoadBalancerTlsCertificateResponse = /** @class */ (function (_super) {
    __extends(AttachLoadBalancerTlsCertificateResponse, _super);
    function AttachLoadBalancerTlsCertificateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AttachLoadBalancerTlsCertificateResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AttachLoadBalancerTlsCertificateResponse.prototype, "accountSetupInProgressException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AttachLoadBalancerTlsCertificateResult)
    ], AttachLoadBalancerTlsCertificateResponse.prototype, "attachLoadBalancerTlsCertificateResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AttachLoadBalancerTlsCertificateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AttachLoadBalancerTlsCertificateResponse.prototype, "invalidInputException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AttachLoadBalancerTlsCertificateResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AttachLoadBalancerTlsCertificateResponse.prototype, "operationFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AttachLoadBalancerTlsCertificateResponse.prototype, "serviceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AttachLoadBalancerTlsCertificateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AttachLoadBalancerTlsCertificateResponse.prototype, "unauthenticatedException", void 0);
    return AttachLoadBalancerTlsCertificateResponse;
}(SpeakeasyBase));
export { AttachLoadBalancerTlsCertificateResponse };
