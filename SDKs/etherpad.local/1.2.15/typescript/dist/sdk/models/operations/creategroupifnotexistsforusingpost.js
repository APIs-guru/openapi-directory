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
var CreateGroupIfNotExistsForUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(CreateGroupIfNotExistsForUsingPostQueryParams, _super);
    function CreateGroupIfNotExistsForUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupMapper" }),
        __metadata("design:type", String)
    ], CreateGroupIfNotExistsForUsingPostQueryParams.prototype, "groupMapper", void 0);
    return CreateGroupIfNotExistsForUsingPostQueryParams;
}(SpeakeasyBase));
export { CreateGroupIfNotExistsForUsingPostQueryParams };
var CreateGroupIfNotExistsForUsingPost200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(CreateGroupIfNotExistsForUsingPost200ApplicationJsonData, _super);
    function CreateGroupIfNotExistsForUsingPost200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupID" }),
        __metadata("design:type", String)
    ], CreateGroupIfNotExistsForUsingPost200ApplicationJsonData.prototype, "groupId", void 0);
    return CreateGroupIfNotExistsForUsingPost200ApplicationJsonData;
}(SpeakeasyBase));
export { CreateGroupIfNotExistsForUsingPost200ApplicationJsonData };
var CreateGroupIfNotExistsForUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateGroupIfNotExistsForUsingPost200ApplicationJson, _super);
    function CreateGroupIfNotExistsForUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateGroupIfNotExistsForUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", CreateGroupIfNotExistsForUsingPost200ApplicationJsonData)
    ], CreateGroupIfNotExistsForUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateGroupIfNotExistsForUsingPost200ApplicationJson.prototype, "message", void 0);
    return CreateGroupIfNotExistsForUsingPost200ApplicationJson;
}(SpeakeasyBase));
export { CreateGroupIfNotExistsForUsingPost200ApplicationJson };
var CreateGroupIfNotExistsForUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateGroupIfNotExistsForUsingPost400ApplicationJson, _super);
    function CreateGroupIfNotExistsForUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateGroupIfNotExistsForUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CreateGroupIfNotExistsForUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateGroupIfNotExistsForUsingPost400ApplicationJson.prototype, "message", void 0);
    return CreateGroupIfNotExistsForUsingPost400ApplicationJson;
}(SpeakeasyBase));
export { CreateGroupIfNotExistsForUsingPost400ApplicationJson };
var CreateGroupIfNotExistsForUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateGroupIfNotExistsForUsingPost401ApplicationJson, _super);
    function CreateGroupIfNotExistsForUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateGroupIfNotExistsForUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CreateGroupIfNotExistsForUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateGroupIfNotExistsForUsingPost401ApplicationJson.prototype, "message", void 0);
    return CreateGroupIfNotExistsForUsingPost401ApplicationJson;
}(SpeakeasyBase));
export { CreateGroupIfNotExistsForUsingPost401ApplicationJson };
var CreateGroupIfNotExistsForUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateGroupIfNotExistsForUsingPost500ApplicationJson, _super);
    function CreateGroupIfNotExistsForUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateGroupIfNotExistsForUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CreateGroupIfNotExistsForUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateGroupIfNotExistsForUsingPost500ApplicationJson.prototype, "message", void 0);
    return CreateGroupIfNotExistsForUsingPost500ApplicationJson;
}(SpeakeasyBase));
export { CreateGroupIfNotExistsForUsingPost500ApplicationJson };
var CreateGroupIfNotExistsForUsingPostRequest = /** @class */ (function (_super) {
    __extends(CreateGroupIfNotExistsForUsingPostRequest, _super);
    function CreateGroupIfNotExistsForUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateGroupIfNotExistsForUsingPostQueryParams)
    ], CreateGroupIfNotExistsForUsingPostRequest.prototype, "queryParams", void 0);
    return CreateGroupIfNotExistsForUsingPostRequest;
}(SpeakeasyBase));
export { CreateGroupIfNotExistsForUsingPostRequest };
var CreateGroupIfNotExistsForUsingPostResponse = /** @class */ (function (_super) {
    __extends(CreateGroupIfNotExistsForUsingPostResponse, _super);
    function CreateGroupIfNotExistsForUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateGroupIfNotExistsForUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateGroupIfNotExistsForUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateGroupIfNotExistsForUsingPost200ApplicationJson)
    ], CreateGroupIfNotExistsForUsingPostResponse.prototype, "createGroupIfNotExistsForUsingPost200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateGroupIfNotExistsForUsingPost400ApplicationJson)
    ], CreateGroupIfNotExistsForUsingPostResponse.prototype, "createGroupIfNotExistsForUsingPost400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateGroupIfNotExistsForUsingPost401ApplicationJson)
    ], CreateGroupIfNotExistsForUsingPostResponse.prototype, "createGroupIfNotExistsForUsingPost401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateGroupIfNotExistsForUsingPost500ApplicationJson)
    ], CreateGroupIfNotExistsForUsingPostResponse.prototype, "createGroupIfNotExistsForUsingPost500ApplicationJsonObject", void 0);
    return CreateGroupIfNotExistsForUsingPostResponse;
}(SpeakeasyBase));
export { CreateGroupIfNotExistsForUsingPostResponse };
