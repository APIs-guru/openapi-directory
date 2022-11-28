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
var SubscribeDownloadSharePathParams = /** @class */ (function (_super) {
    __extends(SubscribeDownloadSharePathParams, _super);
    function SubscribeDownloadSharePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=share_id" }),
        __metadata("design:type", Number)
    ], SubscribeDownloadSharePathParams.prototype, "shareId", void 0);
    return SubscribeDownloadSharePathParams;
}(SpeakeasyBase));
export { SubscribeDownloadSharePathParams };
var SubscribeDownloadShareHeaders = /** @class */ (function (_super) {
    __extends(SubscribeDownloadShareHeaders, _super);
    function SubscribeDownloadShareHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], SubscribeDownloadShareHeaders.prototype, "xSdsAuthToken", void 0);
    return SubscribeDownloadShareHeaders;
}(SpeakeasyBase));
export { SubscribeDownloadShareHeaders };
var SubscribeDownloadShareRequest = /** @class */ (function (_super) {
    __extends(SubscribeDownloadShareRequest, _super);
    function SubscribeDownloadShareRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SubscribeDownloadSharePathParams)
    ], SubscribeDownloadShareRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SubscribeDownloadShareHeaders)
    ], SubscribeDownloadShareRequest.prototype, "headers", void 0);
    return SubscribeDownloadShareRequest;
}(SpeakeasyBase));
export { SubscribeDownloadShareRequest };
var SubscribeDownloadShareResponse = /** @class */ (function (_super) {
    __extends(SubscribeDownloadShareResponse, _super);
    function SubscribeDownloadShareResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SubscribeDownloadShareResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], SubscribeDownloadShareResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SubscribeDownloadShareResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SubscribedDownloadShare)
    ], SubscribeDownloadShareResponse.prototype, "subscribedDownloadShare", void 0);
    return SubscribeDownloadShareResponse;
}(SpeakeasyBase));
export { SubscribeDownloadShareResponse };
