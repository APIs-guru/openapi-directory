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
var GetV3ImagesIdPathParams = /** @class */ (function (_super) {
    __extends(GetV3ImagesIdPathParams, _super);
    function GetV3ImagesIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetV3ImagesIdPathParams.prototype, "id", void 0);
    return GetV3ImagesIdPathParams;
}(SpeakeasyBase));
export { GetV3ImagesIdPathParams };
var GetV3ImagesIdQueryParams = /** @class */ (function (_super) {
    __extends(GetV3ImagesIdQueryParams, _super);
    function GetV3ImagesIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=fields" }),
        __metadata("design:type", Array)
    ], GetV3ImagesIdQueryParams.prototype, "fields", void 0);
    return GetV3ImagesIdQueryParams;
}(SpeakeasyBase));
export { GetV3ImagesIdQueryParams };
var GetV3ImagesIdHeaders = /** @class */ (function (_super) {
    __extends(GetV3ImagesIdHeaders, _super);
    function GetV3ImagesIdHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], GetV3ImagesIdHeaders.prototype, "acceptLanguage", void 0);
    return GetV3ImagesIdHeaders;
}(SpeakeasyBase));
export { GetV3ImagesIdHeaders };
var GetV3ImagesIdRequest = /** @class */ (function (_super) {
    __extends(GetV3ImagesIdRequest, _super);
    function GetV3ImagesIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV3ImagesIdPathParams)
    ], GetV3ImagesIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV3ImagesIdQueryParams)
    ], GetV3ImagesIdRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV3ImagesIdHeaders)
    ], GetV3ImagesIdRequest.prototype, "headers", void 0);
    return GetV3ImagesIdRequest;
}(SpeakeasyBase));
export { GetV3ImagesIdRequest };
var GetV3ImagesIdResponse = /** @class */ (function (_super) {
    __extends(GetV3ImagesIdResponse, _super);
    function GetV3ImagesIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetV3ImagesIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ImagesDetailResults)
    ], GetV3ImagesIdResponse.prototype, "imagesDetailResults", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetV3ImagesIdResponse.prototype, "statusCode", void 0);
    return GetV3ImagesIdResponse;
}(SpeakeasyBase));
export { GetV3ImagesIdResponse };
