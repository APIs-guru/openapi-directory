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
var PullsListReviewCommentsPathParams = /** @class */ (function (_super) {
    __extends(PullsListReviewCommentsPathParams, _super);
    function PullsListReviewCommentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], PullsListReviewCommentsPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pull_number" }),
        __metadata("design:type", Number)
    ], PullsListReviewCommentsPathParams.prototype, "pullNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], PullsListReviewCommentsPathParams.prototype, "repo", void 0);
    return PullsListReviewCommentsPathParams;
}(SpeakeasyBase));
export { PullsListReviewCommentsPathParams };
export var PullsListReviewCommentsDirectionEnum;
(function (PullsListReviewCommentsDirectionEnum) {
    PullsListReviewCommentsDirectionEnum["Asc"] = "asc";
    PullsListReviewCommentsDirectionEnum["Desc"] = "desc";
})(PullsListReviewCommentsDirectionEnum || (PullsListReviewCommentsDirectionEnum = {}));
var PullsListReviewCommentsQueryParams = /** @class */ (function (_super) {
    __extends(PullsListReviewCommentsQueryParams, _super);
    function PullsListReviewCommentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], PullsListReviewCommentsQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], PullsListReviewCommentsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], PullsListReviewCommentsQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" }),
        __metadata("design:type", String)
    ], PullsListReviewCommentsQueryParams.prototype, "since", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], PullsListReviewCommentsQueryParams.prototype, "sort", void 0);
    return PullsListReviewCommentsQueryParams;
}(SpeakeasyBase));
export { PullsListReviewCommentsQueryParams };
var PullsListReviewCommentsRequest = /** @class */ (function (_super) {
    __extends(PullsListReviewCommentsRequest, _super);
    function PullsListReviewCommentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PullsListReviewCommentsPathParams)
    ], PullsListReviewCommentsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PullsListReviewCommentsQueryParams)
    ], PullsListReviewCommentsRequest.prototype, "queryParams", void 0);
    return PullsListReviewCommentsRequest;
}(SpeakeasyBase));
export { PullsListReviewCommentsRequest };
var PullsListReviewCommentsResponse = /** @class */ (function (_super) {
    __extends(PullsListReviewCommentsResponse, _super);
    function PullsListReviewCommentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PullsListReviewCommentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PullsListReviewCommentsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PullsListReviewCommentsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.PullRequestReviewComment }),
        __metadata("design:type", Array)
    ], PullsListReviewCommentsResponse.prototype, "pullRequestReviewComments", void 0);
    return PullsListReviewCommentsResponse;
}(SpeakeasyBase));
export { PullsListReviewCommentsResponse };
