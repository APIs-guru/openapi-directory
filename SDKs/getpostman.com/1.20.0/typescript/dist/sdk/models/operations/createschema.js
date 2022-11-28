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
var CreateSchemaPathParams = /** @class */ (function (_super) {
    __extends(CreateSchemaPathParams, _super);
    function CreateSchemaPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" }),
        __metadata("design:type", String)
    ], CreateSchemaPathParams.prototype, "apiId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" }),
        __metadata("design:type", String)
    ], CreateSchemaPathParams.prototype, "apiVersionId", void 0);
    return CreateSchemaPathParams;
}(SpeakeasyBase));
export { CreateSchemaPathParams };
var CreateSchemaRequestBodySchema = /** @class */ (function (_super) {
    __extends(CreateSchemaRequestBodySchema, _super);
    function CreateSchemaRequestBodySchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], CreateSchemaRequestBodySchema.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schema" }),
        __metadata("design:type", String)
    ], CreateSchemaRequestBodySchema.prototype, "schema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateSchemaRequestBodySchema.prototype, "type", void 0);
    return CreateSchemaRequestBodySchema;
}(SpeakeasyBase));
export { CreateSchemaRequestBodySchema };
var CreateSchemaRequestBody = /** @class */ (function (_super) {
    __extends(CreateSchemaRequestBody, _super);
    function CreateSchemaRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schema" }),
        __metadata("design:type", CreateSchemaRequestBodySchema)
    ], CreateSchemaRequestBody.prototype, "schema", void 0);
    return CreateSchemaRequestBody;
}(SpeakeasyBase));
export { CreateSchemaRequestBody };
var CreateSchema200ApplicationJsonSchema = /** @class */ (function (_super) {
    __extends(CreateSchema200ApplicationJsonSchema, _super);
    function CreateSchema200ApplicationJsonSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiVersion" }),
        __metadata("design:type", String)
    ], CreateSchema200ApplicationJsonSchema.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", String)
    ], CreateSchema200ApplicationJsonSchema.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdBy" }),
        __metadata("design:type", String)
    ], CreateSchema200ApplicationJsonSchema.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateSchema200ApplicationJsonSchema.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], CreateSchema200ApplicationJsonSchema.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateSchema200ApplicationJsonSchema.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateBy" }),
        __metadata("design:type", String)
    ], CreateSchema200ApplicationJsonSchema.prototype, "updateBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", String)
    ], CreateSchema200ApplicationJsonSchema.prototype, "updatedAt", void 0);
    return CreateSchema200ApplicationJsonSchema;
}(SpeakeasyBase));
export { CreateSchema200ApplicationJsonSchema };
var CreateSchema200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateSchema200ApplicationJson, _super);
    function CreateSchema200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schema" }),
        __metadata("design:type", CreateSchema200ApplicationJsonSchema)
    ], CreateSchema200ApplicationJson.prototype, "schema", void 0);
    return CreateSchema200ApplicationJson;
}(SpeakeasyBase));
export { CreateSchema200ApplicationJson };
var CreateSchemaRequest = /** @class */ (function (_super) {
    __extends(CreateSchemaRequest, _super);
    function CreateSchemaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSchemaPathParams)
    ], CreateSchemaRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateSchemaRequestBody)
    ], CreateSchemaRequest.prototype, "request", void 0);
    return CreateSchemaRequest;
}(SpeakeasyBase));
export { CreateSchemaRequest };
var CreateSchemaResponse = /** @class */ (function (_super) {
    __extends(CreateSchemaResponse, _super);
    function CreateSchemaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSchemaResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateSchemaResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSchema200ApplicationJson)
    ], CreateSchemaResponse.prototype, "createSchema200ApplicationJsonObject", void 0);
    return CreateSchemaResponse;
}(SpeakeasyBase));
export { CreateSchemaResponse };
