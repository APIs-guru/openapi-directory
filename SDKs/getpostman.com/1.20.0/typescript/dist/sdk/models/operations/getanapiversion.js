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
var GetAnApiVersionPathParams = /** @class */ (function (_super) {
    __extends(GetAnApiVersionPathParams, _super);
    function GetAnApiVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" }),
        __metadata("design:type", String)
    ], GetAnApiVersionPathParams.prototype, "apiId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" }),
        __metadata("design:type", String)
    ], GetAnApiVersionPathParams.prototype, "apiVersionId", void 0);
    return GetAnApiVersionPathParams;
}(SpeakeasyBase));
export { GetAnApiVersionPathParams };
var GetAnApiVersion200ApplicationJsonVersion = /** @class */ (function (_super) {
    __extends(GetAnApiVersion200ApplicationJsonVersion, _super);
    function GetAnApiVersion200ApplicationJsonVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=api" }),
        __metadata("design:type", String)
    ], GetAnApiVersion200ApplicationJsonVersion.prototype, "api", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", String)
    ], GetAnApiVersion200ApplicationJsonVersion.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdBy" }),
        __metadata("design:type", String)
    ], GetAnApiVersion200ApplicationJsonVersion.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetAnApiVersion200ApplicationJsonVersion.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetAnApiVersion200ApplicationJsonVersion.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schema" }),
        __metadata("design:type", Array)
    ], GetAnApiVersion200ApplicationJsonVersion.prototype, "schema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", String)
    ], GetAnApiVersion200ApplicationJsonVersion.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedBy" }),
        __metadata("design:type", String)
    ], GetAnApiVersion200ApplicationJsonVersion.prototype, "updatedBy", void 0);
    return GetAnApiVersion200ApplicationJsonVersion;
}(SpeakeasyBase));
export { GetAnApiVersion200ApplicationJsonVersion };
var GetAnApiVersion200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAnApiVersion200ApplicationJson, _super);
    function GetAnApiVersion200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", GetAnApiVersion200ApplicationJsonVersion)
    ], GetAnApiVersion200ApplicationJson.prototype, "version", void 0);
    return GetAnApiVersion200ApplicationJson;
}(SpeakeasyBase));
export { GetAnApiVersion200ApplicationJson };
var GetAnApiVersionRequest = /** @class */ (function (_super) {
    __extends(GetAnApiVersionRequest, _super);
    function GetAnApiVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnApiVersionPathParams)
    ], GetAnApiVersionRequest.prototype, "pathParams", void 0);
    return GetAnApiVersionRequest;
}(SpeakeasyBase));
export { GetAnApiVersionRequest };
var GetAnApiVersionResponse = /** @class */ (function (_super) {
    __extends(GetAnApiVersionResponse, _super);
    function GetAnApiVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAnApiVersionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAnApiVersionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnApiVersion200ApplicationJson)
    ], GetAnApiVersionResponse.prototype, "getAnApiVersion200ApplicationJsonObject", void 0);
    return GetAnApiVersionResponse;
}(SpeakeasyBase));
export { GetAnApiVersionResponse };
