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
var GetEnvironmentRelationsPathParams = /** @class */ (function (_super) {
    __extends(GetEnvironmentRelationsPathParams, _super);
    function GetEnvironmentRelationsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" }),
        __metadata("design:type", String)
    ], GetEnvironmentRelationsPathParams.prototype, "apiId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" }),
        __metadata("design:type", String)
    ], GetEnvironmentRelationsPathParams.prototype, "apiVersionId", void 0);
    return GetEnvironmentRelationsPathParams;
}(SpeakeasyBase));
export { GetEnvironmentRelationsPathParams };
var GetEnvironmentRelations200ApplicationJsonEnvironment = /** @class */ (function (_super) {
    __extends(GetEnvironmentRelations200ApplicationJsonEnvironment, _super);
    function GetEnvironmentRelations200ApplicationJsonEnvironment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetEnvironmentRelations200ApplicationJsonEnvironment.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetEnvironmentRelations200ApplicationJsonEnvironment.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", String)
    ], GetEnvironmentRelations200ApplicationJsonEnvironment.prototype, "updatedAt", void 0);
    return GetEnvironmentRelations200ApplicationJsonEnvironment;
}(SpeakeasyBase));
export { GetEnvironmentRelations200ApplicationJsonEnvironment };
var GetEnvironmentRelations200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetEnvironmentRelations200ApplicationJson, _super);
    function GetEnvironmentRelations200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environment", elemType: GetEnvironmentRelations200ApplicationJsonEnvironment }),
        __metadata("design:type", Array)
    ], GetEnvironmentRelations200ApplicationJson.prototype, "environment", void 0);
    return GetEnvironmentRelations200ApplicationJson;
}(SpeakeasyBase));
export { GetEnvironmentRelations200ApplicationJson };
var GetEnvironmentRelationsRequest = /** @class */ (function (_super) {
    __extends(GetEnvironmentRelationsRequest, _super);
    function GetEnvironmentRelationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEnvironmentRelationsPathParams)
    ], GetEnvironmentRelationsRequest.prototype, "pathParams", void 0);
    return GetEnvironmentRelationsRequest;
}(SpeakeasyBase));
export { GetEnvironmentRelationsRequest };
var GetEnvironmentRelationsResponse = /** @class */ (function (_super) {
    __extends(GetEnvironmentRelationsResponse, _super);
    function GetEnvironmentRelationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEnvironmentRelationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEnvironmentRelationsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEnvironmentRelations200ApplicationJson)
    ], GetEnvironmentRelationsResponse.prototype, "getEnvironmentRelations200ApplicationJsonObject", void 0);
    return GetEnvironmentRelationsResponse;
}(SpeakeasyBase));
export { GetEnvironmentRelationsResponse };
