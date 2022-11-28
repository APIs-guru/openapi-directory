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
var GetFavoritesByPersonIdQueryParams = /** @class */ (function (_super) {
    __extends(GetFavoritesByPersonIdQueryParams, _super);
    function GetFavoritesByPersonIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetFavoritesByPersonIdQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_fave_date" }),
        __metadata("design:type", Number)
    ], GetFavoritesByPersonIdQueryParams.prototype, "maxFaveDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_fave_date" }),
        __metadata("design:type", Number)
    ], GetFavoritesByPersonIdQueryParams.prototype, "minFaveDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetFavoritesByPersonIdQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetFavoritesByPersonIdQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_id" }),
        __metadata("design:type", String)
    ], GetFavoritesByPersonIdQueryParams.prototype, "userId", void 0);
    return GetFavoritesByPersonIdQueryParams;
}(SpeakeasyBase));
export { GetFavoritesByPersonIdQueryParams };
var GetFavoritesByPersonId200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetFavoritesByPersonId200ApplicationJson, _super);
    function GetFavoritesByPersonId200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetFavoritesByPersonId200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetFavoritesByPersonId200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=perpage" }),
        __metadata("design:type", Number)
    ], GetFavoritesByPersonId200ApplicationJson.prototype, "perpage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photos", elemType: shared.Photo }),
        __metadata("design:type", Array)
    ], GetFavoritesByPersonId200ApplicationJson.prototype, "photos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GetFavoritesByPersonId200ApplicationJson.prototype, "total", void 0);
    return GetFavoritesByPersonId200ApplicationJson;
}(SpeakeasyBase));
export { GetFavoritesByPersonId200ApplicationJson };
var GetFavoritesByPersonIdRequest = /** @class */ (function (_super) {
    __extends(GetFavoritesByPersonIdRequest, _super);
    function GetFavoritesByPersonIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFavoritesByPersonIdQueryParams)
    ], GetFavoritesByPersonIdRequest.prototype, "queryParams", void 0);
    return GetFavoritesByPersonIdRequest;
}(SpeakeasyBase));
export { GetFavoritesByPersonIdRequest };
var GetFavoritesByPersonIdResponse = /** @class */ (function (_super) {
    __extends(GetFavoritesByPersonIdResponse, _super);
    function GetFavoritesByPersonIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFavoritesByPersonIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFavoritesByPersonIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFavoritesByPersonId200ApplicationJson)
    ], GetFavoritesByPersonIdResponse.prototype, "getFavoritesByPersonId200ApplicationJsonObject", void 0);
    return GetFavoritesByPersonIdResponse;
}(SpeakeasyBase));
export { GetFavoritesByPersonIdResponse };
