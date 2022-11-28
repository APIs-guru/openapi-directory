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
var GetGifsByIdQueryParams = /** @class */ (function (_super) {
    __extends(GetGifsByIdQueryParams, _super);
    function GetGifsByIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", String)
    ], GetGifsByIdQueryParams.prototype, "ids", void 0);
    return GetGifsByIdQueryParams;
}(SpeakeasyBase));
export { GetGifsByIdQueryParams };
var GetGifsById200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetGifsById200ApplicationJson, _super);
    function GetGifsById200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.Gif }),
        __metadata("design:type", Array)
    ], GetGifsById200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", shared.Meta)
    ], GetGifsById200ApplicationJson.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pagination" }),
        __metadata("design:type", shared.Pagination)
    ], GetGifsById200ApplicationJson.prototype, "pagination", void 0);
    return GetGifsById200ApplicationJson;
}(SpeakeasyBase));
export { GetGifsById200ApplicationJson };
var GetGifsByIdRequest = /** @class */ (function (_super) {
    __extends(GetGifsByIdRequest, _super);
    function GetGifsByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGifsByIdQueryParams)
    ], GetGifsByIdRequest.prototype, "queryParams", void 0);
    return GetGifsByIdRequest;
}(SpeakeasyBase));
export { GetGifsByIdRequest };
var GetGifsByIdResponse = /** @class */ (function (_super) {
    __extends(GetGifsByIdResponse, _super);
    function GetGifsByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGifsByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGifsByIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGifsById200ApplicationJson)
    ], GetGifsByIdResponse.prototype, "getGifsById200ApplicationJsonObject", void 0);
    return GetGifsByIdResponse;
}(SpeakeasyBase));
export { GetGifsByIdResponse };
