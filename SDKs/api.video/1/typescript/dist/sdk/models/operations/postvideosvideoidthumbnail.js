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
var PostVideosVideoIdThumbnailPathParams = /** @class */ (function (_super) {
    __extends(PostVideosVideoIdThumbnailPathParams, _super);
    function PostVideosVideoIdThumbnailPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=videoId" }),
        __metadata("design:type", String)
    ], PostVideosVideoIdThumbnailPathParams.prototype, "videoId", void 0);
    return PostVideosVideoIdThumbnailPathParams;
}(SpeakeasyBase));
export { PostVideosVideoIdThumbnailPathParams };
var PostVideosVideoIdThumbnailSecurity = /** @class */ (function (_super) {
    __extends(PostVideosVideoIdThumbnailSecurity, _super);
    function PostVideosVideoIdThumbnailSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], PostVideosVideoIdThumbnailSecurity.prototype, "bearerAuth", void 0);
    return PostVideosVideoIdThumbnailSecurity;
}(SpeakeasyBase));
export { PostVideosVideoIdThumbnailSecurity };
var PostVideosVideoIdThumbnailRequest = /** @class */ (function (_super) {
    __extends(PostVideosVideoIdThumbnailRequest, _super);
    function PostVideosVideoIdThumbnailRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostVideosVideoIdThumbnailPathParams)
    ], PostVideosVideoIdThumbnailRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", shared.VideoThumbnailUploadPayload)
    ], PostVideosVideoIdThumbnailRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostVideosVideoIdThumbnailSecurity)
    ], PostVideosVideoIdThumbnailRequest.prototype, "security", void 0);
    return PostVideosVideoIdThumbnailRequest;
}(SpeakeasyBase));
export { PostVideosVideoIdThumbnailRequest };
var PostVideosVideoIdThumbnailResponse = /** @class */ (function (_super) {
    __extends(PostVideosVideoIdThumbnailResponse, _super);
    function PostVideosVideoIdThumbnailResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostVideosVideoIdThumbnailResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostVideosVideoIdThumbnailResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequest)
    ], PostVideosVideoIdThumbnailResponse.prototype, "badRequest", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFound)
    ], PostVideosVideoIdThumbnailResponse.prototype, "notFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Video)
    ], PostVideosVideoIdThumbnailResponse.prototype, "video", void 0);
    return PostVideosVideoIdThumbnailResponse;
}(SpeakeasyBase));
export { PostVideosVideoIdThumbnailResponse };
