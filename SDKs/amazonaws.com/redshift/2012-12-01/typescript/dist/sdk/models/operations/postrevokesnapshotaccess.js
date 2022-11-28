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
export var PostRevokeSnapshotAccessActionEnum;
(function (PostRevokeSnapshotAccessActionEnum) {
    PostRevokeSnapshotAccessActionEnum["RevokeSnapshotAccess"] = "RevokeSnapshotAccess";
})(PostRevokeSnapshotAccessActionEnum || (PostRevokeSnapshotAccessActionEnum = {}));
export var PostRevokeSnapshotAccessVersionEnum;
(function (PostRevokeSnapshotAccessVersionEnum) {
    PostRevokeSnapshotAccessVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostRevokeSnapshotAccessVersionEnum || (PostRevokeSnapshotAccessVersionEnum = {}));
var PostRevokeSnapshotAccessQueryParams = /** @class */ (function (_super) {
    __extends(PostRevokeSnapshotAccessQueryParams, _super);
    function PostRevokeSnapshotAccessQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostRevokeSnapshotAccessQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostRevokeSnapshotAccessQueryParams.prototype, "version", void 0);
    return PostRevokeSnapshotAccessQueryParams;
}(SpeakeasyBase));
export { PostRevokeSnapshotAccessQueryParams };
var PostRevokeSnapshotAccessHeaders = /** @class */ (function (_super) {
    __extends(PostRevokeSnapshotAccessHeaders, _super);
    function PostRevokeSnapshotAccessHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostRevokeSnapshotAccessHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostRevokeSnapshotAccessHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostRevokeSnapshotAccessHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostRevokeSnapshotAccessHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostRevokeSnapshotAccessHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostRevokeSnapshotAccessHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostRevokeSnapshotAccessHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostRevokeSnapshotAccessHeaders;
}(SpeakeasyBase));
export { PostRevokeSnapshotAccessHeaders };
var PostRevokeSnapshotAccessRequest = /** @class */ (function (_super) {
    __extends(PostRevokeSnapshotAccessRequest, _super);
    function PostRevokeSnapshotAccessRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostRevokeSnapshotAccessQueryParams)
    ], PostRevokeSnapshotAccessRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostRevokeSnapshotAccessHeaders)
    ], PostRevokeSnapshotAccessRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostRevokeSnapshotAccessRequest.prototype, "request", void 0);
    return PostRevokeSnapshotAccessRequest;
}(SpeakeasyBase));
export { PostRevokeSnapshotAccessRequest };
var PostRevokeSnapshotAccessResponse = /** @class */ (function (_super) {
    __extends(PostRevokeSnapshotAccessResponse, _super);
    function PostRevokeSnapshotAccessResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostRevokeSnapshotAccessResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostRevokeSnapshotAccessResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostRevokeSnapshotAccessResponse.prototype, "statusCode", void 0);
    return PostRevokeSnapshotAccessResponse;
}(SpeakeasyBase));
export { PostRevokeSnapshotAccessResponse };
