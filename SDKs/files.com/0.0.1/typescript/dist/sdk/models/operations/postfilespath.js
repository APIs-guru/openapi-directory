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
var PostFilesPathPathParams = /** @class */ (function (_super) {
    __extends(PostFilesPathPathParams, _super);
    function PostFilesPathPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" }),
        __metadata("design:type", String)
    ], PostFilesPathPathParams.prototype, "path", void 0);
    return PostFilesPathPathParams;
}(SpeakeasyBase));
export { PostFilesPathPathParams };
var PostFilesPathRequestBody = /** @class */ (function (_super) {
    __extends(PostFilesPathRequestBody, _super);
    function PostFilesPathRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=action" }),
        __metadata("design:type", String)
    ], PostFilesPathRequestBody.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=etags[etag]" }),
        __metadata("design:type", Array)
    ], PostFilesPathRequestBody.prototype, "etagsEtag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=etags[part]" }),
        __metadata("design:type", Array)
    ], PostFilesPathRequestBody.prototype, "etagsPart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=length" }),
        __metadata("design:type", Number)
    ], PostFilesPathRequestBody.prototype, "length", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=mkdir_parents" }),
        __metadata("design:type", Boolean)
    ], PostFilesPathRequestBody.prototype, "mkdirParents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=part" }),
        __metadata("design:type", Number)
    ], PostFilesPathRequestBody.prototype, "part", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=parts" }),
        __metadata("design:type", Number)
    ], PostFilesPathRequestBody.prototype, "parts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=provided_mtime" }),
        __metadata("design:type", Date)
    ], PostFilesPathRequestBody.prototype, "providedMtime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=ref" }),
        __metadata("design:type", String)
    ], PostFilesPathRequestBody.prototype, "ref", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=restart" }),
        __metadata("design:type", Number)
    ], PostFilesPathRequestBody.prototype, "restart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=size" }),
        __metadata("design:type", Number)
    ], PostFilesPathRequestBody.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=structure" }),
        __metadata("design:type", String)
    ], PostFilesPathRequestBody.prototype, "structure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=with_rename" }),
        __metadata("design:type", Boolean)
    ], PostFilesPathRequestBody.prototype, "withRename", void 0);
    return PostFilesPathRequestBody;
}(SpeakeasyBase));
export { PostFilesPathRequestBody };
var PostFilesPathRequest = /** @class */ (function (_super) {
    __extends(PostFilesPathRequest, _super);
    function PostFilesPathRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostFilesPathPathParams)
    ], PostFilesPathRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PostFilesPathRequestBody)
    ], PostFilesPathRequest.prototype, "request", void 0);
    return PostFilesPathRequest;
}(SpeakeasyBase));
export { PostFilesPathRequest };
var PostFilesPathResponse = /** @class */ (function (_super) {
    __extends(PostFilesPathResponse, _super);
    function PostFilesPathResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostFilesPathResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FileEntity)
    ], PostFilesPathResponse.prototype, "fileEntity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostFilesPathResponse.prototype, "statusCode", void 0);
    return PostFilesPathResponse;
}(SpeakeasyBase));
export { PostFilesPathResponse };
