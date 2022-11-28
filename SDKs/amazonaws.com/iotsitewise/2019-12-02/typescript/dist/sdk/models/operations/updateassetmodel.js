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
var UpdateAssetModelPathParams = /** @class */ (function (_super) {
    __extends(UpdateAssetModelPathParams, _super);
    function UpdateAssetModelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assetModelId" }),
        __metadata("design:type", String)
    ], UpdateAssetModelPathParams.prototype, "assetModelId", void 0);
    return UpdateAssetModelPathParams;
}(SpeakeasyBase));
export { UpdateAssetModelPathParams };
var UpdateAssetModelHeaders = /** @class */ (function (_super) {
    __extends(UpdateAssetModelHeaders, _super);
    function UpdateAssetModelHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateAssetModelHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateAssetModelHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateAssetModelHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateAssetModelHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateAssetModelHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateAssetModelHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateAssetModelHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateAssetModelHeaders;
}(SpeakeasyBase));
export { UpdateAssetModelHeaders };
var UpdateAssetModelRequestBody = /** @class */ (function (_super) {
    __extends(UpdateAssetModelRequestBody, _super);
    function UpdateAssetModelRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetModelCompositeModels", elemType: shared.AssetModelCompositeModel }),
        __metadata("design:type", Array)
    ], UpdateAssetModelRequestBody.prototype, "assetModelCompositeModels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetModelDescription" }),
        __metadata("design:type", String)
    ], UpdateAssetModelRequestBody.prototype, "assetModelDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetModelHierarchies", elemType: shared.AssetModelHierarchy }),
        __metadata("design:type", Array)
    ], UpdateAssetModelRequestBody.prototype, "assetModelHierarchies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetModelName" }),
        __metadata("design:type", String)
    ], UpdateAssetModelRequestBody.prototype, "assetModelName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetModelProperties", elemType: shared.AssetModelProperty }),
        __metadata("design:type", Array)
    ], UpdateAssetModelRequestBody.prototype, "assetModelProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], UpdateAssetModelRequestBody.prototype, "clientToken", void 0);
    return UpdateAssetModelRequestBody;
}(SpeakeasyBase));
export { UpdateAssetModelRequestBody };
var UpdateAssetModelRequest = /** @class */ (function (_super) {
    __extends(UpdateAssetModelRequest, _super);
    function UpdateAssetModelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateAssetModelPathParams)
    ], UpdateAssetModelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateAssetModelHeaders)
    ], UpdateAssetModelRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateAssetModelRequestBody)
    ], UpdateAssetModelRequest.prototype, "request", void 0);
    return UpdateAssetModelRequest;
}(SpeakeasyBase));
export { UpdateAssetModelRequest };
var UpdateAssetModelResponse = /** @class */ (function (_super) {
    __extends(UpdateAssetModelResponse, _super);
    function UpdateAssetModelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAssetModelResponse.prototype, "conflictingOperationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateAssetModelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAssetModelResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAssetModelResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAssetModelResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAssetModelResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAssetModelResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateAssetModelResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAssetModelResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateAssetModelResponse)
    ], UpdateAssetModelResponse.prototype, "updateAssetModelResponse", void 0);
    return UpdateAssetModelResponse;
}(SpeakeasyBase));
export { UpdateAssetModelResponse };
