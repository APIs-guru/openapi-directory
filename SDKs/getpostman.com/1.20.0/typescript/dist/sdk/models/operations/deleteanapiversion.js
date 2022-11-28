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
var DeleteAnApiVersionPathParams = /** @class */ (function (_super) {
    __extends(DeleteAnApiVersionPathParams, _super);
    function DeleteAnApiVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" }),
        __metadata("design:type", String)
    ], DeleteAnApiVersionPathParams.prototype, "apiId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" }),
        __metadata("design:type", String)
    ], DeleteAnApiVersionPathParams.prototype, "apiVersionId", void 0);
    return DeleteAnApiVersionPathParams;
}(SpeakeasyBase));
export { DeleteAnApiVersionPathParams };
var DeleteAnApiVersion200ApplicationJsonVersion = /** @class */ (function (_super) {
    __extends(DeleteAnApiVersion200ApplicationJsonVersion, _super);
    function DeleteAnApiVersion200ApplicationJsonVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], DeleteAnApiVersion200ApplicationJsonVersion.prototype, "id", void 0);
    return DeleteAnApiVersion200ApplicationJsonVersion;
}(SpeakeasyBase));
export { DeleteAnApiVersion200ApplicationJsonVersion };
var DeleteAnApiVersion200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteAnApiVersion200ApplicationJson, _super);
    function DeleteAnApiVersion200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", DeleteAnApiVersion200ApplicationJsonVersion)
    ], DeleteAnApiVersion200ApplicationJson.prototype, "version", void 0);
    return DeleteAnApiVersion200ApplicationJson;
}(SpeakeasyBase));
export { DeleteAnApiVersion200ApplicationJson };
var DeleteAnApiVersionRequest = /** @class */ (function (_super) {
    __extends(DeleteAnApiVersionRequest, _super);
    function DeleteAnApiVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAnApiVersionPathParams)
    ], DeleteAnApiVersionRequest.prototype, "pathParams", void 0);
    return DeleteAnApiVersionRequest;
}(SpeakeasyBase));
export { DeleteAnApiVersionRequest };
var DeleteAnApiVersionResponse = /** @class */ (function (_super) {
    __extends(DeleteAnApiVersionResponse, _super);
    function DeleteAnApiVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteAnApiVersionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteAnApiVersionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAnApiVersion200ApplicationJson)
    ], DeleteAnApiVersionResponse.prototype, "deleteAnApiVersion200ApplicationJsonObject", void 0);
    return DeleteAnApiVersionResponse;
}(SpeakeasyBase));
export { DeleteAnApiVersionResponse };
