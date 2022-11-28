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
var PullsUpdateReviewPathParams = /** @class */ (function (_super) {
    __extends(PullsUpdateReviewPathParams, _super);
    function PullsUpdateReviewPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], PullsUpdateReviewPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pull_number" }),
        __metadata("design:type", Number)
    ], PullsUpdateReviewPathParams.prototype, "pullNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], PullsUpdateReviewPathParams.prototype, "repo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=review_id" }),
        __metadata("design:type", Number)
    ], PullsUpdateReviewPathParams.prototype, "reviewId", void 0);
    return PullsUpdateReviewPathParams;
}(SpeakeasyBase));
export { PullsUpdateReviewPathParams };
var PullsUpdateReviewRequestBody = /** @class */ (function (_super) {
    __extends(PullsUpdateReviewRequestBody, _super);
    function PullsUpdateReviewRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], PullsUpdateReviewRequestBody.prototype, "body", void 0);
    return PullsUpdateReviewRequestBody;
}(SpeakeasyBase));
export { PullsUpdateReviewRequestBody };
var PullsUpdateReviewRequest = /** @class */ (function (_super) {
    __extends(PullsUpdateReviewRequest, _super);
    function PullsUpdateReviewRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PullsUpdateReviewPathParams)
    ], PullsUpdateReviewRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PullsUpdateReviewRequestBody)
    ], PullsUpdateReviewRequest.prototype, "request", void 0);
    return PullsUpdateReviewRequest;
}(SpeakeasyBase));
export { PullsUpdateReviewRequest };
var PullsUpdateReviewResponse = /** @class */ (function (_super) {
    __extends(PullsUpdateReviewResponse, _super);
    function PullsUpdateReviewResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PullsUpdateReviewResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PullsUpdateReviewResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PullRequestReview)
    ], PullsUpdateReviewResponse.prototype, "pullRequestReview", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationErrorSimple)
    ], PullsUpdateReviewResponse.prototype, "validationErrorSimple", void 0);
    return PullsUpdateReviewResponse;
}(SpeakeasyBase));
export { PullsUpdateReviewResponse };
