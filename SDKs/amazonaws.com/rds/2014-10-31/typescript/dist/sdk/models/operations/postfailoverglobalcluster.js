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
export var PostFailoverGlobalClusterActionEnum;
(function (PostFailoverGlobalClusterActionEnum) {
    PostFailoverGlobalClusterActionEnum["FailoverGlobalCluster"] = "FailoverGlobalCluster";
})(PostFailoverGlobalClusterActionEnum || (PostFailoverGlobalClusterActionEnum = {}));
export var PostFailoverGlobalClusterVersionEnum;
(function (PostFailoverGlobalClusterVersionEnum) {
    PostFailoverGlobalClusterVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(PostFailoverGlobalClusterVersionEnum || (PostFailoverGlobalClusterVersionEnum = {}));
var PostFailoverGlobalClusterQueryParams = /** @class */ (function (_super) {
    __extends(PostFailoverGlobalClusterQueryParams, _super);
    function PostFailoverGlobalClusterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostFailoverGlobalClusterQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostFailoverGlobalClusterQueryParams.prototype, "version", void 0);
    return PostFailoverGlobalClusterQueryParams;
}(SpeakeasyBase));
export { PostFailoverGlobalClusterQueryParams };
var PostFailoverGlobalClusterHeaders = /** @class */ (function (_super) {
    __extends(PostFailoverGlobalClusterHeaders, _super);
    function PostFailoverGlobalClusterHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostFailoverGlobalClusterHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostFailoverGlobalClusterHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostFailoverGlobalClusterHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostFailoverGlobalClusterHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostFailoverGlobalClusterHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostFailoverGlobalClusterHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostFailoverGlobalClusterHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostFailoverGlobalClusterHeaders;
}(SpeakeasyBase));
export { PostFailoverGlobalClusterHeaders };
var PostFailoverGlobalClusterRequest = /** @class */ (function (_super) {
    __extends(PostFailoverGlobalClusterRequest, _super);
    function PostFailoverGlobalClusterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostFailoverGlobalClusterQueryParams)
    ], PostFailoverGlobalClusterRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostFailoverGlobalClusterHeaders)
    ], PostFailoverGlobalClusterRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostFailoverGlobalClusterRequest.prototype, "request", void 0);
    return PostFailoverGlobalClusterRequest;
}(SpeakeasyBase));
export { PostFailoverGlobalClusterRequest };
var PostFailoverGlobalClusterResponse = /** @class */ (function (_super) {
    __extends(PostFailoverGlobalClusterResponse, _super);
    function PostFailoverGlobalClusterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostFailoverGlobalClusterResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostFailoverGlobalClusterResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostFailoverGlobalClusterResponse.prototype, "statusCode", void 0);
    return PostFailoverGlobalClusterResponse;
}(SpeakeasyBase));
export { PostFailoverGlobalClusterResponse };
