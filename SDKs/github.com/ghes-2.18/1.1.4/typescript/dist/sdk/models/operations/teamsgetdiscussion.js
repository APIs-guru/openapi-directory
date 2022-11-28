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
var TeamsGetDiscussionPathParams = /** @class */ (function (_super) {
    __extends(TeamsGetDiscussionPathParams, _super);
    function TeamsGetDiscussionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" }),
        __metadata("design:type", Number)
    ], TeamsGetDiscussionPathParams.prototype, "discussionNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" }),
        __metadata("design:type", Number)
    ], TeamsGetDiscussionPathParams.prototype, "teamId", void 0);
    return TeamsGetDiscussionPathParams;
}(SpeakeasyBase));
export { TeamsGetDiscussionPathParams };
var TeamsGetDiscussionHeaders = /** @class */ (function (_super) {
    __extends(TeamsGetDiscussionHeaders, _super);
    function TeamsGetDiscussionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=accept" }),
        __metadata("design:type", String)
    ], TeamsGetDiscussionHeaders.prototype, "accept", void 0);
    return TeamsGetDiscussionHeaders;
}(SpeakeasyBase));
export { TeamsGetDiscussionHeaders };
var TeamsGetDiscussionRequest = /** @class */ (function (_super) {
    __extends(TeamsGetDiscussionRequest, _super);
    function TeamsGetDiscussionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsGetDiscussionPathParams)
    ], TeamsGetDiscussionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsGetDiscussionHeaders)
    ], TeamsGetDiscussionRequest.prototype, "headers", void 0);
    return TeamsGetDiscussionRequest;
}(SpeakeasyBase));
export { TeamsGetDiscussionRequest };
var TeamsGetDiscussionResponse = /** @class */ (function (_super) {
    __extends(TeamsGetDiscussionResponse, _super);
    function TeamsGetDiscussionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TeamsGetDiscussionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TeamsGetDiscussionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TeamDiscussion)
    ], TeamsGetDiscussionResponse.prototype, "teamDiscussion", void 0);
    return TeamsGetDiscussionResponse;
}(SpeakeasyBase));
export { TeamsGetDiscussionResponse };
