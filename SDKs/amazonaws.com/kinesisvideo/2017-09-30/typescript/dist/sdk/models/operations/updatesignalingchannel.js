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
var UpdateSignalingChannelHeaders = /** @class */ (function (_super) {
    __extends(UpdateSignalingChannelHeaders, _super);
    function UpdateSignalingChannelHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateSignalingChannelHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateSignalingChannelHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateSignalingChannelHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateSignalingChannelHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateSignalingChannelHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateSignalingChannelHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateSignalingChannelHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateSignalingChannelHeaders;
}(SpeakeasyBase));
export { UpdateSignalingChannelHeaders };
// UpdateSignalingChannelRequestBodySingleMasterConfiguration
/**
 * A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type.
**/
var UpdateSignalingChannelRequestBodySingleMasterConfiguration = /** @class */ (function (_super) {
    __extends(UpdateSignalingChannelRequestBodySingleMasterConfiguration, _super);
    function UpdateSignalingChannelRequestBodySingleMasterConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MessageTtlSeconds" }),
        __metadata("design:type", Number)
    ], UpdateSignalingChannelRequestBodySingleMasterConfiguration.prototype, "messageTtlSeconds", void 0);
    return UpdateSignalingChannelRequestBodySingleMasterConfiguration;
}(SpeakeasyBase));
export { UpdateSignalingChannelRequestBodySingleMasterConfiguration };
var UpdateSignalingChannelRequestBody = /** @class */ (function (_super) {
    __extends(UpdateSignalingChannelRequestBody, _super);
    function UpdateSignalingChannelRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChannelARN" }),
        __metadata("design:type", String)
    ], UpdateSignalingChannelRequestBody.prototype, "channelArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrentVersion" }),
        __metadata("design:type", String)
    ], UpdateSignalingChannelRequestBody.prototype, "currentVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SingleMasterConfiguration" }),
        __metadata("design:type", UpdateSignalingChannelRequestBodySingleMasterConfiguration)
    ], UpdateSignalingChannelRequestBody.prototype, "singleMasterConfiguration", void 0);
    return UpdateSignalingChannelRequestBody;
}(SpeakeasyBase));
export { UpdateSignalingChannelRequestBody };
var UpdateSignalingChannelRequest = /** @class */ (function (_super) {
    __extends(UpdateSignalingChannelRequest, _super);
    function UpdateSignalingChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSignalingChannelHeaders)
    ], UpdateSignalingChannelRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateSignalingChannelRequestBody)
    ], UpdateSignalingChannelRequest.prototype, "request", void 0);
    return UpdateSignalingChannelRequest;
}(SpeakeasyBase));
export { UpdateSignalingChannelRequest };
var UpdateSignalingChannelResponse = /** @class */ (function (_super) {
    __extends(UpdateSignalingChannelResponse, _super);
    function UpdateSignalingChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSignalingChannelResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSignalingChannelResponse.prototype, "clientLimitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateSignalingChannelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSignalingChannelResponse.prototype, "invalidArgumentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSignalingChannelResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSignalingChannelResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateSignalingChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateSignalingChannelResponse.prototype, "updateSignalingChannelOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSignalingChannelResponse.prototype, "versionMismatchException", void 0);
    return UpdateSignalingChannelResponse;
}(SpeakeasyBase));
export { UpdateSignalingChannelResponse };
