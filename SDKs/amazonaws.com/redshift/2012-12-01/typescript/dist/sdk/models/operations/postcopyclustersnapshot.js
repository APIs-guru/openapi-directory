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
export var PostCopyClusterSnapshotActionEnum;
(function (PostCopyClusterSnapshotActionEnum) {
    PostCopyClusterSnapshotActionEnum["CopyClusterSnapshot"] = "CopyClusterSnapshot";
})(PostCopyClusterSnapshotActionEnum || (PostCopyClusterSnapshotActionEnum = {}));
export var PostCopyClusterSnapshotVersionEnum;
(function (PostCopyClusterSnapshotVersionEnum) {
    PostCopyClusterSnapshotVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostCopyClusterSnapshotVersionEnum || (PostCopyClusterSnapshotVersionEnum = {}));
var PostCopyClusterSnapshotQueryParams = /** @class */ (function (_super) {
    __extends(PostCopyClusterSnapshotQueryParams, _super);
    function PostCopyClusterSnapshotQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCopyClusterSnapshotQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCopyClusterSnapshotQueryParams.prototype, "version", void 0);
    return PostCopyClusterSnapshotQueryParams;
}(SpeakeasyBase));
export { PostCopyClusterSnapshotQueryParams };
var PostCopyClusterSnapshotHeaders = /** @class */ (function (_super) {
    __extends(PostCopyClusterSnapshotHeaders, _super);
    function PostCopyClusterSnapshotHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCopyClusterSnapshotHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCopyClusterSnapshotHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCopyClusterSnapshotHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCopyClusterSnapshotHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCopyClusterSnapshotHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCopyClusterSnapshotHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCopyClusterSnapshotHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCopyClusterSnapshotHeaders;
}(SpeakeasyBase));
export { PostCopyClusterSnapshotHeaders };
var PostCopyClusterSnapshotRequest = /** @class */ (function (_super) {
    __extends(PostCopyClusterSnapshotRequest, _super);
    function PostCopyClusterSnapshotRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostCopyClusterSnapshotQueryParams)
    ], PostCopyClusterSnapshotRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostCopyClusterSnapshotHeaders)
    ], PostCopyClusterSnapshotRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCopyClusterSnapshotRequest.prototype, "request", void 0);
    return PostCopyClusterSnapshotRequest;
}(SpeakeasyBase));
export { PostCopyClusterSnapshotRequest };
var PostCopyClusterSnapshotResponse = /** @class */ (function (_super) {
    __extends(PostCopyClusterSnapshotResponse, _super);
    function PostCopyClusterSnapshotResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostCopyClusterSnapshotResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostCopyClusterSnapshotResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostCopyClusterSnapshotResponse.prototype, "statusCode", void 0);
    return PostCopyClusterSnapshotResponse;
}(SpeakeasyBase));
export { PostCopyClusterSnapshotResponse };
