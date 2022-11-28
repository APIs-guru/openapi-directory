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
export var GetDeleteClusterSecurityGroupActionEnum;
(function (GetDeleteClusterSecurityGroupActionEnum) {
    GetDeleteClusterSecurityGroupActionEnum["DeleteClusterSecurityGroup"] = "DeleteClusterSecurityGroup";
})(GetDeleteClusterSecurityGroupActionEnum || (GetDeleteClusterSecurityGroupActionEnum = {}));
export var GetDeleteClusterSecurityGroupVersionEnum;
(function (GetDeleteClusterSecurityGroupVersionEnum) {
    GetDeleteClusterSecurityGroupVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetDeleteClusterSecurityGroupVersionEnum || (GetDeleteClusterSecurityGroupVersionEnum = {}));
var GetDeleteClusterSecurityGroupQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteClusterSecurityGroupQueryParams, _super);
    function GetDeleteClusterSecurityGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteClusterSecurityGroupQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClusterSecurityGroupName" }),
        __metadata("design:type", String)
    ], GetDeleteClusterSecurityGroupQueryParams.prototype, "clusterSecurityGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteClusterSecurityGroupQueryParams.prototype, "version", void 0);
    return GetDeleteClusterSecurityGroupQueryParams;
}(SpeakeasyBase));
export { GetDeleteClusterSecurityGroupQueryParams };
var GetDeleteClusterSecurityGroupHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteClusterSecurityGroupHeaders, _super);
    function GetDeleteClusterSecurityGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteClusterSecurityGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteClusterSecurityGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteClusterSecurityGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteClusterSecurityGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteClusterSecurityGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteClusterSecurityGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteClusterSecurityGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteClusterSecurityGroupHeaders;
}(SpeakeasyBase));
export { GetDeleteClusterSecurityGroupHeaders };
var GetDeleteClusterSecurityGroupRequest = /** @class */ (function (_super) {
    __extends(GetDeleteClusterSecurityGroupRequest, _super);
    function GetDeleteClusterSecurityGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteClusterSecurityGroupQueryParams)
    ], GetDeleteClusterSecurityGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteClusterSecurityGroupHeaders)
    ], GetDeleteClusterSecurityGroupRequest.prototype, "headers", void 0);
    return GetDeleteClusterSecurityGroupRequest;
}(SpeakeasyBase));
export { GetDeleteClusterSecurityGroupRequest };
var GetDeleteClusterSecurityGroupResponse = /** @class */ (function (_super) {
    __extends(GetDeleteClusterSecurityGroupResponse, _super);
    function GetDeleteClusterSecurityGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteClusterSecurityGroupResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeleteClusterSecurityGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeleteClusterSecurityGroupResponse.prototype, "statusCode", void 0);
    return GetDeleteClusterSecurityGroupResponse;
}(SpeakeasyBase));
export { GetDeleteClusterSecurityGroupResponse };
