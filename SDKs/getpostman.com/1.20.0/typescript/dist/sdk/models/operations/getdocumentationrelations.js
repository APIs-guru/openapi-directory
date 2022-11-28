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
var GetDocumentationRelationsPathParams = /** @class */ (function (_super) {
    __extends(GetDocumentationRelationsPathParams, _super);
    function GetDocumentationRelationsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" }),
        __metadata("design:type", String)
    ], GetDocumentationRelationsPathParams.prototype, "apiId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" }),
        __metadata("design:type", String)
    ], GetDocumentationRelationsPathParams.prototype, "apiVersionId", void 0);
    return GetDocumentationRelationsPathParams;
}(SpeakeasyBase));
export { GetDocumentationRelationsPathParams };
var GetDocumentationRelations200ApplicationJsonDocumentation = /** @class */ (function (_super) {
    __extends(GetDocumentationRelations200ApplicationJsonDocumentation, _super);
    function GetDocumentationRelations200ApplicationJsonDocumentation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collectionId" }),
        __metadata("design:type", String)
    ], GetDocumentationRelations200ApplicationJsonDocumentation.prototype, "collectionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetDocumentationRelations200ApplicationJsonDocumentation.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetDocumentationRelations200ApplicationJsonDocumentation.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", String)
    ], GetDocumentationRelations200ApplicationJsonDocumentation.prototype, "updatedAt", void 0);
    return GetDocumentationRelations200ApplicationJsonDocumentation;
}(SpeakeasyBase));
export { GetDocumentationRelations200ApplicationJsonDocumentation };
var GetDocumentationRelations200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDocumentationRelations200ApplicationJson, _super);
    function GetDocumentationRelations200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation", elemType: GetDocumentationRelations200ApplicationJsonDocumentation }),
        __metadata("design:type", Array)
    ], GetDocumentationRelations200ApplicationJson.prototype, "documentation", void 0);
    return GetDocumentationRelations200ApplicationJson;
}(SpeakeasyBase));
export { GetDocumentationRelations200ApplicationJson };
var GetDocumentationRelationsRequest = /** @class */ (function (_super) {
    __extends(GetDocumentationRelationsRequest, _super);
    function GetDocumentationRelationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDocumentationRelationsPathParams)
    ], GetDocumentationRelationsRequest.prototype, "pathParams", void 0);
    return GetDocumentationRelationsRequest;
}(SpeakeasyBase));
export { GetDocumentationRelationsRequest };
var GetDocumentationRelationsResponse = /** @class */ (function (_super) {
    __extends(GetDocumentationRelationsResponse, _super);
    function GetDocumentationRelationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDocumentationRelationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDocumentationRelationsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDocumentationRelations200ApplicationJson)
    ], GetDocumentationRelationsResponse.prototype, "getDocumentationRelations200ApplicationJsonObject", void 0);
    return GetDocumentationRelationsResponse;
}(SpeakeasyBase));
export { GetDocumentationRelationsResponse };
