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
export var GetResizeClusterActionEnum;
(function (GetResizeClusterActionEnum) {
    GetResizeClusterActionEnum["ResizeCluster"] = "ResizeCluster";
})(GetResizeClusterActionEnum || (GetResizeClusterActionEnum = {}));
export var GetResizeClusterVersionEnum;
(function (GetResizeClusterVersionEnum) {
    GetResizeClusterVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetResizeClusterVersionEnum || (GetResizeClusterVersionEnum = {}));
var GetResizeClusterQueryParams = /** @class */ (function (_super) {
    __extends(GetResizeClusterQueryParams, _super);
    function GetResizeClusterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetResizeClusterQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Classic" }),
        __metadata("design:type", Boolean)
    ], GetResizeClusterQueryParams.prototype, "classic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetResizeClusterQueryParams.prototype, "clusterIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClusterType" }),
        __metadata("design:type", String)
    ], GetResizeClusterQueryParams.prototype, "clusterType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NodeType" }),
        __metadata("design:type", String)
    ], GetResizeClusterQueryParams.prototype, "nodeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NumberOfNodes" }),
        __metadata("design:type", Number)
    ], GetResizeClusterQueryParams.prototype, "numberOfNodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetResizeClusterQueryParams.prototype, "version", void 0);
    return GetResizeClusterQueryParams;
}(SpeakeasyBase));
export { GetResizeClusterQueryParams };
var GetResizeClusterHeaders = /** @class */ (function (_super) {
    __extends(GetResizeClusterHeaders, _super);
    function GetResizeClusterHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetResizeClusterHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetResizeClusterHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetResizeClusterHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetResizeClusterHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetResizeClusterHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetResizeClusterHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetResizeClusterHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetResizeClusterHeaders;
}(SpeakeasyBase));
export { GetResizeClusterHeaders };
var GetResizeClusterRequest = /** @class */ (function (_super) {
    __extends(GetResizeClusterRequest, _super);
    function GetResizeClusterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetResizeClusterQueryParams)
    ], GetResizeClusterRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetResizeClusterHeaders)
    ], GetResizeClusterRequest.prototype, "headers", void 0);
    return GetResizeClusterRequest;
}(SpeakeasyBase));
export { GetResizeClusterRequest };
var GetResizeClusterResponse = /** @class */ (function (_super) {
    __extends(GetResizeClusterResponse, _super);
    function GetResizeClusterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetResizeClusterResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetResizeClusterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetResizeClusterResponse.prototype, "statusCode", void 0);
    return GetResizeClusterResponse;
}(SpeakeasyBase));
export { GetResizeClusterResponse };
