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
var GetAttributePoolUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(GetAttributePoolUsingPostQueryParams, _super);
    function GetAttributePoolUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], GetAttributePoolUsingPostQueryParams.prototype, "padId", void 0);
    return GetAttributePoolUsingPostQueryParams;
}(SpeakeasyBase));
export { GetAttributePoolUsingPostQueryParams };
var GetAttributePoolUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAttributePoolUsingPost200ApplicationJson, _super);
    function GetAttributePoolUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetAttributePoolUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetAttributePoolUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAttributePoolUsingPost200ApplicationJson.prototype, "message", void 0);
    return GetAttributePoolUsingPost200ApplicationJson;
}(SpeakeasyBase));
export { GetAttributePoolUsingPost200ApplicationJson };
var GetAttributePoolUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAttributePoolUsingPost400ApplicationJson, _super);
    function GetAttributePoolUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetAttributePoolUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetAttributePoolUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAttributePoolUsingPost400ApplicationJson.prototype, "message", void 0);
    return GetAttributePoolUsingPost400ApplicationJson;
}(SpeakeasyBase));
export { GetAttributePoolUsingPost400ApplicationJson };
var GetAttributePoolUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAttributePoolUsingPost401ApplicationJson, _super);
    function GetAttributePoolUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetAttributePoolUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetAttributePoolUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAttributePoolUsingPost401ApplicationJson.prototype, "message", void 0);
    return GetAttributePoolUsingPost401ApplicationJson;
}(SpeakeasyBase));
export { GetAttributePoolUsingPost401ApplicationJson };
var GetAttributePoolUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAttributePoolUsingPost500ApplicationJson, _super);
    function GetAttributePoolUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetAttributePoolUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetAttributePoolUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAttributePoolUsingPost500ApplicationJson.prototype, "message", void 0);
    return GetAttributePoolUsingPost500ApplicationJson;
}(SpeakeasyBase));
export { GetAttributePoolUsingPost500ApplicationJson };
var GetAttributePoolUsingPostRequest = /** @class */ (function (_super) {
    __extends(GetAttributePoolUsingPostRequest, _super);
    function GetAttributePoolUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAttributePoolUsingPostQueryParams)
    ], GetAttributePoolUsingPostRequest.prototype, "queryParams", void 0);
    return GetAttributePoolUsingPostRequest;
}(SpeakeasyBase));
export { GetAttributePoolUsingPostRequest };
var GetAttributePoolUsingPostResponse = /** @class */ (function (_super) {
    __extends(GetAttributePoolUsingPostResponse, _super);
    function GetAttributePoolUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAttributePoolUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAttributePoolUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAttributePoolUsingPost200ApplicationJson)
    ], GetAttributePoolUsingPostResponse.prototype, "getAttributePoolUsingPost200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAttributePoolUsingPost400ApplicationJson)
    ], GetAttributePoolUsingPostResponse.prototype, "getAttributePoolUsingPost400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAttributePoolUsingPost401ApplicationJson)
    ], GetAttributePoolUsingPostResponse.prototype, "getAttributePoolUsingPost401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAttributePoolUsingPost500ApplicationJson)
    ], GetAttributePoolUsingPostResponse.prototype, "getAttributePoolUsingPost500ApplicationJsonObject", void 0);
    return GetAttributePoolUsingPostResponse;
}(SpeakeasyBase));
export { GetAttributePoolUsingPostResponse };
