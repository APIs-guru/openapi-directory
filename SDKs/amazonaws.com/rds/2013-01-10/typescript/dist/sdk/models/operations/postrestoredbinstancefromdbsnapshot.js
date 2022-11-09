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
export var PostRestoreDbInstanceFromDbSnapshotActionEnum;
(function (PostRestoreDbInstanceFromDbSnapshotActionEnum) {
    PostRestoreDbInstanceFromDbSnapshotActionEnum["RestoreDbInstanceFromDbSnapshot"] = "RestoreDBInstanceFromDBSnapshot";
})(PostRestoreDbInstanceFromDbSnapshotActionEnum || (PostRestoreDbInstanceFromDbSnapshotActionEnum = {}));
export var PostRestoreDbInstanceFromDbSnapshotVersionEnum;
(function (PostRestoreDbInstanceFromDbSnapshotVersionEnum) {
    PostRestoreDbInstanceFromDbSnapshotVersionEnum["TwoThousandAndThirteen0110"] = "2013-01-10";
})(PostRestoreDbInstanceFromDbSnapshotVersionEnum || (PostRestoreDbInstanceFromDbSnapshotVersionEnum = {}));
var PostRestoreDbInstanceFromDbSnapshotQueryParams = /** @class */ (function (_super) {
    __extends(PostRestoreDbInstanceFromDbSnapshotQueryParams, _super);
    function PostRestoreDbInstanceFromDbSnapshotQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostRestoreDbInstanceFromDbSnapshotQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostRestoreDbInstanceFromDbSnapshotQueryParams.prototype, "version", void 0);
    return PostRestoreDbInstanceFromDbSnapshotQueryParams;
}(SpeakeasyBase));
export { PostRestoreDbInstanceFromDbSnapshotQueryParams };
var PostRestoreDbInstanceFromDbSnapshotHeaders = /** @class */ (function (_super) {
    __extends(PostRestoreDbInstanceFromDbSnapshotHeaders, _super);
    function PostRestoreDbInstanceFromDbSnapshotHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostRestoreDbInstanceFromDbSnapshotHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostRestoreDbInstanceFromDbSnapshotHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostRestoreDbInstanceFromDbSnapshotHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostRestoreDbInstanceFromDbSnapshotHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostRestoreDbInstanceFromDbSnapshotHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostRestoreDbInstanceFromDbSnapshotHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostRestoreDbInstanceFromDbSnapshotHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostRestoreDbInstanceFromDbSnapshotHeaders;
}(SpeakeasyBase));
export { PostRestoreDbInstanceFromDbSnapshotHeaders };
var PostRestoreDbInstanceFromDbSnapshotRequest = /** @class */ (function (_super) {
    __extends(PostRestoreDbInstanceFromDbSnapshotRequest, _super);
    function PostRestoreDbInstanceFromDbSnapshotRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostRestoreDbInstanceFromDbSnapshotQueryParams)
    ], PostRestoreDbInstanceFromDbSnapshotRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostRestoreDbInstanceFromDbSnapshotHeaders)
    ], PostRestoreDbInstanceFromDbSnapshotRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostRestoreDbInstanceFromDbSnapshotRequest.prototype, "request", void 0);
    return PostRestoreDbInstanceFromDbSnapshotRequest;
}(SpeakeasyBase));
export { PostRestoreDbInstanceFromDbSnapshotRequest };
var PostRestoreDbInstanceFromDbSnapshotResponse = /** @class */ (function (_super) {
    __extends(PostRestoreDbInstanceFromDbSnapshotResponse, _super);
    function PostRestoreDbInstanceFromDbSnapshotResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostRestoreDbInstanceFromDbSnapshotResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostRestoreDbInstanceFromDbSnapshotResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostRestoreDbInstanceFromDbSnapshotResponse.prototype, "statusCode", void 0);
    return PostRestoreDbInstanceFromDbSnapshotResponse;
}(SpeakeasyBase));
export { PostRestoreDbInstanceFromDbSnapshotResponse };
