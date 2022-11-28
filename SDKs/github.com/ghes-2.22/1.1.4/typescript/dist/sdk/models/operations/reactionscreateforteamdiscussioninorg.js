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
var ReactionsCreateForTeamDiscussionInOrgPathParams = /** @class */ (function (_super) {
    __extends(ReactionsCreateForTeamDiscussionInOrgPathParams, _super);
    function ReactionsCreateForTeamDiscussionInOrgPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" }),
        __metadata("design:type", Number)
    ], ReactionsCreateForTeamDiscussionInOrgPathParams.prototype, "discussionNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], ReactionsCreateForTeamDiscussionInOrgPathParams.prototype, "org", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_slug" }),
        __metadata("design:type", String)
    ], ReactionsCreateForTeamDiscussionInOrgPathParams.prototype, "teamSlug", void 0);
    return ReactionsCreateForTeamDiscussionInOrgPathParams;
}(SpeakeasyBase));
export { ReactionsCreateForTeamDiscussionInOrgPathParams };
export var ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum;
(function (ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum) {
    ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum["Plus1"] = "+1";
    ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum["Minus1"] = "-1";
    ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum["Laugh"] = "laugh";
    ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum["Confused"] = "confused";
    ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum["Heart"] = "heart";
    ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum["Hooray"] = "hooray";
    ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum["Rocket"] = "rocket";
    ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum["Eyes"] = "eyes";
})(ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum || (ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum = {}));
var ReactionsCreateForTeamDiscussionInOrgRequestBody = /** @class */ (function (_super) {
    __extends(ReactionsCreateForTeamDiscussionInOrgRequestBody, _super);
    function ReactionsCreateForTeamDiscussionInOrgRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], ReactionsCreateForTeamDiscussionInOrgRequestBody.prototype, "content", void 0);
    return ReactionsCreateForTeamDiscussionInOrgRequestBody;
}(SpeakeasyBase));
export { ReactionsCreateForTeamDiscussionInOrgRequestBody };
var ReactionsCreateForTeamDiscussionInOrgRequest = /** @class */ (function (_super) {
    __extends(ReactionsCreateForTeamDiscussionInOrgRequest, _super);
    function ReactionsCreateForTeamDiscussionInOrgRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReactionsCreateForTeamDiscussionInOrgPathParams)
    ], ReactionsCreateForTeamDiscussionInOrgRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReactionsCreateForTeamDiscussionInOrgRequestBody)
    ], ReactionsCreateForTeamDiscussionInOrgRequest.prototype, "request", void 0);
    return ReactionsCreateForTeamDiscussionInOrgRequest;
}(SpeakeasyBase));
export { ReactionsCreateForTeamDiscussionInOrgRequest };
var ReactionsCreateForTeamDiscussionInOrgResponse = /** @class */ (function (_super) {
    __extends(ReactionsCreateForTeamDiscussionInOrgResponse, _super);
    function ReactionsCreateForTeamDiscussionInOrgResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReactionsCreateForTeamDiscussionInOrgResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReactionsCreateForTeamDiscussionInOrgResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Reaction)
    ], ReactionsCreateForTeamDiscussionInOrgResponse.prototype, "reaction", void 0);
    return ReactionsCreateForTeamDiscussionInOrgResponse;
}(SpeakeasyBase));
export { ReactionsCreateForTeamDiscussionInOrgResponse };
