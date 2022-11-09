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
export var GetEnableLoggingActionEnum;
(function (GetEnableLoggingActionEnum) {
    GetEnableLoggingActionEnum["EnableLogging"] = "EnableLogging";
})(GetEnableLoggingActionEnum || (GetEnableLoggingActionEnum = {}));
export var GetEnableLoggingVersionEnum;
(function (GetEnableLoggingVersionEnum) {
    GetEnableLoggingVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetEnableLoggingVersionEnum || (GetEnableLoggingVersionEnum = {}));
var GetEnableLoggingQueryParams = /** @class */ (function (_super) {
    __extends(GetEnableLoggingQueryParams, _super);
    function GetEnableLoggingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetEnableLoggingQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=BucketName" }),
        __metadata("design:type", String)
    ], GetEnableLoggingQueryParams.prototype, "bucketName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetEnableLoggingQueryParams.prototype, "clusterIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=S3KeyPrefix" }),
        __metadata("design:type", String)
    ], GetEnableLoggingQueryParams.prototype, "s3KeyPrefix", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetEnableLoggingQueryParams.prototype, "version", void 0);
    return GetEnableLoggingQueryParams;
}(SpeakeasyBase));
export { GetEnableLoggingQueryParams };
var GetEnableLoggingHeaders = /** @class */ (function (_super) {
    __extends(GetEnableLoggingHeaders, _super);
    function GetEnableLoggingHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetEnableLoggingHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetEnableLoggingHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetEnableLoggingHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetEnableLoggingHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetEnableLoggingHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetEnableLoggingHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetEnableLoggingHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetEnableLoggingHeaders;
}(SpeakeasyBase));
export { GetEnableLoggingHeaders };
var GetEnableLoggingRequest = /** @class */ (function (_super) {
    __extends(GetEnableLoggingRequest, _super);
    function GetEnableLoggingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetEnableLoggingQueryParams)
    ], GetEnableLoggingRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetEnableLoggingHeaders)
    ], GetEnableLoggingRequest.prototype, "headers", void 0);
    return GetEnableLoggingRequest;
}(SpeakeasyBase));
export { GetEnableLoggingRequest };
var GetEnableLoggingResponse = /** @class */ (function (_super) {
    __extends(GetEnableLoggingResponse, _super);
    function GetEnableLoggingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetEnableLoggingResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetEnableLoggingResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetEnableLoggingResponse.prototype, "statusCode", void 0);
    return GetEnableLoggingResponse;
}(SpeakeasyBase));
export { GetEnableLoggingResponse };
