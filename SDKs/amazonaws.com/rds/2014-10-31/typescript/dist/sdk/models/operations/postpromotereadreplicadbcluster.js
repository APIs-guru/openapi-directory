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
export var PostPromoteReadReplicaDbClusterActionEnum;
(function (PostPromoteReadReplicaDbClusterActionEnum) {
    PostPromoteReadReplicaDbClusterActionEnum["PromoteReadReplicaDbCluster"] = "PromoteReadReplicaDBCluster";
})(PostPromoteReadReplicaDbClusterActionEnum || (PostPromoteReadReplicaDbClusterActionEnum = {}));
export var PostPromoteReadReplicaDbClusterVersionEnum;
(function (PostPromoteReadReplicaDbClusterVersionEnum) {
    PostPromoteReadReplicaDbClusterVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(PostPromoteReadReplicaDbClusterVersionEnum || (PostPromoteReadReplicaDbClusterVersionEnum = {}));
var PostPromoteReadReplicaDbClusterQueryParams = /** @class */ (function (_super) {
    __extends(PostPromoteReadReplicaDbClusterQueryParams, _super);
    function PostPromoteReadReplicaDbClusterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostPromoteReadReplicaDbClusterQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostPromoteReadReplicaDbClusterQueryParams.prototype, "version", void 0);
    return PostPromoteReadReplicaDbClusterQueryParams;
}(SpeakeasyBase));
export { PostPromoteReadReplicaDbClusterQueryParams };
var PostPromoteReadReplicaDbClusterHeaders = /** @class */ (function (_super) {
    __extends(PostPromoteReadReplicaDbClusterHeaders, _super);
    function PostPromoteReadReplicaDbClusterHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostPromoteReadReplicaDbClusterHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostPromoteReadReplicaDbClusterHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostPromoteReadReplicaDbClusterHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostPromoteReadReplicaDbClusterHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostPromoteReadReplicaDbClusterHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostPromoteReadReplicaDbClusterHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostPromoteReadReplicaDbClusterHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostPromoteReadReplicaDbClusterHeaders;
}(SpeakeasyBase));
export { PostPromoteReadReplicaDbClusterHeaders };
var PostPromoteReadReplicaDbClusterRequest = /** @class */ (function (_super) {
    __extends(PostPromoteReadReplicaDbClusterRequest, _super);
    function PostPromoteReadReplicaDbClusterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostPromoteReadReplicaDbClusterQueryParams)
    ], PostPromoteReadReplicaDbClusterRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostPromoteReadReplicaDbClusterHeaders)
    ], PostPromoteReadReplicaDbClusterRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostPromoteReadReplicaDbClusterRequest.prototype, "request", void 0);
    return PostPromoteReadReplicaDbClusterRequest;
}(SpeakeasyBase));
export { PostPromoteReadReplicaDbClusterRequest };
var PostPromoteReadReplicaDbClusterResponse = /** @class */ (function (_super) {
    __extends(PostPromoteReadReplicaDbClusterResponse, _super);
    function PostPromoteReadReplicaDbClusterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostPromoteReadReplicaDbClusterResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostPromoteReadReplicaDbClusterResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostPromoteReadReplicaDbClusterResponse.prototype, "statusCode", void 0);
    return PostPromoteReadReplicaDbClusterResponse;
}(SpeakeasyBase));
export { PostPromoteReadReplicaDbClusterResponse };
