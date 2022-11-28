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
var ListSessionsOfAuthorUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(ListSessionsOfAuthorUsingGetQueryParams, _super);
    function ListSessionsOfAuthorUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authorID" }),
        __metadata("design:type", String)
    ], ListSessionsOfAuthorUsingGetQueryParams.prototype, "authorId", void 0);
    return ListSessionsOfAuthorUsingGetQueryParams;
}(SpeakeasyBase));
export { ListSessionsOfAuthorUsingGetQueryParams };
var ListSessionsOfAuthorUsingGet200ApplicationJsonDataSessions = /** @class */ (function (_super) {
    __extends(ListSessionsOfAuthorUsingGet200ApplicationJsonDataSessions, _super);
    function ListSessionsOfAuthorUsingGet200ApplicationJsonDataSessions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorID" }),
        __metadata("design:type", String)
    ], ListSessionsOfAuthorUsingGet200ApplicationJsonDataSessions.prototype, "authorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupID" }),
        __metadata("design:type", String)
    ], ListSessionsOfAuthorUsingGet200ApplicationJsonDataSessions.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListSessionsOfAuthorUsingGet200ApplicationJsonDataSessions.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validUntil" }),
        __metadata("design:type", Number)
    ], ListSessionsOfAuthorUsingGet200ApplicationJsonDataSessions.prototype, "validUntil", void 0);
    return ListSessionsOfAuthorUsingGet200ApplicationJsonDataSessions;
}(SpeakeasyBase));
export { ListSessionsOfAuthorUsingGet200ApplicationJsonDataSessions };
var ListSessionsOfAuthorUsingGet200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ListSessionsOfAuthorUsingGet200ApplicationJsonData, _super);
    function ListSessionsOfAuthorUsingGet200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sessions", elemType: ListSessionsOfAuthorUsingGet200ApplicationJsonDataSessions }),
        __metadata("design:type", Array)
    ], ListSessionsOfAuthorUsingGet200ApplicationJsonData.prototype, "sessions", void 0);
    return ListSessionsOfAuthorUsingGet200ApplicationJsonData;
}(SpeakeasyBase));
export { ListSessionsOfAuthorUsingGet200ApplicationJsonData };
var ListSessionsOfAuthorUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListSessionsOfAuthorUsingGet200ApplicationJson, _super);
    function ListSessionsOfAuthorUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListSessionsOfAuthorUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", ListSessionsOfAuthorUsingGet200ApplicationJsonData)
    ], ListSessionsOfAuthorUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListSessionsOfAuthorUsingGet200ApplicationJson.prototype, "message", void 0);
    return ListSessionsOfAuthorUsingGet200ApplicationJson;
}(SpeakeasyBase));
export { ListSessionsOfAuthorUsingGet200ApplicationJson };
var ListSessionsOfAuthorUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(ListSessionsOfAuthorUsingGet400ApplicationJson, _super);
    function ListSessionsOfAuthorUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListSessionsOfAuthorUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], ListSessionsOfAuthorUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListSessionsOfAuthorUsingGet400ApplicationJson.prototype, "message", void 0);
    return ListSessionsOfAuthorUsingGet400ApplicationJson;
}(SpeakeasyBase));
export { ListSessionsOfAuthorUsingGet400ApplicationJson };
var ListSessionsOfAuthorUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListSessionsOfAuthorUsingGet401ApplicationJson, _super);
    function ListSessionsOfAuthorUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListSessionsOfAuthorUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], ListSessionsOfAuthorUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListSessionsOfAuthorUsingGet401ApplicationJson.prototype, "message", void 0);
    return ListSessionsOfAuthorUsingGet401ApplicationJson;
}(SpeakeasyBase));
export { ListSessionsOfAuthorUsingGet401ApplicationJson };
var ListSessionsOfAuthorUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(ListSessionsOfAuthorUsingGet500ApplicationJson, _super);
    function ListSessionsOfAuthorUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListSessionsOfAuthorUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], ListSessionsOfAuthorUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListSessionsOfAuthorUsingGet500ApplicationJson.prototype, "message", void 0);
    return ListSessionsOfAuthorUsingGet500ApplicationJson;
}(SpeakeasyBase));
export { ListSessionsOfAuthorUsingGet500ApplicationJson };
var ListSessionsOfAuthorUsingGetRequest = /** @class */ (function (_super) {
    __extends(ListSessionsOfAuthorUsingGetRequest, _super);
    function ListSessionsOfAuthorUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSessionsOfAuthorUsingGetQueryParams)
    ], ListSessionsOfAuthorUsingGetRequest.prototype, "queryParams", void 0);
    return ListSessionsOfAuthorUsingGetRequest;
}(SpeakeasyBase));
export { ListSessionsOfAuthorUsingGetRequest };
var ListSessionsOfAuthorUsingGetResponse = /** @class */ (function (_super) {
    __extends(ListSessionsOfAuthorUsingGetResponse, _super);
    function ListSessionsOfAuthorUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSessionsOfAuthorUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListSessionsOfAuthorUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSessionsOfAuthorUsingGet200ApplicationJson)
    ], ListSessionsOfAuthorUsingGetResponse.prototype, "listSessionsOfAuthorUsingGet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSessionsOfAuthorUsingGet400ApplicationJson)
    ], ListSessionsOfAuthorUsingGetResponse.prototype, "listSessionsOfAuthorUsingGet400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSessionsOfAuthorUsingGet401ApplicationJson)
    ], ListSessionsOfAuthorUsingGetResponse.prototype, "listSessionsOfAuthorUsingGet401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSessionsOfAuthorUsingGet500ApplicationJson)
    ], ListSessionsOfAuthorUsingGetResponse.prototype, "listSessionsOfAuthorUsingGet500ApplicationJsonObject", void 0);
    return ListSessionsOfAuthorUsingGetResponse;
}(SpeakeasyBase));
export { ListSessionsOfAuthorUsingGetResponse };
