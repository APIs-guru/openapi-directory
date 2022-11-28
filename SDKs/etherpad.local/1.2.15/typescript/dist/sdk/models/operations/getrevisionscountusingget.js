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
var GetRevisionsCountUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(GetRevisionsCountUsingGetQueryParams, _super);
    function GetRevisionsCountUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], GetRevisionsCountUsingGetQueryParams.prototype, "padId", void 0);
    return GetRevisionsCountUsingGetQueryParams;
}(SpeakeasyBase));
export { GetRevisionsCountUsingGetQueryParams };
var GetRevisionsCountUsingGet200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetRevisionsCountUsingGet200ApplicationJsonData, _super);
    function GetRevisionsCountUsingGet200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revisions" }),
        __metadata("design:type", Number)
    ], GetRevisionsCountUsingGet200ApplicationJsonData.prototype, "revisions", void 0);
    return GetRevisionsCountUsingGet200ApplicationJsonData;
}(SpeakeasyBase));
export { GetRevisionsCountUsingGet200ApplicationJsonData };
var GetRevisionsCountUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetRevisionsCountUsingGet200ApplicationJson, _super);
    function GetRevisionsCountUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetRevisionsCountUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", GetRevisionsCountUsingGet200ApplicationJsonData)
    ], GetRevisionsCountUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetRevisionsCountUsingGet200ApplicationJson.prototype, "message", void 0);
    return GetRevisionsCountUsingGet200ApplicationJson;
}(SpeakeasyBase));
export { GetRevisionsCountUsingGet200ApplicationJson };
var GetRevisionsCountUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetRevisionsCountUsingGet400ApplicationJson, _super);
    function GetRevisionsCountUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetRevisionsCountUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetRevisionsCountUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetRevisionsCountUsingGet400ApplicationJson.prototype, "message", void 0);
    return GetRevisionsCountUsingGet400ApplicationJson;
}(SpeakeasyBase));
export { GetRevisionsCountUsingGet400ApplicationJson };
var GetRevisionsCountUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetRevisionsCountUsingGet401ApplicationJson, _super);
    function GetRevisionsCountUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetRevisionsCountUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetRevisionsCountUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetRevisionsCountUsingGet401ApplicationJson.prototype, "message", void 0);
    return GetRevisionsCountUsingGet401ApplicationJson;
}(SpeakeasyBase));
export { GetRevisionsCountUsingGet401ApplicationJson };
var GetRevisionsCountUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetRevisionsCountUsingGet500ApplicationJson, _super);
    function GetRevisionsCountUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetRevisionsCountUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetRevisionsCountUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetRevisionsCountUsingGet500ApplicationJson.prototype, "message", void 0);
    return GetRevisionsCountUsingGet500ApplicationJson;
}(SpeakeasyBase));
export { GetRevisionsCountUsingGet500ApplicationJson };
var GetRevisionsCountUsingGetRequest = /** @class */ (function (_super) {
    __extends(GetRevisionsCountUsingGetRequest, _super);
    function GetRevisionsCountUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRevisionsCountUsingGetQueryParams)
    ], GetRevisionsCountUsingGetRequest.prototype, "queryParams", void 0);
    return GetRevisionsCountUsingGetRequest;
}(SpeakeasyBase));
export { GetRevisionsCountUsingGetRequest };
var GetRevisionsCountUsingGetResponse = /** @class */ (function (_super) {
    __extends(GetRevisionsCountUsingGetResponse, _super);
    function GetRevisionsCountUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRevisionsCountUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRevisionsCountUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRevisionsCountUsingGet200ApplicationJson)
    ], GetRevisionsCountUsingGetResponse.prototype, "getRevisionsCountUsingGet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRevisionsCountUsingGet400ApplicationJson)
    ], GetRevisionsCountUsingGetResponse.prototype, "getRevisionsCountUsingGet400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRevisionsCountUsingGet401ApplicationJson)
    ], GetRevisionsCountUsingGetResponse.prototype, "getRevisionsCountUsingGet401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRevisionsCountUsingGet500ApplicationJson)
    ], GetRevisionsCountUsingGetResponse.prototype, "getRevisionsCountUsingGet500ApplicationJsonObject", void 0);
    return GetRevisionsCountUsingGetResponse;
}(SpeakeasyBase));
export { GetRevisionsCountUsingGetResponse };
