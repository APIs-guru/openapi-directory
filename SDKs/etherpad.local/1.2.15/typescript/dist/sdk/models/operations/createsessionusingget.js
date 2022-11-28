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
var CreateSessionUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(CreateSessionUsingGetQueryParams, _super);
    function CreateSessionUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authorID" }),
        __metadata("design:type", String)
    ], CreateSessionUsingGetQueryParams.prototype, "authorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupID" }),
        __metadata("design:type", String)
    ], CreateSessionUsingGetQueryParams.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=validUntil" }),
        __metadata("design:type", String)
    ], CreateSessionUsingGetQueryParams.prototype, "validUntil", void 0);
    return CreateSessionUsingGetQueryParams;
}(SpeakeasyBase));
export { CreateSessionUsingGetQueryParams };
var CreateSessionUsingGet200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(CreateSessionUsingGet200ApplicationJsonData, _super);
    function CreateSessionUsingGet200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sessionID" }),
        __metadata("design:type", String)
    ], CreateSessionUsingGet200ApplicationJsonData.prototype, "sessionId", void 0);
    return CreateSessionUsingGet200ApplicationJsonData;
}(SpeakeasyBase));
export { CreateSessionUsingGet200ApplicationJsonData };
var CreateSessionUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateSessionUsingGet200ApplicationJson, _super);
    function CreateSessionUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateSessionUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", CreateSessionUsingGet200ApplicationJsonData)
    ], CreateSessionUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateSessionUsingGet200ApplicationJson.prototype, "message", void 0);
    return CreateSessionUsingGet200ApplicationJson;
}(SpeakeasyBase));
export { CreateSessionUsingGet200ApplicationJson };
var CreateSessionUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateSessionUsingGet400ApplicationJson, _super);
    function CreateSessionUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateSessionUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CreateSessionUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateSessionUsingGet400ApplicationJson.prototype, "message", void 0);
    return CreateSessionUsingGet400ApplicationJson;
}(SpeakeasyBase));
export { CreateSessionUsingGet400ApplicationJson };
var CreateSessionUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateSessionUsingGet401ApplicationJson, _super);
    function CreateSessionUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateSessionUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CreateSessionUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateSessionUsingGet401ApplicationJson.prototype, "message", void 0);
    return CreateSessionUsingGet401ApplicationJson;
}(SpeakeasyBase));
export { CreateSessionUsingGet401ApplicationJson };
var CreateSessionUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateSessionUsingGet500ApplicationJson, _super);
    function CreateSessionUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateSessionUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CreateSessionUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateSessionUsingGet500ApplicationJson.prototype, "message", void 0);
    return CreateSessionUsingGet500ApplicationJson;
}(SpeakeasyBase));
export { CreateSessionUsingGet500ApplicationJson };
var CreateSessionUsingGetRequest = /** @class */ (function (_super) {
    __extends(CreateSessionUsingGetRequest, _super);
    function CreateSessionUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSessionUsingGetQueryParams)
    ], CreateSessionUsingGetRequest.prototype, "queryParams", void 0);
    return CreateSessionUsingGetRequest;
}(SpeakeasyBase));
export { CreateSessionUsingGetRequest };
var CreateSessionUsingGetResponse = /** @class */ (function (_super) {
    __extends(CreateSessionUsingGetResponse, _super);
    function CreateSessionUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSessionUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateSessionUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSessionUsingGet200ApplicationJson)
    ], CreateSessionUsingGetResponse.prototype, "createSessionUsingGet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSessionUsingGet400ApplicationJson)
    ], CreateSessionUsingGetResponse.prototype, "createSessionUsingGet400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSessionUsingGet401ApplicationJson)
    ], CreateSessionUsingGetResponse.prototype, "createSessionUsingGet401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSessionUsingGet500ApplicationJson)
    ], CreateSessionUsingGetResponse.prototype, "createSessionUsingGet500ApplicationJsonObject", void 0);
    return CreateSessionUsingGetResponse;
}(SpeakeasyBase));
export { CreateSessionUsingGetResponse };
