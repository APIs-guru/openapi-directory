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
var UpdateSlotPathParams = /** @class */ (function (_super) {
    __extends(UpdateSlotPathParams, _super);
    function UpdateSlotPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botId" }),
        __metadata("design:type", String)
    ], UpdateSlotPathParams.prototype, "botId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botVersion" }),
        __metadata("design:type", String)
    ], UpdateSlotPathParams.prototype, "botVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=intentId" }),
        __metadata("design:type", String)
    ], UpdateSlotPathParams.prototype, "intentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=localeId" }),
        __metadata("design:type", String)
    ], UpdateSlotPathParams.prototype, "localeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slotId" }),
        __metadata("design:type", String)
    ], UpdateSlotPathParams.prototype, "slotId", void 0);
    return UpdateSlotPathParams;
}(SpeakeasyBase));
export { UpdateSlotPathParams };
var UpdateSlotHeaders = /** @class */ (function (_super) {
    __extends(UpdateSlotHeaders, _super);
    function UpdateSlotHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateSlotHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateSlotHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateSlotHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateSlotHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateSlotHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateSlotHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateSlotHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateSlotHeaders;
}(SpeakeasyBase));
export { UpdateSlotHeaders };
// UpdateSlotRequestBodyMultipleValuesSetting
/**
 * Indicates whether a slot can return multiple values.
**/
var UpdateSlotRequestBodyMultipleValuesSetting = /** @class */ (function (_super) {
    __extends(UpdateSlotRequestBodyMultipleValuesSetting, _super);
    function UpdateSlotRequestBodyMultipleValuesSetting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowMultipleValues" }),
        __metadata("design:type", Boolean)
    ], UpdateSlotRequestBodyMultipleValuesSetting.prototype, "allowMultipleValues", void 0);
    return UpdateSlotRequestBodyMultipleValuesSetting;
}(SpeakeasyBase));
export { UpdateSlotRequestBodyMultipleValuesSetting };
// UpdateSlotRequestBodyObfuscationSetting
/**
 * Determines whether Amazon Lex obscures slot values in conversation logs.
**/
var UpdateSlotRequestBodyObfuscationSetting = /** @class */ (function (_super) {
    __extends(UpdateSlotRequestBodyObfuscationSetting, _super);
    function UpdateSlotRequestBodyObfuscationSetting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=obfuscationSettingType" }),
        __metadata("design:type", String)
    ], UpdateSlotRequestBodyObfuscationSetting.prototype, "obfuscationSettingType", void 0);
    return UpdateSlotRequestBodyObfuscationSetting;
}(SpeakeasyBase));
export { UpdateSlotRequestBodyObfuscationSetting };
// UpdateSlotRequestBodyValueElicitationSetting
/**
 * Settings that you can use for eliciting a slot value.
**/
var UpdateSlotRequestBodyValueElicitationSetting = /** @class */ (function (_super) {
    __extends(UpdateSlotRequestBodyValueElicitationSetting, _super);
    function UpdateSlotRequestBodyValueElicitationSetting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultValueSpecification" }),
        __metadata("design:type", shared.SlotDefaultValueSpecification)
    ], UpdateSlotRequestBodyValueElicitationSetting.prototype, "defaultValueSpecification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promptSpecification" }),
        __metadata("design:type", shared.PromptSpecification)
    ], UpdateSlotRequestBodyValueElicitationSetting.prototype, "promptSpecification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sampleUtterances", elemType: shared.SampleUtterance }),
        __metadata("design:type", Array)
    ], UpdateSlotRequestBodyValueElicitationSetting.prototype, "sampleUtterances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slotConstraint" }),
        __metadata("design:type", String)
    ], UpdateSlotRequestBodyValueElicitationSetting.prototype, "slotConstraint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=waitAndContinueSpecification" }),
        __metadata("design:type", shared.WaitAndContinueSpecification)
    ], UpdateSlotRequestBodyValueElicitationSetting.prototype, "waitAndContinueSpecification", void 0);
    return UpdateSlotRequestBodyValueElicitationSetting;
}(SpeakeasyBase));
export { UpdateSlotRequestBodyValueElicitationSetting };
var UpdateSlotRequestBody = /** @class */ (function (_super) {
    __extends(UpdateSlotRequestBody, _super);
    function UpdateSlotRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateSlotRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=multipleValuesSetting" }),
        __metadata("design:type", UpdateSlotRequestBodyMultipleValuesSetting)
    ], UpdateSlotRequestBody.prototype, "multipleValuesSetting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=obfuscationSetting" }),
        __metadata("design:type", UpdateSlotRequestBodyObfuscationSetting)
    ], UpdateSlotRequestBody.prototype, "obfuscationSetting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slotName" }),
        __metadata("design:type", String)
    ], UpdateSlotRequestBody.prototype, "slotName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slotTypeId" }),
        __metadata("design:type", String)
    ], UpdateSlotRequestBody.prototype, "slotTypeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=valueElicitationSetting" }),
        __metadata("design:type", UpdateSlotRequestBodyValueElicitationSetting)
    ], UpdateSlotRequestBody.prototype, "valueElicitationSetting", void 0);
    return UpdateSlotRequestBody;
}(SpeakeasyBase));
export { UpdateSlotRequestBody };
var UpdateSlotRequest = /** @class */ (function (_super) {
    __extends(UpdateSlotRequest, _super);
    function UpdateSlotRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSlotPathParams)
    ], UpdateSlotRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSlotHeaders)
    ], UpdateSlotRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateSlotRequestBody)
    ], UpdateSlotRequest.prototype, "request", void 0);
    return UpdateSlotRequest;
}(SpeakeasyBase));
export { UpdateSlotRequest };
var UpdateSlotResponse = /** @class */ (function (_super) {
    __extends(UpdateSlotResponse, _super);
    function UpdateSlotResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSlotResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateSlotResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSlotResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSlotResponse.prototype, "preconditionFailedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSlotResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateSlotResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSlotResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateSlotResponse)
    ], UpdateSlotResponse.prototype, "updateSlotResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSlotResponse.prototype, "validationException", void 0);
    return UpdateSlotResponse;
}(SpeakeasyBase));
export { UpdateSlotResponse };
