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
var GetPhotolistContextByIdQueryParams = /** @class */ (function (_super) {
    __extends(GetPhotolistContextByIdQueryParams, _super);
    function GetPhotolistContextByIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetPhotolistContextByIdQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=photo_id" }),
        __metadata("design:type", String)
    ], GetPhotolistContextByIdQueryParams.prototype, "photoId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=photolist_id" }),
        __metadata("design:type", String)
    ], GetPhotolistContextByIdQueryParams.prototype, "photolistId", void 0);
    return GetPhotolistContextByIdQueryParams;
}(SpeakeasyBase));
export { GetPhotolistContextByIdQueryParams };
var GetPhotolistContextById200ApplicationJsonCount = /** @class */ (function (_super) {
    __extends(GetPhotolistContextById200ApplicationJsonCount, _super);
    function GetPhotolistContextById200ApplicationJsonCount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_content" }),
        __metadata("design:type", String)
    ], GetPhotolistContextById200ApplicationJsonCount.prototype, "content", void 0);
    return GetPhotolistContextById200ApplicationJsonCount;
}(SpeakeasyBase));
export { GetPhotolistContextById200ApplicationJsonCount };
var GetPhotolistContextById200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPhotolistContextById200ApplicationJson, _super);
    function GetPhotolistContextById200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", GetPhotolistContextById200ApplicationJsonCount)
    ], GetPhotolistContextById200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextphoto" }),
        __metadata("design:type", shared.ContextPhoto)
    ], GetPhotolistContextById200ApplicationJson.prototype, "nextphoto", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prevphoto" }),
        __metadata("design:type", shared.ContextPhoto)
    ], GetPhotolistContextById200ApplicationJson.prototype, "prevphoto", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stat" }),
        __metadata("design:type", String)
    ], GetPhotolistContextById200ApplicationJson.prototype, "stat", void 0);
    return GetPhotolistContextById200ApplicationJson;
}(SpeakeasyBase));
export { GetPhotolistContextById200ApplicationJson };
var GetPhotolistContextByIdRequest = /** @class */ (function (_super) {
    __extends(GetPhotolistContextByIdRequest, _super);
    function GetPhotolistContextByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPhotolistContextByIdQueryParams)
    ], GetPhotolistContextByIdRequest.prototype, "queryParams", void 0);
    return GetPhotolistContextByIdRequest;
}(SpeakeasyBase));
export { GetPhotolistContextByIdRequest };
var GetPhotolistContextByIdResponse = /** @class */ (function (_super) {
    __extends(GetPhotolistContextByIdResponse, _super);
    function GetPhotolistContextByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPhotolistContextByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPhotolistContextByIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPhotolistContextById200ApplicationJson)
    ], GetPhotolistContextByIdResponse.prototype, "getPhotolistContextById200ApplicationJsonObject", void 0);
    return GetPhotolistContextByIdResponse;
}(SpeakeasyBase));
export { GetPhotolistContextByIdResponse };
