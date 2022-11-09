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
export var PostDeleteDbInstanceActionEnum;
(function (PostDeleteDbInstanceActionEnum) {
    PostDeleteDbInstanceActionEnum["DeleteDbInstance"] = "DeleteDBInstance";
})(PostDeleteDbInstanceActionEnum || (PostDeleteDbInstanceActionEnum = {}));
export var PostDeleteDbInstanceVersionEnum;
(function (PostDeleteDbInstanceVersionEnum) {
    PostDeleteDbInstanceVersionEnum["TwoThousandAndThirteen0909"] = "2013-09-09";
})(PostDeleteDbInstanceVersionEnum || (PostDeleteDbInstanceVersionEnum = {}));
var PostDeleteDbInstanceQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteDbInstanceQueryParams, _super);
    function PostDeleteDbInstanceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteDbInstanceQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteDbInstanceQueryParams.prototype, "version", void 0);
    return PostDeleteDbInstanceQueryParams;
}(SpeakeasyBase));
export { PostDeleteDbInstanceQueryParams };
var PostDeleteDbInstanceHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteDbInstanceHeaders, _super);
    function PostDeleteDbInstanceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteDbInstanceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteDbInstanceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteDbInstanceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteDbInstanceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteDbInstanceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteDbInstanceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteDbInstanceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteDbInstanceHeaders;
}(SpeakeasyBase));
export { PostDeleteDbInstanceHeaders };
var PostDeleteDbInstanceRequest = /** @class */ (function (_super) {
    __extends(PostDeleteDbInstanceRequest, _super);
    function PostDeleteDbInstanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteDbInstanceQueryParams)
    ], PostDeleteDbInstanceRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteDbInstanceHeaders)
    ], PostDeleteDbInstanceRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteDbInstanceRequest.prototype, "request", void 0);
    return PostDeleteDbInstanceRequest;
}(SpeakeasyBase));
export { PostDeleteDbInstanceRequest };
var PostDeleteDbInstanceResponse = /** @class */ (function (_super) {
    __extends(PostDeleteDbInstanceResponse, _super);
    function PostDeleteDbInstanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteDbInstanceResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDeleteDbInstanceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDeleteDbInstanceResponse.prototype, "statusCode", void 0);
    return PostDeleteDbInstanceResponse;
}(SpeakeasyBase));
export { PostDeleteDbInstanceResponse };
