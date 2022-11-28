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
var GetStatsUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetStatsUsingGet200ApplicationJson, _super);
    function GetStatsUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetStatsUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetStatsUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetStatsUsingGet200ApplicationJson.prototype, "message", void 0);
    return GetStatsUsingGet200ApplicationJson;
}(SpeakeasyBase));
export { GetStatsUsingGet200ApplicationJson };
var GetStatsUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetStatsUsingGet400ApplicationJson, _super);
    function GetStatsUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetStatsUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetStatsUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetStatsUsingGet400ApplicationJson.prototype, "message", void 0);
    return GetStatsUsingGet400ApplicationJson;
}(SpeakeasyBase));
export { GetStatsUsingGet400ApplicationJson };
var GetStatsUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetStatsUsingGet401ApplicationJson, _super);
    function GetStatsUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetStatsUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetStatsUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetStatsUsingGet401ApplicationJson.prototype, "message", void 0);
    return GetStatsUsingGet401ApplicationJson;
}(SpeakeasyBase));
export { GetStatsUsingGet401ApplicationJson };
var GetStatsUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetStatsUsingGet500ApplicationJson, _super);
    function GetStatsUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetStatsUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetStatsUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetStatsUsingGet500ApplicationJson.prototype, "message", void 0);
    return GetStatsUsingGet500ApplicationJson;
}(SpeakeasyBase));
export { GetStatsUsingGet500ApplicationJson };
var GetStatsUsingGetResponse = /** @class */ (function (_super) {
    __extends(GetStatsUsingGetResponse, _super);
    function GetStatsUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetStatsUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetStatsUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetStatsUsingGet200ApplicationJson)
    ], GetStatsUsingGetResponse.prototype, "getStatsUsingGet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetStatsUsingGet400ApplicationJson)
    ], GetStatsUsingGetResponse.prototype, "getStatsUsingGet400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetStatsUsingGet401ApplicationJson)
    ], GetStatsUsingGetResponse.prototype, "getStatsUsingGet401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetStatsUsingGet500ApplicationJson)
    ], GetStatsUsingGetResponse.prototype, "getStatsUsingGet500ApplicationJsonObject", void 0);
    return GetStatsUsingGetResponse;
}(SpeakeasyBase));
export { GetStatsUsingGetResponse };
