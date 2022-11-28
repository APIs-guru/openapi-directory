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
export var PostCopyDbSnapshotActionEnum;
(function (PostCopyDbSnapshotActionEnum) {
    PostCopyDbSnapshotActionEnum["CopyDbSnapshot"] = "CopyDBSnapshot";
})(PostCopyDbSnapshotActionEnum || (PostCopyDbSnapshotActionEnum = {}));
export var PostCopyDbSnapshotVersionEnum;
(function (PostCopyDbSnapshotVersionEnum) {
    PostCopyDbSnapshotVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(PostCopyDbSnapshotVersionEnum || (PostCopyDbSnapshotVersionEnum = {}));
var PostCopyDbSnapshotQueryParams = /** @class */ (function (_super) {
    __extends(PostCopyDbSnapshotQueryParams, _super);
    function PostCopyDbSnapshotQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCopyDbSnapshotQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCopyDbSnapshotQueryParams.prototype, "version", void 0);
    return PostCopyDbSnapshotQueryParams;
}(SpeakeasyBase));
export { PostCopyDbSnapshotQueryParams };
var PostCopyDbSnapshotHeaders = /** @class */ (function (_super) {
    __extends(PostCopyDbSnapshotHeaders, _super);
    function PostCopyDbSnapshotHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCopyDbSnapshotHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCopyDbSnapshotHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCopyDbSnapshotHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCopyDbSnapshotHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCopyDbSnapshotHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCopyDbSnapshotHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCopyDbSnapshotHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCopyDbSnapshotHeaders;
}(SpeakeasyBase));
export { PostCopyDbSnapshotHeaders };
var PostCopyDbSnapshotRequest = /** @class */ (function (_super) {
    __extends(PostCopyDbSnapshotRequest, _super);
    function PostCopyDbSnapshotRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCopyDbSnapshotQueryParams)
    ], PostCopyDbSnapshotRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCopyDbSnapshotHeaders)
    ], PostCopyDbSnapshotRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCopyDbSnapshotRequest.prototype, "request", void 0);
    return PostCopyDbSnapshotRequest;
}(SpeakeasyBase));
export { PostCopyDbSnapshotRequest };
var PostCopyDbSnapshotResponse = /** @class */ (function (_super) {
    __extends(PostCopyDbSnapshotResponse, _super);
    function PostCopyDbSnapshotResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostCopyDbSnapshotResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostCopyDbSnapshotResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostCopyDbSnapshotResponse.prototype, "statusCode", void 0);
    return PostCopyDbSnapshotResponse;
}(SpeakeasyBase));
export { PostCopyDbSnapshotResponse };
