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
var GetDocumentResourcePathParams = /** @class */ (function (_super) {
    __extends(GetDocumentResourcePathParams, _super);
    function GetDocumentResourcePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=document_id" }),
        __metadata("design:type", String)
    ], GetDocumentResourcePathParams.prototype, "documentId", void 0);
    return GetDocumentResourcePathParams;
}(SpeakeasyBase));
export { GetDocumentResourcePathParams };
var GetDocumentResourceHeaders = /** @class */ (function (_super) {
    __extends(GetDocumentResourceHeaders, _super);
    function GetDocumentResourceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Fields" }),
        __metadata("design:type", String)
    ], GetDocumentResourceHeaders.prototype, "xFields", void 0);
    return GetDocumentResourceHeaders;
}(SpeakeasyBase));
export { GetDocumentResourceHeaders };
var GetDocumentResourceRequest = /** @class */ (function (_super) {
    __extends(GetDocumentResourceRequest, _super);
    function GetDocumentResourceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDocumentResourcePathParams)
    ], GetDocumentResourceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDocumentResourceHeaders)
    ], GetDocumentResourceRequest.prototype, "headers", void 0);
    return GetDocumentResourceRequest;
}(SpeakeasyBase));
export { GetDocumentResourceRequest };
var GetDocumentResourceResponse = /** @class */ (function (_super) {
    __extends(GetDocumentResourceResponse, _super);
    function GetDocumentResourceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDocumentResourceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DocumentModelGet)
    ], GetDocumentResourceResponse.prototype, "documentModelGet", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDocumentResourceResponse.prototype, "statusCode", void 0);
    return GetDocumentResourceResponse;
}(SpeakeasyBase));
export { GetDocumentResourceResponse };
