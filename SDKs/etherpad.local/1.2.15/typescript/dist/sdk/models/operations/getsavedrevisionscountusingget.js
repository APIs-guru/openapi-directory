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
var GetSavedRevisionsCountUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(GetSavedRevisionsCountUsingGetQueryParams, _super);
    function GetSavedRevisionsCountUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], GetSavedRevisionsCountUsingGetQueryParams.prototype, "padId", void 0);
    return GetSavedRevisionsCountUsingGetQueryParams;
}(SpeakeasyBase));
export { GetSavedRevisionsCountUsingGetQueryParams };
var GetSavedRevisionsCountUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSavedRevisionsCountUsingGet200ApplicationJson, _super);
    function GetSavedRevisionsCountUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetSavedRevisionsCountUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetSavedRevisionsCountUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSavedRevisionsCountUsingGet200ApplicationJson.prototype, "message", void 0);
    return GetSavedRevisionsCountUsingGet200ApplicationJson;
}(SpeakeasyBase));
export { GetSavedRevisionsCountUsingGet200ApplicationJson };
var GetSavedRevisionsCountUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSavedRevisionsCountUsingGet400ApplicationJson, _super);
    function GetSavedRevisionsCountUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetSavedRevisionsCountUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetSavedRevisionsCountUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSavedRevisionsCountUsingGet400ApplicationJson.prototype, "message", void 0);
    return GetSavedRevisionsCountUsingGet400ApplicationJson;
}(SpeakeasyBase));
export { GetSavedRevisionsCountUsingGet400ApplicationJson };
var GetSavedRevisionsCountUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSavedRevisionsCountUsingGet401ApplicationJson, _super);
    function GetSavedRevisionsCountUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetSavedRevisionsCountUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetSavedRevisionsCountUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSavedRevisionsCountUsingGet401ApplicationJson.prototype, "message", void 0);
    return GetSavedRevisionsCountUsingGet401ApplicationJson;
}(SpeakeasyBase));
export { GetSavedRevisionsCountUsingGet401ApplicationJson };
var GetSavedRevisionsCountUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSavedRevisionsCountUsingGet500ApplicationJson, _super);
    function GetSavedRevisionsCountUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetSavedRevisionsCountUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetSavedRevisionsCountUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSavedRevisionsCountUsingGet500ApplicationJson.prototype, "message", void 0);
    return GetSavedRevisionsCountUsingGet500ApplicationJson;
}(SpeakeasyBase));
export { GetSavedRevisionsCountUsingGet500ApplicationJson };
var GetSavedRevisionsCountUsingGetRequest = /** @class */ (function (_super) {
    __extends(GetSavedRevisionsCountUsingGetRequest, _super);
    function GetSavedRevisionsCountUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedRevisionsCountUsingGetQueryParams)
    ], GetSavedRevisionsCountUsingGetRequest.prototype, "queryParams", void 0);
    return GetSavedRevisionsCountUsingGetRequest;
}(SpeakeasyBase));
export { GetSavedRevisionsCountUsingGetRequest };
var GetSavedRevisionsCountUsingGetResponse = /** @class */ (function (_super) {
    __extends(GetSavedRevisionsCountUsingGetResponse, _super);
    function GetSavedRevisionsCountUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSavedRevisionsCountUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSavedRevisionsCountUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedRevisionsCountUsingGet200ApplicationJson)
    ], GetSavedRevisionsCountUsingGetResponse.prototype, "getSavedRevisionsCountUsingGet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedRevisionsCountUsingGet400ApplicationJson)
    ], GetSavedRevisionsCountUsingGetResponse.prototype, "getSavedRevisionsCountUsingGet400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedRevisionsCountUsingGet401ApplicationJson)
    ], GetSavedRevisionsCountUsingGetResponse.prototype, "getSavedRevisionsCountUsingGet401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedRevisionsCountUsingGet500ApplicationJson)
    ], GetSavedRevisionsCountUsingGetResponse.prototype, "getSavedRevisionsCountUsingGet500ApplicationJsonObject", void 0);
    return GetSavedRevisionsCountUsingGetResponse;
}(SpeakeasyBase));
export { GetSavedRevisionsCountUsingGetResponse };
