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
export var GetModifyClusterIamRolesActionEnum;
(function (GetModifyClusterIamRolesActionEnum) {
    GetModifyClusterIamRolesActionEnum["ModifyClusterIamRoles"] = "ModifyClusterIamRoles";
})(GetModifyClusterIamRolesActionEnum || (GetModifyClusterIamRolesActionEnum = {}));
export var GetModifyClusterIamRolesVersionEnum;
(function (GetModifyClusterIamRolesVersionEnum) {
    GetModifyClusterIamRolesVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetModifyClusterIamRolesVersionEnum || (GetModifyClusterIamRolesVersionEnum = {}));
var GetModifyClusterIamRolesQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyClusterIamRolesQueryParams, _super);
    function GetModifyClusterIamRolesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyClusterIamRolesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AddIamRoles" }),
        __metadata("design:type", Array)
    ], GetModifyClusterIamRolesQueryParams.prototype, "addIamRoles", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetModifyClusterIamRolesQueryParams.prototype, "clusterIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=RemoveIamRoles" }),
        __metadata("design:type", Array)
    ], GetModifyClusterIamRolesQueryParams.prototype, "removeIamRoles", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyClusterIamRolesQueryParams.prototype, "version", void 0);
    return GetModifyClusterIamRolesQueryParams;
}(SpeakeasyBase));
export { GetModifyClusterIamRolesQueryParams };
var GetModifyClusterIamRolesHeaders = /** @class */ (function (_super) {
    __extends(GetModifyClusterIamRolesHeaders, _super);
    function GetModifyClusterIamRolesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyClusterIamRolesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyClusterIamRolesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyClusterIamRolesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyClusterIamRolesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyClusterIamRolesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyClusterIamRolesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyClusterIamRolesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyClusterIamRolesHeaders;
}(SpeakeasyBase));
export { GetModifyClusterIamRolesHeaders };
var GetModifyClusterIamRolesRequest = /** @class */ (function (_super) {
    __extends(GetModifyClusterIamRolesRequest, _super);
    function GetModifyClusterIamRolesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifyClusterIamRolesQueryParams)
    ], GetModifyClusterIamRolesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifyClusterIamRolesHeaders)
    ], GetModifyClusterIamRolesRequest.prototype, "headers", void 0);
    return GetModifyClusterIamRolesRequest;
}(SpeakeasyBase));
export { GetModifyClusterIamRolesRequest };
var GetModifyClusterIamRolesResponse = /** @class */ (function (_super) {
    __extends(GetModifyClusterIamRolesResponse, _super);
    function GetModifyClusterIamRolesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetModifyClusterIamRolesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetModifyClusterIamRolesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetModifyClusterIamRolesResponse.prototype, "statusCode", void 0);
    return GetModifyClusterIamRolesResponse;
}(SpeakeasyBase));
export { GetModifyClusterIamRolesResponse };
