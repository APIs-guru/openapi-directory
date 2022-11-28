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
var PutSnippetsWorkspaceEncodedIdCommentsCommentIdPathParams = /** @class */ (function (_super) {
    __extends(PutSnippetsWorkspaceEncodedIdCommentsCommentIdPathParams, _super);
    function PutSnippetsWorkspaceEncodedIdCommentsCommentIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment_id" }),
        __metadata("design:type", Number)
    ], PutSnippetsWorkspaceEncodedIdCommentsCommentIdPathParams.prototype, "commentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=encoded_id" }),
        __metadata("design:type", String)
    ], PutSnippetsWorkspaceEncodedIdCommentsCommentIdPathParams.prototype, "encodedId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], PutSnippetsWorkspaceEncodedIdCommentsCommentIdPathParams.prototype, "workspace", void 0);
    return PutSnippetsWorkspaceEncodedIdCommentsCommentIdPathParams;
}(SpeakeasyBase));
export { PutSnippetsWorkspaceEncodedIdCommentsCommentIdPathParams };
var PutSnippetsWorkspaceEncodedIdCommentsCommentIdSecurity = /** @class */ (function (_super) {
    __extends(PutSnippetsWorkspaceEncodedIdCommentsCommentIdSecurity, _super);
    function PutSnippetsWorkspaceEncodedIdCommentsCommentIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PutSnippetsWorkspaceEncodedIdCommentsCommentIdSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], PutSnippetsWorkspaceEncodedIdCommentsCommentIdSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PutSnippetsWorkspaceEncodedIdCommentsCommentIdSecurity.prototype, "apiKey", void 0);
    return PutSnippetsWorkspaceEncodedIdCommentsCommentIdSecurity;
}(SpeakeasyBase));
export { PutSnippetsWorkspaceEncodedIdCommentsCommentIdSecurity };
var PutSnippetsWorkspaceEncodedIdCommentsCommentIdRequest = /** @class */ (function (_super) {
    __extends(PutSnippetsWorkspaceEncodedIdCommentsCommentIdRequest, _super);
    function PutSnippetsWorkspaceEncodedIdCommentsCommentIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSnippetsWorkspaceEncodedIdCommentsCommentIdPathParams)
    ], PutSnippetsWorkspaceEncodedIdCommentsCommentIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSnippetsWorkspaceEncodedIdCommentsCommentIdSecurity)
    ], PutSnippetsWorkspaceEncodedIdCommentsCommentIdRequest.prototype, "security", void 0);
    return PutSnippetsWorkspaceEncodedIdCommentsCommentIdRequest;
}(SpeakeasyBase));
export { PutSnippetsWorkspaceEncodedIdCommentsCommentIdRequest };
var PutSnippetsWorkspaceEncodedIdCommentsCommentIdResponse = /** @class */ (function (_super) {
    __extends(PutSnippetsWorkspaceEncodedIdCommentsCommentIdResponse, _super);
    function PutSnippetsWorkspaceEncodedIdCommentsCommentIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutSnippetsWorkspaceEncodedIdCommentsCommentIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutSnippetsWorkspaceEncodedIdCommentsCommentIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PutSnippetsWorkspaceEncodedIdCommentsCommentIdResponse.prototype, "error", void 0);
    return PutSnippetsWorkspaceEncodedIdCommentsCommentIdResponse;
}(SpeakeasyBase));
export { PutSnippetsWorkspaceEncodedIdCommentsCommentIdResponse };
