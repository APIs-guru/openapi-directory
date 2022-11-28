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
export var RequestServiceQuotaIncreaseXAmzTargetEnum;
(function (RequestServiceQuotaIncreaseXAmzTargetEnum) {
    RequestServiceQuotaIncreaseXAmzTargetEnum["ServiceQuotasV20190624RequestServiceQuotaIncrease"] = "ServiceQuotasV20190624.RequestServiceQuotaIncrease";
})(RequestServiceQuotaIncreaseXAmzTargetEnum || (RequestServiceQuotaIncreaseXAmzTargetEnum = {}));
var RequestServiceQuotaIncreaseHeaders = /** @class */ (function (_super) {
    __extends(RequestServiceQuotaIncreaseHeaders, _super);
    function RequestServiceQuotaIncreaseHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], RequestServiceQuotaIncreaseHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], RequestServiceQuotaIncreaseHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], RequestServiceQuotaIncreaseHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], RequestServiceQuotaIncreaseHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], RequestServiceQuotaIncreaseHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], RequestServiceQuotaIncreaseHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], RequestServiceQuotaIncreaseHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], RequestServiceQuotaIncreaseHeaders.prototype, "xAmzTarget", void 0);
    return RequestServiceQuotaIncreaseHeaders;
}(SpeakeasyBase));
export { RequestServiceQuotaIncreaseHeaders };
var RequestServiceQuotaIncreaseRequest = /** @class */ (function (_super) {
    __extends(RequestServiceQuotaIncreaseRequest, _super);
    function RequestServiceQuotaIncreaseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestServiceQuotaIncreaseHeaders)
    ], RequestServiceQuotaIncreaseRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RequestServiceQuotaIncreaseRequest)
    ], RequestServiceQuotaIncreaseRequest.prototype, "request", void 0);
    return RequestServiceQuotaIncreaseRequest;
}(SpeakeasyBase));
export { RequestServiceQuotaIncreaseRequest };
var RequestServiceQuotaIncreaseResponse = /** @class */ (function (_super) {
    __extends(RequestServiceQuotaIncreaseResponse, _super);
    function RequestServiceQuotaIncreaseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RequestServiceQuotaIncreaseResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RequestServiceQuotaIncreaseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RequestServiceQuotaIncreaseResponse.prototype, "dependencyAccessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RequestServiceQuotaIncreaseResponse.prototype, "illegalArgumentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RequestServiceQuotaIncreaseResponse.prototype, "invalidResourceStateException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RequestServiceQuotaIncreaseResponse.prototype, "noSuchResourceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RequestServiceQuotaIncreaseResponse.prototype, "quotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RequestServiceQuotaIncreaseResponse)
    ], RequestServiceQuotaIncreaseResponse.prototype, "requestServiceQuotaIncreaseResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RequestServiceQuotaIncreaseResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RequestServiceQuotaIncreaseResponse.prototype, "serviceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RequestServiceQuotaIncreaseResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RequestServiceQuotaIncreaseResponse.prototype, "tooManyRequestsException", void 0);
    return RequestServiceQuotaIncreaseResponse;
}(SpeakeasyBase));
export { RequestServiceQuotaIncreaseResponse };
