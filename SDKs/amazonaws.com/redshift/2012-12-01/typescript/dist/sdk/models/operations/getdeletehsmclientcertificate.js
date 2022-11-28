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
export var GetDeleteHsmClientCertificateActionEnum;
(function (GetDeleteHsmClientCertificateActionEnum) {
    GetDeleteHsmClientCertificateActionEnum["DeleteHsmClientCertificate"] = "DeleteHsmClientCertificate";
})(GetDeleteHsmClientCertificateActionEnum || (GetDeleteHsmClientCertificateActionEnum = {}));
export var GetDeleteHsmClientCertificateVersionEnum;
(function (GetDeleteHsmClientCertificateVersionEnum) {
    GetDeleteHsmClientCertificateVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetDeleteHsmClientCertificateVersionEnum || (GetDeleteHsmClientCertificateVersionEnum = {}));
var GetDeleteHsmClientCertificateQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteHsmClientCertificateQueryParams, _super);
    function GetDeleteHsmClientCertificateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteHsmClientCertificateQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HsmClientCertificateIdentifier" }),
        __metadata("design:type", String)
    ], GetDeleteHsmClientCertificateQueryParams.prototype, "hsmClientCertificateIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteHsmClientCertificateQueryParams.prototype, "version", void 0);
    return GetDeleteHsmClientCertificateQueryParams;
}(SpeakeasyBase));
export { GetDeleteHsmClientCertificateQueryParams };
var GetDeleteHsmClientCertificateHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteHsmClientCertificateHeaders, _super);
    function GetDeleteHsmClientCertificateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteHsmClientCertificateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteHsmClientCertificateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteHsmClientCertificateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteHsmClientCertificateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteHsmClientCertificateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteHsmClientCertificateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteHsmClientCertificateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteHsmClientCertificateHeaders;
}(SpeakeasyBase));
export { GetDeleteHsmClientCertificateHeaders };
var GetDeleteHsmClientCertificateRequest = /** @class */ (function (_super) {
    __extends(GetDeleteHsmClientCertificateRequest, _super);
    function GetDeleteHsmClientCertificateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteHsmClientCertificateQueryParams)
    ], GetDeleteHsmClientCertificateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteHsmClientCertificateHeaders)
    ], GetDeleteHsmClientCertificateRequest.prototype, "headers", void 0);
    return GetDeleteHsmClientCertificateRequest;
}(SpeakeasyBase));
export { GetDeleteHsmClientCertificateRequest };
var GetDeleteHsmClientCertificateResponse = /** @class */ (function (_super) {
    __extends(GetDeleteHsmClientCertificateResponse, _super);
    function GetDeleteHsmClientCertificateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteHsmClientCertificateResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeleteHsmClientCertificateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeleteHsmClientCertificateResponse.prototype, "statusCode", void 0);
    return GetDeleteHsmClientCertificateResponse;
}(SpeakeasyBase));
export { GetDeleteHsmClientCertificateResponse };
