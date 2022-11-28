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
export var DetachInstancesFromLoadBalancerXAmzTargetEnum;
(function (DetachInstancesFromLoadBalancerXAmzTargetEnum) {
    DetachInstancesFromLoadBalancerXAmzTargetEnum["Lightsail20161128DetachInstancesFromLoadBalancer"] = "Lightsail_20161128.DetachInstancesFromLoadBalancer";
})(DetachInstancesFromLoadBalancerXAmzTargetEnum || (DetachInstancesFromLoadBalancerXAmzTargetEnum = {}));
var DetachInstancesFromLoadBalancerHeaders = /** @class */ (function (_super) {
    __extends(DetachInstancesFromLoadBalancerHeaders, _super);
    function DetachInstancesFromLoadBalancerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DetachInstancesFromLoadBalancerHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DetachInstancesFromLoadBalancerHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DetachInstancesFromLoadBalancerHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DetachInstancesFromLoadBalancerHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DetachInstancesFromLoadBalancerHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DetachInstancesFromLoadBalancerHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DetachInstancesFromLoadBalancerHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DetachInstancesFromLoadBalancerHeaders.prototype, "xAmzTarget", void 0);
    return DetachInstancesFromLoadBalancerHeaders;
}(SpeakeasyBase));
export { DetachInstancesFromLoadBalancerHeaders };
var DetachInstancesFromLoadBalancerRequest = /** @class */ (function (_super) {
    __extends(DetachInstancesFromLoadBalancerRequest, _super);
    function DetachInstancesFromLoadBalancerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DetachInstancesFromLoadBalancerHeaders)
    ], DetachInstancesFromLoadBalancerRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DetachInstancesFromLoadBalancerRequest)
    ], DetachInstancesFromLoadBalancerRequest.prototype, "request", void 0);
    return DetachInstancesFromLoadBalancerRequest;
}(SpeakeasyBase));
export { DetachInstancesFromLoadBalancerRequest };
var DetachInstancesFromLoadBalancerResponse = /** @class */ (function (_super) {
    __extends(DetachInstancesFromLoadBalancerResponse, _super);
    function DetachInstancesFromLoadBalancerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DetachInstancesFromLoadBalancerResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DetachInstancesFromLoadBalancerResponse.prototype, "accountSetupInProgressException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DetachInstancesFromLoadBalancerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DetachInstancesFromLoadBalancerResult)
    ], DetachInstancesFromLoadBalancerResponse.prototype, "detachInstancesFromLoadBalancerResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DetachInstancesFromLoadBalancerResponse.prototype, "invalidInputException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DetachInstancesFromLoadBalancerResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DetachInstancesFromLoadBalancerResponse.prototype, "operationFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DetachInstancesFromLoadBalancerResponse.prototype, "serviceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DetachInstancesFromLoadBalancerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DetachInstancesFromLoadBalancerResponse.prototype, "unauthenticatedException", void 0);
    return DetachInstancesFromLoadBalancerResponse;
}(SpeakeasyBase));
export { DetachInstancesFromLoadBalancerResponse };
