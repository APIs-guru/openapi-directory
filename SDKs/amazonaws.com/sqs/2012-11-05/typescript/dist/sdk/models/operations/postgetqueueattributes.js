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
export var PostGetQueueAttributesActionEnum;
(function (PostGetQueueAttributesActionEnum) {
    PostGetQueueAttributesActionEnum["GetQueueAttributes"] = "GetQueueAttributes";
})(PostGetQueueAttributesActionEnum || (PostGetQueueAttributesActionEnum = {}));
export var PostGetQueueAttributesVersionEnum;
(function (PostGetQueueAttributesVersionEnum) {
    PostGetQueueAttributesVersionEnum["TwoThousandAndTwelve1105"] = "2012-11-05";
})(PostGetQueueAttributesVersionEnum || (PostGetQueueAttributesVersionEnum = {}));
var PostGetQueueAttributesQueryParams = /** @class */ (function (_super) {
    __extends(PostGetQueueAttributesQueryParams, _super);
    function PostGetQueueAttributesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostGetQueueAttributesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostGetQueueAttributesQueryParams.prototype, "version", void 0);
    return PostGetQueueAttributesQueryParams;
}(SpeakeasyBase));
export { PostGetQueueAttributesQueryParams };
var PostGetQueueAttributesHeaders = /** @class */ (function (_super) {
    __extends(PostGetQueueAttributesHeaders, _super);
    function PostGetQueueAttributesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostGetQueueAttributesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostGetQueueAttributesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostGetQueueAttributesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostGetQueueAttributesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostGetQueueAttributesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostGetQueueAttributesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostGetQueueAttributesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostGetQueueAttributesHeaders;
}(SpeakeasyBase));
export { PostGetQueueAttributesHeaders };
var PostGetQueueAttributesRequest = /** @class */ (function (_super) {
    __extends(PostGetQueueAttributesRequest, _super);
    function PostGetQueueAttributesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostGetQueueAttributesQueryParams)
    ], PostGetQueueAttributesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostGetQueueAttributesHeaders)
    ], PostGetQueueAttributesRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostGetQueueAttributesRequest.prototype, "request", void 0);
    return PostGetQueueAttributesRequest;
}(SpeakeasyBase));
export { PostGetQueueAttributesRequest };
var PostGetQueueAttributesResponse = /** @class */ (function (_super) {
    __extends(PostGetQueueAttributesResponse, _super);
    function PostGetQueueAttributesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostGetQueueAttributesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostGetQueueAttributesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostGetQueueAttributesResponse.prototype, "statusCode", void 0);
    return PostGetQueueAttributesResponse;
}(SpeakeasyBase));
export { PostGetQueueAttributesResponse };
