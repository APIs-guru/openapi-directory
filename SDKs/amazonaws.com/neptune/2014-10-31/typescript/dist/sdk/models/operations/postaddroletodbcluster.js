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
export var PostAddRoleToDbClusterActionEnum;
(function (PostAddRoleToDbClusterActionEnum) {
    PostAddRoleToDbClusterActionEnum["AddRoleToDbCluster"] = "AddRoleToDBCluster";
})(PostAddRoleToDbClusterActionEnum || (PostAddRoleToDbClusterActionEnum = {}));
export var PostAddRoleToDbClusterVersionEnum;
(function (PostAddRoleToDbClusterVersionEnum) {
    PostAddRoleToDbClusterVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(PostAddRoleToDbClusterVersionEnum || (PostAddRoleToDbClusterVersionEnum = {}));
var PostAddRoleToDbClusterQueryParams = /** @class */ (function (_super) {
    __extends(PostAddRoleToDbClusterQueryParams, _super);
    function PostAddRoleToDbClusterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostAddRoleToDbClusterQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostAddRoleToDbClusterQueryParams.prototype, "version", void 0);
    return PostAddRoleToDbClusterQueryParams;
}(SpeakeasyBase));
export { PostAddRoleToDbClusterQueryParams };
var PostAddRoleToDbClusterHeaders = /** @class */ (function (_super) {
    __extends(PostAddRoleToDbClusterHeaders, _super);
    function PostAddRoleToDbClusterHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostAddRoleToDbClusterHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostAddRoleToDbClusterHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostAddRoleToDbClusterHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostAddRoleToDbClusterHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostAddRoleToDbClusterHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostAddRoleToDbClusterHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostAddRoleToDbClusterHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostAddRoleToDbClusterHeaders;
}(SpeakeasyBase));
export { PostAddRoleToDbClusterHeaders };
var PostAddRoleToDbClusterRequest = /** @class */ (function (_super) {
    __extends(PostAddRoleToDbClusterRequest, _super);
    function PostAddRoleToDbClusterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostAddRoleToDbClusterQueryParams)
    ], PostAddRoleToDbClusterRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostAddRoleToDbClusterHeaders)
    ], PostAddRoleToDbClusterRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostAddRoleToDbClusterRequest.prototype, "request", void 0);
    return PostAddRoleToDbClusterRequest;
}(SpeakeasyBase));
export { PostAddRoleToDbClusterRequest };
var PostAddRoleToDbClusterResponse = /** @class */ (function (_super) {
    __extends(PostAddRoleToDbClusterResponse, _super);
    function PostAddRoleToDbClusterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostAddRoleToDbClusterResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostAddRoleToDbClusterResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostAddRoleToDbClusterResponse.prototype, "statusCode", void 0);
    return PostAddRoleToDbClusterResponse;
}(SpeakeasyBase));
export { PostAddRoleToDbClusterResponse };
