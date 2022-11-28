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
var ReposMergePathParams = /** @class */ (function (_super) {
    __extends(ReposMergePathParams, _super);
    function ReposMergePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposMergePathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposMergePathParams.prototype, "repo", void 0);
    return ReposMergePathParams;
}(SpeakeasyBase));
export { ReposMergePathParams };
var ReposMergeRequestBody = /** @class */ (function (_super) {
    __extends(ReposMergeRequestBody, _super);
    function ReposMergeRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=base" }),
        __metadata("design:type", String)
    ], ReposMergeRequestBody.prototype, "base", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commit_message" }),
        __metadata("design:type", String)
    ], ReposMergeRequestBody.prototype, "commitMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=head" }),
        __metadata("design:type", String)
    ], ReposMergeRequestBody.prototype, "head", void 0);
    return ReposMergeRequestBody;
}(SpeakeasyBase));
export { ReposMergeRequestBody };
var ReposMerge404ApplicationJson = /** @class */ (function (_super) {
    __extends(ReposMerge404ApplicationJson, _super);
    function ReposMerge404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], ReposMerge404ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ReposMerge404ApplicationJson.prototype, "message", void 0);
    return ReposMerge404ApplicationJson;
}(SpeakeasyBase));
export { ReposMerge404ApplicationJson };
var ReposMerge409ApplicationJson = /** @class */ (function (_super) {
    __extends(ReposMerge409ApplicationJson, _super);
    function ReposMerge409ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], ReposMerge409ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ReposMerge409ApplicationJson.prototype, "message", void 0);
    return ReposMerge409ApplicationJson;
}(SpeakeasyBase));
export { ReposMerge409ApplicationJson };
var ReposMergeRequest = /** @class */ (function (_super) {
    __extends(ReposMergeRequest, _super);
    function ReposMergeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposMergePathParams)
    ], ReposMergeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReposMergeRequestBody)
    ], ReposMergeRequest.prototype, "request", void 0);
    return ReposMergeRequest;
}(SpeakeasyBase));
export { ReposMergeRequest };
var ReposMergeResponse = /** @class */ (function (_super) {
    __extends(ReposMergeResponse, _super);
    function ReposMergeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReposMergeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReposMergeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ReposMergeResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Commit)
    ], ReposMergeResponse.prototype, "commit", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposMerge404ApplicationJson)
    ], ReposMergeResponse.prototype, "reposMerge404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposMerge409ApplicationJson)
    ], ReposMergeResponse.prototype, "reposMerge409ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], ReposMergeResponse.prototype, "validationError", void 0);
    return ReposMergeResponse;
}(SpeakeasyBase));
export { ReposMergeResponse };
