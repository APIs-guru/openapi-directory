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
export var GetPromoteReadReplicaDbClusterActionEnum;
(function (GetPromoteReadReplicaDbClusterActionEnum) {
    GetPromoteReadReplicaDbClusterActionEnum["PromoteReadReplicaDbCluster"] = "PromoteReadReplicaDBCluster";
})(GetPromoteReadReplicaDbClusterActionEnum || (GetPromoteReadReplicaDbClusterActionEnum = {}));
export var GetPromoteReadReplicaDbClusterVersionEnum;
(function (GetPromoteReadReplicaDbClusterVersionEnum) {
    GetPromoteReadReplicaDbClusterVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(GetPromoteReadReplicaDbClusterVersionEnum || (GetPromoteReadReplicaDbClusterVersionEnum = {}));
var GetPromoteReadReplicaDbClusterQueryParams = /** @class */ (function (_super) {
    __extends(GetPromoteReadReplicaDbClusterQueryParams, _super);
    function GetPromoteReadReplicaDbClusterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetPromoteReadReplicaDbClusterQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DBClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetPromoteReadReplicaDbClusterQueryParams.prototype, "dbClusterIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetPromoteReadReplicaDbClusterQueryParams.prototype, "version", void 0);
    return GetPromoteReadReplicaDbClusterQueryParams;
}(SpeakeasyBase));
export { GetPromoteReadReplicaDbClusterQueryParams };
var GetPromoteReadReplicaDbClusterHeaders = /** @class */ (function (_super) {
    __extends(GetPromoteReadReplicaDbClusterHeaders, _super);
    function GetPromoteReadReplicaDbClusterHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetPromoteReadReplicaDbClusterHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetPromoteReadReplicaDbClusterHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetPromoteReadReplicaDbClusterHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetPromoteReadReplicaDbClusterHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetPromoteReadReplicaDbClusterHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetPromoteReadReplicaDbClusterHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetPromoteReadReplicaDbClusterHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetPromoteReadReplicaDbClusterHeaders;
}(SpeakeasyBase));
export { GetPromoteReadReplicaDbClusterHeaders };
var GetPromoteReadReplicaDbClusterRequest = /** @class */ (function (_super) {
    __extends(GetPromoteReadReplicaDbClusterRequest, _super);
    function GetPromoteReadReplicaDbClusterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetPromoteReadReplicaDbClusterQueryParams)
    ], GetPromoteReadReplicaDbClusterRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetPromoteReadReplicaDbClusterHeaders)
    ], GetPromoteReadReplicaDbClusterRequest.prototype, "headers", void 0);
    return GetPromoteReadReplicaDbClusterRequest;
}(SpeakeasyBase));
export { GetPromoteReadReplicaDbClusterRequest };
var GetPromoteReadReplicaDbClusterResponse = /** @class */ (function (_super) {
    __extends(GetPromoteReadReplicaDbClusterResponse, _super);
    function GetPromoteReadReplicaDbClusterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetPromoteReadReplicaDbClusterResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetPromoteReadReplicaDbClusterResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetPromoteReadReplicaDbClusterResponse.prototype, "statusCode", void 0);
    return GetPromoteReadReplicaDbClusterResponse;
}(SpeakeasyBase));
export { GetPromoteReadReplicaDbClusterResponse };
