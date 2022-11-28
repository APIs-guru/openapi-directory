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
var GetLastEditedUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(GetLastEditedUsingPostQueryParams, _super);
    function GetLastEditedUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], GetLastEditedUsingPostQueryParams.prototype, "padId", void 0);
    return GetLastEditedUsingPostQueryParams;
}(SpeakeasyBase));
export { GetLastEditedUsingPostQueryParams };
var GetLastEditedUsingPost200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetLastEditedUsingPost200ApplicationJsonData, _super);
    function GetLastEditedUsingPost200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastEdited" }),
        __metadata("design:type", Number)
    ], GetLastEditedUsingPost200ApplicationJsonData.prototype, "lastEdited", void 0);
    return GetLastEditedUsingPost200ApplicationJsonData;
}(SpeakeasyBase));
export { GetLastEditedUsingPost200ApplicationJsonData };
var GetLastEditedUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLastEditedUsingPost200ApplicationJson, _super);
    function GetLastEditedUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetLastEditedUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", GetLastEditedUsingPost200ApplicationJsonData)
    ], GetLastEditedUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetLastEditedUsingPost200ApplicationJson.prototype, "message", void 0);
    return GetLastEditedUsingPost200ApplicationJson;
}(SpeakeasyBase));
export { GetLastEditedUsingPost200ApplicationJson };
var GetLastEditedUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLastEditedUsingPost400ApplicationJson, _super);
    function GetLastEditedUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetLastEditedUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetLastEditedUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetLastEditedUsingPost400ApplicationJson.prototype, "message", void 0);
    return GetLastEditedUsingPost400ApplicationJson;
}(SpeakeasyBase));
export { GetLastEditedUsingPost400ApplicationJson };
var GetLastEditedUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLastEditedUsingPost401ApplicationJson, _super);
    function GetLastEditedUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetLastEditedUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetLastEditedUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetLastEditedUsingPost401ApplicationJson.prototype, "message", void 0);
    return GetLastEditedUsingPost401ApplicationJson;
}(SpeakeasyBase));
export { GetLastEditedUsingPost401ApplicationJson };
var GetLastEditedUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLastEditedUsingPost500ApplicationJson, _super);
    function GetLastEditedUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetLastEditedUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetLastEditedUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetLastEditedUsingPost500ApplicationJson.prototype, "message", void 0);
    return GetLastEditedUsingPost500ApplicationJson;
}(SpeakeasyBase));
export { GetLastEditedUsingPost500ApplicationJson };
var GetLastEditedUsingPostRequest = /** @class */ (function (_super) {
    __extends(GetLastEditedUsingPostRequest, _super);
    function GetLastEditedUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLastEditedUsingPostQueryParams)
    ], GetLastEditedUsingPostRequest.prototype, "queryParams", void 0);
    return GetLastEditedUsingPostRequest;
}(SpeakeasyBase));
export { GetLastEditedUsingPostRequest };
var GetLastEditedUsingPostResponse = /** @class */ (function (_super) {
    __extends(GetLastEditedUsingPostResponse, _super);
    function GetLastEditedUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLastEditedUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLastEditedUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLastEditedUsingPost200ApplicationJson)
    ], GetLastEditedUsingPostResponse.prototype, "getLastEditedUsingPost200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLastEditedUsingPost400ApplicationJson)
    ], GetLastEditedUsingPostResponse.prototype, "getLastEditedUsingPost400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLastEditedUsingPost401ApplicationJson)
    ], GetLastEditedUsingPostResponse.prototype, "getLastEditedUsingPost401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLastEditedUsingPost500ApplicationJson)
    ], GetLastEditedUsingPostResponse.prototype, "getLastEditedUsingPost500ApplicationJsonObject", void 0);
    return GetLastEditedUsingPostResponse;
}(SpeakeasyBase));
export { GetLastEditedUsingPostResponse };
