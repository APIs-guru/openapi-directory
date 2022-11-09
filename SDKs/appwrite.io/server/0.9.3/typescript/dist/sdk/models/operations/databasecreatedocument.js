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
var DatabaseCreateDocumentPathParams = /** @class */ (function (_super) {
    __extends(DatabaseCreateDocumentPathParams, _super);
    function DatabaseCreateDocumentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=collectionId" }),
        __metadata("design:type", String)
    ], DatabaseCreateDocumentPathParams.prototype, "collectionId", void 0);
    return DatabaseCreateDocumentPathParams;
}(SpeakeasyBase));
export { DatabaseCreateDocumentPathParams };
var DatabaseCreateDocumentRequestBody = /** @class */ (function (_super) {
    __extends(DatabaseCreateDocumentRequestBody, _super);
    function DatabaseCreateDocumentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], DatabaseCreateDocumentRequestBody.prototype, "data", void 0);
    __decorate([
        Metadata({ data: "json, name=parentDocument" }),
        __metadata("design:type", String)
    ], DatabaseCreateDocumentRequestBody.prototype, "parentDocument", void 0);
    __decorate([
        Metadata({ data: "json, name=parentProperty" }),
        __metadata("design:type", String)
    ], DatabaseCreateDocumentRequestBody.prototype, "parentProperty", void 0);
    __decorate([
        Metadata({ data: "json, name=parentPropertyType" }),
        __metadata("design:type", String)
    ], DatabaseCreateDocumentRequestBody.prototype, "parentPropertyType", void 0);
    __decorate([
        Metadata({ data: "json, name=read" }),
        __metadata("design:type", Array)
    ], DatabaseCreateDocumentRequestBody.prototype, "read", void 0);
    __decorate([
        Metadata({ data: "json, name=write" }),
        __metadata("design:type", Array)
    ], DatabaseCreateDocumentRequestBody.prototype, "write", void 0);
    return DatabaseCreateDocumentRequestBody;
}(SpeakeasyBase));
export { DatabaseCreateDocumentRequestBody };
var DatabaseCreateDocumentSecurity = /** @class */ (function (_super) {
    __extends(DatabaseCreateDocumentSecurity, _super);
    function DatabaseCreateDocumentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeJwt)
    ], DatabaseCreateDocumentSecurity.prototype, "jwt", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeKey)
    ], DatabaseCreateDocumentSecurity.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], DatabaseCreateDocumentSecurity.prototype, "project", void 0);
    return DatabaseCreateDocumentSecurity;
}(SpeakeasyBase));
export { DatabaseCreateDocumentSecurity };
var DatabaseCreateDocumentRequest = /** @class */ (function (_super) {
    __extends(DatabaseCreateDocumentRequest, _super);
    function DatabaseCreateDocumentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DatabaseCreateDocumentPathParams)
    ], DatabaseCreateDocumentRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DatabaseCreateDocumentRequestBody)
    ], DatabaseCreateDocumentRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DatabaseCreateDocumentSecurity)
    ], DatabaseCreateDocumentRequest.prototype, "security", void 0);
    return DatabaseCreateDocumentRequest;
}(SpeakeasyBase));
export { DatabaseCreateDocumentRequest };
var DatabaseCreateDocumentResponse = /** @class */ (function (_super) {
    __extends(DatabaseCreateDocumentResponse, _super);
    function DatabaseCreateDocumentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DatabaseCreateDocumentResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DatabaseCreateDocumentResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], DatabaseCreateDocumentResponse.prototype, "document", void 0);
    return DatabaseCreateDocumentResponse;
}(SpeakeasyBase));
export { DatabaseCreateDocumentResponse };
