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
export var GetCreateGlobalClusterActionEnum;
(function (GetCreateGlobalClusterActionEnum) {
    GetCreateGlobalClusterActionEnum["CreateGlobalCluster"] = "CreateGlobalCluster";
})(GetCreateGlobalClusterActionEnum || (GetCreateGlobalClusterActionEnum = {}));
export var GetCreateGlobalClusterVersionEnum;
(function (GetCreateGlobalClusterVersionEnum) {
    GetCreateGlobalClusterVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(GetCreateGlobalClusterVersionEnum || (GetCreateGlobalClusterVersionEnum = {}));
var GetCreateGlobalClusterQueryParams = /** @class */ (function (_super) {
    __extends(GetCreateGlobalClusterQueryParams, _super);
    function GetCreateGlobalClusterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCreateGlobalClusterQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DatabaseName" }),
        __metadata("design:type", String)
    ], GetCreateGlobalClusterQueryParams.prototype, "databaseName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DeletionProtection" }),
        __metadata("design:type", Boolean)
    ], GetCreateGlobalClusterQueryParams.prototype, "deletionProtection", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Engine" }),
        __metadata("design:type", String)
    ], GetCreateGlobalClusterQueryParams.prototype, "engine", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EngineVersion" }),
        __metadata("design:type", String)
    ], GetCreateGlobalClusterQueryParams.prototype, "engineVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=GlobalClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetCreateGlobalClusterQueryParams.prototype, "globalClusterIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SourceDBClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetCreateGlobalClusterQueryParams.prototype, "sourceDbClusterIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=StorageEncrypted" }),
        __metadata("design:type", Boolean)
    ], GetCreateGlobalClusterQueryParams.prototype, "storageEncrypted", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCreateGlobalClusterQueryParams.prototype, "version", void 0);
    return GetCreateGlobalClusterQueryParams;
}(SpeakeasyBase));
export { GetCreateGlobalClusterQueryParams };
var GetCreateGlobalClusterHeaders = /** @class */ (function (_super) {
    __extends(GetCreateGlobalClusterHeaders, _super);
    function GetCreateGlobalClusterHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCreateGlobalClusterHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCreateGlobalClusterHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCreateGlobalClusterHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCreateGlobalClusterHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCreateGlobalClusterHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCreateGlobalClusterHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCreateGlobalClusterHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCreateGlobalClusterHeaders;
}(SpeakeasyBase));
export { GetCreateGlobalClusterHeaders };
var GetCreateGlobalClusterRequest = /** @class */ (function (_super) {
    __extends(GetCreateGlobalClusterRequest, _super);
    function GetCreateGlobalClusterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetCreateGlobalClusterQueryParams)
    ], GetCreateGlobalClusterRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetCreateGlobalClusterHeaders)
    ], GetCreateGlobalClusterRequest.prototype, "headers", void 0);
    return GetCreateGlobalClusterRequest;
}(SpeakeasyBase));
export { GetCreateGlobalClusterRequest };
var GetCreateGlobalClusterResponse = /** @class */ (function (_super) {
    __extends(GetCreateGlobalClusterResponse, _super);
    function GetCreateGlobalClusterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetCreateGlobalClusterResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetCreateGlobalClusterResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetCreateGlobalClusterResponse.prototype, "statusCode", void 0);
    return GetCreateGlobalClusterResponse;
}(SpeakeasyBase));
export { GetCreateGlobalClusterResponse };
