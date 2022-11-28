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
var TeamsUpdateDiscussionPathParams = /** @class */ (function (_super) {
    __extends(TeamsUpdateDiscussionPathParams, _super);
    function TeamsUpdateDiscussionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" }),
        __metadata("design:type", Number)
    ], TeamsUpdateDiscussionPathParams.prototype, "discussionNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" }),
        __metadata("design:type", Number)
    ], TeamsUpdateDiscussionPathParams.prototype, "teamId", void 0);
    return TeamsUpdateDiscussionPathParams;
}(SpeakeasyBase));
export { TeamsUpdateDiscussionPathParams };
var TeamsUpdateDiscussionRequestBody = /** @class */ (function (_super) {
    __extends(TeamsUpdateDiscussionRequestBody, _super);
    function TeamsUpdateDiscussionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], TeamsUpdateDiscussionRequestBody.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], TeamsUpdateDiscussionRequestBody.prototype, "title", void 0);
    return TeamsUpdateDiscussionRequestBody;
}(SpeakeasyBase));
export { TeamsUpdateDiscussionRequestBody };
var TeamsUpdateDiscussionRequest = /** @class */ (function (_super) {
    __extends(TeamsUpdateDiscussionRequest, _super);
    function TeamsUpdateDiscussionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsUpdateDiscussionPathParams)
    ], TeamsUpdateDiscussionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", TeamsUpdateDiscussionRequestBody)
    ], TeamsUpdateDiscussionRequest.prototype, "request", void 0);
    return TeamsUpdateDiscussionRequest;
}(SpeakeasyBase));
export { TeamsUpdateDiscussionRequest };
var TeamsUpdateDiscussionResponse = /** @class */ (function (_super) {
    __extends(TeamsUpdateDiscussionResponse, _super);
    function TeamsUpdateDiscussionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TeamsUpdateDiscussionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TeamsUpdateDiscussionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TeamDiscussion)
    ], TeamsUpdateDiscussionResponse.prototype, "teamDiscussion", void 0);
    return TeamsUpdateDiscussionResponse;
}(SpeakeasyBase));
export { TeamsUpdateDiscussionResponse };
