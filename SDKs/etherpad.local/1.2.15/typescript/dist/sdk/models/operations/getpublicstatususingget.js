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
var GetPublicStatusUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(GetPublicStatusUsingGetQueryParams, _super);
    function GetPublicStatusUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], GetPublicStatusUsingGetQueryParams.prototype, "padId", void 0);
    return GetPublicStatusUsingGetQueryParams;
}(SpeakeasyBase));
export { GetPublicStatusUsingGetQueryParams };
var GetPublicStatusUsingGet200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetPublicStatusUsingGet200ApplicationJsonData, _super);
    function GetPublicStatusUsingGet200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publicStatus" }),
        __metadata("design:type", Boolean)
    ], GetPublicStatusUsingGet200ApplicationJsonData.prototype, "publicStatus", void 0);
    return GetPublicStatusUsingGet200ApplicationJsonData;
}(SpeakeasyBase));
export { GetPublicStatusUsingGet200ApplicationJsonData };
var GetPublicStatusUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPublicStatusUsingGet200ApplicationJson, _super);
    function GetPublicStatusUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetPublicStatusUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", GetPublicStatusUsingGet200ApplicationJsonData)
    ], GetPublicStatusUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetPublicStatusUsingGet200ApplicationJson.prototype, "message", void 0);
    return GetPublicStatusUsingGet200ApplicationJson;
}(SpeakeasyBase));
export { GetPublicStatusUsingGet200ApplicationJson };
var GetPublicStatusUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPublicStatusUsingGet400ApplicationJson, _super);
    function GetPublicStatusUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetPublicStatusUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetPublicStatusUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetPublicStatusUsingGet400ApplicationJson.prototype, "message", void 0);
    return GetPublicStatusUsingGet400ApplicationJson;
}(SpeakeasyBase));
export { GetPublicStatusUsingGet400ApplicationJson };
var GetPublicStatusUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPublicStatusUsingGet401ApplicationJson, _super);
    function GetPublicStatusUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetPublicStatusUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetPublicStatusUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetPublicStatusUsingGet401ApplicationJson.prototype, "message", void 0);
    return GetPublicStatusUsingGet401ApplicationJson;
}(SpeakeasyBase));
export { GetPublicStatusUsingGet401ApplicationJson };
var GetPublicStatusUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPublicStatusUsingGet500ApplicationJson, _super);
    function GetPublicStatusUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetPublicStatusUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetPublicStatusUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetPublicStatusUsingGet500ApplicationJson.prototype, "message", void 0);
    return GetPublicStatusUsingGet500ApplicationJson;
}(SpeakeasyBase));
export { GetPublicStatusUsingGet500ApplicationJson };
var GetPublicStatusUsingGetRequest = /** @class */ (function (_super) {
    __extends(GetPublicStatusUsingGetRequest, _super);
    function GetPublicStatusUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPublicStatusUsingGetQueryParams)
    ], GetPublicStatusUsingGetRequest.prototype, "queryParams", void 0);
    return GetPublicStatusUsingGetRequest;
}(SpeakeasyBase));
export { GetPublicStatusUsingGetRequest };
var GetPublicStatusUsingGetResponse = /** @class */ (function (_super) {
    __extends(GetPublicStatusUsingGetResponse, _super);
    function GetPublicStatusUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPublicStatusUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPublicStatusUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPublicStatusUsingGet200ApplicationJson)
    ], GetPublicStatusUsingGetResponse.prototype, "getPublicStatusUsingGet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPublicStatusUsingGet400ApplicationJson)
    ], GetPublicStatusUsingGetResponse.prototype, "getPublicStatusUsingGet400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPublicStatusUsingGet401ApplicationJson)
    ], GetPublicStatusUsingGetResponse.prototype, "getPublicStatusUsingGet401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPublicStatusUsingGet500ApplicationJson)
    ], GetPublicStatusUsingGetResponse.prototype, "getPublicStatusUsingGet500ApplicationJsonObject", void 0);
    return GetPublicStatusUsingGetResponse;
}(SpeakeasyBase));
export { GetPublicStatusUsingGetResponse };
