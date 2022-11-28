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
export var GetDescribeEndpointAuthorizationActionEnum;
(function (GetDescribeEndpointAuthorizationActionEnum) {
    GetDescribeEndpointAuthorizationActionEnum["DescribeEndpointAuthorization"] = "DescribeEndpointAuthorization";
})(GetDescribeEndpointAuthorizationActionEnum || (GetDescribeEndpointAuthorizationActionEnum = {}));
export var GetDescribeEndpointAuthorizationVersionEnum;
(function (GetDescribeEndpointAuthorizationVersionEnum) {
    GetDescribeEndpointAuthorizationVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetDescribeEndpointAuthorizationVersionEnum || (GetDescribeEndpointAuthorizationVersionEnum = {}));
var GetDescribeEndpointAuthorizationQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeEndpointAuthorizationQueryParams, _super);
    function GetDescribeEndpointAuthorizationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Account" }),
        __metadata("design:type", String)
    ], GetDescribeEndpointAuthorizationQueryParams.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeEndpointAuthorizationQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetDescribeEndpointAuthorizationQueryParams.prototype, "clusterIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Grantee" }),
        __metadata("design:type", Boolean)
    ], GetDescribeEndpointAuthorizationQueryParams.prototype, "grantee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeEndpointAuthorizationQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeEndpointAuthorizationQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeEndpointAuthorizationQueryParams.prototype, "version", void 0);
    return GetDescribeEndpointAuthorizationQueryParams;
}(SpeakeasyBase));
export { GetDescribeEndpointAuthorizationQueryParams };
var GetDescribeEndpointAuthorizationHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeEndpointAuthorizationHeaders, _super);
    function GetDescribeEndpointAuthorizationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeEndpointAuthorizationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeEndpointAuthorizationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeEndpointAuthorizationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeEndpointAuthorizationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeEndpointAuthorizationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeEndpointAuthorizationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeEndpointAuthorizationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeEndpointAuthorizationHeaders;
}(SpeakeasyBase));
export { GetDescribeEndpointAuthorizationHeaders };
var GetDescribeEndpointAuthorizationRequest = /** @class */ (function (_super) {
    __extends(GetDescribeEndpointAuthorizationRequest, _super);
    function GetDescribeEndpointAuthorizationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeEndpointAuthorizationQueryParams)
    ], GetDescribeEndpointAuthorizationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeEndpointAuthorizationHeaders)
    ], GetDescribeEndpointAuthorizationRequest.prototype, "headers", void 0);
    return GetDescribeEndpointAuthorizationRequest;
}(SpeakeasyBase));
export { GetDescribeEndpointAuthorizationRequest };
var GetDescribeEndpointAuthorizationResponse = /** @class */ (function (_super) {
    __extends(GetDescribeEndpointAuthorizationResponse, _super);
    function GetDescribeEndpointAuthorizationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeEndpointAuthorizationResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDescribeEndpointAuthorizationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDescribeEndpointAuthorizationResponse.prototype, "statusCode", void 0);
    return GetDescribeEndpointAuthorizationResponse;
}(SpeakeasyBase));
export { GetDescribeEndpointAuthorizationResponse };
