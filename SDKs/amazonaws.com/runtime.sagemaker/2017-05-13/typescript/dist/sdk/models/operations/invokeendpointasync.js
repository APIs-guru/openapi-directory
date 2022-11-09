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
var InvokeEndpointAsyncPathParams = /** @class */ (function (_super) {
    __extends(InvokeEndpointAsyncPathParams, _super);
    function InvokeEndpointAsyncPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EndpointName" }),
        __metadata("design:type", String)
    ], InvokeEndpointAsyncPathParams.prototype, "endpointName", void 0);
    return InvokeEndpointAsyncPathParams;
}(SpeakeasyBase));
export { InvokeEndpointAsyncPathParams };
var InvokeEndpointAsyncHeaders = /** @class */ (function (_super) {
    __extends(InvokeEndpointAsyncHeaders, _super);
    function InvokeEndpointAsyncHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], InvokeEndpointAsyncHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], InvokeEndpointAsyncHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], InvokeEndpointAsyncHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], InvokeEndpointAsyncHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], InvokeEndpointAsyncHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], InvokeEndpointAsyncHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], InvokeEndpointAsyncHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amzn-SageMaker-Accept" }),
        __metadata("design:type", String)
    ], InvokeEndpointAsyncHeaders.prototype, "xAmznSageMakerAccept", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amzn-SageMaker-Content-Type" }),
        __metadata("design:type", String)
    ], InvokeEndpointAsyncHeaders.prototype, "xAmznSageMakerContentType", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amzn-SageMaker-Custom-Attributes" }),
        __metadata("design:type", String)
    ], InvokeEndpointAsyncHeaders.prototype, "xAmznSageMakerCustomAttributes", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amzn-SageMaker-Inference-Id" }),
        __metadata("design:type", String)
    ], InvokeEndpointAsyncHeaders.prototype, "xAmznSageMakerInferenceId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amzn-SageMaker-InputLocation" }),
        __metadata("design:type", String)
    ], InvokeEndpointAsyncHeaders.prototype, "xAmznSageMakerInputLocation", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amzn-SageMaker-RequestTTLSeconds" }),
        __metadata("design:type", Number)
    ], InvokeEndpointAsyncHeaders.prototype, "xAmznSageMakerRequestTtlSeconds", void 0);
    return InvokeEndpointAsyncHeaders;
}(SpeakeasyBase));
export { InvokeEndpointAsyncHeaders };
var InvokeEndpointAsyncRequest = /** @class */ (function (_super) {
    __extends(InvokeEndpointAsyncRequest, _super);
    function InvokeEndpointAsyncRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", InvokeEndpointAsyncPathParams)
    ], InvokeEndpointAsyncRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", InvokeEndpointAsyncHeaders)
    ], InvokeEndpointAsyncRequest.prototype, "headers", void 0);
    return InvokeEndpointAsyncRequest;
}(SpeakeasyBase));
export { InvokeEndpointAsyncRequest };
var InvokeEndpointAsyncResponse = /** @class */ (function (_super) {
    __extends(InvokeEndpointAsyncResponse, _super);
    function InvokeEndpointAsyncResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], InvokeEndpointAsyncResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], InvokeEndpointAsyncResponse.prototype, "internalFailure", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.InvokeEndpointAsyncOutput)
    ], InvokeEndpointAsyncResponse.prototype, "invokeEndpointAsyncOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], InvokeEndpointAsyncResponse.prototype, "serviceUnavailable", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], InvokeEndpointAsyncResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], InvokeEndpointAsyncResponse.prototype, "validationError", void 0);
    return InvokeEndpointAsyncResponse;
}(SpeakeasyBase));
export { InvokeEndpointAsyncResponse };
