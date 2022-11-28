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
var PostVideosIdCommentThreadsPathParams = /** @class */ (function (_super) {
    __extends(PostVideosIdCommentThreadsPathParams, _super);
    function PostVideosIdCommentThreadsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Object)
    ], PostVideosIdCommentThreadsPathParams.prototype, "id", void 0);
    return PostVideosIdCommentThreadsPathParams;
}(SpeakeasyBase));
export { PostVideosIdCommentThreadsPathParams };
var PostVideosIdCommentThreadsRequestBody = /** @class */ (function (_super) {
    __extends(PostVideosIdCommentThreadsRequestBody, _super);
    function PostVideosIdCommentThreadsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", Map)
    ], PostVideosIdCommentThreadsRequestBody.prototype, "text", void 0);
    return PostVideosIdCommentThreadsRequestBody;
}(SpeakeasyBase));
export { PostVideosIdCommentThreadsRequestBody };
var PostVideosIdCommentThreadsSecurity = /** @class */ (function (_super) {
    __extends(PostVideosIdCommentThreadsSecurity, _super);
    function PostVideosIdCommentThreadsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], PostVideosIdCommentThreadsSecurity.prototype, "oAuth2", void 0);
    return PostVideosIdCommentThreadsSecurity;
}(SpeakeasyBase));
export { PostVideosIdCommentThreadsSecurity };
var PostVideosIdCommentThreadsRequest = /** @class */ (function (_super) {
    __extends(PostVideosIdCommentThreadsRequest, _super);
    function PostVideosIdCommentThreadsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostVideosIdCommentThreadsPathParams)
    ], PostVideosIdCommentThreadsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostVideosIdCommentThreadsRequestBody)
    ], PostVideosIdCommentThreadsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostVideosIdCommentThreadsSecurity)
    ], PostVideosIdCommentThreadsRequest.prototype, "security", void 0);
    return PostVideosIdCommentThreadsRequest;
}(SpeakeasyBase));
export { PostVideosIdCommentThreadsRequest };
var PostVideosIdCommentThreadsResponse = /** @class */ (function (_super) {
    __extends(PostVideosIdCommentThreadsResponse, _super);
    function PostVideosIdCommentThreadsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PostVideosIdCommentThreadsResponse.prototype, "commentThreadPostResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostVideosIdCommentThreadsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostVideosIdCommentThreadsResponse.prototype, "statusCode", void 0);
    return PostVideosIdCommentThreadsResponse;
}(SpeakeasyBase));
export { PostVideosIdCommentThreadsResponse };
