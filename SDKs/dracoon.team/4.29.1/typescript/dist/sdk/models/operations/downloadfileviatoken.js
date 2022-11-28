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
var DownloadFileViaTokenPathParams = /** @class */ (function (_super) {
    __extends(DownloadFileViaTokenPathParams, _super);
    function DownloadFileViaTokenPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token" }),
        __metadata("design:type", String)
    ], DownloadFileViaTokenPathParams.prototype, "token", void 0);
    return DownloadFileViaTokenPathParams;
}(SpeakeasyBase));
export { DownloadFileViaTokenPathParams };
var DownloadFileViaTokenQueryParams = /** @class */ (function (_super) {
    __extends(DownloadFileViaTokenQueryParams, _super);
    function DownloadFileViaTokenQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=generic_mimetype" }),
        __metadata("design:type", Boolean)
    ], DownloadFileViaTokenQueryParams.prototype, "genericMimetype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inline" }),
        __metadata("design:type", Boolean)
    ], DownloadFileViaTokenQueryParams.prototype, "inline", void 0);
    return DownloadFileViaTokenQueryParams;
}(SpeakeasyBase));
export { DownloadFileViaTokenQueryParams };
var DownloadFileViaTokenHeaders = /** @class */ (function (_super) {
    __extends(DownloadFileViaTokenHeaders, _super);
    function DownloadFileViaTokenHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Range" }),
        __metadata("design:type", String)
    ], DownloadFileViaTokenHeaders.prototype, "range", void 0);
    return DownloadFileViaTokenHeaders;
}(SpeakeasyBase));
export { DownloadFileViaTokenHeaders };
var DownloadFileViaTokenRequest = /** @class */ (function (_super) {
    __extends(DownloadFileViaTokenRequest, _super);
    function DownloadFileViaTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DownloadFileViaTokenPathParams)
    ], DownloadFileViaTokenRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DownloadFileViaTokenQueryParams)
    ], DownloadFileViaTokenRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DownloadFileViaTokenHeaders)
    ], DownloadFileViaTokenRequest.prototype, "headers", void 0);
    return DownloadFileViaTokenRequest;
}(SpeakeasyBase));
export { DownloadFileViaTokenRequest };
var DownloadFileViaTokenResponse = /** @class */ (function (_super) {
    __extends(DownloadFileViaTokenResponse, _super);
    function DownloadFileViaTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], DownloadFileViaTokenResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DownloadFileViaTokenResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DownloadFileViaTokenResponse.prototype, "statusCode", void 0);
    return DownloadFileViaTokenResponse;
}(SpeakeasyBase));
export { DownloadFileViaTokenResponse };
