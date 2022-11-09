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
export var PostModifyCertificatesActionEnum;
(function (PostModifyCertificatesActionEnum) {
    PostModifyCertificatesActionEnum["ModifyCertificates"] = "ModifyCertificates";
})(PostModifyCertificatesActionEnum || (PostModifyCertificatesActionEnum = {}));
export var PostModifyCertificatesVersionEnum;
(function (PostModifyCertificatesVersionEnum) {
    PostModifyCertificatesVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(PostModifyCertificatesVersionEnum || (PostModifyCertificatesVersionEnum = {}));
var PostModifyCertificatesQueryParams = /** @class */ (function (_super) {
    __extends(PostModifyCertificatesQueryParams, _super);
    function PostModifyCertificatesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostModifyCertificatesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostModifyCertificatesQueryParams.prototype, "version", void 0);
    return PostModifyCertificatesQueryParams;
}(SpeakeasyBase));
export { PostModifyCertificatesQueryParams };
var PostModifyCertificatesHeaders = /** @class */ (function (_super) {
    __extends(PostModifyCertificatesHeaders, _super);
    function PostModifyCertificatesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostModifyCertificatesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostModifyCertificatesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostModifyCertificatesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostModifyCertificatesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostModifyCertificatesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostModifyCertificatesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostModifyCertificatesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostModifyCertificatesHeaders;
}(SpeakeasyBase));
export { PostModifyCertificatesHeaders };
var PostModifyCertificatesRequest = /** @class */ (function (_super) {
    __extends(PostModifyCertificatesRequest, _super);
    function PostModifyCertificatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostModifyCertificatesQueryParams)
    ], PostModifyCertificatesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostModifyCertificatesHeaders)
    ], PostModifyCertificatesRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostModifyCertificatesRequest.prototype, "request", void 0);
    return PostModifyCertificatesRequest;
}(SpeakeasyBase));
export { PostModifyCertificatesRequest };
var PostModifyCertificatesResponse = /** @class */ (function (_super) {
    __extends(PostModifyCertificatesResponse, _super);
    function PostModifyCertificatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostModifyCertificatesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostModifyCertificatesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostModifyCertificatesResponse.prototype, "statusCode", void 0);
    return PostModifyCertificatesResponse;
}(SpeakeasyBase));
export { PostModifyCertificatesResponse };
