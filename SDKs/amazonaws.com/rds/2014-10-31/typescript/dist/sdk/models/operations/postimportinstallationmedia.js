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
export var PostImportInstallationMediaActionEnum;
(function (PostImportInstallationMediaActionEnum) {
    PostImportInstallationMediaActionEnum["ImportInstallationMedia"] = "ImportInstallationMedia";
})(PostImportInstallationMediaActionEnum || (PostImportInstallationMediaActionEnum = {}));
export var PostImportInstallationMediaVersionEnum;
(function (PostImportInstallationMediaVersionEnum) {
    PostImportInstallationMediaVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(PostImportInstallationMediaVersionEnum || (PostImportInstallationMediaVersionEnum = {}));
var PostImportInstallationMediaQueryParams = /** @class */ (function (_super) {
    __extends(PostImportInstallationMediaQueryParams, _super);
    function PostImportInstallationMediaQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostImportInstallationMediaQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostImportInstallationMediaQueryParams.prototype, "version", void 0);
    return PostImportInstallationMediaQueryParams;
}(SpeakeasyBase));
export { PostImportInstallationMediaQueryParams };
var PostImportInstallationMediaHeaders = /** @class */ (function (_super) {
    __extends(PostImportInstallationMediaHeaders, _super);
    function PostImportInstallationMediaHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostImportInstallationMediaHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostImportInstallationMediaHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostImportInstallationMediaHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostImportInstallationMediaHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostImportInstallationMediaHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostImportInstallationMediaHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostImportInstallationMediaHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostImportInstallationMediaHeaders;
}(SpeakeasyBase));
export { PostImportInstallationMediaHeaders };
var PostImportInstallationMediaRequest = /** @class */ (function (_super) {
    __extends(PostImportInstallationMediaRequest, _super);
    function PostImportInstallationMediaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostImportInstallationMediaQueryParams)
    ], PostImportInstallationMediaRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostImportInstallationMediaHeaders)
    ], PostImportInstallationMediaRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostImportInstallationMediaRequest.prototype, "request", void 0);
    return PostImportInstallationMediaRequest;
}(SpeakeasyBase));
export { PostImportInstallationMediaRequest };
var PostImportInstallationMediaResponse = /** @class */ (function (_super) {
    __extends(PostImportInstallationMediaResponse, _super);
    function PostImportInstallationMediaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostImportInstallationMediaResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostImportInstallationMediaResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostImportInstallationMediaResponse.prototype, "statusCode", void 0);
    return PostImportInstallationMediaResponse;
}(SpeakeasyBase));
export { PostImportInstallationMediaResponse };
