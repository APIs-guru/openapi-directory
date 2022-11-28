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
var TeamsListDiscussionCommentsLegacyPathParams = /** @class */ (function (_super) {
    __extends(TeamsListDiscussionCommentsLegacyPathParams, _super);
    function TeamsListDiscussionCommentsLegacyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" }),
        __metadata("design:type", Number)
    ], TeamsListDiscussionCommentsLegacyPathParams.prototype, "discussionNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" }),
        __metadata("design:type", Number)
    ], TeamsListDiscussionCommentsLegacyPathParams.prototype, "teamId", void 0);
    return TeamsListDiscussionCommentsLegacyPathParams;
}(SpeakeasyBase));
export { TeamsListDiscussionCommentsLegacyPathParams };
var TeamsListDiscussionCommentsLegacyQueryParams = /** @class */ (function (_super) {
    __extends(TeamsListDiscussionCommentsLegacyQueryParams, _super);
    function TeamsListDiscussionCommentsLegacyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], TeamsListDiscussionCommentsLegacyQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], TeamsListDiscussionCommentsLegacyQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], TeamsListDiscussionCommentsLegacyQueryParams.prototype, "perPage", void 0);
    return TeamsListDiscussionCommentsLegacyQueryParams;
}(SpeakeasyBase));
export { TeamsListDiscussionCommentsLegacyQueryParams };
var TeamsListDiscussionCommentsLegacyRequest = /** @class */ (function (_super) {
    __extends(TeamsListDiscussionCommentsLegacyRequest, _super);
    function TeamsListDiscussionCommentsLegacyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsListDiscussionCommentsLegacyPathParams)
    ], TeamsListDiscussionCommentsLegacyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsListDiscussionCommentsLegacyQueryParams)
    ], TeamsListDiscussionCommentsLegacyRequest.prototype, "queryParams", void 0);
    return TeamsListDiscussionCommentsLegacyRequest;
}(SpeakeasyBase));
export { TeamsListDiscussionCommentsLegacyRequest };
var TeamsListDiscussionCommentsLegacyResponse = /** @class */ (function (_super) {
    __extends(TeamsListDiscussionCommentsLegacyResponse, _super);
    function TeamsListDiscussionCommentsLegacyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TeamsListDiscussionCommentsLegacyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], TeamsListDiscussionCommentsLegacyResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TeamsListDiscussionCommentsLegacyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.TeamDiscussionComment }),
        __metadata("design:type", Array)
    ], TeamsListDiscussionCommentsLegacyResponse.prototype, "teamDiscussionComments", void 0);
    return TeamsListDiscussionCommentsLegacyResponse;
}(SpeakeasyBase));
export { TeamsListDiscussionCommentsLegacyResponse };
