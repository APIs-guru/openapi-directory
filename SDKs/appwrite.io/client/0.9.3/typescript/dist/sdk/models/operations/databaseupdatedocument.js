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
var DatabaseUpdateDocumentPathParams = /** @class */ (function (_super) {
    __extends(DatabaseUpdateDocumentPathParams, _super);
    function DatabaseUpdateDocumentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=collectionId" }),
        __metadata("design:type", String)
    ], DatabaseUpdateDocumentPathParams.prototype, "collectionId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=documentId" }),
        __metadata("design:type", String)
    ], DatabaseUpdateDocumentPathParams.prototype, "documentId", void 0);
    return DatabaseUpdateDocumentPathParams;
}(SpeakeasyBase));
export { DatabaseUpdateDocumentPathParams };
var DatabaseUpdateDocumentRequestBody = /** @class */ (function (_super) {
    __extends(DatabaseUpdateDocumentRequestBody, _super);
    function DatabaseUpdateDocumentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], DatabaseUpdateDocumentRequestBody.prototype, "data", void 0);
    __decorate([
        Metadata({ data: "json, name=read" }),
        __metadata("design:type", Array)
    ], DatabaseUpdateDocumentRequestBody.prototype, "read", void 0);
    __decorate([
        Metadata({ data: "json, name=write" }),
        __metadata("design:type", Array)
    ], DatabaseUpdateDocumentRequestBody.prototype, "write", void 0);
    return DatabaseUpdateDocumentRequestBody;
}(SpeakeasyBase));
export { DatabaseUpdateDocumentRequestBody };
var DatabaseUpdateDocumentSecurity = /** @class */ (function (_super) {
    __extends(DatabaseUpdateDocumentSecurity, _super);
    function DatabaseUpdateDocumentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeJwt)
    ], DatabaseUpdateDocumentSecurity.prototype, "jwt", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], DatabaseUpdateDocumentSecurity.prototype, "project", void 0);
    return DatabaseUpdateDocumentSecurity;
}(SpeakeasyBase));
export { DatabaseUpdateDocumentSecurity };
var DatabaseUpdateDocumentRequest = /** @class */ (function (_super) {
    __extends(DatabaseUpdateDocumentRequest, _super);
    function DatabaseUpdateDocumentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DatabaseUpdateDocumentPathParams)
    ], DatabaseUpdateDocumentRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DatabaseUpdateDocumentRequestBody)
    ], DatabaseUpdateDocumentRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DatabaseUpdateDocumentSecurity)
    ], DatabaseUpdateDocumentRequest.prototype, "security", void 0);
    return DatabaseUpdateDocumentRequest;
}(SpeakeasyBase));
export { DatabaseUpdateDocumentRequest };
var DatabaseUpdateDocumentResponse = /** @class */ (function (_super) {
    __extends(DatabaseUpdateDocumentResponse, _super);
    function DatabaseUpdateDocumentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DatabaseUpdateDocumentResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DatabaseUpdateDocumentResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], DatabaseUpdateDocumentResponse.prototype, "document", void 0);
    return DatabaseUpdateDocumentResponse;
}(SpeakeasyBase));
export { DatabaseUpdateDocumentResponse };
