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
var CreateAssetModelHeaders = /** @class */ (function (_super) {
    __extends(CreateAssetModelHeaders, _super);
    function CreateAssetModelHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateAssetModelHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateAssetModelHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateAssetModelHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateAssetModelHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateAssetModelHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateAssetModelHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateAssetModelHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateAssetModelHeaders;
}(SpeakeasyBase));
export { CreateAssetModelHeaders };
var CreateAssetModelRequestBody = /** @class */ (function (_super) {
    __extends(CreateAssetModelRequestBody, _super);
    function CreateAssetModelRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=assetModelCompositeModels", elemType: shared.AssetModelCompositeModelDefinition }),
        __metadata("design:type", Array)
    ], CreateAssetModelRequestBody.prototype, "assetModelCompositeModels", void 0);
    __decorate([
        Metadata({ data: "json, name=assetModelDescription" }),
        __metadata("design:type", String)
    ], CreateAssetModelRequestBody.prototype, "assetModelDescription", void 0);
    __decorate([
        Metadata({ data: "json, name=assetModelHierarchies", elemType: shared.AssetModelHierarchyDefinition }),
        __metadata("design:type", Array)
    ], CreateAssetModelRequestBody.prototype, "assetModelHierarchies", void 0);
    __decorate([
        Metadata({ data: "json, name=assetModelName" }),
        __metadata("design:type", String)
    ], CreateAssetModelRequestBody.prototype, "assetModelName", void 0);
    __decorate([
        Metadata({ data: "json, name=assetModelProperties", elemType: shared.AssetModelPropertyDefinition }),
        __metadata("design:type", Array)
    ], CreateAssetModelRequestBody.prototype, "assetModelProperties", void 0);
    __decorate([
        Metadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], CreateAssetModelRequestBody.prototype, "clientToken", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateAssetModelRequestBody.prototype, "tags", void 0);
    return CreateAssetModelRequestBody;
}(SpeakeasyBase));
export { CreateAssetModelRequestBody };
var CreateAssetModelRequest = /** @class */ (function (_super) {
    __extends(CreateAssetModelRequest, _super);
    function CreateAssetModelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateAssetModelHeaders)
    ], CreateAssetModelRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateAssetModelRequestBody)
    ], CreateAssetModelRequest.prototype, "request", void 0);
    return CreateAssetModelRequest;
}(SpeakeasyBase));
export { CreateAssetModelRequest };
var CreateAssetModelResponse = /** @class */ (function (_super) {
    __extends(CreateAssetModelResponse, _super);
    function CreateAssetModelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateAssetModelResponse.prototype, "conflictingOperationException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateAssetModelResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateAssetModelResponse)
    ], CreateAssetModelResponse.prototype, "createAssetModelResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateAssetModelResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateAssetModelResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateAssetModelResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateAssetModelResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateAssetModelResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateAssetModelResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateAssetModelResponse.prototype, "throttlingException", void 0);
    return CreateAssetModelResponse;
}(SpeakeasyBase));
export { CreateAssetModelResponse };
