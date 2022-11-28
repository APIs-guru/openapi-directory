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
var CreateAuthorUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(CreateAuthorUsingGetQueryParams, _super);
    function CreateAuthorUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], CreateAuthorUsingGetQueryParams.prototype, "name", void 0);
    return CreateAuthorUsingGetQueryParams;
}(SpeakeasyBase));
export { CreateAuthorUsingGetQueryParams };
var CreateAuthorUsingGet200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(CreateAuthorUsingGet200ApplicationJsonData, _super);
    function CreateAuthorUsingGet200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorID" }),
        __metadata("design:type", String)
    ], CreateAuthorUsingGet200ApplicationJsonData.prototype, "authorId", void 0);
    return CreateAuthorUsingGet200ApplicationJsonData;
}(SpeakeasyBase));
export { CreateAuthorUsingGet200ApplicationJsonData };
var CreateAuthorUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateAuthorUsingGet200ApplicationJson, _super);
    function CreateAuthorUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateAuthorUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", CreateAuthorUsingGet200ApplicationJsonData)
    ], CreateAuthorUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateAuthorUsingGet200ApplicationJson.prototype, "message", void 0);
    return CreateAuthorUsingGet200ApplicationJson;
}(SpeakeasyBase));
export { CreateAuthorUsingGet200ApplicationJson };
var CreateAuthorUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateAuthorUsingGet400ApplicationJson, _super);
    function CreateAuthorUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateAuthorUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CreateAuthorUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateAuthorUsingGet400ApplicationJson.prototype, "message", void 0);
    return CreateAuthorUsingGet400ApplicationJson;
}(SpeakeasyBase));
export { CreateAuthorUsingGet400ApplicationJson };
var CreateAuthorUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateAuthorUsingGet401ApplicationJson, _super);
    function CreateAuthorUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateAuthorUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CreateAuthorUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateAuthorUsingGet401ApplicationJson.prototype, "message", void 0);
    return CreateAuthorUsingGet401ApplicationJson;
}(SpeakeasyBase));
export { CreateAuthorUsingGet401ApplicationJson };
var CreateAuthorUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateAuthorUsingGet500ApplicationJson, _super);
    function CreateAuthorUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateAuthorUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CreateAuthorUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateAuthorUsingGet500ApplicationJson.prototype, "message", void 0);
    return CreateAuthorUsingGet500ApplicationJson;
}(SpeakeasyBase));
export { CreateAuthorUsingGet500ApplicationJson };
var CreateAuthorUsingGetRequest = /** @class */ (function (_super) {
    __extends(CreateAuthorUsingGetRequest, _super);
    function CreateAuthorUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAuthorUsingGetQueryParams)
    ], CreateAuthorUsingGetRequest.prototype, "queryParams", void 0);
    return CreateAuthorUsingGetRequest;
}(SpeakeasyBase));
export { CreateAuthorUsingGetRequest };
var CreateAuthorUsingGetResponse = /** @class */ (function (_super) {
    __extends(CreateAuthorUsingGetResponse, _super);
    function CreateAuthorUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateAuthorUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateAuthorUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAuthorUsingGet200ApplicationJson)
    ], CreateAuthorUsingGetResponse.prototype, "createAuthorUsingGet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAuthorUsingGet400ApplicationJson)
    ], CreateAuthorUsingGetResponse.prototype, "createAuthorUsingGet400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAuthorUsingGet401ApplicationJson)
    ], CreateAuthorUsingGetResponse.prototype, "createAuthorUsingGet401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAuthorUsingGet500ApplicationJson)
    ], CreateAuthorUsingGetResponse.prototype, "createAuthorUsingGet500ApplicationJsonObject", void 0);
    return CreateAuthorUsingGetResponse;
}(SpeakeasyBase));
export { CreateAuthorUsingGetResponse };
