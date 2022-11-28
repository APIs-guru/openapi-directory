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
var ListSessionsOfAuthorUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(ListSessionsOfAuthorUsingPostQueryParams, _super);
    function ListSessionsOfAuthorUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authorID" }),
        __metadata("design:type", String)
    ], ListSessionsOfAuthorUsingPostQueryParams.prototype, "authorId", void 0);
    return ListSessionsOfAuthorUsingPostQueryParams;
}(SpeakeasyBase));
export { ListSessionsOfAuthorUsingPostQueryParams };
var ListSessionsOfAuthorUsingPost200ApplicationJsonDataSessions = /** @class */ (function (_super) {
    __extends(ListSessionsOfAuthorUsingPost200ApplicationJsonDataSessions, _super);
    function ListSessionsOfAuthorUsingPost200ApplicationJsonDataSessions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorID" }),
        __metadata("design:type", String)
    ], ListSessionsOfAuthorUsingPost200ApplicationJsonDataSessions.prototype, "authorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupID" }),
        __metadata("design:type", String)
    ], ListSessionsOfAuthorUsingPost200ApplicationJsonDataSessions.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListSessionsOfAuthorUsingPost200ApplicationJsonDataSessions.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validUntil" }),
        __metadata("design:type", Number)
    ], ListSessionsOfAuthorUsingPost200ApplicationJsonDataSessions.prototype, "validUntil", void 0);
    return ListSessionsOfAuthorUsingPost200ApplicationJsonDataSessions;
}(SpeakeasyBase));
export { ListSessionsOfAuthorUsingPost200ApplicationJsonDataSessions };
var ListSessionsOfAuthorUsingPost200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ListSessionsOfAuthorUsingPost200ApplicationJsonData, _super);
    function ListSessionsOfAuthorUsingPost200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sessions", elemType: ListSessionsOfAuthorUsingPost200ApplicationJsonDataSessions }),
        __metadata("design:type", Array)
    ], ListSessionsOfAuthorUsingPost200ApplicationJsonData.prototype, "sessions", void 0);
    return ListSessionsOfAuthorUsingPost200ApplicationJsonData;
}(SpeakeasyBase));
export { ListSessionsOfAuthorUsingPost200ApplicationJsonData };
var ListSessionsOfAuthorUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListSessionsOfAuthorUsingPost200ApplicationJson, _super);
    function ListSessionsOfAuthorUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListSessionsOfAuthorUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", ListSessionsOfAuthorUsingPost200ApplicationJsonData)
    ], ListSessionsOfAuthorUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListSessionsOfAuthorUsingPost200ApplicationJson.prototype, "message", void 0);
    return ListSessionsOfAuthorUsingPost200ApplicationJson;
}(SpeakeasyBase));
export { ListSessionsOfAuthorUsingPost200ApplicationJson };
var ListSessionsOfAuthorUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(ListSessionsOfAuthorUsingPost400ApplicationJson, _super);
    function ListSessionsOfAuthorUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListSessionsOfAuthorUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], ListSessionsOfAuthorUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListSessionsOfAuthorUsingPost400ApplicationJson.prototype, "message", void 0);
    return ListSessionsOfAuthorUsingPost400ApplicationJson;
}(SpeakeasyBase));
export { ListSessionsOfAuthorUsingPost400ApplicationJson };
var ListSessionsOfAuthorUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListSessionsOfAuthorUsingPost401ApplicationJson, _super);
    function ListSessionsOfAuthorUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListSessionsOfAuthorUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], ListSessionsOfAuthorUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListSessionsOfAuthorUsingPost401ApplicationJson.prototype, "message", void 0);
    return ListSessionsOfAuthorUsingPost401ApplicationJson;
}(SpeakeasyBase));
export { ListSessionsOfAuthorUsingPost401ApplicationJson };
var ListSessionsOfAuthorUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(ListSessionsOfAuthorUsingPost500ApplicationJson, _super);
    function ListSessionsOfAuthorUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListSessionsOfAuthorUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], ListSessionsOfAuthorUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListSessionsOfAuthorUsingPost500ApplicationJson.prototype, "message", void 0);
    return ListSessionsOfAuthorUsingPost500ApplicationJson;
}(SpeakeasyBase));
export { ListSessionsOfAuthorUsingPost500ApplicationJson };
var ListSessionsOfAuthorUsingPostRequest = /** @class */ (function (_super) {
    __extends(ListSessionsOfAuthorUsingPostRequest, _super);
    function ListSessionsOfAuthorUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSessionsOfAuthorUsingPostQueryParams)
    ], ListSessionsOfAuthorUsingPostRequest.prototype, "queryParams", void 0);
    return ListSessionsOfAuthorUsingPostRequest;
}(SpeakeasyBase));
export { ListSessionsOfAuthorUsingPostRequest };
var ListSessionsOfAuthorUsingPostResponse = /** @class */ (function (_super) {
    __extends(ListSessionsOfAuthorUsingPostResponse, _super);
    function ListSessionsOfAuthorUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSessionsOfAuthorUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListSessionsOfAuthorUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSessionsOfAuthorUsingPost200ApplicationJson)
    ], ListSessionsOfAuthorUsingPostResponse.prototype, "listSessionsOfAuthorUsingPost200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSessionsOfAuthorUsingPost400ApplicationJson)
    ], ListSessionsOfAuthorUsingPostResponse.prototype, "listSessionsOfAuthorUsingPost400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSessionsOfAuthorUsingPost401ApplicationJson)
    ], ListSessionsOfAuthorUsingPostResponse.prototype, "listSessionsOfAuthorUsingPost401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSessionsOfAuthorUsingPost500ApplicationJson)
    ], ListSessionsOfAuthorUsingPostResponse.prototype, "listSessionsOfAuthorUsingPost500ApplicationJsonObject", void 0);
    return ListSessionsOfAuthorUsingPostResponse;
}(SpeakeasyBase));
export { ListSessionsOfAuthorUsingPostResponse };
