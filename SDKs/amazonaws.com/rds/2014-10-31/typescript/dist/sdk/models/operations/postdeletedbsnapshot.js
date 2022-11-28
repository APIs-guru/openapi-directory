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
export var PostDeleteDbSnapshotActionEnum;
(function (PostDeleteDbSnapshotActionEnum) {
    PostDeleteDbSnapshotActionEnum["DeleteDbSnapshot"] = "DeleteDBSnapshot";
})(PostDeleteDbSnapshotActionEnum || (PostDeleteDbSnapshotActionEnum = {}));
export var PostDeleteDbSnapshotVersionEnum;
(function (PostDeleteDbSnapshotVersionEnum) {
    PostDeleteDbSnapshotVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(PostDeleteDbSnapshotVersionEnum || (PostDeleteDbSnapshotVersionEnum = {}));
var PostDeleteDbSnapshotQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteDbSnapshotQueryParams, _super);
    function PostDeleteDbSnapshotQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteDbSnapshotQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteDbSnapshotQueryParams.prototype, "version", void 0);
    return PostDeleteDbSnapshotQueryParams;
}(SpeakeasyBase));
export { PostDeleteDbSnapshotQueryParams };
var PostDeleteDbSnapshotHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteDbSnapshotHeaders, _super);
    function PostDeleteDbSnapshotHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteDbSnapshotHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteDbSnapshotHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteDbSnapshotHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteDbSnapshotHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteDbSnapshotHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteDbSnapshotHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteDbSnapshotHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteDbSnapshotHeaders;
}(SpeakeasyBase));
export { PostDeleteDbSnapshotHeaders };
var PostDeleteDbSnapshotRequest = /** @class */ (function (_super) {
    __extends(PostDeleteDbSnapshotRequest, _super);
    function PostDeleteDbSnapshotRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDeleteDbSnapshotQueryParams)
    ], PostDeleteDbSnapshotRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDeleteDbSnapshotHeaders)
    ], PostDeleteDbSnapshotRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteDbSnapshotRequest.prototype, "request", void 0);
    return PostDeleteDbSnapshotRequest;
}(SpeakeasyBase));
export { PostDeleteDbSnapshotRequest };
var PostDeleteDbSnapshotResponse = /** @class */ (function (_super) {
    __extends(PostDeleteDbSnapshotResponse, _super);
    function PostDeleteDbSnapshotResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteDbSnapshotResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDeleteDbSnapshotResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDeleteDbSnapshotResponse.prototype, "statusCode", void 0);
    return PostDeleteDbSnapshotResponse;
}(SpeakeasyBase));
export { PostDeleteDbSnapshotResponse };
