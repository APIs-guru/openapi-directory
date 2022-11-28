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
var ReactionsListForTeamDiscussionPathParams = /** @class */ (function (_super) {
    __extends(ReactionsListForTeamDiscussionPathParams, _super);
    function ReactionsListForTeamDiscussionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" }),
        __metadata("design:type", Number)
    ], ReactionsListForTeamDiscussionPathParams.prototype, "discussionNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" }),
        __metadata("design:type", Number)
    ], ReactionsListForTeamDiscussionPathParams.prototype, "teamId", void 0);
    return ReactionsListForTeamDiscussionPathParams;
}(SpeakeasyBase));
export { ReactionsListForTeamDiscussionPathParams };
export var ReactionsListForTeamDiscussionContentEnum;
(function (ReactionsListForTeamDiscussionContentEnum) {
    ReactionsListForTeamDiscussionContentEnum["Plus1"] = "+1";
    ReactionsListForTeamDiscussionContentEnum["Minus1"] = "-1";
    ReactionsListForTeamDiscussionContentEnum["Laugh"] = "laugh";
    ReactionsListForTeamDiscussionContentEnum["Confused"] = "confused";
    ReactionsListForTeamDiscussionContentEnum["Heart"] = "heart";
    ReactionsListForTeamDiscussionContentEnum["Hooray"] = "hooray";
    ReactionsListForTeamDiscussionContentEnum["Rocket"] = "rocket";
    ReactionsListForTeamDiscussionContentEnum["Eyes"] = "eyes";
})(ReactionsListForTeamDiscussionContentEnum || (ReactionsListForTeamDiscussionContentEnum = {}));
var ReactionsListForTeamDiscussionQueryParams = /** @class */ (function (_super) {
    __extends(ReactionsListForTeamDiscussionQueryParams, _super);
    function ReactionsListForTeamDiscussionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=content" }),
        __metadata("design:type", String)
    ], ReactionsListForTeamDiscussionQueryParams.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ReactionsListForTeamDiscussionQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ReactionsListForTeamDiscussionQueryParams.prototype, "perPage", void 0);
    return ReactionsListForTeamDiscussionQueryParams;
}(SpeakeasyBase));
export { ReactionsListForTeamDiscussionQueryParams };
var ReactionsListForTeamDiscussionHeaders = /** @class */ (function (_super) {
    __extends(ReactionsListForTeamDiscussionHeaders, _super);
    function ReactionsListForTeamDiscussionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=accept" }),
        __metadata("design:type", String)
    ], ReactionsListForTeamDiscussionHeaders.prototype, "accept", void 0);
    return ReactionsListForTeamDiscussionHeaders;
}(SpeakeasyBase));
export { ReactionsListForTeamDiscussionHeaders };
var ReactionsListForTeamDiscussionRequest = /** @class */ (function (_super) {
    __extends(ReactionsListForTeamDiscussionRequest, _super);
    function ReactionsListForTeamDiscussionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReactionsListForTeamDiscussionPathParams)
    ], ReactionsListForTeamDiscussionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReactionsListForTeamDiscussionQueryParams)
    ], ReactionsListForTeamDiscussionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReactionsListForTeamDiscussionHeaders)
    ], ReactionsListForTeamDiscussionRequest.prototype, "headers", void 0);
    return ReactionsListForTeamDiscussionRequest;
}(SpeakeasyBase));
export { ReactionsListForTeamDiscussionRequest };
var ReactionsListForTeamDiscussionResponse = /** @class */ (function (_super) {
    __extends(ReactionsListForTeamDiscussionResponse, _super);
    function ReactionsListForTeamDiscussionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReactionsListForTeamDiscussionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ReactionsListForTeamDiscussionResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReactionsListForTeamDiscussionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Reaction }),
        __metadata("design:type", Array)
    ], ReactionsListForTeamDiscussionResponse.prototype, "reactions", void 0);
    return ReactionsListForTeamDiscussionResponse;
}(SpeakeasyBase));
export { ReactionsListForTeamDiscussionResponse };
