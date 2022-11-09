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
var DeleteAssetModelPathParams = /** @class */ (function (_super) {
    __extends(DeleteAssetModelPathParams, _super);
    function DeleteAssetModelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=assetModelId" }),
        __metadata("design:type", String)
    ], DeleteAssetModelPathParams.prototype, "assetModelId", void 0);
    return DeleteAssetModelPathParams;
}(SpeakeasyBase));
export { DeleteAssetModelPathParams };
var DeleteAssetModelQueryParams = /** @class */ (function (_super) {
    __extends(DeleteAssetModelQueryParams, _super);
    function DeleteAssetModelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=clientToken" }),
        __metadata("design:type", String)
    ], DeleteAssetModelQueryParams.prototype, "clientToken", void 0);
    return DeleteAssetModelQueryParams;
}(SpeakeasyBase));
export { DeleteAssetModelQueryParams };
var DeleteAssetModelHeaders = /** @class */ (function (_super) {
    __extends(DeleteAssetModelHeaders, _super);
    function DeleteAssetModelHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteAssetModelHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteAssetModelHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteAssetModelHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteAssetModelHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteAssetModelHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteAssetModelHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteAssetModelHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DeleteAssetModelHeaders;
}(SpeakeasyBase));
export { DeleteAssetModelHeaders };
var DeleteAssetModelRequest = /** @class */ (function (_super) {
    __extends(DeleteAssetModelRequest, _super);
    function DeleteAssetModelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteAssetModelPathParams)
    ], DeleteAssetModelRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteAssetModelQueryParams)
    ], DeleteAssetModelRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteAssetModelHeaders)
    ], DeleteAssetModelRequest.prototype, "headers", void 0);
    return DeleteAssetModelRequest;
}(SpeakeasyBase));
export { DeleteAssetModelRequest };
var DeleteAssetModelResponse = /** @class */ (function (_super) {
    __extends(DeleteAssetModelResponse, _super);
    function DeleteAssetModelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteAssetModelResponse.prototype, "conflictingOperationException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteAssetModelResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DeleteAssetModelResponse)
    ], DeleteAssetModelResponse.prototype, "deleteAssetModelResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteAssetModelResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteAssetModelResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteAssetModelResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteAssetModelResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteAssetModelResponse.prototype, "throttlingException", void 0);
    return DeleteAssetModelResponse;
}(SpeakeasyBase));
export { DeleteAssetModelResponse };
