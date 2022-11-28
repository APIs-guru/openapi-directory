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
var GetAllApiVersionsPathParams = /** @class */ (function (_super) {
    __extends(GetAllApiVersionsPathParams, _super);
    function GetAllApiVersionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" }),
        __metadata("design:type", String)
    ], GetAllApiVersionsPathParams.prototype, "apiId", void 0);
    return GetAllApiVersionsPathParams;
}(SpeakeasyBase));
export { GetAllApiVersionsPathParams };
var GetAllApiVersions200ApplicationJsonVersions = /** @class */ (function (_super) {
    __extends(GetAllApiVersions200ApplicationJsonVersions, _super);
    function GetAllApiVersions200ApplicationJsonVersions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", String)
    ], GetAllApiVersions200ApplicationJsonVersions.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdBy" }),
        __metadata("design:type", String)
    ], GetAllApiVersions200ApplicationJsonVersions.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetAllApiVersions200ApplicationJsonVersions.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetAllApiVersions200ApplicationJsonVersions.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetAllApiVersions200ApplicationJsonVersions.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=summary" }),
        __metadata("design:type", String)
    ], GetAllApiVersions200ApplicationJsonVersions.prototype, "summary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", String)
    ], GetAllApiVersions200ApplicationJsonVersions.prototype, "updatedAt", void 0);
    return GetAllApiVersions200ApplicationJsonVersions;
}(SpeakeasyBase));
export { GetAllApiVersions200ApplicationJsonVersions };
var GetAllApiVersions200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAllApiVersions200ApplicationJson, _super);
    function GetAllApiVersions200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=versions", elemType: GetAllApiVersions200ApplicationJsonVersions }),
        __metadata("design:type", Array)
    ], GetAllApiVersions200ApplicationJson.prototype, "versions", void 0);
    return GetAllApiVersions200ApplicationJson;
}(SpeakeasyBase));
export { GetAllApiVersions200ApplicationJson };
var GetAllApiVersionsRequest = /** @class */ (function (_super) {
    __extends(GetAllApiVersionsRequest, _super);
    function GetAllApiVersionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAllApiVersionsPathParams)
    ], GetAllApiVersionsRequest.prototype, "pathParams", void 0);
    return GetAllApiVersionsRequest;
}(SpeakeasyBase));
export { GetAllApiVersionsRequest };
var GetAllApiVersionsResponse = /** @class */ (function (_super) {
    __extends(GetAllApiVersionsResponse, _super);
    function GetAllApiVersionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAllApiVersionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAllApiVersionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAllApiVersions200ApplicationJson)
    ], GetAllApiVersionsResponse.prototype, "getAllApiVersions200ApplicationJsonObject", void 0);
    return GetAllApiVersionsResponse;
}(SpeakeasyBase));
export { GetAllApiVersionsResponse };
