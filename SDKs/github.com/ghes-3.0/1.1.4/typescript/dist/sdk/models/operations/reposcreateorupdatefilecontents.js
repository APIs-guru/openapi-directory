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
var ReposCreateOrUpdateFileContentsPathParams = /** @class */ (function (_super) {
    __extends(ReposCreateOrUpdateFileContentsPathParams, _super);
    function ReposCreateOrUpdateFileContentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposCreateOrUpdateFileContentsPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" }),
        __metadata("design:type", String)
    ], ReposCreateOrUpdateFileContentsPathParams.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposCreateOrUpdateFileContentsPathParams.prototype, "repo", void 0);
    return ReposCreateOrUpdateFileContentsPathParams;
}(SpeakeasyBase));
export { ReposCreateOrUpdateFileContentsPathParams };
// ReposCreateOrUpdateFileContentsRequestBodyAuthor
/**
 * The author of the file. Default: The `committer` or the authenticated user if you omit `committer`.
**/
var ReposCreateOrUpdateFileContentsRequestBodyAuthor = /** @class */ (function (_super) {
    __extends(ReposCreateOrUpdateFileContentsRequestBodyAuthor, _super);
    function ReposCreateOrUpdateFileContentsRequestBodyAuthor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", String)
    ], ReposCreateOrUpdateFileContentsRequestBodyAuthor.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], ReposCreateOrUpdateFileContentsRequestBodyAuthor.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ReposCreateOrUpdateFileContentsRequestBodyAuthor.prototype, "name", void 0);
    return ReposCreateOrUpdateFileContentsRequestBodyAuthor;
}(SpeakeasyBase));
export { ReposCreateOrUpdateFileContentsRequestBodyAuthor };
// ReposCreateOrUpdateFileContentsRequestBodyCommitter
/**
 * The person that committed the file. Default: the authenticated user.
**/
var ReposCreateOrUpdateFileContentsRequestBodyCommitter = /** @class */ (function (_super) {
    __extends(ReposCreateOrUpdateFileContentsRequestBodyCommitter, _super);
    function ReposCreateOrUpdateFileContentsRequestBodyCommitter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", String)
    ], ReposCreateOrUpdateFileContentsRequestBodyCommitter.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], ReposCreateOrUpdateFileContentsRequestBodyCommitter.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ReposCreateOrUpdateFileContentsRequestBodyCommitter.prototype, "name", void 0);
    return ReposCreateOrUpdateFileContentsRequestBodyCommitter;
}(SpeakeasyBase));
export { ReposCreateOrUpdateFileContentsRequestBodyCommitter };
var ReposCreateOrUpdateFileContentsRequestBody = /** @class */ (function (_super) {
    __extends(ReposCreateOrUpdateFileContentsRequestBody, _super);
    function ReposCreateOrUpdateFileContentsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author" }),
        __metadata("design:type", ReposCreateOrUpdateFileContentsRequestBodyAuthor)
    ], ReposCreateOrUpdateFileContentsRequestBody.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=branch" }),
        __metadata("design:type", String)
    ], ReposCreateOrUpdateFileContentsRequestBody.prototype, "branch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committer" }),
        __metadata("design:type", ReposCreateOrUpdateFileContentsRequestBodyCommitter)
    ], ReposCreateOrUpdateFileContentsRequestBody.prototype, "committer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], ReposCreateOrUpdateFileContentsRequestBody.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ReposCreateOrUpdateFileContentsRequestBody.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha" }),
        __metadata("design:type", String)
    ], ReposCreateOrUpdateFileContentsRequestBody.prototype, "sha", void 0);
    return ReposCreateOrUpdateFileContentsRequestBody;
}(SpeakeasyBase));
export { ReposCreateOrUpdateFileContentsRequestBody };
var ReposCreateOrUpdateFileContentsRequest = /** @class */ (function (_super) {
    __extends(ReposCreateOrUpdateFileContentsRequest, _super);
    function ReposCreateOrUpdateFileContentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposCreateOrUpdateFileContentsPathParams)
    ], ReposCreateOrUpdateFileContentsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReposCreateOrUpdateFileContentsRequestBody)
    ], ReposCreateOrUpdateFileContentsRequest.prototype, "request", void 0);
    return ReposCreateOrUpdateFileContentsRequest;
}(SpeakeasyBase));
export { ReposCreateOrUpdateFileContentsRequest };
var ReposCreateOrUpdateFileContentsResponse = /** @class */ (function (_super) {
    __extends(ReposCreateOrUpdateFileContentsResponse, _super);
    function ReposCreateOrUpdateFileContentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReposCreateOrUpdateFileContentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReposCreateOrUpdateFileContentsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ReposCreateOrUpdateFileContentsResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FileCommit)
    ], ReposCreateOrUpdateFileContentsResponse.prototype, "fileCommit", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], ReposCreateOrUpdateFileContentsResponse.prototype, "validationError", void 0);
    return ReposCreateOrUpdateFileContentsResponse;
}(SpeakeasyBase));
export { ReposCreateOrUpdateFileContentsResponse };
