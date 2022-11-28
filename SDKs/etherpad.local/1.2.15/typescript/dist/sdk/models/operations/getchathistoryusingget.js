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
var GetChatHistoryUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(GetChatHistoryUsingGetQueryParams, _super);
    function GetChatHistoryUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end" }),
        __metadata("design:type", String)
    ], GetChatHistoryUsingGetQueryParams.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], GetChatHistoryUsingGetQueryParams.prototype, "padId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", String)
    ], GetChatHistoryUsingGetQueryParams.prototype, "start", void 0);
    return GetChatHistoryUsingGetQueryParams;
}(SpeakeasyBase));
export { GetChatHistoryUsingGetQueryParams };
var GetChatHistoryUsingGet200ApplicationJsonDataMessages = /** @class */ (function (_super) {
    __extends(GetChatHistoryUsingGet200ApplicationJsonDataMessages, _super);
    function GetChatHistoryUsingGet200ApplicationJsonDataMessages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], GetChatHistoryUsingGet200ApplicationJsonDataMessages.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time" }),
        __metadata("design:type", Number)
    ], GetChatHistoryUsingGet200ApplicationJsonDataMessages.prototype, "time", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userId" }),
        __metadata("design:type", String)
    ], GetChatHistoryUsingGet200ApplicationJsonDataMessages.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userName" }),
        __metadata("design:type", String)
    ], GetChatHistoryUsingGet200ApplicationJsonDataMessages.prototype, "userName", void 0);
    return GetChatHistoryUsingGet200ApplicationJsonDataMessages;
}(SpeakeasyBase));
export { GetChatHistoryUsingGet200ApplicationJsonDataMessages };
var GetChatHistoryUsingGet200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetChatHistoryUsingGet200ApplicationJsonData, _super);
    function GetChatHistoryUsingGet200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messages", elemType: GetChatHistoryUsingGet200ApplicationJsonDataMessages }),
        __metadata("design:type", Array)
    ], GetChatHistoryUsingGet200ApplicationJsonData.prototype, "messages", void 0);
    return GetChatHistoryUsingGet200ApplicationJsonData;
}(SpeakeasyBase));
export { GetChatHistoryUsingGet200ApplicationJsonData };
var GetChatHistoryUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChatHistoryUsingGet200ApplicationJson, _super);
    function GetChatHistoryUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetChatHistoryUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", GetChatHistoryUsingGet200ApplicationJsonData)
    ], GetChatHistoryUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChatHistoryUsingGet200ApplicationJson.prototype, "message", void 0);
    return GetChatHistoryUsingGet200ApplicationJson;
}(SpeakeasyBase));
export { GetChatHistoryUsingGet200ApplicationJson };
var GetChatHistoryUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChatHistoryUsingGet400ApplicationJson, _super);
    function GetChatHistoryUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetChatHistoryUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetChatHistoryUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChatHistoryUsingGet400ApplicationJson.prototype, "message", void 0);
    return GetChatHistoryUsingGet400ApplicationJson;
}(SpeakeasyBase));
export { GetChatHistoryUsingGet400ApplicationJson };
var GetChatHistoryUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChatHistoryUsingGet401ApplicationJson, _super);
    function GetChatHistoryUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetChatHistoryUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetChatHistoryUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChatHistoryUsingGet401ApplicationJson.prototype, "message", void 0);
    return GetChatHistoryUsingGet401ApplicationJson;
}(SpeakeasyBase));
export { GetChatHistoryUsingGet401ApplicationJson };
var GetChatHistoryUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChatHistoryUsingGet500ApplicationJson, _super);
    function GetChatHistoryUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetChatHistoryUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetChatHistoryUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChatHistoryUsingGet500ApplicationJson.prototype, "message", void 0);
    return GetChatHistoryUsingGet500ApplicationJson;
}(SpeakeasyBase));
export { GetChatHistoryUsingGet500ApplicationJson };
var GetChatHistoryUsingGetRequest = /** @class */ (function (_super) {
    __extends(GetChatHistoryUsingGetRequest, _super);
    function GetChatHistoryUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChatHistoryUsingGetQueryParams)
    ], GetChatHistoryUsingGetRequest.prototype, "queryParams", void 0);
    return GetChatHistoryUsingGetRequest;
}(SpeakeasyBase));
export { GetChatHistoryUsingGetRequest };
var GetChatHistoryUsingGetResponse = /** @class */ (function (_super) {
    __extends(GetChatHistoryUsingGetResponse, _super);
    function GetChatHistoryUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetChatHistoryUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetChatHistoryUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChatHistoryUsingGet200ApplicationJson)
    ], GetChatHistoryUsingGetResponse.prototype, "getChatHistoryUsingGet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChatHistoryUsingGet400ApplicationJson)
    ], GetChatHistoryUsingGetResponse.prototype, "getChatHistoryUsingGet400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChatHistoryUsingGet401ApplicationJson)
    ], GetChatHistoryUsingGetResponse.prototype, "getChatHistoryUsingGet401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChatHistoryUsingGet500ApplicationJson)
    ], GetChatHistoryUsingGetResponse.prototype, "getChatHistoryUsingGet500ApplicationJsonObject", void 0);
    return GetChatHistoryUsingGetResponse;
}(SpeakeasyBase));
export { GetChatHistoryUsingGetResponse };
