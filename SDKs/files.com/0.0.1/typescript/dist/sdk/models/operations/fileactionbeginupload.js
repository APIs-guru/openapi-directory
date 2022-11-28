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
var FileActionBeginUploadPathParams = /** @class */ (function (_super) {
    __extends(FileActionBeginUploadPathParams, _super);
    function FileActionBeginUploadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" }),
        __metadata("design:type", String)
    ], FileActionBeginUploadPathParams.prototype, "path", void 0);
    return FileActionBeginUploadPathParams;
}(SpeakeasyBase));
export { FileActionBeginUploadPathParams };
var FileActionBeginUploadRequestBody = /** @class */ (function (_super) {
    __extends(FileActionBeginUploadRequestBody, _super);
    function FileActionBeginUploadRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=mkdir_parents" }),
        __metadata("design:type", Boolean)
    ], FileActionBeginUploadRequestBody.prototype, "mkdirParents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=part" }),
        __metadata("design:type", Number)
    ], FileActionBeginUploadRequestBody.prototype, "part", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=parts" }),
        __metadata("design:type", Number)
    ], FileActionBeginUploadRequestBody.prototype, "parts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=ref" }),
        __metadata("design:type", String)
    ], FileActionBeginUploadRequestBody.prototype, "ref", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=restart" }),
        __metadata("design:type", Number)
    ], FileActionBeginUploadRequestBody.prototype, "restart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=with_rename" }),
        __metadata("design:type", Boolean)
    ], FileActionBeginUploadRequestBody.prototype, "withRename", void 0);
    return FileActionBeginUploadRequestBody;
}(SpeakeasyBase));
export { FileActionBeginUploadRequestBody };
var FileActionBeginUploadRequest = /** @class */ (function (_super) {
    __extends(FileActionBeginUploadRequest, _super);
    function FileActionBeginUploadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FileActionBeginUploadPathParams)
    ], FileActionBeginUploadRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", FileActionBeginUploadRequestBody)
    ], FileActionBeginUploadRequest.prototype, "request", void 0);
    return FileActionBeginUploadRequest;
}(SpeakeasyBase));
export { FileActionBeginUploadRequest };
var FileActionBeginUploadResponse = /** @class */ (function (_super) {
    __extends(FileActionBeginUploadResponse, _super);
    function FileActionBeginUploadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FileActionBeginUploadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.FileUploadPartEntity }),
        __metadata("design:type", Array)
    ], FileActionBeginUploadResponse.prototype, "fileUploadPartEntities", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FileActionBeginUploadResponse.prototype, "statusCode", void 0);
    return FileActionBeginUploadResponse;
}(SpeakeasyBase));
export { FileActionBeginUploadResponse };
