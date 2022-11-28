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
var DownloadFileViaTokenPublic1PathParams = /** @class */ (function (_super) {
    __extends(DownloadFileViaTokenPublic1PathParams, _super);
    function DownloadFileViaTokenPublic1PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=access_key" }),
        __metadata("design:type", String)
    ], DownloadFileViaTokenPublic1PathParams.prototype, "accessKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token" }),
        __metadata("design:type", String)
    ], DownloadFileViaTokenPublic1PathParams.prototype, "token", void 0);
    return DownloadFileViaTokenPublic1PathParams;
}(SpeakeasyBase));
export { DownloadFileViaTokenPublic1PathParams };
var DownloadFileViaTokenPublic1QueryParams = /** @class */ (function (_super) {
    __extends(DownloadFileViaTokenPublic1QueryParams, _super);
    function DownloadFileViaTokenPublic1QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=generic_mimetype" }),
        __metadata("design:type", Boolean)
    ], DownloadFileViaTokenPublic1QueryParams.prototype, "genericMimetype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inline" }),
        __metadata("design:type", Boolean)
    ], DownloadFileViaTokenPublic1QueryParams.prototype, "inline", void 0);
    return DownloadFileViaTokenPublic1QueryParams;
}(SpeakeasyBase));
export { DownloadFileViaTokenPublic1QueryParams };
var DownloadFileViaTokenPublic1Headers = /** @class */ (function (_super) {
    __extends(DownloadFileViaTokenPublic1Headers, _super);
    function DownloadFileViaTokenPublic1Headers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Range" }),
        __metadata("design:type", String)
    ], DownloadFileViaTokenPublic1Headers.prototype, "range", void 0);
    return DownloadFileViaTokenPublic1Headers;
}(SpeakeasyBase));
export { DownloadFileViaTokenPublic1Headers };
var DownloadFileViaTokenPublic1Request = /** @class */ (function (_super) {
    __extends(DownloadFileViaTokenPublic1Request, _super);
    function DownloadFileViaTokenPublic1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DownloadFileViaTokenPublic1PathParams)
    ], DownloadFileViaTokenPublic1Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DownloadFileViaTokenPublic1QueryParams)
    ], DownloadFileViaTokenPublic1Request.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DownloadFileViaTokenPublic1Headers)
    ], DownloadFileViaTokenPublic1Request.prototype, "headers", void 0);
    return DownloadFileViaTokenPublic1Request;
}(SpeakeasyBase));
export { DownloadFileViaTokenPublic1Request };
var DownloadFileViaTokenPublic1Response = /** @class */ (function (_super) {
    __extends(DownloadFileViaTokenPublic1Response, _super);
    function DownloadFileViaTokenPublic1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], DownloadFileViaTokenPublic1Response.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DownloadFileViaTokenPublic1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DownloadFileViaTokenPublic1Response.prototype, "statusCode", void 0);
    return DownloadFileViaTokenPublic1Response;
}(SpeakeasyBase));
export { DownloadFileViaTokenPublic1Response };
