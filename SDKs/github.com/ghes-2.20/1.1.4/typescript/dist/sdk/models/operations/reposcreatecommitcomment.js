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
var ReposCreateCommitCommentPathParams = /** @class */ (function (_super) {
    __extends(ReposCreateCommitCommentPathParams, _super);
    function ReposCreateCommitCommentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commit_sha" }),
        __metadata("design:type", String)
    ], ReposCreateCommitCommentPathParams.prototype, "commitSha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposCreateCommitCommentPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposCreateCommitCommentPathParams.prototype, "repo", void 0);
    return ReposCreateCommitCommentPathParams;
}(SpeakeasyBase));
export { ReposCreateCommitCommentPathParams };
var ReposCreateCommitCommentRequestBody = /** @class */ (function (_super) {
    __extends(ReposCreateCommitCommentRequestBody, _super);
    function ReposCreateCommitCommentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], ReposCreateCommitCommentRequestBody.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line" }),
        __metadata("design:type", Number)
    ], ReposCreateCommitCommentRequestBody.prototype, "line", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], ReposCreateCommitCommentRequestBody.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=position" }),
        __metadata("design:type", Number)
    ], ReposCreateCommitCommentRequestBody.prototype, "position", void 0);
    return ReposCreateCommitCommentRequestBody;
}(SpeakeasyBase));
export { ReposCreateCommitCommentRequestBody };
var ReposCreateCommitCommentRequest = /** @class */ (function (_super) {
    __extends(ReposCreateCommitCommentRequest, _super);
    function ReposCreateCommitCommentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposCreateCommitCommentPathParams)
    ], ReposCreateCommitCommentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReposCreateCommitCommentRequestBody)
    ], ReposCreateCommitCommentRequest.prototype, "request", void 0);
    return ReposCreateCommitCommentRequest;
}(SpeakeasyBase));
export { ReposCreateCommitCommentRequest };
var ReposCreateCommitCommentResponse = /** @class */ (function (_super) {
    __extends(ReposCreateCommitCommentResponse, _super);
    function ReposCreateCommitCommentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReposCreateCommitCommentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ReposCreateCommitCommentResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReposCreateCommitCommentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ReposCreateCommitCommentResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CommitComment)
    ], ReposCreateCommitCommentResponse.prototype, "commitComment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], ReposCreateCommitCommentResponse.prototype, "validationError", void 0);
    return ReposCreateCommitCommentResponse;
}(SpeakeasyBase));
export { ReposCreateCommitCommentResponse };
