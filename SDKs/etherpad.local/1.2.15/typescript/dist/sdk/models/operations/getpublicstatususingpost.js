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
var GetPublicStatusUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(GetPublicStatusUsingPostQueryParams, _super);
    function GetPublicStatusUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], GetPublicStatusUsingPostQueryParams.prototype, "padId", void 0);
    return GetPublicStatusUsingPostQueryParams;
}(SpeakeasyBase));
export { GetPublicStatusUsingPostQueryParams };
var GetPublicStatusUsingPost200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetPublicStatusUsingPost200ApplicationJsonData, _super);
    function GetPublicStatusUsingPost200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publicStatus" }),
        __metadata("design:type", Boolean)
    ], GetPublicStatusUsingPost200ApplicationJsonData.prototype, "publicStatus", void 0);
    return GetPublicStatusUsingPost200ApplicationJsonData;
}(SpeakeasyBase));
export { GetPublicStatusUsingPost200ApplicationJsonData };
var GetPublicStatusUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPublicStatusUsingPost200ApplicationJson, _super);
    function GetPublicStatusUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetPublicStatusUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", GetPublicStatusUsingPost200ApplicationJsonData)
    ], GetPublicStatusUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetPublicStatusUsingPost200ApplicationJson.prototype, "message", void 0);
    return GetPublicStatusUsingPost200ApplicationJson;
}(SpeakeasyBase));
export { GetPublicStatusUsingPost200ApplicationJson };
var GetPublicStatusUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPublicStatusUsingPost400ApplicationJson, _super);
    function GetPublicStatusUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetPublicStatusUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetPublicStatusUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetPublicStatusUsingPost400ApplicationJson.prototype, "message", void 0);
    return GetPublicStatusUsingPost400ApplicationJson;
}(SpeakeasyBase));
export { GetPublicStatusUsingPost400ApplicationJson };
var GetPublicStatusUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPublicStatusUsingPost401ApplicationJson, _super);
    function GetPublicStatusUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetPublicStatusUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetPublicStatusUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetPublicStatusUsingPost401ApplicationJson.prototype, "message", void 0);
    return GetPublicStatusUsingPost401ApplicationJson;
}(SpeakeasyBase));
export { GetPublicStatusUsingPost401ApplicationJson };
var GetPublicStatusUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPublicStatusUsingPost500ApplicationJson, _super);
    function GetPublicStatusUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetPublicStatusUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetPublicStatusUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetPublicStatusUsingPost500ApplicationJson.prototype, "message", void 0);
    return GetPublicStatusUsingPost500ApplicationJson;
}(SpeakeasyBase));
export { GetPublicStatusUsingPost500ApplicationJson };
var GetPublicStatusUsingPostRequest = /** @class */ (function (_super) {
    __extends(GetPublicStatusUsingPostRequest, _super);
    function GetPublicStatusUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPublicStatusUsingPostQueryParams)
    ], GetPublicStatusUsingPostRequest.prototype, "queryParams", void 0);
    return GetPublicStatusUsingPostRequest;
}(SpeakeasyBase));
export { GetPublicStatusUsingPostRequest };
var GetPublicStatusUsingPostResponse = /** @class */ (function (_super) {
    __extends(GetPublicStatusUsingPostResponse, _super);
    function GetPublicStatusUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPublicStatusUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPublicStatusUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPublicStatusUsingPost200ApplicationJson)
    ], GetPublicStatusUsingPostResponse.prototype, "getPublicStatusUsingPost200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPublicStatusUsingPost400ApplicationJson)
    ], GetPublicStatusUsingPostResponse.prototype, "getPublicStatusUsingPost400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPublicStatusUsingPost401ApplicationJson)
    ], GetPublicStatusUsingPostResponse.prototype, "getPublicStatusUsingPost401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPublicStatusUsingPost500ApplicationJson)
    ], GetPublicStatusUsingPostResponse.prototype, "getPublicStatusUsingPost500ApplicationJsonObject", void 0);
    return GetPublicStatusUsingPostResponse;
}(SpeakeasyBase));
export { GetPublicStatusUsingPostResponse };
