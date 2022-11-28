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
var ListPadsOfAuthorUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(ListPadsOfAuthorUsingGetQueryParams, _super);
    function ListPadsOfAuthorUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authorID" }),
        __metadata("design:type", String)
    ], ListPadsOfAuthorUsingGetQueryParams.prototype, "authorId", void 0);
    return ListPadsOfAuthorUsingGetQueryParams;
}(SpeakeasyBase));
export { ListPadsOfAuthorUsingGetQueryParams };
var ListPadsOfAuthorUsingGet200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ListPadsOfAuthorUsingGet200ApplicationJsonData, _super);
    function ListPadsOfAuthorUsingGet200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=padIDs" }),
        __metadata("design:type", Array)
    ], ListPadsOfAuthorUsingGet200ApplicationJsonData.prototype, "padIDs", void 0);
    return ListPadsOfAuthorUsingGet200ApplicationJsonData;
}(SpeakeasyBase));
export { ListPadsOfAuthorUsingGet200ApplicationJsonData };
var ListPadsOfAuthorUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListPadsOfAuthorUsingGet200ApplicationJson, _super);
    function ListPadsOfAuthorUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListPadsOfAuthorUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", ListPadsOfAuthorUsingGet200ApplicationJsonData)
    ], ListPadsOfAuthorUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListPadsOfAuthorUsingGet200ApplicationJson.prototype, "message", void 0);
    return ListPadsOfAuthorUsingGet200ApplicationJson;
}(SpeakeasyBase));
export { ListPadsOfAuthorUsingGet200ApplicationJson };
var ListPadsOfAuthorUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(ListPadsOfAuthorUsingGet400ApplicationJson, _super);
    function ListPadsOfAuthorUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListPadsOfAuthorUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], ListPadsOfAuthorUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListPadsOfAuthorUsingGet400ApplicationJson.prototype, "message", void 0);
    return ListPadsOfAuthorUsingGet400ApplicationJson;
}(SpeakeasyBase));
export { ListPadsOfAuthorUsingGet400ApplicationJson };
var ListPadsOfAuthorUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListPadsOfAuthorUsingGet401ApplicationJson, _super);
    function ListPadsOfAuthorUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListPadsOfAuthorUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], ListPadsOfAuthorUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListPadsOfAuthorUsingGet401ApplicationJson.prototype, "message", void 0);
    return ListPadsOfAuthorUsingGet401ApplicationJson;
}(SpeakeasyBase));
export { ListPadsOfAuthorUsingGet401ApplicationJson };
var ListPadsOfAuthorUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(ListPadsOfAuthorUsingGet500ApplicationJson, _super);
    function ListPadsOfAuthorUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListPadsOfAuthorUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], ListPadsOfAuthorUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListPadsOfAuthorUsingGet500ApplicationJson.prototype, "message", void 0);
    return ListPadsOfAuthorUsingGet500ApplicationJson;
}(SpeakeasyBase));
export { ListPadsOfAuthorUsingGet500ApplicationJson };
var ListPadsOfAuthorUsingGetRequest = /** @class */ (function (_super) {
    __extends(ListPadsOfAuthorUsingGetRequest, _super);
    function ListPadsOfAuthorUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListPadsOfAuthorUsingGetQueryParams)
    ], ListPadsOfAuthorUsingGetRequest.prototype, "queryParams", void 0);
    return ListPadsOfAuthorUsingGetRequest;
}(SpeakeasyBase));
export { ListPadsOfAuthorUsingGetRequest };
var ListPadsOfAuthorUsingGetResponse = /** @class */ (function (_super) {
    __extends(ListPadsOfAuthorUsingGetResponse, _super);
    function ListPadsOfAuthorUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListPadsOfAuthorUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListPadsOfAuthorUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListPadsOfAuthorUsingGet200ApplicationJson)
    ], ListPadsOfAuthorUsingGetResponse.prototype, "listPadsOfAuthorUsingGet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListPadsOfAuthorUsingGet400ApplicationJson)
    ], ListPadsOfAuthorUsingGetResponse.prototype, "listPadsOfAuthorUsingGet400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListPadsOfAuthorUsingGet401ApplicationJson)
    ], ListPadsOfAuthorUsingGetResponse.prototype, "listPadsOfAuthorUsingGet401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListPadsOfAuthorUsingGet500ApplicationJson)
    ], ListPadsOfAuthorUsingGetResponse.prototype, "listPadsOfAuthorUsingGet500ApplicationJsonObject", void 0);
    return ListPadsOfAuthorUsingGetResponse;
}(SpeakeasyBase));
export { ListPadsOfAuthorUsingGetResponse };
