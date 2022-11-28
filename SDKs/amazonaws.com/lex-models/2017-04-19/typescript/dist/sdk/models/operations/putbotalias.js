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
var PutBotAliasPathParams = /** @class */ (function (_super) {
    __extends(PutBotAliasPathParams, _super);
    function PutBotAliasPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botName" }),
        __metadata("design:type", String)
    ], PutBotAliasPathParams.prototype, "botName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], PutBotAliasPathParams.prototype, "name", void 0);
    return PutBotAliasPathParams;
}(SpeakeasyBase));
export { PutBotAliasPathParams };
var PutBotAliasHeaders = /** @class */ (function (_super) {
    __extends(PutBotAliasHeaders, _super);
    function PutBotAliasHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutBotAliasHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutBotAliasHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutBotAliasHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutBotAliasHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutBotAliasHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutBotAliasHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutBotAliasHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutBotAliasHeaders;
}(SpeakeasyBase));
export { PutBotAliasHeaders };
// PutBotAliasRequestBodyConversationLogs
/**
 * Provides the settings needed for conversation logs.
**/
var PutBotAliasRequestBodyConversationLogs = /** @class */ (function (_super) {
    __extends(PutBotAliasRequestBodyConversationLogs, _super);
    function PutBotAliasRequestBodyConversationLogs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iamRoleArn" }),
        __metadata("design:type", String)
    ], PutBotAliasRequestBodyConversationLogs.prototype, "iamRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logSettings", elemType: shared.LogSettingsRequest }),
        __metadata("design:type", Array)
    ], PutBotAliasRequestBodyConversationLogs.prototype, "logSettings", void 0);
    return PutBotAliasRequestBodyConversationLogs;
}(SpeakeasyBase));
export { PutBotAliasRequestBodyConversationLogs };
var PutBotAliasRequestBody = /** @class */ (function (_super) {
    __extends(PutBotAliasRequestBody, _super);
    function PutBotAliasRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=botVersion" }),
        __metadata("design:type", String)
    ], PutBotAliasRequestBody.prototype, "botVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checksum" }),
        __metadata("design:type", String)
    ], PutBotAliasRequestBody.prototype, "checksum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversationLogs" }),
        __metadata("design:type", PutBotAliasRequestBodyConversationLogs)
    ], PutBotAliasRequestBody.prototype, "conversationLogs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PutBotAliasRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], PutBotAliasRequestBody.prototype, "tags", void 0);
    return PutBotAliasRequestBody;
}(SpeakeasyBase));
export { PutBotAliasRequestBody };
var PutBotAliasRequest = /** @class */ (function (_super) {
    __extends(PutBotAliasRequest, _super);
    function PutBotAliasRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutBotAliasPathParams)
    ], PutBotAliasRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutBotAliasHeaders)
    ], PutBotAliasRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutBotAliasRequestBody)
    ], PutBotAliasRequest.prototype, "request", void 0);
    return PutBotAliasRequest;
}(SpeakeasyBase));
export { PutBotAliasRequest };
var PutBotAliasResponse = /** @class */ (function (_super) {
    __extends(PutBotAliasResponse, _super);
    function PutBotAliasResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutBotAliasResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutBotAliasResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutBotAliasResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutBotAliasResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutBotAliasResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutBotAliasResponse.prototype, "preconditionFailedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PutBotAliasResponse)
    ], PutBotAliasResponse.prototype, "putBotAliasResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutBotAliasResponse.prototype, "statusCode", void 0);
    return PutBotAliasResponse;
}(SpeakeasyBase));
export { PutBotAliasResponse };
