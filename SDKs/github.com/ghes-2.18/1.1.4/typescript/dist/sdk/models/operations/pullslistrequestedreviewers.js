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
var PullsListRequestedReviewersPathParams = /** @class */ (function (_super) {
    __extends(PullsListRequestedReviewersPathParams, _super);
    function PullsListRequestedReviewersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], PullsListRequestedReviewersPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pull_number" }),
        __metadata("design:type", Number)
    ], PullsListRequestedReviewersPathParams.prototype, "pullNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], PullsListRequestedReviewersPathParams.prototype, "repo", void 0);
    return PullsListRequestedReviewersPathParams;
}(SpeakeasyBase));
export { PullsListRequestedReviewersPathParams };
var PullsListRequestedReviewersQueryParams = /** @class */ (function (_super) {
    __extends(PullsListRequestedReviewersQueryParams, _super);
    function PullsListRequestedReviewersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], PullsListRequestedReviewersQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], PullsListRequestedReviewersQueryParams.prototype, "perPage", void 0);
    return PullsListRequestedReviewersQueryParams;
}(SpeakeasyBase));
export { PullsListRequestedReviewersQueryParams };
var PullsListRequestedReviewersRequest = /** @class */ (function (_super) {
    __extends(PullsListRequestedReviewersRequest, _super);
    function PullsListRequestedReviewersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PullsListRequestedReviewersPathParams)
    ], PullsListRequestedReviewersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PullsListRequestedReviewersQueryParams)
    ], PullsListRequestedReviewersRequest.prototype, "queryParams", void 0);
    return PullsListRequestedReviewersRequest;
}(SpeakeasyBase));
export { PullsListRequestedReviewersRequest };
var PullsListRequestedReviewersResponse = /** @class */ (function (_super) {
    __extends(PullsListRequestedReviewersResponse, _super);
    function PullsListRequestedReviewersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PullsListRequestedReviewersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PullsListRequestedReviewersResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PullsListRequestedReviewersResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PullRequestReviewRequest)
    ], PullsListRequestedReviewersResponse.prototype, "pullRequestReviewRequest", void 0);
    return PullsListRequestedReviewersResponse;
}(SpeakeasyBase));
export { PullsListRequestedReviewersResponse };
