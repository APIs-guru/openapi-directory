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
export var GetDescribeHsmClientCertificatesActionEnum;
(function (GetDescribeHsmClientCertificatesActionEnum) {
    GetDescribeHsmClientCertificatesActionEnum["DescribeHsmClientCertificates"] = "DescribeHsmClientCertificates";
})(GetDescribeHsmClientCertificatesActionEnum || (GetDescribeHsmClientCertificatesActionEnum = {}));
export var GetDescribeHsmClientCertificatesVersionEnum;
(function (GetDescribeHsmClientCertificatesVersionEnum) {
    GetDescribeHsmClientCertificatesVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetDescribeHsmClientCertificatesVersionEnum || (GetDescribeHsmClientCertificatesVersionEnum = {}));
var GetDescribeHsmClientCertificatesQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeHsmClientCertificatesQueryParams, _super);
    function GetDescribeHsmClientCertificatesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeHsmClientCertificatesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=HsmClientCertificateIdentifier" }),
        __metadata("design:type", String)
    ], GetDescribeHsmClientCertificatesQueryParams.prototype, "hsmClientCertificateIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeHsmClientCertificatesQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeHsmClientCertificatesQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TagKeys" }),
        __metadata("design:type", Array)
    ], GetDescribeHsmClientCertificatesQueryParams.prototype, "tagKeys", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TagValues" }),
        __metadata("design:type", Array)
    ], GetDescribeHsmClientCertificatesQueryParams.prototype, "tagValues", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeHsmClientCertificatesQueryParams.prototype, "version", void 0);
    return GetDescribeHsmClientCertificatesQueryParams;
}(SpeakeasyBase));
export { GetDescribeHsmClientCertificatesQueryParams };
var GetDescribeHsmClientCertificatesHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeHsmClientCertificatesHeaders, _super);
    function GetDescribeHsmClientCertificatesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeHsmClientCertificatesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeHsmClientCertificatesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeHsmClientCertificatesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeHsmClientCertificatesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeHsmClientCertificatesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeHsmClientCertificatesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeHsmClientCertificatesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeHsmClientCertificatesHeaders;
}(SpeakeasyBase));
export { GetDescribeHsmClientCertificatesHeaders };
var GetDescribeHsmClientCertificatesRequest = /** @class */ (function (_super) {
    __extends(GetDescribeHsmClientCertificatesRequest, _super);
    function GetDescribeHsmClientCertificatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeHsmClientCertificatesQueryParams)
    ], GetDescribeHsmClientCertificatesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeHsmClientCertificatesHeaders)
    ], GetDescribeHsmClientCertificatesRequest.prototype, "headers", void 0);
    return GetDescribeHsmClientCertificatesRequest;
}(SpeakeasyBase));
export { GetDescribeHsmClientCertificatesRequest };
var GetDescribeHsmClientCertificatesResponse = /** @class */ (function (_super) {
    __extends(GetDescribeHsmClientCertificatesResponse, _super);
    function GetDescribeHsmClientCertificatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeHsmClientCertificatesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeHsmClientCertificatesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeHsmClientCertificatesResponse.prototype, "statusCode", void 0);
    return GetDescribeHsmClientCertificatesResponse;
}(SpeakeasyBase));
export { GetDescribeHsmClientCertificatesResponse };
