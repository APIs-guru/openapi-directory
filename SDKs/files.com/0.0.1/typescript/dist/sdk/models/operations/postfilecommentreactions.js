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
var PostFileCommentReactionsRequestBody = /** @class */ (function (_super) {
    __extends(PostFileCommentReactionsRequestBody, _super);
    function PostFileCommentReactionsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=emoji" }),
        __metadata("design:type", String)
    ], PostFileCommentReactionsRequestBody.prototype, "emoji", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=file_comment_id" }),
        __metadata("design:type", Number)
    ], PostFileCommentReactionsRequestBody.prototype, "fileCommentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=user_id" }),
        __metadata("design:type", Number)
    ], PostFileCommentReactionsRequestBody.prototype, "userId", void 0);
    return PostFileCommentReactionsRequestBody;
}(SpeakeasyBase));
export { PostFileCommentReactionsRequestBody };
var PostFileCommentReactionsRequest = /** @class */ (function (_super) {
    __extends(PostFileCommentReactionsRequest, _super);
    function PostFileCommentReactionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PostFileCommentReactionsRequestBody)
    ], PostFileCommentReactionsRequest.prototype, "request", void 0);
    return PostFileCommentReactionsRequest;
}(SpeakeasyBase));
export { PostFileCommentReactionsRequest };
var PostFileCommentReactionsResponse = /** @class */ (function (_super) {
    __extends(PostFileCommentReactionsResponse, _super);
    function PostFileCommentReactionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostFileCommentReactionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FileCommentReactionEntity)
    ], PostFileCommentReactionsResponse.prototype, "fileCommentReactionEntity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostFileCommentReactionsResponse.prototype, "statusCode", void 0);
    return PostFileCommentReactionsResponse;
}(SpeakeasyBase));
export { PostFileCommentReactionsResponse };
