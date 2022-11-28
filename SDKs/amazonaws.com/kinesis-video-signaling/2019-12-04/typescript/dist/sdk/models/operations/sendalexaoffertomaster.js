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
var SendAlexaOfferToMasterHeaders = /** @class */ (function (_super) {
    __extends(SendAlexaOfferToMasterHeaders, _super);
    function SendAlexaOfferToMasterHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], SendAlexaOfferToMasterHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], SendAlexaOfferToMasterHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], SendAlexaOfferToMasterHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], SendAlexaOfferToMasterHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], SendAlexaOfferToMasterHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], SendAlexaOfferToMasterHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], SendAlexaOfferToMasterHeaders.prototype, "xAmzSignedHeaders", void 0);
    return SendAlexaOfferToMasterHeaders;
}(SpeakeasyBase));
export { SendAlexaOfferToMasterHeaders };
var SendAlexaOfferToMasterRequestBody = /** @class */ (function (_super) {
    __extends(SendAlexaOfferToMasterRequestBody, _super);
    function SendAlexaOfferToMasterRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChannelARN" }),
        __metadata("design:type", String)
    ], SendAlexaOfferToMasterRequestBody.prototype, "channelArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MessagePayload" }),
        __metadata("design:type", String)
    ], SendAlexaOfferToMasterRequestBody.prototype, "messagePayload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SenderClientId" }),
        __metadata("design:type", String)
    ], SendAlexaOfferToMasterRequestBody.prototype, "senderClientId", void 0);
    return SendAlexaOfferToMasterRequestBody;
}(SpeakeasyBase));
export { SendAlexaOfferToMasterRequestBody };
var SendAlexaOfferToMasterRequest = /** @class */ (function (_super) {
    __extends(SendAlexaOfferToMasterRequest, _super);
    function SendAlexaOfferToMasterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SendAlexaOfferToMasterHeaders)
    ], SendAlexaOfferToMasterRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", SendAlexaOfferToMasterRequestBody)
    ], SendAlexaOfferToMasterRequest.prototype, "request", void 0);
    return SendAlexaOfferToMasterRequest;
}(SpeakeasyBase));
export { SendAlexaOfferToMasterRequest };
var SendAlexaOfferToMasterResponse = /** @class */ (function (_super) {
    __extends(SendAlexaOfferToMasterResponse, _super);
    function SendAlexaOfferToMasterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SendAlexaOfferToMasterResponse.prototype, "clientLimitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SendAlexaOfferToMasterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SendAlexaOfferToMasterResponse.prototype, "invalidArgumentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SendAlexaOfferToMasterResponse.prototype, "notAuthorizedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SendAlexaOfferToMasterResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SendAlexaOfferToMasterResponse)
    ], SendAlexaOfferToMasterResponse.prototype, "sendAlexaOfferToMasterResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SendAlexaOfferToMasterResponse.prototype, "statusCode", void 0);
    return SendAlexaOfferToMasterResponse;
}(SpeakeasyBase));
export { SendAlexaOfferToMasterResponse };
