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
var ListAllGroupsUsingGet200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ListAllGroupsUsingGet200ApplicationJsonData, _super);
    function ListAllGroupsUsingGet200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupIDs" }),
        __metadata("design:type", Array)
    ], ListAllGroupsUsingGet200ApplicationJsonData.prototype, "groupIDs", void 0);
    return ListAllGroupsUsingGet200ApplicationJsonData;
}(SpeakeasyBase));
export { ListAllGroupsUsingGet200ApplicationJsonData };
var ListAllGroupsUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAllGroupsUsingGet200ApplicationJson, _super);
    function ListAllGroupsUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListAllGroupsUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", ListAllGroupsUsingGet200ApplicationJsonData)
    ], ListAllGroupsUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListAllGroupsUsingGet200ApplicationJson.prototype, "message", void 0);
    return ListAllGroupsUsingGet200ApplicationJson;
}(SpeakeasyBase));
export { ListAllGroupsUsingGet200ApplicationJson };
var ListAllGroupsUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAllGroupsUsingGet400ApplicationJson, _super);
    function ListAllGroupsUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListAllGroupsUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], ListAllGroupsUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListAllGroupsUsingGet400ApplicationJson.prototype, "message", void 0);
    return ListAllGroupsUsingGet400ApplicationJson;
}(SpeakeasyBase));
export { ListAllGroupsUsingGet400ApplicationJson };
var ListAllGroupsUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAllGroupsUsingGet401ApplicationJson, _super);
    function ListAllGroupsUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListAllGroupsUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], ListAllGroupsUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListAllGroupsUsingGet401ApplicationJson.prototype, "message", void 0);
    return ListAllGroupsUsingGet401ApplicationJson;
}(SpeakeasyBase));
export { ListAllGroupsUsingGet401ApplicationJson };
var ListAllGroupsUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAllGroupsUsingGet500ApplicationJson, _super);
    function ListAllGroupsUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListAllGroupsUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], ListAllGroupsUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListAllGroupsUsingGet500ApplicationJson.prototype, "message", void 0);
    return ListAllGroupsUsingGet500ApplicationJson;
}(SpeakeasyBase));
export { ListAllGroupsUsingGet500ApplicationJson };
var ListAllGroupsUsingGetResponse = /** @class */ (function (_super) {
    __extends(ListAllGroupsUsingGetResponse, _super);
    function ListAllGroupsUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListAllGroupsUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListAllGroupsUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAllGroupsUsingGet200ApplicationJson)
    ], ListAllGroupsUsingGetResponse.prototype, "listAllGroupsUsingGet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAllGroupsUsingGet400ApplicationJson)
    ], ListAllGroupsUsingGetResponse.prototype, "listAllGroupsUsingGet400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAllGroupsUsingGet401ApplicationJson)
    ], ListAllGroupsUsingGetResponse.prototype, "listAllGroupsUsingGet401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAllGroupsUsingGet500ApplicationJson)
    ], ListAllGroupsUsingGetResponse.prototype, "listAllGroupsUsingGet500ApplicationJsonObject", void 0);
    return ListAllGroupsUsingGetResponse;
}(SpeakeasyBase));
export { ListAllGroupsUsingGetResponse };
