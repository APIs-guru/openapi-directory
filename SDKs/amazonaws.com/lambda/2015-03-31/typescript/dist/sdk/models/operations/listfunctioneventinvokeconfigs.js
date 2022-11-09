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
var ListFunctionEventInvokeConfigsPathParams = /** @class */ (function (_super) {
    __extends(ListFunctionEventInvokeConfigsPathParams, _super);
    function ListFunctionEventInvokeConfigsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=FunctionName" }),
        __metadata("design:type", String)
    ], ListFunctionEventInvokeConfigsPathParams.prototype, "functionName", void 0);
    return ListFunctionEventInvokeConfigsPathParams;
}(SpeakeasyBase));
export { ListFunctionEventInvokeConfigsPathParams };
var ListFunctionEventInvokeConfigsQueryParams = /** @class */ (function (_super) {
    __extends(ListFunctionEventInvokeConfigsQueryParams, _super);
    function ListFunctionEventInvokeConfigsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], ListFunctionEventInvokeConfigsQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", Number)
    ], ListFunctionEventInvokeConfigsQueryParams.prototype, "maxItems", void 0);
    return ListFunctionEventInvokeConfigsQueryParams;
}(SpeakeasyBase));
export { ListFunctionEventInvokeConfigsQueryParams };
var ListFunctionEventInvokeConfigsHeaders = /** @class */ (function (_super) {
    __extends(ListFunctionEventInvokeConfigsHeaders, _super);
    function ListFunctionEventInvokeConfigsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListFunctionEventInvokeConfigsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListFunctionEventInvokeConfigsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListFunctionEventInvokeConfigsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListFunctionEventInvokeConfigsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListFunctionEventInvokeConfigsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListFunctionEventInvokeConfigsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListFunctionEventInvokeConfigsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListFunctionEventInvokeConfigsHeaders;
}(SpeakeasyBase));
export { ListFunctionEventInvokeConfigsHeaders };
var ListFunctionEventInvokeConfigsRequest = /** @class */ (function (_super) {
    __extends(ListFunctionEventInvokeConfigsRequest, _super);
    function ListFunctionEventInvokeConfigsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListFunctionEventInvokeConfigsPathParams)
    ], ListFunctionEventInvokeConfigsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListFunctionEventInvokeConfigsQueryParams)
    ], ListFunctionEventInvokeConfigsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListFunctionEventInvokeConfigsHeaders)
    ], ListFunctionEventInvokeConfigsRequest.prototype, "headers", void 0);
    return ListFunctionEventInvokeConfigsRequest;
}(SpeakeasyBase));
export { ListFunctionEventInvokeConfigsRequest };
var ListFunctionEventInvokeConfigsResponse = /** @class */ (function (_super) {
    __extends(ListFunctionEventInvokeConfigsResponse, _super);
    function ListFunctionEventInvokeConfigsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListFunctionEventInvokeConfigsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListFunctionEventInvokeConfigsResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListFunctionEventInvokeConfigsResponse)
    ], ListFunctionEventInvokeConfigsResponse.prototype, "listFunctionEventInvokeConfigsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListFunctionEventInvokeConfigsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListFunctionEventInvokeConfigsResponse.prototype, "serviceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListFunctionEventInvokeConfigsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListFunctionEventInvokeConfigsResponse.prototype, "tooManyRequestsException", void 0);
    return ListFunctionEventInvokeConfigsResponse;
}(SpeakeasyBase));
export { ListFunctionEventInvokeConfigsResponse };
