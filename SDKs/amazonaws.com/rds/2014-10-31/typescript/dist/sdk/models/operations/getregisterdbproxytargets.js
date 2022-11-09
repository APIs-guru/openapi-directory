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
export var GetRegisterDbProxyTargetsActionEnum;
(function (GetRegisterDbProxyTargetsActionEnum) {
    GetRegisterDbProxyTargetsActionEnum["RegisterDbProxyTargets"] = "RegisterDBProxyTargets";
})(GetRegisterDbProxyTargetsActionEnum || (GetRegisterDbProxyTargetsActionEnum = {}));
export var GetRegisterDbProxyTargetsVersionEnum;
(function (GetRegisterDbProxyTargetsVersionEnum) {
    GetRegisterDbProxyTargetsVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(GetRegisterDbProxyTargetsVersionEnum || (GetRegisterDbProxyTargetsVersionEnum = {}));
var GetRegisterDbProxyTargetsQueryParams = /** @class */ (function (_super) {
    __extends(GetRegisterDbProxyTargetsQueryParams, _super);
    function GetRegisterDbProxyTargetsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetRegisterDbProxyTargetsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DBClusterIdentifiers" }),
        __metadata("design:type", Array)
    ], GetRegisterDbProxyTargetsQueryParams.prototype, "dbClusterIdentifiers", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DBInstanceIdentifiers" }),
        __metadata("design:type", Array)
    ], GetRegisterDbProxyTargetsQueryParams.prototype, "dbInstanceIdentifiers", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DBProxyName" }),
        __metadata("design:type", String)
    ], GetRegisterDbProxyTargetsQueryParams.prototype, "dbProxyName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TargetGroupName" }),
        __metadata("design:type", String)
    ], GetRegisterDbProxyTargetsQueryParams.prototype, "targetGroupName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetRegisterDbProxyTargetsQueryParams.prototype, "version", void 0);
    return GetRegisterDbProxyTargetsQueryParams;
}(SpeakeasyBase));
export { GetRegisterDbProxyTargetsQueryParams };
var GetRegisterDbProxyTargetsHeaders = /** @class */ (function (_super) {
    __extends(GetRegisterDbProxyTargetsHeaders, _super);
    function GetRegisterDbProxyTargetsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetRegisterDbProxyTargetsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetRegisterDbProxyTargetsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetRegisterDbProxyTargetsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetRegisterDbProxyTargetsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetRegisterDbProxyTargetsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetRegisterDbProxyTargetsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetRegisterDbProxyTargetsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetRegisterDbProxyTargetsHeaders;
}(SpeakeasyBase));
export { GetRegisterDbProxyTargetsHeaders };
var GetRegisterDbProxyTargetsRequest = /** @class */ (function (_super) {
    __extends(GetRegisterDbProxyTargetsRequest, _super);
    function GetRegisterDbProxyTargetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetRegisterDbProxyTargetsQueryParams)
    ], GetRegisterDbProxyTargetsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetRegisterDbProxyTargetsHeaders)
    ], GetRegisterDbProxyTargetsRequest.prototype, "headers", void 0);
    return GetRegisterDbProxyTargetsRequest;
}(SpeakeasyBase));
export { GetRegisterDbProxyTargetsRequest };
var GetRegisterDbProxyTargetsResponse = /** @class */ (function (_super) {
    __extends(GetRegisterDbProxyTargetsResponse, _super);
    function GetRegisterDbProxyTargetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetRegisterDbProxyTargetsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetRegisterDbProxyTargetsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetRegisterDbProxyTargetsResponse.prototype, "statusCode", void 0);
    return GetRegisterDbProxyTargetsResponse;
}(SpeakeasyBase));
export { GetRegisterDbProxyTargetsResponse };
