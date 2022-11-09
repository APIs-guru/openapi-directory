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
export var PostPromoteReadReplicaActionEnum;
(function (PostPromoteReadReplicaActionEnum) {
    PostPromoteReadReplicaActionEnum["PromoteReadReplica"] = "PromoteReadReplica";
})(PostPromoteReadReplicaActionEnum || (PostPromoteReadReplicaActionEnum = {}));
export var PostPromoteReadReplicaVersionEnum;
(function (PostPromoteReadReplicaVersionEnum) {
    PostPromoteReadReplicaVersionEnum["TwoThousandAndThirteen0909"] = "2013-09-09";
})(PostPromoteReadReplicaVersionEnum || (PostPromoteReadReplicaVersionEnum = {}));
var PostPromoteReadReplicaQueryParams = /** @class */ (function (_super) {
    __extends(PostPromoteReadReplicaQueryParams, _super);
    function PostPromoteReadReplicaQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostPromoteReadReplicaQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostPromoteReadReplicaQueryParams.prototype, "version", void 0);
    return PostPromoteReadReplicaQueryParams;
}(SpeakeasyBase));
export { PostPromoteReadReplicaQueryParams };
var PostPromoteReadReplicaHeaders = /** @class */ (function (_super) {
    __extends(PostPromoteReadReplicaHeaders, _super);
    function PostPromoteReadReplicaHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostPromoteReadReplicaHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostPromoteReadReplicaHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostPromoteReadReplicaHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostPromoteReadReplicaHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostPromoteReadReplicaHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostPromoteReadReplicaHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostPromoteReadReplicaHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostPromoteReadReplicaHeaders;
}(SpeakeasyBase));
export { PostPromoteReadReplicaHeaders };
var PostPromoteReadReplicaRequest = /** @class */ (function (_super) {
    __extends(PostPromoteReadReplicaRequest, _super);
    function PostPromoteReadReplicaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostPromoteReadReplicaQueryParams)
    ], PostPromoteReadReplicaRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostPromoteReadReplicaHeaders)
    ], PostPromoteReadReplicaRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostPromoteReadReplicaRequest.prototype, "request", void 0);
    return PostPromoteReadReplicaRequest;
}(SpeakeasyBase));
export { PostPromoteReadReplicaRequest };
var PostPromoteReadReplicaResponse = /** @class */ (function (_super) {
    __extends(PostPromoteReadReplicaResponse, _super);
    function PostPromoteReadReplicaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostPromoteReadReplicaResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostPromoteReadReplicaResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostPromoteReadReplicaResponse.prototype, "statusCode", void 0);
    return PostPromoteReadReplicaResponse;
}(SpeakeasyBase));
export { PostPromoteReadReplicaResponse };
