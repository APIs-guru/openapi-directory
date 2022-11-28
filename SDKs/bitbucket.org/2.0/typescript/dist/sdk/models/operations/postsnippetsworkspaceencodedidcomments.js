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
var PostSnippetsWorkspaceEncodedIdCommentsPathParams = /** @class */ (function (_super) {
    __extends(PostSnippetsWorkspaceEncodedIdCommentsPathParams, _super);
    function PostSnippetsWorkspaceEncodedIdCommentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=encoded_id" }),
        __metadata("design:type", String)
    ], PostSnippetsWorkspaceEncodedIdCommentsPathParams.prototype, "encodedId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], PostSnippetsWorkspaceEncodedIdCommentsPathParams.prototype, "workspace", void 0);
    return PostSnippetsWorkspaceEncodedIdCommentsPathParams;
}(SpeakeasyBase));
export { PostSnippetsWorkspaceEncodedIdCommentsPathParams };
var PostSnippetsWorkspaceEncodedIdCommentsSecurity = /** @class */ (function (_super) {
    __extends(PostSnippetsWorkspaceEncodedIdCommentsSecurity, _super);
    function PostSnippetsWorkspaceEncodedIdCommentsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PostSnippetsWorkspaceEncodedIdCommentsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], PostSnippetsWorkspaceEncodedIdCommentsSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PostSnippetsWorkspaceEncodedIdCommentsSecurity.prototype, "apiKey", void 0);
    return PostSnippetsWorkspaceEncodedIdCommentsSecurity;
}(SpeakeasyBase));
export { PostSnippetsWorkspaceEncodedIdCommentsSecurity };
var PostSnippetsWorkspaceEncodedIdCommentsRequest = /** @class */ (function (_super) {
    __extends(PostSnippetsWorkspaceEncodedIdCommentsRequest, _super);
    function PostSnippetsWorkspaceEncodedIdCommentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSnippetsWorkspaceEncodedIdCommentsPathParams)
    ], PostSnippetsWorkspaceEncodedIdCommentsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], PostSnippetsWorkspaceEncodedIdCommentsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSnippetsWorkspaceEncodedIdCommentsSecurity)
    ], PostSnippetsWorkspaceEncodedIdCommentsRequest.prototype, "security", void 0);
    return PostSnippetsWorkspaceEncodedIdCommentsRequest;
}(SpeakeasyBase));
export { PostSnippetsWorkspaceEncodedIdCommentsRequest };
var PostSnippetsWorkspaceEncodedIdCommentsResponse = /** @class */ (function (_super) {
    __extends(PostSnippetsWorkspaceEncodedIdCommentsResponse, _super);
    function PostSnippetsWorkspaceEncodedIdCommentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostSnippetsWorkspaceEncodedIdCommentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PostSnippetsWorkspaceEncodedIdCommentsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostSnippetsWorkspaceEncodedIdCommentsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PostSnippetsWorkspaceEncodedIdCommentsResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PostSnippetsWorkspaceEncodedIdCommentsResponse.prototype, "snippet", void 0);
    return PostSnippetsWorkspaceEncodedIdCommentsResponse;
}(SpeakeasyBase));
export { PostSnippetsWorkspaceEncodedIdCommentsResponse };
