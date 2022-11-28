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
var ImportExportedData200ApplicationJsonCollections = /** @class */ (function (_super) {
    __extends(ImportExportedData200ApplicationJsonCollections, _super);
    function ImportExportedData200ApplicationJsonCollections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ImportExportedData200ApplicationJsonCollections.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ImportExportedData200ApplicationJsonCollections.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], ImportExportedData200ApplicationJsonCollections.prototype, "uid", void 0);
    return ImportExportedData200ApplicationJsonCollections;
}(SpeakeasyBase));
export { ImportExportedData200ApplicationJsonCollections };
var ImportExportedData200ApplicationJson = /** @class */ (function (_super) {
    __extends(ImportExportedData200ApplicationJson, _super);
    function ImportExportedData200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collections", elemType: ImportExportedData200ApplicationJsonCollections }),
        __metadata("design:type", Array)
    ], ImportExportedData200ApplicationJson.prototype, "collections", void 0);
    return ImportExportedData200ApplicationJson;
}(SpeakeasyBase));
export { ImportExportedData200ApplicationJson };
var ImportExportedData400ApplicationJsonErrorDetails = /** @class */ (function (_super) {
    __extends(ImportExportedData400ApplicationJsonErrorDetails, _super);
    function ImportExportedData400ApplicationJsonErrorDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=param" }),
        __metadata("design:type", String)
    ], ImportExportedData400ApplicationJsonErrorDetails.prototype, "param", void 0);
    return ImportExportedData400ApplicationJsonErrorDetails;
}(SpeakeasyBase));
export { ImportExportedData400ApplicationJsonErrorDetails };
var ImportExportedData400ApplicationJsonError = /** @class */ (function (_super) {
    __extends(ImportExportedData400ApplicationJsonError, _super);
    function ImportExportedData400ApplicationJsonError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=details" }),
        __metadata("design:type", ImportExportedData400ApplicationJsonErrorDetails)
    ], ImportExportedData400ApplicationJsonError.prototype, "details", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ImportExportedData400ApplicationJsonError.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ImportExportedData400ApplicationJsonError.prototype, "name", void 0);
    return ImportExportedData400ApplicationJsonError;
}(SpeakeasyBase));
export { ImportExportedData400ApplicationJsonError };
var ImportExportedData400ApplicationJson = /** @class */ (function (_super) {
    __extends(ImportExportedData400ApplicationJson, _super);
    function ImportExportedData400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", ImportExportedData400ApplicationJsonError)
    ], ImportExportedData400ApplicationJson.prototype, "error", void 0);
    return ImportExportedData400ApplicationJson;
}(SpeakeasyBase));
export { ImportExportedData400ApplicationJson };
var ImportExportedDataRequest = /** @class */ (function (_super) {
    __extends(ImportExportedDataRequest, _super);
    function ImportExportedDataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/octet-stream" }),
        __metadata("design:type", Uint8Array)
    ], ImportExportedDataRequest.prototype, "request", void 0);
    return ImportExportedDataRequest;
}(SpeakeasyBase));
export { ImportExportedDataRequest };
var ImportExportedDataResponse = /** @class */ (function (_super) {
    __extends(ImportExportedDataResponse, _super);
    function ImportExportedDataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ImportExportedDataResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ImportExportedDataResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ImportExportedData200ApplicationJson)
    ], ImportExportedDataResponse.prototype, "importExportedData200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ImportExportedData400ApplicationJson)
    ], ImportExportedDataResponse.prototype, "importExportedData400ApplicationJsonObject", void 0);
    return ImportExportedDataResponse;
}(SpeakeasyBase));
export { ImportExportedDataResponse };
