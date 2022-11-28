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
export var GetDescribeClusterParametersActionEnum;
(function (GetDescribeClusterParametersActionEnum) {
    GetDescribeClusterParametersActionEnum["DescribeClusterParameters"] = "DescribeClusterParameters";
})(GetDescribeClusterParametersActionEnum || (GetDescribeClusterParametersActionEnum = {}));
export var GetDescribeClusterParametersVersionEnum;
(function (GetDescribeClusterParametersVersionEnum) {
    GetDescribeClusterParametersVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetDescribeClusterParametersVersionEnum || (GetDescribeClusterParametersVersionEnum = {}));
var GetDescribeClusterParametersQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeClusterParametersQueryParams, _super);
    function GetDescribeClusterParametersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeClusterParametersQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeClusterParametersQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeClusterParametersQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ParameterGroupName" }),
        __metadata("design:type", String)
    ], GetDescribeClusterParametersQueryParams.prototype, "parameterGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Source" }),
        __metadata("design:type", String)
    ], GetDescribeClusterParametersQueryParams.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeClusterParametersQueryParams.prototype, "version", void 0);
    return GetDescribeClusterParametersQueryParams;
}(SpeakeasyBase));
export { GetDescribeClusterParametersQueryParams };
var GetDescribeClusterParametersHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeClusterParametersHeaders, _super);
    function GetDescribeClusterParametersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeClusterParametersHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeClusterParametersHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeClusterParametersHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeClusterParametersHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeClusterParametersHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeClusterParametersHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeClusterParametersHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeClusterParametersHeaders;
}(SpeakeasyBase));
export { GetDescribeClusterParametersHeaders };
var GetDescribeClusterParametersRequest = /** @class */ (function (_super) {
    __extends(GetDescribeClusterParametersRequest, _super);
    function GetDescribeClusterParametersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeClusterParametersQueryParams)
    ], GetDescribeClusterParametersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeClusterParametersHeaders)
    ], GetDescribeClusterParametersRequest.prototype, "headers", void 0);
    return GetDescribeClusterParametersRequest;
}(SpeakeasyBase));
export { GetDescribeClusterParametersRequest };
var GetDescribeClusterParametersResponse = /** @class */ (function (_super) {
    __extends(GetDescribeClusterParametersResponse, _super);
    function GetDescribeClusterParametersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeClusterParametersResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDescribeClusterParametersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDescribeClusterParametersResponse.prototype, "statusCode", void 0);
    return GetDescribeClusterParametersResponse;
}(SpeakeasyBase));
export { GetDescribeClusterParametersResponse };
