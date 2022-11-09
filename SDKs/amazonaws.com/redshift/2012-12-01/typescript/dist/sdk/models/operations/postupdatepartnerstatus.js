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
export var PostUpdatePartnerStatusActionEnum;
(function (PostUpdatePartnerStatusActionEnum) {
    PostUpdatePartnerStatusActionEnum["UpdatePartnerStatus"] = "UpdatePartnerStatus";
})(PostUpdatePartnerStatusActionEnum || (PostUpdatePartnerStatusActionEnum = {}));
export var PostUpdatePartnerStatusVersionEnum;
(function (PostUpdatePartnerStatusVersionEnum) {
    PostUpdatePartnerStatusVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostUpdatePartnerStatusVersionEnum || (PostUpdatePartnerStatusVersionEnum = {}));
var PostUpdatePartnerStatusQueryParams = /** @class */ (function (_super) {
    __extends(PostUpdatePartnerStatusQueryParams, _super);
    function PostUpdatePartnerStatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostUpdatePartnerStatusQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostUpdatePartnerStatusQueryParams.prototype, "version", void 0);
    return PostUpdatePartnerStatusQueryParams;
}(SpeakeasyBase));
export { PostUpdatePartnerStatusQueryParams };
var PostUpdatePartnerStatusHeaders = /** @class */ (function (_super) {
    __extends(PostUpdatePartnerStatusHeaders, _super);
    function PostUpdatePartnerStatusHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostUpdatePartnerStatusHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostUpdatePartnerStatusHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostUpdatePartnerStatusHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostUpdatePartnerStatusHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostUpdatePartnerStatusHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostUpdatePartnerStatusHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostUpdatePartnerStatusHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostUpdatePartnerStatusHeaders;
}(SpeakeasyBase));
export { PostUpdatePartnerStatusHeaders };
var PostUpdatePartnerStatusRequest = /** @class */ (function (_super) {
    __extends(PostUpdatePartnerStatusRequest, _super);
    function PostUpdatePartnerStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostUpdatePartnerStatusQueryParams)
    ], PostUpdatePartnerStatusRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostUpdatePartnerStatusHeaders)
    ], PostUpdatePartnerStatusRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostUpdatePartnerStatusRequest.prototype, "request", void 0);
    return PostUpdatePartnerStatusRequest;
}(SpeakeasyBase));
export { PostUpdatePartnerStatusRequest };
var PostUpdatePartnerStatusResponse = /** @class */ (function (_super) {
    __extends(PostUpdatePartnerStatusResponse, _super);
    function PostUpdatePartnerStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostUpdatePartnerStatusResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostUpdatePartnerStatusResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostUpdatePartnerStatusResponse.prototype, "statusCode", void 0);
    return PostUpdatePartnerStatusResponse;
}(SpeakeasyBase));
export { PostUpdatePartnerStatusResponse };
