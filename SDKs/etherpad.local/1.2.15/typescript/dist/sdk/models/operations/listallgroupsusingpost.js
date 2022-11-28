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
var ListAllGroupsUsingPost200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ListAllGroupsUsingPost200ApplicationJsonData, _super);
    function ListAllGroupsUsingPost200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupIDs" }),
        __metadata("design:type", Array)
    ], ListAllGroupsUsingPost200ApplicationJsonData.prototype, "groupIDs", void 0);
    return ListAllGroupsUsingPost200ApplicationJsonData;
}(SpeakeasyBase));
export { ListAllGroupsUsingPost200ApplicationJsonData };
var ListAllGroupsUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAllGroupsUsingPost200ApplicationJson, _super);
    function ListAllGroupsUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListAllGroupsUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", ListAllGroupsUsingPost200ApplicationJsonData)
    ], ListAllGroupsUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListAllGroupsUsingPost200ApplicationJson.prototype, "message", void 0);
    return ListAllGroupsUsingPost200ApplicationJson;
}(SpeakeasyBase));
export { ListAllGroupsUsingPost200ApplicationJson };
var ListAllGroupsUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAllGroupsUsingPost400ApplicationJson, _super);
    function ListAllGroupsUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListAllGroupsUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], ListAllGroupsUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListAllGroupsUsingPost400ApplicationJson.prototype, "message", void 0);
    return ListAllGroupsUsingPost400ApplicationJson;
}(SpeakeasyBase));
export { ListAllGroupsUsingPost400ApplicationJson };
var ListAllGroupsUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAllGroupsUsingPost401ApplicationJson, _super);
    function ListAllGroupsUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListAllGroupsUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], ListAllGroupsUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListAllGroupsUsingPost401ApplicationJson.prototype, "message", void 0);
    return ListAllGroupsUsingPost401ApplicationJson;
}(SpeakeasyBase));
export { ListAllGroupsUsingPost401ApplicationJson };
var ListAllGroupsUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAllGroupsUsingPost500ApplicationJson, _super);
    function ListAllGroupsUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListAllGroupsUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], ListAllGroupsUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListAllGroupsUsingPost500ApplicationJson.prototype, "message", void 0);
    return ListAllGroupsUsingPost500ApplicationJson;
}(SpeakeasyBase));
export { ListAllGroupsUsingPost500ApplicationJson };
var ListAllGroupsUsingPostResponse = /** @class */ (function (_super) {
    __extends(ListAllGroupsUsingPostResponse, _super);
    function ListAllGroupsUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListAllGroupsUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListAllGroupsUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAllGroupsUsingPost200ApplicationJson)
    ], ListAllGroupsUsingPostResponse.prototype, "listAllGroupsUsingPost200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAllGroupsUsingPost400ApplicationJson)
    ], ListAllGroupsUsingPostResponse.prototype, "listAllGroupsUsingPost400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAllGroupsUsingPost401ApplicationJson)
    ], ListAllGroupsUsingPostResponse.prototype, "listAllGroupsUsingPost401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAllGroupsUsingPost500ApplicationJson)
    ], ListAllGroupsUsingPostResponse.prototype, "listAllGroupsUsingPost500ApplicationJsonObject", void 0);
    return ListAllGroupsUsingPostResponse;
}(SpeakeasyBase));
export { ListAllGroupsUsingPostResponse };
