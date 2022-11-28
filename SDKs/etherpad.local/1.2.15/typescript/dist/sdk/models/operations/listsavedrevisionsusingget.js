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
var ListSavedRevisionsUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(ListSavedRevisionsUsingGetQueryParams, _super);
    function ListSavedRevisionsUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], ListSavedRevisionsUsingGetQueryParams.prototype, "padId", void 0);
    return ListSavedRevisionsUsingGetQueryParams;
}(SpeakeasyBase));
export { ListSavedRevisionsUsingGetQueryParams };
var ListSavedRevisionsUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListSavedRevisionsUsingGet200ApplicationJson, _super);
    function ListSavedRevisionsUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListSavedRevisionsUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], ListSavedRevisionsUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListSavedRevisionsUsingGet200ApplicationJson.prototype, "message", void 0);
    return ListSavedRevisionsUsingGet200ApplicationJson;
}(SpeakeasyBase));
export { ListSavedRevisionsUsingGet200ApplicationJson };
var ListSavedRevisionsUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(ListSavedRevisionsUsingGet400ApplicationJson, _super);
    function ListSavedRevisionsUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListSavedRevisionsUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], ListSavedRevisionsUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListSavedRevisionsUsingGet400ApplicationJson.prototype, "message", void 0);
    return ListSavedRevisionsUsingGet400ApplicationJson;
}(SpeakeasyBase));
export { ListSavedRevisionsUsingGet400ApplicationJson };
var ListSavedRevisionsUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListSavedRevisionsUsingGet401ApplicationJson, _super);
    function ListSavedRevisionsUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListSavedRevisionsUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], ListSavedRevisionsUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListSavedRevisionsUsingGet401ApplicationJson.prototype, "message", void 0);
    return ListSavedRevisionsUsingGet401ApplicationJson;
}(SpeakeasyBase));
export { ListSavedRevisionsUsingGet401ApplicationJson };
var ListSavedRevisionsUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(ListSavedRevisionsUsingGet500ApplicationJson, _super);
    function ListSavedRevisionsUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListSavedRevisionsUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], ListSavedRevisionsUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListSavedRevisionsUsingGet500ApplicationJson.prototype, "message", void 0);
    return ListSavedRevisionsUsingGet500ApplicationJson;
}(SpeakeasyBase));
export { ListSavedRevisionsUsingGet500ApplicationJson };
var ListSavedRevisionsUsingGetRequest = /** @class */ (function (_super) {
    __extends(ListSavedRevisionsUsingGetRequest, _super);
    function ListSavedRevisionsUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSavedRevisionsUsingGetQueryParams)
    ], ListSavedRevisionsUsingGetRequest.prototype, "queryParams", void 0);
    return ListSavedRevisionsUsingGetRequest;
}(SpeakeasyBase));
export { ListSavedRevisionsUsingGetRequest };
var ListSavedRevisionsUsingGetResponse = /** @class */ (function (_super) {
    __extends(ListSavedRevisionsUsingGetResponse, _super);
    function ListSavedRevisionsUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSavedRevisionsUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListSavedRevisionsUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSavedRevisionsUsingGet200ApplicationJson)
    ], ListSavedRevisionsUsingGetResponse.prototype, "listSavedRevisionsUsingGet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSavedRevisionsUsingGet400ApplicationJson)
    ], ListSavedRevisionsUsingGetResponse.prototype, "listSavedRevisionsUsingGet400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSavedRevisionsUsingGet401ApplicationJson)
    ], ListSavedRevisionsUsingGetResponse.prototype, "listSavedRevisionsUsingGet401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSavedRevisionsUsingGet500ApplicationJson)
    ], ListSavedRevisionsUsingGetResponse.prototype, "listSavedRevisionsUsingGet500ApplicationJsonObject", void 0);
    return ListSavedRevisionsUsingGetResponse;
}(SpeakeasyBase));
export { ListSavedRevisionsUsingGetResponse };
