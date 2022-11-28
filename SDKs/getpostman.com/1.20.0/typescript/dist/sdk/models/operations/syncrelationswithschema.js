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
var SyncRelationsWithSchemaPathParams = /** @class */ (function (_super) {
    __extends(SyncRelationsWithSchemaPathParams, _super);
    function SyncRelationsWithSchemaPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" }),
        __metadata("design:type", String)
    ], SyncRelationsWithSchemaPathParams.prototype, "apiId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" }),
        __metadata("design:type", String)
    ], SyncRelationsWithSchemaPathParams.prototype, "apiVersionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=entityId" }),
        __metadata("design:type", String)
    ], SyncRelationsWithSchemaPathParams.prototype, "entityId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=entityType" }),
        __metadata("design:type", String)
    ], SyncRelationsWithSchemaPathParams.prototype, "entityType", void 0);
    return SyncRelationsWithSchemaPathParams;
}(SpeakeasyBase));
export { SyncRelationsWithSchemaPathParams };
var SyncRelationsWithSchema200ApplicationJson = /** @class */ (function (_super) {
    __extends(SyncRelationsWithSchema200ApplicationJson, _super);
    function SyncRelationsWithSchema200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], SyncRelationsWithSchema200ApplicationJson.prototype, "success", void 0);
    return SyncRelationsWithSchema200ApplicationJson;
}(SpeakeasyBase));
export { SyncRelationsWithSchema200ApplicationJson };
var SyncRelationsWithSchema400ApplicationJsonError = /** @class */ (function (_super) {
    __extends(SyncRelationsWithSchema400ApplicationJsonError, _super);
    function SyncRelationsWithSchema400ApplicationJsonError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SyncRelationsWithSchema400ApplicationJsonError.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SyncRelationsWithSchema400ApplicationJsonError.prototype, "name", void 0);
    return SyncRelationsWithSchema400ApplicationJsonError;
}(SpeakeasyBase));
export { SyncRelationsWithSchema400ApplicationJsonError };
var SyncRelationsWithSchema400ApplicationJson = /** @class */ (function (_super) {
    __extends(SyncRelationsWithSchema400ApplicationJson, _super);
    function SyncRelationsWithSchema400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", SyncRelationsWithSchema400ApplicationJsonError)
    ], SyncRelationsWithSchema400ApplicationJson.prototype, "error", void 0);
    return SyncRelationsWithSchema400ApplicationJson;
}(SpeakeasyBase));
export { SyncRelationsWithSchema400ApplicationJson };
var SyncRelationsWithSchemaRequest = /** @class */ (function (_super) {
    __extends(SyncRelationsWithSchemaRequest, _super);
    function SyncRelationsWithSchemaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SyncRelationsWithSchemaPathParams)
    ], SyncRelationsWithSchemaRequest.prototype, "pathParams", void 0);
    return SyncRelationsWithSchemaRequest;
}(SpeakeasyBase));
export { SyncRelationsWithSchemaRequest };
var SyncRelationsWithSchemaResponse = /** @class */ (function (_super) {
    __extends(SyncRelationsWithSchemaResponse, _super);
    function SyncRelationsWithSchemaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SyncRelationsWithSchemaResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SyncRelationsWithSchemaResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SyncRelationsWithSchema200ApplicationJson)
    ], SyncRelationsWithSchemaResponse.prototype, "syncRelationsWithSchema200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SyncRelationsWithSchema400ApplicationJson)
    ], SyncRelationsWithSchemaResponse.prototype, "syncRelationsWithSchema400ApplicationJsonObject", void 0);
    return SyncRelationsWithSchemaResponse;
}(SpeakeasyBase));
export { SyncRelationsWithSchemaResponse };
