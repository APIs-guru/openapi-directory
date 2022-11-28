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
var CreateSlotPathParams = /** @class */ (function (_super) {
    __extends(CreateSlotPathParams, _super);
    function CreateSlotPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botId" }),
        __metadata("design:type", String)
    ], CreateSlotPathParams.prototype, "botId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botVersion" }),
        __metadata("design:type", String)
    ], CreateSlotPathParams.prototype, "botVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=intentId" }),
        __metadata("design:type", String)
    ], CreateSlotPathParams.prototype, "intentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=localeId" }),
        __metadata("design:type", String)
    ], CreateSlotPathParams.prototype, "localeId", void 0);
    return CreateSlotPathParams;
}(SpeakeasyBase));
export { CreateSlotPathParams };
var CreateSlotHeaders = /** @class */ (function (_super) {
    __extends(CreateSlotHeaders, _super);
    function CreateSlotHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateSlotHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateSlotHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateSlotHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateSlotHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateSlotHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateSlotHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateSlotHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateSlotHeaders;
}(SpeakeasyBase));
export { CreateSlotHeaders };
// CreateSlotRequestBodyMultipleValuesSetting
/**
 * Indicates whether a slot can return multiple values.
**/
var CreateSlotRequestBodyMultipleValuesSetting = /** @class */ (function (_super) {
    __extends(CreateSlotRequestBodyMultipleValuesSetting, _super);
    function CreateSlotRequestBodyMultipleValuesSetting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowMultipleValues" }),
        __metadata("design:type", Boolean)
    ], CreateSlotRequestBodyMultipleValuesSetting.prototype, "allowMultipleValues", void 0);
    return CreateSlotRequestBodyMultipleValuesSetting;
}(SpeakeasyBase));
export { CreateSlotRequestBodyMultipleValuesSetting };
// CreateSlotRequestBodyObfuscationSetting
/**
 * Determines whether Amazon Lex obscures slot values in conversation logs.
**/
var CreateSlotRequestBodyObfuscationSetting = /** @class */ (function (_super) {
    __extends(CreateSlotRequestBodyObfuscationSetting, _super);
    function CreateSlotRequestBodyObfuscationSetting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=obfuscationSettingType" }),
        __metadata("design:type", String)
    ], CreateSlotRequestBodyObfuscationSetting.prototype, "obfuscationSettingType", void 0);
    return CreateSlotRequestBodyObfuscationSetting;
}(SpeakeasyBase));
export { CreateSlotRequestBodyObfuscationSetting };
// CreateSlotRequestBodyValueElicitationSetting
/**
 * Settings that you can use for eliciting a slot value.
**/
var CreateSlotRequestBodyValueElicitationSetting = /** @class */ (function (_super) {
    __extends(CreateSlotRequestBodyValueElicitationSetting, _super);
    function CreateSlotRequestBodyValueElicitationSetting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultValueSpecification" }),
        __metadata("design:type", shared.SlotDefaultValueSpecification)
    ], CreateSlotRequestBodyValueElicitationSetting.prototype, "defaultValueSpecification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promptSpecification" }),
        __metadata("design:type", shared.PromptSpecification)
    ], CreateSlotRequestBodyValueElicitationSetting.prototype, "promptSpecification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sampleUtterances", elemType: shared.SampleUtterance }),
        __metadata("design:type", Array)
    ], CreateSlotRequestBodyValueElicitationSetting.prototype, "sampleUtterances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slotConstraint" }),
        __metadata("design:type", String)
    ], CreateSlotRequestBodyValueElicitationSetting.prototype, "slotConstraint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=waitAndContinueSpecification" }),
        __metadata("design:type", shared.WaitAndContinueSpecification)
    ], CreateSlotRequestBodyValueElicitationSetting.prototype, "waitAndContinueSpecification", void 0);
    return CreateSlotRequestBodyValueElicitationSetting;
}(SpeakeasyBase));
export { CreateSlotRequestBodyValueElicitationSetting };
var CreateSlotRequestBody = /** @class */ (function (_super) {
    __extends(CreateSlotRequestBody, _super);
    function CreateSlotRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateSlotRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=multipleValuesSetting" }),
        __metadata("design:type", CreateSlotRequestBodyMultipleValuesSetting)
    ], CreateSlotRequestBody.prototype, "multipleValuesSetting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=obfuscationSetting" }),
        __metadata("design:type", CreateSlotRequestBodyObfuscationSetting)
    ], CreateSlotRequestBody.prototype, "obfuscationSetting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slotName" }),
        __metadata("design:type", String)
    ], CreateSlotRequestBody.prototype, "slotName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slotTypeId" }),
        __metadata("design:type", String)
    ], CreateSlotRequestBody.prototype, "slotTypeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=valueElicitationSetting" }),
        __metadata("design:type", CreateSlotRequestBodyValueElicitationSetting)
    ], CreateSlotRequestBody.prototype, "valueElicitationSetting", void 0);
    return CreateSlotRequestBody;
}(SpeakeasyBase));
export { CreateSlotRequestBody };
var CreateSlotRequest = /** @class */ (function (_super) {
    __extends(CreateSlotRequest, _super);
    function CreateSlotRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSlotPathParams)
    ], CreateSlotRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSlotHeaders)
    ], CreateSlotRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateSlotRequestBody)
    ], CreateSlotRequest.prototype, "request", void 0);
    return CreateSlotRequest;
}(SpeakeasyBase));
export { CreateSlotRequest };
var CreateSlotResponse = /** @class */ (function (_super) {
    __extends(CreateSlotResponse, _super);
    function CreateSlotResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSlotResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSlotResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateSlotResponse)
    ], CreateSlotResponse.prototype, "createSlotResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSlotResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSlotResponse.prototype, "preconditionFailedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSlotResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateSlotResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSlotResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSlotResponse.prototype, "validationException", void 0);
    return CreateSlotResponse;
}(SpeakeasyBase));
export { CreateSlotResponse };
