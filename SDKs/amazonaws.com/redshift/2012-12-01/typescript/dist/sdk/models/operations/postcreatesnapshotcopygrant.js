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
export var PostCreateSnapshotCopyGrantActionEnum;
(function (PostCreateSnapshotCopyGrantActionEnum) {
    PostCreateSnapshotCopyGrantActionEnum["CreateSnapshotCopyGrant"] = "CreateSnapshotCopyGrant";
})(PostCreateSnapshotCopyGrantActionEnum || (PostCreateSnapshotCopyGrantActionEnum = {}));
export var PostCreateSnapshotCopyGrantVersionEnum;
(function (PostCreateSnapshotCopyGrantVersionEnum) {
    PostCreateSnapshotCopyGrantVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostCreateSnapshotCopyGrantVersionEnum || (PostCreateSnapshotCopyGrantVersionEnum = {}));
var PostCreateSnapshotCopyGrantQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateSnapshotCopyGrantQueryParams, _super);
    function PostCreateSnapshotCopyGrantQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateSnapshotCopyGrantQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateSnapshotCopyGrantQueryParams.prototype, "version", void 0);
    return PostCreateSnapshotCopyGrantQueryParams;
}(SpeakeasyBase));
export { PostCreateSnapshotCopyGrantQueryParams };
var PostCreateSnapshotCopyGrantHeaders = /** @class */ (function (_super) {
    __extends(PostCreateSnapshotCopyGrantHeaders, _super);
    function PostCreateSnapshotCopyGrantHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateSnapshotCopyGrantHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateSnapshotCopyGrantHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateSnapshotCopyGrantHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateSnapshotCopyGrantHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateSnapshotCopyGrantHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateSnapshotCopyGrantHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateSnapshotCopyGrantHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateSnapshotCopyGrantHeaders;
}(SpeakeasyBase));
export { PostCreateSnapshotCopyGrantHeaders };
var PostCreateSnapshotCopyGrantRequest = /** @class */ (function (_super) {
    __extends(PostCreateSnapshotCopyGrantRequest, _super);
    function PostCreateSnapshotCopyGrantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateSnapshotCopyGrantQueryParams)
    ], PostCreateSnapshotCopyGrantRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateSnapshotCopyGrantHeaders)
    ], PostCreateSnapshotCopyGrantRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateSnapshotCopyGrantRequest.prototype, "request", void 0);
    return PostCreateSnapshotCopyGrantRequest;
}(SpeakeasyBase));
export { PostCreateSnapshotCopyGrantRequest };
var PostCreateSnapshotCopyGrantResponse = /** @class */ (function (_super) {
    __extends(PostCreateSnapshotCopyGrantResponse, _super);
    function PostCreateSnapshotCopyGrantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostCreateSnapshotCopyGrantResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostCreateSnapshotCopyGrantResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostCreateSnapshotCopyGrantResponse.prototype, "statusCode", void 0);
    return PostCreateSnapshotCopyGrantResponse;
}(SpeakeasyBase));
export { PostCreateSnapshotCopyGrantResponse };
