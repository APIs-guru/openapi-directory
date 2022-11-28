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
var ReposListPullRequestsAssociatedWithCommitPathParams = /** @class */ (function (_super) {
    __extends(ReposListPullRequestsAssociatedWithCommitPathParams, _super);
    function ReposListPullRequestsAssociatedWithCommitPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commit_sha" }),
        __metadata("design:type", String)
    ], ReposListPullRequestsAssociatedWithCommitPathParams.prototype, "commitSha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposListPullRequestsAssociatedWithCommitPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposListPullRequestsAssociatedWithCommitPathParams.prototype, "repo", void 0);
    return ReposListPullRequestsAssociatedWithCommitPathParams;
}(SpeakeasyBase));
export { ReposListPullRequestsAssociatedWithCommitPathParams };
var ReposListPullRequestsAssociatedWithCommitQueryParams = /** @class */ (function (_super) {
    __extends(ReposListPullRequestsAssociatedWithCommitQueryParams, _super);
    function ReposListPullRequestsAssociatedWithCommitQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ReposListPullRequestsAssociatedWithCommitQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ReposListPullRequestsAssociatedWithCommitQueryParams.prototype, "perPage", void 0);
    return ReposListPullRequestsAssociatedWithCommitQueryParams;
}(SpeakeasyBase));
export { ReposListPullRequestsAssociatedWithCommitQueryParams };
var ReposListPullRequestsAssociatedWithCommit415ApplicationJson = /** @class */ (function (_super) {
    __extends(ReposListPullRequestsAssociatedWithCommit415ApplicationJson, _super);
    function ReposListPullRequestsAssociatedWithCommit415ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], ReposListPullRequestsAssociatedWithCommit415ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ReposListPullRequestsAssociatedWithCommit415ApplicationJson.prototype, "message", void 0);
    return ReposListPullRequestsAssociatedWithCommit415ApplicationJson;
}(SpeakeasyBase));
export { ReposListPullRequestsAssociatedWithCommit415ApplicationJson };
var ReposListPullRequestsAssociatedWithCommitRequest = /** @class */ (function (_super) {
    __extends(ReposListPullRequestsAssociatedWithCommitRequest, _super);
    function ReposListPullRequestsAssociatedWithCommitRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposListPullRequestsAssociatedWithCommitPathParams)
    ], ReposListPullRequestsAssociatedWithCommitRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposListPullRequestsAssociatedWithCommitQueryParams)
    ], ReposListPullRequestsAssociatedWithCommitRequest.prototype, "queryParams", void 0);
    return ReposListPullRequestsAssociatedWithCommitRequest;
}(SpeakeasyBase));
export { ReposListPullRequestsAssociatedWithCommitRequest };
var ReposListPullRequestsAssociatedWithCommitResponse = /** @class */ (function (_super) {
    __extends(ReposListPullRequestsAssociatedWithCommitResponse, _super);
    function ReposListPullRequestsAssociatedWithCommitResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReposListPullRequestsAssociatedWithCommitResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ReposListPullRequestsAssociatedWithCommitResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReposListPullRequestsAssociatedWithCommitResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.PullRequestSimple }),
        __metadata("design:type", Array)
    ], ReposListPullRequestsAssociatedWithCommitResponse.prototype, "pullRequestSimples", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposListPullRequestsAssociatedWithCommit415ApplicationJson)
    ], ReposListPullRequestsAssociatedWithCommitResponse.prototype, "reposListPullRequestsAssociatedWithCommit415ApplicationJsonObject", void 0);
    return ReposListPullRequestsAssociatedWithCommitResponse;
}(SpeakeasyBase));
export { ReposListPullRequestsAssociatedWithCommitResponse };
