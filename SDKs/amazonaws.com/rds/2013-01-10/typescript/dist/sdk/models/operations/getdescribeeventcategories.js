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
export var GetDescribeEventCategoriesActionEnum;
(function (GetDescribeEventCategoriesActionEnum) {
    GetDescribeEventCategoriesActionEnum["DescribeEventCategories"] = "DescribeEventCategories";
})(GetDescribeEventCategoriesActionEnum || (GetDescribeEventCategoriesActionEnum = {}));
export var GetDescribeEventCategoriesVersionEnum;
(function (GetDescribeEventCategoriesVersionEnum) {
    GetDescribeEventCategoriesVersionEnum["TwoThousandAndThirteen0110"] = "2013-01-10";
})(GetDescribeEventCategoriesVersionEnum || (GetDescribeEventCategoriesVersionEnum = {}));
var GetDescribeEventCategoriesQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeEventCategoriesQueryParams, _super);
    function GetDescribeEventCategoriesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeEventCategoriesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SourceType" }),
        __metadata("design:type", String)
    ], GetDescribeEventCategoriesQueryParams.prototype, "sourceType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeEventCategoriesQueryParams.prototype, "version", void 0);
    return GetDescribeEventCategoriesQueryParams;
}(SpeakeasyBase));
export { GetDescribeEventCategoriesQueryParams };
var GetDescribeEventCategoriesHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeEventCategoriesHeaders, _super);
    function GetDescribeEventCategoriesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeEventCategoriesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeEventCategoriesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeEventCategoriesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeEventCategoriesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeEventCategoriesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeEventCategoriesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeEventCategoriesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeEventCategoriesHeaders;
}(SpeakeasyBase));
export { GetDescribeEventCategoriesHeaders };
var GetDescribeEventCategoriesRequest = /** @class */ (function (_super) {
    __extends(GetDescribeEventCategoriesRequest, _super);
    function GetDescribeEventCategoriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeEventCategoriesQueryParams)
    ], GetDescribeEventCategoriesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeEventCategoriesHeaders)
    ], GetDescribeEventCategoriesRequest.prototype, "headers", void 0);
    return GetDescribeEventCategoriesRequest;
}(SpeakeasyBase));
export { GetDescribeEventCategoriesRequest };
var GetDescribeEventCategoriesResponse = /** @class */ (function (_super) {
    __extends(GetDescribeEventCategoriesResponse, _super);
    function GetDescribeEventCategoriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeEventCategoriesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeEventCategoriesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeEventCategoriesResponse.prototype, "statusCode", void 0);
    return GetDescribeEventCategoriesResponse;
}(SpeakeasyBase));
export { GetDescribeEventCategoriesResponse };
