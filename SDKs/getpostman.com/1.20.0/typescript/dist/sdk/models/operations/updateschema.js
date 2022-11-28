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
var UpdateSchemaPathParams = /** @class */ (function (_super) {
    __extends(UpdateSchemaPathParams, _super);
    function UpdateSchemaPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" }),
        __metadata("design:type", String)
    ], UpdateSchemaPathParams.prototype, "apiId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" }),
        __metadata("design:type", String)
    ], UpdateSchemaPathParams.prototype, "apiVersionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=schemaId" }),
        __metadata("design:type", String)
    ], UpdateSchemaPathParams.prototype, "schemaId", void 0);
    return UpdateSchemaPathParams;
}(SpeakeasyBase));
export { UpdateSchemaPathParams };
var UpdateSchemaRequestBodySchema = /** @class */ (function (_super) {
    __extends(UpdateSchemaRequestBodySchema, _super);
    function UpdateSchemaRequestBodySchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], UpdateSchemaRequestBodySchema.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schema" }),
        __metadata("design:type", String)
    ], UpdateSchemaRequestBodySchema.prototype, "schema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateSchemaRequestBodySchema.prototype, "type", void 0);
    return UpdateSchemaRequestBodySchema;
}(SpeakeasyBase));
export { UpdateSchemaRequestBodySchema };
var UpdateSchemaRequestBody = /** @class */ (function (_super) {
    __extends(UpdateSchemaRequestBody, _super);
    function UpdateSchemaRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schema" }),
        __metadata("design:type", UpdateSchemaRequestBodySchema)
    ], UpdateSchemaRequestBody.prototype, "schema", void 0);
    return UpdateSchemaRequestBody;
}(SpeakeasyBase));
export { UpdateSchemaRequestBody };
var UpdateSchema200ApplicationJsonSchema = /** @class */ (function (_super) {
    __extends(UpdateSchema200ApplicationJsonSchema, _super);
    function UpdateSchema200ApplicationJsonSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiVersion" }),
        __metadata("design:type", String)
    ], UpdateSchema200ApplicationJsonSchema.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", String)
    ], UpdateSchema200ApplicationJsonSchema.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdBy" }),
        __metadata("design:type", String)
    ], UpdateSchema200ApplicationJsonSchema.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateSchema200ApplicationJsonSchema.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], UpdateSchema200ApplicationJsonSchema.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateSchema200ApplicationJsonSchema.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateBy" }),
        __metadata("design:type", String)
    ], UpdateSchema200ApplicationJsonSchema.prototype, "updateBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", String)
    ], UpdateSchema200ApplicationJsonSchema.prototype, "updatedAt", void 0);
    return UpdateSchema200ApplicationJsonSchema;
}(SpeakeasyBase));
export { UpdateSchema200ApplicationJsonSchema };
var UpdateSchema200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateSchema200ApplicationJson, _super);
    function UpdateSchema200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schema" }),
        __metadata("design:type", UpdateSchema200ApplicationJsonSchema)
    ], UpdateSchema200ApplicationJson.prototype, "schema", void 0);
    return UpdateSchema200ApplicationJson;
}(SpeakeasyBase));
export { UpdateSchema200ApplicationJson };
var UpdateSchemaRequest = /** @class */ (function (_super) {
    __extends(UpdateSchemaRequest, _super);
    function UpdateSchemaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSchemaPathParams)
    ], UpdateSchemaRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateSchemaRequestBody)
    ], UpdateSchemaRequest.prototype, "request", void 0);
    return UpdateSchemaRequest;
}(SpeakeasyBase));
export { UpdateSchemaRequest };
var UpdateSchemaResponse = /** @class */ (function (_super) {
    __extends(UpdateSchemaResponse, _super);
    function UpdateSchemaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateSchemaResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateSchemaResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSchema200ApplicationJson)
    ], UpdateSchemaResponse.prototype, "updateSchema200ApplicationJsonObject", void 0);
    return UpdateSchemaResponse;
}(SpeakeasyBase));
export { UpdateSchemaResponse };
