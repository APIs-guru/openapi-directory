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
import * as shared from "../shared";
var GetListOfSelfUploadedDocumentsSecurity = /** @class */ (function (_super) {
    __extends(GetListOfSelfUploadedDocumentsSecurity, _super);
    function GetListOfSelfUploadedDocumentsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], GetListOfSelfUploadedDocumentsSecurity.prototype, "bearerAuth", void 0);
    return GetListOfSelfUploadedDocumentsSecurity;
}(SpeakeasyBase));
export { GetListOfSelfUploadedDocumentsSecurity };
var GetListOfSelfUploadedDocuments401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetListOfSelfUploadedDocuments401ApplicationJson, _super);
    function GetListOfSelfUploadedDocuments401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetListOfSelfUploadedDocuments401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], GetListOfSelfUploadedDocuments401ApplicationJson.prototype, "errorDescription", void 0);
    return GetListOfSelfUploadedDocuments401ApplicationJson;
}(SpeakeasyBase));
export { GetListOfSelfUploadedDocuments401ApplicationJson };
var GetListOfSelfUploadedDocuments404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetListOfSelfUploadedDocuments404ApplicationJson, _super);
    function GetListOfSelfUploadedDocuments404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetListOfSelfUploadedDocuments404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], GetListOfSelfUploadedDocuments404ApplicationJson.prototype, "errorDescription", void 0);
    return GetListOfSelfUploadedDocuments404ApplicationJson;
}(SpeakeasyBase));
export { GetListOfSelfUploadedDocuments404ApplicationJson };
var GetListOfSelfUploadedDocuments500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetListOfSelfUploadedDocuments500ApplicationJson, _super);
    function GetListOfSelfUploadedDocuments500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetListOfSelfUploadedDocuments500ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], GetListOfSelfUploadedDocuments500ApplicationJson.prototype, "errorDescription", void 0);
    return GetListOfSelfUploadedDocuments500ApplicationJson;
}(SpeakeasyBase));
export { GetListOfSelfUploadedDocuments500ApplicationJson };
var GetListOfSelfUploadedDocumentsRequest = /** @class */ (function (_super) {
    __extends(GetListOfSelfUploadedDocumentsRequest, _super);
    function GetListOfSelfUploadedDocumentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListOfSelfUploadedDocumentsSecurity)
    ], GetListOfSelfUploadedDocumentsRequest.prototype, "security", void 0);
    return GetListOfSelfUploadedDocumentsRequest;
}(SpeakeasyBase));
export { GetListOfSelfUploadedDocumentsRequest };
var GetListOfSelfUploadedDocumentsResponse = /** @class */ (function (_super) {
    __extends(GetListOfSelfUploadedDocumentsResponse, _super);
    function GetListOfSelfUploadedDocumentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetListOfSelfUploadedDocumentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListOfSelfUploadedDocuments401ApplicationJson)
    ], GetListOfSelfUploadedDocumentsResponse.prototype, "getListOfSelfUploadedDocuments401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListOfSelfUploadedDocuments404ApplicationJson)
    ], GetListOfSelfUploadedDocumentsResponse.prototype, "getListOfSelfUploadedDocuments404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListOfSelfUploadedDocuments500ApplicationJson)
    ], GetListOfSelfUploadedDocumentsResponse.prototype, "getListOfSelfUploadedDocuments500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetListOfSelfUploadedDocumentsResponse.prototype, "sample", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetListOfSelfUploadedDocumentsResponse.prototype, "statusCode", void 0);
    return GetListOfSelfUploadedDocumentsResponse;
}(SpeakeasyBase));
export { GetListOfSelfUploadedDocumentsResponse };
