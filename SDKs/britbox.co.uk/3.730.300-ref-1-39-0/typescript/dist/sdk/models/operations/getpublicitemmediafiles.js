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
var GetPublicItemMediaFilesPathParams = /** @class */ (function (_super) {
    __extends(GetPublicItemMediaFilesPathParams, _super);
    function GetPublicItemMediaFilesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetPublicItemMediaFilesPathParams.prototype, "id", void 0);
    return GetPublicItemMediaFilesPathParams;
}(SpeakeasyBase));
export { GetPublicItemMediaFilesPathParams };
var GetPublicItemMediaFilesQueryParams = /** @class */ (function (_super) {
    __extends(GetPublicItemMediaFilesQueryParams, _super);
    function GetPublicItemMediaFilesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=delivery" }),
        __metadata("design:type", Array)
    ], GetPublicItemMediaFilesQueryParams.prototype, "delivery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device" }),
        __metadata("design:type", String)
    ], GetPublicItemMediaFilesQueryParams.prototype, "device", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" }),
        __metadata("design:type", Array)
    ], GetPublicItemMediaFilesQueryParams.prototype, "ff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=formats" }),
        __metadata("design:type", Array)
    ], GetPublicItemMediaFilesQueryParams.prototype, "formats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], GetPublicItemMediaFilesQueryParams.prototype, "lang", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resolution" }),
        __metadata("design:type", String)
    ], GetPublicItemMediaFilesQueryParams.prototype, "resolution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=segments" }),
        __metadata("design:type", Array)
    ], GetPublicItemMediaFilesQueryParams.prototype, "segments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sub" }),
        __metadata("design:type", String)
    ], GetPublicItemMediaFilesQueryParams.prototype, "sub", void 0);
    return GetPublicItemMediaFilesQueryParams;
}(SpeakeasyBase));
export { GetPublicItemMediaFilesQueryParams };
var GetPublicItemMediaFilesRequest = /** @class */ (function (_super) {
    __extends(GetPublicItemMediaFilesRequest, _super);
    function GetPublicItemMediaFilesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPublicItemMediaFilesPathParams)
    ], GetPublicItemMediaFilesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPublicItemMediaFilesQueryParams)
    ], GetPublicItemMediaFilesRequest.prototype, "queryParams", void 0);
    return GetPublicItemMediaFilesRequest;
}(SpeakeasyBase));
export { GetPublicItemMediaFilesRequest };
var GetPublicItemMediaFilesResponse = /** @class */ (function (_super) {
    __extends(GetPublicItemMediaFilesResponse, _super);
    function GetPublicItemMediaFilesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPublicItemMediaFilesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.MediaFile }),
        __metadata("design:type", Array)
    ], GetPublicItemMediaFilesResponse.prototype, "mediaFiles", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], GetPublicItemMediaFilesResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPublicItemMediaFilesResponse.prototype, "statusCode", void 0);
    return GetPublicItemMediaFilesResponse;
}(SpeakeasyBase));
export { GetPublicItemMediaFilesResponse };
