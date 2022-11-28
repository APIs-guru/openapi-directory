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
var GetSessionInfoUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(GetSessionInfoUsingGetQueryParams, _super);
    function GetSessionInfoUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sessionID" }),
        __metadata("design:type", String)
    ], GetSessionInfoUsingGetQueryParams.prototype, "sessionId", void 0);
    return GetSessionInfoUsingGetQueryParams;
}(SpeakeasyBase));
export { GetSessionInfoUsingGetQueryParams };
var GetSessionInfoUsingGet200ApplicationJsonDataInfo = /** @class */ (function (_super) {
    __extends(GetSessionInfoUsingGet200ApplicationJsonDataInfo, _super);
    function GetSessionInfoUsingGet200ApplicationJsonDataInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorID" }),
        __metadata("design:type", String)
    ], GetSessionInfoUsingGet200ApplicationJsonDataInfo.prototype, "authorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupID" }),
        __metadata("design:type", String)
    ], GetSessionInfoUsingGet200ApplicationJsonDataInfo.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetSessionInfoUsingGet200ApplicationJsonDataInfo.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validUntil" }),
        __metadata("design:type", Number)
    ], GetSessionInfoUsingGet200ApplicationJsonDataInfo.prototype, "validUntil", void 0);
    return GetSessionInfoUsingGet200ApplicationJsonDataInfo;
}(SpeakeasyBase));
export { GetSessionInfoUsingGet200ApplicationJsonDataInfo };
var GetSessionInfoUsingGet200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetSessionInfoUsingGet200ApplicationJsonData, _super);
    function GetSessionInfoUsingGet200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=info" }),
        __metadata("design:type", GetSessionInfoUsingGet200ApplicationJsonDataInfo)
    ], GetSessionInfoUsingGet200ApplicationJsonData.prototype, "info", void 0);
    return GetSessionInfoUsingGet200ApplicationJsonData;
}(SpeakeasyBase));
export { GetSessionInfoUsingGet200ApplicationJsonData };
var GetSessionInfoUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSessionInfoUsingGet200ApplicationJson, _super);
    function GetSessionInfoUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetSessionInfoUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", GetSessionInfoUsingGet200ApplicationJsonData)
    ], GetSessionInfoUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSessionInfoUsingGet200ApplicationJson.prototype, "message", void 0);
    return GetSessionInfoUsingGet200ApplicationJson;
}(SpeakeasyBase));
export { GetSessionInfoUsingGet200ApplicationJson };
var GetSessionInfoUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSessionInfoUsingGet400ApplicationJson, _super);
    function GetSessionInfoUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetSessionInfoUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetSessionInfoUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSessionInfoUsingGet400ApplicationJson.prototype, "message", void 0);
    return GetSessionInfoUsingGet400ApplicationJson;
}(SpeakeasyBase));
export { GetSessionInfoUsingGet400ApplicationJson };
var GetSessionInfoUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSessionInfoUsingGet401ApplicationJson, _super);
    function GetSessionInfoUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetSessionInfoUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetSessionInfoUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSessionInfoUsingGet401ApplicationJson.prototype, "message", void 0);
    return GetSessionInfoUsingGet401ApplicationJson;
}(SpeakeasyBase));
export { GetSessionInfoUsingGet401ApplicationJson };
var GetSessionInfoUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSessionInfoUsingGet500ApplicationJson, _super);
    function GetSessionInfoUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetSessionInfoUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetSessionInfoUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSessionInfoUsingGet500ApplicationJson.prototype, "message", void 0);
    return GetSessionInfoUsingGet500ApplicationJson;
}(SpeakeasyBase));
export { GetSessionInfoUsingGet500ApplicationJson };
var GetSessionInfoUsingGetRequest = /** @class */ (function (_super) {
    __extends(GetSessionInfoUsingGetRequest, _super);
    function GetSessionInfoUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSessionInfoUsingGetQueryParams)
    ], GetSessionInfoUsingGetRequest.prototype, "queryParams", void 0);
    return GetSessionInfoUsingGetRequest;
}(SpeakeasyBase));
export { GetSessionInfoUsingGetRequest };
var GetSessionInfoUsingGetResponse = /** @class */ (function (_super) {
    __extends(GetSessionInfoUsingGetResponse, _super);
    function GetSessionInfoUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSessionInfoUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSessionInfoUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSessionInfoUsingGet200ApplicationJson)
    ], GetSessionInfoUsingGetResponse.prototype, "getSessionInfoUsingGet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSessionInfoUsingGet400ApplicationJson)
    ], GetSessionInfoUsingGetResponse.prototype, "getSessionInfoUsingGet400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSessionInfoUsingGet401ApplicationJson)
    ], GetSessionInfoUsingGetResponse.prototype, "getSessionInfoUsingGet401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSessionInfoUsingGet500ApplicationJson)
    ], GetSessionInfoUsingGetResponse.prototype, "getSessionInfoUsingGet500ApplicationJsonObject", void 0);
    return GetSessionInfoUsingGetResponse;
}(SpeakeasyBase));
export { GetSessionInfoUsingGetResponse };
