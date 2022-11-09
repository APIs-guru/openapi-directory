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
export var GetModifyDbProxyTargetGroupActionEnum;
(function (GetModifyDbProxyTargetGroupActionEnum) {
    GetModifyDbProxyTargetGroupActionEnum["ModifyDbProxyTargetGroup"] = "ModifyDBProxyTargetGroup";
})(GetModifyDbProxyTargetGroupActionEnum || (GetModifyDbProxyTargetGroupActionEnum = {}));
// GetModifyDbProxyTargetGroupConnectionPoolConfig
/**
 * Specifies the settings that control the size and behavior of the connection pool associated with a <code>DBProxyTargetGroup</code>.
**/
var GetModifyDbProxyTargetGroupConnectionPoolConfig = /** @class */ (function (_super) {
    __extends(GetModifyDbProxyTargetGroupConnectionPoolConfig, _super);
    function GetModifyDbProxyTargetGroupConnectionPoolConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, name=ConnectionBorrowTimeout" }),
        __metadata("design:type", Number)
    ], GetModifyDbProxyTargetGroupConnectionPoolConfig.prototype, "connectionBorrowTimeout", void 0);
    __decorate([
        Metadata({ data: "queryParam, name=InitQuery" }),
        __metadata("design:type", String)
    ], GetModifyDbProxyTargetGroupConnectionPoolConfig.prototype, "initQuery", void 0);
    __decorate([
        Metadata({ data: "queryParam, name=MaxConnectionsPercent" }),
        __metadata("design:type", Number)
    ], GetModifyDbProxyTargetGroupConnectionPoolConfig.prototype, "maxConnectionsPercent", void 0);
    __decorate([
        Metadata({ data: "queryParam, name=MaxIdleConnectionsPercent" }),
        __metadata("design:type", Number)
    ], GetModifyDbProxyTargetGroupConnectionPoolConfig.prototype, "maxIdleConnectionsPercent", void 0);
    __decorate([
        Metadata({ data: "queryParam, name=SessionPinningFilters" }),
        __metadata("design:type", Array)
    ], GetModifyDbProxyTargetGroupConnectionPoolConfig.prototype, "sessionPinningFilters", void 0);
    return GetModifyDbProxyTargetGroupConnectionPoolConfig;
}(SpeakeasyBase));
export { GetModifyDbProxyTargetGroupConnectionPoolConfig };
export var GetModifyDbProxyTargetGroupVersionEnum;
(function (GetModifyDbProxyTargetGroupVersionEnum) {
    GetModifyDbProxyTargetGroupVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(GetModifyDbProxyTargetGroupVersionEnum || (GetModifyDbProxyTargetGroupVersionEnum = {}));
var GetModifyDbProxyTargetGroupQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyDbProxyTargetGroupQueryParams, _super);
    function GetModifyDbProxyTargetGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyDbProxyTargetGroupQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ConnectionPoolConfig" }),
        __metadata("design:type", GetModifyDbProxyTargetGroupConnectionPoolConfig)
    ], GetModifyDbProxyTargetGroupQueryParams.prototype, "connectionPoolConfig", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DBProxyName" }),
        __metadata("design:type", String)
    ], GetModifyDbProxyTargetGroupQueryParams.prototype, "dbProxyName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NewName" }),
        __metadata("design:type", String)
    ], GetModifyDbProxyTargetGroupQueryParams.prototype, "newName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TargetGroupName" }),
        __metadata("design:type", String)
    ], GetModifyDbProxyTargetGroupQueryParams.prototype, "targetGroupName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyDbProxyTargetGroupQueryParams.prototype, "version", void 0);
    return GetModifyDbProxyTargetGroupQueryParams;
}(SpeakeasyBase));
export { GetModifyDbProxyTargetGroupQueryParams };
var GetModifyDbProxyTargetGroupHeaders = /** @class */ (function (_super) {
    __extends(GetModifyDbProxyTargetGroupHeaders, _super);
    function GetModifyDbProxyTargetGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyDbProxyTargetGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyDbProxyTargetGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyDbProxyTargetGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyDbProxyTargetGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyDbProxyTargetGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyDbProxyTargetGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyDbProxyTargetGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyDbProxyTargetGroupHeaders;
}(SpeakeasyBase));
export { GetModifyDbProxyTargetGroupHeaders };
var GetModifyDbProxyTargetGroupRequest = /** @class */ (function (_super) {
    __extends(GetModifyDbProxyTargetGroupRequest, _super);
    function GetModifyDbProxyTargetGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifyDbProxyTargetGroupQueryParams)
    ], GetModifyDbProxyTargetGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifyDbProxyTargetGroupHeaders)
    ], GetModifyDbProxyTargetGroupRequest.prototype, "headers", void 0);
    return GetModifyDbProxyTargetGroupRequest;
}(SpeakeasyBase));
export { GetModifyDbProxyTargetGroupRequest };
var GetModifyDbProxyTargetGroupResponse = /** @class */ (function (_super) {
    __extends(GetModifyDbProxyTargetGroupResponse, _super);
    function GetModifyDbProxyTargetGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetModifyDbProxyTargetGroupResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetModifyDbProxyTargetGroupResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetModifyDbProxyTargetGroupResponse.prototype, "statusCode", void 0);
    return GetModifyDbProxyTargetGroupResponse;
}(SpeakeasyBase));
export { GetModifyDbProxyTargetGroupResponse };
