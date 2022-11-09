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
export var GetDeregisterDbProxyTargetsActionEnum;
(function (GetDeregisterDbProxyTargetsActionEnum) {
    GetDeregisterDbProxyTargetsActionEnum["DeregisterDbProxyTargets"] = "DeregisterDBProxyTargets";
})(GetDeregisterDbProxyTargetsActionEnum || (GetDeregisterDbProxyTargetsActionEnum = {}));
export var GetDeregisterDbProxyTargetsVersionEnum;
(function (GetDeregisterDbProxyTargetsVersionEnum) {
    GetDeregisterDbProxyTargetsVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(GetDeregisterDbProxyTargetsVersionEnum || (GetDeregisterDbProxyTargetsVersionEnum = {}));
var GetDeregisterDbProxyTargetsQueryParams = /** @class */ (function (_super) {
    __extends(GetDeregisterDbProxyTargetsQueryParams, _super);
    function GetDeregisterDbProxyTargetsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeregisterDbProxyTargetsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DBClusterIdentifiers" }),
        __metadata("design:type", Array)
    ], GetDeregisterDbProxyTargetsQueryParams.prototype, "dbClusterIdentifiers", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DBInstanceIdentifiers" }),
        __metadata("design:type", Array)
    ], GetDeregisterDbProxyTargetsQueryParams.prototype, "dbInstanceIdentifiers", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DBProxyName" }),
        __metadata("design:type", String)
    ], GetDeregisterDbProxyTargetsQueryParams.prototype, "dbProxyName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TargetGroupName" }),
        __metadata("design:type", String)
    ], GetDeregisterDbProxyTargetsQueryParams.prototype, "targetGroupName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeregisterDbProxyTargetsQueryParams.prototype, "version", void 0);
    return GetDeregisterDbProxyTargetsQueryParams;
}(SpeakeasyBase));
export { GetDeregisterDbProxyTargetsQueryParams };
var GetDeregisterDbProxyTargetsHeaders = /** @class */ (function (_super) {
    __extends(GetDeregisterDbProxyTargetsHeaders, _super);
    function GetDeregisterDbProxyTargetsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeregisterDbProxyTargetsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeregisterDbProxyTargetsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeregisterDbProxyTargetsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeregisterDbProxyTargetsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeregisterDbProxyTargetsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeregisterDbProxyTargetsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeregisterDbProxyTargetsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeregisterDbProxyTargetsHeaders;
}(SpeakeasyBase));
export { GetDeregisterDbProxyTargetsHeaders };
var GetDeregisterDbProxyTargetsRequest = /** @class */ (function (_super) {
    __extends(GetDeregisterDbProxyTargetsRequest, _super);
    function GetDeregisterDbProxyTargetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeregisterDbProxyTargetsQueryParams)
    ], GetDeregisterDbProxyTargetsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeregisterDbProxyTargetsHeaders)
    ], GetDeregisterDbProxyTargetsRequest.prototype, "headers", void 0);
    return GetDeregisterDbProxyTargetsRequest;
}(SpeakeasyBase));
export { GetDeregisterDbProxyTargetsRequest };
var GetDeregisterDbProxyTargetsResponse = /** @class */ (function (_super) {
    __extends(GetDeregisterDbProxyTargetsResponse, _super);
    function GetDeregisterDbProxyTargetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeregisterDbProxyTargetsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeregisterDbProxyTargetsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeregisterDbProxyTargetsResponse.prototype, "statusCode", void 0);
    return GetDeregisterDbProxyTargetsResponse;
}(SpeakeasyBase));
export { GetDeregisterDbProxyTargetsResponse };
