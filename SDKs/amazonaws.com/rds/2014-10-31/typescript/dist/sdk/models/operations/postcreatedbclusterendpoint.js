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
export var PostCreateDbClusterEndpointActionEnum;
(function (PostCreateDbClusterEndpointActionEnum) {
    PostCreateDbClusterEndpointActionEnum["CreateDbClusterEndpoint"] = "CreateDBClusterEndpoint";
})(PostCreateDbClusterEndpointActionEnum || (PostCreateDbClusterEndpointActionEnum = {}));
export var PostCreateDbClusterEndpointVersionEnum;
(function (PostCreateDbClusterEndpointVersionEnum) {
    PostCreateDbClusterEndpointVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(PostCreateDbClusterEndpointVersionEnum || (PostCreateDbClusterEndpointVersionEnum = {}));
var PostCreateDbClusterEndpointQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateDbClusterEndpointQueryParams, _super);
    function PostCreateDbClusterEndpointQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateDbClusterEndpointQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateDbClusterEndpointQueryParams.prototype, "version", void 0);
    return PostCreateDbClusterEndpointQueryParams;
}(SpeakeasyBase));
export { PostCreateDbClusterEndpointQueryParams };
var PostCreateDbClusterEndpointHeaders = /** @class */ (function (_super) {
    __extends(PostCreateDbClusterEndpointHeaders, _super);
    function PostCreateDbClusterEndpointHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateDbClusterEndpointHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateDbClusterEndpointHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateDbClusterEndpointHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateDbClusterEndpointHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateDbClusterEndpointHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateDbClusterEndpointHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateDbClusterEndpointHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateDbClusterEndpointHeaders;
}(SpeakeasyBase));
export { PostCreateDbClusterEndpointHeaders };
var PostCreateDbClusterEndpointRequest = /** @class */ (function (_super) {
    __extends(PostCreateDbClusterEndpointRequest, _super);
    function PostCreateDbClusterEndpointRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostCreateDbClusterEndpointQueryParams)
    ], PostCreateDbClusterEndpointRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostCreateDbClusterEndpointHeaders)
    ], PostCreateDbClusterEndpointRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateDbClusterEndpointRequest.prototype, "request", void 0);
    return PostCreateDbClusterEndpointRequest;
}(SpeakeasyBase));
export { PostCreateDbClusterEndpointRequest };
var PostCreateDbClusterEndpointResponse = /** @class */ (function (_super) {
    __extends(PostCreateDbClusterEndpointResponse, _super);
    function PostCreateDbClusterEndpointResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostCreateDbClusterEndpointResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostCreateDbClusterEndpointResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostCreateDbClusterEndpointResponse.prototype, "statusCode", void 0);
    return PostCreateDbClusterEndpointResponse;
}(SpeakeasyBase));
export { PostCreateDbClusterEndpointResponse };
