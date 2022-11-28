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
var GetAlbumsByPersonIdQueryParams = /** @class */ (function (_super) {
    __extends(GetAlbumsByPersonIdQueryParams, _super);
    function GetAlbumsByPersonIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetAlbumsByPersonIdQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetAlbumsByPersonIdQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetAlbumsByPersonIdQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_id" }),
        __metadata("design:type", String)
    ], GetAlbumsByPersonIdQueryParams.prototype, "userId", void 0);
    return GetAlbumsByPersonIdQueryParams;
}(SpeakeasyBase));
export { GetAlbumsByPersonIdQueryParams };
var GetAlbumsByPersonId200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAlbumsByPersonId200ApplicationJson, _super);
    function GetAlbumsByPersonId200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetAlbumsByPersonId200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetAlbumsByPersonId200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=perpage" }),
        __metadata("design:type", Number)
    ], GetAlbumsByPersonId200ApplicationJson.prototype, "perpage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photosets", elemType: shared.Album }),
        __metadata("design:type", Array)
    ], GetAlbumsByPersonId200ApplicationJson.prototype, "photosets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GetAlbumsByPersonId200ApplicationJson.prototype, "total", void 0);
    return GetAlbumsByPersonId200ApplicationJson;
}(SpeakeasyBase));
export { GetAlbumsByPersonId200ApplicationJson };
var GetAlbumsByPersonIdRequest = /** @class */ (function (_super) {
    __extends(GetAlbumsByPersonIdRequest, _super);
    function GetAlbumsByPersonIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAlbumsByPersonIdQueryParams)
    ], GetAlbumsByPersonIdRequest.prototype, "queryParams", void 0);
    return GetAlbumsByPersonIdRequest;
}(SpeakeasyBase));
export { GetAlbumsByPersonIdRequest };
var GetAlbumsByPersonIdResponse = /** @class */ (function (_super) {
    __extends(GetAlbumsByPersonIdResponse, _super);
    function GetAlbumsByPersonIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAlbumsByPersonIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAlbumsByPersonIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAlbumsByPersonId200ApplicationJson)
    ], GetAlbumsByPersonIdResponse.prototype, "getAlbumsByPersonId200ApplicationJsonObject", void 0);
    return GetAlbumsByPersonIdResponse;
}(SpeakeasyBase));
export { GetAlbumsByPersonIdResponse };
