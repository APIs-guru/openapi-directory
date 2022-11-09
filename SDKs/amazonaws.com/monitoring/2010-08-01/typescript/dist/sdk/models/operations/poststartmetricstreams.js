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
export var PostStartMetricStreamsActionEnum;
(function (PostStartMetricStreamsActionEnum) {
    PostStartMetricStreamsActionEnum["StartMetricStreams"] = "StartMetricStreams";
})(PostStartMetricStreamsActionEnum || (PostStartMetricStreamsActionEnum = {}));
export var PostStartMetricStreamsVersionEnum;
(function (PostStartMetricStreamsVersionEnum) {
    PostStartMetricStreamsVersionEnum["TwoThousandAndTen0801"] = "2010-08-01";
})(PostStartMetricStreamsVersionEnum || (PostStartMetricStreamsVersionEnum = {}));
var PostStartMetricStreamsQueryParams = /** @class */ (function (_super) {
    __extends(PostStartMetricStreamsQueryParams, _super);
    function PostStartMetricStreamsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostStartMetricStreamsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostStartMetricStreamsQueryParams.prototype, "version", void 0);
    return PostStartMetricStreamsQueryParams;
}(SpeakeasyBase));
export { PostStartMetricStreamsQueryParams };
var PostStartMetricStreamsHeaders = /** @class */ (function (_super) {
    __extends(PostStartMetricStreamsHeaders, _super);
    function PostStartMetricStreamsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostStartMetricStreamsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostStartMetricStreamsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostStartMetricStreamsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostStartMetricStreamsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostStartMetricStreamsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostStartMetricStreamsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostStartMetricStreamsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostStartMetricStreamsHeaders;
}(SpeakeasyBase));
export { PostStartMetricStreamsHeaders };
var PostStartMetricStreamsRequest = /** @class */ (function (_super) {
    __extends(PostStartMetricStreamsRequest, _super);
    function PostStartMetricStreamsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostStartMetricStreamsQueryParams)
    ], PostStartMetricStreamsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostStartMetricStreamsHeaders)
    ], PostStartMetricStreamsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostStartMetricStreamsRequest.prototype, "request", void 0);
    return PostStartMetricStreamsRequest;
}(SpeakeasyBase));
export { PostStartMetricStreamsRequest };
var PostStartMetricStreamsResponse = /** @class */ (function (_super) {
    __extends(PostStartMetricStreamsResponse, _super);
    function PostStartMetricStreamsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostStartMetricStreamsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostStartMetricStreamsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostStartMetricStreamsResponse.prototype, "statusCode", void 0);
    return PostStartMetricStreamsResponse;
}(SpeakeasyBase));
export { PostStartMetricStreamsResponse };
