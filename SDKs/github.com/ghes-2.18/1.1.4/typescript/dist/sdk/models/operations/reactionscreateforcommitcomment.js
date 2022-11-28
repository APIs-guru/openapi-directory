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
var ReactionsCreateForCommitCommentPathParams = /** @class */ (function (_super) {
    __extends(ReactionsCreateForCommitCommentPathParams, _super);
    function ReactionsCreateForCommitCommentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment_id" }),
        __metadata("design:type", Number)
    ], ReactionsCreateForCommitCommentPathParams.prototype, "commentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReactionsCreateForCommitCommentPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReactionsCreateForCommitCommentPathParams.prototype, "repo", void 0);
    return ReactionsCreateForCommitCommentPathParams;
}(SpeakeasyBase));
export { ReactionsCreateForCommitCommentPathParams };
export var ReactionsCreateForCommitCommentRequestBodyContentEnum;
(function (ReactionsCreateForCommitCommentRequestBodyContentEnum) {
    ReactionsCreateForCommitCommentRequestBodyContentEnum["Plus1"] = "+1";
    ReactionsCreateForCommitCommentRequestBodyContentEnum["Minus1"] = "-1";
    ReactionsCreateForCommitCommentRequestBodyContentEnum["Laugh"] = "laugh";
    ReactionsCreateForCommitCommentRequestBodyContentEnum["Confused"] = "confused";
    ReactionsCreateForCommitCommentRequestBodyContentEnum["Heart"] = "heart";
    ReactionsCreateForCommitCommentRequestBodyContentEnum["Hooray"] = "hooray";
    ReactionsCreateForCommitCommentRequestBodyContentEnum["Rocket"] = "rocket";
    ReactionsCreateForCommitCommentRequestBodyContentEnum["Eyes"] = "eyes";
})(ReactionsCreateForCommitCommentRequestBodyContentEnum || (ReactionsCreateForCommitCommentRequestBodyContentEnum = {}));
var ReactionsCreateForCommitCommentRequestBody = /** @class */ (function (_super) {
    __extends(ReactionsCreateForCommitCommentRequestBody, _super);
    function ReactionsCreateForCommitCommentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], ReactionsCreateForCommitCommentRequestBody.prototype, "content", void 0);
    return ReactionsCreateForCommitCommentRequestBody;
}(SpeakeasyBase));
export { ReactionsCreateForCommitCommentRequestBody };
var ReactionsCreateForCommitComment415ApplicationJson = /** @class */ (function (_super) {
    __extends(ReactionsCreateForCommitComment415ApplicationJson, _super);
    function ReactionsCreateForCommitComment415ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], ReactionsCreateForCommitComment415ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ReactionsCreateForCommitComment415ApplicationJson.prototype, "message", void 0);
    return ReactionsCreateForCommitComment415ApplicationJson;
}(SpeakeasyBase));
export { ReactionsCreateForCommitComment415ApplicationJson };
var ReactionsCreateForCommitCommentRequest = /** @class */ (function (_super) {
    __extends(ReactionsCreateForCommitCommentRequest, _super);
    function ReactionsCreateForCommitCommentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReactionsCreateForCommitCommentPathParams)
    ], ReactionsCreateForCommitCommentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReactionsCreateForCommitCommentRequestBody)
    ], ReactionsCreateForCommitCommentRequest.prototype, "request", void 0);
    return ReactionsCreateForCommitCommentRequest;
}(SpeakeasyBase));
export { ReactionsCreateForCommitCommentRequest };
var ReactionsCreateForCommitCommentResponse = /** @class */ (function (_super) {
    __extends(ReactionsCreateForCommitCommentResponse, _super);
    function ReactionsCreateForCommitCommentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReactionsCreateForCommitCommentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReactionsCreateForCommitCommentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Reaction)
    ], ReactionsCreateForCommitCommentResponse.prototype, "reaction", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReactionsCreateForCommitComment415ApplicationJson)
    ], ReactionsCreateForCommitCommentResponse.prototype, "reactionsCreateForCommitComment415ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], ReactionsCreateForCommitCommentResponse.prototype, "validationError", void 0);
    return ReactionsCreateForCommitCommentResponse;
}(SpeakeasyBase));
export { ReactionsCreateForCommitCommentResponse };
