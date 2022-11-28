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
export var PostRestoreFromClusterSnapshotActionEnum;
(function (PostRestoreFromClusterSnapshotActionEnum) {
    PostRestoreFromClusterSnapshotActionEnum["RestoreFromClusterSnapshot"] = "RestoreFromClusterSnapshot";
})(PostRestoreFromClusterSnapshotActionEnum || (PostRestoreFromClusterSnapshotActionEnum = {}));
export var PostRestoreFromClusterSnapshotVersionEnum;
(function (PostRestoreFromClusterSnapshotVersionEnum) {
    PostRestoreFromClusterSnapshotVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostRestoreFromClusterSnapshotVersionEnum || (PostRestoreFromClusterSnapshotVersionEnum = {}));
var PostRestoreFromClusterSnapshotQueryParams = /** @class */ (function (_super) {
    __extends(PostRestoreFromClusterSnapshotQueryParams, _super);
    function PostRestoreFromClusterSnapshotQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostRestoreFromClusterSnapshotQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostRestoreFromClusterSnapshotQueryParams.prototype, "version", void 0);
    return PostRestoreFromClusterSnapshotQueryParams;
}(SpeakeasyBase));
export { PostRestoreFromClusterSnapshotQueryParams };
var PostRestoreFromClusterSnapshotHeaders = /** @class */ (function (_super) {
    __extends(PostRestoreFromClusterSnapshotHeaders, _super);
    function PostRestoreFromClusterSnapshotHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostRestoreFromClusterSnapshotHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostRestoreFromClusterSnapshotHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostRestoreFromClusterSnapshotHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostRestoreFromClusterSnapshotHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostRestoreFromClusterSnapshotHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostRestoreFromClusterSnapshotHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostRestoreFromClusterSnapshotHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostRestoreFromClusterSnapshotHeaders;
}(SpeakeasyBase));
export { PostRestoreFromClusterSnapshotHeaders };
var PostRestoreFromClusterSnapshotRequest = /** @class */ (function (_super) {
    __extends(PostRestoreFromClusterSnapshotRequest, _super);
    function PostRestoreFromClusterSnapshotRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostRestoreFromClusterSnapshotQueryParams)
    ], PostRestoreFromClusterSnapshotRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostRestoreFromClusterSnapshotHeaders)
    ], PostRestoreFromClusterSnapshotRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostRestoreFromClusterSnapshotRequest.prototype, "request", void 0);
    return PostRestoreFromClusterSnapshotRequest;
}(SpeakeasyBase));
export { PostRestoreFromClusterSnapshotRequest };
var PostRestoreFromClusterSnapshotResponse = /** @class */ (function (_super) {
    __extends(PostRestoreFromClusterSnapshotResponse, _super);
    function PostRestoreFromClusterSnapshotResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostRestoreFromClusterSnapshotResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostRestoreFromClusterSnapshotResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostRestoreFromClusterSnapshotResponse.prototype, "statusCode", void 0);
    return PostRestoreFromClusterSnapshotResponse;
}(SpeakeasyBase));
export { PostRestoreFromClusterSnapshotResponse };
