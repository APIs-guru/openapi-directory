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
var UpdateStudioComponentPathParams = /** @class */ (function (_super) {
    __extends(UpdateStudioComponentPathParams, _super);
    function UpdateStudioComponentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=studioComponentId" }),
        __metadata("design:type", String)
    ], UpdateStudioComponentPathParams.prototype, "studioComponentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=studioId" }),
        __metadata("design:type", String)
    ], UpdateStudioComponentPathParams.prototype, "studioId", void 0);
    return UpdateStudioComponentPathParams;
}(SpeakeasyBase));
export { UpdateStudioComponentPathParams };
var UpdateStudioComponentHeaders = /** @class */ (function (_super) {
    __extends(UpdateStudioComponentHeaders, _super);
    function UpdateStudioComponentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateStudioComponentHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Client-Token" }),
        __metadata("design:type", String)
    ], UpdateStudioComponentHeaders.prototype, "xAmzClientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateStudioComponentHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateStudioComponentHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateStudioComponentHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateStudioComponentHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateStudioComponentHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateStudioComponentHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateStudioComponentHeaders;
}(SpeakeasyBase));
export { UpdateStudioComponentHeaders };
// UpdateStudioComponentRequestBodyConfiguration
/**
 * The configuration of the studio component, based on component type.
**/
var UpdateStudioComponentRequestBodyConfiguration = /** @class */ (function (_super) {
    __extends(UpdateStudioComponentRequestBodyConfiguration, _super);
    function UpdateStudioComponentRequestBodyConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activeDirectoryConfiguration" }),
        __metadata("design:type", shared.ActiveDirectoryConfiguration)
    ], UpdateStudioComponentRequestBodyConfiguration.prototype, "activeDirectoryConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=computeFarmConfiguration" }),
        __metadata("design:type", shared.ComputeFarmConfiguration)
    ], UpdateStudioComponentRequestBodyConfiguration.prototype, "computeFarmConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=licenseServiceConfiguration" }),
        __metadata("design:type", shared.LicenseServiceConfiguration)
    ], UpdateStudioComponentRequestBodyConfiguration.prototype, "licenseServiceConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sharedFileSystemConfiguration" }),
        __metadata("design:type", shared.SharedFileSystemConfiguration)
    ], UpdateStudioComponentRequestBodyConfiguration.prototype, "sharedFileSystemConfiguration", void 0);
    return UpdateStudioComponentRequestBodyConfiguration;
}(SpeakeasyBase));
export { UpdateStudioComponentRequestBodyConfiguration };
export var UpdateStudioComponentRequestBodySubtypeEnum;
(function (UpdateStudioComponentRequestBodySubtypeEnum) {
    UpdateStudioComponentRequestBodySubtypeEnum["AwsManagedMicrosoftAd"] = "AWS_MANAGED_MICROSOFT_AD";
    UpdateStudioComponentRequestBodySubtypeEnum["AmazonFsxForWindows"] = "AMAZON_FSX_FOR_WINDOWS";
    UpdateStudioComponentRequestBodySubtypeEnum["AmazonFsxForLustre"] = "AMAZON_FSX_FOR_LUSTRE";
    UpdateStudioComponentRequestBodySubtypeEnum["Custom"] = "CUSTOM";
})(UpdateStudioComponentRequestBodySubtypeEnum || (UpdateStudioComponentRequestBodySubtypeEnum = {}));
export var UpdateStudioComponentRequestBodyTypeEnum;
(function (UpdateStudioComponentRequestBodyTypeEnum) {
    UpdateStudioComponentRequestBodyTypeEnum["ActiveDirectory"] = "ACTIVE_DIRECTORY";
    UpdateStudioComponentRequestBodyTypeEnum["SharedFileSystem"] = "SHARED_FILE_SYSTEM";
    UpdateStudioComponentRequestBodyTypeEnum["ComputeFarm"] = "COMPUTE_FARM";
    UpdateStudioComponentRequestBodyTypeEnum["LicenseService"] = "LICENSE_SERVICE";
    UpdateStudioComponentRequestBodyTypeEnum["Custom"] = "CUSTOM";
})(UpdateStudioComponentRequestBodyTypeEnum || (UpdateStudioComponentRequestBodyTypeEnum = {}));
var UpdateStudioComponentRequestBody = /** @class */ (function (_super) {
    __extends(UpdateStudioComponentRequestBody, _super);
    function UpdateStudioComponentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configuration" }),
        __metadata("design:type", UpdateStudioComponentRequestBodyConfiguration)
    ], UpdateStudioComponentRequestBody.prototype, "configuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateStudioComponentRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ec2SecurityGroupIds" }),
        __metadata("design:type", Array)
    ], UpdateStudioComponentRequestBody.prototype, "ec2SecurityGroupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=initializationScripts", elemType: shared.StudioComponentInitializationScript }),
        __metadata("design:type", Array)
    ], UpdateStudioComponentRequestBody.prototype, "initializationScripts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateStudioComponentRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scriptParameters", elemType: shared.ScriptParameterKeyValue }),
        __metadata("design:type", Array)
    ], UpdateStudioComponentRequestBody.prototype, "scriptParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subtype" }),
        __metadata("design:type", String)
    ], UpdateStudioComponentRequestBody.prototype, "subtype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateStudioComponentRequestBody.prototype, "type", void 0);
    return UpdateStudioComponentRequestBody;
}(SpeakeasyBase));
export { UpdateStudioComponentRequestBody };
var UpdateStudioComponentRequest = /** @class */ (function (_super) {
    __extends(UpdateStudioComponentRequest, _super);
    function UpdateStudioComponentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateStudioComponentPathParams)
    ], UpdateStudioComponentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateStudioComponentHeaders)
    ], UpdateStudioComponentRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateStudioComponentRequestBody)
    ], UpdateStudioComponentRequest.prototype, "request", void 0);
    return UpdateStudioComponentRequest;
}(SpeakeasyBase));
export { UpdateStudioComponentRequest };
var UpdateStudioComponentResponse = /** @class */ (function (_super) {
    __extends(UpdateStudioComponentResponse, _super);
    function UpdateStudioComponentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateStudioComponentResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateStudioComponentResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateStudioComponentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateStudioComponentResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateStudioComponentResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateStudioComponentResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateStudioComponentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateStudioComponentResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateStudioComponentResponse)
    ], UpdateStudioComponentResponse.prototype, "updateStudioComponentResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateStudioComponentResponse.prototype, "validationException", void 0);
    return UpdateStudioComponentResponse;
}(SpeakeasyBase));
export { UpdateStudioComponentResponse };
