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
export var GetDescribeDbParametersActionEnum;
(function (GetDescribeDbParametersActionEnum) {
    GetDescribeDbParametersActionEnum["DescribeDbParameters"] = "DescribeDBParameters";
})(GetDescribeDbParametersActionEnum || (GetDescribeDbParametersActionEnum = {}));
export var GetDescribeDbParametersVersionEnum;
(function (GetDescribeDbParametersVersionEnum) {
    GetDescribeDbParametersVersionEnum["TwoThousandAndThirteen0110"] = "2013-01-10";
})(GetDescribeDbParametersVersionEnum || (GetDescribeDbParametersVersionEnum = {}));
var GetDescribeDbParametersQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeDbParametersQueryParams, _super);
    function GetDescribeDbParametersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeDbParametersQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DBParameterGroupName" }),
        __metadata("design:type", String)
    ], GetDescribeDbParametersQueryParams.prototype, "dbParameterGroupName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeDbParametersQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeDbParametersQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Source" }),
        __metadata("design:type", String)
    ], GetDescribeDbParametersQueryParams.prototype, "source", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeDbParametersQueryParams.prototype, "version", void 0);
    return GetDescribeDbParametersQueryParams;
}(SpeakeasyBase));
export { GetDescribeDbParametersQueryParams };
var GetDescribeDbParametersHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeDbParametersHeaders, _super);
    function GetDescribeDbParametersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeDbParametersHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeDbParametersHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeDbParametersHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeDbParametersHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeDbParametersHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeDbParametersHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeDbParametersHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeDbParametersHeaders;
}(SpeakeasyBase));
export { GetDescribeDbParametersHeaders };
var GetDescribeDbParametersRequest = /** @class */ (function (_super) {
    __extends(GetDescribeDbParametersRequest, _super);
    function GetDescribeDbParametersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeDbParametersQueryParams)
    ], GetDescribeDbParametersRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeDbParametersHeaders)
    ], GetDescribeDbParametersRequest.prototype, "headers", void 0);
    return GetDescribeDbParametersRequest;
}(SpeakeasyBase));
export { GetDescribeDbParametersRequest };
var GetDescribeDbParametersResponse = /** @class */ (function (_super) {
    __extends(GetDescribeDbParametersResponse, _super);
    function GetDescribeDbParametersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeDbParametersResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeDbParametersResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeDbParametersResponse.prototype, "statusCode", void 0);
    return GetDescribeDbParametersResponse;
}(SpeakeasyBase));
export { GetDescribeDbParametersResponse };
