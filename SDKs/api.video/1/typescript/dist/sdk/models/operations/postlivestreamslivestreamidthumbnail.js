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
var PostLiveStreamsLiveStreamIdThumbnailPathParams = /** @class */ (function (_super) {
    __extends(PostLiveStreamsLiveStreamIdThumbnailPathParams, _super);
    function PostLiveStreamsLiveStreamIdThumbnailPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=liveStreamId" }),
        __metadata("design:type", String)
    ], PostLiveStreamsLiveStreamIdThumbnailPathParams.prototype, "liveStreamId", void 0);
    return PostLiveStreamsLiveStreamIdThumbnailPathParams;
}(SpeakeasyBase));
export { PostLiveStreamsLiveStreamIdThumbnailPathParams };
var PostLiveStreamsLiveStreamIdThumbnailSecurity = /** @class */ (function (_super) {
    __extends(PostLiveStreamsLiveStreamIdThumbnailSecurity, _super);
    function PostLiveStreamsLiveStreamIdThumbnailSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], PostLiveStreamsLiveStreamIdThumbnailSecurity.prototype, "bearerAuth", void 0);
    return PostLiveStreamsLiveStreamIdThumbnailSecurity;
}(SpeakeasyBase));
export { PostLiveStreamsLiveStreamIdThumbnailSecurity };
var PostLiveStreamsLiveStreamIdThumbnailRequest = /** @class */ (function (_super) {
    __extends(PostLiveStreamsLiveStreamIdThumbnailRequest, _super);
    function PostLiveStreamsLiveStreamIdThumbnailRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLiveStreamsLiveStreamIdThumbnailPathParams)
    ], PostLiveStreamsLiveStreamIdThumbnailRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", shared.LiveStreamThumbnailUploadPayload)
    ], PostLiveStreamsLiveStreamIdThumbnailRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLiveStreamsLiveStreamIdThumbnailSecurity)
    ], PostLiveStreamsLiveStreamIdThumbnailRequest.prototype, "security", void 0);
    return PostLiveStreamsLiveStreamIdThumbnailRequest;
}(SpeakeasyBase));
export { PostLiveStreamsLiveStreamIdThumbnailRequest };
var PostLiveStreamsLiveStreamIdThumbnailResponse = /** @class */ (function (_super) {
    __extends(PostLiveStreamsLiveStreamIdThumbnailResponse, _super);
    function PostLiveStreamsLiveStreamIdThumbnailResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostLiveStreamsLiveStreamIdThumbnailResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostLiveStreamsLiveStreamIdThumbnailResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequest)
    ], PostLiveStreamsLiveStreamIdThumbnailResponse.prototype, "badRequest", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LiveStream)
    ], PostLiveStreamsLiveStreamIdThumbnailResponse.prototype, "liveStream", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFound)
    ], PostLiveStreamsLiveStreamIdThumbnailResponse.prototype, "notFound", void 0);
    return PostLiveStreamsLiveStreamIdThumbnailResponse;
}(SpeakeasyBase));
export { PostLiveStreamsLiveStreamIdThumbnailResponse };
