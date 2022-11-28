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
var SendClientsMessageUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(SendClientsMessageUsingGetQueryParams, _super);
    function SendClientsMessageUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=msg" }),
        __metadata("design:type", String)
    ], SendClientsMessageUsingGetQueryParams.prototype, "msg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], SendClientsMessageUsingGetQueryParams.prototype, "padId", void 0);
    return SendClientsMessageUsingGetQueryParams;
}(SpeakeasyBase));
export { SendClientsMessageUsingGetQueryParams };
var SendClientsMessageUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(SendClientsMessageUsingGet200ApplicationJson, _super);
    function SendClientsMessageUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SendClientsMessageUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], SendClientsMessageUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SendClientsMessageUsingGet200ApplicationJson.prototype, "message", void 0);
    return SendClientsMessageUsingGet200ApplicationJson;
}(SpeakeasyBase));
export { SendClientsMessageUsingGet200ApplicationJson };
var SendClientsMessageUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(SendClientsMessageUsingGet400ApplicationJson, _super);
    function SendClientsMessageUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SendClientsMessageUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], SendClientsMessageUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SendClientsMessageUsingGet400ApplicationJson.prototype, "message", void 0);
    return SendClientsMessageUsingGet400ApplicationJson;
}(SpeakeasyBase));
export { SendClientsMessageUsingGet400ApplicationJson };
var SendClientsMessageUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(SendClientsMessageUsingGet401ApplicationJson, _super);
    function SendClientsMessageUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SendClientsMessageUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], SendClientsMessageUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SendClientsMessageUsingGet401ApplicationJson.prototype, "message", void 0);
    return SendClientsMessageUsingGet401ApplicationJson;
}(SpeakeasyBase));
export { SendClientsMessageUsingGet401ApplicationJson };
var SendClientsMessageUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(SendClientsMessageUsingGet500ApplicationJson, _super);
    function SendClientsMessageUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SendClientsMessageUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], SendClientsMessageUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SendClientsMessageUsingGet500ApplicationJson.prototype, "message", void 0);
    return SendClientsMessageUsingGet500ApplicationJson;
}(SpeakeasyBase));
export { SendClientsMessageUsingGet500ApplicationJson };
var SendClientsMessageUsingGetRequest = /** @class */ (function (_super) {
    __extends(SendClientsMessageUsingGetRequest, _super);
    function SendClientsMessageUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SendClientsMessageUsingGetQueryParams)
    ], SendClientsMessageUsingGetRequest.prototype, "queryParams", void 0);
    return SendClientsMessageUsingGetRequest;
}(SpeakeasyBase));
export { SendClientsMessageUsingGetRequest };
var SendClientsMessageUsingGetResponse = /** @class */ (function (_super) {
    __extends(SendClientsMessageUsingGetResponse, _super);
    function SendClientsMessageUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SendClientsMessageUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SendClientsMessageUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SendClientsMessageUsingGet200ApplicationJson)
    ], SendClientsMessageUsingGetResponse.prototype, "sendClientsMessageUsingGet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SendClientsMessageUsingGet400ApplicationJson)
    ], SendClientsMessageUsingGetResponse.prototype, "sendClientsMessageUsingGet400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SendClientsMessageUsingGet401ApplicationJson)
    ], SendClientsMessageUsingGetResponse.prototype, "sendClientsMessageUsingGet401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SendClientsMessageUsingGet500ApplicationJson)
    ], SendClientsMessageUsingGetResponse.prototype, "sendClientsMessageUsingGet500ApplicationJsonObject", void 0);
    return SendClientsMessageUsingGetResponse;
}(SpeakeasyBase));
export { SendClientsMessageUsingGetResponse };
