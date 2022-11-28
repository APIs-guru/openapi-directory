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
var ReactionsCreateForTeamDiscussionLegacyPathParams = /** @class */ (function (_super) {
    __extends(ReactionsCreateForTeamDiscussionLegacyPathParams, _super);
    function ReactionsCreateForTeamDiscussionLegacyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" }),
        __metadata("design:type", Number)
    ], ReactionsCreateForTeamDiscussionLegacyPathParams.prototype, "discussionNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" }),
        __metadata("design:type", Number)
    ], ReactionsCreateForTeamDiscussionLegacyPathParams.prototype, "teamId", void 0);
    return ReactionsCreateForTeamDiscussionLegacyPathParams;
}(SpeakeasyBase));
export { ReactionsCreateForTeamDiscussionLegacyPathParams };
export var ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnum;
(function (ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnum) {
    ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnum["Plus1"] = "+1";
    ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnum["Minus1"] = "-1";
    ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnum["Laugh"] = "laugh";
    ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnum["Confused"] = "confused";
    ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnum["Heart"] = "heart";
    ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnum["Hooray"] = "hooray";
    ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnum["Rocket"] = "rocket";
    ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnum["Eyes"] = "eyes";
})(ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnum || (ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnum = {}));
var ReactionsCreateForTeamDiscussionLegacyRequestBody = /** @class */ (function (_super) {
    __extends(ReactionsCreateForTeamDiscussionLegacyRequestBody, _super);
    function ReactionsCreateForTeamDiscussionLegacyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], ReactionsCreateForTeamDiscussionLegacyRequestBody.prototype, "content", void 0);
    return ReactionsCreateForTeamDiscussionLegacyRequestBody;
}(SpeakeasyBase));
export { ReactionsCreateForTeamDiscussionLegacyRequestBody };
var ReactionsCreateForTeamDiscussionLegacyRequest = /** @class */ (function (_super) {
    __extends(ReactionsCreateForTeamDiscussionLegacyRequest, _super);
    function ReactionsCreateForTeamDiscussionLegacyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReactionsCreateForTeamDiscussionLegacyPathParams)
    ], ReactionsCreateForTeamDiscussionLegacyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReactionsCreateForTeamDiscussionLegacyRequestBody)
    ], ReactionsCreateForTeamDiscussionLegacyRequest.prototype, "request", void 0);
    return ReactionsCreateForTeamDiscussionLegacyRequest;
}(SpeakeasyBase));
export { ReactionsCreateForTeamDiscussionLegacyRequest };
var ReactionsCreateForTeamDiscussionLegacyResponse = /** @class */ (function (_super) {
    __extends(ReactionsCreateForTeamDiscussionLegacyResponse, _super);
    function ReactionsCreateForTeamDiscussionLegacyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReactionsCreateForTeamDiscussionLegacyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReactionsCreateForTeamDiscussionLegacyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Reaction)
    ], ReactionsCreateForTeamDiscussionLegacyResponse.prototype, "reaction", void 0);
    return ReactionsCreateForTeamDiscussionLegacyResponse;
}(SpeakeasyBase));
export { ReactionsCreateForTeamDiscussionLegacyResponse };
