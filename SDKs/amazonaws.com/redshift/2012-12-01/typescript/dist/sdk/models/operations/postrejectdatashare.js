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
export var PostRejectDataShareActionEnum;
(function (PostRejectDataShareActionEnum) {
    PostRejectDataShareActionEnum["RejectDataShare"] = "RejectDataShare";
})(PostRejectDataShareActionEnum || (PostRejectDataShareActionEnum = {}));
export var PostRejectDataShareVersionEnum;
(function (PostRejectDataShareVersionEnum) {
    PostRejectDataShareVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostRejectDataShareVersionEnum || (PostRejectDataShareVersionEnum = {}));
var PostRejectDataShareQueryParams = /** @class */ (function (_super) {
    __extends(PostRejectDataShareQueryParams, _super);
    function PostRejectDataShareQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostRejectDataShareQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostRejectDataShareQueryParams.prototype, "version", void 0);
    return PostRejectDataShareQueryParams;
}(SpeakeasyBase));
export { PostRejectDataShareQueryParams };
var PostRejectDataShareHeaders = /** @class */ (function (_super) {
    __extends(PostRejectDataShareHeaders, _super);
    function PostRejectDataShareHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostRejectDataShareHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostRejectDataShareHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostRejectDataShareHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostRejectDataShareHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostRejectDataShareHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostRejectDataShareHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostRejectDataShareHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostRejectDataShareHeaders;
}(SpeakeasyBase));
export { PostRejectDataShareHeaders };
var PostRejectDataShareRequest = /** @class */ (function (_super) {
    __extends(PostRejectDataShareRequest, _super);
    function PostRejectDataShareRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostRejectDataShareQueryParams)
    ], PostRejectDataShareRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostRejectDataShareHeaders)
    ], PostRejectDataShareRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostRejectDataShareRequest.prototype, "request", void 0);
    return PostRejectDataShareRequest;
}(SpeakeasyBase));
export { PostRejectDataShareRequest };
var PostRejectDataShareResponse = /** @class */ (function (_super) {
    __extends(PostRejectDataShareResponse, _super);
    function PostRejectDataShareResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostRejectDataShareResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostRejectDataShareResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostRejectDataShareResponse.prototype, "statusCode", void 0);
    return PostRejectDataShareResponse;
}(SpeakeasyBase));
export { PostRejectDataShareResponse };
