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
export var PostDeleteSnapshotCopyGrantActionEnum;
(function (PostDeleteSnapshotCopyGrantActionEnum) {
    PostDeleteSnapshotCopyGrantActionEnum["DeleteSnapshotCopyGrant"] = "DeleteSnapshotCopyGrant";
})(PostDeleteSnapshotCopyGrantActionEnum || (PostDeleteSnapshotCopyGrantActionEnum = {}));
export var PostDeleteSnapshotCopyGrantVersionEnum;
(function (PostDeleteSnapshotCopyGrantVersionEnum) {
    PostDeleteSnapshotCopyGrantVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostDeleteSnapshotCopyGrantVersionEnum || (PostDeleteSnapshotCopyGrantVersionEnum = {}));
var PostDeleteSnapshotCopyGrantQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteSnapshotCopyGrantQueryParams, _super);
    function PostDeleteSnapshotCopyGrantQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteSnapshotCopyGrantQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteSnapshotCopyGrantQueryParams.prototype, "version", void 0);
    return PostDeleteSnapshotCopyGrantQueryParams;
}(SpeakeasyBase));
export { PostDeleteSnapshotCopyGrantQueryParams };
var PostDeleteSnapshotCopyGrantHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteSnapshotCopyGrantHeaders, _super);
    function PostDeleteSnapshotCopyGrantHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteSnapshotCopyGrantHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteSnapshotCopyGrantHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteSnapshotCopyGrantHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteSnapshotCopyGrantHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteSnapshotCopyGrantHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteSnapshotCopyGrantHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteSnapshotCopyGrantHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteSnapshotCopyGrantHeaders;
}(SpeakeasyBase));
export { PostDeleteSnapshotCopyGrantHeaders };
var PostDeleteSnapshotCopyGrantRequest = /** @class */ (function (_super) {
    __extends(PostDeleteSnapshotCopyGrantRequest, _super);
    function PostDeleteSnapshotCopyGrantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDeleteSnapshotCopyGrantQueryParams)
    ], PostDeleteSnapshotCopyGrantRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDeleteSnapshotCopyGrantHeaders)
    ], PostDeleteSnapshotCopyGrantRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteSnapshotCopyGrantRequest.prototype, "request", void 0);
    return PostDeleteSnapshotCopyGrantRequest;
}(SpeakeasyBase));
export { PostDeleteSnapshotCopyGrantRequest };
var PostDeleteSnapshotCopyGrantResponse = /** @class */ (function (_super) {
    __extends(PostDeleteSnapshotCopyGrantResponse, _super);
    function PostDeleteSnapshotCopyGrantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteSnapshotCopyGrantResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDeleteSnapshotCopyGrantResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDeleteSnapshotCopyGrantResponse.prototype, "statusCode", void 0);
    return PostDeleteSnapshotCopyGrantResponse;
}(SpeakeasyBase));
export { PostDeleteSnapshotCopyGrantResponse };
