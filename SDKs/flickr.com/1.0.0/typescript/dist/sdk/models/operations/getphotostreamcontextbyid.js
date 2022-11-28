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
var GetPhotostreamContextByIdQueryParams = /** @class */ (function (_super) {
    __extends(GetPhotostreamContextByIdQueryParams, _super);
    function GetPhotostreamContextByIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetPhotostreamContextByIdQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=photo_id" }),
        __metadata("design:type", String)
    ], GetPhotostreamContextByIdQueryParams.prototype, "photoId", void 0);
    return GetPhotostreamContextByIdQueryParams;
}(SpeakeasyBase));
export { GetPhotostreamContextByIdQueryParams };
var GetPhotostreamContextById200ApplicationJsonCount = /** @class */ (function (_super) {
    __extends(GetPhotostreamContextById200ApplicationJsonCount, _super);
    function GetPhotostreamContextById200ApplicationJsonCount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_content" }),
        __metadata("design:type", String)
    ], GetPhotostreamContextById200ApplicationJsonCount.prototype, "content", void 0);
    return GetPhotostreamContextById200ApplicationJsonCount;
}(SpeakeasyBase));
export { GetPhotostreamContextById200ApplicationJsonCount };
var GetPhotostreamContextById200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPhotostreamContextById200ApplicationJson, _super);
    function GetPhotostreamContextById200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", GetPhotostreamContextById200ApplicationJsonCount)
    ], GetPhotostreamContextById200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextphoto" }),
        __metadata("design:type", shared.ContextPhoto)
    ], GetPhotostreamContextById200ApplicationJson.prototype, "nextphoto", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prevphoto" }),
        __metadata("design:type", shared.ContextPhoto)
    ], GetPhotostreamContextById200ApplicationJson.prototype, "prevphoto", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stat" }),
        __metadata("design:type", String)
    ], GetPhotostreamContextById200ApplicationJson.prototype, "stat", void 0);
    return GetPhotostreamContextById200ApplicationJson;
}(SpeakeasyBase));
export { GetPhotostreamContextById200ApplicationJson };
var GetPhotostreamContextByIdRequest = /** @class */ (function (_super) {
    __extends(GetPhotostreamContextByIdRequest, _super);
    function GetPhotostreamContextByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPhotostreamContextByIdQueryParams)
    ], GetPhotostreamContextByIdRequest.prototype, "queryParams", void 0);
    return GetPhotostreamContextByIdRequest;
}(SpeakeasyBase));
export { GetPhotostreamContextByIdRequest };
var GetPhotostreamContextByIdResponse = /** @class */ (function (_super) {
    __extends(GetPhotostreamContextByIdResponse, _super);
    function GetPhotostreamContextByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPhotostreamContextByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPhotostreamContextByIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPhotostreamContextById200ApplicationJson)
    ], GetPhotostreamContextByIdResponse.prototype, "getPhotostreamContextById200ApplicationJsonObject", void 0);
    return GetPhotostreamContextByIdResponse;
}(SpeakeasyBase));
export { GetPhotostreamContextByIdResponse };
