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
var GetSslCertificatePathParams = /** @class */ (function (_super) {
    __extends(GetSslCertificatePathParams, _super);
    function GetSslCertificatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sha1Fingerprint" }),
        __metadata("design:type", String)
    ], GetSslCertificatePathParams.prototype, "sha1Fingerprint", void 0);
    return GetSslCertificatePathParams;
}(SpeakeasyBase));
export { GetSslCertificatePathParams };
var GetSslCertificateQueryParams = /** @class */ (function (_super) {
    __extends(GetSslCertificateQueryParams, _super);
    function GetSslCertificateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sha1_fingerprint" }),
        __metadata("design:type", String)
    ], GetSslCertificateQueryParams.prototype, "sha1Fingerprint", void 0);
    return GetSslCertificateQueryParams;
}(SpeakeasyBase));
export { GetSslCertificateQueryParams };
var GetSslCertificateRequest = /** @class */ (function (_super) {
    __extends(GetSslCertificateRequest, _super);
    function GetSslCertificateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSslCertificatePathParams)
    ], GetSslCertificateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSslCertificateQueryParams)
    ], GetSslCertificateRequest.prototype, "queryParams", void 0);
    return GetSslCertificateRequest;
}(SpeakeasyBase));
export { GetSslCertificateRequest };
var GetSslCertificateResponse = /** @class */ (function (_super) {
    __extends(GetSslCertificateResponse, _super);
    function GetSslCertificateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSslCertificateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SslCertificateDetail)
    ], GetSslCertificateResponse.prototype, "sslCertificateDetail", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSslCertificateResponse.prototype, "statusCode", void 0);
    return GetSslCertificateResponse;
}(SpeakeasyBase));
export { GetSslCertificateResponse };
