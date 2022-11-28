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
var GetPhotoByIdQueryParams = /** @class */ (function (_super) {
    __extends(GetPhotoByIdQueryParams, _super);
    function GetPhotoByIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetPhotoByIdQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=photo_id" }),
        __metadata("design:type", String)
    ], GetPhotoByIdQueryParams.prototype, "photoId", void 0);
    return GetPhotoByIdQueryParams;
}(SpeakeasyBase));
export { GetPhotoByIdQueryParams };
var GetPhotoById200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPhotoById200ApplicationJson, _super);
    function GetPhotoById200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photo" }),
        __metadata("design:type", shared.Photo)
    ], GetPhotoById200ApplicationJson.prototype, "photo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stat" }),
        __metadata("design:type", String)
    ], GetPhotoById200ApplicationJson.prototype, "stat", void 0);
    return GetPhotoById200ApplicationJson;
}(SpeakeasyBase));
export { GetPhotoById200ApplicationJson };
var GetPhotoByIdRequest = /** @class */ (function (_super) {
    __extends(GetPhotoByIdRequest, _super);
    function GetPhotoByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPhotoByIdQueryParams)
    ], GetPhotoByIdRequest.prototype, "queryParams", void 0);
    return GetPhotoByIdRequest;
}(SpeakeasyBase));
export { GetPhotoByIdRequest };
var GetPhotoByIdResponse = /** @class */ (function (_super) {
    __extends(GetPhotoByIdResponse, _super);
    function GetPhotoByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPhotoByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPhotoByIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPhotoById200ApplicationJson)
    ], GetPhotoByIdResponse.prototype, "getPhotoById200ApplicationJsonObject", void 0);
    return GetPhotoByIdResponse;
}(SpeakeasyBase));
export { GetPhotoByIdResponse };
