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
var SendClientsMessageUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(SendClientsMessageUsingPostQueryParams, _super);
    function SendClientsMessageUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=msg" }),
        __metadata("design:type", String)
    ], SendClientsMessageUsingPostQueryParams.prototype, "msg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], SendClientsMessageUsingPostQueryParams.prototype, "padId", void 0);
    return SendClientsMessageUsingPostQueryParams;
}(SpeakeasyBase));
export { SendClientsMessageUsingPostQueryParams };
var SendClientsMessageUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(SendClientsMessageUsingPost200ApplicationJson, _super);
    function SendClientsMessageUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SendClientsMessageUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], SendClientsMessageUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SendClientsMessageUsingPost200ApplicationJson.prototype, "message", void 0);
    return SendClientsMessageUsingPost200ApplicationJson;
}(SpeakeasyBase));
export { SendClientsMessageUsingPost200ApplicationJson };
var SendClientsMessageUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(SendClientsMessageUsingPost400ApplicationJson, _super);
    function SendClientsMessageUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SendClientsMessageUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], SendClientsMessageUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SendClientsMessageUsingPost400ApplicationJson.prototype, "message", void 0);
    return SendClientsMessageUsingPost400ApplicationJson;
}(SpeakeasyBase));
export { SendClientsMessageUsingPost400ApplicationJson };
var SendClientsMessageUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(SendClientsMessageUsingPost401ApplicationJson, _super);
    function SendClientsMessageUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SendClientsMessageUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], SendClientsMessageUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SendClientsMessageUsingPost401ApplicationJson.prototype, "message", void 0);
    return SendClientsMessageUsingPost401ApplicationJson;
}(SpeakeasyBase));
export { SendClientsMessageUsingPost401ApplicationJson };
var SendClientsMessageUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(SendClientsMessageUsingPost500ApplicationJson, _super);
    function SendClientsMessageUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SendClientsMessageUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], SendClientsMessageUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SendClientsMessageUsingPost500ApplicationJson.prototype, "message", void 0);
    return SendClientsMessageUsingPost500ApplicationJson;
}(SpeakeasyBase));
export { SendClientsMessageUsingPost500ApplicationJson };
var SendClientsMessageUsingPostRequest = /** @class */ (function (_super) {
    __extends(SendClientsMessageUsingPostRequest, _super);
    function SendClientsMessageUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SendClientsMessageUsingPostQueryParams)
    ], SendClientsMessageUsingPostRequest.prototype, "queryParams", void 0);
    return SendClientsMessageUsingPostRequest;
}(SpeakeasyBase));
export { SendClientsMessageUsingPostRequest };
var SendClientsMessageUsingPostResponse = /** @class */ (function (_super) {
    __extends(SendClientsMessageUsingPostResponse, _super);
    function SendClientsMessageUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SendClientsMessageUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SendClientsMessageUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SendClientsMessageUsingPost200ApplicationJson)
    ], SendClientsMessageUsingPostResponse.prototype, "sendClientsMessageUsingPost200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SendClientsMessageUsingPost400ApplicationJson)
    ], SendClientsMessageUsingPostResponse.prototype, "sendClientsMessageUsingPost400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SendClientsMessageUsingPost401ApplicationJson)
    ], SendClientsMessageUsingPostResponse.prototype, "sendClientsMessageUsingPost401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SendClientsMessageUsingPost500ApplicationJson)
    ], SendClientsMessageUsingPostResponse.prototype, "sendClientsMessageUsingPost500ApplicationJsonObject", void 0);
    return SendClientsMessageUsingPostResponse;
}(SpeakeasyBase));
export { SendClientsMessageUsingPostResponse };
