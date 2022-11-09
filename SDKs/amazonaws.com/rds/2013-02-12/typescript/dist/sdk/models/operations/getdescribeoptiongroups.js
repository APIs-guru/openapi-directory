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
export var GetDescribeOptionGroupsActionEnum;
(function (GetDescribeOptionGroupsActionEnum) {
    GetDescribeOptionGroupsActionEnum["DescribeOptionGroups"] = "DescribeOptionGroups";
})(GetDescribeOptionGroupsActionEnum || (GetDescribeOptionGroupsActionEnum = {}));
export var GetDescribeOptionGroupsVersionEnum;
(function (GetDescribeOptionGroupsVersionEnum) {
    GetDescribeOptionGroupsVersionEnum["TwoThousandAndThirteen0212"] = "2013-02-12";
})(GetDescribeOptionGroupsVersionEnum || (GetDescribeOptionGroupsVersionEnum = {}));
var GetDescribeOptionGroupsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeOptionGroupsQueryParams, _super);
    function GetDescribeOptionGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeOptionGroupsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EngineName" }),
        __metadata("design:type", String)
    ], GetDescribeOptionGroupsQueryParams.prototype, "engineName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MajorEngineVersion" }),
        __metadata("design:type", String)
    ], GetDescribeOptionGroupsQueryParams.prototype, "majorEngineVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeOptionGroupsQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeOptionGroupsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=OptionGroupName" }),
        __metadata("design:type", String)
    ], GetDescribeOptionGroupsQueryParams.prototype, "optionGroupName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeOptionGroupsQueryParams.prototype, "version", void 0);
    return GetDescribeOptionGroupsQueryParams;
}(SpeakeasyBase));
export { GetDescribeOptionGroupsQueryParams };
var GetDescribeOptionGroupsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeOptionGroupsHeaders, _super);
    function GetDescribeOptionGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeOptionGroupsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeOptionGroupsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeOptionGroupsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeOptionGroupsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeOptionGroupsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeOptionGroupsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeOptionGroupsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeOptionGroupsHeaders;
}(SpeakeasyBase));
export { GetDescribeOptionGroupsHeaders };
var GetDescribeOptionGroupsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeOptionGroupsRequest, _super);
    function GetDescribeOptionGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeOptionGroupsQueryParams)
    ], GetDescribeOptionGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeOptionGroupsHeaders)
    ], GetDescribeOptionGroupsRequest.prototype, "headers", void 0);
    return GetDescribeOptionGroupsRequest;
}(SpeakeasyBase));
export { GetDescribeOptionGroupsRequest };
var GetDescribeOptionGroupsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeOptionGroupsResponse, _super);
    function GetDescribeOptionGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeOptionGroupsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeOptionGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeOptionGroupsResponse.prototype, "statusCode", void 0);
    return GetDescribeOptionGroupsResponse;
}(SpeakeasyBase));
export { GetDescribeOptionGroupsResponse };
