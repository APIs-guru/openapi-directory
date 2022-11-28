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
var ReactionsListForTeamDiscussionInOrgPathParams = /** @class */ (function (_super) {
    __extends(ReactionsListForTeamDiscussionInOrgPathParams, _super);
    function ReactionsListForTeamDiscussionInOrgPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" }),
        __metadata("design:type", Number)
    ], ReactionsListForTeamDiscussionInOrgPathParams.prototype, "discussionNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], ReactionsListForTeamDiscussionInOrgPathParams.prototype, "org", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_slug" }),
        __metadata("design:type", String)
    ], ReactionsListForTeamDiscussionInOrgPathParams.prototype, "teamSlug", void 0);
    return ReactionsListForTeamDiscussionInOrgPathParams;
}(SpeakeasyBase));
export { ReactionsListForTeamDiscussionInOrgPathParams };
export var ReactionsListForTeamDiscussionInOrgContentEnum;
(function (ReactionsListForTeamDiscussionInOrgContentEnum) {
    ReactionsListForTeamDiscussionInOrgContentEnum["Plus1"] = "+1";
    ReactionsListForTeamDiscussionInOrgContentEnum["Minus1"] = "-1";
    ReactionsListForTeamDiscussionInOrgContentEnum["Laugh"] = "laugh";
    ReactionsListForTeamDiscussionInOrgContentEnum["Confused"] = "confused";
    ReactionsListForTeamDiscussionInOrgContentEnum["Heart"] = "heart";
    ReactionsListForTeamDiscussionInOrgContentEnum["Hooray"] = "hooray";
    ReactionsListForTeamDiscussionInOrgContentEnum["Rocket"] = "rocket";
    ReactionsListForTeamDiscussionInOrgContentEnum["Eyes"] = "eyes";
})(ReactionsListForTeamDiscussionInOrgContentEnum || (ReactionsListForTeamDiscussionInOrgContentEnum = {}));
var ReactionsListForTeamDiscussionInOrgQueryParams = /** @class */ (function (_super) {
    __extends(ReactionsListForTeamDiscussionInOrgQueryParams, _super);
    function ReactionsListForTeamDiscussionInOrgQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=content" }),
        __metadata("design:type", String)
    ], ReactionsListForTeamDiscussionInOrgQueryParams.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ReactionsListForTeamDiscussionInOrgQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ReactionsListForTeamDiscussionInOrgQueryParams.prototype, "perPage", void 0);
    return ReactionsListForTeamDiscussionInOrgQueryParams;
}(SpeakeasyBase));
export { ReactionsListForTeamDiscussionInOrgQueryParams };
var ReactionsListForTeamDiscussionInOrgRequest = /** @class */ (function (_super) {
    __extends(ReactionsListForTeamDiscussionInOrgRequest, _super);
    function ReactionsListForTeamDiscussionInOrgRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReactionsListForTeamDiscussionInOrgPathParams)
    ], ReactionsListForTeamDiscussionInOrgRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReactionsListForTeamDiscussionInOrgQueryParams)
    ], ReactionsListForTeamDiscussionInOrgRequest.prototype, "queryParams", void 0);
    return ReactionsListForTeamDiscussionInOrgRequest;
}(SpeakeasyBase));
export { ReactionsListForTeamDiscussionInOrgRequest };
var ReactionsListForTeamDiscussionInOrgResponse = /** @class */ (function (_super) {
    __extends(ReactionsListForTeamDiscussionInOrgResponse, _super);
    function ReactionsListForTeamDiscussionInOrgResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReactionsListForTeamDiscussionInOrgResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ReactionsListForTeamDiscussionInOrgResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReactionsListForTeamDiscussionInOrgResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Reaction }),
        __metadata("design:type", Array)
    ], ReactionsListForTeamDiscussionInOrgResponse.prototype, "reactions", void 0);
    return ReactionsListForTeamDiscussionInOrgResponse;
}(SpeakeasyBase));
export { ReactionsListForTeamDiscussionInOrgResponse };
