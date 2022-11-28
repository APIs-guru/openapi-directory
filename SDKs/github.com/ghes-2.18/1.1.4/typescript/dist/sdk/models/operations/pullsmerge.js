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
var PullsMergePathParams = /** @class */ (function (_super) {
    __extends(PullsMergePathParams, _super);
    function PullsMergePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], PullsMergePathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pull_number" }),
        __metadata("design:type", Number)
    ], PullsMergePathParams.prototype, "pullNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], PullsMergePathParams.prototype, "repo", void 0);
    return PullsMergePathParams;
}(SpeakeasyBase));
export { PullsMergePathParams };
export var PullsMergeRequestBodyMergeMethodEnum;
(function (PullsMergeRequestBodyMergeMethodEnum) {
    PullsMergeRequestBodyMergeMethodEnum["Merge"] = "merge";
    PullsMergeRequestBodyMergeMethodEnum["Squash"] = "squash";
    PullsMergeRequestBodyMergeMethodEnum["Rebase"] = "rebase";
})(PullsMergeRequestBodyMergeMethodEnum || (PullsMergeRequestBodyMergeMethodEnum = {}));
var PullsMergeRequestBody = /** @class */ (function (_super) {
    __extends(PullsMergeRequestBody, _super);
    function PullsMergeRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commit_message" }),
        __metadata("design:type", String)
    ], PullsMergeRequestBody.prototype, "commitMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commit_title" }),
        __metadata("design:type", String)
    ], PullsMergeRequestBody.prototype, "commitTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merge_method" }),
        __metadata("design:type", String)
    ], PullsMergeRequestBody.prototype, "mergeMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha" }),
        __metadata("design:type", String)
    ], PullsMergeRequestBody.prototype, "sha", void 0);
    return PullsMergeRequestBody;
}(SpeakeasyBase));
export { PullsMergeRequestBody };
var PullsMerge405ApplicationJson = /** @class */ (function (_super) {
    __extends(PullsMerge405ApplicationJson, _super);
    function PullsMerge405ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], PullsMerge405ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PullsMerge405ApplicationJson.prototype, "message", void 0);
    return PullsMerge405ApplicationJson;
}(SpeakeasyBase));
export { PullsMerge405ApplicationJson };
var PullsMerge409ApplicationJson = /** @class */ (function (_super) {
    __extends(PullsMerge409ApplicationJson, _super);
    function PullsMerge409ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], PullsMerge409ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PullsMerge409ApplicationJson.prototype, "message", void 0);
    return PullsMerge409ApplicationJson;
}(SpeakeasyBase));
export { PullsMerge409ApplicationJson };
var PullsMergeRequest = /** @class */ (function (_super) {
    __extends(PullsMergeRequest, _super);
    function PullsMergeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PullsMergePathParams)
    ], PullsMergeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PullsMergeRequestBody)
    ], PullsMergeRequest.prototype, "request", void 0);
    return PullsMergeRequest;
}(SpeakeasyBase));
export { PullsMergeRequest };
var PullsMergeResponse = /** @class */ (function (_super) {
    __extends(PullsMergeResponse, _super);
    function PullsMergeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PullsMergeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PullsMergeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], PullsMergeResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PullRequestMergeResult)
    ], PullsMergeResponse.prototype, "pullRequestMergeResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PullsMerge405ApplicationJson)
    ], PullsMergeResponse.prototype, "pullsMerge405ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PullsMerge409ApplicationJson)
    ], PullsMergeResponse.prototype, "pullsMerge409ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], PullsMergeResponse.prototype, "validationError", void 0);
    return PullsMergeResponse;
}(SpeakeasyBase));
export { PullsMergeResponse };
