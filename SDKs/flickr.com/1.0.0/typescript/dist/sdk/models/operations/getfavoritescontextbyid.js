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
var GetFavoritesContextByIdQueryParams = /** @class */ (function (_super) {
    __extends(GetFavoritesContextByIdQueryParams, _super);
    function GetFavoritesContextByIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetFavoritesContextByIdQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=photo_id" }),
        __metadata("design:type", String)
    ], GetFavoritesContextByIdQueryParams.prototype, "photoId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_id" }),
        __metadata("design:type", String)
    ], GetFavoritesContextByIdQueryParams.prototype, "userId", void 0);
    return GetFavoritesContextByIdQueryParams;
}(SpeakeasyBase));
export { GetFavoritesContextByIdQueryParams };
var GetFavoritesContextById200ApplicationJsonCount = /** @class */ (function (_super) {
    __extends(GetFavoritesContextById200ApplicationJsonCount, _super);
    function GetFavoritesContextById200ApplicationJsonCount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_content" }),
        __metadata("design:type", String)
    ], GetFavoritesContextById200ApplicationJsonCount.prototype, "content", void 0);
    return GetFavoritesContextById200ApplicationJsonCount;
}(SpeakeasyBase));
export { GetFavoritesContextById200ApplicationJsonCount };
var GetFavoritesContextById200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetFavoritesContextById200ApplicationJson, _super);
    function GetFavoritesContextById200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", GetFavoritesContextById200ApplicationJsonCount)
    ], GetFavoritesContextById200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextphoto" }),
        __metadata("design:type", shared.ContextPhoto)
    ], GetFavoritesContextById200ApplicationJson.prototype, "nextphoto", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prevphoto" }),
        __metadata("design:type", shared.ContextPhoto)
    ], GetFavoritesContextById200ApplicationJson.prototype, "prevphoto", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stat" }),
        __metadata("design:type", String)
    ], GetFavoritesContextById200ApplicationJson.prototype, "stat", void 0);
    return GetFavoritesContextById200ApplicationJson;
}(SpeakeasyBase));
export { GetFavoritesContextById200ApplicationJson };
var GetFavoritesContextByIdRequest = /** @class */ (function (_super) {
    __extends(GetFavoritesContextByIdRequest, _super);
    function GetFavoritesContextByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFavoritesContextByIdQueryParams)
    ], GetFavoritesContextByIdRequest.prototype, "queryParams", void 0);
    return GetFavoritesContextByIdRequest;
}(SpeakeasyBase));
export { GetFavoritesContextByIdRequest };
var GetFavoritesContextByIdResponse = /** @class */ (function (_super) {
    __extends(GetFavoritesContextByIdResponse, _super);
    function GetFavoritesContextByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFavoritesContextByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFavoritesContextByIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFavoritesContextById200ApplicationJson)
    ], GetFavoritesContextByIdResponse.prototype, "getFavoritesContextById200ApplicationJsonObject", void 0);
    return GetFavoritesContextByIdResponse;
}(SpeakeasyBase));
export { GetFavoritesContextByIdResponse };
