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
var AppendChatMessageUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(AppendChatMessageUsingGetQueryParams, _super);
    function AppendChatMessageUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authorID" }),
        __metadata("design:type", String)
    ], AppendChatMessageUsingGetQueryParams.prototype, "authorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], AppendChatMessageUsingGetQueryParams.prototype, "padId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], AppendChatMessageUsingGetQueryParams.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time" }),
        __metadata("design:type", String)
    ], AppendChatMessageUsingGetQueryParams.prototype, "time", void 0);
    return AppendChatMessageUsingGetQueryParams;
}(SpeakeasyBase));
export { AppendChatMessageUsingGetQueryParams };
var AppendChatMessageUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(AppendChatMessageUsingGet200ApplicationJson, _super);
    function AppendChatMessageUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], AppendChatMessageUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], AppendChatMessageUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], AppendChatMessageUsingGet200ApplicationJson.prototype, "message", void 0);
    return AppendChatMessageUsingGet200ApplicationJson;
}(SpeakeasyBase));
export { AppendChatMessageUsingGet200ApplicationJson };
var AppendChatMessageUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(AppendChatMessageUsingGet400ApplicationJson, _super);
    function AppendChatMessageUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], AppendChatMessageUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], AppendChatMessageUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], AppendChatMessageUsingGet400ApplicationJson.prototype, "message", void 0);
    return AppendChatMessageUsingGet400ApplicationJson;
}(SpeakeasyBase));
export { AppendChatMessageUsingGet400ApplicationJson };
var AppendChatMessageUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(AppendChatMessageUsingGet401ApplicationJson, _super);
    function AppendChatMessageUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], AppendChatMessageUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], AppendChatMessageUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], AppendChatMessageUsingGet401ApplicationJson.prototype, "message", void 0);
    return AppendChatMessageUsingGet401ApplicationJson;
}(SpeakeasyBase));
export { AppendChatMessageUsingGet401ApplicationJson };
var AppendChatMessageUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(AppendChatMessageUsingGet500ApplicationJson, _super);
    function AppendChatMessageUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], AppendChatMessageUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], AppendChatMessageUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], AppendChatMessageUsingGet500ApplicationJson.prototype, "message", void 0);
    return AppendChatMessageUsingGet500ApplicationJson;
}(SpeakeasyBase));
export { AppendChatMessageUsingGet500ApplicationJson };
var AppendChatMessageUsingGetRequest = /** @class */ (function (_super) {
    __extends(AppendChatMessageUsingGetRequest, _super);
    function AppendChatMessageUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppendChatMessageUsingGetQueryParams)
    ], AppendChatMessageUsingGetRequest.prototype, "queryParams", void 0);
    return AppendChatMessageUsingGetRequest;
}(SpeakeasyBase));
export { AppendChatMessageUsingGetRequest };
var AppendChatMessageUsingGetResponse = /** @class */ (function (_super) {
    __extends(AppendChatMessageUsingGetResponse, _super);
    function AppendChatMessageUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppendChatMessageUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AppendChatMessageUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppendChatMessageUsingGet200ApplicationJson)
    ], AppendChatMessageUsingGetResponse.prototype, "appendChatMessageUsingGet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppendChatMessageUsingGet400ApplicationJson)
    ], AppendChatMessageUsingGetResponse.prototype, "appendChatMessageUsingGet400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppendChatMessageUsingGet401ApplicationJson)
    ], AppendChatMessageUsingGetResponse.prototype, "appendChatMessageUsingGet401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppendChatMessageUsingGet500ApplicationJson)
    ], AppendChatMessageUsingGetResponse.prototype, "appendChatMessageUsingGet500ApplicationJsonObject", void 0);
    return AppendChatMessageUsingGetResponse;
}(SpeakeasyBase));
export { AppendChatMessageUsingGetResponse };
