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
var GetChatHeadUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(GetChatHeadUsingGetQueryParams, _super);
    function GetChatHeadUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], GetChatHeadUsingGetQueryParams.prototype, "padId", void 0);
    return GetChatHeadUsingGetQueryParams;
}(SpeakeasyBase));
export { GetChatHeadUsingGetQueryParams };
var GetChatHeadUsingGet200ApplicationJsonDataChatHead = /** @class */ (function (_super) {
    __extends(GetChatHeadUsingGet200ApplicationJsonDataChatHead, _super);
    function GetChatHeadUsingGet200ApplicationJsonDataChatHead() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], GetChatHeadUsingGet200ApplicationJsonDataChatHead.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time" }),
        __metadata("design:type", Number)
    ], GetChatHeadUsingGet200ApplicationJsonDataChatHead.prototype, "time", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userId" }),
        __metadata("design:type", String)
    ], GetChatHeadUsingGet200ApplicationJsonDataChatHead.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userName" }),
        __metadata("design:type", String)
    ], GetChatHeadUsingGet200ApplicationJsonDataChatHead.prototype, "userName", void 0);
    return GetChatHeadUsingGet200ApplicationJsonDataChatHead;
}(SpeakeasyBase));
export { GetChatHeadUsingGet200ApplicationJsonDataChatHead };
var GetChatHeadUsingGet200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetChatHeadUsingGet200ApplicationJsonData, _super);
    function GetChatHeadUsingGet200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=chatHead" }),
        __metadata("design:type", GetChatHeadUsingGet200ApplicationJsonDataChatHead)
    ], GetChatHeadUsingGet200ApplicationJsonData.prototype, "chatHead", void 0);
    return GetChatHeadUsingGet200ApplicationJsonData;
}(SpeakeasyBase));
export { GetChatHeadUsingGet200ApplicationJsonData };
var GetChatHeadUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChatHeadUsingGet200ApplicationJson, _super);
    function GetChatHeadUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetChatHeadUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", GetChatHeadUsingGet200ApplicationJsonData)
    ], GetChatHeadUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChatHeadUsingGet200ApplicationJson.prototype, "message", void 0);
    return GetChatHeadUsingGet200ApplicationJson;
}(SpeakeasyBase));
export { GetChatHeadUsingGet200ApplicationJson };
var GetChatHeadUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChatHeadUsingGet400ApplicationJson, _super);
    function GetChatHeadUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetChatHeadUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetChatHeadUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChatHeadUsingGet400ApplicationJson.prototype, "message", void 0);
    return GetChatHeadUsingGet400ApplicationJson;
}(SpeakeasyBase));
export { GetChatHeadUsingGet400ApplicationJson };
var GetChatHeadUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChatHeadUsingGet401ApplicationJson, _super);
    function GetChatHeadUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetChatHeadUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetChatHeadUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChatHeadUsingGet401ApplicationJson.prototype, "message", void 0);
    return GetChatHeadUsingGet401ApplicationJson;
}(SpeakeasyBase));
export { GetChatHeadUsingGet401ApplicationJson };
var GetChatHeadUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChatHeadUsingGet500ApplicationJson, _super);
    function GetChatHeadUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetChatHeadUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetChatHeadUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChatHeadUsingGet500ApplicationJson.prototype, "message", void 0);
    return GetChatHeadUsingGet500ApplicationJson;
}(SpeakeasyBase));
export { GetChatHeadUsingGet500ApplicationJson };
var GetChatHeadUsingGetRequest = /** @class */ (function (_super) {
    __extends(GetChatHeadUsingGetRequest, _super);
    function GetChatHeadUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChatHeadUsingGetQueryParams)
    ], GetChatHeadUsingGetRequest.prototype, "queryParams", void 0);
    return GetChatHeadUsingGetRequest;
}(SpeakeasyBase));
export { GetChatHeadUsingGetRequest };
var GetChatHeadUsingGetResponse = /** @class */ (function (_super) {
    __extends(GetChatHeadUsingGetResponse, _super);
    function GetChatHeadUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetChatHeadUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetChatHeadUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChatHeadUsingGet200ApplicationJson)
    ], GetChatHeadUsingGetResponse.prototype, "getChatHeadUsingGet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChatHeadUsingGet400ApplicationJson)
    ], GetChatHeadUsingGetResponse.prototype, "getChatHeadUsingGet400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChatHeadUsingGet401ApplicationJson)
    ], GetChatHeadUsingGetResponse.prototype, "getChatHeadUsingGet401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChatHeadUsingGet500ApplicationJson)
    ], GetChatHeadUsingGetResponse.prototype, "getChatHeadUsingGet500ApplicationJsonObject", void 0);
    return GetChatHeadUsingGetResponse;
}(SpeakeasyBase));
export { GetChatHeadUsingGetResponse };
