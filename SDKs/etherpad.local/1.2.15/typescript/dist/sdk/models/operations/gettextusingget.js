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
var GetTextUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(GetTextUsingGetQueryParams, _super);
    function GetTextUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], GetTextUsingGetQueryParams.prototype, "padId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rev" }),
        __metadata("design:type", String)
    ], GetTextUsingGetQueryParams.prototype, "rev", void 0);
    return GetTextUsingGetQueryParams;
}(SpeakeasyBase));
export { GetTextUsingGetQueryParams };
var GetTextUsingGet200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetTextUsingGet200ApplicationJsonData, _super);
    function GetTextUsingGet200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], GetTextUsingGet200ApplicationJsonData.prototype, "text", void 0);
    return GetTextUsingGet200ApplicationJsonData;
}(SpeakeasyBase));
export { GetTextUsingGet200ApplicationJsonData };
var GetTextUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTextUsingGet200ApplicationJson, _super);
    function GetTextUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetTextUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", GetTextUsingGet200ApplicationJsonData)
    ], GetTextUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetTextUsingGet200ApplicationJson.prototype, "message", void 0);
    return GetTextUsingGet200ApplicationJson;
}(SpeakeasyBase));
export { GetTextUsingGet200ApplicationJson };
var GetTextUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTextUsingGet400ApplicationJson, _super);
    function GetTextUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetTextUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetTextUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetTextUsingGet400ApplicationJson.prototype, "message", void 0);
    return GetTextUsingGet400ApplicationJson;
}(SpeakeasyBase));
export { GetTextUsingGet400ApplicationJson };
var GetTextUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTextUsingGet401ApplicationJson, _super);
    function GetTextUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetTextUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetTextUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetTextUsingGet401ApplicationJson.prototype, "message", void 0);
    return GetTextUsingGet401ApplicationJson;
}(SpeakeasyBase));
export { GetTextUsingGet401ApplicationJson };
var GetTextUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTextUsingGet500ApplicationJson, _super);
    function GetTextUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetTextUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetTextUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetTextUsingGet500ApplicationJson.prototype, "message", void 0);
    return GetTextUsingGet500ApplicationJson;
}(SpeakeasyBase));
export { GetTextUsingGet500ApplicationJson };
var GetTextUsingGetRequest = /** @class */ (function (_super) {
    __extends(GetTextUsingGetRequest, _super);
    function GetTextUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTextUsingGetQueryParams)
    ], GetTextUsingGetRequest.prototype, "queryParams", void 0);
    return GetTextUsingGetRequest;
}(SpeakeasyBase));
export { GetTextUsingGetRequest };
var GetTextUsingGetResponse = /** @class */ (function (_super) {
    __extends(GetTextUsingGetResponse, _super);
    function GetTextUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTextUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTextUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTextUsingGet200ApplicationJson)
    ], GetTextUsingGetResponse.prototype, "getTextUsingGet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTextUsingGet400ApplicationJson)
    ], GetTextUsingGetResponse.prototype, "getTextUsingGet400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTextUsingGet401ApplicationJson)
    ], GetTextUsingGetResponse.prototype, "getTextUsingGet401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTextUsingGet500ApplicationJson)
    ], GetTextUsingGetResponse.prototype, "getTextUsingGet500ApplicationJsonObject", void 0);
    return GetTextUsingGetResponse;
}(SpeakeasyBase));
export { GetTextUsingGetResponse };
