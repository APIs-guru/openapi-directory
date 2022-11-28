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
var GetHlsStreamingSessionUrlHeaders = /** @class */ (function (_super) {
    __extends(GetHlsStreamingSessionUrlHeaders, _super);
    function GetHlsStreamingSessionUrlHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetHlsStreamingSessionUrlHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetHlsStreamingSessionUrlHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetHlsStreamingSessionUrlHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetHlsStreamingSessionUrlHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetHlsStreamingSessionUrlHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetHlsStreamingSessionUrlHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetHlsStreamingSessionUrlHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetHlsStreamingSessionUrlHeaders;
}(SpeakeasyBase));
export { GetHlsStreamingSessionUrlHeaders };
export var GetHlsStreamingSessionUrlRequestBodyContainerFormatEnum;
(function (GetHlsStreamingSessionUrlRequestBodyContainerFormatEnum) {
    GetHlsStreamingSessionUrlRequestBodyContainerFormatEnum["FragmentedMp4"] = "FRAGMENTED_MP4";
    GetHlsStreamingSessionUrlRequestBodyContainerFormatEnum["MpegTs"] = "MPEG_TS";
})(GetHlsStreamingSessionUrlRequestBodyContainerFormatEnum || (GetHlsStreamingSessionUrlRequestBodyContainerFormatEnum = {}));
export var GetHlsStreamingSessionUrlRequestBodyDiscontinuityModeEnum;
(function (GetHlsStreamingSessionUrlRequestBodyDiscontinuityModeEnum) {
    GetHlsStreamingSessionUrlRequestBodyDiscontinuityModeEnum["Always"] = "ALWAYS";
    GetHlsStreamingSessionUrlRequestBodyDiscontinuityModeEnum["Never"] = "NEVER";
    GetHlsStreamingSessionUrlRequestBodyDiscontinuityModeEnum["OnDiscontinuity"] = "ON_DISCONTINUITY";
})(GetHlsStreamingSessionUrlRequestBodyDiscontinuityModeEnum || (GetHlsStreamingSessionUrlRequestBodyDiscontinuityModeEnum = {}));
export var GetHlsStreamingSessionUrlRequestBodyDisplayFragmentTimestampEnum;
(function (GetHlsStreamingSessionUrlRequestBodyDisplayFragmentTimestampEnum) {
    GetHlsStreamingSessionUrlRequestBodyDisplayFragmentTimestampEnum["Always"] = "ALWAYS";
    GetHlsStreamingSessionUrlRequestBodyDisplayFragmentTimestampEnum["Never"] = "NEVER";
})(GetHlsStreamingSessionUrlRequestBodyDisplayFragmentTimestampEnum || (GetHlsStreamingSessionUrlRequestBodyDisplayFragmentTimestampEnum = {}));
// GetHlsStreamingSessionUrlRequestBodyHlsFragmentSelector
/**
 * Contains the range of timestamps for the requested media, and the source of the timestamps.
**/
var GetHlsStreamingSessionUrlRequestBodyHlsFragmentSelector = /** @class */ (function (_super) {
    __extends(GetHlsStreamingSessionUrlRequestBodyHlsFragmentSelector, _super);
    function GetHlsStreamingSessionUrlRequestBodyHlsFragmentSelector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FragmentSelectorType" }),
        __metadata("design:type", String)
    ], GetHlsStreamingSessionUrlRequestBodyHlsFragmentSelector.prototype, "fragmentSelectorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TimestampRange" }),
        __metadata("design:type", shared.HlsTimestampRange)
    ], GetHlsStreamingSessionUrlRequestBodyHlsFragmentSelector.prototype, "timestampRange", void 0);
    return GetHlsStreamingSessionUrlRequestBodyHlsFragmentSelector;
}(SpeakeasyBase));
export { GetHlsStreamingSessionUrlRequestBodyHlsFragmentSelector };
export var GetHlsStreamingSessionUrlRequestBodyPlaybackModeEnum;
(function (GetHlsStreamingSessionUrlRequestBodyPlaybackModeEnum) {
    GetHlsStreamingSessionUrlRequestBodyPlaybackModeEnum["Live"] = "LIVE";
    GetHlsStreamingSessionUrlRequestBodyPlaybackModeEnum["LiveReplay"] = "LIVE_REPLAY";
    GetHlsStreamingSessionUrlRequestBodyPlaybackModeEnum["OnDemand"] = "ON_DEMAND";
})(GetHlsStreamingSessionUrlRequestBodyPlaybackModeEnum || (GetHlsStreamingSessionUrlRequestBodyPlaybackModeEnum = {}));
var GetHlsStreamingSessionUrlRequestBody = /** @class */ (function (_super) {
    __extends(GetHlsStreamingSessionUrlRequestBody, _super);
    function GetHlsStreamingSessionUrlRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContainerFormat" }),
        __metadata("design:type", String)
    ], GetHlsStreamingSessionUrlRequestBody.prototype, "containerFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DiscontinuityMode" }),
        __metadata("design:type", String)
    ], GetHlsStreamingSessionUrlRequestBody.prototype, "discontinuityMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisplayFragmentTimestamp" }),
        __metadata("design:type", String)
    ], GetHlsStreamingSessionUrlRequestBody.prototype, "displayFragmentTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Expires" }),
        __metadata("design:type", Number)
    ], GetHlsStreamingSessionUrlRequestBody.prototype, "expires", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HLSFragmentSelector" }),
        __metadata("design:type", GetHlsStreamingSessionUrlRequestBodyHlsFragmentSelector)
    ], GetHlsStreamingSessionUrlRequestBody.prototype, "hlsFragmentSelector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxMediaPlaylistFragmentResults" }),
        __metadata("design:type", Number)
    ], GetHlsStreamingSessionUrlRequestBody.prototype, "maxMediaPlaylistFragmentResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlaybackMode" }),
        __metadata("design:type", String)
    ], GetHlsStreamingSessionUrlRequestBody.prototype, "playbackMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StreamARN" }),
        __metadata("design:type", String)
    ], GetHlsStreamingSessionUrlRequestBody.prototype, "streamArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StreamName" }),
        __metadata("design:type", String)
    ], GetHlsStreamingSessionUrlRequestBody.prototype, "streamName", void 0);
    return GetHlsStreamingSessionUrlRequestBody;
}(SpeakeasyBase));
export { GetHlsStreamingSessionUrlRequestBody };
var GetHlsStreamingSessionUrlRequest = /** @class */ (function (_super) {
    __extends(GetHlsStreamingSessionUrlRequest, _super);
    function GetHlsStreamingSessionUrlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetHlsStreamingSessionUrlHeaders)
    ], GetHlsStreamingSessionUrlRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", GetHlsStreamingSessionUrlRequestBody)
    ], GetHlsStreamingSessionUrlRequest.prototype, "request", void 0);
    return GetHlsStreamingSessionUrlRequest;
}(SpeakeasyBase));
export { GetHlsStreamingSessionUrlRequest };
var GetHlsStreamingSessionUrlResponse = /** @class */ (function (_super) {
    __extends(GetHlsStreamingSessionUrlResponse, _super);
    function GetHlsStreamingSessionUrlResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetHlsStreamingSessionUrlResponse.prototype, "clientLimitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetHlsStreamingSessionUrlResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetHlsStreamingSessionUrlOutput)
    ], GetHlsStreamingSessionUrlResponse.prototype, "getHlsStreamingSessionUrlOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetHlsStreamingSessionUrlResponse.prototype, "invalidArgumentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetHlsStreamingSessionUrlResponse.prototype, "invalidCodecPrivateDataException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetHlsStreamingSessionUrlResponse.prototype, "missingCodecPrivateDataException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetHlsStreamingSessionUrlResponse.prototype, "noDataRetentionException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetHlsStreamingSessionUrlResponse.prototype, "notAuthorizedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetHlsStreamingSessionUrlResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetHlsStreamingSessionUrlResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetHlsStreamingSessionUrlResponse.prototype, "unsupportedStreamMediaTypeException", void 0);
    return GetHlsStreamingSessionUrlResponse;
}(SpeakeasyBase));
export { GetHlsStreamingSessionUrlResponse };
