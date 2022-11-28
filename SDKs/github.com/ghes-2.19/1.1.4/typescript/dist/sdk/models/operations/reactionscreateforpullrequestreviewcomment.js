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
var ReactionsCreateForPullRequestReviewCommentPathParams = /** @class */ (function (_super) {
    __extends(ReactionsCreateForPullRequestReviewCommentPathParams, _super);
    function ReactionsCreateForPullRequestReviewCommentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment_id" }),
        __metadata("design:type", Number)
    ], ReactionsCreateForPullRequestReviewCommentPathParams.prototype, "commentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReactionsCreateForPullRequestReviewCommentPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReactionsCreateForPullRequestReviewCommentPathParams.prototype, "repo", void 0);
    return ReactionsCreateForPullRequestReviewCommentPathParams;
}(SpeakeasyBase));
export { ReactionsCreateForPullRequestReviewCommentPathParams };
export var ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum;
(function (ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum) {
    ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum["Plus1"] = "+1";
    ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum["Minus1"] = "-1";
    ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum["Laugh"] = "laugh";
    ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum["Confused"] = "confused";
    ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum["Heart"] = "heart";
    ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum["Hooray"] = "hooray";
    ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum["Rocket"] = "rocket";
    ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum["Eyes"] = "eyes";
})(ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum || (ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum = {}));
var ReactionsCreateForPullRequestReviewCommentRequestBody = /** @class */ (function (_super) {
    __extends(ReactionsCreateForPullRequestReviewCommentRequestBody, _super);
    function ReactionsCreateForPullRequestReviewCommentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], ReactionsCreateForPullRequestReviewCommentRequestBody.prototype, "content", void 0);
    return ReactionsCreateForPullRequestReviewCommentRequestBody;
}(SpeakeasyBase));
export { ReactionsCreateForPullRequestReviewCommentRequestBody };
var ReactionsCreateForPullRequestReviewComment415ApplicationJson = /** @class */ (function (_super) {
    __extends(ReactionsCreateForPullRequestReviewComment415ApplicationJson, _super);
    function ReactionsCreateForPullRequestReviewComment415ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], ReactionsCreateForPullRequestReviewComment415ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ReactionsCreateForPullRequestReviewComment415ApplicationJson.prototype, "message", void 0);
    return ReactionsCreateForPullRequestReviewComment415ApplicationJson;
}(SpeakeasyBase));
export { ReactionsCreateForPullRequestReviewComment415ApplicationJson };
var ReactionsCreateForPullRequestReviewCommentRequest = /** @class */ (function (_super) {
    __extends(ReactionsCreateForPullRequestReviewCommentRequest, _super);
    function ReactionsCreateForPullRequestReviewCommentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReactionsCreateForPullRequestReviewCommentPathParams)
    ], ReactionsCreateForPullRequestReviewCommentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReactionsCreateForPullRequestReviewCommentRequestBody)
    ], ReactionsCreateForPullRequestReviewCommentRequest.prototype, "request", void 0);
    return ReactionsCreateForPullRequestReviewCommentRequest;
}(SpeakeasyBase));
export { ReactionsCreateForPullRequestReviewCommentRequest };
var ReactionsCreateForPullRequestReviewCommentResponse = /** @class */ (function (_super) {
    __extends(ReactionsCreateForPullRequestReviewCommentResponse, _super);
    function ReactionsCreateForPullRequestReviewCommentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReactionsCreateForPullRequestReviewCommentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReactionsCreateForPullRequestReviewCommentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Reaction)
    ], ReactionsCreateForPullRequestReviewCommentResponse.prototype, "reaction", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReactionsCreateForPullRequestReviewComment415ApplicationJson)
    ], ReactionsCreateForPullRequestReviewCommentResponse.prototype, "reactionsCreateForPullRequestReviewComment415ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], ReactionsCreateForPullRequestReviewCommentResponse.prototype, "validationError", void 0);
    return ReactionsCreateForPullRequestReviewCommentResponse;
}(SpeakeasyBase));
export { ReactionsCreateForPullRequestReviewCommentResponse };
