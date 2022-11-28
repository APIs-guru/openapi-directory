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
var CreateGroupIfNotExistsForUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(CreateGroupIfNotExistsForUsingGetQueryParams, _super);
    function CreateGroupIfNotExistsForUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupMapper" }),
        __metadata("design:type", String)
    ], CreateGroupIfNotExistsForUsingGetQueryParams.prototype, "groupMapper", void 0);
    return CreateGroupIfNotExistsForUsingGetQueryParams;
}(SpeakeasyBase));
export { CreateGroupIfNotExistsForUsingGetQueryParams };
var CreateGroupIfNotExistsForUsingGet200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(CreateGroupIfNotExistsForUsingGet200ApplicationJsonData, _super);
    function CreateGroupIfNotExistsForUsingGet200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupID" }),
        __metadata("design:type", String)
    ], CreateGroupIfNotExistsForUsingGet200ApplicationJsonData.prototype, "groupId", void 0);
    return CreateGroupIfNotExistsForUsingGet200ApplicationJsonData;
}(SpeakeasyBase));
export { CreateGroupIfNotExistsForUsingGet200ApplicationJsonData };
var CreateGroupIfNotExistsForUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateGroupIfNotExistsForUsingGet200ApplicationJson, _super);
    function CreateGroupIfNotExistsForUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateGroupIfNotExistsForUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", CreateGroupIfNotExistsForUsingGet200ApplicationJsonData)
    ], CreateGroupIfNotExistsForUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateGroupIfNotExistsForUsingGet200ApplicationJson.prototype, "message", void 0);
    return CreateGroupIfNotExistsForUsingGet200ApplicationJson;
}(SpeakeasyBase));
export { CreateGroupIfNotExistsForUsingGet200ApplicationJson };
var CreateGroupIfNotExistsForUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateGroupIfNotExistsForUsingGet400ApplicationJson, _super);
    function CreateGroupIfNotExistsForUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateGroupIfNotExistsForUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CreateGroupIfNotExistsForUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateGroupIfNotExistsForUsingGet400ApplicationJson.prototype, "message", void 0);
    return CreateGroupIfNotExistsForUsingGet400ApplicationJson;
}(SpeakeasyBase));
export { CreateGroupIfNotExistsForUsingGet400ApplicationJson };
var CreateGroupIfNotExistsForUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateGroupIfNotExistsForUsingGet401ApplicationJson, _super);
    function CreateGroupIfNotExistsForUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateGroupIfNotExistsForUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CreateGroupIfNotExistsForUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateGroupIfNotExistsForUsingGet401ApplicationJson.prototype, "message", void 0);
    return CreateGroupIfNotExistsForUsingGet401ApplicationJson;
}(SpeakeasyBase));
export { CreateGroupIfNotExistsForUsingGet401ApplicationJson };
var CreateGroupIfNotExistsForUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateGroupIfNotExistsForUsingGet500ApplicationJson, _super);
    function CreateGroupIfNotExistsForUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateGroupIfNotExistsForUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CreateGroupIfNotExistsForUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateGroupIfNotExistsForUsingGet500ApplicationJson.prototype, "message", void 0);
    return CreateGroupIfNotExistsForUsingGet500ApplicationJson;
}(SpeakeasyBase));
export { CreateGroupIfNotExistsForUsingGet500ApplicationJson };
var CreateGroupIfNotExistsForUsingGetRequest = /** @class */ (function (_super) {
    __extends(CreateGroupIfNotExistsForUsingGetRequest, _super);
    function CreateGroupIfNotExistsForUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateGroupIfNotExistsForUsingGetQueryParams)
    ], CreateGroupIfNotExistsForUsingGetRequest.prototype, "queryParams", void 0);
    return CreateGroupIfNotExistsForUsingGetRequest;
}(SpeakeasyBase));
export { CreateGroupIfNotExistsForUsingGetRequest };
var CreateGroupIfNotExistsForUsingGetResponse = /** @class */ (function (_super) {
    __extends(CreateGroupIfNotExistsForUsingGetResponse, _super);
    function CreateGroupIfNotExistsForUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateGroupIfNotExistsForUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateGroupIfNotExistsForUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateGroupIfNotExistsForUsingGet200ApplicationJson)
    ], CreateGroupIfNotExistsForUsingGetResponse.prototype, "createGroupIfNotExistsForUsingGet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateGroupIfNotExistsForUsingGet400ApplicationJson)
    ], CreateGroupIfNotExistsForUsingGetResponse.prototype, "createGroupIfNotExistsForUsingGet400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateGroupIfNotExistsForUsingGet401ApplicationJson)
    ], CreateGroupIfNotExistsForUsingGetResponse.prototype, "createGroupIfNotExistsForUsingGet401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateGroupIfNotExistsForUsingGet500ApplicationJson)
    ], CreateGroupIfNotExistsForUsingGetResponse.prototype, "createGroupIfNotExistsForUsingGet500ApplicationJsonObject", void 0);
    return CreateGroupIfNotExistsForUsingGetResponse;
}(SpeakeasyBase));
export { CreateGroupIfNotExistsForUsingGetResponse };
