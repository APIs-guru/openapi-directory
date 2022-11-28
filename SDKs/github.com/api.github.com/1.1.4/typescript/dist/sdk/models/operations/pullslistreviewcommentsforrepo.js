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
var PullsListReviewCommentsForRepoPathParams = /** @class */ (function (_super) {
    __extends(PullsListReviewCommentsForRepoPathParams, _super);
    function PullsListReviewCommentsForRepoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], PullsListReviewCommentsForRepoPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], PullsListReviewCommentsForRepoPathParams.prototype, "repo", void 0);
    return PullsListReviewCommentsForRepoPathParams;
}(SpeakeasyBase));
export { PullsListReviewCommentsForRepoPathParams };
export var PullsListReviewCommentsForRepoDirectionEnum;
(function (PullsListReviewCommentsForRepoDirectionEnum) {
    PullsListReviewCommentsForRepoDirectionEnum["Asc"] = "asc";
    PullsListReviewCommentsForRepoDirectionEnum["Desc"] = "desc";
})(PullsListReviewCommentsForRepoDirectionEnum || (PullsListReviewCommentsForRepoDirectionEnum = {}));
export var PullsListReviewCommentsForRepoSortEnum;
(function (PullsListReviewCommentsForRepoSortEnum) {
    PullsListReviewCommentsForRepoSortEnum["Created"] = "created";
    PullsListReviewCommentsForRepoSortEnum["Updated"] = "updated";
    PullsListReviewCommentsForRepoSortEnum["CreatedAt"] = "created_at";
})(PullsListReviewCommentsForRepoSortEnum || (PullsListReviewCommentsForRepoSortEnum = {}));
var PullsListReviewCommentsForRepoQueryParams = /** @class */ (function (_super) {
    __extends(PullsListReviewCommentsForRepoQueryParams, _super);
    function PullsListReviewCommentsForRepoQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], PullsListReviewCommentsForRepoQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], PullsListReviewCommentsForRepoQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], PullsListReviewCommentsForRepoQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" }),
        __metadata("design:type", String)
    ], PullsListReviewCommentsForRepoQueryParams.prototype, "since", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], PullsListReviewCommentsForRepoQueryParams.prototype, "sort", void 0);
    return PullsListReviewCommentsForRepoQueryParams;
}(SpeakeasyBase));
export { PullsListReviewCommentsForRepoQueryParams };
var PullsListReviewCommentsForRepoRequest = /** @class */ (function (_super) {
    __extends(PullsListReviewCommentsForRepoRequest, _super);
    function PullsListReviewCommentsForRepoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PullsListReviewCommentsForRepoPathParams)
    ], PullsListReviewCommentsForRepoRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PullsListReviewCommentsForRepoQueryParams)
    ], PullsListReviewCommentsForRepoRequest.prototype, "queryParams", void 0);
    return PullsListReviewCommentsForRepoRequest;
}(SpeakeasyBase));
export { PullsListReviewCommentsForRepoRequest };
var PullsListReviewCommentsForRepoResponse = /** @class */ (function (_super) {
    __extends(PullsListReviewCommentsForRepoResponse, _super);
    function PullsListReviewCommentsForRepoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PullsListReviewCommentsForRepoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PullsListReviewCommentsForRepoResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PullsListReviewCommentsForRepoResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.PullRequestReviewComment }),
        __metadata("design:type", Array)
    ], PullsListReviewCommentsForRepoResponse.prototype, "pullRequestReviewComments", void 0);
    return PullsListReviewCommentsForRepoResponse;
}(SpeakeasyBase));
export { PullsListReviewCommentsForRepoResponse };
