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
var DownloadFileViaTokenPublicPathParams = /** @class */ (function (_super) {
    __extends(DownloadFileViaTokenPublicPathParams, _super);
    function DownloadFileViaTokenPublicPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=access_key" }),
        __metadata("design:type", String)
    ], DownloadFileViaTokenPublicPathParams.prototype, "accessKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token" }),
        __metadata("design:type", String)
    ], DownloadFileViaTokenPublicPathParams.prototype, "token", void 0);
    return DownloadFileViaTokenPublicPathParams;
}(SpeakeasyBase));
export { DownloadFileViaTokenPublicPathParams };
var DownloadFileViaTokenPublicQueryParams = /** @class */ (function (_super) {
    __extends(DownloadFileViaTokenPublicQueryParams, _super);
    function DownloadFileViaTokenPublicQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=generic_mimetype" }),
        __metadata("design:type", Boolean)
    ], DownloadFileViaTokenPublicQueryParams.prototype, "genericMimetype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inline" }),
        __metadata("design:type", Boolean)
    ], DownloadFileViaTokenPublicQueryParams.prototype, "inline", void 0);
    return DownloadFileViaTokenPublicQueryParams;
}(SpeakeasyBase));
export { DownloadFileViaTokenPublicQueryParams };
var DownloadFileViaTokenPublicHeaders = /** @class */ (function (_super) {
    __extends(DownloadFileViaTokenPublicHeaders, _super);
    function DownloadFileViaTokenPublicHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Range" }),
        __metadata("design:type", String)
    ], DownloadFileViaTokenPublicHeaders.prototype, "range", void 0);
    return DownloadFileViaTokenPublicHeaders;
}(SpeakeasyBase));
export { DownloadFileViaTokenPublicHeaders };
var DownloadFileViaTokenPublicRequest = /** @class */ (function (_super) {
    __extends(DownloadFileViaTokenPublicRequest, _super);
    function DownloadFileViaTokenPublicRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DownloadFileViaTokenPublicPathParams)
    ], DownloadFileViaTokenPublicRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DownloadFileViaTokenPublicQueryParams)
    ], DownloadFileViaTokenPublicRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DownloadFileViaTokenPublicHeaders)
    ], DownloadFileViaTokenPublicRequest.prototype, "headers", void 0);
    return DownloadFileViaTokenPublicRequest;
}(SpeakeasyBase));
export { DownloadFileViaTokenPublicRequest };
var DownloadFileViaTokenPublicResponse = /** @class */ (function (_super) {
    __extends(DownloadFileViaTokenPublicResponse, _super);
    function DownloadFileViaTokenPublicResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], DownloadFileViaTokenPublicResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DownloadFileViaTokenPublicResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DownloadFileViaTokenPublicResponse.prototype, "statusCode", void 0);
    return DownloadFileViaTokenPublicResponse;
}(SpeakeasyBase));
export { DownloadFileViaTokenPublicResponse };
