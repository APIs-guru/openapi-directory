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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var GetListOfSelfUploadedDocumentsIdPathParams = /** @class */ (function (_super) {
    __extends(GetListOfSelfUploadedDocumentsIdPathParams, _super);
    function GetListOfSelfUploadedDocumentsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetListOfSelfUploadedDocumentsIdPathParams.prototype, "id", void 0);
    return GetListOfSelfUploadedDocumentsIdPathParams;
}(SpeakeasyBase));
export { GetListOfSelfUploadedDocumentsIdPathParams };
var GetListOfSelfUploadedDocumentsIdSecurity = /** @class */ (function (_super) {
    __extends(GetListOfSelfUploadedDocumentsIdSecurity, _super);
    function GetListOfSelfUploadedDocumentsIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], GetListOfSelfUploadedDocumentsIdSecurity.prototype, "bearerAuth", void 0);
    return GetListOfSelfUploadedDocumentsIdSecurity;
}(SpeakeasyBase));
export { GetListOfSelfUploadedDocumentsIdSecurity };
var GetListOfSelfUploadedDocumentsIdRequest = /** @class */ (function (_super) {
    __extends(GetListOfSelfUploadedDocumentsIdRequest, _super);
    function GetListOfSelfUploadedDocumentsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetListOfSelfUploadedDocumentsIdPathParams)
    ], GetListOfSelfUploadedDocumentsIdRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetListOfSelfUploadedDocumentsIdSecurity)
    ], GetListOfSelfUploadedDocumentsIdRequest.prototype, "security", void 0);
    return GetListOfSelfUploadedDocumentsIdRequest;
}(SpeakeasyBase));
export { GetListOfSelfUploadedDocumentsIdRequest };
var GetListOfSelfUploadedDocumentsId401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetListOfSelfUploadedDocumentsId401ApplicationJson, _super);
    function GetListOfSelfUploadedDocumentsId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetListOfSelfUploadedDocumentsId401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], GetListOfSelfUploadedDocumentsId401ApplicationJson.prototype, "errorDescription", void 0);
    return GetListOfSelfUploadedDocumentsId401ApplicationJson;
}(SpeakeasyBase));
export { GetListOfSelfUploadedDocumentsId401ApplicationJson };
var GetListOfSelfUploadedDocumentsId404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetListOfSelfUploadedDocumentsId404ApplicationJson, _super);
    function GetListOfSelfUploadedDocumentsId404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetListOfSelfUploadedDocumentsId404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], GetListOfSelfUploadedDocumentsId404ApplicationJson.prototype, "errorDescription", void 0);
    return GetListOfSelfUploadedDocumentsId404ApplicationJson;
}(SpeakeasyBase));
export { GetListOfSelfUploadedDocumentsId404ApplicationJson };
var GetListOfSelfUploadedDocumentsId500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetListOfSelfUploadedDocumentsId500ApplicationJson, _super);
    function GetListOfSelfUploadedDocumentsId500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetListOfSelfUploadedDocumentsId500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], GetListOfSelfUploadedDocumentsId500ApplicationJson.prototype, "errorDescription", void 0);
    return GetListOfSelfUploadedDocumentsId500ApplicationJson;
}(SpeakeasyBase));
export { GetListOfSelfUploadedDocumentsId500ApplicationJson };
var GetListOfSelfUploadedDocumentsIdResponse = /** @class */ (function (_super) {
    __extends(GetListOfSelfUploadedDocumentsIdResponse, _super);
    function GetListOfSelfUploadedDocumentsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetListOfSelfUploadedDocumentsIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetListOfSelfUploadedDocumentsId401ApplicationJson)
    ], GetListOfSelfUploadedDocumentsIdResponse.prototype, "getListOfSelfUploadedDocumentsId401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetListOfSelfUploadedDocumentsId404ApplicationJson)
    ], GetListOfSelfUploadedDocumentsIdResponse.prototype, "getListOfSelfUploadedDocumentsId404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetListOfSelfUploadedDocumentsId500ApplicationJson)
    ], GetListOfSelfUploadedDocumentsIdResponse.prototype, "getListOfSelfUploadedDocumentsId500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetListOfSelfUploadedDocumentsIdResponse.prototype, "sample", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetListOfSelfUploadedDocumentsIdResponse.prototype, "statusCode", void 0);
    return GetListOfSelfUploadedDocumentsIdResponse;
}(SpeakeasyBase));
export { GetListOfSelfUploadedDocumentsIdResponse };
