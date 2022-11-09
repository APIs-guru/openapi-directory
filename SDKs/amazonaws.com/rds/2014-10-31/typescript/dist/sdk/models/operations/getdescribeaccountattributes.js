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
export var GetDescribeAccountAttributesActionEnum;
(function (GetDescribeAccountAttributesActionEnum) {
    GetDescribeAccountAttributesActionEnum["DescribeAccountAttributes"] = "DescribeAccountAttributes";
})(GetDescribeAccountAttributesActionEnum || (GetDescribeAccountAttributesActionEnum = {}));
export var GetDescribeAccountAttributesVersionEnum;
(function (GetDescribeAccountAttributesVersionEnum) {
    GetDescribeAccountAttributesVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(GetDescribeAccountAttributesVersionEnum || (GetDescribeAccountAttributesVersionEnum = {}));
var GetDescribeAccountAttributesQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeAccountAttributesQueryParams, _super);
    function GetDescribeAccountAttributesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeAccountAttributesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeAccountAttributesQueryParams.prototype, "version", void 0);
    return GetDescribeAccountAttributesQueryParams;
}(SpeakeasyBase));
export { GetDescribeAccountAttributesQueryParams };
var GetDescribeAccountAttributesHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeAccountAttributesHeaders, _super);
    function GetDescribeAccountAttributesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeAccountAttributesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeAccountAttributesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeAccountAttributesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeAccountAttributesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeAccountAttributesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeAccountAttributesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeAccountAttributesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeAccountAttributesHeaders;
}(SpeakeasyBase));
export { GetDescribeAccountAttributesHeaders };
var GetDescribeAccountAttributesRequest = /** @class */ (function (_super) {
    __extends(GetDescribeAccountAttributesRequest, _super);
    function GetDescribeAccountAttributesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeAccountAttributesQueryParams)
    ], GetDescribeAccountAttributesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeAccountAttributesHeaders)
    ], GetDescribeAccountAttributesRequest.prototype, "headers", void 0);
    return GetDescribeAccountAttributesRequest;
}(SpeakeasyBase));
export { GetDescribeAccountAttributesRequest };
var GetDescribeAccountAttributesResponse = /** @class */ (function (_super) {
    __extends(GetDescribeAccountAttributesResponse, _super);
    function GetDescribeAccountAttributesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeAccountAttributesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeAccountAttributesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeAccountAttributesResponse.prototype, "statusCode", void 0);
    return GetDescribeAccountAttributesResponse;
}(SpeakeasyBase));
export { GetDescribeAccountAttributesResponse };
