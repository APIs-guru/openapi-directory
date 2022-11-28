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
var PutFunctionEventInvokeConfigPathParams = /** @class */ (function (_super) {
    __extends(PutFunctionEventInvokeConfigPathParams, _super);
    function PutFunctionEventInvokeConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FunctionName" }),
        __metadata("design:type", String)
    ], PutFunctionEventInvokeConfigPathParams.prototype, "functionName", void 0);
    return PutFunctionEventInvokeConfigPathParams;
}(SpeakeasyBase));
export { PutFunctionEventInvokeConfigPathParams };
var PutFunctionEventInvokeConfigQueryParams = /** @class */ (function (_super) {
    __extends(PutFunctionEventInvokeConfigQueryParams, _super);
    function PutFunctionEventInvokeConfigQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Qualifier" }),
        __metadata("design:type", String)
    ], PutFunctionEventInvokeConfigQueryParams.prototype, "qualifier", void 0);
    return PutFunctionEventInvokeConfigQueryParams;
}(SpeakeasyBase));
export { PutFunctionEventInvokeConfigQueryParams };
var PutFunctionEventInvokeConfigHeaders = /** @class */ (function (_super) {
    __extends(PutFunctionEventInvokeConfigHeaders, _super);
    function PutFunctionEventInvokeConfigHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutFunctionEventInvokeConfigHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutFunctionEventInvokeConfigHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutFunctionEventInvokeConfigHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutFunctionEventInvokeConfigHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutFunctionEventInvokeConfigHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutFunctionEventInvokeConfigHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutFunctionEventInvokeConfigHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutFunctionEventInvokeConfigHeaders;
}(SpeakeasyBase));
export { PutFunctionEventInvokeConfigHeaders };
// PutFunctionEventInvokeConfigRequestBodyDestinationConfig
/**
 * A configuration object that specifies the destination of an event after Lambda processes it.
**/
var PutFunctionEventInvokeConfigRequestBodyDestinationConfig = /** @class */ (function (_super) {
    __extends(PutFunctionEventInvokeConfigRequestBodyDestinationConfig, _super);
    function PutFunctionEventInvokeConfigRequestBodyDestinationConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OnFailure" }),
        __metadata("design:type", shared.OnFailure)
    ], PutFunctionEventInvokeConfigRequestBodyDestinationConfig.prototype, "onFailure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OnSuccess" }),
        __metadata("design:type", shared.OnSuccess)
    ], PutFunctionEventInvokeConfigRequestBodyDestinationConfig.prototype, "onSuccess", void 0);
    return PutFunctionEventInvokeConfigRequestBodyDestinationConfig;
}(SpeakeasyBase));
export { PutFunctionEventInvokeConfigRequestBodyDestinationConfig };
var PutFunctionEventInvokeConfigRequestBody = /** @class */ (function (_super) {
    __extends(PutFunctionEventInvokeConfigRequestBody, _super);
    function PutFunctionEventInvokeConfigRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DestinationConfig" }),
        __metadata("design:type", PutFunctionEventInvokeConfigRequestBodyDestinationConfig)
    ], PutFunctionEventInvokeConfigRequestBody.prototype, "destinationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumEventAgeInSeconds" }),
        __metadata("design:type", Number)
    ], PutFunctionEventInvokeConfigRequestBody.prototype, "maximumEventAgeInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumRetryAttempts" }),
        __metadata("design:type", Number)
    ], PutFunctionEventInvokeConfigRequestBody.prototype, "maximumRetryAttempts", void 0);
    return PutFunctionEventInvokeConfigRequestBody;
}(SpeakeasyBase));
export { PutFunctionEventInvokeConfigRequestBody };
var PutFunctionEventInvokeConfigRequest = /** @class */ (function (_super) {
    __extends(PutFunctionEventInvokeConfigRequest, _super);
    function PutFunctionEventInvokeConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutFunctionEventInvokeConfigPathParams)
    ], PutFunctionEventInvokeConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutFunctionEventInvokeConfigQueryParams)
    ], PutFunctionEventInvokeConfigRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutFunctionEventInvokeConfigHeaders)
    ], PutFunctionEventInvokeConfigRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutFunctionEventInvokeConfigRequestBody)
    ], PutFunctionEventInvokeConfigRequest.prototype, "request", void 0);
    return PutFunctionEventInvokeConfigRequest;
}(SpeakeasyBase));
export { PutFunctionEventInvokeConfigRequest };
var PutFunctionEventInvokeConfigResponse = /** @class */ (function (_super) {
    __extends(PutFunctionEventInvokeConfigResponse, _super);
    function PutFunctionEventInvokeConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutFunctionEventInvokeConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FunctionEventInvokeConfig)
    ], PutFunctionEventInvokeConfigResponse.prototype, "functionEventInvokeConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutFunctionEventInvokeConfigResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutFunctionEventInvokeConfigResponse.prototype, "resourceConflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutFunctionEventInvokeConfigResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutFunctionEventInvokeConfigResponse.prototype, "serviceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutFunctionEventInvokeConfigResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutFunctionEventInvokeConfigResponse.prototype, "tooManyRequestsException", void 0);
    return PutFunctionEventInvokeConfigResponse;
}(SpeakeasyBase));
export { PutFunctionEventInvokeConfigResponse };
