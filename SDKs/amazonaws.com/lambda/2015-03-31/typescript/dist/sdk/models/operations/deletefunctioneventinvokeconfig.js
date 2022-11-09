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
var DeleteFunctionEventInvokeConfigPathParams = /** @class */ (function (_super) {
    __extends(DeleteFunctionEventInvokeConfigPathParams, _super);
    function DeleteFunctionEventInvokeConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=FunctionName" }),
        __metadata("design:type", String)
    ], DeleteFunctionEventInvokeConfigPathParams.prototype, "functionName", void 0);
    return DeleteFunctionEventInvokeConfigPathParams;
}(SpeakeasyBase));
export { DeleteFunctionEventInvokeConfigPathParams };
var DeleteFunctionEventInvokeConfigQueryParams = /** @class */ (function (_super) {
    __extends(DeleteFunctionEventInvokeConfigQueryParams, _super);
    function DeleteFunctionEventInvokeConfigQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Qualifier" }),
        __metadata("design:type", String)
    ], DeleteFunctionEventInvokeConfigQueryParams.prototype, "qualifier", void 0);
    return DeleteFunctionEventInvokeConfigQueryParams;
}(SpeakeasyBase));
export { DeleteFunctionEventInvokeConfigQueryParams };
var DeleteFunctionEventInvokeConfigHeaders = /** @class */ (function (_super) {
    __extends(DeleteFunctionEventInvokeConfigHeaders, _super);
    function DeleteFunctionEventInvokeConfigHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteFunctionEventInvokeConfigHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteFunctionEventInvokeConfigHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteFunctionEventInvokeConfigHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteFunctionEventInvokeConfigHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteFunctionEventInvokeConfigHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteFunctionEventInvokeConfigHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteFunctionEventInvokeConfigHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DeleteFunctionEventInvokeConfigHeaders;
}(SpeakeasyBase));
export { DeleteFunctionEventInvokeConfigHeaders };
var DeleteFunctionEventInvokeConfigRequest = /** @class */ (function (_super) {
    __extends(DeleteFunctionEventInvokeConfigRequest, _super);
    function DeleteFunctionEventInvokeConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteFunctionEventInvokeConfigPathParams)
    ], DeleteFunctionEventInvokeConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteFunctionEventInvokeConfigQueryParams)
    ], DeleteFunctionEventInvokeConfigRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteFunctionEventInvokeConfigHeaders)
    ], DeleteFunctionEventInvokeConfigRequest.prototype, "headers", void 0);
    return DeleteFunctionEventInvokeConfigRequest;
}(SpeakeasyBase));
export { DeleteFunctionEventInvokeConfigRequest };
var DeleteFunctionEventInvokeConfigResponse = /** @class */ (function (_super) {
    __extends(DeleteFunctionEventInvokeConfigResponse, _super);
    function DeleteFunctionEventInvokeConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteFunctionEventInvokeConfigResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteFunctionEventInvokeConfigResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteFunctionEventInvokeConfigResponse.prototype, "resourceConflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteFunctionEventInvokeConfigResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteFunctionEventInvokeConfigResponse.prototype, "serviceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteFunctionEventInvokeConfigResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteFunctionEventInvokeConfigResponse.prototype, "tooManyRequestsException", void 0);
    return DeleteFunctionEventInvokeConfigResponse;
}(SpeakeasyBase));
export { DeleteFunctionEventInvokeConfigResponse };
