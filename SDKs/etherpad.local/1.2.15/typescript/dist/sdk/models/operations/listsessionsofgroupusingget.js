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
var ListSessionsOfGroupUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(ListSessionsOfGroupUsingGetQueryParams, _super);
    function ListSessionsOfGroupUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupID" }),
        __metadata("design:type", String)
    ], ListSessionsOfGroupUsingGetQueryParams.prototype, "groupId", void 0);
    return ListSessionsOfGroupUsingGetQueryParams;
}(SpeakeasyBase));
export { ListSessionsOfGroupUsingGetQueryParams };
var ListSessionsOfGroupUsingGet200ApplicationJsonDataSessions = /** @class */ (function (_super) {
    __extends(ListSessionsOfGroupUsingGet200ApplicationJsonDataSessions, _super);
    function ListSessionsOfGroupUsingGet200ApplicationJsonDataSessions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorID" }),
        __metadata("design:type", String)
    ], ListSessionsOfGroupUsingGet200ApplicationJsonDataSessions.prototype, "authorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupID" }),
        __metadata("design:type", String)
    ], ListSessionsOfGroupUsingGet200ApplicationJsonDataSessions.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListSessionsOfGroupUsingGet200ApplicationJsonDataSessions.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validUntil" }),
        __metadata("design:type", Number)
    ], ListSessionsOfGroupUsingGet200ApplicationJsonDataSessions.prototype, "validUntil", void 0);
    return ListSessionsOfGroupUsingGet200ApplicationJsonDataSessions;
}(SpeakeasyBase));
export { ListSessionsOfGroupUsingGet200ApplicationJsonDataSessions };
var ListSessionsOfGroupUsingGet200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ListSessionsOfGroupUsingGet200ApplicationJsonData, _super);
    function ListSessionsOfGroupUsingGet200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sessions", elemType: ListSessionsOfGroupUsingGet200ApplicationJsonDataSessions }),
        __metadata("design:type", Array)
    ], ListSessionsOfGroupUsingGet200ApplicationJsonData.prototype, "sessions", void 0);
    return ListSessionsOfGroupUsingGet200ApplicationJsonData;
}(SpeakeasyBase));
export { ListSessionsOfGroupUsingGet200ApplicationJsonData };
var ListSessionsOfGroupUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListSessionsOfGroupUsingGet200ApplicationJson, _super);
    function ListSessionsOfGroupUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListSessionsOfGroupUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", ListSessionsOfGroupUsingGet200ApplicationJsonData)
    ], ListSessionsOfGroupUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListSessionsOfGroupUsingGet200ApplicationJson.prototype, "message", void 0);
    return ListSessionsOfGroupUsingGet200ApplicationJson;
}(SpeakeasyBase));
export { ListSessionsOfGroupUsingGet200ApplicationJson };
var ListSessionsOfGroupUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(ListSessionsOfGroupUsingGet400ApplicationJson, _super);
    function ListSessionsOfGroupUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListSessionsOfGroupUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], ListSessionsOfGroupUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListSessionsOfGroupUsingGet400ApplicationJson.prototype, "message", void 0);
    return ListSessionsOfGroupUsingGet400ApplicationJson;
}(SpeakeasyBase));
export { ListSessionsOfGroupUsingGet400ApplicationJson };
var ListSessionsOfGroupUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListSessionsOfGroupUsingGet401ApplicationJson, _super);
    function ListSessionsOfGroupUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListSessionsOfGroupUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], ListSessionsOfGroupUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListSessionsOfGroupUsingGet401ApplicationJson.prototype, "message", void 0);
    return ListSessionsOfGroupUsingGet401ApplicationJson;
}(SpeakeasyBase));
export { ListSessionsOfGroupUsingGet401ApplicationJson };
var ListSessionsOfGroupUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(ListSessionsOfGroupUsingGet500ApplicationJson, _super);
    function ListSessionsOfGroupUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListSessionsOfGroupUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], ListSessionsOfGroupUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListSessionsOfGroupUsingGet500ApplicationJson.prototype, "message", void 0);
    return ListSessionsOfGroupUsingGet500ApplicationJson;
}(SpeakeasyBase));
export { ListSessionsOfGroupUsingGet500ApplicationJson };
var ListSessionsOfGroupUsingGetRequest = /** @class */ (function (_super) {
    __extends(ListSessionsOfGroupUsingGetRequest, _super);
    function ListSessionsOfGroupUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSessionsOfGroupUsingGetQueryParams)
    ], ListSessionsOfGroupUsingGetRequest.prototype, "queryParams", void 0);
    return ListSessionsOfGroupUsingGetRequest;
}(SpeakeasyBase));
export { ListSessionsOfGroupUsingGetRequest };
var ListSessionsOfGroupUsingGetResponse = /** @class */ (function (_super) {
    __extends(ListSessionsOfGroupUsingGetResponse, _super);
    function ListSessionsOfGroupUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSessionsOfGroupUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListSessionsOfGroupUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSessionsOfGroupUsingGet200ApplicationJson)
    ], ListSessionsOfGroupUsingGetResponse.prototype, "listSessionsOfGroupUsingGet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSessionsOfGroupUsingGet400ApplicationJson)
    ], ListSessionsOfGroupUsingGetResponse.prototype, "listSessionsOfGroupUsingGet400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSessionsOfGroupUsingGet401ApplicationJson)
    ], ListSessionsOfGroupUsingGetResponse.prototype, "listSessionsOfGroupUsingGet401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSessionsOfGroupUsingGet500ApplicationJson)
    ], ListSessionsOfGroupUsingGetResponse.prototype, "listSessionsOfGroupUsingGet500ApplicationJsonObject", void 0);
    return ListSessionsOfGroupUsingGetResponse;
}(SpeakeasyBase));
export { ListSessionsOfGroupUsingGetResponse };
