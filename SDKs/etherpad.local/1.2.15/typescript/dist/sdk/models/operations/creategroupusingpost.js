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
var CreateGroupUsingPost200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(CreateGroupUsingPost200ApplicationJsonData, _super);
    function CreateGroupUsingPost200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupID" }),
        __metadata("design:type", String)
    ], CreateGroupUsingPost200ApplicationJsonData.prototype, "groupId", void 0);
    return CreateGroupUsingPost200ApplicationJsonData;
}(SpeakeasyBase));
export { CreateGroupUsingPost200ApplicationJsonData };
var CreateGroupUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateGroupUsingPost200ApplicationJson, _super);
    function CreateGroupUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateGroupUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", CreateGroupUsingPost200ApplicationJsonData)
    ], CreateGroupUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateGroupUsingPost200ApplicationJson.prototype, "message", void 0);
    return CreateGroupUsingPost200ApplicationJson;
}(SpeakeasyBase));
export { CreateGroupUsingPost200ApplicationJson };
var CreateGroupUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateGroupUsingPost400ApplicationJson, _super);
    function CreateGroupUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateGroupUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CreateGroupUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateGroupUsingPost400ApplicationJson.prototype, "message", void 0);
    return CreateGroupUsingPost400ApplicationJson;
}(SpeakeasyBase));
export { CreateGroupUsingPost400ApplicationJson };
var CreateGroupUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateGroupUsingPost401ApplicationJson, _super);
    function CreateGroupUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateGroupUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CreateGroupUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateGroupUsingPost401ApplicationJson.prototype, "message", void 0);
    return CreateGroupUsingPost401ApplicationJson;
}(SpeakeasyBase));
export { CreateGroupUsingPost401ApplicationJson };
var CreateGroupUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateGroupUsingPost500ApplicationJson, _super);
    function CreateGroupUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateGroupUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CreateGroupUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateGroupUsingPost500ApplicationJson.prototype, "message", void 0);
    return CreateGroupUsingPost500ApplicationJson;
}(SpeakeasyBase));
export { CreateGroupUsingPost500ApplicationJson };
var CreateGroupUsingPostResponse = /** @class */ (function (_super) {
    __extends(CreateGroupUsingPostResponse, _super);
    function CreateGroupUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateGroupUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateGroupUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateGroupUsingPost200ApplicationJson)
    ], CreateGroupUsingPostResponse.prototype, "createGroupUsingPost200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateGroupUsingPost400ApplicationJson)
    ], CreateGroupUsingPostResponse.prototype, "createGroupUsingPost400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateGroupUsingPost401ApplicationJson)
    ], CreateGroupUsingPostResponse.prototype, "createGroupUsingPost401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateGroupUsingPost500ApplicationJson)
    ], CreateGroupUsingPostResponse.prototype, "createGroupUsingPost500ApplicationJsonObject", void 0);
    return CreateGroupUsingPostResponse;
}(SpeakeasyBase));
export { CreateGroupUsingPostResponse };
