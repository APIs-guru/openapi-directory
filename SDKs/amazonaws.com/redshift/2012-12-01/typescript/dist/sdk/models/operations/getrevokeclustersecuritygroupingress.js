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
export var GetRevokeClusterSecurityGroupIngressActionEnum;
(function (GetRevokeClusterSecurityGroupIngressActionEnum) {
    GetRevokeClusterSecurityGroupIngressActionEnum["RevokeClusterSecurityGroupIngress"] = "RevokeClusterSecurityGroupIngress";
})(GetRevokeClusterSecurityGroupIngressActionEnum || (GetRevokeClusterSecurityGroupIngressActionEnum = {}));
export var GetRevokeClusterSecurityGroupIngressVersionEnum;
(function (GetRevokeClusterSecurityGroupIngressVersionEnum) {
    GetRevokeClusterSecurityGroupIngressVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetRevokeClusterSecurityGroupIngressVersionEnum || (GetRevokeClusterSecurityGroupIngressVersionEnum = {}));
var GetRevokeClusterSecurityGroupIngressQueryParams = /** @class */ (function (_super) {
    __extends(GetRevokeClusterSecurityGroupIngressQueryParams, _super);
    function GetRevokeClusterSecurityGroupIngressQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetRevokeClusterSecurityGroupIngressQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=CIDRIP" }),
        __metadata("design:type", String)
    ], GetRevokeClusterSecurityGroupIngressQueryParams.prototype, "cidrip", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ClusterSecurityGroupName" }),
        __metadata("design:type", String)
    ], GetRevokeClusterSecurityGroupIngressQueryParams.prototype, "clusterSecurityGroupName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EC2SecurityGroupName" }),
        __metadata("design:type", String)
    ], GetRevokeClusterSecurityGroupIngressQueryParams.prototype, "ec2SecurityGroupName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EC2SecurityGroupOwnerId" }),
        __metadata("design:type", String)
    ], GetRevokeClusterSecurityGroupIngressQueryParams.prototype, "ec2SecurityGroupOwnerId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetRevokeClusterSecurityGroupIngressQueryParams.prototype, "version", void 0);
    return GetRevokeClusterSecurityGroupIngressQueryParams;
}(SpeakeasyBase));
export { GetRevokeClusterSecurityGroupIngressQueryParams };
var GetRevokeClusterSecurityGroupIngressHeaders = /** @class */ (function (_super) {
    __extends(GetRevokeClusterSecurityGroupIngressHeaders, _super);
    function GetRevokeClusterSecurityGroupIngressHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetRevokeClusterSecurityGroupIngressHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetRevokeClusterSecurityGroupIngressHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetRevokeClusterSecurityGroupIngressHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetRevokeClusterSecurityGroupIngressHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetRevokeClusterSecurityGroupIngressHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetRevokeClusterSecurityGroupIngressHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetRevokeClusterSecurityGroupIngressHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetRevokeClusterSecurityGroupIngressHeaders;
}(SpeakeasyBase));
export { GetRevokeClusterSecurityGroupIngressHeaders };
var GetRevokeClusterSecurityGroupIngressRequest = /** @class */ (function (_super) {
    __extends(GetRevokeClusterSecurityGroupIngressRequest, _super);
    function GetRevokeClusterSecurityGroupIngressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetRevokeClusterSecurityGroupIngressQueryParams)
    ], GetRevokeClusterSecurityGroupIngressRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetRevokeClusterSecurityGroupIngressHeaders)
    ], GetRevokeClusterSecurityGroupIngressRequest.prototype, "headers", void 0);
    return GetRevokeClusterSecurityGroupIngressRequest;
}(SpeakeasyBase));
export { GetRevokeClusterSecurityGroupIngressRequest };
var GetRevokeClusterSecurityGroupIngressResponse = /** @class */ (function (_super) {
    __extends(GetRevokeClusterSecurityGroupIngressResponse, _super);
    function GetRevokeClusterSecurityGroupIngressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetRevokeClusterSecurityGroupIngressResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetRevokeClusterSecurityGroupIngressResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetRevokeClusterSecurityGroupIngressResponse.prototype, "statusCode", void 0);
    return GetRevokeClusterSecurityGroupIngressResponse;
}(SpeakeasyBase));
export { GetRevokeClusterSecurityGroupIngressResponse };
