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
var PostVideosIdCommentsCommentIdPathParams = /** @class */ (function (_super) {
    __extends(PostVideosIdCommentsCommentIdPathParams, _super);
    function PostVideosIdCommentsCommentIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commentId" }),
        __metadata("design:type", Number)
    ], PostVideosIdCommentsCommentIdPathParams.prototype, "commentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Object)
    ], PostVideosIdCommentsCommentIdPathParams.prototype, "id", void 0);
    return PostVideosIdCommentsCommentIdPathParams;
}(SpeakeasyBase));
export { PostVideosIdCommentsCommentIdPathParams };
var PostVideosIdCommentsCommentIdRequestBody = /** @class */ (function (_super) {
    __extends(PostVideosIdCommentsCommentIdRequestBody, _super);
    function PostVideosIdCommentsCommentIdRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", Map)
    ], PostVideosIdCommentsCommentIdRequestBody.prototype, "text", void 0);
    return PostVideosIdCommentsCommentIdRequestBody;
}(SpeakeasyBase));
export { PostVideosIdCommentsCommentIdRequestBody };
var PostVideosIdCommentsCommentIdSecurity = /** @class */ (function (_super) {
    __extends(PostVideosIdCommentsCommentIdSecurity, _super);
    function PostVideosIdCommentsCommentIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], PostVideosIdCommentsCommentIdSecurity.prototype, "oAuth2", void 0);
    return PostVideosIdCommentsCommentIdSecurity;
}(SpeakeasyBase));
export { PostVideosIdCommentsCommentIdSecurity };
var PostVideosIdCommentsCommentIdRequest = /** @class */ (function (_super) {
    __extends(PostVideosIdCommentsCommentIdRequest, _super);
    function PostVideosIdCommentsCommentIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostVideosIdCommentsCommentIdPathParams)
    ], PostVideosIdCommentsCommentIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostVideosIdCommentsCommentIdRequestBody)
    ], PostVideosIdCommentsCommentIdRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostVideosIdCommentsCommentIdSecurity)
    ], PostVideosIdCommentsCommentIdRequest.prototype, "security", void 0);
    return PostVideosIdCommentsCommentIdRequest;
}(SpeakeasyBase));
export { PostVideosIdCommentsCommentIdRequest };
var PostVideosIdCommentsCommentIdResponse = /** @class */ (function (_super) {
    __extends(PostVideosIdCommentsCommentIdResponse, _super);
    function PostVideosIdCommentsCommentIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PostVideosIdCommentsCommentIdResponse.prototype, "commentThreadPostResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostVideosIdCommentsCommentIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostVideosIdCommentsCommentIdResponse.prototype, "statusCode", void 0);
    return PostVideosIdCommentsCommentIdResponse;
}(SpeakeasyBase));
export { PostVideosIdCommentsCommentIdResponse };
