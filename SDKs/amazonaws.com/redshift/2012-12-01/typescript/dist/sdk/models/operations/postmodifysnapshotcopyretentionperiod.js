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
export var PostModifySnapshotCopyRetentionPeriodActionEnum;
(function (PostModifySnapshotCopyRetentionPeriodActionEnum) {
    PostModifySnapshotCopyRetentionPeriodActionEnum["ModifySnapshotCopyRetentionPeriod"] = "ModifySnapshotCopyRetentionPeriod";
})(PostModifySnapshotCopyRetentionPeriodActionEnum || (PostModifySnapshotCopyRetentionPeriodActionEnum = {}));
export var PostModifySnapshotCopyRetentionPeriodVersionEnum;
(function (PostModifySnapshotCopyRetentionPeriodVersionEnum) {
    PostModifySnapshotCopyRetentionPeriodVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostModifySnapshotCopyRetentionPeriodVersionEnum || (PostModifySnapshotCopyRetentionPeriodVersionEnum = {}));
var PostModifySnapshotCopyRetentionPeriodQueryParams = /** @class */ (function (_super) {
    __extends(PostModifySnapshotCopyRetentionPeriodQueryParams, _super);
    function PostModifySnapshotCopyRetentionPeriodQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostModifySnapshotCopyRetentionPeriodQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostModifySnapshotCopyRetentionPeriodQueryParams.prototype, "version", void 0);
    return PostModifySnapshotCopyRetentionPeriodQueryParams;
}(SpeakeasyBase));
export { PostModifySnapshotCopyRetentionPeriodQueryParams };
var PostModifySnapshotCopyRetentionPeriodHeaders = /** @class */ (function (_super) {
    __extends(PostModifySnapshotCopyRetentionPeriodHeaders, _super);
    function PostModifySnapshotCopyRetentionPeriodHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostModifySnapshotCopyRetentionPeriodHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostModifySnapshotCopyRetentionPeriodHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostModifySnapshotCopyRetentionPeriodHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostModifySnapshotCopyRetentionPeriodHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostModifySnapshotCopyRetentionPeriodHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostModifySnapshotCopyRetentionPeriodHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostModifySnapshotCopyRetentionPeriodHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostModifySnapshotCopyRetentionPeriodHeaders;
}(SpeakeasyBase));
export { PostModifySnapshotCopyRetentionPeriodHeaders };
var PostModifySnapshotCopyRetentionPeriodRequest = /** @class */ (function (_super) {
    __extends(PostModifySnapshotCopyRetentionPeriodRequest, _super);
    function PostModifySnapshotCopyRetentionPeriodRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostModifySnapshotCopyRetentionPeriodQueryParams)
    ], PostModifySnapshotCopyRetentionPeriodRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostModifySnapshotCopyRetentionPeriodHeaders)
    ], PostModifySnapshotCopyRetentionPeriodRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostModifySnapshotCopyRetentionPeriodRequest.prototype, "request", void 0);
    return PostModifySnapshotCopyRetentionPeriodRequest;
}(SpeakeasyBase));
export { PostModifySnapshotCopyRetentionPeriodRequest };
var PostModifySnapshotCopyRetentionPeriodResponse = /** @class */ (function (_super) {
    __extends(PostModifySnapshotCopyRetentionPeriodResponse, _super);
    function PostModifySnapshotCopyRetentionPeriodResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostModifySnapshotCopyRetentionPeriodResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostModifySnapshotCopyRetentionPeriodResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostModifySnapshotCopyRetentionPeriodResponse.prototype, "statusCode", void 0);
    return PostModifySnapshotCopyRetentionPeriodResponse;
}(SpeakeasyBase));
export { PostModifySnapshotCopyRetentionPeriodResponse };
