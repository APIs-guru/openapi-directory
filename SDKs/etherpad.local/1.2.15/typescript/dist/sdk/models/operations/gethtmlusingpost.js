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
var GetHtmlUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(GetHtmlUsingPostQueryParams, _super);
    function GetHtmlUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], GetHtmlUsingPostQueryParams.prototype, "padId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rev" }),
        __metadata("design:type", String)
    ], GetHtmlUsingPostQueryParams.prototype, "rev", void 0);
    return GetHtmlUsingPostQueryParams;
}(SpeakeasyBase));
export { GetHtmlUsingPostQueryParams };
var GetHtmlUsingPost200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetHtmlUsingPost200ApplicationJsonData, _super);
    function GetHtmlUsingPost200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html" }),
        __metadata("design:type", String)
    ], GetHtmlUsingPost200ApplicationJsonData.prototype, "html", void 0);
    return GetHtmlUsingPost200ApplicationJsonData;
}(SpeakeasyBase));
export { GetHtmlUsingPost200ApplicationJsonData };
var GetHtmlUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetHtmlUsingPost200ApplicationJson, _super);
    function GetHtmlUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetHtmlUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", GetHtmlUsingPost200ApplicationJsonData)
    ], GetHtmlUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetHtmlUsingPost200ApplicationJson.prototype, "message", void 0);
    return GetHtmlUsingPost200ApplicationJson;
}(SpeakeasyBase));
export { GetHtmlUsingPost200ApplicationJson };
var GetHtmlUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetHtmlUsingPost400ApplicationJson, _super);
    function GetHtmlUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetHtmlUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetHtmlUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetHtmlUsingPost400ApplicationJson.prototype, "message", void 0);
    return GetHtmlUsingPost400ApplicationJson;
}(SpeakeasyBase));
export { GetHtmlUsingPost400ApplicationJson };
var GetHtmlUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetHtmlUsingPost401ApplicationJson, _super);
    function GetHtmlUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetHtmlUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetHtmlUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetHtmlUsingPost401ApplicationJson.prototype, "message", void 0);
    return GetHtmlUsingPost401ApplicationJson;
}(SpeakeasyBase));
export { GetHtmlUsingPost401ApplicationJson };
var GetHtmlUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetHtmlUsingPost500ApplicationJson, _super);
    function GetHtmlUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetHtmlUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetHtmlUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetHtmlUsingPost500ApplicationJson.prototype, "message", void 0);
    return GetHtmlUsingPost500ApplicationJson;
}(SpeakeasyBase));
export { GetHtmlUsingPost500ApplicationJson };
var GetHtmlUsingPostRequest = /** @class */ (function (_super) {
    __extends(GetHtmlUsingPostRequest, _super);
    function GetHtmlUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetHtmlUsingPostQueryParams)
    ], GetHtmlUsingPostRequest.prototype, "queryParams", void 0);
    return GetHtmlUsingPostRequest;
}(SpeakeasyBase));
export { GetHtmlUsingPostRequest };
var GetHtmlUsingPostResponse = /** @class */ (function (_super) {
    __extends(GetHtmlUsingPostResponse, _super);
    function GetHtmlUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetHtmlUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetHtmlUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetHtmlUsingPost200ApplicationJson)
    ], GetHtmlUsingPostResponse.prototype, "getHtmlUsingPost200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetHtmlUsingPost400ApplicationJson)
    ], GetHtmlUsingPostResponse.prototype, "getHtmlUsingPost400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetHtmlUsingPost401ApplicationJson)
    ], GetHtmlUsingPostResponse.prototype, "getHtmlUsingPost401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetHtmlUsingPost500ApplicationJson)
    ], GetHtmlUsingPostResponse.prototype, "getHtmlUsingPost500ApplicationJsonObject", void 0);
    return GetHtmlUsingPostResponse;
}(SpeakeasyBase));
export { GetHtmlUsingPostResponse };
