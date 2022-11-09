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
var InvokeAsyncPathParams = /** @class */ (function (_super) {
    __extends(InvokeAsyncPathParams, _super);
    function InvokeAsyncPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=FunctionName" }),
        __metadata("design:type", String)
    ], InvokeAsyncPathParams.prototype, "functionName", void 0);
    return InvokeAsyncPathParams;
}(SpeakeasyBase));
export { InvokeAsyncPathParams };
var InvokeAsyncHeaders = /** @class */ (function (_super) {
    __extends(InvokeAsyncHeaders, _super);
    function InvokeAsyncHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], InvokeAsyncHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], InvokeAsyncHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], InvokeAsyncHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], InvokeAsyncHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], InvokeAsyncHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], InvokeAsyncHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], InvokeAsyncHeaders.prototype, "xAmzSignedHeaders", void 0);
    return InvokeAsyncHeaders;
}(SpeakeasyBase));
export { InvokeAsyncHeaders };
var InvokeAsyncRequestBody = /** @class */ (function (_super) {
    __extends(InvokeAsyncRequestBody, _super);
    function InvokeAsyncRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=InvokeArgs" }),
        __metadata("design:type", String)
    ], InvokeAsyncRequestBody.prototype, "invokeArgs", void 0);
    return InvokeAsyncRequestBody;
}(SpeakeasyBase));
export { InvokeAsyncRequestBody };
var InvokeAsyncRequest = /** @class */ (function (_super) {
    __extends(InvokeAsyncRequest, _super);
    function InvokeAsyncRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", InvokeAsyncPathParams)
    ], InvokeAsyncRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", InvokeAsyncHeaders)
    ], InvokeAsyncRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", InvokeAsyncRequestBody)
    ], InvokeAsyncRequest.prototype, "request", void 0);
    return InvokeAsyncRequest;
}(SpeakeasyBase));
export { InvokeAsyncRequest };
var InvokeAsyncResponse = /** @class */ (function (_super) {
    __extends(InvokeAsyncResponse, _super);
    function InvokeAsyncResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], InvokeAsyncResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.InvalidRequestContentException)
    ], InvokeAsyncResponse.prototype, "invalidRequestContentException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.InvokeAsyncResponse)
    ], InvokeAsyncResponse.prototype, "invokeAsyncResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ResourceNotFoundException)
    ], InvokeAsyncResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ServiceException)
    ], InvokeAsyncResponse.prototype, "serviceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], InvokeAsyncResponse.prototype, "statusCode", void 0);
    return InvokeAsyncResponse;
}(SpeakeasyBase));
export { InvokeAsyncResponse };
