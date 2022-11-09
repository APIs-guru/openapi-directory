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
export var PostDownloadDbLogFilePortionActionEnum;
(function (PostDownloadDbLogFilePortionActionEnum) {
    PostDownloadDbLogFilePortionActionEnum["DownloadDbLogFilePortion"] = "DownloadDBLogFilePortion";
})(PostDownloadDbLogFilePortionActionEnum || (PostDownloadDbLogFilePortionActionEnum = {}));
export var PostDownloadDbLogFilePortionVersionEnum;
(function (PostDownloadDbLogFilePortionVersionEnum) {
    PostDownloadDbLogFilePortionVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(PostDownloadDbLogFilePortionVersionEnum || (PostDownloadDbLogFilePortionVersionEnum = {}));
var PostDownloadDbLogFilePortionQueryParams = /** @class */ (function (_super) {
    __extends(PostDownloadDbLogFilePortionQueryParams, _super);
    function PostDownloadDbLogFilePortionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDownloadDbLogFilePortionQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostDownloadDbLogFilePortionQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NumberOfLines" }),
        __metadata("design:type", String)
    ], PostDownloadDbLogFilePortionQueryParams.prototype, "numberOfLines", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDownloadDbLogFilePortionQueryParams.prototype, "version", void 0);
    return PostDownloadDbLogFilePortionQueryParams;
}(SpeakeasyBase));
export { PostDownloadDbLogFilePortionQueryParams };
var PostDownloadDbLogFilePortionHeaders = /** @class */ (function (_super) {
    __extends(PostDownloadDbLogFilePortionHeaders, _super);
    function PostDownloadDbLogFilePortionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDownloadDbLogFilePortionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDownloadDbLogFilePortionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDownloadDbLogFilePortionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDownloadDbLogFilePortionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDownloadDbLogFilePortionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDownloadDbLogFilePortionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDownloadDbLogFilePortionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDownloadDbLogFilePortionHeaders;
}(SpeakeasyBase));
export { PostDownloadDbLogFilePortionHeaders };
var PostDownloadDbLogFilePortionRequest = /** @class */ (function (_super) {
    __extends(PostDownloadDbLogFilePortionRequest, _super);
    function PostDownloadDbLogFilePortionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDownloadDbLogFilePortionQueryParams)
    ], PostDownloadDbLogFilePortionRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDownloadDbLogFilePortionHeaders)
    ], PostDownloadDbLogFilePortionRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDownloadDbLogFilePortionRequest.prototype, "request", void 0);
    return PostDownloadDbLogFilePortionRequest;
}(SpeakeasyBase));
export { PostDownloadDbLogFilePortionRequest };
var PostDownloadDbLogFilePortionResponse = /** @class */ (function (_super) {
    __extends(PostDownloadDbLogFilePortionResponse, _super);
    function PostDownloadDbLogFilePortionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDownloadDbLogFilePortionResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDownloadDbLogFilePortionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDownloadDbLogFilePortionResponse.prototype, "statusCode", void 0);
    return PostDownloadDbLogFilePortionResponse;
}(SpeakeasyBase));
export { PostDownloadDbLogFilePortionResponse };
