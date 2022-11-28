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
var RequestS3TagPathParams = /** @class */ (function (_super) {
    __extends(RequestS3TagPathParams, _super);
    function RequestS3TagPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], RequestS3TagPathParams.prototype, "id", void 0);
    return RequestS3TagPathParams;
}(SpeakeasyBase));
export { RequestS3TagPathParams };
var RequestS3TagHeaders = /** @class */ (function (_super) {
    __extends(RequestS3TagHeaders, _super);
    function RequestS3TagHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], RequestS3TagHeaders.prototype, "xSdsAuthToken", void 0);
    return RequestS3TagHeaders;
}(SpeakeasyBase));
export { RequestS3TagHeaders };
var RequestS3TagRequest = /** @class */ (function (_super) {
    __extends(RequestS3TagRequest, _super);
    function RequestS3TagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestS3TagPathParams)
    ], RequestS3TagRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestS3TagHeaders)
    ], RequestS3TagRequest.prototype, "headers", void 0);
    return RequestS3TagRequest;
}(SpeakeasyBase));
export { RequestS3TagRequest };
var RequestS3TagResponse = /** @class */ (function (_super) {
    __extends(RequestS3TagResponse, _super);
    function RequestS3TagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RequestS3TagResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RequestS3TagResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.S3Tag)
    ], RequestS3TagResponse.prototype, "s3Tag", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RequestS3TagResponse.prototype, "statusCode", void 0);
    return RequestS3TagResponse;
}(SpeakeasyBase));
export { RequestS3TagResponse };
