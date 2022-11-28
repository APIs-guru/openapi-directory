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
var ReactionsListForCommitCommentPathParams = /** @class */ (function (_super) {
    __extends(ReactionsListForCommitCommentPathParams, _super);
    function ReactionsListForCommitCommentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment_id" }),
        __metadata("design:type", Number)
    ], ReactionsListForCommitCommentPathParams.prototype, "commentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReactionsListForCommitCommentPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReactionsListForCommitCommentPathParams.prototype, "repo", void 0);
    return ReactionsListForCommitCommentPathParams;
}(SpeakeasyBase));
export { ReactionsListForCommitCommentPathParams };
export var ReactionsListForCommitCommentContentEnum;
(function (ReactionsListForCommitCommentContentEnum) {
    ReactionsListForCommitCommentContentEnum["Plus1"] = "+1";
    ReactionsListForCommitCommentContentEnum["Minus1"] = "-1";
    ReactionsListForCommitCommentContentEnum["Laugh"] = "laugh";
    ReactionsListForCommitCommentContentEnum["Confused"] = "confused";
    ReactionsListForCommitCommentContentEnum["Heart"] = "heart";
    ReactionsListForCommitCommentContentEnum["Hooray"] = "hooray";
    ReactionsListForCommitCommentContentEnum["Rocket"] = "rocket";
    ReactionsListForCommitCommentContentEnum["Eyes"] = "eyes";
})(ReactionsListForCommitCommentContentEnum || (ReactionsListForCommitCommentContentEnum = {}));
var ReactionsListForCommitCommentQueryParams = /** @class */ (function (_super) {
    __extends(ReactionsListForCommitCommentQueryParams, _super);
    function ReactionsListForCommitCommentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=content" }),
        __metadata("design:type", String)
    ], ReactionsListForCommitCommentQueryParams.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ReactionsListForCommitCommentQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ReactionsListForCommitCommentQueryParams.prototype, "perPage", void 0);
    return ReactionsListForCommitCommentQueryParams;
}(SpeakeasyBase));
export { ReactionsListForCommitCommentQueryParams };
var ReactionsListForCommitComment415ApplicationJson = /** @class */ (function (_super) {
    __extends(ReactionsListForCommitComment415ApplicationJson, _super);
    function ReactionsListForCommitComment415ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], ReactionsListForCommitComment415ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ReactionsListForCommitComment415ApplicationJson.prototype, "message", void 0);
    return ReactionsListForCommitComment415ApplicationJson;
}(SpeakeasyBase));
export { ReactionsListForCommitComment415ApplicationJson };
var ReactionsListForCommitCommentRequest = /** @class */ (function (_super) {
    __extends(ReactionsListForCommitCommentRequest, _super);
    function ReactionsListForCommitCommentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReactionsListForCommitCommentPathParams)
    ], ReactionsListForCommitCommentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReactionsListForCommitCommentQueryParams)
    ], ReactionsListForCommitCommentRequest.prototype, "queryParams", void 0);
    return ReactionsListForCommitCommentRequest;
}(SpeakeasyBase));
export { ReactionsListForCommitCommentRequest };
var ReactionsListForCommitCommentResponse = /** @class */ (function (_super) {
    __extends(ReactionsListForCommitCommentResponse, _super);
    function ReactionsListForCommitCommentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReactionsListForCommitCommentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ReactionsListForCommitCommentResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReactionsListForCommitCommentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ReactionsListForCommitCommentResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Reaction }),
        __metadata("design:type", Array)
    ], ReactionsListForCommitCommentResponse.prototype, "reactions", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReactionsListForCommitComment415ApplicationJson)
    ], ReactionsListForCommitCommentResponse.prototype, "reactionsListForCommitComment415ApplicationJsonObject", void 0);
    return ReactionsListForCommitCommentResponse;
}(SpeakeasyBase));
export { ReactionsListForCommitCommentResponse };
