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
var ListFunctionsByCodeSigningConfigPathParams = /** @class */ (function (_super) {
    __extends(ListFunctionsByCodeSigningConfigPathParams, _super);
    function ListFunctionsByCodeSigningConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=CodeSigningConfigArn" }),
        __metadata("design:type", String)
    ], ListFunctionsByCodeSigningConfigPathParams.prototype, "codeSigningConfigArn", void 0);
    return ListFunctionsByCodeSigningConfigPathParams;
}(SpeakeasyBase));
export { ListFunctionsByCodeSigningConfigPathParams };
var ListFunctionsByCodeSigningConfigQueryParams = /** @class */ (function (_super) {
    __extends(ListFunctionsByCodeSigningConfigQueryParams, _super);
    function ListFunctionsByCodeSigningConfigQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], ListFunctionsByCodeSigningConfigQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", Number)
    ], ListFunctionsByCodeSigningConfigQueryParams.prototype, "maxItems", void 0);
    return ListFunctionsByCodeSigningConfigQueryParams;
}(SpeakeasyBase));
export { ListFunctionsByCodeSigningConfigQueryParams };
var ListFunctionsByCodeSigningConfigHeaders = /** @class */ (function (_super) {
    __extends(ListFunctionsByCodeSigningConfigHeaders, _super);
    function ListFunctionsByCodeSigningConfigHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListFunctionsByCodeSigningConfigHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListFunctionsByCodeSigningConfigHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListFunctionsByCodeSigningConfigHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListFunctionsByCodeSigningConfigHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListFunctionsByCodeSigningConfigHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListFunctionsByCodeSigningConfigHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListFunctionsByCodeSigningConfigHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListFunctionsByCodeSigningConfigHeaders;
}(SpeakeasyBase));
export { ListFunctionsByCodeSigningConfigHeaders };
var ListFunctionsByCodeSigningConfigRequest = /** @class */ (function (_super) {
    __extends(ListFunctionsByCodeSigningConfigRequest, _super);
    function ListFunctionsByCodeSigningConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListFunctionsByCodeSigningConfigPathParams)
    ], ListFunctionsByCodeSigningConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListFunctionsByCodeSigningConfigQueryParams)
    ], ListFunctionsByCodeSigningConfigRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListFunctionsByCodeSigningConfigHeaders)
    ], ListFunctionsByCodeSigningConfigRequest.prototype, "headers", void 0);
    return ListFunctionsByCodeSigningConfigRequest;
}(SpeakeasyBase));
export { ListFunctionsByCodeSigningConfigRequest };
var ListFunctionsByCodeSigningConfigResponse = /** @class */ (function (_super) {
    __extends(ListFunctionsByCodeSigningConfigResponse, _super);
    function ListFunctionsByCodeSigningConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListFunctionsByCodeSigningConfigResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListFunctionsByCodeSigningConfigResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListFunctionsByCodeSigningConfigResponse)
    ], ListFunctionsByCodeSigningConfigResponse.prototype, "listFunctionsByCodeSigningConfigResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListFunctionsByCodeSigningConfigResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListFunctionsByCodeSigningConfigResponse.prototype, "serviceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListFunctionsByCodeSigningConfigResponse.prototype, "statusCode", void 0);
    return ListFunctionsByCodeSigningConfigResponse;
}(SpeakeasyBase));
export { ListFunctionsByCodeSigningConfigResponse };
