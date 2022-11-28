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
var PadUsersCountUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(PadUsersCountUsingGetQueryParams, _super);
    function PadUsersCountUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], PadUsersCountUsingGetQueryParams.prototype, "padId", void 0);
    return PadUsersCountUsingGetQueryParams;
}(SpeakeasyBase));
export { PadUsersCountUsingGetQueryParams };
var PadUsersCountUsingGet200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(PadUsersCountUsingGet200ApplicationJsonData, _super);
    function PadUsersCountUsingGet200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=padUsersCount" }),
        __metadata("design:type", Number)
    ], PadUsersCountUsingGet200ApplicationJsonData.prototype, "padUsersCount", void 0);
    return PadUsersCountUsingGet200ApplicationJsonData;
}(SpeakeasyBase));
export { PadUsersCountUsingGet200ApplicationJsonData };
var PadUsersCountUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(PadUsersCountUsingGet200ApplicationJson, _super);
    function PadUsersCountUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], PadUsersCountUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", PadUsersCountUsingGet200ApplicationJsonData)
    ], PadUsersCountUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PadUsersCountUsingGet200ApplicationJson.prototype, "message", void 0);
    return PadUsersCountUsingGet200ApplicationJson;
}(SpeakeasyBase));
export { PadUsersCountUsingGet200ApplicationJson };
var PadUsersCountUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(PadUsersCountUsingGet400ApplicationJson, _super);
    function PadUsersCountUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], PadUsersCountUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], PadUsersCountUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PadUsersCountUsingGet400ApplicationJson.prototype, "message", void 0);
    return PadUsersCountUsingGet400ApplicationJson;
}(SpeakeasyBase));
export { PadUsersCountUsingGet400ApplicationJson };
var PadUsersCountUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(PadUsersCountUsingGet401ApplicationJson, _super);
    function PadUsersCountUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], PadUsersCountUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], PadUsersCountUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PadUsersCountUsingGet401ApplicationJson.prototype, "message", void 0);
    return PadUsersCountUsingGet401ApplicationJson;
}(SpeakeasyBase));
export { PadUsersCountUsingGet401ApplicationJson };
var PadUsersCountUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(PadUsersCountUsingGet500ApplicationJson, _super);
    function PadUsersCountUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], PadUsersCountUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], PadUsersCountUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PadUsersCountUsingGet500ApplicationJson.prototype, "message", void 0);
    return PadUsersCountUsingGet500ApplicationJson;
}(SpeakeasyBase));
export { PadUsersCountUsingGet500ApplicationJson };
var PadUsersCountUsingGetRequest = /** @class */ (function (_super) {
    __extends(PadUsersCountUsingGetRequest, _super);
    function PadUsersCountUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PadUsersCountUsingGetQueryParams)
    ], PadUsersCountUsingGetRequest.prototype, "queryParams", void 0);
    return PadUsersCountUsingGetRequest;
}(SpeakeasyBase));
export { PadUsersCountUsingGetRequest };
var PadUsersCountUsingGetResponse = /** @class */ (function (_super) {
    __extends(PadUsersCountUsingGetResponse, _super);
    function PadUsersCountUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PadUsersCountUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PadUsersCountUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PadUsersCountUsingGet200ApplicationJson)
    ], PadUsersCountUsingGetResponse.prototype, "padUsersCountUsingGet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PadUsersCountUsingGet400ApplicationJson)
    ], PadUsersCountUsingGetResponse.prototype, "padUsersCountUsingGet400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PadUsersCountUsingGet401ApplicationJson)
    ], PadUsersCountUsingGetResponse.prototype, "padUsersCountUsingGet401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PadUsersCountUsingGet500ApplicationJson)
    ], PadUsersCountUsingGetResponse.prototype, "padUsersCountUsingGet500ApplicationJsonObject", void 0);
    return PadUsersCountUsingGetResponse;
}(SpeakeasyBase));
export { PadUsersCountUsingGetResponse };
