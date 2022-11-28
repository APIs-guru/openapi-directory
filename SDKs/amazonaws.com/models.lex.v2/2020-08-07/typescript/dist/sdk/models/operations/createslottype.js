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
var CreateSlotTypePathParams = /** @class */ (function (_super) {
    __extends(CreateSlotTypePathParams, _super);
    function CreateSlotTypePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botId" }),
        __metadata("design:type", String)
    ], CreateSlotTypePathParams.prototype, "botId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botVersion" }),
        __metadata("design:type", String)
    ], CreateSlotTypePathParams.prototype, "botVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=localeId" }),
        __metadata("design:type", String)
    ], CreateSlotTypePathParams.prototype, "localeId", void 0);
    return CreateSlotTypePathParams;
}(SpeakeasyBase));
export { CreateSlotTypePathParams };
var CreateSlotTypeHeaders = /** @class */ (function (_super) {
    __extends(CreateSlotTypeHeaders, _super);
    function CreateSlotTypeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateSlotTypeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateSlotTypeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateSlotTypeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateSlotTypeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateSlotTypeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateSlotTypeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateSlotTypeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateSlotTypeHeaders;
}(SpeakeasyBase));
export { CreateSlotTypeHeaders };
// CreateSlotTypeRequestBodyValueSelectionSetting
/**
 * Contains settings used by Amazon Lex to select a slot value.
**/
var CreateSlotTypeRequestBodyValueSelectionSetting = /** @class */ (function (_super) {
    __extends(CreateSlotTypeRequestBodyValueSelectionSetting, _super);
    function CreateSlotTypeRequestBodyValueSelectionSetting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regexFilter" }),
        __metadata("design:type", shared.SlotValueRegexFilter)
    ], CreateSlotTypeRequestBodyValueSelectionSetting.prototype, "regexFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resolutionStrategy" }),
        __metadata("design:type", String)
    ], CreateSlotTypeRequestBodyValueSelectionSetting.prototype, "resolutionStrategy", void 0);
    return CreateSlotTypeRequestBodyValueSelectionSetting;
}(SpeakeasyBase));
export { CreateSlotTypeRequestBodyValueSelectionSetting };
var CreateSlotTypeRequestBody = /** @class */ (function (_super) {
    __extends(CreateSlotTypeRequestBody, _super);
    function CreateSlotTypeRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateSlotTypeRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentSlotTypeSignature" }),
        __metadata("design:type", String)
    ], CreateSlotTypeRequestBody.prototype, "parentSlotTypeSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slotTypeName" }),
        __metadata("design:type", String)
    ], CreateSlotTypeRequestBody.prototype, "slotTypeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slotTypeValues", elemType: shared.SlotTypeValue }),
        __metadata("design:type", Array)
    ], CreateSlotTypeRequestBody.prototype, "slotTypeValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=valueSelectionSetting" }),
        __metadata("design:type", CreateSlotTypeRequestBodyValueSelectionSetting)
    ], CreateSlotTypeRequestBody.prototype, "valueSelectionSetting", void 0);
    return CreateSlotTypeRequestBody;
}(SpeakeasyBase));
export { CreateSlotTypeRequestBody };
var CreateSlotTypeRequest = /** @class */ (function (_super) {
    __extends(CreateSlotTypeRequest, _super);
    function CreateSlotTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSlotTypePathParams)
    ], CreateSlotTypeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSlotTypeHeaders)
    ], CreateSlotTypeRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateSlotTypeRequestBody)
    ], CreateSlotTypeRequest.prototype, "request", void 0);
    return CreateSlotTypeRequest;
}(SpeakeasyBase));
export { CreateSlotTypeRequest };
var CreateSlotTypeResponse = /** @class */ (function (_super) {
    __extends(CreateSlotTypeResponse, _super);
    function CreateSlotTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSlotTypeResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSlotTypeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateSlotTypeResponse)
    ], CreateSlotTypeResponse.prototype, "createSlotTypeResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSlotTypeResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSlotTypeResponse.prototype, "preconditionFailedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSlotTypeResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateSlotTypeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSlotTypeResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSlotTypeResponse.prototype, "validationException", void 0);
    return CreateSlotTypeResponse;
}(SpeakeasyBase));
export { CreateSlotTypeResponse };
