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
var GetHtmlUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(GetHtmlUsingGetQueryParams, _super);
    function GetHtmlUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], GetHtmlUsingGetQueryParams.prototype, "padId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rev" }),
        __metadata("design:type", String)
    ], GetHtmlUsingGetQueryParams.prototype, "rev", void 0);
    return GetHtmlUsingGetQueryParams;
}(SpeakeasyBase));
export { GetHtmlUsingGetQueryParams };
var GetHtmlUsingGet200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetHtmlUsingGet200ApplicationJsonData, _super);
    function GetHtmlUsingGet200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html" }),
        __metadata("design:type", String)
    ], GetHtmlUsingGet200ApplicationJsonData.prototype, "html", void 0);
    return GetHtmlUsingGet200ApplicationJsonData;
}(SpeakeasyBase));
export { GetHtmlUsingGet200ApplicationJsonData };
var GetHtmlUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetHtmlUsingGet200ApplicationJson, _super);
    function GetHtmlUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetHtmlUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", GetHtmlUsingGet200ApplicationJsonData)
    ], GetHtmlUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetHtmlUsingGet200ApplicationJson.prototype, "message", void 0);
    return GetHtmlUsingGet200ApplicationJson;
}(SpeakeasyBase));
export { GetHtmlUsingGet200ApplicationJson };
var GetHtmlUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetHtmlUsingGet400ApplicationJson, _super);
    function GetHtmlUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetHtmlUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetHtmlUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetHtmlUsingGet400ApplicationJson.prototype, "message", void 0);
    return GetHtmlUsingGet400ApplicationJson;
}(SpeakeasyBase));
export { GetHtmlUsingGet400ApplicationJson };
var GetHtmlUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetHtmlUsingGet401ApplicationJson, _super);
    function GetHtmlUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetHtmlUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetHtmlUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetHtmlUsingGet401ApplicationJson.prototype, "message", void 0);
    return GetHtmlUsingGet401ApplicationJson;
}(SpeakeasyBase));
export { GetHtmlUsingGet401ApplicationJson };
var GetHtmlUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetHtmlUsingGet500ApplicationJson, _super);
    function GetHtmlUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetHtmlUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetHtmlUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetHtmlUsingGet500ApplicationJson.prototype, "message", void 0);
    return GetHtmlUsingGet500ApplicationJson;
}(SpeakeasyBase));
export { GetHtmlUsingGet500ApplicationJson };
var GetHtmlUsingGetRequest = /** @class */ (function (_super) {
    __extends(GetHtmlUsingGetRequest, _super);
    function GetHtmlUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetHtmlUsingGetQueryParams)
    ], GetHtmlUsingGetRequest.prototype, "queryParams", void 0);
    return GetHtmlUsingGetRequest;
}(SpeakeasyBase));
export { GetHtmlUsingGetRequest };
var GetHtmlUsingGetResponse = /** @class */ (function (_super) {
    __extends(GetHtmlUsingGetResponse, _super);
    function GetHtmlUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetHtmlUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetHtmlUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetHtmlUsingGet200ApplicationJson)
    ], GetHtmlUsingGetResponse.prototype, "getHtmlUsingGet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetHtmlUsingGet400ApplicationJson)
    ], GetHtmlUsingGetResponse.prototype, "getHtmlUsingGet400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetHtmlUsingGet401ApplicationJson)
    ], GetHtmlUsingGetResponse.prototype, "getHtmlUsingGet401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetHtmlUsingGet500ApplicationJson)
    ], GetHtmlUsingGetResponse.prototype, "getHtmlUsingGet500ApplicationJsonObject", void 0);
    return GetHtmlUsingGetResponse;
}(SpeakeasyBase));
export { GetHtmlUsingGetResponse };
