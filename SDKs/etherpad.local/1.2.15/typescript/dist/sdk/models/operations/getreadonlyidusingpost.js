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
var GetReadOnlyIdUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(GetReadOnlyIdUsingPostQueryParams, _super);
    function GetReadOnlyIdUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], GetReadOnlyIdUsingPostQueryParams.prototype, "padId", void 0);
    return GetReadOnlyIdUsingPostQueryParams;
}(SpeakeasyBase));
export { GetReadOnlyIdUsingPostQueryParams };
var GetReadOnlyIdUsingPost200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetReadOnlyIdUsingPost200ApplicationJsonData, _super);
    function GetReadOnlyIdUsingPost200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=readOnlyID" }),
        __metadata("design:type", String)
    ], GetReadOnlyIdUsingPost200ApplicationJsonData.prototype, "readOnlyId", void 0);
    return GetReadOnlyIdUsingPost200ApplicationJsonData;
}(SpeakeasyBase));
export { GetReadOnlyIdUsingPost200ApplicationJsonData };
var GetReadOnlyIdUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReadOnlyIdUsingPost200ApplicationJson, _super);
    function GetReadOnlyIdUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetReadOnlyIdUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", GetReadOnlyIdUsingPost200ApplicationJsonData)
    ], GetReadOnlyIdUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetReadOnlyIdUsingPost200ApplicationJson.prototype, "message", void 0);
    return GetReadOnlyIdUsingPost200ApplicationJson;
}(SpeakeasyBase));
export { GetReadOnlyIdUsingPost200ApplicationJson };
var GetReadOnlyIdUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReadOnlyIdUsingPost400ApplicationJson, _super);
    function GetReadOnlyIdUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetReadOnlyIdUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetReadOnlyIdUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetReadOnlyIdUsingPost400ApplicationJson.prototype, "message", void 0);
    return GetReadOnlyIdUsingPost400ApplicationJson;
}(SpeakeasyBase));
export { GetReadOnlyIdUsingPost400ApplicationJson };
var GetReadOnlyIdUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReadOnlyIdUsingPost401ApplicationJson, _super);
    function GetReadOnlyIdUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetReadOnlyIdUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetReadOnlyIdUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetReadOnlyIdUsingPost401ApplicationJson.prototype, "message", void 0);
    return GetReadOnlyIdUsingPost401ApplicationJson;
}(SpeakeasyBase));
export { GetReadOnlyIdUsingPost401ApplicationJson };
var GetReadOnlyIdUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReadOnlyIdUsingPost500ApplicationJson, _super);
    function GetReadOnlyIdUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetReadOnlyIdUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetReadOnlyIdUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetReadOnlyIdUsingPost500ApplicationJson.prototype, "message", void 0);
    return GetReadOnlyIdUsingPost500ApplicationJson;
}(SpeakeasyBase));
export { GetReadOnlyIdUsingPost500ApplicationJson };
var GetReadOnlyIdUsingPostRequest = /** @class */ (function (_super) {
    __extends(GetReadOnlyIdUsingPostRequest, _super);
    function GetReadOnlyIdUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReadOnlyIdUsingPostQueryParams)
    ], GetReadOnlyIdUsingPostRequest.prototype, "queryParams", void 0);
    return GetReadOnlyIdUsingPostRequest;
}(SpeakeasyBase));
export { GetReadOnlyIdUsingPostRequest };
var GetReadOnlyIdUsingPostResponse = /** @class */ (function (_super) {
    __extends(GetReadOnlyIdUsingPostResponse, _super);
    function GetReadOnlyIdUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetReadOnlyIdUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetReadOnlyIdUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReadOnlyIdUsingPost200ApplicationJson)
    ], GetReadOnlyIdUsingPostResponse.prototype, "getReadOnlyIdUsingPost200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReadOnlyIdUsingPost400ApplicationJson)
    ], GetReadOnlyIdUsingPostResponse.prototype, "getReadOnlyIdUsingPost400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReadOnlyIdUsingPost401ApplicationJson)
    ], GetReadOnlyIdUsingPostResponse.prototype, "getReadOnlyIdUsingPost401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReadOnlyIdUsingPost500ApplicationJson)
    ], GetReadOnlyIdUsingPostResponse.prototype, "getReadOnlyIdUsingPost500ApplicationJsonObject", void 0);
    return GetReadOnlyIdUsingPostResponse;
}(SpeakeasyBase));
export { GetReadOnlyIdUsingPostResponse };
