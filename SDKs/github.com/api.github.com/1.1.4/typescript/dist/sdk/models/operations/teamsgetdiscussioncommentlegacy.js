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
var TeamsGetDiscussionCommentLegacyPathParams = /** @class */ (function (_super) {
    __extends(TeamsGetDiscussionCommentLegacyPathParams, _super);
    function TeamsGetDiscussionCommentLegacyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment_number" }),
        __metadata("design:type", Number)
    ], TeamsGetDiscussionCommentLegacyPathParams.prototype, "commentNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" }),
        __metadata("design:type", Number)
    ], TeamsGetDiscussionCommentLegacyPathParams.prototype, "discussionNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" }),
        __metadata("design:type", Number)
    ], TeamsGetDiscussionCommentLegacyPathParams.prototype, "teamId", void 0);
    return TeamsGetDiscussionCommentLegacyPathParams;
}(SpeakeasyBase));
export { TeamsGetDiscussionCommentLegacyPathParams };
var TeamsGetDiscussionCommentLegacyRequest = /** @class */ (function (_super) {
    __extends(TeamsGetDiscussionCommentLegacyRequest, _super);
    function TeamsGetDiscussionCommentLegacyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsGetDiscussionCommentLegacyPathParams)
    ], TeamsGetDiscussionCommentLegacyRequest.prototype, "pathParams", void 0);
    return TeamsGetDiscussionCommentLegacyRequest;
}(SpeakeasyBase));
export { TeamsGetDiscussionCommentLegacyRequest };
var TeamsGetDiscussionCommentLegacyResponse = /** @class */ (function (_super) {
    __extends(TeamsGetDiscussionCommentLegacyResponse, _super);
    function TeamsGetDiscussionCommentLegacyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TeamsGetDiscussionCommentLegacyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TeamsGetDiscussionCommentLegacyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TeamDiscussionComment)
    ], TeamsGetDiscussionCommentLegacyResponse.prototype, "teamDiscussionComment", void 0);
    return TeamsGetDiscussionCommentLegacyResponse;
}(SpeakeasyBase));
export { TeamsGetDiscussionCommentLegacyResponse };
