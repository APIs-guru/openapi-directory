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
var UpdateFunctionEventInvokeConfigPathParams = /** @class */ (function (_super) {
    __extends(UpdateFunctionEventInvokeConfigPathParams, _super);
    function UpdateFunctionEventInvokeConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FunctionName" }),
        __metadata("design:type", String)
    ], UpdateFunctionEventInvokeConfigPathParams.prototype, "functionName", void 0);
    return UpdateFunctionEventInvokeConfigPathParams;
}(SpeakeasyBase));
export { UpdateFunctionEventInvokeConfigPathParams };
var UpdateFunctionEventInvokeConfigQueryParams = /** @class */ (function (_super) {
    __extends(UpdateFunctionEventInvokeConfigQueryParams, _super);
    function UpdateFunctionEventInvokeConfigQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Qualifier" }),
        __metadata("design:type", String)
    ], UpdateFunctionEventInvokeConfigQueryParams.prototype, "qualifier", void 0);
    return UpdateFunctionEventInvokeConfigQueryParams;
}(SpeakeasyBase));
export { UpdateFunctionEventInvokeConfigQueryParams };
var UpdateFunctionEventInvokeConfigHeaders = /** @class */ (function (_super) {
    __extends(UpdateFunctionEventInvokeConfigHeaders, _super);
    function UpdateFunctionEventInvokeConfigHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateFunctionEventInvokeConfigHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateFunctionEventInvokeConfigHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateFunctionEventInvokeConfigHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateFunctionEventInvokeConfigHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateFunctionEventInvokeConfigHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateFunctionEventInvokeConfigHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateFunctionEventInvokeConfigHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateFunctionEventInvokeConfigHeaders;
}(SpeakeasyBase));
export { UpdateFunctionEventInvokeConfigHeaders };
// UpdateFunctionEventInvokeConfigRequestBodyDestinationConfig
/**
 * A configuration object that specifies the destination of an event after Lambda processes it.
**/
var UpdateFunctionEventInvokeConfigRequestBodyDestinationConfig = /** @class */ (function (_super) {
    __extends(UpdateFunctionEventInvokeConfigRequestBodyDestinationConfig, _super);
    function UpdateFunctionEventInvokeConfigRequestBodyDestinationConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OnFailure" }),
        __metadata("design:type", shared.OnFailure)
    ], UpdateFunctionEventInvokeConfigRequestBodyDestinationConfig.prototype, "onFailure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OnSuccess" }),
        __metadata("design:type", shared.OnSuccess)
    ], UpdateFunctionEventInvokeConfigRequestBodyDestinationConfig.prototype, "onSuccess", void 0);
    return UpdateFunctionEventInvokeConfigRequestBodyDestinationConfig;
}(SpeakeasyBase));
export { UpdateFunctionEventInvokeConfigRequestBodyDestinationConfig };
var UpdateFunctionEventInvokeConfigRequestBody = /** @class */ (function (_super) {
    __extends(UpdateFunctionEventInvokeConfigRequestBody, _super);
    function UpdateFunctionEventInvokeConfigRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DestinationConfig" }),
        __metadata("design:type", UpdateFunctionEventInvokeConfigRequestBodyDestinationConfig)
    ], UpdateFunctionEventInvokeConfigRequestBody.prototype, "destinationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumEventAgeInSeconds" }),
        __metadata("design:type", Number)
    ], UpdateFunctionEventInvokeConfigRequestBody.prototype, "maximumEventAgeInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumRetryAttempts" }),
        __metadata("design:type", Number)
    ], UpdateFunctionEventInvokeConfigRequestBody.prototype, "maximumRetryAttempts", void 0);
    return UpdateFunctionEventInvokeConfigRequestBody;
}(SpeakeasyBase));
export { UpdateFunctionEventInvokeConfigRequestBody };
var UpdateFunctionEventInvokeConfigRequest = /** @class */ (function (_super) {
    __extends(UpdateFunctionEventInvokeConfigRequest, _super);
    function UpdateFunctionEventInvokeConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateFunctionEventInvokeConfigPathParams)
    ], UpdateFunctionEventInvokeConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateFunctionEventInvokeConfigQueryParams)
    ], UpdateFunctionEventInvokeConfigRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateFunctionEventInvokeConfigHeaders)
    ], UpdateFunctionEventInvokeConfigRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateFunctionEventInvokeConfigRequestBody)
    ], UpdateFunctionEventInvokeConfigRequest.prototype, "request", void 0);
    return UpdateFunctionEventInvokeConfigRequest;
}(SpeakeasyBase));
export { UpdateFunctionEventInvokeConfigRequest };
var UpdateFunctionEventInvokeConfigResponse = /** @class */ (function (_super) {
    __extends(UpdateFunctionEventInvokeConfigResponse, _super);
    function UpdateFunctionEventInvokeConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateFunctionEventInvokeConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FunctionEventInvokeConfig)
    ], UpdateFunctionEventInvokeConfigResponse.prototype, "functionEventInvokeConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFunctionEventInvokeConfigResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFunctionEventInvokeConfigResponse.prototype, "resourceConflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFunctionEventInvokeConfigResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFunctionEventInvokeConfigResponse.prototype, "serviceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateFunctionEventInvokeConfigResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFunctionEventInvokeConfigResponse.prototype, "tooManyRequestsException", void 0);
    return UpdateFunctionEventInvokeConfigResponse;
}(SpeakeasyBase));
export { UpdateFunctionEventInvokeConfigResponse };
