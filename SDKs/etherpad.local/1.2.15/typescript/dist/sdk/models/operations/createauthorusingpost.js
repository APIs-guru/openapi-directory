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
var CreateAuthorUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(CreateAuthorUsingPostQueryParams, _super);
    function CreateAuthorUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], CreateAuthorUsingPostQueryParams.prototype, "name", void 0);
    return CreateAuthorUsingPostQueryParams;
}(SpeakeasyBase));
export { CreateAuthorUsingPostQueryParams };
var CreateAuthorUsingPost200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(CreateAuthorUsingPost200ApplicationJsonData, _super);
    function CreateAuthorUsingPost200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorID" }),
        __metadata("design:type", String)
    ], CreateAuthorUsingPost200ApplicationJsonData.prototype, "authorId", void 0);
    return CreateAuthorUsingPost200ApplicationJsonData;
}(SpeakeasyBase));
export { CreateAuthorUsingPost200ApplicationJsonData };
var CreateAuthorUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateAuthorUsingPost200ApplicationJson, _super);
    function CreateAuthorUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateAuthorUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", CreateAuthorUsingPost200ApplicationJsonData)
    ], CreateAuthorUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateAuthorUsingPost200ApplicationJson.prototype, "message", void 0);
    return CreateAuthorUsingPost200ApplicationJson;
}(SpeakeasyBase));
export { CreateAuthorUsingPost200ApplicationJson };
var CreateAuthorUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateAuthorUsingPost400ApplicationJson, _super);
    function CreateAuthorUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateAuthorUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CreateAuthorUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateAuthorUsingPost400ApplicationJson.prototype, "message", void 0);
    return CreateAuthorUsingPost400ApplicationJson;
}(SpeakeasyBase));
export { CreateAuthorUsingPost400ApplicationJson };
var CreateAuthorUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateAuthorUsingPost401ApplicationJson, _super);
    function CreateAuthorUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateAuthorUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CreateAuthorUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateAuthorUsingPost401ApplicationJson.prototype, "message", void 0);
    return CreateAuthorUsingPost401ApplicationJson;
}(SpeakeasyBase));
export { CreateAuthorUsingPost401ApplicationJson };
var CreateAuthorUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateAuthorUsingPost500ApplicationJson, _super);
    function CreateAuthorUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateAuthorUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CreateAuthorUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateAuthorUsingPost500ApplicationJson.prototype, "message", void 0);
    return CreateAuthorUsingPost500ApplicationJson;
}(SpeakeasyBase));
export { CreateAuthorUsingPost500ApplicationJson };
var CreateAuthorUsingPostRequest = /** @class */ (function (_super) {
    __extends(CreateAuthorUsingPostRequest, _super);
    function CreateAuthorUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAuthorUsingPostQueryParams)
    ], CreateAuthorUsingPostRequest.prototype, "queryParams", void 0);
    return CreateAuthorUsingPostRequest;
}(SpeakeasyBase));
export { CreateAuthorUsingPostRequest };
var CreateAuthorUsingPostResponse = /** @class */ (function (_super) {
    __extends(CreateAuthorUsingPostResponse, _super);
    function CreateAuthorUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateAuthorUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateAuthorUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAuthorUsingPost200ApplicationJson)
    ], CreateAuthorUsingPostResponse.prototype, "createAuthorUsingPost200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAuthorUsingPost400ApplicationJson)
    ], CreateAuthorUsingPostResponse.prototype, "createAuthorUsingPost400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAuthorUsingPost401ApplicationJson)
    ], CreateAuthorUsingPostResponse.prototype, "createAuthorUsingPost401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAuthorUsingPost500ApplicationJson)
    ], CreateAuthorUsingPostResponse.prototype, "createAuthorUsingPost500ApplicationJsonObject", void 0);
    return CreateAuthorUsingPostResponse;
}(SpeakeasyBase));
export { CreateAuthorUsingPostResponse };
