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
export var PostEnableSnapshotCopyActionEnum;
(function (PostEnableSnapshotCopyActionEnum) {
    PostEnableSnapshotCopyActionEnum["EnableSnapshotCopy"] = "EnableSnapshotCopy";
})(PostEnableSnapshotCopyActionEnum || (PostEnableSnapshotCopyActionEnum = {}));
export var PostEnableSnapshotCopyVersionEnum;
(function (PostEnableSnapshotCopyVersionEnum) {
    PostEnableSnapshotCopyVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostEnableSnapshotCopyVersionEnum || (PostEnableSnapshotCopyVersionEnum = {}));
var PostEnableSnapshotCopyQueryParams = /** @class */ (function (_super) {
    __extends(PostEnableSnapshotCopyQueryParams, _super);
    function PostEnableSnapshotCopyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostEnableSnapshotCopyQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostEnableSnapshotCopyQueryParams.prototype, "version", void 0);
    return PostEnableSnapshotCopyQueryParams;
}(SpeakeasyBase));
export { PostEnableSnapshotCopyQueryParams };
var PostEnableSnapshotCopyHeaders = /** @class */ (function (_super) {
    __extends(PostEnableSnapshotCopyHeaders, _super);
    function PostEnableSnapshotCopyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostEnableSnapshotCopyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostEnableSnapshotCopyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostEnableSnapshotCopyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostEnableSnapshotCopyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostEnableSnapshotCopyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostEnableSnapshotCopyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostEnableSnapshotCopyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostEnableSnapshotCopyHeaders;
}(SpeakeasyBase));
export { PostEnableSnapshotCopyHeaders };
var PostEnableSnapshotCopyRequest = /** @class */ (function (_super) {
    __extends(PostEnableSnapshotCopyRequest, _super);
    function PostEnableSnapshotCopyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostEnableSnapshotCopyQueryParams)
    ], PostEnableSnapshotCopyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostEnableSnapshotCopyHeaders)
    ], PostEnableSnapshotCopyRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostEnableSnapshotCopyRequest.prototype, "request", void 0);
    return PostEnableSnapshotCopyRequest;
}(SpeakeasyBase));
export { PostEnableSnapshotCopyRequest };
var PostEnableSnapshotCopyResponse = /** @class */ (function (_super) {
    __extends(PostEnableSnapshotCopyResponse, _super);
    function PostEnableSnapshotCopyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostEnableSnapshotCopyResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostEnableSnapshotCopyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostEnableSnapshotCopyResponse.prototype, "statusCode", void 0);
    return PostEnableSnapshotCopyResponse;
}(SpeakeasyBase));
export { PostEnableSnapshotCopyResponse };
