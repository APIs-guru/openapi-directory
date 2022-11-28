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
var ReactionsCreateForIssuePathParams = /** @class */ (function (_super) {
    __extends(ReactionsCreateForIssuePathParams, _super);
    function ReactionsCreateForIssuePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=issue_number" }),
        __metadata("design:type", Number)
    ], ReactionsCreateForIssuePathParams.prototype, "issueNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReactionsCreateForIssuePathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReactionsCreateForIssuePathParams.prototype, "repo", void 0);
    return ReactionsCreateForIssuePathParams;
}(SpeakeasyBase));
export { ReactionsCreateForIssuePathParams };
export var ReactionsCreateForIssueRequestBodyContentEnum;
(function (ReactionsCreateForIssueRequestBodyContentEnum) {
    ReactionsCreateForIssueRequestBodyContentEnum["Plus1"] = "+1";
    ReactionsCreateForIssueRequestBodyContentEnum["Minus1"] = "-1";
    ReactionsCreateForIssueRequestBodyContentEnum["Laugh"] = "laugh";
    ReactionsCreateForIssueRequestBodyContentEnum["Confused"] = "confused";
    ReactionsCreateForIssueRequestBodyContentEnum["Heart"] = "heart";
    ReactionsCreateForIssueRequestBodyContentEnum["Hooray"] = "hooray";
    ReactionsCreateForIssueRequestBodyContentEnum["Rocket"] = "rocket";
    ReactionsCreateForIssueRequestBodyContentEnum["Eyes"] = "eyes";
})(ReactionsCreateForIssueRequestBodyContentEnum || (ReactionsCreateForIssueRequestBodyContentEnum = {}));
var ReactionsCreateForIssueRequestBody = /** @class */ (function (_super) {
    __extends(ReactionsCreateForIssueRequestBody, _super);
    function ReactionsCreateForIssueRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], ReactionsCreateForIssueRequestBody.prototype, "content", void 0);
    return ReactionsCreateForIssueRequestBody;
}(SpeakeasyBase));
export { ReactionsCreateForIssueRequestBody };
var ReactionsCreateForIssue415ApplicationJson = /** @class */ (function (_super) {
    __extends(ReactionsCreateForIssue415ApplicationJson, _super);
    function ReactionsCreateForIssue415ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], ReactionsCreateForIssue415ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ReactionsCreateForIssue415ApplicationJson.prototype, "message", void 0);
    return ReactionsCreateForIssue415ApplicationJson;
}(SpeakeasyBase));
export { ReactionsCreateForIssue415ApplicationJson };
var ReactionsCreateForIssueRequest = /** @class */ (function (_super) {
    __extends(ReactionsCreateForIssueRequest, _super);
    function ReactionsCreateForIssueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReactionsCreateForIssuePathParams)
    ], ReactionsCreateForIssueRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReactionsCreateForIssueRequestBody)
    ], ReactionsCreateForIssueRequest.prototype, "request", void 0);
    return ReactionsCreateForIssueRequest;
}(SpeakeasyBase));
export { ReactionsCreateForIssueRequest };
var ReactionsCreateForIssueResponse = /** @class */ (function (_super) {
    __extends(ReactionsCreateForIssueResponse, _super);
    function ReactionsCreateForIssueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReactionsCreateForIssueResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReactionsCreateForIssueResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Reaction)
    ], ReactionsCreateForIssueResponse.prototype, "reaction", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReactionsCreateForIssue415ApplicationJson)
    ], ReactionsCreateForIssueResponse.prototype, "reactionsCreateForIssue415ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], ReactionsCreateForIssueResponse.prototype, "validationError", void 0);
    return ReactionsCreateForIssueResponse;
}(SpeakeasyBase));
export { ReactionsCreateForIssueResponse };
