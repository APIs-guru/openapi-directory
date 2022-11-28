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
var PostVideosVideoIdSourcePathParams = /** @class */ (function (_super) {
    __extends(PostVideosVideoIdSourcePathParams, _super);
    function PostVideosVideoIdSourcePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=videoId" }),
        __metadata("design:type", String)
    ], PostVideosVideoIdSourcePathParams.prototype, "videoId", void 0);
    return PostVideosVideoIdSourcePathParams;
}(SpeakeasyBase));
export { PostVideosVideoIdSourcePathParams };
var PostVideosVideoIdSourceHeaders = /** @class */ (function (_super) {
    __extends(PostVideosVideoIdSourceHeaders, _super);
    function PostVideosVideoIdSourceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Range" }),
        __metadata("design:type", String)
    ], PostVideosVideoIdSourceHeaders.prototype, "contentRange", void 0);
    return PostVideosVideoIdSourceHeaders;
}(SpeakeasyBase));
export { PostVideosVideoIdSourceHeaders };
var PostVideosVideoIdSourceSecurity = /** @class */ (function (_super) {
    __extends(PostVideosVideoIdSourceSecurity, _super);
    function PostVideosVideoIdSourceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], PostVideosVideoIdSourceSecurity.prototype, "bearerAuth", void 0);
    return PostVideosVideoIdSourceSecurity;
}(SpeakeasyBase));
export { PostVideosVideoIdSourceSecurity };
var PostVideosVideoIdSourceRequest = /** @class */ (function (_super) {
    __extends(PostVideosVideoIdSourceRequest, _super);
    function PostVideosVideoIdSourceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostVideosVideoIdSourcePathParams)
    ], PostVideosVideoIdSourceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostVideosVideoIdSourceHeaders)
    ], PostVideosVideoIdSourceRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", shared.VideoUploadPayload)
    ], PostVideosVideoIdSourceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostVideosVideoIdSourceSecurity)
    ], PostVideosVideoIdSourceRequest.prototype, "security", void 0);
    return PostVideosVideoIdSourceRequest;
}(SpeakeasyBase));
export { PostVideosVideoIdSourceRequest };
var PostVideosVideoIdSourceResponse = /** @class */ (function (_super) {
    __extends(PostVideosVideoIdSourceResponse, _super);
    function PostVideosVideoIdSourceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostVideosVideoIdSourceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostVideosVideoIdSourceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequest)
    ], PostVideosVideoIdSourceResponse.prototype, "badRequest", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFound)
    ], PostVideosVideoIdSourceResponse.prototype, "notFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Video)
    ], PostVideosVideoIdSourceResponse.prototype, "video", void 0);
    return PostVideosVideoIdSourceResponse;
}(SpeakeasyBase));
export { PostVideosVideoIdSourceResponse };
