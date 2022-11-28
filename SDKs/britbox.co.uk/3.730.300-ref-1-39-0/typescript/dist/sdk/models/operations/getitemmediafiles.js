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
var GetItemMediaFilesPathParams = /** @class */ (function (_super) {
    __extends(GetItemMediaFilesPathParams, _super);
    function GetItemMediaFilesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetItemMediaFilesPathParams.prototype, "id", void 0);
    return GetItemMediaFilesPathParams;
}(SpeakeasyBase));
export { GetItemMediaFilesPathParams };
var GetItemMediaFilesQueryParams = /** @class */ (function (_super) {
    __extends(GetItemMediaFilesQueryParams, _super);
    function GetItemMediaFilesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=delivery" }),
        __metadata("design:type", Array)
    ], GetItemMediaFilesQueryParams.prototype, "delivery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device" }),
        __metadata("design:type", String)
    ], GetItemMediaFilesQueryParams.prototype, "device", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" }),
        __metadata("design:type", Array)
    ], GetItemMediaFilesQueryParams.prototype, "ff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=formats" }),
        __metadata("design:type", Array)
    ], GetItemMediaFilesQueryParams.prototype, "formats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], GetItemMediaFilesQueryParams.prototype, "lang", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resolution" }),
        __metadata("design:type", String)
    ], GetItemMediaFilesQueryParams.prototype, "resolution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=segments" }),
        __metadata("design:type", Array)
    ], GetItemMediaFilesQueryParams.prototype, "segments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sub" }),
        __metadata("design:type", String)
    ], GetItemMediaFilesQueryParams.prototype, "sub", void 0);
    return GetItemMediaFilesQueryParams;
}(SpeakeasyBase));
export { GetItemMediaFilesQueryParams };
var GetItemMediaFilesSecurity = /** @class */ (function (_super) {
    __extends(GetItemMediaFilesSecurity, _super);
    function GetItemMediaFilesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAccountAuth)
    ], GetItemMediaFilesSecurity.prototype, "accountAuth", void 0);
    return GetItemMediaFilesSecurity;
}(SpeakeasyBase));
export { GetItemMediaFilesSecurity };
var GetItemMediaFilesRequest = /** @class */ (function (_super) {
    __extends(GetItemMediaFilesRequest, _super);
    function GetItemMediaFilesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetItemMediaFilesPathParams)
    ], GetItemMediaFilesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetItemMediaFilesQueryParams)
    ], GetItemMediaFilesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetItemMediaFilesSecurity)
    ], GetItemMediaFilesRequest.prototype, "security", void 0);
    return GetItemMediaFilesRequest;
}(SpeakeasyBase));
export { GetItemMediaFilesRequest };
var GetItemMediaFilesResponse = /** @class */ (function (_super) {
    __extends(GetItemMediaFilesResponse, _super);
    function GetItemMediaFilesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetItemMediaFilesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.MediaFile }),
        __metadata("design:type", Array)
    ], GetItemMediaFilesResponse.prototype, "mediaFiles", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], GetItemMediaFilesResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetItemMediaFilesResponse.prototype, "statusCode", void 0);
    return GetItemMediaFilesResponse;
}(SpeakeasyBase));
export { GetItemMediaFilesResponse };
