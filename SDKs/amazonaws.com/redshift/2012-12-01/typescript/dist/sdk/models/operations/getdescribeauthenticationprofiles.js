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
export var GetDescribeAuthenticationProfilesActionEnum;
(function (GetDescribeAuthenticationProfilesActionEnum) {
    GetDescribeAuthenticationProfilesActionEnum["DescribeAuthenticationProfiles"] = "DescribeAuthenticationProfiles";
})(GetDescribeAuthenticationProfilesActionEnum || (GetDescribeAuthenticationProfilesActionEnum = {}));
export var GetDescribeAuthenticationProfilesVersionEnum;
(function (GetDescribeAuthenticationProfilesVersionEnum) {
    GetDescribeAuthenticationProfilesVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetDescribeAuthenticationProfilesVersionEnum || (GetDescribeAuthenticationProfilesVersionEnum = {}));
var GetDescribeAuthenticationProfilesQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeAuthenticationProfilesQueryParams, _super);
    function GetDescribeAuthenticationProfilesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeAuthenticationProfilesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AuthenticationProfileName" }),
        __metadata("design:type", String)
    ], GetDescribeAuthenticationProfilesQueryParams.prototype, "authenticationProfileName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeAuthenticationProfilesQueryParams.prototype, "version", void 0);
    return GetDescribeAuthenticationProfilesQueryParams;
}(SpeakeasyBase));
export { GetDescribeAuthenticationProfilesQueryParams };
var GetDescribeAuthenticationProfilesHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeAuthenticationProfilesHeaders, _super);
    function GetDescribeAuthenticationProfilesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeAuthenticationProfilesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeAuthenticationProfilesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeAuthenticationProfilesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeAuthenticationProfilesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeAuthenticationProfilesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeAuthenticationProfilesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeAuthenticationProfilesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeAuthenticationProfilesHeaders;
}(SpeakeasyBase));
export { GetDescribeAuthenticationProfilesHeaders };
var GetDescribeAuthenticationProfilesRequest = /** @class */ (function (_super) {
    __extends(GetDescribeAuthenticationProfilesRequest, _super);
    function GetDescribeAuthenticationProfilesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeAuthenticationProfilesQueryParams)
    ], GetDescribeAuthenticationProfilesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeAuthenticationProfilesHeaders)
    ], GetDescribeAuthenticationProfilesRequest.prototype, "headers", void 0);
    return GetDescribeAuthenticationProfilesRequest;
}(SpeakeasyBase));
export { GetDescribeAuthenticationProfilesRequest };
var GetDescribeAuthenticationProfilesResponse = /** @class */ (function (_super) {
    __extends(GetDescribeAuthenticationProfilesResponse, _super);
    function GetDescribeAuthenticationProfilesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeAuthenticationProfilesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeAuthenticationProfilesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeAuthenticationProfilesResponse.prototype, "statusCode", void 0);
    return GetDescribeAuthenticationProfilesResponse;
}(SpeakeasyBase));
export { GetDescribeAuthenticationProfilesResponse };
