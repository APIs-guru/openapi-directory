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
var GitCreateTagPathParams = /** @class */ (function (_super) {
    __extends(GitCreateTagPathParams, _super);
    function GitCreateTagPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], GitCreateTagPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], GitCreateTagPathParams.prototype, "repo", void 0);
    return GitCreateTagPathParams;
}(SpeakeasyBase));
export { GitCreateTagPathParams };
// GitCreateTagRequestBodyTagger
/**
 * An object with information about the individual creating the tag.
**/
var GitCreateTagRequestBodyTagger = /** @class */ (function (_super) {
    __extends(GitCreateTagRequestBodyTagger, _super);
    function GitCreateTagRequestBodyTagger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", String)
    ], GitCreateTagRequestBodyTagger.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], GitCreateTagRequestBodyTagger.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GitCreateTagRequestBodyTagger.prototype, "name", void 0);
    return GitCreateTagRequestBodyTagger;
}(SpeakeasyBase));
export { GitCreateTagRequestBodyTagger };
export var GitCreateTagRequestBodyTypeEnum;
(function (GitCreateTagRequestBodyTypeEnum) {
    GitCreateTagRequestBodyTypeEnum["Commit"] = "commit";
    GitCreateTagRequestBodyTypeEnum["Tree"] = "tree";
    GitCreateTagRequestBodyTypeEnum["Blob"] = "blob";
})(GitCreateTagRequestBodyTypeEnum || (GitCreateTagRequestBodyTypeEnum = {}));
var GitCreateTagRequestBody = /** @class */ (function (_super) {
    __extends(GitCreateTagRequestBody, _super);
    function GitCreateTagRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GitCreateTagRequestBody.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=object" }),
        __metadata("design:type", String)
    ], GitCreateTagRequestBody.prototype, "object", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], GitCreateTagRequestBody.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagger" }),
        __metadata("design:type", GitCreateTagRequestBodyTagger)
    ], GitCreateTagRequestBody.prototype, "tagger", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GitCreateTagRequestBody.prototype, "type", void 0);
    return GitCreateTagRequestBody;
}(SpeakeasyBase));
export { GitCreateTagRequestBody };
var GitCreateTagRequest = /** @class */ (function (_super) {
    __extends(GitCreateTagRequest, _super);
    function GitCreateTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GitCreateTagPathParams)
    ], GitCreateTagRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", GitCreateTagRequestBody)
    ], GitCreateTagRequest.prototype, "request", void 0);
    return GitCreateTagRequest;
}(SpeakeasyBase));
export { GitCreateTagRequest };
var GitCreateTagResponse = /** @class */ (function (_super) {
    __extends(GitCreateTagResponse, _super);
    function GitCreateTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GitCreateTagResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GitCreateTagResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GitCreateTagResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GitTag)
    ], GitCreateTagResponse.prototype, "gitTag", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], GitCreateTagResponse.prototype, "validationError", void 0);
    return GitCreateTagResponse;
}(SpeakeasyBase));
export { GitCreateTagResponse };
