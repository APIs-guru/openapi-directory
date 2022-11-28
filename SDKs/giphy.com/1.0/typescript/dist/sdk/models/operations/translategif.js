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
var TranslateGifQueryParams = /** @class */ (function (_super) {
    __extends(TranslateGifQueryParams, _super);
    function TranslateGifQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=s" }),
        __metadata("design:type", String)
    ], TranslateGifQueryParams.prototype, "s", void 0);
    return TranslateGifQueryParams;
}(SpeakeasyBase));
export { TranslateGifQueryParams };
var TranslateGif200ApplicationJson = /** @class */ (function (_super) {
    __extends(TranslateGif200ApplicationJson, _super);
    function TranslateGif200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.Gif)
    ], TranslateGif200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", shared.Meta)
    ], TranslateGif200ApplicationJson.prototype, "meta", void 0);
    return TranslateGif200ApplicationJson;
}(SpeakeasyBase));
export { TranslateGif200ApplicationJson };
var TranslateGifRequest = /** @class */ (function (_super) {
    __extends(TranslateGifRequest, _super);
    function TranslateGifRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslateGifQueryParams)
    ], TranslateGifRequest.prototype, "queryParams", void 0);
    return TranslateGifRequest;
}(SpeakeasyBase));
export { TranslateGifRequest };
var TranslateGifResponse = /** @class */ (function (_super) {
    __extends(TranslateGifResponse, _super);
    function TranslateGifResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TranslateGifResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TranslateGifResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslateGif200ApplicationJson)
    ], TranslateGifResponse.prototype, "translateGif200ApplicationJsonObject", void 0);
    return TranslateGifResponse;
}(SpeakeasyBase));
export { TranslateGifResponse };
