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
import * as shared from "../shared";
var GeneratePresignedUrlsPublicPathParams = /** @class */ (function (_super) {
    __extends(GeneratePresignedUrlsPublicPathParams, _super);
    function GeneratePresignedUrlsPublicPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=access_key" }),
        __metadata("design:type", String)
    ], GeneratePresignedUrlsPublicPathParams.prototype, "accessKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=upload_id" }),
        __metadata("design:type", String)
    ], GeneratePresignedUrlsPublicPathParams.prototype, "uploadId", void 0);
    return GeneratePresignedUrlsPublicPathParams;
}(SpeakeasyBase));
export { GeneratePresignedUrlsPublicPathParams };
var GeneratePresignedUrlsPublicHeaders = /** @class */ (function (_super) {
    __extends(GeneratePresignedUrlsPublicHeaders, _super);
    function GeneratePresignedUrlsPublicHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" }),
        __metadata("design:type", Object)
    ], GeneratePresignedUrlsPublicHeaders.prototype, "xSdsDateFormat", void 0);
    return GeneratePresignedUrlsPublicHeaders;
}(SpeakeasyBase));
export { GeneratePresignedUrlsPublicHeaders };
var GeneratePresignedUrlsPublicRequest = /** @class */ (function (_super) {
    __extends(GeneratePresignedUrlsPublicRequest, _super);
    function GeneratePresignedUrlsPublicRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GeneratePresignedUrlsPublicPathParams)
    ], GeneratePresignedUrlsPublicRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GeneratePresignedUrlsPublicHeaders)
    ], GeneratePresignedUrlsPublicRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GeneratePresignedUrlsRequest)
    ], GeneratePresignedUrlsPublicRequest.prototype, "request", void 0);
    return GeneratePresignedUrlsPublicRequest;
}(SpeakeasyBase));
export { GeneratePresignedUrlsPublicRequest };
var GeneratePresignedUrlsPublicResponse = /** @class */ (function (_super) {
    __extends(GeneratePresignedUrlsPublicResponse, _super);
    function GeneratePresignedUrlsPublicResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GeneratePresignedUrlsPublicResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GeneratePresignedUrlsPublicResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PresignedUrlList)
    ], GeneratePresignedUrlsPublicResponse.prototype, "presignedUrlList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GeneratePresignedUrlsPublicResponse.prototype, "statusCode", void 0);
    return GeneratePresignedUrlsPublicResponse;
}(SpeakeasyBase));
export { GeneratePresignedUrlsPublicResponse };
