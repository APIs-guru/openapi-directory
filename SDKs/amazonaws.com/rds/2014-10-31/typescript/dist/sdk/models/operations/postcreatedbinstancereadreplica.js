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
export var PostCreateDbInstanceReadReplicaActionEnum;
(function (PostCreateDbInstanceReadReplicaActionEnum) {
    PostCreateDbInstanceReadReplicaActionEnum["CreateDbInstanceReadReplica"] = "CreateDBInstanceReadReplica";
})(PostCreateDbInstanceReadReplicaActionEnum || (PostCreateDbInstanceReadReplicaActionEnum = {}));
export var PostCreateDbInstanceReadReplicaVersionEnum;
(function (PostCreateDbInstanceReadReplicaVersionEnum) {
    PostCreateDbInstanceReadReplicaVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(PostCreateDbInstanceReadReplicaVersionEnum || (PostCreateDbInstanceReadReplicaVersionEnum = {}));
var PostCreateDbInstanceReadReplicaQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateDbInstanceReadReplicaQueryParams, _super);
    function PostCreateDbInstanceReadReplicaQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateDbInstanceReadReplicaQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateDbInstanceReadReplicaQueryParams.prototype, "version", void 0);
    return PostCreateDbInstanceReadReplicaQueryParams;
}(SpeakeasyBase));
export { PostCreateDbInstanceReadReplicaQueryParams };
var PostCreateDbInstanceReadReplicaHeaders = /** @class */ (function (_super) {
    __extends(PostCreateDbInstanceReadReplicaHeaders, _super);
    function PostCreateDbInstanceReadReplicaHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateDbInstanceReadReplicaHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateDbInstanceReadReplicaHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateDbInstanceReadReplicaHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateDbInstanceReadReplicaHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateDbInstanceReadReplicaHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateDbInstanceReadReplicaHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateDbInstanceReadReplicaHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateDbInstanceReadReplicaHeaders;
}(SpeakeasyBase));
export { PostCreateDbInstanceReadReplicaHeaders };
var PostCreateDbInstanceReadReplicaRequest = /** @class */ (function (_super) {
    __extends(PostCreateDbInstanceReadReplicaRequest, _super);
    function PostCreateDbInstanceReadReplicaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateDbInstanceReadReplicaQueryParams)
    ], PostCreateDbInstanceReadReplicaRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateDbInstanceReadReplicaHeaders)
    ], PostCreateDbInstanceReadReplicaRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateDbInstanceReadReplicaRequest.prototype, "request", void 0);
    return PostCreateDbInstanceReadReplicaRequest;
}(SpeakeasyBase));
export { PostCreateDbInstanceReadReplicaRequest };
var PostCreateDbInstanceReadReplicaResponse = /** @class */ (function (_super) {
    __extends(PostCreateDbInstanceReadReplicaResponse, _super);
    function PostCreateDbInstanceReadReplicaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostCreateDbInstanceReadReplicaResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostCreateDbInstanceReadReplicaResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostCreateDbInstanceReadReplicaResponse.prototype, "statusCode", void 0);
    return PostCreateDbInstanceReadReplicaResponse;
}(SpeakeasyBase));
export { PostCreateDbInstanceReadReplicaResponse };
