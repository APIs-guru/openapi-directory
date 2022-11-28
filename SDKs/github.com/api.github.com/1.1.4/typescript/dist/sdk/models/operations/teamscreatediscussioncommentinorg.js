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
var TeamsCreateDiscussionCommentInOrgPathParams = /** @class */ (function (_super) {
    __extends(TeamsCreateDiscussionCommentInOrgPathParams, _super);
    function TeamsCreateDiscussionCommentInOrgPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" }),
        __metadata("design:type", Number)
    ], TeamsCreateDiscussionCommentInOrgPathParams.prototype, "discussionNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], TeamsCreateDiscussionCommentInOrgPathParams.prototype, "org", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_slug" }),
        __metadata("design:type", String)
    ], TeamsCreateDiscussionCommentInOrgPathParams.prototype, "teamSlug", void 0);
    return TeamsCreateDiscussionCommentInOrgPathParams;
}(SpeakeasyBase));
export { TeamsCreateDiscussionCommentInOrgPathParams };
var TeamsCreateDiscussionCommentInOrgRequestBody = /** @class */ (function (_super) {
    __extends(TeamsCreateDiscussionCommentInOrgRequestBody, _super);
    function TeamsCreateDiscussionCommentInOrgRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], TeamsCreateDiscussionCommentInOrgRequestBody.prototype, "body", void 0);
    return TeamsCreateDiscussionCommentInOrgRequestBody;
}(SpeakeasyBase));
export { TeamsCreateDiscussionCommentInOrgRequestBody };
var TeamsCreateDiscussionCommentInOrgRequest = /** @class */ (function (_super) {
    __extends(TeamsCreateDiscussionCommentInOrgRequest, _super);
    function TeamsCreateDiscussionCommentInOrgRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsCreateDiscussionCommentInOrgPathParams)
    ], TeamsCreateDiscussionCommentInOrgRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", TeamsCreateDiscussionCommentInOrgRequestBody)
    ], TeamsCreateDiscussionCommentInOrgRequest.prototype, "request", void 0);
    return TeamsCreateDiscussionCommentInOrgRequest;
}(SpeakeasyBase));
export { TeamsCreateDiscussionCommentInOrgRequest };
var TeamsCreateDiscussionCommentInOrgResponse = /** @class */ (function (_super) {
    __extends(TeamsCreateDiscussionCommentInOrgResponse, _super);
    function TeamsCreateDiscussionCommentInOrgResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TeamsCreateDiscussionCommentInOrgResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TeamsCreateDiscussionCommentInOrgResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TeamDiscussionComment)
    ], TeamsCreateDiscussionCommentInOrgResponse.prototype, "teamDiscussionComment", void 0);
    return TeamsCreateDiscussionCommentInOrgResponse;
}(SpeakeasyBase));
export { TeamsCreateDiscussionCommentInOrgResponse };
