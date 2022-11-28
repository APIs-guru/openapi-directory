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
export var PostModifyDbSnapshotActionEnum;
(function (PostModifyDbSnapshotActionEnum) {
    PostModifyDbSnapshotActionEnum["ModifyDbSnapshot"] = "ModifyDBSnapshot";
})(PostModifyDbSnapshotActionEnum || (PostModifyDbSnapshotActionEnum = {}));
export var PostModifyDbSnapshotVersionEnum;
(function (PostModifyDbSnapshotVersionEnum) {
    PostModifyDbSnapshotVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(PostModifyDbSnapshotVersionEnum || (PostModifyDbSnapshotVersionEnum = {}));
var PostModifyDbSnapshotQueryParams = /** @class */ (function (_super) {
    __extends(PostModifyDbSnapshotQueryParams, _super);
    function PostModifyDbSnapshotQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostModifyDbSnapshotQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostModifyDbSnapshotQueryParams.prototype, "version", void 0);
    return PostModifyDbSnapshotQueryParams;
}(SpeakeasyBase));
export { PostModifyDbSnapshotQueryParams };
var PostModifyDbSnapshotHeaders = /** @class */ (function (_super) {
    __extends(PostModifyDbSnapshotHeaders, _super);
    function PostModifyDbSnapshotHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostModifyDbSnapshotHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostModifyDbSnapshotHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostModifyDbSnapshotHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostModifyDbSnapshotHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostModifyDbSnapshotHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostModifyDbSnapshotHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostModifyDbSnapshotHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostModifyDbSnapshotHeaders;
}(SpeakeasyBase));
export { PostModifyDbSnapshotHeaders };
var PostModifyDbSnapshotRequest = /** @class */ (function (_super) {
    __extends(PostModifyDbSnapshotRequest, _super);
    function PostModifyDbSnapshotRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostModifyDbSnapshotQueryParams)
    ], PostModifyDbSnapshotRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostModifyDbSnapshotHeaders)
    ], PostModifyDbSnapshotRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostModifyDbSnapshotRequest.prototype, "request", void 0);
    return PostModifyDbSnapshotRequest;
}(SpeakeasyBase));
export { PostModifyDbSnapshotRequest };
var PostModifyDbSnapshotResponse = /** @class */ (function (_super) {
    __extends(PostModifyDbSnapshotResponse, _super);
    function PostModifyDbSnapshotResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostModifyDbSnapshotResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostModifyDbSnapshotResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostModifyDbSnapshotResponse.prototype, "statusCode", void 0);
    return PostModifyDbSnapshotResponse;
}(SpeakeasyBase));
export { PostModifyDbSnapshotResponse };
