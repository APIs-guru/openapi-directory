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
var GetAuthorNameUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(GetAuthorNameUsingPostQueryParams, _super);
    function GetAuthorNameUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authorID" }),
        __metadata("design:type", String)
    ], GetAuthorNameUsingPostQueryParams.prototype, "authorId", void 0);
    return GetAuthorNameUsingPostQueryParams;
}(SpeakeasyBase));
export { GetAuthorNameUsingPostQueryParams };
var GetAuthorNameUsingPost200ApplicationJsonDataInfo = /** @class */ (function (_super) {
    __extends(GetAuthorNameUsingPost200ApplicationJsonDataInfo, _super);
    function GetAuthorNameUsingPost200ApplicationJsonDataInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=colorId" }),
        __metadata("design:type", String)
    ], GetAuthorNameUsingPost200ApplicationJsonDataInfo.prototype, "colorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetAuthorNameUsingPost200ApplicationJsonDataInfo.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetAuthorNameUsingPost200ApplicationJsonDataInfo.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestamp" }),
        __metadata("design:type", Number)
    ], GetAuthorNameUsingPost200ApplicationJsonDataInfo.prototype, "timestamp", void 0);
    return GetAuthorNameUsingPost200ApplicationJsonDataInfo;
}(SpeakeasyBase));
export { GetAuthorNameUsingPost200ApplicationJsonDataInfo };
var GetAuthorNameUsingPost200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetAuthorNameUsingPost200ApplicationJsonData, _super);
    function GetAuthorNameUsingPost200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=info" }),
        __metadata("design:type", GetAuthorNameUsingPost200ApplicationJsonDataInfo)
    ], GetAuthorNameUsingPost200ApplicationJsonData.prototype, "info", void 0);
    return GetAuthorNameUsingPost200ApplicationJsonData;
}(SpeakeasyBase));
export { GetAuthorNameUsingPost200ApplicationJsonData };
var GetAuthorNameUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAuthorNameUsingPost200ApplicationJson, _super);
    function GetAuthorNameUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetAuthorNameUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", GetAuthorNameUsingPost200ApplicationJsonData)
    ], GetAuthorNameUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAuthorNameUsingPost200ApplicationJson.prototype, "message", void 0);
    return GetAuthorNameUsingPost200ApplicationJson;
}(SpeakeasyBase));
export { GetAuthorNameUsingPost200ApplicationJson };
var GetAuthorNameUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAuthorNameUsingPost400ApplicationJson, _super);
    function GetAuthorNameUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetAuthorNameUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetAuthorNameUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAuthorNameUsingPost400ApplicationJson.prototype, "message", void 0);
    return GetAuthorNameUsingPost400ApplicationJson;
}(SpeakeasyBase));
export { GetAuthorNameUsingPost400ApplicationJson };
var GetAuthorNameUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAuthorNameUsingPost401ApplicationJson, _super);
    function GetAuthorNameUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetAuthorNameUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetAuthorNameUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAuthorNameUsingPost401ApplicationJson.prototype, "message", void 0);
    return GetAuthorNameUsingPost401ApplicationJson;
}(SpeakeasyBase));
export { GetAuthorNameUsingPost401ApplicationJson };
var GetAuthorNameUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAuthorNameUsingPost500ApplicationJson, _super);
    function GetAuthorNameUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetAuthorNameUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetAuthorNameUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAuthorNameUsingPost500ApplicationJson.prototype, "message", void 0);
    return GetAuthorNameUsingPost500ApplicationJson;
}(SpeakeasyBase));
export { GetAuthorNameUsingPost500ApplicationJson };
var GetAuthorNameUsingPostRequest = /** @class */ (function (_super) {
    __extends(GetAuthorNameUsingPostRequest, _super);
    function GetAuthorNameUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAuthorNameUsingPostQueryParams)
    ], GetAuthorNameUsingPostRequest.prototype, "queryParams", void 0);
    return GetAuthorNameUsingPostRequest;
}(SpeakeasyBase));
export { GetAuthorNameUsingPostRequest };
var GetAuthorNameUsingPostResponse = /** @class */ (function (_super) {
    __extends(GetAuthorNameUsingPostResponse, _super);
    function GetAuthorNameUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAuthorNameUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAuthorNameUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAuthorNameUsingPost200ApplicationJson)
    ], GetAuthorNameUsingPostResponse.prototype, "getAuthorNameUsingPost200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAuthorNameUsingPost400ApplicationJson)
    ], GetAuthorNameUsingPostResponse.prototype, "getAuthorNameUsingPost400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAuthorNameUsingPost401ApplicationJson)
    ], GetAuthorNameUsingPostResponse.prototype, "getAuthorNameUsingPost401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAuthorNameUsingPost500ApplicationJson)
    ], GetAuthorNameUsingPostResponse.prototype, "getAuthorNameUsingPost500ApplicationJsonObject", void 0);
    return GetAuthorNameUsingPostResponse;
}(SpeakeasyBase));
export { GetAuthorNameUsingPostResponse };
