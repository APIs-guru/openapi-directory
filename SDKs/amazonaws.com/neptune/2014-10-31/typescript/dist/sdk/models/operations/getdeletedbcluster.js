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
export var GetDeleteDbClusterActionEnum;
(function (GetDeleteDbClusterActionEnum) {
    GetDeleteDbClusterActionEnum["DeleteDbCluster"] = "DeleteDBCluster";
})(GetDeleteDbClusterActionEnum || (GetDeleteDbClusterActionEnum = {}));
export var GetDeleteDbClusterVersionEnum;
(function (GetDeleteDbClusterVersionEnum) {
    GetDeleteDbClusterVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(GetDeleteDbClusterVersionEnum || (GetDeleteDbClusterVersionEnum = {}));
var GetDeleteDbClusterQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteDbClusterQueryParams, _super);
    function GetDeleteDbClusterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteDbClusterQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DBClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetDeleteDbClusterQueryParams.prototype, "dbClusterIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=FinalDBSnapshotIdentifier" }),
        __metadata("design:type", String)
    ], GetDeleteDbClusterQueryParams.prototype, "finalDbSnapshotIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SkipFinalSnapshot" }),
        __metadata("design:type", Boolean)
    ], GetDeleteDbClusterQueryParams.prototype, "skipFinalSnapshot", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteDbClusterQueryParams.prototype, "version", void 0);
    return GetDeleteDbClusterQueryParams;
}(SpeakeasyBase));
export { GetDeleteDbClusterQueryParams };
var GetDeleteDbClusterHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteDbClusterHeaders, _super);
    function GetDeleteDbClusterHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteDbClusterHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteDbClusterHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteDbClusterHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteDbClusterHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteDbClusterHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteDbClusterHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteDbClusterHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteDbClusterHeaders;
}(SpeakeasyBase));
export { GetDeleteDbClusterHeaders };
var GetDeleteDbClusterRequest = /** @class */ (function (_super) {
    __extends(GetDeleteDbClusterRequest, _super);
    function GetDeleteDbClusterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteDbClusterQueryParams)
    ], GetDeleteDbClusterRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteDbClusterHeaders)
    ], GetDeleteDbClusterRequest.prototype, "headers", void 0);
    return GetDeleteDbClusterRequest;
}(SpeakeasyBase));
export { GetDeleteDbClusterRequest };
var GetDeleteDbClusterResponse = /** @class */ (function (_super) {
    __extends(GetDeleteDbClusterResponse, _super);
    function GetDeleteDbClusterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteDbClusterResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteDbClusterResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteDbClusterResponse.prototype, "statusCode", void 0);
    return GetDeleteDbClusterResponse;
}(SpeakeasyBase));
export { GetDeleteDbClusterResponse };
