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
var PullsCreateReviewCommentAlternativePathParams = /** @class */ (function (_super) {
    __extends(PullsCreateReviewCommentAlternativePathParams, _super);
    function PullsCreateReviewCommentAlternativePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], PullsCreateReviewCommentAlternativePathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pull_number" }),
        __metadata("design:type", Number)
    ], PullsCreateReviewCommentAlternativePathParams.prototype, "pullNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], PullsCreateReviewCommentAlternativePathParams.prototype, "repo", void 0);
    return PullsCreateReviewCommentAlternativePathParams;
}(SpeakeasyBase));
export { PullsCreateReviewCommentAlternativePathParams };
var PullsCreateReviewCommentAlternativeRequestBody = /** @class */ (function (_super) {
    __extends(PullsCreateReviewCommentAlternativeRequestBody, _super);
    function PullsCreateReviewCommentAlternativeRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], PullsCreateReviewCommentAlternativeRequestBody.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=in_reply_to" }),
        __metadata("design:type", Number)
    ], PullsCreateReviewCommentAlternativeRequestBody.prototype, "inReplyTo", void 0);
    return PullsCreateReviewCommentAlternativeRequestBody;
}(SpeakeasyBase));
export { PullsCreateReviewCommentAlternativeRequestBody };
var PullsCreateReviewCommentAlternativeRequest = /** @class */ (function (_super) {
    __extends(PullsCreateReviewCommentAlternativeRequest, _super);
    function PullsCreateReviewCommentAlternativeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PullsCreateReviewCommentAlternativePathParams)
    ], PullsCreateReviewCommentAlternativeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PullsCreateReviewCommentAlternativeRequestBody)
    ], PullsCreateReviewCommentAlternativeRequest.prototype, "request", void 0);
    return PullsCreateReviewCommentAlternativeRequest;
}(SpeakeasyBase));
export { PullsCreateReviewCommentAlternativeRequest };
var PullsCreateReviewCommentAlternativeResponse = /** @class */ (function (_super) {
    __extends(PullsCreateReviewCommentAlternativeResponse, _super);
    function PullsCreateReviewCommentAlternativeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PullsCreateReviewCommentAlternativeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PullsCreateReviewCommentAlternativeResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PullsCreateReviewCommentAlternativeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyReviewComment)
    ], PullsCreateReviewCommentAlternativeResponse.prototype, "legacyReviewComment", void 0);
    return PullsCreateReviewCommentAlternativeResponse;
}(SpeakeasyBase));
export { PullsCreateReviewCommentAlternativeResponse };
