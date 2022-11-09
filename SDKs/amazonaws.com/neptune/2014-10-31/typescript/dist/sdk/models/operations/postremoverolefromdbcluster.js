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
export var PostRemoveRoleFromDbClusterActionEnum;
(function (PostRemoveRoleFromDbClusterActionEnum) {
    PostRemoveRoleFromDbClusterActionEnum["RemoveRoleFromDbCluster"] = "RemoveRoleFromDBCluster";
})(PostRemoveRoleFromDbClusterActionEnum || (PostRemoveRoleFromDbClusterActionEnum = {}));
export var PostRemoveRoleFromDbClusterVersionEnum;
(function (PostRemoveRoleFromDbClusterVersionEnum) {
    PostRemoveRoleFromDbClusterVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(PostRemoveRoleFromDbClusterVersionEnum || (PostRemoveRoleFromDbClusterVersionEnum = {}));
var PostRemoveRoleFromDbClusterQueryParams = /** @class */ (function (_super) {
    __extends(PostRemoveRoleFromDbClusterQueryParams, _super);
    function PostRemoveRoleFromDbClusterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostRemoveRoleFromDbClusterQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostRemoveRoleFromDbClusterQueryParams.prototype, "version", void 0);
    return PostRemoveRoleFromDbClusterQueryParams;
}(SpeakeasyBase));
export { PostRemoveRoleFromDbClusterQueryParams };
var PostRemoveRoleFromDbClusterHeaders = /** @class */ (function (_super) {
    __extends(PostRemoveRoleFromDbClusterHeaders, _super);
    function PostRemoveRoleFromDbClusterHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostRemoveRoleFromDbClusterHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostRemoveRoleFromDbClusterHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostRemoveRoleFromDbClusterHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostRemoveRoleFromDbClusterHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostRemoveRoleFromDbClusterHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostRemoveRoleFromDbClusterHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostRemoveRoleFromDbClusterHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostRemoveRoleFromDbClusterHeaders;
}(SpeakeasyBase));
export { PostRemoveRoleFromDbClusterHeaders };
var PostRemoveRoleFromDbClusterRequest = /** @class */ (function (_super) {
    __extends(PostRemoveRoleFromDbClusterRequest, _super);
    function PostRemoveRoleFromDbClusterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostRemoveRoleFromDbClusterQueryParams)
    ], PostRemoveRoleFromDbClusterRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostRemoveRoleFromDbClusterHeaders)
    ], PostRemoveRoleFromDbClusterRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostRemoveRoleFromDbClusterRequest.prototype, "request", void 0);
    return PostRemoveRoleFromDbClusterRequest;
}(SpeakeasyBase));
export { PostRemoveRoleFromDbClusterRequest };
var PostRemoveRoleFromDbClusterResponse = /** @class */ (function (_super) {
    __extends(PostRemoveRoleFromDbClusterResponse, _super);
    function PostRemoveRoleFromDbClusterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostRemoveRoleFromDbClusterResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostRemoveRoleFromDbClusterResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostRemoveRoleFromDbClusterResponse.prototype, "statusCode", void 0);
    return PostRemoveRoleFromDbClusterResponse;
}(SpeakeasyBase));
export { PostRemoveRoleFromDbClusterResponse };
