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
var TeamsCreateDiscussionInOrgPathParams = /** @class */ (function (_super) {
    __extends(TeamsCreateDiscussionInOrgPathParams, _super);
    function TeamsCreateDiscussionInOrgPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], TeamsCreateDiscussionInOrgPathParams.prototype, "org", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_slug" }),
        __metadata("design:type", String)
    ], TeamsCreateDiscussionInOrgPathParams.prototype, "teamSlug", void 0);
    return TeamsCreateDiscussionInOrgPathParams;
}(SpeakeasyBase));
export { TeamsCreateDiscussionInOrgPathParams };
var TeamsCreateDiscussionInOrgRequestBody = /** @class */ (function (_super) {
    __extends(TeamsCreateDiscussionInOrgRequestBody, _super);
    function TeamsCreateDiscussionInOrgRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], TeamsCreateDiscussionInOrgRequestBody.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private" }),
        __metadata("design:type", Boolean)
    ], TeamsCreateDiscussionInOrgRequestBody.prototype, "private", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], TeamsCreateDiscussionInOrgRequestBody.prototype, "title", void 0);
    return TeamsCreateDiscussionInOrgRequestBody;
}(SpeakeasyBase));
export { TeamsCreateDiscussionInOrgRequestBody };
var TeamsCreateDiscussionInOrgRequest = /** @class */ (function (_super) {
    __extends(TeamsCreateDiscussionInOrgRequest, _super);
    function TeamsCreateDiscussionInOrgRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsCreateDiscussionInOrgPathParams)
    ], TeamsCreateDiscussionInOrgRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", TeamsCreateDiscussionInOrgRequestBody)
    ], TeamsCreateDiscussionInOrgRequest.prototype, "request", void 0);
    return TeamsCreateDiscussionInOrgRequest;
}(SpeakeasyBase));
export { TeamsCreateDiscussionInOrgRequest };
var TeamsCreateDiscussionInOrgResponse = /** @class */ (function (_super) {
    __extends(TeamsCreateDiscussionInOrgResponse, _super);
    function TeamsCreateDiscussionInOrgResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TeamsCreateDiscussionInOrgResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TeamsCreateDiscussionInOrgResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TeamDiscussion)
    ], TeamsCreateDiscussionInOrgResponse.prototype, "teamDiscussion", void 0);
    return TeamsCreateDiscussionInOrgResponse;
}(SpeakeasyBase));
export { TeamsCreateDiscussionInOrgResponse };
