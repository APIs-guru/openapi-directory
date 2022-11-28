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
var AppendTextUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(AppendTextUsingGetQueryParams, _super);
    function AppendTextUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], AppendTextUsingGetQueryParams.prototype, "padId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], AppendTextUsingGetQueryParams.prototype, "text", void 0);
    return AppendTextUsingGetQueryParams;
}(SpeakeasyBase));
export { AppendTextUsingGetQueryParams };
var AppendTextUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(AppendTextUsingGet200ApplicationJson, _super);
    function AppendTextUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], AppendTextUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], AppendTextUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], AppendTextUsingGet200ApplicationJson.prototype, "message", void 0);
    return AppendTextUsingGet200ApplicationJson;
}(SpeakeasyBase));
export { AppendTextUsingGet200ApplicationJson };
var AppendTextUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(AppendTextUsingGet400ApplicationJson, _super);
    function AppendTextUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], AppendTextUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], AppendTextUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], AppendTextUsingGet400ApplicationJson.prototype, "message", void 0);
    return AppendTextUsingGet400ApplicationJson;
}(SpeakeasyBase));
export { AppendTextUsingGet400ApplicationJson };
var AppendTextUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(AppendTextUsingGet401ApplicationJson, _super);
    function AppendTextUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], AppendTextUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], AppendTextUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], AppendTextUsingGet401ApplicationJson.prototype, "message", void 0);
    return AppendTextUsingGet401ApplicationJson;
}(SpeakeasyBase));
export { AppendTextUsingGet401ApplicationJson };
var AppendTextUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(AppendTextUsingGet500ApplicationJson, _super);
    function AppendTextUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], AppendTextUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], AppendTextUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], AppendTextUsingGet500ApplicationJson.prototype, "message", void 0);
    return AppendTextUsingGet500ApplicationJson;
}(SpeakeasyBase));
export { AppendTextUsingGet500ApplicationJson };
var AppendTextUsingGetRequest = /** @class */ (function (_super) {
    __extends(AppendTextUsingGetRequest, _super);
    function AppendTextUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppendTextUsingGetQueryParams)
    ], AppendTextUsingGetRequest.prototype, "queryParams", void 0);
    return AppendTextUsingGetRequest;
}(SpeakeasyBase));
export { AppendTextUsingGetRequest };
var AppendTextUsingGetResponse = /** @class */ (function (_super) {
    __extends(AppendTextUsingGetResponse, _super);
    function AppendTextUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppendTextUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AppendTextUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppendTextUsingGet200ApplicationJson)
    ], AppendTextUsingGetResponse.prototype, "appendTextUsingGet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppendTextUsingGet400ApplicationJson)
    ], AppendTextUsingGetResponse.prototype, "appendTextUsingGet400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppendTextUsingGet401ApplicationJson)
    ], AppendTextUsingGetResponse.prototype, "appendTextUsingGet401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppendTextUsingGet500ApplicationJson)
    ], AppendTextUsingGetResponse.prototype, "appendTextUsingGet500ApplicationJsonObject", void 0);
    return AppendTextUsingGetResponse;
}(SpeakeasyBase));
export { AppendTextUsingGetResponse };
