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
var CreateStudioComponentPathParams = /** @class */ (function (_super) {
    __extends(CreateStudioComponentPathParams, _super);
    function CreateStudioComponentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=studioId" }),
        __metadata("design:type", String)
    ], CreateStudioComponentPathParams.prototype, "studioId", void 0);
    return CreateStudioComponentPathParams;
}(SpeakeasyBase));
export { CreateStudioComponentPathParams };
var CreateStudioComponentHeaders = /** @class */ (function (_super) {
    __extends(CreateStudioComponentHeaders, _super);
    function CreateStudioComponentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateStudioComponentHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Client-Token" }),
        __metadata("design:type", String)
    ], CreateStudioComponentHeaders.prototype, "xAmzClientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateStudioComponentHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateStudioComponentHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateStudioComponentHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateStudioComponentHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateStudioComponentHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateStudioComponentHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateStudioComponentHeaders;
}(SpeakeasyBase));
export { CreateStudioComponentHeaders };
// CreateStudioComponentRequestBodyConfiguration
/**
 * The configuration of the studio component, based on component type.
**/
var CreateStudioComponentRequestBodyConfiguration = /** @class */ (function (_super) {
    __extends(CreateStudioComponentRequestBodyConfiguration, _super);
    function CreateStudioComponentRequestBodyConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activeDirectoryConfiguration" }),
        __metadata("design:type", shared.ActiveDirectoryConfiguration)
    ], CreateStudioComponentRequestBodyConfiguration.prototype, "activeDirectoryConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=computeFarmConfiguration" }),
        __metadata("design:type", shared.ComputeFarmConfiguration)
    ], CreateStudioComponentRequestBodyConfiguration.prototype, "computeFarmConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=licenseServiceConfiguration" }),
        __metadata("design:type", shared.LicenseServiceConfiguration)
    ], CreateStudioComponentRequestBodyConfiguration.prototype, "licenseServiceConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sharedFileSystemConfiguration" }),
        __metadata("design:type", shared.SharedFileSystemConfiguration)
    ], CreateStudioComponentRequestBodyConfiguration.prototype, "sharedFileSystemConfiguration", void 0);
    return CreateStudioComponentRequestBodyConfiguration;
}(SpeakeasyBase));
export { CreateStudioComponentRequestBodyConfiguration };
export var CreateStudioComponentRequestBodySubtypeEnum;
(function (CreateStudioComponentRequestBodySubtypeEnum) {
    CreateStudioComponentRequestBodySubtypeEnum["AwsManagedMicrosoftAd"] = "AWS_MANAGED_MICROSOFT_AD";
    CreateStudioComponentRequestBodySubtypeEnum["AmazonFsxForWindows"] = "AMAZON_FSX_FOR_WINDOWS";
    CreateStudioComponentRequestBodySubtypeEnum["AmazonFsxForLustre"] = "AMAZON_FSX_FOR_LUSTRE";
    CreateStudioComponentRequestBodySubtypeEnum["Custom"] = "CUSTOM";
})(CreateStudioComponentRequestBodySubtypeEnum || (CreateStudioComponentRequestBodySubtypeEnum = {}));
export var CreateStudioComponentRequestBodyTypeEnum;
(function (CreateStudioComponentRequestBodyTypeEnum) {
    CreateStudioComponentRequestBodyTypeEnum["ActiveDirectory"] = "ACTIVE_DIRECTORY";
    CreateStudioComponentRequestBodyTypeEnum["SharedFileSystem"] = "SHARED_FILE_SYSTEM";
    CreateStudioComponentRequestBodyTypeEnum["ComputeFarm"] = "COMPUTE_FARM";
    CreateStudioComponentRequestBodyTypeEnum["LicenseService"] = "LICENSE_SERVICE";
    CreateStudioComponentRequestBodyTypeEnum["Custom"] = "CUSTOM";
})(CreateStudioComponentRequestBodyTypeEnum || (CreateStudioComponentRequestBodyTypeEnum = {}));
var CreateStudioComponentRequestBody = /** @class */ (function (_super) {
    __extends(CreateStudioComponentRequestBody, _super);
    function CreateStudioComponentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configuration" }),
        __metadata("design:type", CreateStudioComponentRequestBodyConfiguration)
    ], CreateStudioComponentRequestBody.prototype, "configuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateStudioComponentRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ec2SecurityGroupIds" }),
        __metadata("design:type", Array)
    ], CreateStudioComponentRequestBody.prototype, "ec2SecurityGroupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=initializationScripts", elemType: shared.StudioComponentInitializationScript }),
        __metadata("design:type", Array)
    ], CreateStudioComponentRequestBody.prototype, "initializationScripts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateStudioComponentRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scriptParameters", elemType: shared.ScriptParameterKeyValue }),
        __metadata("design:type", Array)
    ], CreateStudioComponentRequestBody.prototype, "scriptParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subtype" }),
        __metadata("design:type", String)
    ], CreateStudioComponentRequestBody.prototype, "subtype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateStudioComponentRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateStudioComponentRequestBody.prototype, "type", void 0);
    return CreateStudioComponentRequestBody;
}(SpeakeasyBase));
export { CreateStudioComponentRequestBody };
var CreateStudioComponentRequest = /** @class */ (function (_super) {
    __extends(CreateStudioComponentRequest, _super);
    function CreateStudioComponentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateStudioComponentPathParams)
    ], CreateStudioComponentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateStudioComponentHeaders)
    ], CreateStudioComponentRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateStudioComponentRequestBody)
    ], CreateStudioComponentRequest.prototype, "request", void 0);
    return CreateStudioComponentRequest;
}(SpeakeasyBase));
export { CreateStudioComponentRequest };
var CreateStudioComponentResponse = /** @class */ (function (_super) {
    __extends(CreateStudioComponentResponse, _super);
    function CreateStudioComponentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateStudioComponentResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateStudioComponentResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateStudioComponentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateStudioComponentResponse)
    ], CreateStudioComponentResponse.prototype, "createStudioComponentResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateStudioComponentResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateStudioComponentResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateStudioComponentResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateStudioComponentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateStudioComponentResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateStudioComponentResponse.prototype, "validationException", void 0);
    return CreateStudioComponentResponse;
}(SpeakeasyBase));
export { CreateStudioComponentResponse };
