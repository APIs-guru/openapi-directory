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
var PullsDismissReviewPathParams = /** @class */ (function (_super) {
    __extends(PullsDismissReviewPathParams, _super);
    function PullsDismissReviewPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], PullsDismissReviewPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pull_number" }),
        __metadata("design:type", Number)
    ], PullsDismissReviewPathParams.prototype, "pullNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], PullsDismissReviewPathParams.prototype, "repo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=review_id" }),
        __metadata("design:type", Number)
    ], PullsDismissReviewPathParams.prototype, "reviewId", void 0);
    return PullsDismissReviewPathParams;
}(SpeakeasyBase));
export { PullsDismissReviewPathParams };
var PullsDismissReviewRequestBody = /** @class */ (function (_super) {
    __extends(PullsDismissReviewRequestBody, _super);
    function PullsDismissReviewRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=event" }),
        __metadata("design:type", String)
    ], PullsDismissReviewRequestBody.prototype, "event", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PullsDismissReviewRequestBody.prototype, "message", void 0);
    return PullsDismissReviewRequestBody;
}(SpeakeasyBase));
export { PullsDismissReviewRequestBody };
var PullsDismissReviewRequest = /** @class */ (function (_super) {
    __extends(PullsDismissReviewRequest, _super);
    function PullsDismissReviewRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PullsDismissReviewPathParams)
    ], PullsDismissReviewRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PullsDismissReviewRequestBody)
    ], PullsDismissReviewRequest.prototype, "request", void 0);
    return PullsDismissReviewRequest;
}(SpeakeasyBase));
export { PullsDismissReviewRequest };
var PullsDismissReviewResponse = /** @class */ (function (_super) {
    __extends(PullsDismissReviewResponse, _super);
    function PullsDismissReviewResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PullsDismissReviewResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PullsDismissReviewResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], PullsDismissReviewResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PullRequestReview)
    ], PullsDismissReviewResponse.prototype, "pullRequestReview", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationErrorSimple)
    ], PullsDismissReviewResponse.prototype, "validationErrorSimple", void 0);
    return PullsDismissReviewResponse;
}(SpeakeasyBase));
export { PullsDismissReviewResponse };
