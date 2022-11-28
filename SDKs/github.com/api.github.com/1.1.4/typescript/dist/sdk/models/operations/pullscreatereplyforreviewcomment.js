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
var PullsCreateReplyForReviewCommentPathParams = /** @class */ (function (_super) {
    __extends(PullsCreateReplyForReviewCommentPathParams, _super);
    function PullsCreateReplyForReviewCommentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment_id" }),
        __metadata("design:type", Number)
    ], PullsCreateReplyForReviewCommentPathParams.prototype, "commentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], PullsCreateReplyForReviewCommentPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pull_number" }),
        __metadata("design:type", Number)
    ], PullsCreateReplyForReviewCommentPathParams.prototype, "pullNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], PullsCreateReplyForReviewCommentPathParams.prototype, "repo", void 0);
    return PullsCreateReplyForReviewCommentPathParams;
}(SpeakeasyBase));
export { PullsCreateReplyForReviewCommentPathParams };
var PullsCreateReplyForReviewCommentRequestBody = /** @class */ (function (_super) {
    __extends(PullsCreateReplyForReviewCommentRequestBody, _super);
    function PullsCreateReplyForReviewCommentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], PullsCreateReplyForReviewCommentRequestBody.prototype, "body", void 0);
    return PullsCreateReplyForReviewCommentRequestBody;
}(SpeakeasyBase));
export { PullsCreateReplyForReviewCommentRequestBody };
var PullsCreateReplyForReviewCommentRequest = /** @class */ (function (_super) {
    __extends(PullsCreateReplyForReviewCommentRequest, _super);
    function PullsCreateReplyForReviewCommentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PullsCreateReplyForReviewCommentPathParams)
    ], PullsCreateReplyForReviewCommentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PullsCreateReplyForReviewCommentRequestBody)
    ], PullsCreateReplyForReviewCommentRequest.prototype, "request", void 0);
    return PullsCreateReplyForReviewCommentRequest;
}(SpeakeasyBase));
export { PullsCreateReplyForReviewCommentRequest };
var PullsCreateReplyForReviewCommentResponse = /** @class */ (function (_super) {
    __extends(PullsCreateReplyForReviewCommentResponse, _super);
    function PullsCreateReplyForReviewCommentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PullsCreateReplyForReviewCommentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PullsCreateReplyForReviewCommentResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PullsCreateReplyForReviewCommentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], PullsCreateReplyForReviewCommentResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PullRequestReviewComment)
    ], PullsCreateReplyForReviewCommentResponse.prototype, "pullRequestReviewComment", void 0);
    return PullsCreateReplyForReviewCommentResponse;
}(SpeakeasyBase));
export { PullsCreateReplyForReviewCommentResponse };
