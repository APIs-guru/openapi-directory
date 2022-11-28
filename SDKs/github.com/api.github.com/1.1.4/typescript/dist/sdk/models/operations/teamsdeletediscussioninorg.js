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
var TeamsDeleteDiscussionInOrgPathParams = /** @class */ (function (_super) {
    __extends(TeamsDeleteDiscussionInOrgPathParams, _super);
    function TeamsDeleteDiscussionInOrgPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" }),
        __metadata("design:type", Number)
    ], TeamsDeleteDiscussionInOrgPathParams.prototype, "discussionNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], TeamsDeleteDiscussionInOrgPathParams.prototype, "org", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_slug" }),
        __metadata("design:type", String)
    ], TeamsDeleteDiscussionInOrgPathParams.prototype, "teamSlug", void 0);
    return TeamsDeleteDiscussionInOrgPathParams;
}(SpeakeasyBase));
export { TeamsDeleteDiscussionInOrgPathParams };
var TeamsDeleteDiscussionInOrgRequest = /** @class */ (function (_super) {
    __extends(TeamsDeleteDiscussionInOrgRequest, _super);
    function TeamsDeleteDiscussionInOrgRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsDeleteDiscussionInOrgPathParams)
    ], TeamsDeleteDiscussionInOrgRequest.prototype, "pathParams", void 0);
    return TeamsDeleteDiscussionInOrgRequest;
}(SpeakeasyBase));
export { TeamsDeleteDiscussionInOrgRequest };
var TeamsDeleteDiscussionInOrgResponse = /** @class */ (function (_super) {
    __extends(TeamsDeleteDiscussionInOrgResponse, _super);
    function TeamsDeleteDiscussionInOrgResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TeamsDeleteDiscussionInOrgResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TeamsDeleteDiscussionInOrgResponse.prototype, "statusCode", void 0);
    return TeamsDeleteDiscussionInOrgResponse;
}(SpeakeasyBase));
export { TeamsDeleteDiscussionInOrgResponse };
