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
var PutFunctionCodeSigningConfigPathParams = /** @class */ (function (_super) {
    __extends(PutFunctionCodeSigningConfigPathParams, _super);
    function PutFunctionCodeSigningConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FunctionName" }),
        __metadata("design:type", String)
    ], PutFunctionCodeSigningConfigPathParams.prototype, "functionName", void 0);
    return PutFunctionCodeSigningConfigPathParams;
}(SpeakeasyBase));
export { PutFunctionCodeSigningConfigPathParams };
var PutFunctionCodeSigningConfigHeaders = /** @class */ (function (_super) {
    __extends(PutFunctionCodeSigningConfigHeaders, _super);
    function PutFunctionCodeSigningConfigHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutFunctionCodeSigningConfigHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutFunctionCodeSigningConfigHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutFunctionCodeSigningConfigHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutFunctionCodeSigningConfigHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutFunctionCodeSigningConfigHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutFunctionCodeSigningConfigHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutFunctionCodeSigningConfigHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutFunctionCodeSigningConfigHeaders;
}(SpeakeasyBase));
export { PutFunctionCodeSigningConfigHeaders };
var PutFunctionCodeSigningConfigRequestBody = /** @class */ (function (_super) {
    __extends(PutFunctionCodeSigningConfigRequestBody, _super);
    function PutFunctionCodeSigningConfigRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CodeSigningConfigArn" }),
        __metadata("design:type", String)
    ], PutFunctionCodeSigningConfigRequestBody.prototype, "codeSigningConfigArn", void 0);
    return PutFunctionCodeSigningConfigRequestBody;
}(SpeakeasyBase));
export { PutFunctionCodeSigningConfigRequestBody };
var PutFunctionCodeSigningConfigRequest = /** @class */ (function (_super) {
    __extends(PutFunctionCodeSigningConfigRequest, _super);
    function PutFunctionCodeSigningConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutFunctionCodeSigningConfigPathParams)
    ], PutFunctionCodeSigningConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutFunctionCodeSigningConfigHeaders)
    ], PutFunctionCodeSigningConfigRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutFunctionCodeSigningConfigRequestBody)
    ], PutFunctionCodeSigningConfigRequest.prototype, "request", void 0);
    return PutFunctionCodeSigningConfigRequest;
}(SpeakeasyBase));
export { PutFunctionCodeSigningConfigRequest };
var PutFunctionCodeSigningConfigResponse = /** @class */ (function (_super) {
    __extends(PutFunctionCodeSigningConfigResponse, _super);
    function PutFunctionCodeSigningConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutFunctionCodeSigningConfigResponse.prototype, "codeSigningConfigNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutFunctionCodeSigningConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutFunctionCodeSigningConfigResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PutFunctionCodeSigningConfigResponse)
    ], PutFunctionCodeSigningConfigResponse.prototype, "putFunctionCodeSigningConfigResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutFunctionCodeSigningConfigResponse.prototype, "resourceConflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutFunctionCodeSigningConfigResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutFunctionCodeSigningConfigResponse.prototype, "serviceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutFunctionCodeSigningConfigResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutFunctionCodeSigningConfigResponse.prototype, "tooManyRequestsException", void 0);
    return PutFunctionCodeSigningConfigResponse;
}(SpeakeasyBase));
export { PutFunctionCodeSigningConfigResponse };
