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
var FileDownloadPathParams = /** @class */ (function (_super) {
    __extends(FileDownloadPathParams, _super);
    function FileDownloadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" }),
        __metadata("design:type", String)
    ], FileDownloadPathParams.prototype, "path", void 0);
    return FileDownloadPathParams;
}(SpeakeasyBase));
export { FileDownloadPathParams };
var FileDownloadQueryParams = /** @class */ (function (_super) {
    __extends(FileDownloadQueryParams, _super);
    function FileDownloadQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=action" }),
        __metadata("design:type", String)
    ], FileDownloadQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=preview_size" }),
        __metadata("design:type", String)
    ], FileDownloadQueryParams.prototype, "previewSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=with_previews" }),
        __metadata("design:type", Boolean)
    ], FileDownloadQueryParams.prototype, "withPreviews", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=with_priority_color" }),
        __metadata("design:type", Boolean)
    ], FileDownloadQueryParams.prototype, "withPriorityColor", void 0);
    return FileDownloadQueryParams;
}(SpeakeasyBase));
export { FileDownloadQueryParams };
var FileDownloadRequest = /** @class */ (function (_super) {
    __extends(FileDownloadRequest, _super);
    function FileDownloadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FileDownloadPathParams)
    ], FileDownloadRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FileDownloadQueryParams)
    ], FileDownloadRequest.prototype, "queryParams", void 0);
    return FileDownloadRequest;
}(SpeakeasyBase));
export { FileDownloadRequest };
var FileDownloadResponse = /** @class */ (function (_super) {
    __extends(FileDownloadResponse, _super);
    function FileDownloadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FileDownloadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FileEntity)
    ], FileDownloadResponse.prototype, "fileEntity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FileDownloadResponse.prototype, "statusCode", void 0);
    return FileDownloadResponse;
}(SpeakeasyBase));
export { FileDownloadResponse };
