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
var PublishLayerVersionPathParams = /** @class */ (function (_super) {
    __extends(PublishLayerVersionPathParams, _super);
    function PublishLayerVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=LayerName" }),
        __metadata("design:type", String)
    ], PublishLayerVersionPathParams.prototype, "layerName", void 0);
    return PublishLayerVersionPathParams;
}(SpeakeasyBase));
export { PublishLayerVersionPathParams };
var PublishLayerVersionHeaders = /** @class */ (function (_super) {
    __extends(PublishLayerVersionHeaders, _super);
    function PublishLayerVersionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PublishLayerVersionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PublishLayerVersionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PublishLayerVersionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PublishLayerVersionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PublishLayerVersionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PublishLayerVersionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PublishLayerVersionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PublishLayerVersionHeaders;
}(SpeakeasyBase));
export { PublishLayerVersionHeaders };
// PublishLayerVersionRequestBodyContent
/**
 * A ZIP archive that contains the contents of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. You can specify either an Amazon S3 location, or upload a layer archive directly.
**/
var PublishLayerVersionRequestBodyContent = /** @class */ (function (_super) {
    __extends(PublishLayerVersionRequestBodyContent, _super);
    function PublishLayerVersionRequestBodyContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=S3Bucket" }),
        __metadata("design:type", String)
    ], PublishLayerVersionRequestBodyContent.prototype, "s3Bucket", void 0);
    __decorate([
        Metadata({ data: "json, name=S3Key" }),
        __metadata("design:type", String)
    ], PublishLayerVersionRequestBodyContent.prototype, "s3Key", void 0);
    __decorate([
        Metadata({ data: "json, name=S3ObjectVersion" }),
        __metadata("design:type", String)
    ], PublishLayerVersionRequestBodyContent.prototype, "s3ObjectVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=ZipFile" }),
        __metadata("design:type", String)
    ], PublishLayerVersionRequestBodyContent.prototype, "zipFile", void 0);
    return PublishLayerVersionRequestBodyContent;
}(SpeakeasyBase));
export { PublishLayerVersionRequestBodyContent };
var PublishLayerVersionRequestBody = /** @class */ (function (_super) {
    __extends(PublishLayerVersionRequestBody, _super);
    function PublishLayerVersionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=CompatibleRuntimes" }),
        __metadata("design:type", Array)
    ], PublishLayerVersionRequestBody.prototype, "compatibleRuntimes", void 0);
    __decorate([
        Metadata({ data: "json, name=Content" }),
        __metadata("design:type", PublishLayerVersionRequestBodyContent)
    ], PublishLayerVersionRequestBody.prototype, "content", void 0);
    __decorate([
        Metadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], PublishLayerVersionRequestBody.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=LicenseInfo" }),
        __metadata("design:type", String)
    ], PublishLayerVersionRequestBody.prototype, "licenseInfo", void 0);
    return PublishLayerVersionRequestBody;
}(SpeakeasyBase));
export { PublishLayerVersionRequestBody };
var PublishLayerVersionRequest = /** @class */ (function (_super) {
    __extends(PublishLayerVersionRequest, _super);
    function PublishLayerVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PublishLayerVersionPathParams)
    ], PublishLayerVersionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PublishLayerVersionHeaders)
    ], PublishLayerVersionRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PublishLayerVersionRequestBody)
    ], PublishLayerVersionRequest.prototype, "request", void 0);
    return PublishLayerVersionRequest;
}(SpeakeasyBase));
export { PublishLayerVersionRequest };
var PublishLayerVersionResponse = /** @class */ (function (_super) {
    __extends(PublishLayerVersionResponse, _super);
    function PublishLayerVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PublishLayerVersionResponse.prototype, "codeStorageExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PublishLayerVersionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PublishLayerVersionResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PublishLayerVersionResponse)
    ], PublishLayerVersionResponse.prototype, "publishLayerVersionResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PublishLayerVersionResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PublishLayerVersionResponse.prototype, "serviceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PublishLayerVersionResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PublishLayerVersionResponse.prototype, "tooManyRequestsException", void 0);
    return PublishLayerVersionResponse;
}(SpeakeasyBase));
export { PublishLayerVersionResponse };
