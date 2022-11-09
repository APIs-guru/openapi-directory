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
export var PostBacktrackDbClusterActionEnum;
(function (PostBacktrackDbClusterActionEnum) {
    PostBacktrackDbClusterActionEnum["BacktrackDbCluster"] = "BacktrackDBCluster";
})(PostBacktrackDbClusterActionEnum || (PostBacktrackDbClusterActionEnum = {}));
export var PostBacktrackDbClusterVersionEnum;
(function (PostBacktrackDbClusterVersionEnum) {
    PostBacktrackDbClusterVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(PostBacktrackDbClusterVersionEnum || (PostBacktrackDbClusterVersionEnum = {}));
var PostBacktrackDbClusterQueryParams = /** @class */ (function (_super) {
    __extends(PostBacktrackDbClusterQueryParams, _super);
    function PostBacktrackDbClusterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostBacktrackDbClusterQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostBacktrackDbClusterQueryParams.prototype, "version", void 0);
    return PostBacktrackDbClusterQueryParams;
}(SpeakeasyBase));
export { PostBacktrackDbClusterQueryParams };
var PostBacktrackDbClusterHeaders = /** @class */ (function (_super) {
    __extends(PostBacktrackDbClusterHeaders, _super);
    function PostBacktrackDbClusterHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostBacktrackDbClusterHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostBacktrackDbClusterHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostBacktrackDbClusterHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostBacktrackDbClusterHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostBacktrackDbClusterHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostBacktrackDbClusterHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostBacktrackDbClusterHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostBacktrackDbClusterHeaders;
}(SpeakeasyBase));
export { PostBacktrackDbClusterHeaders };
var PostBacktrackDbClusterRequest = /** @class */ (function (_super) {
    __extends(PostBacktrackDbClusterRequest, _super);
    function PostBacktrackDbClusterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostBacktrackDbClusterQueryParams)
    ], PostBacktrackDbClusterRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostBacktrackDbClusterHeaders)
    ], PostBacktrackDbClusterRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostBacktrackDbClusterRequest.prototype, "request", void 0);
    return PostBacktrackDbClusterRequest;
}(SpeakeasyBase));
export { PostBacktrackDbClusterRequest };
var PostBacktrackDbClusterResponse = /** @class */ (function (_super) {
    __extends(PostBacktrackDbClusterResponse, _super);
    function PostBacktrackDbClusterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostBacktrackDbClusterResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostBacktrackDbClusterResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostBacktrackDbClusterResponse.prototype, "statusCode", void 0);
    return PostBacktrackDbClusterResponse;
}(SpeakeasyBase));
export { PostBacktrackDbClusterResponse };
