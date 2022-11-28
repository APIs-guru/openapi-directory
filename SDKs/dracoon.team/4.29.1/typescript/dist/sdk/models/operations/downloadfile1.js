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
var DownloadFile1PathParams = /** @class */ (function (_super) {
    __extends(DownloadFile1PathParams, _super);
    function DownloadFile1PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=file_id" }),
        __metadata("design:type", Number)
    ], DownloadFile1PathParams.prototype, "fileId", void 0);
    return DownloadFile1PathParams;
}(SpeakeasyBase));
export { DownloadFile1PathParams };
var DownloadFile1QueryParams = /** @class */ (function (_super) {
    __extends(DownloadFile1QueryParams, _super);
    function DownloadFile1QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=generic_mimetype" }),
        __metadata("design:type", Boolean)
    ], DownloadFile1QueryParams.prototype, "genericMimetype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inline" }),
        __metadata("design:type", Boolean)
    ], DownloadFile1QueryParams.prototype, "inline", void 0);
    return DownloadFile1QueryParams;
}(SpeakeasyBase));
export { DownloadFile1QueryParams };
var DownloadFile1Headers = /** @class */ (function (_super) {
    __extends(DownloadFile1Headers, _super);
    function DownloadFile1Headers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Range" }),
        __metadata("design:type", String)
    ], DownloadFile1Headers.prototype, "range", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], DownloadFile1Headers.prototype, "xSdsAuthToken", void 0);
    return DownloadFile1Headers;
}(SpeakeasyBase));
export { DownloadFile1Headers };
var DownloadFile1Request = /** @class */ (function (_super) {
    __extends(DownloadFile1Request, _super);
    function DownloadFile1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DownloadFile1PathParams)
    ], DownloadFile1Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DownloadFile1QueryParams)
    ], DownloadFile1Request.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DownloadFile1Headers)
    ], DownloadFile1Request.prototype, "headers", void 0);
    return DownloadFile1Request;
}(SpeakeasyBase));
export { DownloadFile1Request };
var DownloadFile1Response = /** @class */ (function (_super) {
    __extends(DownloadFile1Response, _super);
    function DownloadFile1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], DownloadFile1Response.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DownloadFile1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DownloadFile1Response.prototype, "statusCode", void 0);
    return DownloadFile1Response;
}(SpeakeasyBase));
export { DownloadFile1Response };
