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
var ReactionsCreateForTeamDiscussionCommentLegacyPathParams = /** @class */ (function (_super) {
    __extends(ReactionsCreateForTeamDiscussionCommentLegacyPathParams, _super);
    function ReactionsCreateForTeamDiscussionCommentLegacyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment_number" }),
        __metadata("design:type", Number)
    ], ReactionsCreateForTeamDiscussionCommentLegacyPathParams.prototype, "commentNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" }),
        __metadata("design:type", Number)
    ], ReactionsCreateForTeamDiscussionCommentLegacyPathParams.prototype, "discussionNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" }),
        __metadata("design:type", Number)
    ], ReactionsCreateForTeamDiscussionCommentLegacyPathParams.prototype, "teamId", void 0);
    return ReactionsCreateForTeamDiscussionCommentLegacyPathParams;
}(SpeakeasyBase));
export { ReactionsCreateForTeamDiscussionCommentLegacyPathParams };
export var ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnum;
(function (ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnum) {
    ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnum["Plus1"] = "+1";
    ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnum["Minus1"] = "-1";
    ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnum["Laugh"] = "laugh";
    ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnum["Confused"] = "confused";
    ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnum["Heart"] = "heart";
    ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnum["Hooray"] = "hooray";
    ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnum["Rocket"] = "rocket";
    ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnum["Eyes"] = "eyes";
})(ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnum || (ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnum = {}));
var ReactionsCreateForTeamDiscussionCommentLegacyRequestBody = /** @class */ (function (_super) {
    __extends(ReactionsCreateForTeamDiscussionCommentLegacyRequestBody, _super);
    function ReactionsCreateForTeamDiscussionCommentLegacyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], ReactionsCreateForTeamDiscussionCommentLegacyRequestBody.prototype, "content", void 0);
    return ReactionsCreateForTeamDiscussionCommentLegacyRequestBody;
}(SpeakeasyBase));
export { ReactionsCreateForTeamDiscussionCommentLegacyRequestBody };
var ReactionsCreateForTeamDiscussionCommentLegacyRequest = /** @class */ (function (_super) {
    __extends(ReactionsCreateForTeamDiscussionCommentLegacyRequest, _super);
    function ReactionsCreateForTeamDiscussionCommentLegacyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReactionsCreateForTeamDiscussionCommentLegacyPathParams)
    ], ReactionsCreateForTeamDiscussionCommentLegacyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReactionsCreateForTeamDiscussionCommentLegacyRequestBody)
    ], ReactionsCreateForTeamDiscussionCommentLegacyRequest.prototype, "request", void 0);
    return ReactionsCreateForTeamDiscussionCommentLegacyRequest;
}(SpeakeasyBase));
export { ReactionsCreateForTeamDiscussionCommentLegacyRequest };
var ReactionsCreateForTeamDiscussionCommentLegacyResponse = /** @class */ (function (_super) {
    __extends(ReactionsCreateForTeamDiscussionCommentLegacyResponse, _super);
    function ReactionsCreateForTeamDiscussionCommentLegacyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReactionsCreateForTeamDiscussionCommentLegacyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReactionsCreateForTeamDiscussionCommentLegacyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Reaction)
    ], ReactionsCreateForTeamDiscussionCommentLegacyResponse.prototype, "reaction", void 0);
    return ReactionsCreateForTeamDiscussionCommentLegacyResponse;
}(SpeakeasyBase));
export { ReactionsCreateForTeamDiscussionCommentLegacyResponse };
