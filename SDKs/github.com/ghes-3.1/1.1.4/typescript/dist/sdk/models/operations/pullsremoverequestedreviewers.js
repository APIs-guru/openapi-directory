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
var PullsRemoveRequestedReviewersPathParams = /** @class */ (function (_super) {
    __extends(PullsRemoveRequestedReviewersPathParams, _super);
    function PullsRemoveRequestedReviewersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], PullsRemoveRequestedReviewersPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pull_number" }),
        __metadata("design:type", Number)
    ], PullsRemoveRequestedReviewersPathParams.prototype, "pullNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], PullsRemoveRequestedReviewersPathParams.prototype, "repo", void 0);
    return PullsRemoveRequestedReviewersPathParams;
}(SpeakeasyBase));
export { PullsRemoveRequestedReviewersPathParams };
var PullsRemoveRequestedReviewersRequestBody = /** @class */ (function (_super) {
    __extends(PullsRemoveRequestedReviewersRequestBody, _super);
    function PullsRemoveRequestedReviewersRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reviewers" }),
        __metadata("design:type", Array)
    ], PullsRemoveRequestedReviewersRequestBody.prototype, "reviewers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=team_reviewers" }),
        __metadata("design:type", Array)
    ], PullsRemoveRequestedReviewersRequestBody.prototype, "teamReviewers", void 0);
    return PullsRemoveRequestedReviewersRequestBody;
}(SpeakeasyBase));
export { PullsRemoveRequestedReviewersRequestBody };
var PullsRemoveRequestedReviewersRequest = /** @class */ (function (_super) {
    __extends(PullsRemoveRequestedReviewersRequest, _super);
    function PullsRemoveRequestedReviewersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PullsRemoveRequestedReviewersPathParams)
    ], PullsRemoveRequestedReviewersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PullsRemoveRequestedReviewersRequestBody)
    ], PullsRemoveRequestedReviewersRequest.prototype, "request", void 0);
    return PullsRemoveRequestedReviewersRequest;
}(SpeakeasyBase));
export { PullsRemoveRequestedReviewersRequest };
var PullsRemoveRequestedReviewersResponse = /** @class */ (function (_super) {
    __extends(PullsRemoveRequestedReviewersResponse, _super);
    function PullsRemoveRequestedReviewersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PullsRemoveRequestedReviewersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PullsRemoveRequestedReviewersResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PullRequestSimple)
    ], PullsRemoveRequestedReviewersResponse.prototype, "pullRequestSimple", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], PullsRemoveRequestedReviewersResponse.prototype, "validationError", void 0);
    return PullsRemoveRequestedReviewersResponse;
}(SpeakeasyBase));
export { PullsRemoveRequestedReviewersResponse };
