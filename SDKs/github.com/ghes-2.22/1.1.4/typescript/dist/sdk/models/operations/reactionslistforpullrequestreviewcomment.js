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
var ReactionsListForPullRequestReviewCommentPathParams = /** @class */ (function (_super) {
    __extends(ReactionsListForPullRequestReviewCommentPathParams, _super);
    function ReactionsListForPullRequestReviewCommentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment_id" }),
        __metadata("design:type", Number)
    ], ReactionsListForPullRequestReviewCommentPathParams.prototype, "commentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReactionsListForPullRequestReviewCommentPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReactionsListForPullRequestReviewCommentPathParams.prototype, "repo", void 0);
    return ReactionsListForPullRequestReviewCommentPathParams;
}(SpeakeasyBase));
export { ReactionsListForPullRequestReviewCommentPathParams };
export var ReactionsListForPullRequestReviewCommentContentEnum;
(function (ReactionsListForPullRequestReviewCommentContentEnum) {
    ReactionsListForPullRequestReviewCommentContentEnum["Plus1"] = "+1";
    ReactionsListForPullRequestReviewCommentContentEnum["Minus1"] = "-1";
    ReactionsListForPullRequestReviewCommentContentEnum["Laugh"] = "laugh";
    ReactionsListForPullRequestReviewCommentContentEnum["Confused"] = "confused";
    ReactionsListForPullRequestReviewCommentContentEnum["Heart"] = "heart";
    ReactionsListForPullRequestReviewCommentContentEnum["Hooray"] = "hooray";
    ReactionsListForPullRequestReviewCommentContentEnum["Rocket"] = "rocket";
    ReactionsListForPullRequestReviewCommentContentEnum["Eyes"] = "eyes";
})(ReactionsListForPullRequestReviewCommentContentEnum || (ReactionsListForPullRequestReviewCommentContentEnum = {}));
var ReactionsListForPullRequestReviewCommentQueryParams = /** @class */ (function (_super) {
    __extends(ReactionsListForPullRequestReviewCommentQueryParams, _super);
    function ReactionsListForPullRequestReviewCommentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=content" }),
        __metadata("design:type", String)
    ], ReactionsListForPullRequestReviewCommentQueryParams.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ReactionsListForPullRequestReviewCommentQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ReactionsListForPullRequestReviewCommentQueryParams.prototype, "perPage", void 0);
    return ReactionsListForPullRequestReviewCommentQueryParams;
}(SpeakeasyBase));
export { ReactionsListForPullRequestReviewCommentQueryParams };
var ReactionsListForPullRequestReviewComment415ApplicationJson = /** @class */ (function (_super) {
    __extends(ReactionsListForPullRequestReviewComment415ApplicationJson, _super);
    function ReactionsListForPullRequestReviewComment415ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], ReactionsListForPullRequestReviewComment415ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ReactionsListForPullRequestReviewComment415ApplicationJson.prototype, "message", void 0);
    return ReactionsListForPullRequestReviewComment415ApplicationJson;
}(SpeakeasyBase));
export { ReactionsListForPullRequestReviewComment415ApplicationJson };
var ReactionsListForPullRequestReviewCommentRequest = /** @class */ (function (_super) {
    __extends(ReactionsListForPullRequestReviewCommentRequest, _super);
    function ReactionsListForPullRequestReviewCommentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReactionsListForPullRequestReviewCommentPathParams)
    ], ReactionsListForPullRequestReviewCommentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReactionsListForPullRequestReviewCommentQueryParams)
    ], ReactionsListForPullRequestReviewCommentRequest.prototype, "queryParams", void 0);
    return ReactionsListForPullRequestReviewCommentRequest;
}(SpeakeasyBase));
export { ReactionsListForPullRequestReviewCommentRequest };
var ReactionsListForPullRequestReviewCommentResponse = /** @class */ (function (_super) {
    __extends(ReactionsListForPullRequestReviewCommentResponse, _super);
    function ReactionsListForPullRequestReviewCommentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReactionsListForPullRequestReviewCommentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ReactionsListForPullRequestReviewCommentResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReactionsListForPullRequestReviewCommentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ReactionsListForPullRequestReviewCommentResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Reaction }),
        __metadata("design:type", Array)
    ], ReactionsListForPullRequestReviewCommentResponse.prototype, "reactions", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReactionsListForPullRequestReviewComment415ApplicationJson)
    ], ReactionsListForPullRequestReviewCommentResponse.prototype, "reactionsListForPullRequestReviewComment415ApplicationJsonObject", void 0);
    return ReactionsListForPullRequestReviewCommentResponse;
}(SpeakeasyBase));
export { ReactionsListForPullRequestReviewCommentResponse };
