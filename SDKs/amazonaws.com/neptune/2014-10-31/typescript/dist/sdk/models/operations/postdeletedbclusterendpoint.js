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
export var PostDeleteDbClusterEndpointActionEnum;
(function (PostDeleteDbClusterEndpointActionEnum) {
    PostDeleteDbClusterEndpointActionEnum["DeleteDbClusterEndpoint"] = "DeleteDBClusterEndpoint";
})(PostDeleteDbClusterEndpointActionEnum || (PostDeleteDbClusterEndpointActionEnum = {}));
export var PostDeleteDbClusterEndpointVersionEnum;
(function (PostDeleteDbClusterEndpointVersionEnum) {
    PostDeleteDbClusterEndpointVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(PostDeleteDbClusterEndpointVersionEnum || (PostDeleteDbClusterEndpointVersionEnum = {}));
var PostDeleteDbClusterEndpointQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteDbClusterEndpointQueryParams, _super);
    function PostDeleteDbClusterEndpointQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteDbClusterEndpointQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteDbClusterEndpointQueryParams.prototype, "version", void 0);
    return PostDeleteDbClusterEndpointQueryParams;
}(SpeakeasyBase));
export { PostDeleteDbClusterEndpointQueryParams };
var PostDeleteDbClusterEndpointHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteDbClusterEndpointHeaders, _super);
    function PostDeleteDbClusterEndpointHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteDbClusterEndpointHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteDbClusterEndpointHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteDbClusterEndpointHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteDbClusterEndpointHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteDbClusterEndpointHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteDbClusterEndpointHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteDbClusterEndpointHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteDbClusterEndpointHeaders;
}(SpeakeasyBase));
export { PostDeleteDbClusterEndpointHeaders };
var PostDeleteDbClusterEndpointRequest = /** @class */ (function (_super) {
    __extends(PostDeleteDbClusterEndpointRequest, _super);
    function PostDeleteDbClusterEndpointRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteDbClusterEndpointQueryParams)
    ], PostDeleteDbClusterEndpointRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteDbClusterEndpointHeaders)
    ], PostDeleteDbClusterEndpointRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteDbClusterEndpointRequest.prototype, "request", void 0);
    return PostDeleteDbClusterEndpointRequest;
}(SpeakeasyBase));
export { PostDeleteDbClusterEndpointRequest };
var PostDeleteDbClusterEndpointResponse = /** @class */ (function (_super) {
    __extends(PostDeleteDbClusterEndpointResponse, _super);
    function PostDeleteDbClusterEndpointResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteDbClusterEndpointResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDeleteDbClusterEndpointResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDeleteDbClusterEndpointResponse.prototype, "statusCode", void 0);
    return PostDeleteDbClusterEndpointResponse;
}(SpeakeasyBase));
export { PostDeleteDbClusterEndpointResponse };
