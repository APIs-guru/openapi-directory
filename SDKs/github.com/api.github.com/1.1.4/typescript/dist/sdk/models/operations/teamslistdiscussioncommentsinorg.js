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
var TeamsListDiscussionCommentsInOrgPathParams = /** @class */ (function (_super) {
    __extends(TeamsListDiscussionCommentsInOrgPathParams, _super);
    function TeamsListDiscussionCommentsInOrgPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" }),
        __metadata("design:type", Number)
    ], TeamsListDiscussionCommentsInOrgPathParams.prototype, "discussionNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], TeamsListDiscussionCommentsInOrgPathParams.prototype, "org", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_slug" }),
        __metadata("design:type", String)
    ], TeamsListDiscussionCommentsInOrgPathParams.prototype, "teamSlug", void 0);
    return TeamsListDiscussionCommentsInOrgPathParams;
}(SpeakeasyBase));
export { TeamsListDiscussionCommentsInOrgPathParams };
var TeamsListDiscussionCommentsInOrgQueryParams = /** @class */ (function (_super) {
    __extends(TeamsListDiscussionCommentsInOrgQueryParams, _super);
    function TeamsListDiscussionCommentsInOrgQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], TeamsListDiscussionCommentsInOrgQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], TeamsListDiscussionCommentsInOrgQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], TeamsListDiscussionCommentsInOrgQueryParams.prototype, "perPage", void 0);
    return TeamsListDiscussionCommentsInOrgQueryParams;
}(SpeakeasyBase));
export { TeamsListDiscussionCommentsInOrgQueryParams };
var TeamsListDiscussionCommentsInOrgRequest = /** @class */ (function (_super) {
    __extends(TeamsListDiscussionCommentsInOrgRequest, _super);
    function TeamsListDiscussionCommentsInOrgRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsListDiscussionCommentsInOrgPathParams)
    ], TeamsListDiscussionCommentsInOrgRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsListDiscussionCommentsInOrgQueryParams)
    ], TeamsListDiscussionCommentsInOrgRequest.prototype, "queryParams", void 0);
    return TeamsListDiscussionCommentsInOrgRequest;
}(SpeakeasyBase));
export { TeamsListDiscussionCommentsInOrgRequest };
var TeamsListDiscussionCommentsInOrgResponse = /** @class */ (function (_super) {
    __extends(TeamsListDiscussionCommentsInOrgResponse, _super);
    function TeamsListDiscussionCommentsInOrgResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TeamsListDiscussionCommentsInOrgResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], TeamsListDiscussionCommentsInOrgResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TeamsListDiscussionCommentsInOrgResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.TeamDiscussionComment }),
        __metadata("design:type", Array)
    ], TeamsListDiscussionCommentsInOrgResponse.prototype, "teamDiscussionComments", void 0);
    return TeamsListDiscussionCommentsInOrgResponse;
}(SpeakeasyBase));
export { TeamsListDiscussionCommentsInOrgResponse };
