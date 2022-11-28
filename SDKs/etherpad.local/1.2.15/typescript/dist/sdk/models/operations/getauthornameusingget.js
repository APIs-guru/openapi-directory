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
var GetAuthorNameUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(GetAuthorNameUsingGetQueryParams, _super);
    function GetAuthorNameUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authorID" }),
        __metadata("design:type", String)
    ], GetAuthorNameUsingGetQueryParams.prototype, "authorId", void 0);
    return GetAuthorNameUsingGetQueryParams;
}(SpeakeasyBase));
export { GetAuthorNameUsingGetQueryParams };
var GetAuthorNameUsingGet200ApplicationJsonDataInfo = /** @class */ (function (_super) {
    __extends(GetAuthorNameUsingGet200ApplicationJsonDataInfo, _super);
    function GetAuthorNameUsingGet200ApplicationJsonDataInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=colorId" }),
        __metadata("design:type", String)
    ], GetAuthorNameUsingGet200ApplicationJsonDataInfo.prototype, "colorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetAuthorNameUsingGet200ApplicationJsonDataInfo.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetAuthorNameUsingGet200ApplicationJsonDataInfo.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestamp" }),
        __metadata("design:type", Number)
    ], GetAuthorNameUsingGet200ApplicationJsonDataInfo.prototype, "timestamp", void 0);
    return GetAuthorNameUsingGet200ApplicationJsonDataInfo;
}(SpeakeasyBase));
export { GetAuthorNameUsingGet200ApplicationJsonDataInfo };
var GetAuthorNameUsingGet200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetAuthorNameUsingGet200ApplicationJsonData, _super);
    function GetAuthorNameUsingGet200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=info" }),
        __metadata("design:type", GetAuthorNameUsingGet200ApplicationJsonDataInfo)
    ], GetAuthorNameUsingGet200ApplicationJsonData.prototype, "info", void 0);
    return GetAuthorNameUsingGet200ApplicationJsonData;
}(SpeakeasyBase));
export { GetAuthorNameUsingGet200ApplicationJsonData };
var GetAuthorNameUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAuthorNameUsingGet200ApplicationJson, _super);
    function GetAuthorNameUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetAuthorNameUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", GetAuthorNameUsingGet200ApplicationJsonData)
    ], GetAuthorNameUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAuthorNameUsingGet200ApplicationJson.prototype, "message", void 0);
    return GetAuthorNameUsingGet200ApplicationJson;
}(SpeakeasyBase));
export { GetAuthorNameUsingGet200ApplicationJson };
var GetAuthorNameUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAuthorNameUsingGet400ApplicationJson, _super);
    function GetAuthorNameUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetAuthorNameUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetAuthorNameUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAuthorNameUsingGet400ApplicationJson.prototype, "message", void 0);
    return GetAuthorNameUsingGet400ApplicationJson;
}(SpeakeasyBase));
export { GetAuthorNameUsingGet400ApplicationJson };
var GetAuthorNameUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAuthorNameUsingGet401ApplicationJson, _super);
    function GetAuthorNameUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetAuthorNameUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetAuthorNameUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAuthorNameUsingGet401ApplicationJson.prototype, "message", void 0);
    return GetAuthorNameUsingGet401ApplicationJson;
}(SpeakeasyBase));
export { GetAuthorNameUsingGet401ApplicationJson };
var GetAuthorNameUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAuthorNameUsingGet500ApplicationJson, _super);
    function GetAuthorNameUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetAuthorNameUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetAuthorNameUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAuthorNameUsingGet500ApplicationJson.prototype, "message", void 0);
    return GetAuthorNameUsingGet500ApplicationJson;
}(SpeakeasyBase));
export { GetAuthorNameUsingGet500ApplicationJson };
var GetAuthorNameUsingGetRequest = /** @class */ (function (_super) {
    __extends(GetAuthorNameUsingGetRequest, _super);
    function GetAuthorNameUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAuthorNameUsingGetQueryParams)
    ], GetAuthorNameUsingGetRequest.prototype, "queryParams", void 0);
    return GetAuthorNameUsingGetRequest;
}(SpeakeasyBase));
export { GetAuthorNameUsingGetRequest };
var GetAuthorNameUsingGetResponse = /** @class */ (function (_super) {
    __extends(GetAuthorNameUsingGetResponse, _super);
    function GetAuthorNameUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAuthorNameUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAuthorNameUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAuthorNameUsingGet200ApplicationJson)
    ], GetAuthorNameUsingGetResponse.prototype, "getAuthorNameUsingGet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAuthorNameUsingGet400ApplicationJson)
    ], GetAuthorNameUsingGetResponse.prototype, "getAuthorNameUsingGet400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAuthorNameUsingGet401ApplicationJson)
    ], GetAuthorNameUsingGetResponse.prototype, "getAuthorNameUsingGet401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAuthorNameUsingGet500ApplicationJson)
    ], GetAuthorNameUsingGetResponse.prototype, "getAuthorNameUsingGet500ApplicationJsonObject", void 0);
    return GetAuthorNameUsingGetResponse;
}(SpeakeasyBase));
export { GetAuthorNameUsingGetResponse };
