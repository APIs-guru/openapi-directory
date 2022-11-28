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
var CreateGroupUsingGet200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(CreateGroupUsingGet200ApplicationJsonData, _super);
    function CreateGroupUsingGet200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupID" }),
        __metadata("design:type", String)
    ], CreateGroupUsingGet200ApplicationJsonData.prototype, "groupId", void 0);
    return CreateGroupUsingGet200ApplicationJsonData;
}(SpeakeasyBase));
export { CreateGroupUsingGet200ApplicationJsonData };
var CreateGroupUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateGroupUsingGet200ApplicationJson, _super);
    function CreateGroupUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateGroupUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", CreateGroupUsingGet200ApplicationJsonData)
    ], CreateGroupUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateGroupUsingGet200ApplicationJson.prototype, "message", void 0);
    return CreateGroupUsingGet200ApplicationJson;
}(SpeakeasyBase));
export { CreateGroupUsingGet200ApplicationJson };
var CreateGroupUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateGroupUsingGet400ApplicationJson, _super);
    function CreateGroupUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateGroupUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CreateGroupUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateGroupUsingGet400ApplicationJson.prototype, "message", void 0);
    return CreateGroupUsingGet400ApplicationJson;
}(SpeakeasyBase));
export { CreateGroupUsingGet400ApplicationJson };
var CreateGroupUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateGroupUsingGet401ApplicationJson, _super);
    function CreateGroupUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateGroupUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CreateGroupUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateGroupUsingGet401ApplicationJson.prototype, "message", void 0);
    return CreateGroupUsingGet401ApplicationJson;
}(SpeakeasyBase));
export { CreateGroupUsingGet401ApplicationJson };
var CreateGroupUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateGroupUsingGet500ApplicationJson, _super);
    function CreateGroupUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateGroupUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CreateGroupUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateGroupUsingGet500ApplicationJson.prototype, "message", void 0);
    return CreateGroupUsingGet500ApplicationJson;
}(SpeakeasyBase));
export { CreateGroupUsingGet500ApplicationJson };
var CreateGroupUsingGetResponse = /** @class */ (function (_super) {
    __extends(CreateGroupUsingGetResponse, _super);
    function CreateGroupUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateGroupUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateGroupUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateGroupUsingGet200ApplicationJson)
    ], CreateGroupUsingGetResponse.prototype, "createGroupUsingGet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateGroupUsingGet400ApplicationJson)
    ], CreateGroupUsingGetResponse.prototype, "createGroupUsingGet400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateGroupUsingGet401ApplicationJson)
    ], CreateGroupUsingGetResponse.prototype, "createGroupUsingGet401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateGroupUsingGet500ApplicationJson)
    ], CreateGroupUsingGetResponse.prototype, "createGroupUsingGet500ApplicationJsonObject", void 0);
    return CreateGroupUsingGetResponse;
}(SpeakeasyBase));
export { CreateGroupUsingGetResponse };
