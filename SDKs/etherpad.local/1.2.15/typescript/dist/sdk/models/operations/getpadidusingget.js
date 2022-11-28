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
var GetPadIdUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(GetPadIdUsingGetQueryParams, _super);
    function GetPadIdUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=roID" }),
        __metadata("design:type", String)
    ], GetPadIdUsingGetQueryParams.prototype, "roId", void 0);
    return GetPadIdUsingGetQueryParams;
}(SpeakeasyBase));
export { GetPadIdUsingGetQueryParams };
var GetPadIdUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPadIdUsingGet200ApplicationJson, _super);
    function GetPadIdUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetPadIdUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetPadIdUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetPadIdUsingGet200ApplicationJson.prototype, "message", void 0);
    return GetPadIdUsingGet200ApplicationJson;
}(SpeakeasyBase));
export { GetPadIdUsingGet200ApplicationJson };
var GetPadIdUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPadIdUsingGet400ApplicationJson, _super);
    function GetPadIdUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetPadIdUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetPadIdUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetPadIdUsingGet400ApplicationJson.prototype, "message", void 0);
    return GetPadIdUsingGet400ApplicationJson;
}(SpeakeasyBase));
export { GetPadIdUsingGet400ApplicationJson };
var GetPadIdUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPadIdUsingGet401ApplicationJson, _super);
    function GetPadIdUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetPadIdUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetPadIdUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetPadIdUsingGet401ApplicationJson.prototype, "message", void 0);
    return GetPadIdUsingGet401ApplicationJson;
}(SpeakeasyBase));
export { GetPadIdUsingGet401ApplicationJson };
var GetPadIdUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPadIdUsingGet500ApplicationJson, _super);
    function GetPadIdUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetPadIdUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetPadIdUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetPadIdUsingGet500ApplicationJson.prototype, "message", void 0);
    return GetPadIdUsingGet500ApplicationJson;
}(SpeakeasyBase));
export { GetPadIdUsingGet500ApplicationJson };
var GetPadIdUsingGetRequest = /** @class */ (function (_super) {
    __extends(GetPadIdUsingGetRequest, _super);
    function GetPadIdUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPadIdUsingGetQueryParams)
    ], GetPadIdUsingGetRequest.prototype, "queryParams", void 0);
    return GetPadIdUsingGetRequest;
}(SpeakeasyBase));
export { GetPadIdUsingGetRequest };
var GetPadIdUsingGetResponse = /** @class */ (function (_super) {
    __extends(GetPadIdUsingGetResponse, _super);
    function GetPadIdUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPadIdUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPadIdUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPadIdUsingGet200ApplicationJson)
    ], GetPadIdUsingGetResponse.prototype, "getPadIdUsingGet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPadIdUsingGet400ApplicationJson)
    ], GetPadIdUsingGetResponse.prototype, "getPadIdUsingGet400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPadIdUsingGet401ApplicationJson)
    ], GetPadIdUsingGetResponse.prototype, "getPadIdUsingGet401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPadIdUsingGet500ApplicationJson)
    ], GetPadIdUsingGetResponse.prototype, "getPadIdUsingGet500ApplicationJsonObject", void 0);
    return GetPadIdUsingGetResponse;
}(SpeakeasyBase));
export { GetPadIdUsingGetResponse };
