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
var ReactionsCreateForTeamDiscussionPathParams = /** @class */ (function (_super) {
    __extends(ReactionsCreateForTeamDiscussionPathParams, _super);
    function ReactionsCreateForTeamDiscussionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" }),
        __metadata("design:type", Number)
    ], ReactionsCreateForTeamDiscussionPathParams.prototype, "discussionNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" }),
        __metadata("design:type", Number)
    ], ReactionsCreateForTeamDiscussionPathParams.prototype, "teamId", void 0);
    return ReactionsCreateForTeamDiscussionPathParams;
}(SpeakeasyBase));
export { ReactionsCreateForTeamDiscussionPathParams };
var ReactionsCreateForTeamDiscussionHeaders = /** @class */ (function (_super) {
    __extends(ReactionsCreateForTeamDiscussionHeaders, _super);
    function ReactionsCreateForTeamDiscussionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=accept" }),
        __metadata("design:type", String)
    ], ReactionsCreateForTeamDiscussionHeaders.prototype, "accept", void 0);
    return ReactionsCreateForTeamDiscussionHeaders;
}(SpeakeasyBase));
export { ReactionsCreateForTeamDiscussionHeaders };
export var ReactionsCreateForTeamDiscussionRequestBodyContentEnum;
(function (ReactionsCreateForTeamDiscussionRequestBodyContentEnum) {
    ReactionsCreateForTeamDiscussionRequestBodyContentEnum["Plus1"] = "+1";
    ReactionsCreateForTeamDiscussionRequestBodyContentEnum["Minus1"] = "-1";
    ReactionsCreateForTeamDiscussionRequestBodyContentEnum["Laugh"] = "laugh";
    ReactionsCreateForTeamDiscussionRequestBodyContentEnum["Confused"] = "confused";
    ReactionsCreateForTeamDiscussionRequestBodyContentEnum["Heart"] = "heart";
    ReactionsCreateForTeamDiscussionRequestBodyContentEnum["Hooray"] = "hooray";
    ReactionsCreateForTeamDiscussionRequestBodyContentEnum["Rocket"] = "rocket";
    ReactionsCreateForTeamDiscussionRequestBodyContentEnum["Eyes"] = "eyes";
})(ReactionsCreateForTeamDiscussionRequestBodyContentEnum || (ReactionsCreateForTeamDiscussionRequestBodyContentEnum = {}));
var ReactionsCreateForTeamDiscussionRequestBody = /** @class */ (function (_super) {
    __extends(ReactionsCreateForTeamDiscussionRequestBody, _super);
    function ReactionsCreateForTeamDiscussionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], ReactionsCreateForTeamDiscussionRequestBody.prototype, "content", void 0);
    return ReactionsCreateForTeamDiscussionRequestBody;
}(SpeakeasyBase));
export { ReactionsCreateForTeamDiscussionRequestBody };
var ReactionsCreateForTeamDiscussionRequest = /** @class */ (function (_super) {
    __extends(ReactionsCreateForTeamDiscussionRequest, _super);
    function ReactionsCreateForTeamDiscussionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReactionsCreateForTeamDiscussionPathParams)
    ], ReactionsCreateForTeamDiscussionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReactionsCreateForTeamDiscussionHeaders)
    ], ReactionsCreateForTeamDiscussionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReactionsCreateForTeamDiscussionRequestBody)
    ], ReactionsCreateForTeamDiscussionRequest.prototype, "request", void 0);
    return ReactionsCreateForTeamDiscussionRequest;
}(SpeakeasyBase));
export { ReactionsCreateForTeamDiscussionRequest };
var ReactionsCreateForTeamDiscussionResponse = /** @class */ (function (_super) {
    __extends(ReactionsCreateForTeamDiscussionResponse, _super);
    function ReactionsCreateForTeamDiscussionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReactionsCreateForTeamDiscussionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReactionsCreateForTeamDiscussionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Reaction)
    ], ReactionsCreateForTeamDiscussionResponse.prototype, "reaction", void 0);
    return ReactionsCreateForTeamDiscussionResponse;
}(SpeakeasyBase));
export { ReactionsCreateForTeamDiscussionResponse };
