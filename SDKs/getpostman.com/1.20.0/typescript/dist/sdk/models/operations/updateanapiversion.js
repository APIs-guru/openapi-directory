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
var UpdateAnApiVersionPathParams = /** @class */ (function (_super) {
    __extends(UpdateAnApiVersionPathParams, _super);
    function UpdateAnApiVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" }),
        __metadata("design:type", String)
    ], UpdateAnApiVersionPathParams.prototype, "apiId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" }),
        __metadata("design:type", String)
    ], UpdateAnApiVersionPathParams.prototype, "apiVersionId", void 0);
    return UpdateAnApiVersionPathParams;
}(SpeakeasyBase));
export { UpdateAnApiVersionPathParams };
var UpdateAnApiVersionRequestBodyVersion = /** @class */ (function (_super) {
    __extends(UpdateAnApiVersionRequestBodyVersion, _super);
    function UpdateAnApiVersionRequestBodyVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateAnApiVersionRequestBodyVersion.prototype, "name", void 0);
    return UpdateAnApiVersionRequestBodyVersion;
}(SpeakeasyBase));
export { UpdateAnApiVersionRequestBodyVersion };
var UpdateAnApiVersionRequestBody = /** @class */ (function (_super) {
    __extends(UpdateAnApiVersionRequestBody, _super);
    function UpdateAnApiVersionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", UpdateAnApiVersionRequestBodyVersion)
    ], UpdateAnApiVersionRequestBody.prototype, "version", void 0);
    return UpdateAnApiVersionRequestBody;
}(SpeakeasyBase));
export { UpdateAnApiVersionRequestBody };
var UpdateAnApiVersion200ApplicationJsonVersion = /** @class */ (function (_super) {
    __extends(UpdateAnApiVersion200ApplicationJsonVersion, _super);
    function UpdateAnApiVersion200ApplicationJsonVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=api" }),
        __metadata("design:type", String)
    ], UpdateAnApiVersion200ApplicationJsonVersion.prototype, "api", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", String)
    ], UpdateAnApiVersion200ApplicationJsonVersion.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdBy" }),
        __metadata("design:type", String)
    ], UpdateAnApiVersion200ApplicationJsonVersion.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateAnApiVersion200ApplicationJsonVersion.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateAnApiVersion200ApplicationJsonVersion.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", String)
    ], UpdateAnApiVersion200ApplicationJsonVersion.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedBy" }),
        __metadata("design:type", String)
    ], UpdateAnApiVersion200ApplicationJsonVersion.prototype, "updatedBy", void 0);
    return UpdateAnApiVersion200ApplicationJsonVersion;
}(SpeakeasyBase));
export { UpdateAnApiVersion200ApplicationJsonVersion };
var UpdateAnApiVersion200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateAnApiVersion200ApplicationJson, _super);
    function UpdateAnApiVersion200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", UpdateAnApiVersion200ApplicationJsonVersion)
    ], UpdateAnApiVersion200ApplicationJson.prototype, "version", void 0);
    return UpdateAnApiVersion200ApplicationJson;
}(SpeakeasyBase));
export { UpdateAnApiVersion200ApplicationJson };
var UpdateAnApiVersionRequest = /** @class */ (function (_super) {
    __extends(UpdateAnApiVersionRequest, _super);
    function UpdateAnApiVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateAnApiVersionPathParams)
    ], UpdateAnApiVersionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateAnApiVersionRequestBody)
    ], UpdateAnApiVersionRequest.prototype, "request", void 0);
    return UpdateAnApiVersionRequest;
}(SpeakeasyBase));
export { UpdateAnApiVersionRequest };
var UpdateAnApiVersionResponse = /** @class */ (function (_super) {
    __extends(UpdateAnApiVersionResponse, _super);
    function UpdateAnApiVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateAnApiVersionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateAnApiVersionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateAnApiVersion200ApplicationJson)
    ], UpdateAnApiVersionResponse.prototype, "updateAnApiVersion200ApplicationJsonObject", void 0);
    return UpdateAnApiVersionResponse;
}(SpeakeasyBase));
export { UpdateAnApiVersionResponse };
