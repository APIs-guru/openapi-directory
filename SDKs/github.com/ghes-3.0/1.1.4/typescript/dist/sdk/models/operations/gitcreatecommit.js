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
var GitCreateCommitPathParams = /** @class */ (function (_super) {
    __extends(GitCreateCommitPathParams, _super);
    function GitCreateCommitPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], GitCreateCommitPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], GitCreateCommitPathParams.prototype, "repo", void 0);
    return GitCreateCommitPathParams;
}(SpeakeasyBase));
export { GitCreateCommitPathParams };
// GitCreateCommitRequestBodyAuthor
/**
 * Information about the author of the commit. By default, the `author` will be the authenticated user and the current date. See the `author` and `committer` object below for details.
**/
var GitCreateCommitRequestBodyAuthor = /** @class */ (function (_super) {
    __extends(GitCreateCommitRequestBodyAuthor, _super);
    function GitCreateCommitRequestBodyAuthor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", Date)
    ], GitCreateCommitRequestBodyAuthor.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], GitCreateCommitRequestBodyAuthor.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GitCreateCommitRequestBodyAuthor.prototype, "name", void 0);
    return GitCreateCommitRequestBodyAuthor;
}(SpeakeasyBase));
export { GitCreateCommitRequestBodyAuthor };
// GitCreateCommitRequestBodyCommitter
/**
 * Information about the person who is making the commit. By default, `committer` will use the information set in `author`. See the `author` and `committer` object below for details.
**/
var GitCreateCommitRequestBodyCommitter = /** @class */ (function (_super) {
    __extends(GitCreateCommitRequestBodyCommitter, _super);
    function GitCreateCommitRequestBodyCommitter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", Date)
    ], GitCreateCommitRequestBodyCommitter.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], GitCreateCommitRequestBodyCommitter.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GitCreateCommitRequestBodyCommitter.prototype, "name", void 0);
    return GitCreateCommitRequestBodyCommitter;
}(SpeakeasyBase));
export { GitCreateCommitRequestBodyCommitter };
var GitCreateCommitRequestBody = /** @class */ (function (_super) {
    __extends(GitCreateCommitRequestBody, _super);
    function GitCreateCommitRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author" }),
        __metadata("design:type", GitCreateCommitRequestBodyAuthor)
    ], GitCreateCommitRequestBody.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committer" }),
        __metadata("design:type", GitCreateCommitRequestBodyCommitter)
    ], GitCreateCommitRequestBody.prototype, "committer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GitCreateCommitRequestBody.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parents" }),
        __metadata("design:type", Array)
    ], GitCreateCommitRequestBody.prototype, "parents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=signature" }),
        __metadata("design:type", String)
    ], GitCreateCommitRequestBody.prototype, "signature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tree" }),
        __metadata("design:type", String)
    ], GitCreateCommitRequestBody.prototype, "tree", void 0);
    return GitCreateCommitRequestBody;
}(SpeakeasyBase));
export { GitCreateCommitRequestBody };
var GitCreateCommitRequest = /** @class */ (function (_super) {
    __extends(GitCreateCommitRequest, _super);
    function GitCreateCommitRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GitCreateCommitPathParams)
    ], GitCreateCommitRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", GitCreateCommitRequestBody)
    ], GitCreateCommitRequest.prototype, "request", void 0);
    return GitCreateCommitRequest;
}(SpeakeasyBase));
export { GitCreateCommitRequest };
var GitCreateCommitResponse = /** @class */ (function (_super) {
    __extends(GitCreateCommitResponse, _super);
    function GitCreateCommitResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GitCreateCommitResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GitCreateCommitResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GitCreateCommitResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], GitCreateCommitResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GitCommit)
    ], GitCreateCommitResponse.prototype, "gitCommit", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], GitCreateCommitResponse.prototype, "validationError", void 0);
    return GitCreateCommitResponse;
}(SpeakeasyBase));
export { GitCreateCommitResponse };
