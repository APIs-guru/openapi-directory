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
export var GetAuthorizeClusterSecurityGroupIngressActionEnum;
(function (GetAuthorizeClusterSecurityGroupIngressActionEnum) {
    GetAuthorizeClusterSecurityGroupIngressActionEnum["AuthorizeClusterSecurityGroupIngress"] = "AuthorizeClusterSecurityGroupIngress";
})(GetAuthorizeClusterSecurityGroupIngressActionEnum || (GetAuthorizeClusterSecurityGroupIngressActionEnum = {}));
export var GetAuthorizeClusterSecurityGroupIngressVersionEnum;
(function (GetAuthorizeClusterSecurityGroupIngressVersionEnum) {
    GetAuthorizeClusterSecurityGroupIngressVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetAuthorizeClusterSecurityGroupIngressVersionEnum || (GetAuthorizeClusterSecurityGroupIngressVersionEnum = {}));
var GetAuthorizeClusterSecurityGroupIngressQueryParams = /** @class */ (function (_super) {
    __extends(GetAuthorizeClusterSecurityGroupIngressQueryParams, _super);
    function GetAuthorizeClusterSecurityGroupIngressQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetAuthorizeClusterSecurityGroupIngressQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CIDRIP" }),
        __metadata("design:type", String)
    ], GetAuthorizeClusterSecurityGroupIngressQueryParams.prototype, "cidrip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClusterSecurityGroupName" }),
        __metadata("design:type", String)
    ], GetAuthorizeClusterSecurityGroupIngressQueryParams.prototype, "clusterSecurityGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EC2SecurityGroupName" }),
        __metadata("design:type", String)
    ], GetAuthorizeClusterSecurityGroupIngressQueryParams.prototype, "ec2SecurityGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EC2SecurityGroupOwnerId" }),
        __metadata("design:type", String)
    ], GetAuthorizeClusterSecurityGroupIngressQueryParams.prototype, "ec2SecurityGroupOwnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetAuthorizeClusterSecurityGroupIngressQueryParams.prototype, "version", void 0);
    return GetAuthorizeClusterSecurityGroupIngressQueryParams;
}(SpeakeasyBase));
export { GetAuthorizeClusterSecurityGroupIngressQueryParams };
var GetAuthorizeClusterSecurityGroupIngressHeaders = /** @class */ (function (_super) {
    __extends(GetAuthorizeClusterSecurityGroupIngressHeaders, _super);
    function GetAuthorizeClusterSecurityGroupIngressHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetAuthorizeClusterSecurityGroupIngressHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetAuthorizeClusterSecurityGroupIngressHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetAuthorizeClusterSecurityGroupIngressHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetAuthorizeClusterSecurityGroupIngressHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetAuthorizeClusterSecurityGroupIngressHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetAuthorizeClusterSecurityGroupIngressHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetAuthorizeClusterSecurityGroupIngressHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetAuthorizeClusterSecurityGroupIngressHeaders;
}(SpeakeasyBase));
export { GetAuthorizeClusterSecurityGroupIngressHeaders };
var GetAuthorizeClusterSecurityGroupIngressRequest = /** @class */ (function (_super) {
    __extends(GetAuthorizeClusterSecurityGroupIngressRequest, _super);
    function GetAuthorizeClusterSecurityGroupIngressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAuthorizeClusterSecurityGroupIngressQueryParams)
    ], GetAuthorizeClusterSecurityGroupIngressRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAuthorizeClusterSecurityGroupIngressHeaders)
    ], GetAuthorizeClusterSecurityGroupIngressRequest.prototype, "headers", void 0);
    return GetAuthorizeClusterSecurityGroupIngressRequest;
}(SpeakeasyBase));
export { GetAuthorizeClusterSecurityGroupIngressRequest };
var GetAuthorizeClusterSecurityGroupIngressResponse = /** @class */ (function (_super) {
    __extends(GetAuthorizeClusterSecurityGroupIngressResponse, _super);
    function GetAuthorizeClusterSecurityGroupIngressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetAuthorizeClusterSecurityGroupIngressResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAuthorizeClusterSecurityGroupIngressResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAuthorizeClusterSecurityGroupIngressResponse.prototype, "statusCode", void 0);
    return GetAuthorizeClusterSecurityGroupIngressResponse;
}(SpeakeasyBase));
export { GetAuthorizeClusterSecurityGroupIngressResponse };
