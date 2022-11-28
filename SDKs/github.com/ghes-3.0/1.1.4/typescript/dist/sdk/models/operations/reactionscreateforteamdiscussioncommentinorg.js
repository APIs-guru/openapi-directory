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
var ReactionsCreateForTeamDiscussionCommentInOrgPathParams = /** @class */ (function (_super) {
    __extends(ReactionsCreateForTeamDiscussionCommentInOrgPathParams, _super);
    function ReactionsCreateForTeamDiscussionCommentInOrgPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment_number" }),
        __metadata("design:type", Number)
    ], ReactionsCreateForTeamDiscussionCommentInOrgPathParams.prototype, "commentNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" }),
        __metadata("design:type", Number)
    ], ReactionsCreateForTeamDiscussionCommentInOrgPathParams.prototype, "discussionNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], ReactionsCreateForTeamDiscussionCommentInOrgPathParams.prototype, "org", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_slug" }),
        __metadata("design:type", String)
    ], ReactionsCreateForTeamDiscussionCommentInOrgPathParams.prototype, "teamSlug", void 0);
    return ReactionsCreateForTeamDiscussionCommentInOrgPathParams;
}(SpeakeasyBase));
export { ReactionsCreateForTeamDiscussionCommentInOrgPathParams };
export var ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnum;
(function (ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnum) {
    ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnum["Plus1"] = "+1";
    ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnum["Minus1"] = "-1";
    ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnum["Laugh"] = "laugh";
    ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnum["Confused"] = "confused";
    ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnum["Heart"] = "heart";
    ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnum["Hooray"] = "hooray";
    ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnum["Rocket"] = "rocket";
    ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnum["Eyes"] = "eyes";
})(ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnum || (ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnum = {}));
var ReactionsCreateForTeamDiscussionCommentInOrgRequestBody = /** @class */ (function (_super) {
    __extends(ReactionsCreateForTeamDiscussionCommentInOrgRequestBody, _super);
    function ReactionsCreateForTeamDiscussionCommentInOrgRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], ReactionsCreateForTeamDiscussionCommentInOrgRequestBody.prototype, "content", void 0);
    return ReactionsCreateForTeamDiscussionCommentInOrgRequestBody;
}(SpeakeasyBase));
export { ReactionsCreateForTeamDiscussionCommentInOrgRequestBody };
var ReactionsCreateForTeamDiscussionCommentInOrgRequest = /** @class */ (function (_super) {
    __extends(ReactionsCreateForTeamDiscussionCommentInOrgRequest, _super);
    function ReactionsCreateForTeamDiscussionCommentInOrgRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReactionsCreateForTeamDiscussionCommentInOrgPathParams)
    ], ReactionsCreateForTeamDiscussionCommentInOrgRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReactionsCreateForTeamDiscussionCommentInOrgRequestBody)
    ], ReactionsCreateForTeamDiscussionCommentInOrgRequest.prototype, "request", void 0);
    return ReactionsCreateForTeamDiscussionCommentInOrgRequest;
}(SpeakeasyBase));
export { ReactionsCreateForTeamDiscussionCommentInOrgRequest };
var ReactionsCreateForTeamDiscussionCommentInOrgResponse = /** @class */ (function (_super) {
    __extends(ReactionsCreateForTeamDiscussionCommentInOrgResponse, _super);
    function ReactionsCreateForTeamDiscussionCommentInOrgResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReactionsCreateForTeamDiscussionCommentInOrgResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReactionsCreateForTeamDiscussionCommentInOrgResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Reaction)
    ], ReactionsCreateForTeamDiscussionCommentInOrgResponse.prototype, "reaction", void 0);
    return ReactionsCreateForTeamDiscussionCommentInOrgResponse;
}(SpeakeasyBase));
export { ReactionsCreateForTeamDiscussionCommentInOrgResponse };
