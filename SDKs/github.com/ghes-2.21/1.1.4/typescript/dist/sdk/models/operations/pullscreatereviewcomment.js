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
var PullsCreateReviewCommentPathParams = /** @class */ (function (_super) {
    __extends(PullsCreateReviewCommentPathParams, _super);
    function PullsCreateReviewCommentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], PullsCreateReviewCommentPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pull_number" }),
        __metadata("design:type", Number)
    ], PullsCreateReviewCommentPathParams.prototype, "pullNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], PullsCreateReviewCommentPathParams.prototype, "repo", void 0);
    return PullsCreateReviewCommentPathParams;
}(SpeakeasyBase));
export { PullsCreateReviewCommentPathParams };
export var PullsCreateReviewCommentRequestBodySideEnum;
(function (PullsCreateReviewCommentRequestBodySideEnum) {
    PullsCreateReviewCommentRequestBodySideEnum["Left"] = "LEFT";
    PullsCreateReviewCommentRequestBodySideEnum["Right"] = "RIGHT";
})(PullsCreateReviewCommentRequestBodySideEnum || (PullsCreateReviewCommentRequestBodySideEnum = {}));
export var PullsCreateReviewCommentRequestBodyStartSideEnum;
(function (PullsCreateReviewCommentRequestBodyStartSideEnum) {
    PullsCreateReviewCommentRequestBodyStartSideEnum["Left"] = "LEFT";
    PullsCreateReviewCommentRequestBodyStartSideEnum["Right"] = "RIGHT";
    PullsCreateReviewCommentRequestBodyStartSideEnum["Side"] = "side";
})(PullsCreateReviewCommentRequestBodyStartSideEnum || (PullsCreateReviewCommentRequestBodyStartSideEnum = {}));
var PullsCreateReviewCommentRequestBody = /** @class */ (function (_super) {
    __extends(PullsCreateReviewCommentRequestBody, _super);
    function PullsCreateReviewCommentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], PullsCreateReviewCommentRequestBody.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commit_id" }),
        __metadata("design:type", String)
    ], PullsCreateReviewCommentRequestBody.prototype, "commitId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=in_reply_to" }),
        __metadata("design:type", Number)
    ], PullsCreateReviewCommentRequestBody.prototype, "inReplyTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line" }),
        __metadata("design:type", Number)
    ], PullsCreateReviewCommentRequestBody.prototype, "line", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], PullsCreateReviewCommentRequestBody.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=position" }),
        __metadata("design:type", Number)
    ], PullsCreateReviewCommentRequestBody.prototype, "position", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=side" }),
        __metadata("design:type", String)
    ], PullsCreateReviewCommentRequestBody.prototype, "side", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_line" }),
        __metadata("design:type", Number)
    ], PullsCreateReviewCommentRequestBody.prototype, "startLine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_side" }),
        __metadata("design:type", String)
    ], PullsCreateReviewCommentRequestBody.prototype, "startSide", void 0);
    return PullsCreateReviewCommentRequestBody;
}(SpeakeasyBase));
export { PullsCreateReviewCommentRequestBody };
var PullsCreateReviewCommentRequest = /** @class */ (function (_super) {
    __extends(PullsCreateReviewCommentRequest, _super);
    function PullsCreateReviewCommentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PullsCreateReviewCommentPathParams)
    ], PullsCreateReviewCommentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PullsCreateReviewCommentRequestBody)
    ], PullsCreateReviewCommentRequest.prototype, "request", void 0);
    return PullsCreateReviewCommentRequest;
}(SpeakeasyBase));
export { PullsCreateReviewCommentRequest };
var PullsCreateReviewCommentResponse = /** @class */ (function (_super) {
    __extends(PullsCreateReviewCommentResponse, _super);
    function PullsCreateReviewCommentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PullsCreateReviewCommentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PullsCreateReviewCommentResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PullsCreateReviewCommentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], PullsCreateReviewCommentResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PullRequestReviewComment)
    ], PullsCreateReviewCommentResponse.prototype, "pullRequestReviewComment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], PullsCreateReviewCommentResponse.prototype, "validationError", void 0);
    return PullsCreateReviewCommentResponse;
}(SpeakeasyBase));
export { PullsCreateReviewCommentResponse };
