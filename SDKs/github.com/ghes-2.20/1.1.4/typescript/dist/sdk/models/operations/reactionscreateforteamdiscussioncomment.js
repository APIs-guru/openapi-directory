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
var ReactionsCreateForTeamDiscussionCommentPathParams = /** @class */ (function (_super) {
    __extends(ReactionsCreateForTeamDiscussionCommentPathParams, _super);
    function ReactionsCreateForTeamDiscussionCommentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment_number" }),
        __metadata("design:type", Number)
    ], ReactionsCreateForTeamDiscussionCommentPathParams.prototype, "commentNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" }),
        __metadata("design:type", Number)
    ], ReactionsCreateForTeamDiscussionCommentPathParams.prototype, "discussionNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" }),
        __metadata("design:type", Number)
    ], ReactionsCreateForTeamDiscussionCommentPathParams.prototype, "teamId", void 0);
    return ReactionsCreateForTeamDiscussionCommentPathParams;
}(SpeakeasyBase));
export { ReactionsCreateForTeamDiscussionCommentPathParams };
var ReactionsCreateForTeamDiscussionCommentHeaders = /** @class */ (function (_super) {
    __extends(ReactionsCreateForTeamDiscussionCommentHeaders, _super);
    function ReactionsCreateForTeamDiscussionCommentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=accept" }),
        __metadata("design:type", String)
    ], ReactionsCreateForTeamDiscussionCommentHeaders.prototype, "accept", void 0);
    return ReactionsCreateForTeamDiscussionCommentHeaders;
}(SpeakeasyBase));
export { ReactionsCreateForTeamDiscussionCommentHeaders };
export var ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnum;
(function (ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnum) {
    ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnum["Plus1"] = "+1";
    ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnum["Minus1"] = "-1";
    ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnum["Laugh"] = "laugh";
    ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnum["Confused"] = "confused";
    ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnum["Heart"] = "heart";
    ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnum["Hooray"] = "hooray";
    ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnum["Rocket"] = "rocket";
    ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnum["Eyes"] = "eyes";
})(ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnum || (ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnum = {}));
var ReactionsCreateForTeamDiscussionCommentRequestBody = /** @class */ (function (_super) {
    __extends(ReactionsCreateForTeamDiscussionCommentRequestBody, _super);
    function ReactionsCreateForTeamDiscussionCommentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], ReactionsCreateForTeamDiscussionCommentRequestBody.prototype, "content", void 0);
    return ReactionsCreateForTeamDiscussionCommentRequestBody;
}(SpeakeasyBase));
export { ReactionsCreateForTeamDiscussionCommentRequestBody };
var ReactionsCreateForTeamDiscussionCommentRequest = /** @class */ (function (_super) {
    __extends(ReactionsCreateForTeamDiscussionCommentRequest, _super);
    function ReactionsCreateForTeamDiscussionCommentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReactionsCreateForTeamDiscussionCommentPathParams)
    ], ReactionsCreateForTeamDiscussionCommentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReactionsCreateForTeamDiscussionCommentHeaders)
    ], ReactionsCreateForTeamDiscussionCommentRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReactionsCreateForTeamDiscussionCommentRequestBody)
    ], ReactionsCreateForTeamDiscussionCommentRequest.prototype, "request", void 0);
    return ReactionsCreateForTeamDiscussionCommentRequest;
}(SpeakeasyBase));
export { ReactionsCreateForTeamDiscussionCommentRequest };
var ReactionsCreateForTeamDiscussionCommentResponse = /** @class */ (function (_super) {
    __extends(ReactionsCreateForTeamDiscussionCommentResponse, _super);
    function ReactionsCreateForTeamDiscussionCommentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReactionsCreateForTeamDiscussionCommentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReactionsCreateForTeamDiscussionCommentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Reaction)
    ], ReactionsCreateForTeamDiscussionCommentResponse.prototype, "reaction", void 0);
    return ReactionsCreateForTeamDiscussionCommentResponse;
}(SpeakeasyBase));
export { ReactionsCreateForTeamDiscussionCommentResponse };
