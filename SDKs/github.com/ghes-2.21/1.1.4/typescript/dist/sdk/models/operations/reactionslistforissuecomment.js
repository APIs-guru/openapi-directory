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
var ReactionsListForIssueCommentPathParams = /** @class */ (function (_super) {
    __extends(ReactionsListForIssueCommentPathParams, _super);
    function ReactionsListForIssueCommentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment_id" }),
        __metadata("design:type", Number)
    ], ReactionsListForIssueCommentPathParams.prototype, "commentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReactionsListForIssueCommentPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReactionsListForIssueCommentPathParams.prototype, "repo", void 0);
    return ReactionsListForIssueCommentPathParams;
}(SpeakeasyBase));
export { ReactionsListForIssueCommentPathParams };
export var ReactionsListForIssueCommentContentEnum;
(function (ReactionsListForIssueCommentContentEnum) {
    ReactionsListForIssueCommentContentEnum["Plus1"] = "+1";
    ReactionsListForIssueCommentContentEnum["Minus1"] = "-1";
    ReactionsListForIssueCommentContentEnum["Laugh"] = "laugh";
    ReactionsListForIssueCommentContentEnum["Confused"] = "confused";
    ReactionsListForIssueCommentContentEnum["Heart"] = "heart";
    ReactionsListForIssueCommentContentEnum["Hooray"] = "hooray";
    ReactionsListForIssueCommentContentEnum["Rocket"] = "rocket";
    ReactionsListForIssueCommentContentEnum["Eyes"] = "eyes";
})(ReactionsListForIssueCommentContentEnum || (ReactionsListForIssueCommentContentEnum = {}));
var ReactionsListForIssueCommentQueryParams = /** @class */ (function (_super) {
    __extends(ReactionsListForIssueCommentQueryParams, _super);
    function ReactionsListForIssueCommentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=content" }),
        __metadata("design:type", String)
    ], ReactionsListForIssueCommentQueryParams.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ReactionsListForIssueCommentQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ReactionsListForIssueCommentQueryParams.prototype, "perPage", void 0);
    return ReactionsListForIssueCommentQueryParams;
}(SpeakeasyBase));
export { ReactionsListForIssueCommentQueryParams };
var ReactionsListForIssueComment415ApplicationJson = /** @class */ (function (_super) {
    __extends(ReactionsListForIssueComment415ApplicationJson, _super);
    function ReactionsListForIssueComment415ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], ReactionsListForIssueComment415ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ReactionsListForIssueComment415ApplicationJson.prototype, "message", void 0);
    return ReactionsListForIssueComment415ApplicationJson;
}(SpeakeasyBase));
export { ReactionsListForIssueComment415ApplicationJson };
var ReactionsListForIssueCommentRequest = /** @class */ (function (_super) {
    __extends(ReactionsListForIssueCommentRequest, _super);
    function ReactionsListForIssueCommentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReactionsListForIssueCommentPathParams)
    ], ReactionsListForIssueCommentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReactionsListForIssueCommentQueryParams)
    ], ReactionsListForIssueCommentRequest.prototype, "queryParams", void 0);
    return ReactionsListForIssueCommentRequest;
}(SpeakeasyBase));
export { ReactionsListForIssueCommentRequest };
var ReactionsListForIssueCommentResponse = /** @class */ (function (_super) {
    __extends(ReactionsListForIssueCommentResponse, _super);
    function ReactionsListForIssueCommentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReactionsListForIssueCommentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ReactionsListForIssueCommentResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReactionsListForIssueCommentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ReactionsListForIssueCommentResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Reaction }),
        __metadata("design:type", Array)
    ], ReactionsListForIssueCommentResponse.prototype, "reactions", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReactionsListForIssueComment415ApplicationJson)
    ], ReactionsListForIssueCommentResponse.prototype, "reactionsListForIssueComment415ApplicationJsonObject", void 0);
    return ReactionsListForIssueCommentResponse;
}(SpeakeasyBase));
export { ReactionsListForIssueCommentResponse };
