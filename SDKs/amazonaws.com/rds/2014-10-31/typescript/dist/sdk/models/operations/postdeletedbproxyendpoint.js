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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
export var PostDeleteDbProxyEndpointActionEnum;
(function (PostDeleteDbProxyEndpointActionEnum) {
    PostDeleteDbProxyEndpointActionEnum["DeleteDbProxyEndpoint"] = "DeleteDBProxyEndpoint";
})(PostDeleteDbProxyEndpointActionEnum || (PostDeleteDbProxyEndpointActionEnum = {}));
export var PostDeleteDbProxyEndpointVersionEnum;
(function (PostDeleteDbProxyEndpointVersionEnum) {
    PostDeleteDbProxyEndpointVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(PostDeleteDbProxyEndpointVersionEnum || (PostDeleteDbProxyEndpointVersionEnum = {}));
var PostDeleteDbProxyEndpointQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteDbProxyEndpointQueryParams, _super);
    function PostDeleteDbProxyEndpointQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteDbProxyEndpointQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteDbProxyEndpointQueryParams.prototype, "version", void 0);
    return PostDeleteDbProxyEndpointQueryParams;
}(SpeakeasyBase));
export { PostDeleteDbProxyEndpointQueryParams };
var PostDeleteDbProxyEndpointHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteDbProxyEndpointHeaders, _super);
    function PostDeleteDbProxyEndpointHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteDbProxyEndpointHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteDbProxyEndpointHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteDbProxyEndpointHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteDbProxyEndpointHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteDbProxyEndpointHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteDbProxyEndpointHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteDbProxyEndpointHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteDbProxyEndpointHeaders;
}(SpeakeasyBase));
export { PostDeleteDbProxyEndpointHeaders };
var PostDeleteDbProxyEndpointRequest = /** @class */ (function (_super) {
    __extends(PostDeleteDbProxyEndpointRequest, _super);
    function PostDeleteDbProxyEndpointRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDeleteDbProxyEndpointQueryParams)
    ], PostDeleteDbProxyEndpointRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDeleteDbProxyEndpointHeaders)
    ], PostDeleteDbProxyEndpointRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteDbProxyEndpointRequest.prototype, "request", void 0);
    return PostDeleteDbProxyEndpointRequest;
}(SpeakeasyBase));
export { PostDeleteDbProxyEndpointRequest };
var PostDeleteDbProxyEndpointResponse = /** @class */ (function (_super) {
    __extends(PostDeleteDbProxyEndpointResponse, _super);
    function PostDeleteDbProxyEndpointResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteDbProxyEndpointResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDeleteDbProxyEndpointResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDeleteDbProxyEndpointResponse.prototype, "statusCode", void 0);
    return PostDeleteDbProxyEndpointResponse;
}(SpeakeasyBase));
export { PostDeleteDbProxyEndpointResponse };
