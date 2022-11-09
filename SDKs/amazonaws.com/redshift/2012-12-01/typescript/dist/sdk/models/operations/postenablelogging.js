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
export var PostEnableLoggingActionEnum;
(function (PostEnableLoggingActionEnum) {
    PostEnableLoggingActionEnum["EnableLogging"] = "EnableLogging";
})(PostEnableLoggingActionEnum || (PostEnableLoggingActionEnum = {}));
export var PostEnableLoggingVersionEnum;
(function (PostEnableLoggingVersionEnum) {
    PostEnableLoggingVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostEnableLoggingVersionEnum || (PostEnableLoggingVersionEnum = {}));
var PostEnableLoggingQueryParams = /** @class */ (function (_super) {
    __extends(PostEnableLoggingQueryParams, _super);
    function PostEnableLoggingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostEnableLoggingQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostEnableLoggingQueryParams.prototype, "version", void 0);
    return PostEnableLoggingQueryParams;
}(SpeakeasyBase));
export { PostEnableLoggingQueryParams };
var PostEnableLoggingHeaders = /** @class */ (function (_super) {
    __extends(PostEnableLoggingHeaders, _super);
    function PostEnableLoggingHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostEnableLoggingHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostEnableLoggingHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostEnableLoggingHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostEnableLoggingHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostEnableLoggingHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostEnableLoggingHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostEnableLoggingHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostEnableLoggingHeaders;
}(SpeakeasyBase));
export { PostEnableLoggingHeaders };
var PostEnableLoggingRequest = /** @class */ (function (_super) {
    __extends(PostEnableLoggingRequest, _super);
    function PostEnableLoggingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostEnableLoggingQueryParams)
    ], PostEnableLoggingRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostEnableLoggingHeaders)
    ], PostEnableLoggingRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostEnableLoggingRequest.prototype, "request", void 0);
    return PostEnableLoggingRequest;
}(SpeakeasyBase));
export { PostEnableLoggingRequest };
var PostEnableLoggingResponse = /** @class */ (function (_super) {
    __extends(PostEnableLoggingResponse, _super);
    function PostEnableLoggingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostEnableLoggingResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostEnableLoggingResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostEnableLoggingResponse.prototype, "statusCode", void 0);
    return PostEnableLoggingResponse;
}(SpeakeasyBase));
export { PostEnableLoggingResponse };
