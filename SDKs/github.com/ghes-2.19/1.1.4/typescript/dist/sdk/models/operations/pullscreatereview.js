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
var PullsCreateReviewPathParams = /** @class */ (function (_super) {
    __extends(PullsCreateReviewPathParams, _super);
    function PullsCreateReviewPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], PullsCreateReviewPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pull_number" }),
        __metadata("design:type", Number)
    ], PullsCreateReviewPathParams.prototype, "pullNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], PullsCreateReviewPathParams.prototype, "repo", void 0);
    return PullsCreateReviewPathParams;
}(SpeakeasyBase));
export { PullsCreateReviewPathParams };
var PullsCreateReviewRequestBodyComments = /** @class */ (function (_super) {
    __extends(PullsCreateReviewRequestBodyComments, _super);
    function PullsCreateReviewRequestBodyComments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], PullsCreateReviewRequestBodyComments.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line" }),
        __metadata("design:type", Number)
    ], PullsCreateReviewRequestBodyComments.prototype, "line", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], PullsCreateReviewRequestBodyComments.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=position" }),
        __metadata("design:type", Number)
    ], PullsCreateReviewRequestBodyComments.prototype, "position", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=side" }),
        __metadata("design:type", String)
    ], PullsCreateReviewRequestBodyComments.prototype, "side", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_line" }),
        __metadata("design:type", Number)
    ], PullsCreateReviewRequestBodyComments.prototype, "startLine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_side" }),
        __metadata("design:type", String)
    ], PullsCreateReviewRequestBodyComments.prototype, "startSide", void 0);
    return PullsCreateReviewRequestBodyComments;
}(SpeakeasyBase));
export { PullsCreateReviewRequestBodyComments };
export var PullsCreateReviewRequestBodyEventEnum;
(function (PullsCreateReviewRequestBodyEventEnum) {
    PullsCreateReviewRequestBodyEventEnum["Approve"] = "APPROVE";
    PullsCreateReviewRequestBodyEventEnum["RequestChanges"] = "REQUEST_CHANGES";
    PullsCreateReviewRequestBodyEventEnum["Comment"] = "COMMENT";
})(PullsCreateReviewRequestBodyEventEnum || (PullsCreateReviewRequestBodyEventEnum = {}));
var PullsCreateReviewRequestBody = /** @class */ (function (_super) {
    __extends(PullsCreateReviewRequestBody, _super);
    function PullsCreateReviewRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], PullsCreateReviewRequestBody.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments", elemType: PullsCreateReviewRequestBodyComments }),
        __metadata("design:type", Array)
    ], PullsCreateReviewRequestBody.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commit_id" }),
        __metadata("design:type", String)
    ], PullsCreateReviewRequestBody.prototype, "commitId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=event" }),
        __metadata("design:type", String)
    ], PullsCreateReviewRequestBody.prototype, "event", void 0);
    return PullsCreateReviewRequestBody;
}(SpeakeasyBase));
export { PullsCreateReviewRequestBody };
var PullsCreateReviewRequest = /** @class */ (function (_super) {
    __extends(PullsCreateReviewRequest, _super);
    function PullsCreateReviewRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PullsCreateReviewPathParams)
    ], PullsCreateReviewRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PullsCreateReviewRequestBody)
    ], PullsCreateReviewRequest.prototype, "request", void 0);
    return PullsCreateReviewRequest;
}(SpeakeasyBase));
export { PullsCreateReviewRequest };
var PullsCreateReviewResponse = /** @class */ (function (_super) {
    __extends(PullsCreateReviewResponse, _super);
    function PullsCreateReviewResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PullsCreateReviewResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PullsCreateReviewResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], PullsCreateReviewResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PullRequestReview)
    ], PullsCreateReviewResponse.prototype, "pullRequestReview", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationErrorSimple)
    ], PullsCreateReviewResponse.prototype, "validationErrorSimple", void 0);
    return PullsCreateReviewResponse;
}(SpeakeasyBase));
export { PullsCreateReviewResponse };
