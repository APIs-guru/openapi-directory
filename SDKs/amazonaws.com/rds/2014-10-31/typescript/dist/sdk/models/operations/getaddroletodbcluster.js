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
export var GetAddRoleToDbClusterActionEnum;
(function (GetAddRoleToDbClusterActionEnum) {
    GetAddRoleToDbClusterActionEnum["AddRoleToDbCluster"] = "AddRoleToDBCluster";
})(GetAddRoleToDbClusterActionEnum || (GetAddRoleToDbClusterActionEnum = {}));
export var GetAddRoleToDbClusterVersionEnum;
(function (GetAddRoleToDbClusterVersionEnum) {
    GetAddRoleToDbClusterVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(GetAddRoleToDbClusterVersionEnum || (GetAddRoleToDbClusterVersionEnum = {}));
var GetAddRoleToDbClusterQueryParams = /** @class */ (function (_super) {
    __extends(GetAddRoleToDbClusterQueryParams, _super);
    function GetAddRoleToDbClusterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetAddRoleToDbClusterQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DBClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetAddRoleToDbClusterQueryParams.prototype, "dbClusterIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=FeatureName" }),
        __metadata("design:type", String)
    ], GetAddRoleToDbClusterQueryParams.prototype, "featureName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=RoleArn" }),
        __metadata("design:type", String)
    ], GetAddRoleToDbClusterQueryParams.prototype, "roleArn", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetAddRoleToDbClusterQueryParams.prototype, "version", void 0);
    return GetAddRoleToDbClusterQueryParams;
}(SpeakeasyBase));
export { GetAddRoleToDbClusterQueryParams };
var GetAddRoleToDbClusterHeaders = /** @class */ (function (_super) {
    __extends(GetAddRoleToDbClusterHeaders, _super);
    function GetAddRoleToDbClusterHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetAddRoleToDbClusterHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetAddRoleToDbClusterHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetAddRoleToDbClusterHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetAddRoleToDbClusterHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetAddRoleToDbClusterHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetAddRoleToDbClusterHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetAddRoleToDbClusterHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetAddRoleToDbClusterHeaders;
}(SpeakeasyBase));
export { GetAddRoleToDbClusterHeaders };
var GetAddRoleToDbClusterRequest = /** @class */ (function (_super) {
    __extends(GetAddRoleToDbClusterRequest, _super);
    function GetAddRoleToDbClusterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAddRoleToDbClusterQueryParams)
    ], GetAddRoleToDbClusterRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAddRoleToDbClusterHeaders)
    ], GetAddRoleToDbClusterRequest.prototype, "headers", void 0);
    return GetAddRoleToDbClusterRequest;
}(SpeakeasyBase));
export { GetAddRoleToDbClusterRequest };
var GetAddRoleToDbClusterResponse = /** @class */ (function (_super) {
    __extends(GetAddRoleToDbClusterResponse, _super);
    function GetAddRoleToDbClusterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetAddRoleToDbClusterResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAddRoleToDbClusterResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAddRoleToDbClusterResponse.prototype, "statusCode", void 0);
    return GetAddRoleToDbClusterResponse;
}(SpeakeasyBase));
export { GetAddRoleToDbClusterResponse };
