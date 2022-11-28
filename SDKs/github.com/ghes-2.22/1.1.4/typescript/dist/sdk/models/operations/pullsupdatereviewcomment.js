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
var PullsUpdateReviewCommentPathParams = /** @class */ (function (_super) {
    __extends(PullsUpdateReviewCommentPathParams, _super);
    function PullsUpdateReviewCommentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment_id" }),
        __metadata("design:type", Number)
    ], PullsUpdateReviewCommentPathParams.prototype, "commentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], PullsUpdateReviewCommentPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], PullsUpdateReviewCommentPathParams.prototype, "repo", void 0);
    return PullsUpdateReviewCommentPathParams;
}(SpeakeasyBase));
export { PullsUpdateReviewCommentPathParams };
var PullsUpdateReviewCommentRequestBody = /** @class */ (function (_super) {
    __extends(PullsUpdateReviewCommentRequestBody, _super);
    function PullsUpdateReviewCommentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], PullsUpdateReviewCommentRequestBody.prototype, "body", void 0);
    return PullsUpdateReviewCommentRequestBody;
}(SpeakeasyBase));
export { PullsUpdateReviewCommentRequestBody };
var PullsUpdateReviewCommentRequest = /** @class */ (function (_super) {
    __extends(PullsUpdateReviewCommentRequest, _super);
    function PullsUpdateReviewCommentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PullsUpdateReviewCommentPathParams)
    ], PullsUpdateReviewCommentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PullsUpdateReviewCommentRequestBody)
    ], PullsUpdateReviewCommentRequest.prototype, "request", void 0);
    return PullsUpdateReviewCommentRequest;
}(SpeakeasyBase));
export { PullsUpdateReviewCommentRequest };
var PullsUpdateReviewCommentResponse = /** @class */ (function (_super) {
    __extends(PullsUpdateReviewCommentResponse, _super);
    function PullsUpdateReviewCommentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PullsUpdateReviewCommentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PullsUpdateReviewCommentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PullRequestReviewComment)
    ], PullsUpdateReviewCommentResponse.prototype, "pullRequestReviewComment", void 0);
    return PullsUpdateReviewCommentResponse;
}(SpeakeasyBase));
export { PullsUpdateReviewCommentResponse };
