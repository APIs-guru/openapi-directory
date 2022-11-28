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
var UpdateDownloadSharePathParams = /** @class */ (function (_super) {
    __extends(UpdateDownloadSharePathParams, _super);
    function UpdateDownloadSharePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=share_id" }),
        __metadata("design:type", Number)
    ], UpdateDownloadSharePathParams.prototype, "shareId", void 0);
    return UpdateDownloadSharePathParams;
}(SpeakeasyBase));
export { UpdateDownloadSharePathParams };
var UpdateDownloadShareHeaders = /** @class */ (function (_super) {
    __extends(UpdateDownloadShareHeaders, _super);
    function UpdateDownloadShareHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], UpdateDownloadShareHeaders.prototype, "xSdsAuthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" }),
        __metadata("design:type", Object)
    ], UpdateDownloadShareHeaders.prototype, "xSdsDateFormat", void 0);
    return UpdateDownloadShareHeaders;
}(SpeakeasyBase));
export { UpdateDownloadShareHeaders };
var UpdateDownloadShareRequest = /** @class */ (function (_super) {
    __extends(UpdateDownloadShareRequest, _super);
    function UpdateDownloadShareRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDownloadSharePathParams)
    ], UpdateDownloadShareRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDownloadShareHeaders)
    ], UpdateDownloadShareRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateDownloadShareRequest)
    ], UpdateDownloadShareRequest.prototype, "request", void 0);
    return UpdateDownloadShareRequest;
}(SpeakeasyBase));
export { UpdateDownloadShareRequest };
var UpdateDownloadShareResponse = /** @class */ (function (_super) {
    __extends(UpdateDownloadShareResponse, _super);
    function UpdateDownloadShareResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateDownloadShareResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DownloadShare)
    ], UpdateDownloadShareResponse.prototype, "downloadShare", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], UpdateDownloadShareResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateDownloadShareResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDownloadShareResponse.prototype, "updateDownloadShare400ApplicationJsonOneOf", void 0);
    return UpdateDownloadShareResponse;
}(SpeakeasyBase));
export { UpdateDownloadShareResponse };
