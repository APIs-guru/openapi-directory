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
var ListPadsUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(ListPadsUsingGetQueryParams, _super);
    function ListPadsUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupID" }),
        __metadata("design:type", String)
    ], ListPadsUsingGetQueryParams.prototype, "groupId", void 0);
    return ListPadsUsingGetQueryParams;
}(SpeakeasyBase));
export { ListPadsUsingGetQueryParams };
var ListPadsUsingGet200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ListPadsUsingGet200ApplicationJsonData, _super);
    function ListPadsUsingGet200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=padIDs" }),
        __metadata("design:type", Array)
    ], ListPadsUsingGet200ApplicationJsonData.prototype, "padIDs", void 0);
    return ListPadsUsingGet200ApplicationJsonData;
}(SpeakeasyBase));
export { ListPadsUsingGet200ApplicationJsonData };
var ListPadsUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListPadsUsingGet200ApplicationJson, _super);
    function ListPadsUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListPadsUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", ListPadsUsingGet200ApplicationJsonData)
    ], ListPadsUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListPadsUsingGet200ApplicationJson.prototype, "message", void 0);
    return ListPadsUsingGet200ApplicationJson;
}(SpeakeasyBase));
export { ListPadsUsingGet200ApplicationJson };
var ListPadsUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(ListPadsUsingGet400ApplicationJson, _super);
    function ListPadsUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListPadsUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], ListPadsUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListPadsUsingGet400ApplicationJson.prototype, "message", void 0);
    return ListPadsUsingGet400ApplicationJson;
}(SpeakeasyBase));
export { ListPadsUsingGet400ApplicationJson };
var ListPadsUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListPadsUsingGet401ApplicationJson, _super);
    function ListPadsUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListPadsUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], ListPadsUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListPadsUsingGet401ApplicationJson.prototype, "message", void 0);
    return ListPadsUsingGet401ApplicationJson;
}(SpeakeasyBase));
export { ListPadsUsingGet401ApplicationJson };
var ListPadsUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(ListPadsUsingGet500ApplicationJson, _super);
    function ListPadsUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListPadsUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], ListPadsUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListPadsUsingGet500ApplicationJson.prototype, "message", void 0);
    return ListPadsUsingGet500ApplicationJson;
}(SpeakeasyBase));
export { ListPadsUsingGet500ApplicationJson };
var ListPadsUsingGetRequest = /** @class */ (function (_super) {
    __extends(ListPadsUsingGetRequest, _super);
    function ListPadsUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListPadsUsingGetQueryParams)
    ], ListPadsUsingGetRequest.prototype, "queryParams", void 0);
    return ListPadsUsingGetRequest;
}(SpeakeasyBase));
export { ListPadsUsingGetRequest };
var ListPadsUsingGetResponse = /** @class */ (function (_super) {
    __extends(ListPadsUsingGetResponse, _super);
    function ListPadsUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListPadsUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListPadsUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListPadsUsingGet200ApplicationJson)
    ], ListPadsUsingGetResponse.prototype, "listPadsUsingGet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListPadsUsingGet400ApplicationJson)
    ], ListPadsUsingGetResponse.prototype, "listPadsUsingGet400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListPadsUsingGet401ApplicationJson)
    ], ListPadsUsingGetResponse.prototype, "listPadsUsingGet401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListPadsUsingGet500ApplicationJson)
    ], ListPadsUsingGetResponse.prototype, "listPadsUsingGet500ApplicationJsonObject", void 0);
    return ListPadsUsingGetResponse;
}(SpeakeasyBase));
export { ListPadsUsingGetResponse };
