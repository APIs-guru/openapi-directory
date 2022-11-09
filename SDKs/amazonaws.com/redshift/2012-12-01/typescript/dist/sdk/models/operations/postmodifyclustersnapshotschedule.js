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
export var PostModifyClusterSnapshotScheduleActionEnum;
(function (PostModifyClusterSnapshotScheduleActionEnum) {
    PostModifyClusterSnapshotScheduleActionEnum["ModifyClusterSnapshotSchedule"] = "ModifyClusterSnapshotSchedule";
})(PostModifyClusterSnapshotScheduleActionEnum || (PostModifyClusterSnapshotScheduleActionEnum = {}));
export var PostModifyClusterSnapshotScheduleVersionEnum;
(function (PostModifyClusterSnapshotScheduleVersionEnum) {
    PostModifyClusterSnapshotScheduleVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostModifyClusterSnapshotScheduleVersionEnum || (PostModifyClusterSnapshotScheduleVersionEnum = {}));
var PostModifyClusterSnapshotScheduleQueryParams = /** @class */ (function (_super) {
    __extends(PostModifyClusterSnapshotScheduleQueryParams, _super);
    function PostModifyClusterSnapshotScheduleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostModifyClusterSnapshotScheduleQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostModifyClusterSnapshotScheduleQueryParams.prototype, "version", void 0);
    return PostModifyClusterSnapshotScheduleQueryParams;
}(SpeakeasyBase));
export { PostModifyClusterSnapshotScheduleQueryParams };
var PostModifyClusterSnapshotScheduleHeaders = /** @class */ (function (_super) {
    __extends(PostModifyClusterSnapshotScheduleHeaders, _super);
    function PostModifyClusterSnapshotScheduleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostModifyClusterSnapshotScheduleHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostModifyClusterSnapshotScheduleHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostModifyClusterSnapshotScheduleHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostModifyClusterSnapshotScheduleHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostModifyClusterSnapshotScheduleHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostModifyClusterSnapshotScheduleHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostModifyClusterSnapshotScheduleHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostModifyClusterSnapshotScheduleHeaders;
}(SpeakeasyBase));
export { PostModifyClusterSnapshotScheduleHeaders };
var PostModifyClusterSnapshotScheduleRequest = /** @class */ (function (_super) {
    __extends(PostModifyClusterSnapshotScheduleRequest, _super);
    function PostModifyClusterSnapshotScheduleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostModifyClusterSnapshotScheduleQueryParams)
    ], PostModifyClusterSnapshotScheduleRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostModifyClusterSnapshotScheduleHeaders)
    ], PostModifyClusterSnapshotScheduleRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostModifyClusterSnapshotScheduleRequest.prototype, "request", void 0);
    return PostModifyClusterSnapshotScheduleRequest;
}(SpeakeasyBase));
export { PostModifyClusterSnapshotScheduleRequest };
var PostModifyClusterSnapshotScheduleResponse = /** @class */ (function (_super) {
    __extends(PostModifyClusterSnapshotScheduleResponse, _super);
    function PostModifyClusterSnapshotScheduleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostModifyClusterSnapshotScheduleResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostModifyClusterSnapshotScheduleResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostModifyClusterSnapshotScheduleResponse.prototype, "statusCode", void 0);
    return PostModifyClusterSnapshotScheduleResponse;
}(SpeakeasyBase));
export { PostModifyClusterSnapshotScheduleResponse };
