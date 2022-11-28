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
var CreateApiVersionPathParams = /** @class */ (function (_super) {
    __extends(CreateApiVersionPathParams, _super);
    function CreateApiVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" }),
        __metadata("design:type", String)
    ], CreateApiVersionPathParams.prototype, "apiId", void 0);
    return CreateApiVersionPathParams;
}(SpeakeasyBase));
export { CreateApiVersionPathParams };
var CreateApiVersionRequestBodyVersionSourceRelations = /** @class */ (function (_super) {
    __extends(CreateApiVersionRequestBodyVersionSourceRelations, _super);
    function CreateApiVersionRequestBodyVersionSourceRelations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation" }),
        __metadata("design:type", Boolean)
    ], CreateApiVersionRequestBodyVersionSourceRelations.prototype, "documentation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mock" }),
        __metadata("design:type", Boolean)
    ], CreateApiVersionRequestBodyVersionSourceRelations.prototype, "mock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monitor" }),
        __metadata("design:type", Boolean)
    ], CreateApiVersionRequestBodyVersionSourceRelations.prototype, "monitor", void 0);
    return CreateApiVersionRequestBodyVersionSourceRelations;
}(SpeakeasyBase));
export { CreateApiVersionRequestBodyVersionSourceRelations };
var CreateApiVersionRequestBodyVersionSource = /** @class */ (function (_super) {
    __extends(CreateApiVersionRequestBodyVersionSource, _super);
    function CreateApiVersionRequestBodyVersionSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateApiVersionRequestBodyVersionSource.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relations" }),
        __metadata("design:type", CreateApiVersionRequestBodyVersionSourceRelations)
    ], CreateApiVersionRequestBodyVersionSource.prototype, "relations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schema" }),
        __metadata("design:type", Boolean)
    ], CreateApiVersionRequestBodyVersionSource.prototype, "schema", void 0);
    return CreateApiVersionRequestBodyVersionSource;
}(SpeakeasyBase));
export { CreateApiVersionRequestBodyVersionSource };
var CreateApiVersionRequestBodyVersion = /** @class */ (function (_super) {
    __extends(CreateApiVersionRequestBodyVersion, _super);
    function CreateApiVersionRequestBodyVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateApiVersionRequestBodyVersion.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", CreateApiVersionRequestBodyVersionSource)
    ], CreateApiVersionRequestBodyVersion.prototype, "source", void 0);
    return CreateApiVersionRequestBodyVersion;
}(SpeakeasyBase));
export { CreateApiVersionRequestBodyVersion };
var CreateApiVersionRequestBody = /** @class */ (function (_super) {
    __extends(CreateApiVersionRequestBody, _super);
    function CreateApiVersionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", CreateApiVersionRequestBodyVersion)
    ], CreateApiVersionRequestBody.prototype, "version", void 0);
    return CreateApiVersionRequestBody;
}(SpeakeasyBase));
export { CreateApiVersionRequestBody };
var CreateApiVersion200ApplicationJsonVersion = /** @class */ (function (_super) {
    __extends(CreateApiVersion200ApplicationJsonVersion, _super);
    function CreateApiVersion200ApplicationJsonVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=api" }),
        __metadata("design:type", String)
    ], CreateApiVersion200ApplicationJsonVersion.prototype, "api", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateApiVersion200ApplicationJsonVersion.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateApiVersion200ApplicationJsonVersion.prototype, "name", void 0);
    return CreateApiVersion200ApplicationJsonVersion;
}(SpeakeasyBase));
export { CreateApiVersion200ApplicationJsonVersion };
var CreateApiVersion200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateApiVersion200ApplicationJson, _super);
    function CreateApiVersion200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", CreateApiVersion200ApplicationJsonVersion)
    ], CreateApiVersion200ApplicationJson.prototype, "version", void 0);
    return CreateApiVersion200ApplicationJson;
}(SpeakeasyBase));
export { CreateApiVersion200ApplicationJson };
var CreateApiVersionRequest = /** @class */ (function (_super) {
    __extends(CreateApiVersionRequest, _super);
    function CreateApiVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateApiVersionPathParams)
    ], CreateApiVersionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateApiVersionRequestBody)
    ], CreateApiVersionRequest.prototype, "request", void 0);
    return CreateApiVersionRequest;
}(SpeakeasyBase));
export { CreateApiVersionRequest };
var CreateApiVersionResponse = /** @class */ (function (_super) {
    __extends(CreateApiVersionResponse, _super);
    function CreateApiVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateApiVersionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateApiVersionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateApiVersion200ApplicationJson)
    ], CreateApiVersionResponse.prototype, "createApiVersion200ApplicationJsonObject", void 0);
    return CreateApiVersionResponse;
}(SpeakeasyBase));
export { CreateApiVersionResponse };
