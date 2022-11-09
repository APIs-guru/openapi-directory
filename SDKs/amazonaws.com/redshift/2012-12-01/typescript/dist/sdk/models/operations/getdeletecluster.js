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
export var GetDeleteClusterActionEnum;
(function (GetDeleteClusterActionEnum) {
    GetDeleteClusterActionEnum["DeleteCluster"] = "DeleteCluster";
})(GetDeleteClusterActionEnum || (GetDeleteClusterActionEnum = {}));
export var GetDeleteClusterVersionEnum;
(function (GetDeleteClusterVersionEnum) {
    GetDeleteClusterVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetDeleteClusterVersionEnum || (GetDeleteClusterVersionEnum = {}));
var GetDeleteClusterQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteClusterQueryParams, _super);
    function GetDeleteClusterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteClusterQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetDeleteClusterQueryParams.prototype, "clusterIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=FinalClusterSnapshotIdentifier" }),
        __metadata("design:type", String)
    ], GetDeleteClusterQueryParams.prototype, "finalClusterSnapshotIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=FinalClusterSnapshotRetentionPeriod" }),
        __metadata("design:type", Number)
    ], GetDeleteClusterQueryParams.prototype, "finalClusterSnapshotRetentionPeriod", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SkipFinalClusterSnapshot" }),
        __metadata("design:type", Boolean)
    ], GetDeleteClusterQueryParams.prototype, "skipFinalClusterSnapshot", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteClusterQueryParams.prototype, "version", void 0);
    return GetDeleteClusterQueryParams;
}(SpeakeasyBase));
export { GetDeleteClusterQueryParams };
var GetDeleteClusterHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteClusterHeaders, _super);
    function GetDeleteClusterHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteClusterHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteClusterHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteClusterHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteClusterHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteClusterHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteClusterHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteClusterHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteClusterHeaders;
}(SpeakeasyBase));
export { GetDeleteClusterHeaders };
var GetDeleteClusterRequest = /** @class */ (function (_super) {
    __extends(GetDeleteClusterRequest, _super);
    function GetDeleteClusterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteClusterQueryParams)
    ], GetDeleteClusterRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteClusterHeaders)
    ], GetDeleteClusterRequest.prototype, "headers", void 0);
    return GetDeleteClusterRequest;
}(SpeakeasyBase));
export { GetDeleteClusterRequest };
var GetDeleteClusterResponse = /** @class */ (function (_super) {
    __extends(GetDeleteClusterResponse, _super);
    function GetDeleteClusterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteClusterResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteClusterResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteClusterResponse.prototype, "statusCode", void 0);
    return GetDeleteClusterResponse;
}(SpeakeasyBase));
export { GetDeleteClusterResponse };
