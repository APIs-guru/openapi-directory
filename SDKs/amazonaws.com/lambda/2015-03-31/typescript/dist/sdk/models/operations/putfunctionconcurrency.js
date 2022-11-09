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
var PutFunctionConcurrencyPathParams = /** @class */ (function (_super) {
    __extends(PutFunctionConcurrencyPathParams, _super);
    function PutFunctionConcurrencyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=FunctionName" }),
        __metadata("design:type", String)
    ], PutFunctionConcurrencyPathParams.prototype, "functionName", void 0);
    return PutFunctionConcurrencyPathParams;
}(SpeakeasyBase));
export { PutFunctionConcurrencyPathParams };
var PutFunctionConcurrencyHeaders = /** @class */ (function (_super) {
    __extends(PutFunctionConcurrencyHeaders, _super);
    function PutFunctionConcurrencyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutFunctionConcurrencyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutFunctionConcurrencyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutFunctionConcurrencyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutFunctionConcurrencyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutFunctionConcurrencyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutFunctionConcurrencyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutFunctionConcurrencyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutFunctionConcurrencyHeaders;
}(SpeakeasyBase));
export { PutFunctionConcurrencyHeaders };
var PutFunctionConcurrencyRequestBody = /** @class */ (function (_super) {
    __extends(PutFunctionConcurrencyRequestBody, _super);
    function PutFunctionConcurrencyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ReservedConcurrentExecutions" }),
        __metadata("design:type", Number)
    ], PutFunctionConcurrencyRequestBody.prototype, "reservedConcurrentExecutions", void 0);
    return PutFunctionConcurrencyRequestBody;
}(SpeakeasyBase));
export { PutFunctionConcurrencyRequestBody };
var PutFunctionConcurrencyRequest = /** @class */ (function (_super) {
    __extends(PutFunctionConcurrencyRequest, _super);
    function PutFunctionConcurrencyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PutFunctionConcurrencyPathParams)
    ], PutFunctionConcurrencyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PutFunctionConcurrencyHeaders)
    ], PutFunctionConcurrencyRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutFunctionConcurrencyRequestBody)
    ], PutFunctionConcurrencyRequest.prototype, "request", void 0);
    return PutFunctionConcurrencyRequest;
}(SpeakeasyBase));
export { PutFunctionConcurrencyRequest };
var PutFunctionConcurrencyResponse = /** @class */ (function (_super) {
    __extends(PutFunctionConcurrencyResponse, _super);
    function PutFunctionConcurrencyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Concurrency)
    ], PutFunctionConcurrencyResponse.prototype, "concurrency", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PutFunctionConcurrencyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutFunctionConcurrencyResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutFunctionConcurrencyResponse.prototype, "resourceConflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutFunctionConcurrencyResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutFunctionConcurrencyResponse.prototype, "serviceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PutFunctionConcurrencyResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutFunctionConcurrencyResponse.prototype, "tooManyRequestsException", void 0);
    return PutFunctionConcurrencyResponse;
}(SpeakeasyBase));
export { PutFunctionConcurrencyResponse };
