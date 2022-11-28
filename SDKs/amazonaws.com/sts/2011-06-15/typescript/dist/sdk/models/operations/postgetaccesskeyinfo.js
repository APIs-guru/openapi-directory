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
export var PostGetAccessKeyInfoActionEnum;
(function (PostGetAccessKeyInfoActionEnum) {
    PostGetAccessKeyInfoActionEnum["GetAccessKeyInfo"] = "GetAccessKeyInfo";
})(PostGetAccessKeyInfoActionEnum || (PostGetAccessKeyInfoActionEnum = {}));
export var PostGetAccessKeyInfoVersionEnum;
(function (PostGetAccessKeyInfoVersionEnum) {
    PostGetAccessKeyInfoVersionEnum["TwoThousandAndEleven0615"] = "2011-06-15";
})(PostGetAccessKeyInfoVersionEnum || (PostGetAccessKeyInfoVersionEnum = {}));
var PostGetAccessKeyInfoQueryParams = /** @class */ (function (_super) {
    __extends(PostGetAccessKeyInfoQueryParams, _super);
    function PostGetAccessKeyInfoQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostGetAccessKeyInfoQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostGetAccessKeyInfoQueryParams.prototype, "version", void 0);
    return PostGetAccessKeyInfoQueryParams;
}(SpeakeasyBase));
export { PostGetAccessKeyInfoQueryParams };
var PostGetAccessKeyInfoHeaders = /** @class */ (function (_super) {
    __extends(PostGetAccessKeyInfoHeaders, _super);
    function PostGetAccessKeyInfoHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostGetAccessKeyInfoHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostGetAccessKeyInfoHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostGetAccessKeyInfoHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostGetAccessKeyInfoHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostGetAccessKeyInfoHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostGetAccessKeyInfoHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostGetAccessKeyInfoHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostGetAccessKeyInfoHeaders;
}(SpeakeasyBase));
export { PostGetAccessKeyInfoHeaders };
var PostGetAccessKeyInfoRequest = /** @class */ (function (_super) {
    __extends(PostGetAccessKeyInfoRequest, _super);
    function PostGetAccessKeyInfoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostGetAccessKeyInfoQueryParams)
    ], PostGetAccessKeyInfoRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostGetAccessKeyInfoHeaders)
    ], PostGetAccessKeyInfoRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostGetAccessKeyInfoRequest.prototype, "request", void 0);
    return PostGetAccessKeyInfoRequest;
}(SpeakeasyBase));
export { PostGetAccessKeyInfoRequest };
var PostGetAccessKeyInfoResponse = /** @class */ (function (_super) {
    __extends(PostGetAccessKeyInfoResponse, _super);
    function PostGetAccessKeyInfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostGetAccessKeyInfoResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostGetAccessKeyInfoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostGetAccessKeyInfoResponse.prototype, "statusCode", void 0);
    return PostGetAccessKeyInfoResponse;
}(SpeakeasyBase));
export { PostGetAccessKeyInfoResponse };
