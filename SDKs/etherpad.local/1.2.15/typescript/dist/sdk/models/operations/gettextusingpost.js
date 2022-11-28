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
var GetTextUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(GetTextUsingPostQueryParams, _super);
    function GetTextUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], GetTextUsingPostQueryParams.prototype, "padId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rev" }),
        __metadata("design:type", String)
    ], GetTextUsingPostQueryParams.prototype, "rev", void 0);
    return GetTextUsingPostQueryParams;
}(SpeakeasyBase));
export { GetTextUsingPostQueryParams };
var GetTextUsingPost200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetTextUsingPost200ApplicationJsonData, _super);
    function GetTextUsingPost200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], GetTextUsingPost200ApplicationJsonData.prototype, "text", void 0);
    return GetTextUsingPost200ApplicationJsonData;
}(SpeakeasyBase));
export { GetTextUsingPost200ApplicationJsonData };
var GetTextUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTextUsingPost200ApplicationJson, _super);
    function GetTextUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetTextUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", GetTextUsingPost200ApplicationJsonData)
    ], GetTextUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetTextUsingPost200ApplicationJson.prototype, "message", void 0);
    return GetTextUsingPost200ApplicationJson;
}(SpeakeasyBase));
export { GetTextUsingPost200ApplicationJson };
var GetTextUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTextUsingPost400ApplicationJson, _super);
    function GetTextUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetTextUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetTextUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetTextUsingPost400ApplicationJson.prototype, "message", void 0);
    return GetTextUsingPost400ApplicationJson;
}(SpeakeasyBase));
export { GetTextUsingPost400ApplicationJson };
var GetTextUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTextUsingPost401ApplicationJson, _super);
    function GetTextUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetTextUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetTextUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetTextUsingPost401ApplicationJson.prototype, "message", void 0);
    return GetTextUsingPost401ApplicationJson;
}(SpeakeasyBase));
export { GetTextUsingPost401ApplicationJson };
var GetTextUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTextUsingPost500ApplicationJson, _super);
    function GetTextUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetTextUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetTextUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetTextUsingPost500ApplicationJson.prototype, "message", void 0);
    return GetTextUsingPost500ApplicationJson;
}(SpeakeasyBase));
export { GetTextUsingPost500ApplicationJson };
var GetTextUsingPostRequest = /** @class */ (function (_super) {
    __extends(GetTextUsingPostRequest, _super);
    function GetTextUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTextUsingPostQueryParams)
    ], GetTextUsingPostRequest.prototype, "queryParams", void 0);
    return GetTextUsingPostRequest;
}(SpeakeasyBase));
export { GetTextUsingPostRequest };
var GetTextUsingPostResponse = /** @class */ (function (_super) {
    __extends(GetTextUsingPostResponse, _super);
    function GetTextUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTextUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTextUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTextUsingPost200ApplicationJson)
    ], GetTextUsingPostResponse.prototype, "getTextUsingPost200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTextUsingPost400ApplicationJson)
    ], GetTextUsingPostResponse.prototype, "getTextUsingPost400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTextUsingPost401ApplicationJson)
    ], GetTextUsingPostResponse.prototype, "getTextUsingPost401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTextUsingPost500ApplicationJson)
    ], GetTextUsingPostResponse.prototype, "getTextUsingPost500ApplicationJsonObject", void 0);
    return GetTextUsingPostResponse;
}(SpeakeasyBase));
export { GetTextUsingPostResponse };
