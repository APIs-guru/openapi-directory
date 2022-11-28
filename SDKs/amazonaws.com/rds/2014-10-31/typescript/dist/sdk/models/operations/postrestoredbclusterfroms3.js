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
export var PostRestoreDbClusterFromS3ActionEnum;
(function (PostRestoreDbClusterFromS3ActionEnum) {
    PostRestoreDbClusterFromS3ActionEnum["RestoreDbClusterFromS3"] = "RestoreDBClusterFromS3";
})(PostRestoreDbClusterFromS3ActionEnum || (PostRestoreDbClusterFromS3ActionEnum = {}));
export var PostRestoreDbClusterFromS3VersionEnum;
(function (PostRestoreDbClusterFromS3VersionEnum) {
    PostRestoreDbClusterFromS3VersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(PostRestoreDbClusterFromS3VersionEnum || (PostRestoreDbClusterFromS3VersionEnum = {}));
var PostRestoreDbClusterFromS3QueryParams = /** @class */ (function (_super) {
    __extends(PostRestoreDbClusterFromS3QueryParams, _super);
    function PostRestoreDbClusterFromS3QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostRestoreDbClusterFromS3QueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostRestoreDbClusterFromS3QueryParams.prototype, "version", void 0);
    return PostRestoreDbClusterFromS3QueryParams;
}(SpeakeasyBase));
export { PostRestoreDbClusterFromS3QueryParams };
var PostRestoreDbClusterFromS3Headers = /** @class */ (function (_super) {
    __extends(PostRestoreDbClusterFromS3Headers, _super);
    function PostRestoreDbClusterFromS3Headers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostRestoreDbClusterFromS3Headers.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostRestoreDbClusterFromS3Headers.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostRestoreDbClusterFromS3Headers.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostRestoreDbClusterFromS3Headers.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostRestoreDbClusterFromS3Headers.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostRestoreDbClusterFromS3Headers.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostRestoreDbClusterFromS3Headers.prototype, "xAmzSignedHeaders", void 0);
    return PostRestoreDbClusterFromS3Headers;
}(SpeakeasyBase));
export { PostRestoreDbClusterFromS3Headers };
var PostRestoreDbClusterFromS3Request = /** @class */ (function (_super) {
    __extends(PostRestoreDbClusterFromS3Request, _super);
    function PostRestoreDbClusterFromS3Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostRestoreDbClusterFromS3QueryParams)
    ], PostRestoreDbClusterFromS3Request.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostRestoreDbClusterFromS3Headers)
    ], PostRestoreDbClusterFromS3Request.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostRestoreDbClusterFromS3Request.prototype, "request", void 0);
    return PostRestoreDbClusterFromS3Request;
}(SpeakeasyBase));
export { PostRestoreDbClusterFromS3Request };
var PostRestoreDbClusterFromS3Response = /** @class */ (function (_super) {
    __extends(PostRestoreDbClusterFromS3Response, _super);
    function PostRestoreDbClusterFromS3Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostRestoreDbClusterFromS3Response.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostRestoreDbClusterFromS3Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostRestoreDbClusterFromS3Response.prototype, "statusCode", void 0);
    return PostRestoreDbClusterFromS3Response;
}(SpeakeasyBase));
export { PostRestoreDbClusterFromS3Response };
