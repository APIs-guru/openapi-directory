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
var ReposListBranchesForHeadCommitPathParams = /** @class */ (function (_super) {
    __extends(ReposListBranchesForHeadCommitPathParams, _super);
    function ReposListBranchesForHeadCommitPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commit_sha" }),
        __metadata("design:type", String)
    ], ReposListBranchesForHeadCommitPathParams.prototype, "commitSha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposListBranchesForHeadCommitPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposListBranchesForHeadCommitPathParams.prototype, "repo", void 0);
    return ReposListBranchesForHeadCommitPathParams;
}(SpeakeasyBase));
export { ReposListBranchesForHeadCommitPathParams };
var ReposListBranchesForHeadCommit415ApplicationJson = /** @class */ (function (_super) {
    __extends(ReposListBranchesForHeadCommit415ApplicationJson, _super);
    function ReposListBranchesForHeadCommit415ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], ReposListBranchesForHeadCommit415ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ReposListBranchesForHeadCommit415ApplicationJson.prototype, "message", void 0);
    return ReposListBranchesForHeadCommit415ApplicationJson;
}(SpeakeasyBase));
export { ReposListBranchesForHeadCommit415ApplicationJson };
var ReposListBranchesForHeadCommitRequest = /** @class */ (function (_super) {
    __extends(ReposListBranchesForHeadCommitRequest, _super);
    function ReposListBranchesForHeadCommitRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposListBranchesForHeadCommitPathParams)
    ], ReposListBranchesForHeadCommitRequest.prototype, "pathParams", void 0);
    return ReposListBranchesForHeadCommitRequest;
}(SpeakeasyBase));
export { ReposListBranchesForHeadCommitRequest };
var ReposListBranchesForHeadCommitResponse = /** @class */ (function (_super) {
    __extends(ReposListBranchesForHeadCommitResponse, _super);
    function ReposListBranchesForHeadCommitResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReposListBranchesForHeadCommitResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReposListBranchesForHeadCommitResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.BranchShort }),
        __metadata("design:type", Array)
    ], ReposListBranchesForHeadCommitResponse.prototype, "branchShorts", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposListBranchesForHeadCommit415ApplicationJson)
    ], ReposListBranchesForHeadCommitResponse.prototype, "reposListBranchesForHeadCommit415ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], ReposListBranchesForHeadCommitResponse.prototype, "validationError", void 0);
    return ReposListBranchesForHeadCommitResponse;
}(SpeakeasyBase));
export { ReposListBranchesForHeadCommitResponse };
