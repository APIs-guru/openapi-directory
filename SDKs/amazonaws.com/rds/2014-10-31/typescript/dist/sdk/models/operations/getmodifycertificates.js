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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var GetModifyCertificatesActionEnum;
(function (GetModifyCertificatesActionEnum) {
    GetModifyCertificatesActionEnum["ModifyCertificates"] = "ModifyCertificates";
})(GetModifyCertificatesActionEnum || (GetModifyCertificatesActionEnum = {}));
export var GetModifyCertificatesVersionEnum;
(function (GetModifyCertificatesVersionEnum) {
    GetModifyCertificatesVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(GetModifyCertificatesVersionEnum || (GetModifyCertificatesVersionEnum = {}));
var GetModifyCertificatesQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyCertificatesQueryParams, _super);
    function GetModifyCertificatesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyCertificatesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=CertificateIdentifier" }),
        __metadata("design:type", String)
    ], GetModifyCertificatesQueryParams.prototype, "certificateIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=RemoveCustomerOverride" }),
        __metadata("design:type", Boolean)
    ], GetModifyCertificatesQueryParams.prototype, "removeCustomerOverride", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyCertificatesQueryParams.prototype, "version", void 0);
    return GetModifyCertificatesQueryParams;
}(SpeakeasyBase));
export { GetModifyCertificatesQueryParams };
var GetModifyCertificatesHeaders = /** @class */ (function (_super) {
    __extends(GetModifyCertificatesHeaders, _super);
    function GetModifyCertificatesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyCertificatesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyCertificatesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyCertificatesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyCertificatesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyCertificatesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyCertificatesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyCertificatesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyCertificatesHeaders;
}(SpeakeasyBase));
export { GetModifyCertificatesHeaders };
var GetModifyCertificatesRequest = /** @class */ (function (_super) {
    __extends(GetModifyCertificatesRequest, _super);
    function GetModifyCertificatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifyCertificatesQueryParams)
    ], GetModifyCertificatesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifyCertificatesHeaders)
    ], GetModifyCertificatesRequest.prototype, "headers", void 0);
    return GetModifyCertificatesRequest;
}(SpeakeasyBase));
export { GetModifyCertificatesRequest };
var GetModifyCertificatesResponse = /** @class */ (function (_super) {
    __extends(GetModifyCertificatesResponse, _super);
    function GetModifyCertificatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetModifyCertificatesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetModifyCertificatesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetModifyCertificatesResponse.prototype, "statusCode", void 0);
    return GetModifyCertificatesResponse;
}(SpeakeasyBase));
export { GetModifyCertificatesResponse };
