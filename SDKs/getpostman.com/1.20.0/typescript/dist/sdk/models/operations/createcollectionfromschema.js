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
var CreateCollectionFromSchemaPathParams = /** @class */ (function (_super) {
    __extends(CreateCollectionFromSchemaPathParams, _super);
    function CreateCollectionFromSchemaPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" }),
        __metadata("design:type", String)
    ], CreateCollectionFromSchemaPathParams.prototype, "apiId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" }),
        __metadata("design:type", String)
    ], CreateCollectionFromSchemaPathParams.prototype, "apiVersionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=schemaId" }),
        __metadata("design:type", String)
    ], CreateCollectionFromSchemaPathParams.prototype, "schemaId", void 0);
    return CreateCollectionFromSchemaPathParams;
}(SpeakeasyBase));
export { CreateCollectionFromSchemaPathParams };
var CreateCollectionFromSchemaQueryParams = /** @class */ (function (_super) {
    __extends(CreateCollectionFromSchemaQueryParams, _super);
    function CreateCollectionFromSchemaQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=workspace" }),
        __metadata("design:type", String)
    ], CreateCollectionFromSchemaQueryParams.prototype, "workspace", void 0);
    return CreateCollectionFromSchemaQueryParams;
}(SpeakeasyBase));
export { CreateCollectionFromSchemaQueryParams };
var CreateCollectionFromSchemaRequestBodyRelations = /** @class */ (function (_super) {
    __extends(CreateCollectionFromSchemaRequestBodyRelations, _super);
    function CreateCollectionFromSchemaRequestBodyRelations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateCollectionFromSchemaRequestBodyRelations.prototype, "type", void 0);
    return CreateCollectionFromSchemaRequestBodyRelations;
}(SpeakeasyBase));
export { CreateCollectionFromSchemaRequestBodyRelations };
var CreateCollectionFromSchemaRequestBody = /** @class */ (function (_super) {
    __extends(CreateCollectionFromSchemaRequestBody, _super);
    function CreateCollectionFromSchemaRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateCollectionFromSchemaRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relations", elemType: CreateCollectionFromSchemaRequestBodyRelations }),
        __metadata("design:type", Array)
    ], CreateCollectionFromSchemaRequestBody.prototype, "relations", void 0);
    return CreateCollectionFromSchemaRequestBody;
}(SpeakeasyBase));
export { CreateCollectionFromSchemaRequestBody };
var CreateCollectionFromSchema200ApplicationJsonCollection = /** @class */ (function (_super) {
    __extends(CreateCollectionFromSchema200ApplicationJsonCollection, _super);
    function CreateCollectionFromSchema200ApplicationJsonCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateCollectionFromSchema200ApplicationJsonCollection.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], CreateCollectionFromSchema200ApplicationJsonCollection.prototype, "uid", void 0);
    return CreateCollectionFromSchema200ApplicationJsonCollection;
}(SpeakeasyBase));
export { CreateCollectionFromSchema200ApplicationJsonCollection };
var CreateCollectionFromSchema200ApplicationJsonRelations = /** @class */ (function (_super) {
    __extends(CreateCollectionFromSchema200ApplicationJsonRelations, _super);
    function CreateCollectionFromSchema200ApplicationJsonRelations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateCollectionFromSchema200ApplicationJsonRelations.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateCollectionFromSchema200ApplicationJsonRelations.prototype, "type", void 0);
    return CreateCollectionFromSchema200ApplicationJsonRelations;
}(SpeakeasyBase));
export { CreateCollectionFromSchema200ApplicationJsonRelations };
var CreateCollectionFromSchema200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateCollectionFromSchema200ApplicationJson, _super);
    function CreateCollectionFromSchema200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collection" }),
        __metadata("design:type", CreateCollectionFromSchema200ApplicationJsonCollection)
    ], CreateCollectionFromSchema200ApplicationJson.prototype, "collection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relations", elemType: CreateCollectionFromSchema200ApplicationJsonRelations }),
        __metadata("design:type", Array)
    ], CreateCollectionFromSchema200ApplicationJson.prototype, "relations", void 0);
    return CreateCollectionFromSchema200ApplicationJson;
}(SpeakeasyBase));
export { CreateCollectionFromSchema200ApplicationJson };
var CreateCollectionFromSchemaRequest = /** @class */ (function (_super) {
    __extends(CreateCollectionFromSchemaRequest, _super);
    function CreateCollectionFromSchemaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateCollectionFromSchemaPathParams)
    ], CreateCollectionFromSchemaRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateCollectionFromSchemaQueryParams)
    ], CreateCollectionFromSchemaRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateCollectionFromSchemaRequestBody)
    ], CreateCollectionFromSchemaRequest.prototype, "request", void 0);
    return CreateCollectionFromSchemaRequest;
}(SpeakeasyBase));
export { CreateCollectionFromSchemaRequest };
var CreateCollectionFromSchemaResponse = /** @class */ (function (_super) {
    __extends(CreateCollectionFromSchemaResponse, _super);
    function CreateCollectionFromSchemaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateCollectionFromSchemaResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateCollectionFromSchemaResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateCollectionFromSchema200ApplicationJson)
    ], CreateCollectionFromSchemaResponse.prototype, "createCollectionFromSchema200ApplicationJsonObject", void 0);
    return CreateCollectionFromSchemaResponse;
}(SpeakeasyBase));
export { CreateCollectionFromSchemaResponse };
