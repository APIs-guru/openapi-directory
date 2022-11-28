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
var CreateAuthorIfNotExistsForUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(CreateAuthorIfNotExistsForUsingPostQueryParams, _super);
    function CreateAuthorIfNotExistsForUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authorMapper" }),
        __metadata("design:type", String)
    ], CreateAuthorIfNotExistsForUsingPostQueryParams.prototype, "authorMapper", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], CreateAuthorIfNotExistsForUsingPostQueryParams.prototype, "name", void 0);
    return CreateAuthorIfNotExistsForUsingPostQueryParams;
}(SpeakeasyBase));
export { CreateAuthorIfNotExistsForUsingPostQueryParams };
var CreateAuthorIfNotExistsForUsingPost200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(CreateAuthorIfNotExistsForUsingPost200ApplicationJsonData, _super);
    function CreateAuthorIfNotExistsForUsingPost200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorID" }),
        __metadata("design:type", String)
    ], CreateAuthorIfNotExistsForUsingPost200ApplicationJsonData.prototype, "authorId", void 0);
    return CreateAuthorIfNotExistsForUsingPost200ApplicationJsonData;
}(SpeakeasyBase));
export { CreateAuthorIfNotExistsForUsingPost200ApplicationJsonData };
var CreateAuthorIfNotExistsForUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateAuthorIfNotExistsForUsingPost200ApplicationJson, _super);
    function CreateAuthorIfNotExistsForUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateAuthorIfNotExistsForUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", CreateAuthorIfNotExistsForUsingPost200ApplicationJsonData)
    ], CreateAuthorIfNotExistsForUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateAuthorIfNotExistsForUsingPost200ApplicationJson.prototype, "message", void 0);
    return CreateAuthorIfNotExistsForUsingPost200ApplicationJson;
}(SpeakeasyBase));
export { CreateAuthorIfNotExistsForUsingPost200ApplicationJson };
var CreateAuthorIfNotExistsForUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateAuthorIfNotExistsForUsingPost400ApplicationJson, _super);
    function CreateAuthorIfNotExistsForUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateAuthorIfNotExistsForUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CreateAuthorIfNotExistsForUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateAuthorIfNotExistsForUsingPost400ApplicationJson.prototype, "message", void 0);
    return CreateAuthorIfNotExistsForUsingPost400ApplicationJson;
}(SpeakeasyBase));
export { CreateAuthorIfNotExistsForUsingPost400ApplicationJson };
var CreateAuthorIfNotExistsForUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateAuthorIfNotExistsForUsingPost401ApplicationJson, _super);
    function CreateAuthorIfNotExistsForUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateAuthorIfNotExistsForUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CreateAuthorIfNotExistsForUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateAuthorIfNotExistsForUsingPost401ApplicationJson.prototype, "message", void 0);
    return CreateAuthorIfNotExistsForUsingPost401ApplicationJson;
}(SpeakeasyBase));
export { CreateAuthorIfNotExistsForUsingPost401ApplicationJson };
var CreateAuthorIfNotExistsForUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateAuthorIfNotExistsForUsingPost500ApplicationJson, _super);
    function CreateAuthorIfNotExistsForUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateAuthorIfNotExistsForUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CreateAuthorIfNotExistsForUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateAuthorIfNotExistsForUsingPost500ApplicationJson.prototype, "message", void 0);
    return CreateAuthorIfNotExistsForUsingPost500ApplicationJson;
}(SpeakeasyBase));
export { CreateAuthorIfNotExistsForUsingPost500ApplicationJson };
var CreateAuthorIfNotExistsForUsingPostRequest = /** @class */ (function (_super) {
    __extends(CreateAuthorIfNotExistsForUsingPostRequest, _super);
    function CreateAuthorIfNotExistsForUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAuthorIfNotExistsForUsingPostQueryParams)
    ], CreateAuthorIfNotExistsForUsingPostRequest.prototype, "queryParams", void 0);
    return CreateAuthorIfNotExistsForUsingPostRequest;
}(SpeakeasyBase));
export { CreateAuthorIfNotExistsForUsingPostRequest };
var CreateAuthorIfNotExistsForUsingPostResponse = /** @class */ (function (_super) {
    __extends(CreateAuthorIfNotExistsForUsingPostResponse, _super);
    function CreateAuthorIfNotExistsForUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateAuthorIfNotExistsForUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateAuthorIfNotExistsForUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAuthorIfNotExistsForUsingPost200ApplicationJson)
    ], CreateAuthorIfNotExistsForUsingPostResponse.prototype, "createAuthorIfNotExistsForUsingPost200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAuthorIfNotExistsForUsingPost400ApplicationJson)
    ], CreateAuthorIfNotExistsForUsingPostResponse.prototype, "createAuthorIfNotExistsForUsingPost400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAuthorIfNotExistsForUsingPost401ApplicationJson)
    ], CreateAuthorIfNotExistsForUsingPostResponse.prototype, "createAuthorIfNotExistsForUsingPost401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAuthorIfNotExistsForUsingPost500ApplicationJson)
    ], CreateAuthorIfNotExistsForUsingPostResponse.prototype, "createAuthorIfNotExistsForUsingPost500ApplicationJsonObject", void 0);
    return CreateAuthorIfNotExistsForUsingPostResponse;
}(SpeakeasyBase));
export { CreateAuthorIfNotExistsForUsingPostResponse };
