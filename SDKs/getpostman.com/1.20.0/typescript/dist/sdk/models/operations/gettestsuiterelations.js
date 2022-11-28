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
var GetTestSuiteRelationsPathParams = /** @class */ (function (_super) {
    __extends(GetTestSuiteRelationsPathParams, _super);
    function GetTestSuiteRelationsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" }),
        __metadata("design:type", String)
    ], GetTestSuiteRelationsPathParams.prototype, "apiId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" }),
        __metadata("design:type", String)
    ], GetTestSuiteRelationsPathParams.prototype, "apiVersionId", void 0);
    return GetTestSuiteRelationsPathParams;
}(SpeakeasyBase));
export { GetTestSuiteRelationsPathParams };
var GetTestSuiteRelations200ApplicationJsonTestsuite = /** @class */ (function (_super) {
    __extends(GetTestSuiteRelations200ApplicationJsonTestsuite, _super);
    function GetTestSuiteRelations200ApplicationJsonTestsuite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collectionId" }),
        __metadata("design:type", String)
    ], GetTestSuiteRelations200ApplicationJsonTestsuite.prototype, "collectionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetTestSuiteRelations200ApplicationJsonTestsuite.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetTestSuiteRelations200ApplicationJsonTestsuite.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", String)
    ], GetTestSuiteRelations200ApplicationJsonTestsuite.prototype, "updatedAt", void 0);
    return GetTestSuiteRelations200ApplicationJsonTestsuite;
}(SpeakeasyBase));
export { GetTestSuiteRelations200ApplicationJsonTestsuite };
var GetTestSuiteRelations200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTestSuiteRelations200ApplicationJson, _super);
    function GetTestSuiteRelations200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testsuite", elemType: GetTestSuiteRelations200ApplicationJsonTestsuite }),
        __metadata("design:type", Array)
    ], GetTestSuiteRelations200ApplicationJson.prototype, "testsuite", void 0);
    return GetTestSuiteRelations200ApplicationJson;
}(SpeakeasyBase));
export { GetTestSuiteRelations200ApplicationJson };
var GetTestSuiteRelationsRequest = /** @class */ (function (_super) {
    __extends(GetTestSuiteRelationsRequest, _super);
    function GetTestSuiteRelationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTestSuiteRelationsPathParams)
    ], GetTestSuiteRelationsRequest.prototype, "pathParams", void 0);
    return GetTestSuiteRelationsRequest;
}(SpeakeasyBase));
export { GetTestSuiteRelationsRequest };
var GetTestSuiteRelationsResponse = /** @class */ (function (_super) {
    __extends(GetTestSuiteRelationsResponse, _super);
    function GetTestSuiteRelationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTestSuiteRelationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTestSuiteRelationsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTestSuiteRelations200ApplicationJson)
    ], GetTestSuiteRelationsResponse.prototype, "getTestSuiteRelations200ApplicationJsonObject", void 0);
    return GetTestSuiteRelationsResponse;
}(SpeakeasyBase));
export { GetTestSuiteRelationsResponse };
