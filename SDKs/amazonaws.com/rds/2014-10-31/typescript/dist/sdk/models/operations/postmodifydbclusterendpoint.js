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
export var PostModifyDbClusterEndpointActionEnum;
(function (PostModifyDbClusterEndpointActionEnum) {
    PostModifyDbClusterEndpointActionEnum["ModifyDbClusterEndpoint"] = "ModifyDBClusterEndpoint";
})(PostModifyDbClusterEndpointActionEnum || (PostModifyDbClusterEndpointActionEnum = {}));
export var PostModifyDbClusterEndpointVersionEnum;
(function (PostModifyDbClusterEndpointVersionEnum) {
    PostModifyDbClusterEndpointVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(PostModifyDbClusterEndpointVersionEnum || (PostModifyDbClusterEndpointVersionEnum = {}));
var PostModifyDbClusterEndpointQueryParams = /** @class */ (function (_super) {
    __extends(PostModifyDbClusterEndpointQueryParams, _super);
    function PostModifyDbClusterEndpointQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostModifyDbClusterEndpointQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostModifyDbClusterEndpointQueryParams.prototype, "version", void 0);
    return PostModifyDbClusterEndpointQueryParams;
}(SpeakeasyBase));
export { PostModifyDbClusterEndpointQueryParams };
var PostModifyDbClusterEndpointHeaders = /** @class */ (function (_super) {
    __extends(PostModifyDbClusterEndpointHeaders, _super);
    function PostModifyDbClusterEndpointHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostModifyDbClusterEndpointHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostModifyDbClusterEndpointHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostModifyDbClusterEndpointHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostModifyDbClusterEndpointHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostModifyDbClusterEndpointHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostModifyDbClusterEndpointHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostModifyDbClusterEndpointHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostModifyDbClusterEndpointHeaders;
}(SpeakeasyBase));
export { PostModifyDbClusterEndpointHeaders };
var PostModifyDbClusterEndpointRequest = /** @class */ (function (_super) {
    __extends(PostModifyDbClusterEndpointRequest, _super);
    function PostModifyDbClusterEndpointRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostModifyDbClusterEndpointQueryParams)
    ], PostModifyDbClusterEndpointRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostModifyDbClusterEndpointHeaders)
    ], PostModifyDbClusterEndpointRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostModifyDbClusterEndpointRequest.prototype, "request", void 0);
    return PostModifyDbClusterEndpointRequest;
}(SpeakeasyBase));
export { PostModifyDbClusterEndpointRequest };
var PostModifyDbClusterEndpointResponse = /** @class */ (function (_super) {
    __extends(PostModifyDbClusterEndpointResponse, _super);
    function PostModifyDbClusterEndpointResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostModifyDbClusterEndpointResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostModifyDbClusterEndpointResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostModifyDbClusterEndpointResponse.prototype, "statusCode", void 0);
    return PostModifyDbClusterEndpointResponse;
}(SpeakeasyBase));
export { PostModifyDbClusterEndpointResponse };
