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
var CreateWorldTemplateHeaders = /** @class */ (function (_super) {
    __extends(CreateWorldTemplateHeaders, _super);
    function CreateWorldTemplateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateWorldTemplateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateWorldTemplateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateWorldTemplateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateWorldTemplateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateWorldTemplateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateWorldTemplateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateWorldTemplateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateWorldTemplateHeaders;
}(SpeakeasyBase));
export { CreateWorldTemplateHeaders };
// CreateWorldTemplateRequestBodyTemplateLocation
/**
 * Information about a template location.
**/
var CreateWorldTemplateRequestBodyTemplateLocation = /** @class */ (function (_super) {
    __extends(CreateWorldTemplateRequestBodyTemplateLocation, _super);
    function CreateWorldTemplateRequestBodyTemplateLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=s3Bucket" }),
        __metadata("design:type", String)
    ], CreateWorldTemplateRequestBodyTemplateLocation.prototype, "s3Bucket", void 0);
    __decorate([
        Metadata({ data: "json, name=s3Key" }),
        __metadata("design:type", String)
    ], CreateWorldTemplateRequestBodyTemplateLocation.prototype, "s3Key", void 0);
    return CreateWorldTemplateRequestBodyTemplateLocation;
}(SpeakeasyBase));
export { CreateWorldTemplateRequestBodyTemplateLocation };
var CreateWorldTemplateRequestBody = /** @class */ (function (_super) {
    __extends(CreateWorldTemplateRequestBody, _super);
    function CreateWorldTemplateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=clientRequestToken" }),
        __metadata("design:type", String)
    ], CreateWorldTemplateRequestBody.prototype, "clientRequestToken", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateWorldTemplateRequestBody.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateWorldTemplateRequestBody.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=templateBody" }),
        __metadata("design:type", String)
    ], CreateWorldTemplateRequestBody.prototype, "templateBody", void 0);
    __decorate([
        Metadata({ data: "json, name=templateLocation" }),
        __metadata("design:type", CreateWorldTemplateRequestBodyTemplateLocation)
    ], CreateWorldTemplateRequestBody.prototype, "templateLocation", void 0);
    return CreateWorldTemplateRequestBody;
}(SpeakeasyBase));
export { CreateWorldTemplateRequestBody };
var CreateWorldTemplateRequest = /** @class */ (function (_super) {
    __extends(CreateWorldTemplateRequest, _super);
    function CreateWorldTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateWorldTemplateHeaders)
    ], CreateWorldTemplateRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateWorldTemplateRequestBody)
    ], CreateWorldTemplateRequest.prototype, "request", void 0);
    return CreateWorldTemplateRequest;
}(SpeakeasyBase));
export { CreateWorldTemplateRequest };
var CreateWorldTemplateResponse = /** @class */ (function (_super) {
    __extends(CreateWorldTemplateResponse, _super);
    function CreateWorldTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateWorldTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateWorldTemplateResponse)
    ], CreateWorldTemplateResponse.prototype, "createWorldTemplateResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateWorldTemplateResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateWorldTemplateResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateWorldTemplateResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateWorldTemplateResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateWorldTemplateResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateWorldTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateWorldTemplateResponse.prototype, "throttlingException", void 0);
    return CreateWorldTemplateResponse;
}(SpeakeasyBase));
export { CreateWorldTemplateResponse };
