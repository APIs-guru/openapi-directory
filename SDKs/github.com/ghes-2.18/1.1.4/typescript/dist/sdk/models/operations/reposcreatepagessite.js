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
var ReposCreatePagesSitePathParams = /** @class */ (function (_super) {
    __extends(ReposCreatePagesSitePathParams, _super);
    function ReposCreatePagesSitePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposCreatePagesSitePathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposCreatePagesSitePathParams.prototype, "repo", void 0);
    return ReposCreatePagesSitePathParams;
}(SpeakeasyBase));
export { ReposCreatePagesSitePathParams };
export var ReposCreatePagesSiteRequestBodySourceBranchEnum;
(function (ReposCreatePagesSiteRequestBodySourceBranchEnum) {
    ReposCreatePagesSiteRequestBodySourceBranchEnum["Master"] = "master";
    ReposCreatePagesSiteRequestBodySourceBranchEnum["GhPages"] = "gh-pages";
})(ReposCreatePagesSiteRequestBodySourceBranchEnum || (ReposCreatePagesSiteRequestBodySourceBranchEnum = {}));
export var ReposCreatePagesSiteRequestBodySourcePathEnum;
(function (ReposCreatePagesSiteRequestBodySourcePathEnum) {
    ReposCreatePagesSiteRequestBodySourcePathEnum["Root"] = "/";
    ReposCreatePagesSiteRequestBodySourcePathEnum["RootDocs"] = "/docs";
})(ReposCreatePagesSiteRequestBodySourcePathEnum || (ReposCreatePagesSiteRequestBodySourcePathEnum = {}));
// ReposCreatePagesSiteRequestBodySource
/**
 * The source branch and directory used to publish your Pages site.
**/
var ReposCreatePagesSiteRequestBodySource = /** @class */ (function (_super) {
    __extends(ReposCreatePagesSiteRequestBodySource, _super);
    function ReposCreatePagesSiteRequestBodySource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=branch" }),
        __metadata("design:type", String)
    ], ReposCreatePagesSiteRequestBodySource.prototype, "branch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], ReposCreatePagesSiteRequestBodySource.prototype, "path", void 0);
    return ReposCreatePagesSiteRequestBodySource;
}(SpeakeasyBase));
export { ReposCreatePagesSiteRequestBodySource };
// ReposCreatePagesSiteRequestBody
/**
 * The source branch and directory used to publish your Pages site.
**/
var ReposCreatePagesSiteRequestBody = /** @class */ (function (_super) {
    __extends(ReposCreatePagesSiteRequestBody, _super);
    function ReposCreatePagesSiteRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", ReposCreatePagesSiteRequestBodySource)
    ], ReposCreatePagesSiteRequestBody.prototype, "source", void 0);
    return ReposCreatePagesSiteRequestBody;
}(SpeakeasyBase));
export { ReposCreatePagesSiteRequestBody };
var ReposCreatePagesSite415ApplicationJson = /** @class */ (function (_super) {
    __extends(ReposCreatePagesSite415ApplicationJson, _super);
    function ReposCreatePagesSite415ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], ReposCreatePagesSite415ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ReposCreatePagesSite415ApplicationJson.prototype, "message", void 0);
    return ReposCreatePagesSite415ApplicationJson;
}(SpeakeasyBase));
export { ReposCreatePagesSite415ApplicationJson };
var ReposCreatePagesSiteRequest = /** @class */ (function (_super) {
    __extends(ReposCreatePagesSiteRequest, _super);
    function ReposCreatePagesSiteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposCreatePagesSitePathParams)
    ], ReposCreatePagesSiteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReposCreatePagesSiteRequestBody)
    ], ReposCreatePagesSiteRequest.prototype, "request", void 0);
    return ReposCreatePagesSiteRequest;
}(SpeakeasyBase));
export { ReposCreatePagesSiteRequest };
var ReposCreatePagesSiteResponse = /** @class */ (function (_super) {
    __extends(ReposCreatePagesSiteResponse, _super);
    function ReposCreatePagesSiteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReposCreatePagesSiteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReposCreatePagesSiteResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ReposCreatePagesSiteResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Page)
    ], ReposCreatePagesSiteResponse.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposCreatePagesSite415ApplicationJson)
    ], ReposCreatePagesSiteResponse.prototype, "reposCreatePagesSite415ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], ReposCreatePagesSiteResponse.prototype, "validationError", void 0);
    return ReposCreatePagesSiteResponse;
}(SpeakeasyBase));
export { ReposCreatePagesSiteResponse };
