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
var ReactionsListForTeamDiscussionLegacyPathParams = /** @class */ (function (_super) {
    __extends(ReactionsListForTeamDiscussionLegacyPathParams, _super);
    function ReactionsListForTeamDiscussionLegacyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" }),
        __metadata("design:type", Number)
    ], ReactionsListForTeamDiscussionLegacyPathParams.prototype, "discussionNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" }),
        __metadata("design:type", Number)
    ], ReactionsListForTeamDiscussionLegacyPathParams.prototype, "teamId", void 0);
    return ReactionsListForTeamDiscussionLegacyPathParams;
}(SpeakeasyBase));
export { ReactionsListForTeamDiscussionLegacyPathParams };
export var ReactionsListForTeamDiscussionLegacyContentEnum;
(function (ReactionsListForTeamDiscussionLegacyContentEnum) {
    ReactionsListForTeamDiscussionLegacyContentEnum["Plus1"] = "+1";
    ReactionsListForTeamDiscussionLegacyContentEnum["Minus1"] = "-1";
    ReactionsListForTeamDiscussionLegacyContentEnum["Laugh"] = "laugh";
    ReactionsListForTeamDiscussionLegacyContentEnum["Confused"] = "confused";
    ReactionsListForTeamDiscussionLegacyContentEnum["Heart"] = "heart";
    ReactionsListForTeamDiscussionLegacyContentEnum["Hooray"] = "hooray";
    ReactionsListForTeamDiscussionLegacyContentEnum["Rocket"] = "rocket";
    ReactionsListForTeamDiscussionLegacyContentEnum["Eyes"] = "eyes";
})(ReactionsListForTeamDiscussionLegacyContentEnum || (ReactionsListForTeamDiscussionLegacyContentEnum = {}));
var ReactionsListForTeamDiscussionLegacyQueryParams = /** @class */ (function (_super) {
    __extends(ReactionsListForTeamDiscussionLegacyQueryParams, _super);
    function ReactionsListForTeamDiscussionLegacyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=content" }),
        __metadata("design:type", String)
    ], ReactionsListForTeamDiscussionLegacyQueryParams.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ReactionsListForTeamDiscussionLegacyQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ReactionsListForTeamDiscussionLegacyQueryParams.prototype, "perPage", void 0);
    return ReactionsListForTeamDiscussionLegacyQueryParams;
}(SpeakeasyBase));
export { ReactionsListForTeamDiscussionLegacyQueryParams };
var ReactionsListForTeamDiscussionLegacyRequest = /** @class */ (function (_super) {
    __extends(ReactionsListForTeamDiscussionLegacyRequest, _super);
    function ReactionsListForTeamDiscussionLegacyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReactionsListForTeamDiscussionLegacyPathParams)
    ], ReactionsListForTeamDiscussionLegacyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReactionsListForTeamDiscussionLegacyQueryParams)
    ], ReactionsListForTeamDiscussionLegacyRequest.prototype, "queryParams", void 0);
    return ReactionsListForTeamDiscussionLegacyRequest;
}(SpeakeasyBase));
export { ReactionsListForTeamDiscussionLegacyRequest };
var ReactionsListForTeamDiscussionLegacyResponse = /** @class */ (function (_super) {
    __extends(ReactionsListForTeamDiscussionLegacyResponse, _super);
    function ReactionsListForTeamDiscussionLegacyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReactionsListForTeamDiscussionLegacyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ReactionsListForTeamDiscussionLegacyResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReactionsListForTeamDiscussionLegacyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Reaction }),
        __metadata("design:type", Array)
    ], ReactionsListForTeamDiscussionLegacyResponse.prototype, "reactions", void 0);
    return ReactionsListForTeamDiscussionLegacyResponse;
}(SpeakeasyBase));
export { ReactionsListForTeamDiscussionLegacyResponse };
