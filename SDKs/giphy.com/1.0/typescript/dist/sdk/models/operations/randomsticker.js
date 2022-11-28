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
var RandomStickerQueryParams = /** @class */ (function (_super) {
    __extends(RandomStickerQueryParams, _super);
    function RandomStickerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rating" }),
        __metadata("design:type", String)
    ], RandomStickerQueryParams.prototype, "rating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" }),
        __metadata("design:type", String)
    ], RandomStickerQueryParams.prototype, "tag", void 0);
    return RandomStickerQueryParams;
}(SpeakeasyBase));
export { RandomStickerQueryParams };
var RandomSticker200ApplicationJson = /** @class */ (function (_super) {
    __extends(RandomSticker200ApplicationJson, _super);
    function RandomSticker200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.Gif)
    ], RandomSticker200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", shared.Meta)
    ], RandomSticker200ApplicationJson.prototype, "meta", void 0);
    return RandomSticker200ApplicationJson;
}(SpeakeasyBase));
export { RandomSticker200ApplicationJson };
var RandomStickerRequest = /** @class */ (function (_super) {
    __extends(RandomStickerRequest, _super);
    function RandomStickerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RandomStickerQueryParams)
    ], RandomStickerRequest.prototype, "queryParams", void 0);
    return RandomStickerRequest;
}(SpeakeasyBase));
export { RandomStickerRequest };
var RandomStickerResponse = /** @class */ (function (_super) {
    __extends(RandomStickerResponse, _super);
    function RandomStickerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RandomStickerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RandomStickerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RandomSticker200ApplicationJson)
    ], RandomStickerResponse.prototype, "randomSticker200ApplicationJsonObject", void 0);
    return RandomStickerResponse;
}(SpeakeasyBase));
export { RandomStickerResponse };
