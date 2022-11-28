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
var DeleteSessionUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(DeleteSessionUsingGetQueryParams, _super);
    function DeleteSessionUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sessionID" }),
        __metadata("design:type", String)
    ], DeleteSessionUsingGetQueryParams.prototype, "sessionId", void 0);
    return DeleteSessionUsingGetQueryParams;
}(SpeakeasyBase));
export { DeleteSessionUsingGetQueryParams };
var DeleteSessionUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteSessionUsingGet200ApplicationJson, _super);
    function DeleteSessionUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], DeleteSessionUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], DeleteSessionUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteSessionUsingGet200ApplicationJson.prototype, "message", void 0);
    return DeleteSessionUsingGet200ApplicationJson;
}(SpeakeasyBase));
export { DeleteSessionUsingGet200ApplicationJson };
var DeleteSessionUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteSessionUsingGet400ApplicationJson, _super);
    function DeleteSessionUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], DeleteSessionUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], DeleteSessionUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteSessionUsingGet400ApplicationJson.prototype, "message", void 0);
    return DeleteSessionUsingGet400ApplicationJson;
}(SpeakeasyBase));
export { DeleteSessionUsingGet400ApplicationJson };
var DeleteSessionUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteSessionUsingGet401ApplicationJson, _super);
    function DeleteSessionUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], DeleteSessionUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], DeleteSessionUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteSessionUsingGet401ApplicationJson.prototype, "message", void 0);
    return DeleteSessionUsingGet401ApplicationJson;
}(SpeakeasyBase));
export { DeleteSessionUsingGet401ApplicationJson };
var DeleteSessionUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteSessionUsingGet500ApplicationJson, _super);
    function DeleteSessionUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], DeleteSessionUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], DeleteSessionUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteSessionUsingGet500ApplicationJson.prototype, "message", void 0);
    return DeleteSessionUsingGet500ApplicationJson;
}(SpeakeasyBase));
export { DeleteSessionUsingGet500ApplicationJson };
var DeleteSessionUsingGetRequest = /** @class */ (function (_super) {
    __extends(DeleteSessionUsingGetRequest, _super);
    function DeleteSessionUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSessionUsingGetQueryParams)
    ], DeleteSessionUsingGetRequest.prototype, "queryParams", void 0);
    return DeleteSessionUsingGetRequest;
}(SpeakeasyBase));
export { DeleteSessionUsingGetRequest };
var DeleteSessionUsingGetResponse = /** @class */ (function (_super) {
    __extends(DeleteSessionUsingGetResponse, _super);
    function DeleteSessionUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteSessionUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteSessionUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSessionUsingGet200ApplicationJson)
    ], DeleteSessionUsingGetResponse.prototype, "deleteSessionUsingGet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSessionUsingGet400ApplicationJson)
    ], DeleteSessionUsingGetResponse.prototype, "deleteSessionUsingGet400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSessionUsingGet401ApplicationJson)
    ], DeleteSessionUsingGetResponse.prototype, "deleteSessionUsingGet401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSessionUsingGet500ApplicationJson)
    ], DeleteSessionUsingGetResponse.prototype, "deleteSessionUsingGet500ApplicationJsonObject", void 0);
    return DeleteSessionUsingGetResponse;
}(SpeakeasyBase));
export { DeleteSessionUsingGetResponse };
