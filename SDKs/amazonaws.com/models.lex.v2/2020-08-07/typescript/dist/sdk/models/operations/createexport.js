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
var CreateExportHeaders = /** @class */ (function (_super) {
    __extends(CreateExportHeaders, _super);
    function CreateExportHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateExportHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateExportHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateExportHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateExportHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateExportHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateExportHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateExportHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateExportHeaders;
}(SpeakeasyBase));
export { CreateExportHeaders };
export var CreateExportRequestBodyFileFormatEnum;
(function (CreateExportRequestBodyFileFormatEnum) {
    CreateExportRequestBodyFileFormatEnum["LexJson"] = "LexJson";
})(CreateExportRequestBodyFileFormatEnum || (CreateExportRequestBodyFileFormatEnum = {}));
// CreateExportRequestBodyResourceSpecification
/**
 * Provides information about the bot or bot locale that you want to export. You can specify the <code>botExportSpecification</code> or the <code>botLocaleExportSpecification</code>, but not both.
**/
var CreateExportRequestBodyResourceSpecification = /** @class */ (function (_super) {
    __extends(CreateExportRequestBodyResourceSpecification, _super);
    function CreateExportRequestBodyResourceSpecification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=botExportSpecification" }),
        __metadata("design:type", shared.BotExportSpecification)
    ], CreateExportRequestBodyResourceSpecification.prototype, "botExportSpecification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=botLocaleExportSpecification" }),
        __metadata("design:type", shared.BotLocaleExportSpecification)
    ], CreateExportRequestBodyResourceSpecification.prototype, "botLocaleExportSpecification", void 0);
    return CreateExportRequestBodyResourceSpecification;
}(SpeakeasyBase));
export { CreateExportRequestBodyResourceSpecification };
var CreateExportRequestBody = /** @class */ (function (_super) {
    __extends(CreateExportRequestBody, _super);
    function CreateExportRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileFormat" }),
        __metadata("design:type", String)
    ], CreateExportRequestBody.prototype, "fileFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filePassword" }),
        __metadata("design:type", String)
    ], CreateExportRequestBody.prototype, "filePassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceSpecification" }),
        __metadata("design:type", CreateExportRequestBodyResourceSpecification)
    ], CreateExportRequestBody.prototype, "resourceSpecification", void 0);
    return CreateExportRequestBody;
}(SpeakeasyBase));
export { CreateExportRequestBody };
var CreateExportRequest = /** @class */ (function (_super) {
    __extends(CreateExportRequest, _super);
    function CreateExportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateExportHeaders)
    ], CreateExportRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateExportRequestBody)
    ], CreateExportRequest.prototype, "request", void 0);
    return CreateExportRequest;
}(SpeakeasyBase));
export { CreateExportRequest };
var CreateExportResponse = /** @class */ (function (_super) {
    __extends(CreateExportResponse, _super);
    function CreateExportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateExportResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateExportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateExportResponse)
    ], CreateExportResponse.prototype, "createExportResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateExportResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateExportResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateExportResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateExportResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateExportResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateExportResponse.prototype, "validationException", void 0);
    return CreateExportResponse;
}(SpeakeasyBase));
export { CreateExportResponse };
