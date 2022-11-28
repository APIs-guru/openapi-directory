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
var GetContractTestRelationsPathParams = /** @class */ (function (_super) {
    __extends(GetContractTestRelationsPathParams, _super);
    function GetContractTestRelationsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" }),
        __metadata("design:type", String)
    ], GetContractTestRelationsPathParams.prototype, "apiId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" }),
        __metadata("design:type", String)
    ], GetContractTestRelationsPathParams.prototype, "apiVersionId", void 0);
    return GetContractTestRelationsPathParams;
}(SpeakeasyBase));
export { GetContractTestRelationsPathParams };
var GetContractTestRelations200ApplicationJsonContracttest = /** @class */ (function (_super) {
    __extends(GetContractTestRelations200ApplicationJsonContracttest, _super);
    function GetContractTestRelations200ApplicationJsonContracttest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collectionId" }),
        __metadata("design:type", String)
    ], GetContractTestRelations200ApplicationJsonContracttest.prototype, "collectionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetContractTestRelations200ApplicationJsonContracttest.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetContractTestRelations200ApplicationJsonContracttest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", String)
    ], GetContractTestRelations200ApplicationJsonContracttest.prototype, "updatedAt", void 0);
    return GetContractTestRelations200ApplicationJsonContracttest;
}(SpeakeasyBase));
export { GetContractTestRelations200ApplicationJsonContracttest };
var GetContractTestRelations200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetContractTestRelations200ApplicationJson, _super);
    function GetContractTestRelations200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contracttest", elemType: GetContractTestRelations200ApplicationJsonContracttest }),
        __metadata("design:type", Array)
    ], GetContractTestRelations200ApplicationJson.prototype, "contracttest", void 0);
    return GetContractTestRelations200ApplicationJson;
}(SpeakeasyBase));
export { GetContractTestRelations200ApplicationJson };
var GetContractTestRelationsRequest = /** @class */ (function (_super) {
    __extends(GetContractTestRelationsRequest, _super);
    function GetContractTestRelationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetContractTestRelationsPathParams)
    ], GetContractTestRelationsRequest.prototype, "pathParams", void 0);
    return GetContractTestRelationsRequest;
}(SpeakeasyBase));
export { GetContractTestRelationsRequest };
var GetContractTestRelationsResponse = /** @class */ (function (_super) {
    __extends(GetContractTestRelationsResponse, _super);
    function GetContractTestRelationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetContractTestRelationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetContractTestRelationsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetContractTestRelations200ApplicationJson)
    ], GetContractTestRelationsResponse.prototype, "getContractTestRelations200ApplicationJsonObject", void 0);
    return GetContractTestRelationsResponse;
}(SpeakeasyBase));
export { GetContractTestRelationsResponse };
