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
var DownloadFileViaToken1PathParams = /** @class */ (function (_super) {
    __extends(DownloadFileViaToken1PathParams, _super);
    function DownloadFileViaToken1PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token" }),
        __metadata("design:type", String)
    ], DownloadFileViaToken1PathParams.prototype, "token", void 0);
    return DownloadFileViaToken1PathParams;
}(SpeakeasyBase));
export { DownloadFileViaToken1PathParams };
var DownloadFileViaToken1QueryParams = /** @class */ (function (_super) {
    __extends(DownloadFileViaToken1QueryParams, _super);
    function DownloadFileViaToken1QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=generic_mimetype" }),
        __metadata("design:type", Boolean)
    ], DownloadFileViaToken1QueryParams.prototype, "genericMimetype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inline" }),
        __metadata("design:type", Boolean)
    ], DownloadFileViaToken1QueryParams.prototype, "inline", void 0);
    return DownloadFileViaToken1QueryParams;
}(SpeakeasyBase));
export { DownloadFileViaToken1QueryParams };
var DownloadFileViaToken1Headers = /** @class */ (function (_super) {
    __extends(DownloadFileViaToken1Headers, _super);
    function DownloadFileViaToken1Headers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Range" }),
        __metadata("design:type", String)
    ], DownloadFileViaToken1Headers.prototype, "range", void 0);
    return DownloadFileViaToken1Headers;
}(SpeakeasyBase));
export { DownloadFileViaToken1Headers };
var DownloadFileViaToken1Request = /** @class */ (function (_super) {
    __extends(DownloadFileViaToken1Request, _super);
    function DownloadFileViaToken1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DownloadFileViaToken1PathParams)
    ], DownloadFileViaToken1Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DownloadFileViaToken1QueryParams)
    ], DownloadFileViaToken1Request.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DownloadFileViaToken1Headers)
    ], DownloadFileViaToken1Request.prototype, "headers", void 0);
    return DownloadFileViaToken1Request;
}(SpeakeasyBase));
export { DownloadFileViaToken1Request };
var DownloadFileViaToken1Response = /** @class */ (function (_super) {
    __extends(DownloadFileViaToken1Response, _super);
    function DownloadFileViaToken1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], DownloadFileViaToken1Response.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DownloadFileViaToken1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DownloadFileViaToken1Response.prototype, "statusCode", void 0);
    return DownloadFileViaToken1Response;
}(SpeakeasyBase));
export { DownloadFileViaToken1Response };
