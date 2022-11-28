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
var RequestUploadShareQrPathParams = /** @class */ (function (_super) {
    __extends(RequestUploadShareQrPathParams, _super);
    function RequestUploadShareQrPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=share_id" }),
        __metadata("design:type", Number)
    ], RequestUploadShareQrPathParams.prototype, "shareId", void 0);
    return RequestUploadShareQrPathParams;
}(SpeakeasyBase));
export { RequestUploadShareQrPathParams };
var RequestUploadShareQrHeaders = /** @class */ (function (_super) {
    __extends(RequestUploadShareQrHeaders, _super);
    function RequestUploadShareQrHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], RequestUploadShareQrHeaders.prototype, "xSdsAuthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" }),
        __metadata("design:type", Object)
    ], RequestUploadShareQrHeaders.prototype, "xSdsDateFormat", void 0);
    return RequestUploadShareQrHeaders;
}(SpeakeasyBase));
export { RequestUploadShareQrHeaders };
var RequestUploadShareQrRequest = /** @class */ (function (_super) {
    __extends(RequestUploadShareQrRequest, _super);
    function RequestUploadShareQrRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestUploadShareQrPathParams)
    ], RequestUploadShareQrRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestUploadShareQrHeaders)
    ], RequestUploadShareQrRequest.prototype, "headers", void 0);
    return RequestUploadShareQrRequest;
}(SpeakeasyBase));
export { RequestUploadShareQrRequest };
var RequestUploadShareQrResponse = /** @class */ (function (_super) {
    __extends(RequestUploadShareQrResponse, _super);
    function RequestUploadShareQrResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RequestUploadShareQrResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RequestUploadShareQrResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RequestUploadShareQrResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UploadShare)
    ], RequestUploadShareQrResponse.prototype, "uploadShare", void 0);
    return RequestUploadShareQrResponse;
}(SpeakeasyBase));
export { RequestUploadShareQrResponse };
