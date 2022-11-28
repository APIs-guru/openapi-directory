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
var ReactionsCreateForIssueCommentPathParams = /** @class */ (function (_super) {
    __extends(ReactionsCreateForIssueCommentPathParams, _super);
    function ReactionsCreateForIssueCommentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment_id" }),
        __metadata("design:type", Number)
    ], ReactionsCreateForIssueCommentPathParams.prototype, "commentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReactionsCreateForIssueCommentPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReactionsCreateForIssueCommentPathParams.prototype, "repo", void 0);
    return ReactionsCreateForIssueCommentPathParams;
}(SpeakeasyBase));
export { ReactionsCreateForIssueCommentPathParams };
export var ReactionsCreateForIssueCommentRequestBodyContentEnum;
(function (ReactionsCreateForIssueCommentRequestBodyContentEnum) {
    ReactionsCreateForIssueCommentRequestBodyContentEnum["Plus1"] = "+1";
    ReactionsCreateForIssueCommentRequestBodyContentEnum["Minus1"] = "-1";
    ReactionsCreateForIssueCommentRequestBodyContentEnum["Laugh"] = "laugh";
    ReactionsCreateForIssueCommentRequestBodyContentEnum["Confused"] = "confused";
    ReactionsCreateForIssueCommentRequestBodyContentEnum["Heart"] = "heart";
    ReactionsCreateForIssueCommentRequestBodyContentEnum["Hooray"] = "hooray";
    ReactionsCreateForIssueCommentRequestBodyContentEnum["Rocket"] = "rocket";
    ReactionsCreateForIssueCommentRequestBodyContentEnum["Eyes"] = "eyes";
})(ReactionsCreateForIssueCommentRequestBodyContentEnum || (ReactionsCreateForIssueCommentRequestBodyContentEnum = {}));
var ReactionsCreateForIssueCommentRequestBody = /** @class */ (function (_super) {
    __extends(ReactionsCreateForIssueCommentRequestBody, _super);
    function ReactionsCreateForIssueCommentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], ReactionsCreateForIssueCommentRequestBody.prototype, "content", void 0);
    return ReactionsCreateForIssueCommentRequestBody;
}(SpeakeasyBase));
export { ReactionsCreateForIssueCommentRequestBody };
var ReactionsCreateForIssueComment415ApplicationJson = /** @class */ (function (_super) {
    __extends(ReactionsCreateForIssueComment415ApplicationJson, _super);
    function ReactionsCreateForIssueComment415ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], ReactionsCreateForIssueComment415ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ReactionsCreateForIssueComment415ApplicationJson.prototype, "message", void 0);
    return ReactionsCreateForIssueComment415ApplicationJson;
}(SpeakeasyBase));
export { ReactionsCreateForIssueComment415ApplicationJson };
var ReactionsCreateForIssueCommentRequest = /** @class */ (function (_super) {
    __extends(ReactionsCreateForIssueCommentRequest, _super);
    function ReactionsCreateForIssueCommentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReactionsCreateForIssueCommentPathParams)
    ], ReactionsCreateForIssueCommentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReactionsCreateForIssueCommentRequestBody)
    ], ReactionsCreateForIssueCommentRequest.prototype, "request", void 0);
    return ReactionsCreateForIssueCommentRequest;
}(SpeakeasyBase));
export { ReactionsCreateForIssueCommentRequest };
var ReactionsCreateForIssueCommentResponse = /** @class */ (function (_super) {
    __extends(ReactionsCreateForIssueCommentResponse, _super);
    function ReactionsCreateForIssueCommentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReactionsCreateForIssueCommentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReactionsCreateForIssueCommentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Reaction)
    ], ReactionsCreateForIssueCommentResponse.prototype, "reaction", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReactionsCreateForIssueComment415ApplicationJson)
    ], ReactionsCreateForIssueCommentResponse.prototype, "reactionsCreateForIssueComment415ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], ReactionsCreateForIssueCommentResponse.prototype, "validationError", void 0);
    return ReactionsCreateForIssueCommentResponse;
}(SpeakeasyBase));
export { ReactionsCreateForIssueCommentResponse };
