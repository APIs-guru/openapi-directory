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
var TeamsCreateDiscussionPathParams = /** @class */ (function (_super) {
    __extends(TeamsCreateDiscussionPathParams, _super);
    function TeamsCreateDiscussionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" }),
        __metadata("design:type", Number)
    ], TeamsCreateDiscussionPathParams.prototype, "teamId", void 0);
    return TeamsCreateDiscussionPathParams;
}(SpeakeasyBase));
export { TeamsCreateDiscussionPathParams };
var TeamsCreateDiscussionRequestBody = /** @class */ (function (_super) {
    __extends(TeamsCreateDiscussionRequestBody, _super);
    function TeamsCreateDiscussionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], TeamsCreateDiscussionRequestBody.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private" }),
        __metadata("design:type", Boolean)
    ], TeamsCreateDiscussionRequestBody.prototype, "private", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], TeamsCreateDiscussionRequestBody.prototype, "title", void 0);
    return TeamsCreateDiscussionRequestBody;
}(SpeakeasyBase));
export { TeamsCreateDiscussionRequestBody };
var TeamsCreateDiscussionRequest = /** @class */ (function (_super) {
    __extends(TeamsCreateDiscussionRequest, _super);
    function TeamsCreateDiscussionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsCreateDiscussionPathParams)
    ], TeamsCreateDiscussionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", TeamsCreateDiscussionRequestBody)
    ], TeamsCreateDiscussionRequest.prototype, "request", void 0);
    return TeamsCreateDiscussionRequest;
}(SpeakeasyBase));
export { TeamsCreateDiscussionRequest };
var TeamsCreateDiscussionResponse = /** @class */ (function (_super) {
    __extends(TeamsCreateDiscussionResponse, _super);
    function TeamsCreateDiscussionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TeamsCreateDiscussionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TeamsCreateDiscussionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TeamDiscussion)
    ], TeamsCreateDiscussionResponse.prototype, "teamDiscussion", void 0);
    return TeamsCreateDiscussionResponse;
}(SpeakeasyBase));
export { TeamsCreateDiscussionResponse };
