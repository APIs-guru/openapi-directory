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
var DatabaseDeleteDocumentPathParams = /** @class */ (function (_super) {
    __extends(DatabaseDeleteDocumentPathParams, _super);
    function DatabaseDeleteDocumentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collectionId" }),
        __metadata("design:type", String)
    ], DatabaseDeleteDocumentPathParams.prototype, "collectionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=documentId" }),
        __metadata("design:type", String)
    ], DatabaseDeleteDocumentPathParams.prototype, "documentId", void 0);
    return DatabaseDeleteDocumentPathParams;
}(SpeakeasyBase));
export { DatabaseDeleteDocumentPathParams };
var DatabaseDeleteDocumentSecurity = /** @class */ (function (_super) {
    __extends(DatabaseDeleteDocumentSecurity, _super);
    function DatabaseDeleteDocumentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeJwt)
    ], DatabaseDeleteDocumentSecurity.prototype, "jwt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], DatabaseDeleteDocumentSecurity.prototype, "project", void 0);
    return DatabaseDeleteDocumentSecurity;
}(SpeakeasyBase));
export { DatabaseDeleteDocumentSecurity };
var DatabaseDeleteDocumentRequest = /** @class */ (function (_super) {
    __extends(DatabaseDeleteDocumentRequest, _super);
    function DatabaseDeleteDocumentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatabaseDeleteDocumentPathParams)
    ], DatabaseDeleteDocumentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatabaseDeleteDocumentSecurity)
    ], DatabaseDeleteDocumentRequest.prototype, "security", void 0);
    return DatabaseDeleteDocumentRequest;
}(SpeakeasyBase));
export { DatabaseDeleteDocumentRequest };
var DatabaseDeleteDocumentResponse = /** @class */ (function (_super) {
    __extends(DatabaseDeleteDocumentResponse, _super);
    function DatabaseDeleteDocumentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatabaseDeleteDocumentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatabaseDeleteDocumentResponse.prototype, "statusCode", void 0);
    return DatabaseDeleteDocumentResponse;
}(SpeakeasyBase));
export { DatabaseDeleteDocumentResponse };
