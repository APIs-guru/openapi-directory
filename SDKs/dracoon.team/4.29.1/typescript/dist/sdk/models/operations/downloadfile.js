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
var DownloadFilePathParams = /** @class */ (function (_super) {
    __extends(DownloadFilePathParams, _super);
    function DownloadFilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=file_id" }),
        __metadata("design:type", Number)
    ], DownloadFilePathParams.prototype, "fileId", void 0);
    return DownloadFilePathParams;
}(SpeakeasyBase));
export { DownloadFilePathParams };
var DownloadFileQueryParams = /** @class */ (function (_super) {
    __extends(DownloadFileQueryParams, _super);
    function DownloadFileQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=generic_mimetype" }),
        __metadata("design:type", Boolean)
    ], DownloadFileQueryParams.prototype, "genericMimetype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inline" }),
        __metadata("design:type", Boolean)
    ], DownloadFileQueryParams.prototype, "inline", void 0);
    return DownloadFileQueryParams;
}(SpeakeasyBase));
export { DownloadFileQueryParams };
var DownloadFileHeaders = /** @class */ (function (_super) {
    __extends(DownloadFileHeaders, _super);
    function DownloadFileHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Range" }),
        __metadata("design:type", String)
    ], DownloadFileHeaders.prototype, "range", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], DownloadFileHeaders.prototype, "xSdsAuthToken", void 0);
    return DownloadFileHeaders;
}(SpeakeasyBase));
export { DownloadFileHeaders };
var DownloadFileRequest = /** @class */ (function (_super) {
    __extends(DownloadFileRequest, _super);
    function DownloadFileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DownloadFilePathParams)
    ], DownloadFileRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DownloadFileQueryParams)
    ], DownloadFileRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DownloadFileHeaders)
    ], DownloadFileRequest.prototype, "headers", void 0);
    return DownloadFileRequest;
}(SpeakeasyBase));
export { DownloadFileRequest };
var DownloadFileResponse = /** @class */ (function (_super) {
    __extends(DownloadFileResponse, _super);
    function DownloadFileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], DownloadFileResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DownloadFileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DownloadFileResponse.prototype, "statusCode", void 0);
    return DownloadFileResponse;
}(SpeakeasyBase));
export { DownloadFileResponse };
