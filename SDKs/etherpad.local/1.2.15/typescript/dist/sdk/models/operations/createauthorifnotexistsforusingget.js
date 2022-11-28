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
var CreateAuthorIfNotExistsForUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(CreateAuthorIfNotExistsForUsingGetQueryParams, _super);
    function CreateAuthorIfNotExistsForUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authorMapper" }),
        __metadata("design:type", String)
    ], CreateAuthorIfNotExistsForUsingGetQueryParams.prototype, "authorMapper", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], CreateAuthorIfNotExistsForUsingGetQueryParams.prototype, "name", void 0);
    return CreateAuthorIfNotExistsForUsingGetQueryParams;
}(SpeakeasyBase));
export { CreateAuthorIfNotExistsForUsingGetQueryParams };
var CreateAuthorIfNotExistsForUsingGet200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(CreateAuthorIfNotExistsForUsingGet200ApplicationJsonData, _super);
    function CreateAuthorIfNotExistsForUsingGet200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorID" }),
        __metadata("design:type", String)
    ], CreateAuthorIfNotExistsForUsingGet200ApplicationJsonData.prototype, "authorId", void 0);
    return CreateAuthorIfNotExistsForUsingGet200ApplicationJsonData;
}(SpeakeasyBase));
export { CreateAuthorIfNotExistsForUsingGet200ApplicationJsonData };
var CreateAuthorIfNotExistsForUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateAuthorIfNotExistsForUsingGet200ApplicationJson, _super);
    function CreateAuthorIfNotExistsForUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateAuthorIfNotExistsForUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", CreateAuthorIfNotExistsForUsingGet200ApplicationJsonData)
    ], CreateAuthorIfNotExistsForUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateAuthorIfNotExistsForUsingGet200ApplicationJson.prototype, "message", void 0);
    return CreateAuthorIfNotExistsForUsingGet200ApplicationJson;
}(SpeakeasyBase));
export { CreateAuthorIfNotExistsForUsingGet200ApplicationJson };
var CreateAuthorIfNotExistsForUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateAuthorIfNotExistsForUsingGet400ApplicationJson, _super);
    function CreateAuthorIfNotExistsForUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateAuthorIfNotExistsForUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CreateAuthorIfNotExistsForUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateAuthorIfNotExistsForUsingGet400ApplicationJson.prototype, "message", void 0);
    return CreateAuthorIfNotExistsForUsingGet400ApplicationJson;
}(SpeakeasyBase));
export { CreateAuthorIfNotExistsForUsingGet400ApplicationJson };
var CreateAuthorIfNotExistsForUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateAuthorIfNotExistsForUsingGet401ApplicationJson, _super);
    function CreateAuthorIfNotExistsForUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateAuthorIfNotExistsForUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CreateAuthorIfNotExistsForUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateAuthorIfNotExistsForUsingGet401ApplicationJson.prototype, "message", void 0);
    return CreateAuthorIfNotExistsForUsingGet401ApplicationJson;
}(SpeakeasyBase));
export { CreateAuthorIfNotExistsForUsingGet401ApplicationJson };
var CreateAuthorIfNotExistsForUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateAuthorIfNotExistsForUsingGet500ApplicationJson, _super);
    function CreateAuthorIfNotExistsForUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateAuthorIfNotExistsForUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CreateAuthorIfNotExistsForUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateAuthorIfNotExistsForUsingGet500ApplicationJson.prototype, "message", void 0);
    return CreateAuthorIfNotExistsForUsingGet500ApplicationJson;
}(SpeakeasyBase));
export { CreateAuthorIfNotExistsForUsingGet500ApplicationJson };
var CreateAuthorIfNotExistsForUsingGetRequest = /** @class */ (function (_super) {
    __extends(CreateAuthorIfNotExistsForUsingGetRequest, _super);
    function CreateAuthorIfNotExistsForUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAuthorIfNotExistsForUsingGetQueryParams)
    ], CreateAuthorIfNotExistsForUsingGetRequest.prototype, "queryParams", void 0);
    return CreateAuthorIfNotExistsForUsingGetRequest;
}(SpeakeasyBase));
export { CreateAuthorIfNotExistsForUsingGetRequest };
var CreateAuthorIfNotExistsForUsingGetResponse = /** @class */ (function (_super) {
    __extends(CreateAuthorIfNotExistsForUsingGetResponse, _super);
    function CreateAuthorIfNotExistsForUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateAuthorIfNotExistsForUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateAuthorIfNotExistsForUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAuthorIfNotExistsForUsingGet200ApplicationJson)
    ], CreateAuthorIfNotExistsForUsingGetResponse.prototype, "createAuthorIfNotExistsForUsingGet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAuthorIfNotExistsForUsingGet400ApplicationJson)
    ], CreateAuthorIfNotExistsForUsingGetResponse.prototype, "createAuthorIfNotExistsForUsingGet400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAuthorIfNotExistsForUsingGet401ApplicationJson)
    ], CreateAuthorIfNotExistsForUsingGetResponse.prototype, "createAuthorIfNotExistsForUsingGet401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAuthorIfNotExistsForUsingGet500ApplicationJson)
    ], CreateAuthorIfNotExistsForUsingGetResponse.prototype, "createAuthorIfNotExistsForUsingGet500ApplicationJsonObject", void 0);
    return CreateAuthorIfNotExistsForUsingGetResponse;
}(SpeakeasyBase));
export { CreateAuthorIfNotExistsForUsingGetResponse };
