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
var GistsGetCommentPathParams = /** @class */ (function (_super) {
    __extends(GistsGetCommentPathParams, _super);
    function GistsGetCommentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment_id" }),
        __metadata("design:type", Number)
    ], GistsGetCommentPathParams.prototype, "commentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=gist_id" }),
        __metadata("design:type", String)
    ], GistsGetCommentPathParams.prototype, "gistId", void 0);
    return GistsGetCommentPathParams;
}(SpeakeasyBase));
export { GistsGetCommentPathParams };
var GistsGetComment403ApplicationJsonBlock = /** @class */ (function (_super) {
    __extends(GistsGetComment403ApplicationJsonBlock, _super);
    function GistsGetComment403ApplicationJsonBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], GistsGetComment403ApplicationJsonBlock.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], GistsGetComment403ApplicationJsonBlock.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], GistsGetComment403ApplicationJsonBlock.prototype, "reason", void 0);
    return GistsGetComment403ApplicationJsonBlock;
}(SpeakeasyBase));
export { GistsGetComment403ApplicationJsonBlock };
var GistsGetComment403ApplicationJson = /** @class */ (function (_super) {
    __extends(GistsGetComment403ApplicationJson, _super);
    function GistsGetComment403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=block" }),
        __metadata("design:type", GistsGetComment403ApplicationJsonBlock)
    ], GistsGetComment403ApplicationJson.prototype, "block", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], GistsGetComment403ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GistsGetComment403ApplicationJson.prototype, "message", void 0);
    return GistsGetComment403ApplicationJson;
}(SpeakeasyBase));
export { GistsGetComment403ApplicationJson };
var GistsGetCommentRequest = /** @class */ (function (_super) {
    __extends(GistsGetCommentRequest, _super);
    function GistsGetCommentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GistsGetCommentPathParams)
    ], GistsGetCommentRequest.prototype, "pathParams", void 0);
    return GistsGetCommentRequest;
}(SpeakeasyBase));
export { GistsGetCommentRequest };
var GistsGetCommentResponse = /** @class */ (function (_super) {
    __extends(GistsGetCommentResponse, _super);
    function GistsGetCommentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GistsGetCommentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GistsGetCommentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], GistsGetCommentResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GistComment)
    ], GistsGetCommentResponse.prototype, "gistComment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GistsGetComment403ApplicationJson)
    ], GistsGetCommentResponse.prototype, "gistsGetComment403ApplicationJsonObject", void 0);
    return GistsGetCommentResponse;
}(SpeakeasyBase));
export { GistsGetCommentResponse };
