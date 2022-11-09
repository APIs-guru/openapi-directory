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
export var PostDeleteGlobalClusterActionEnum;
(function (PostDeleteGlobalClusterActionEnum) {
    PostDeleteGlobalClusterActionEnum["DeleteGlobalCluster"] = "DeleteGlobalCluster";
})(PostDeleteGlobalClusterActionEnum || (PostDeleteGlobalClusterActionEnum = {}));
export var PostDeleteGlobalClusterVersionEnum;
(function (PostDeleteGlobalClusterVersionEnum) {
    PostDeleteGlobalClusterVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(PostDeleteGlobalClusterVersionEnum || (PostDeleteGlobalClusterVersionEnum = {}));
var PostDeleteGlobalClusterQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteGlobalClusterQueryParams, _super);
    function PostDeleteGlobalClusterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteGlobalClusterQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteGlobalClusterQueryParams.prototype, "version", void 0);
    return PostDeleteGlobalClusterQueryParams;
}(SpeakeasyBase));
export { PostDeleteGlobalClusterQueryParams };
var PostDeleteGlobalClusterHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteGlobalClusterHeaders, _super);
    function PostDeleteGlobalClusterHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteGlobalClusterHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteGlobalClusterHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteGlobalClusterHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteGlobalClusterHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteGlobalClusterHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteGlobalClusterHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteGlobalClusterHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteGlobalClusterHeaders;
}(SpeakeasyBase));
export { PostDeleteGlobalClusterHeaders };
var PostDeleteGlobalClusterRequest = /** @class */ (function (_super) {
    __extends(PostDeleteGlobalClusterRequest, _super);
    function PostDeleteGlobalClusterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteGlobalClusterQueryParams)
    ], PostDeleteGlobalClusterRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteGlobalClusterHeaders)
    ], PostDeleteGlobalClusterRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteGlobalClusterRequest.prototype, "request", void 0);
    return PostDeleteGlobalClusterRequest;
}(SpeakeasyBase));
export { PostDeleteGlobalClusterRequest };
var PostDeleteGlobalClusterResponse = /** @class */ (function (_super) {
    __extends(PostDeleteGlobalClusterResponse, _super);
    function PostDeleteGlobalClusterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteGlobalClusterResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDeleteGlobalClusterResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDeleteGlobalClusterResponse.prototype, "statusCode", void 0);
    return PostDeleteGlobalClusterResponse;
}(SpeakeasyBase));
export { PostDeleteGlobalClusterResponse };
