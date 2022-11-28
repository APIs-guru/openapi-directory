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
var DownloadCertificatePathParams = /** @class */ (function (_super) {
    __extends(DownloadCertificatePathParams, _super);
    function DownloadCertificatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sha1Fingerprint" }),
        __metadata("design:type", String)
    ], DownloadCertificatePathParams.prototype, "sha1Fingerprint", void 0);
    return DownloadCertificatePathParams;
}(SpeakeasyBase));
export { DownloadCertificatePathParams };
var DownloadCertificateQueryParams = /** @class */ (function (_super) {
    __extends(DownloadCertificateQueryParams, _super);
    function DownloadCertificateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=file_format" }),
        __metadata("design:type", String)
    ], DownloadCertificateQueryParams.prototype, "fileFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=password" }),
        __metadata("design:type", String)
    ], DownloadCertificateQueryParams.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sha1_fingerprint" }),
        __metadata("design:type", String)
    ], DownloadCertificateQueryParams.prototype, "sha1Fingerprint", void 0);
    return DownloadCertificateQueryParams;
}(SpeakeasyBase));
export { DownloadCertificateQueryParams };
var DownloadCertificateRequest = /** @class */ (function (_super) {
    __extends(DownloadCertificateRequest, _super);
    function DownloadCertificateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DownloadCertificatePathParams)
    ], DownloadCertificateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DownloadCertificateQueryParams)
    ], DownloadCertificateRequest.prototype, "queryParams", void 0);
    return DownloadCertificateRequest;
}(SpeakeasyBase));
export { DownloadCertificateRequest };
var DownloadCertificateResponse = /** @class */ (function (_super) {
    __extends(DownloadCertificateResponse, _super);
    function DownloadCertificateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DownloadCertificateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], DownloadCertificateResponse.prototype, "downloadCertificate200ApplicationJsonBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DownloadCertificateResponse.prototype, "statusCode", void 0);
    return DownloadCertificateResponse;
}(SpeakeasyBase));
export { DownloadCertificateResponse };
