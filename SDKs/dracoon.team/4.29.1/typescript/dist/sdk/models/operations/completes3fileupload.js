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
var CompleteS3FileUploadPathParams = /** @class */ (function (_super) {
    __extends(CompleteS3FileUploadPathParams, _super);
    function CompleteS3FileUploadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=upload_id" }),
        __metadata("design:type", String)
    ], CompleteS3FileUploadPathParams.prototype, "uploadId", void 0);
    return CompleteS3FileUploadPathParams;
}(SpeakeasyBase));
export { CompleteS3FileUploadPathParams };
var CompleteS3FileUploadHeaders = /** @class */ (function (_super) {
    __extends(CompleteS3FileUploadHeaders, _super);
    function CompleteS3FileUploadHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], CompleteS3FileUploadHeaders.prototype, "xSdsAuthToken", void 0);
    return CompleteS3FileUploadHeaders;
}(SpeakeasyBase));
export { CompleteS3FileUploadHeaders };
var CompleteS3FileUploadRequest = /** @class */ (function (_super) {
    __extends(CompleteS3FileUploadRequest, _super);
    function CompleteS3FileUploadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CompleteS3FileUploadPathParams)
    ], CompleteS3FileUploadRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CompleteS3FileUploadHeaders)
    ], CompleteS3FileUploadRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CompleteS3FileUploadRequest)
    ], CompleteS3FileUploadRequest.prototype, "request", void 0);
    return CompleteS3FileUploadRequest;
}(SpeakeasyBase));
export { CompleteS3FileUploadRequest };
var CompleteS3FileUploadResponse = /** @class */ (function (_super) {
    __extends(CompleteS3FileUploadResponse, _super);
    function CompleteS3FileUploadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CompleteS3FileUploadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], CompleteS3FileUploadResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CompleteS3FileUploadResponse.prototype, "statusCode", void 0);
    return CompleteS3FileUploadResponse;
}(SpeakeasyBase));
export { CompleteS3FileUploadResponse };
