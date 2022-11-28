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
var TeamsListDiscussionCommentsPathParams = /** @class */ (function (_super) {
    __extends(TeamsListDiscussionCommentsPathParams, _super);
    function TeamsListDiscussionCommentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" }),
        __metadata("design:type", Number)
    ], TeamsListDiscussionCommentsPathParams.prototype, "discussionNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" }),
        __metadata("design:type", Number)
    ], TeamsListDiscussionCommentsPathParams.prototype, "teamId", void 0);
    return TeamsListDiscussionCommentsPathParams;
}(SpeakeasyBase));
export { TeamsListDiscussionCommentsPathParams };
var TeamsListDiscussionCommentsQueryParams = /** @class */ (function (_super) {
    __extends(TeamsListDiscussionCommentsQueryParams, _super);
    function TeamsListDiscussionCommentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], TeamsListDiscussionCommentsQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], TeamsListDiscussionCommentsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], TeamsListDiscussionCommentsQueryParams.prototype, "perPage", void 0);
    return TeamsListDiscussionCommentsQueryParams;
}(SpeakeasyBase));
export { TeamsListDiscussionCommentsQueryParams };
var TeamsListDiscussionCommentsHeaders = /** @class */ (function (_super) {
    __extends(TeamsListDiscussionCommentsHeaders, _super);
    function TeamsListDiscussionCommentsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=accept" }),
        __metadata("design:type", String)
    ], TeamsListDiscussionCommentsHeaders.prototype, "accept", void 0);
    return TeamsListDiscussionCommentsHeaders;
}(SpeakeasyBase));
export { TeamsListDiscussionCommentsHeaders };
var TeamsListDiscussionCommentsRequest = /** @class */ (function (_super) {
    __extends(TeamsListDiscussionCommentsRequest, _super);
    function TeamsListDiscussionCommentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsListDiscussionCommentsPathParams)
    ], TeamsListDiscussionCommentsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsListDiscussionCommentsQueryParams)
    ], TeamsListDiscussionCommentsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsListDiscussionCommentsHeaders)
    ], TeamsListDiscussionCommentsRequest.prototype, "headers", void 0);
    return TeamsListDiscussionCommentsRequest;
}(SpeakeasyBase));
export { TeamsListDiscussionCommentsRequest };
var TeamsListDiscussionCommentsResponse = /** @class */ (function (_super) {
    __extends(TeamsListDiscussionCommentsResponse, _super);
    function TeamsListDiscussionCommentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TeamsListDiscussionCommentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], TeamsListDiscussionCommentsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TeamsListDiscussionCommentsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.TeamDiscussionComment }),
        __metadata("design:type", Array)
    ], TeamsListDiscussionCommentsResponse.prototype, "teamDiscussionComments", void 0);
    return TeamsListDiscussionCommentsResponse;
}(SpeakeasyBase));
export { TeamsListDiscussionCommentsResponse };
