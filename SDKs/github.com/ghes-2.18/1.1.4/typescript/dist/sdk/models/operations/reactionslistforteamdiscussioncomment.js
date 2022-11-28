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
var ReactionsListForTeamDiscussionCommentPathParams = /** @class */ (function (_super) {
    __extends(ReactionsListForTeamDiscussionCommentPathParams, _super);
    function ReactionsListForTeamDiscussionCommentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment_number" }),
        __metadata("design:type", Number)
    ], ReactionsListForTeamDiscussionCommentPathParams.prototype, "commentNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" }),
        __metadata("design:type", Number)
    ], ReactionsListForTeamDiscussionCommentPathParams.prototype, "discussionNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" }),
        __metadata("design:type", Number)
    ], ReactionsListForTeamDiscussionCommentPathParams.prototype, "teamId", void 0);
    return ReactionsListForTeamDiscussionCommentPathParams;
}(SpeakeasyBase));
export { ReactionsListForTeamDiscussionCommentPathParams };
export var ReactionsListForTeamDiscussionCommentContentEnum;
(function (ReactionsListForTeamDiscussionCommentContentEnum) {
    ReactionsListForTeamDiscussionCommentContentEnum["Plus1"] = "+1";
    ReactionsListForTeamDiscussionCommentContentEnum["Minus1"] = "-1";
    ReactionsListForTeamDiscussionCommentContentEnum["Laugh"] = "laugh";
    ReactionsListForTeamDiscussionCommentContentEnum["Confused"] = "confused";
    ReactionsListForTeamDiscussionCommentContentEnum["Heart"] = "heart";
    ReactionsListForTeamDiscussionCommentContentEnum["Hooray"] = "hooray";
    ReactionsListForTeamDiscussionCommentContentEnum["Rocket"] = "rocket";
    ReactionsListForTeamDiscussionCommentContentEnum["Eyes"] = "eyes";
})(ReactionsListForTeamDiscussionCommentContentEnum || (ReactionsListForTeamDiscussionCommentContentEnum = {}));
var ReactionsListForTeamDiscussionCommentQueryParams = /** @class */ (function (_super) {
    __extends(ReactionsListForTeamDiscussionCommentQueryParams, _super);
    function ReactionsListForTeamDiscussionCommentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=content" }),
        __metadata("design:type", String)
    ], ReactionsListForTeamDiscussionCommentQueryParams.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ReactionsListForTeamDiscussionCommentQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ReactionsListForTeamDiscussionCommentQueryParams.prototype, "perPage", void 0);
    return ReactionsListForTeamDiscussionCommentQueryParams;
}(SpeakeasyBase));
export { ReactionsListForTeamDiscussionCommentQueryParams };
var ReactionsListForTeamDiscussionCommentHeaders = /** @class */ (function (_super) {
    __extends(ReactionsListForTeamDiscussionCommentHeaders, _super);
    function ReactionsListForTeamDiscussionCommentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=accept" }),
        __metadata("design:type", String)
    ], ReactionsListForTeamDiscussionCommentHeaders.prototype, "accept", void 0);
    return ReactionsListForTeamDiscussionCommentHeaders;
}(SpeakeasyBase));
export { ReactionsListForTeamDiscussionCommentHeaders };
var ReactionsListForTeamDiscussionCommentRequest = /** @class */ (function (_super) {
    __extends(ReactionsListForTeamDiscussionCommentRequest, _super);
    function ReactionsListForTeamDiscussionCommentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReactionsListForTeamDiscussionCommentPathParams)
    ], ReactionsListForTeamDiscussionCommentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReactionsListForTeamDiscussionCommentQueryParams)
    ], ReactionsListForTeamDiscussionCommentRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReactionsListForTeamDiscussionCommentHeaders)
    ], ReactionsListForTeamDiscussionCommentRequest.prototype, "headers", void 0);
    return ReactionsListForTeamDiscussionCommentRequest;
}(SpeakeasyBase));
export { ReactionsListForTeamDiscussionCommentRequest };
var ReactionsListForTeamDiscussionCommentResponse = /** @class */ (function (_super) {
    __extends(ReactionsListForTeamDiscussionCommentResponse, _super);
    function ReactionsListForTeamDiscussionCommentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReactionsListForTeamDiscussionCommentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ReactionsListForTeamDiscussionCommentResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReactionsListForTeamDiscussionCommentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Reaction }),
        __metadata("design:type", Array)
    ], ReactionsListForTeamDiscussionCommentResponse.prototype, "reactions", void 0);
    return ReactionsListForTeamDiscussionCommentResponse;
}(SpeakeasyBase));
export { ReactionsListForTeamDiscussionCommentResponse };
