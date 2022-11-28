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
var GetGifByIdPathParams = /** @class */ (function (_super) {
    __extends(GetGifByIdPathParams, _super);
    function GetGifByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=gifId" }),
        __metadata("design:type", Number)
    ], GetGifByIdPathParams.prototype, "gifId", void 0);
    return GetGifByIdPathParams;
}(SpeakeasyBase));
export { GetGifByIdPathParams };
var GetGifById200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetGifById200ApplicationJson, _super);
    function GetGifById200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.Gif)
    ], GetGifById200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", shared.Meta)
    ], GetGifById200ApplicationJson.prototype, "meta", void 0);
    return GetGifById200ApplicationJson;
}(SpeakeasyBase));
export { GetGifById200ApplicationJson };
var GetGifByIdRequest = /** @class */ (function (_super) {
    __extends(GetGifByIdRequest, _super);
    function GetGifByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGifByIdPathParams)
    ], GetGifByIdRequest.prototype, "pathParams", void 0);
    return GetGifByIdRequest;
}(SpeakeasyBase));
export { GetGifByIdRequest };
var GetGifByIdResponse = /** @class */ (function (_super) {
    __extends(GetGifByIdResponse, _super);
    function GetGifByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGifByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGifByIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGifById200ApplicationJson)
    ], GetGifByIdResponse.prototype, "getGifById200ApplicationJsonObject", void 0);
    return GetGifByIdResponse;
}(SpeakeasyBase));
export { GetGifByIdResponse };
