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
var InvokePathParams = /** @class */ (function (_super) {
    __extends(InvokePathParams, _super);
    function InvokePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FunctionName" }),
        __metadata("design:type", String)
    ], InvokePathParams.prototype, "functionName", void 0);
    return InvokePathParams;
}(SpeakeasyBase));
export { InvokePathParams };
var InvokeQueryParams = /** @class */ (function (_super) {
    __extends(InvokeQueryParams, _super);
    function InvokeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Qualifier" }),
        __metadata("design:type", String)
    ], InvokeQueryParams.prototype, "qualifier", void 0);
    return InvokeQueryParams;
}(SpeakeasyBase));
export { InvokeQueryParams };
export var InvokeXAmzInvocationTypeEnum;
(function (InvokeXAmzInvocationTypeEnum) {
    InvokeXAmzInvocationTypeEnum["Event"] = "Event";
    InvokeXAmzInvocationTypeEnum["RequestResponse"] = "RequestResponse";
    InvokeXAmzInvocationTypeEnum["DryRun"] = "DryRun";
})(InvokeXAmzInvocationTypeEnum || (InvokeXAmzInvocationTypeEnum = {}));
export var InvokeXAmzLogTypeEnum;
(function (InvokeXAmzLogTypeEnum) {
    InvokeXAmzLogTypeEnum["None"] = "None";
    InvokeXAmzLogTypeEnum["Tail"] = "Tail";
})(InvokeXAmzLogTypeEnum || (InvokeXAmzLogTypeEnum = {}));
var InvokeHeaders = /** @class */ (function (_super) {
    __extends(InvokeHeaders, _super);
    function InvokeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], InvokeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Client-Context" }),
        __metadata("design:type", String)
    ], InvokeHeaders.prototype, "xAmzClientContext", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], InvokeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], InvokeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], InvokeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Invocation-Type" }),
        __metadata("design:type", String)
    ], InvokeHeaders.prototype, "xAmzInvocationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Log-Type" }),
        __metadata("design:type", String)
    ], InvokeHeaders.prototype, "xAmzLogType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], InvokeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], InvokeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], InvokeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return InvokeHeaders;
}(SpeakeasyBase));
export { InvokeHeaders };
var InvokeRequestBody = /** @class */ (function (_super) {
    __extends(InvokeRequestBody, _super);
    function InvokeRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Payload" }),
        __metadata("design:type", String)
    ], InvokeRequestBody.prototype, "payload", void 0);
    return InvokeRequestBody;
}(SpeakeasyBase));
export { InvokeRequestBody };
var InvokeRequest = /** @class */ (function (_super) {
    __extends(InvokeRequest, _super);
    function InvokeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InvokePathParams)
    ], InvokeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InvokeQueryParams)
    ], InvokeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InvokeHeaders)
    ], InvokeRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", InvokeRequestBody)
    ], InvokeRequest.prototype, "request", void 0);
    return InvokeRequest;
}(SpeakeasyBase));
export { InvokeRequest };
var InvokeResponse = /** @class */ (function (_super) {
    __extends(InvokeResponse, _super);
    function InvokeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InvokeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], InvokeResponse.prototype, "ec2AccessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], InvokeResponse.prototype, "ec2ThrottledException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], InvokeResponse.prototype, "ec2UnexpectedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], InvokeResponse.prototype, "efsioException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], InvokeResponse.prototype, "efsMountConnectivityException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], InvokeResponse.prototype, "efsMountFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], InvokeResponse.prototype, "efsMountTimeoutException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], InvokeResponse.prototype, "eniLimitReachedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], InvokeResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], InvokeResponse.prototype, "invalidRequestContentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], InvokeResponse.prototype, "invalidRuntimeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], InvokeResponse.prototype, "invalidSecurityGroupIdException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], InvokeResponse.prototype, "invalidSubnetIdException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], InvokeResponse.prototype, "invalidZipFileException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InvocationResponse)
    ], InvokeResponse.prototype, "invocationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], InvokeResponse.prototype, "kmsAccessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], InvokeResponse.prototype, "kmsDisabledException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], InvokeResponse.prototype, "kmsInvalidStateException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], InvokeResponse.prototype, "kmsNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], InvokeResponse.prototype, "requestTooLargeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], InvokeResponse.prototype, "resourceConflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], InvokeResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], InvokeResponse.prototype, "resourceNotReadyException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], InvokeResponse.prototype, "serviceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InvokeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], InvokeResponse.prototype, "subnetIpAddressLimitReachedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], InvokeResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], InvokeResponse.prototype, "unsupportedMediaTypeException", void 0);
    return InvokeResponse;
}(SpeakeasyBase));
export { InvokeResponse };
