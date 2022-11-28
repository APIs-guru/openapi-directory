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
export var GetAuthorizeDbSecurityGroupIngressActionEnum;
(function (GetAuthorizeDbSecurityGroupIngressActionEnum) {
    GetAuthorizeDbSecurityGroupIngressActionEnum["AuthorizeDbSecurityGroupIngress"] = "AuthorizeDBSecurityGroupIngress";
})(GetAuthorizeDbSecurityGroupIngressActionEnum || (GetAuthorizeDbSecurityGroupIngressActionEnum = {}));
export var GetAuthorizeDbSecurityGroupIngressVersionEnum;
(function (GetAuthorizeDbSecurityGroupIngressVersionEnum) {
    GetAuthorizeDbSecurityGroupIngressVersionEnum["TwoThousandAndThirteen0110"] = "2013-01-10";
})(GetAuthorizeDbSecurityGroupIngressVersionEnum || (GetAuthorizeDbSecurityGroupIngressVersionEnum = {}));
var GetAuthorizeDbSecurityGroupIngressQueryParams = /** @class */ (function (_super) {
    __extends(GetAuthorizeDbSecurityGroupIngressQueryParams, _super);
    function GetAuthorizeDbSecurityGroupIngressQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetAuthorizeDbSecurityGroupIngressQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CIDRIP" }),
        __metadata("design:type", String)
    ], GetAuthorizeDbSecurityGroupIngressQueryParams.prototype, "cidrip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBSecurityGroupName" }),
        __metadata("design:type", String)
    ], GetAuthorizeDbSecurityGroupIngressQueryParams.prototype, "dbSecurityGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EC2SecurityGroupId" }),
        __metadata("design:type", String)
    ], GetAuthorizeDbSecurityGroupIngressQueryParams.prototype, "ec2SecurityGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EC2SecurityGroupName" }),
        __metadata("design:type", String)
    ], GetAuthorizeDbSecurityGroupIngressQueryParams.prototype, "ec2SecurityGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EC2SecurityGroupOwnerId" }),
        __metadata("design:type", String)
    ], GetAuthorizeDbSecurityGroupIngressQueryParams.prototype, "ec2SecurityGroupOwnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetAuthorizeDbSecurityGroupIngressQueryParams.prototype, "version", void 0);
    return GetAuthorizeDbSecurityGroupIngressQueryParams;
}(SpeakeasyBase));
export { GetAuthorizeDbSecurityGroupIngressQueryParams };
var GetAuthorizeDbSecurityGroupIngressHeaders = /** @class */ (function (_super) {
    __extends(GetAuthorizeDbSecurityGroupIngressHeaders, _super);
    function GetAuthorizeDbSecurityGroupIngressHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetAuthorizeDbSecurityGroupIngressHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetAuthorizeDbSecurityGroupIngressHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetAuthorizeDbSecurityGroupIngressHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetAuthorizeDbSecurityGroupIngressHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetAuthorizeDbSecurityGroupIngressHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetAuthorizeDbSecurityGroupIngressHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetAuthorizeDbSecurityGroupIngressHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetAuthorizeDbSecurityGroupIngressHeaders;
}(SpeakeasyBase));
export { GetAuthorizeDbSecurityGroupIngressHeaders };
var GetAuthorizeDbSecurityGroupIngressRequest = /** @class */ (function (_super) {
    __extends(GetAuthorizeDbSecurityGroupIngressRequest, _super);
    function GetAuthorizeDbSecurityGroupIngressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAuthorizeDbSecurityGroupIngressQueryParams)
    ], GetAuthorizeDbSecurityGroupIngressRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAuthorizeDbSecurityGroupIngressHeaders)
    ], GetAuthorizeDbSecurityGroupIngressRequest.prototype, "headers", void 0);
    return GetAuthorizeDbSecurityGroupIngressRequest;
}(SpeakeasyBase));
export { GetAuthorizeDbSecurityGroupIngressRequest };
var GetAuthorizeDbSecurityGroupIngressResponse = /** @class */ (function (_super) {
    __extends(GetAuthorizeDbSecurityGroupIngressResponse, _super);
    function GetAuthorizeDbSecurityGroupIngressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetAuthorizeDbSecurityGroupIngressResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAuthorizeDbSecurityGroupIngressResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAuthorizeDbSecurityGroupIngressResponse.prototype, "statusCode", void 0);
    return GetAuthorizeDbSecurityGroupIngressResponse;
}(SpeakeasyBase));
export { GetAuthorizeDbSecurityGroupIngressResponse };
