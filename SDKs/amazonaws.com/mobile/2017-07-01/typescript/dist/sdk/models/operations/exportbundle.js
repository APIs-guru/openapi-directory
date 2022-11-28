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
var ExportBundlePathParams = /** @class */ (function (_super) {
    __extends(ExportBundlePathParams, _super);
    function ExportBundlePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bundleId" }),
        __metadata("design:type", String)
    ], ExportBundlePathParams.prototype, "bundleId", void 0);
    return ExportBundlePathParams;
}(SpeakeasyBase));
export { ExportBundlePathParams };
export var ExportBundlePlatformEnum;
(function (ExportBundlePlatformEnum) {
    ExportBundlePlatformEnum["Osx"] = "OSX";
    ExportBundlePlatformEnum["Windows"] = "WINDOWS";
    ExportBundlePlatformEnum["Linux"] = "LINUX";
    ExportBundlePlatformEnum["Objc"] = "OBJC";
    ExportBundlePlatformEnum["Swift"] = "SWIFT";
    ExportBundlePlatformEnum["Android"] = "ANDROID";
    ExportBundlePlatformEnum["Javascript"] = "JAVASCRIPT";
})(ExportBundlePlatformEnum || (ExportBundlePlatformEnum = {}));
var ExportBundleQueryParams = /** @class */ (function (_super) {
    __extends(ExportBundleQueryParams, _super);
    function ExportBundleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=platform" }),
        __metadata("design:type", String)
    ], ExportBundleQueryParams.prototype, "platform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projectId" }),
        __metadata("design:type", String)
    ], ExportBundleQueryParams.prototype, "projectId", void 0);
    return ExportBundleQueryParams;
}(SpeakeasyBase));
export { ExportBundleQueryParams };
var ExportBundleHeaders = /** @class */ (function (_super) {
    __extends(ExportBundleHeaders, _super);
    function ExportBundleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ExportBundleHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ExportBundleHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ExportBundleHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ExportBundleHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ExportBundleHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ExportBundleHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ExportBundleHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ExportBundleHeaders;
}(SpeakeasyBase));
export { ExportBundleHeaders };
var ExportBundleRequest = /** @class */ (function (_super) {
    __extends(ExportBundleRequest, _super);
    function ExportBundleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExportBundlePathParams)
    ], ExportBundleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExportBundleQueryParams)
    ], ExportBundleRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExportBundleHeaders)
    ], ExportBundleRequest.prototype, "headers", void 0);
    return ExportBundleRequest;
}(SpeakeasyBase));
export { ExportBundleRequest };
var ExportBundleResponse = /** @class */ (function (_super) {
    __extends(ExportBundleResponse, _super);
    function ExportBundleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequestException)
    ], ExportBundleResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ExportBundleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ExportBundleResult)
    ], ExportBundleResponse.prototype, "exportBundleResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InternalFailureException)
    ], ExportBundleResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundException)
    ], ExportBundleResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceUnavailableException)
    ], ExportBundleResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ExportBundleResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TooManyRequestsException)
    ], ExportBundleResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedException)
    ], ExportBundleResponse.prototype, "unauthorizedException", void 0);
    return ExportBundleResponse;
}(SpeakeasyBase));
export { ExportBundleResponse };
