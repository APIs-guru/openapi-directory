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
var GetFunctionCodeSigningConfigPathParams = /** @class */ (function (_super) {
    __extends(GetFunctionCodeSigningConfigPathParams, _super);
    function GetFunctionCodeSigningConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FunctionName" }),
        __metadata("design:type", String)
    ], GetFunctionCodeSigningConfigPathParams.prototype, "functionName", void 0);
    return GetFunctionCodeSigningConfigPathParams;
}(SpeakeasyBase));
export { GetFunctionCodeSigningConfigPathParams };
var GetFunctionCodeSigningConfigHeaders = /** @class */ (function (_super) {
    __extends(GetFunctionCodeSigningConfigHeaders, _super);
    function GetFunctionCodeSigningConfigHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetFunctionCodeSigningConfigHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetFunctionCodeSigningConfigHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetFunctionCodeSigningConfigHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetFunctionCodeSigningConfigHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetFunctionCodeSigningConfigHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetFunctionCodeSigningConfigHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetFunctionCodeSigningConfigHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetFunctionCodeSigningConfigHeaders;
}(SpeakeasyBase));
export { GetFunctionCodeSigningConfigHeaders };
var GetFunctionCodeSigningConfigRequest = /** @class */ (function (_super) {
    __extends(GetFunctionCodeSigningConfigRequest, _super);
    function GetFunctionCodeSigningConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFunctionCodeSigningConfigPathParams)
    ], GetFunctionCodeSigningConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFunctionCodeSigningConfigHeaders)
    ], GetFunctionCodeSigningConfigRequest.prototype, "headers", void 0);
    return GetFunctionCodeSigningConfigRequest;
}(SpeakeasyBase));
export { GetFunctionCodeSigningConfigRequest };
var GetFunctionCodeSigningConfigResponse = /** @class */ (function (_super) {
    __extends(GetFunctionCodeSigningConfigResponse, _super);
    function GetFunctionCodeSigningConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFunctionCodeSigningConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetFunctionCodeSigningConfigResponse)
    ], GetFunctionCodeSigningConfigResponse.prototype, "getFunctionCodeSigningConfigResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetFunctionCodeSigningConfigResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetFunctionCodeSigningConfigResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetFunctionCodeSigningConfigResponse.prototype, "serviceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFunctionCodeSigningConfigResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetFunctionCodeSigningConfigResponse.prototype, "tooManyRequestsException", void 0);
    return GetFunctionCodeSigningConfigResponse;
}(SpeakeasyBase));
export { GetFunctionCodeSigningConfigResponse };
