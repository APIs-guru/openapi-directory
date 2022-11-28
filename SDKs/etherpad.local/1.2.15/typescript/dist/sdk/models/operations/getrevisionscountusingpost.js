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
var GetRevisionsCountUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(GetRevisionsCountUsingPostQueryParams, _super);
    function GetRevisionsCountUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], GetRevisionsCountUsingPostQueryParams.prototype, "padId", void 0);
    return GetRevisionsCountUsingPostQueryParams;
}(SpeakeasyBase));
export { GetRevisionsCountUsingPostQueryParams };
var GetRevisionsCountUsingPost200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetRevisionsCountUsingPost200ApplicationJsonData, _super);
    function GetRevisionsCountUsingPost200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revisions" }),
        __metadata("design:type", Number)
    ], GetRevisionsCountUsingPost200ApplicationJsonData.prototype, "revisions", void 0);
    return GetRevisionsCountUsingPost200ApplicationJsonData;
}(SpeakeasyBase));
export { GetRevisionsCountUsingPost200ApplicationJsonData };
var GetRevisionsCountUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetRevisionsCountUsingPost200ApplicationJson, _super);
    function GetRevisionsCountUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetRevisionsCountUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", GetRevisionsCountUsingPost200ApplicationJsonData)
    ], GetRevisionsCountUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetRevisionsCountUsingPost200ApplicationJson.prototype, "message", void 0);
    return GetRevisionsCountUsingPost200ApplicationJson;
}(SpeakeasyBase));
export { GetRevisionsCountUsingPost200ApplicationJson };
var GetRevisionsCountUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetRevisionsCountUsingPost400ApplicationJson, _super);
    function GetRevisionsCountUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetRevisionsCountUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetRevisionsCountUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetRevisionsCountUsingPost400ApplicationJson.prototype, "message", void 0);
    return GetRevisionsCountUsingPost400ApplicationJson;
}(SpeakeasyBase));
export { GetRevisionsCountUsingPost400ApplicationJson };
var GetRevisionsCountUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetRevisionsCountUsingPost401ApplicationJson, _super);
    function GetRevisionsCountUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetRevisionsCountUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetRevisionsCountUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetRevisionsCountUsingPost401ApplicationJson.prototype, "message", void 0);
    return GetRevisionsCountUsingPost401ApplicationJson;
}(SpeakeasyBase));
export { GetRevisionsCountUsingPost401ApplicationJson };
var GetRevisionsCountUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetRevisionsCountUsingPost500ApplicationJson, _super);
    function GetRevisionsCountUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetRevisionsCountUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetRevisionsCountUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetRevisionsCountUsingPost500ApplicationJson.prototype, "message", void 0);
    return GetRevisionsCountUsingPost500ApplicationJson;
}(SpeakeasyBase));
export { GetRevisionsCountUsingPost500ApplicationJson };
var GetRevisionsCountUsingPostRequest = /** @class */ (function (_super) {
    __extends(GetRevisionsCountUsingPostRequest, _super);
    function GetRevisionsCountUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRevisionsCountUsingPostQueryParams)
    ], GetRevisionsCountUsingPostRequest.prototype, "queryParams", void 0);
    return GetRevisionsCountUsingPostRequest;
}(SpeakeasyBase));
export { GetRevisionsCountUsingPostRequest };
var GetRevisionsCountUsingPostResponse = /** @class */ (function (_super) {
    __extends(GetRevisionsCountUsingPostResponse, _super);
    function GetRevisionsCountUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRevisionsCountUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRevisionsCountUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRevisionsCountUsingPost200ApplicationJson)
    ], GetRevisionsCountUsingPostResponse.prototype, "getRevisionsCountUsingPost200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRevisionsCountUsingPost400ApplicationJson)
    ], GetRevisionsCountUsingPostResponse.prototype, "getRevisionsCountUsingPost400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRevisionsCountUsingPost401ApplicationJson)
    ], GetRevisionsCountUsingPostResponse.prototype, "getRevisionsCountUsingPost401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRevisionsCountUsingPost500ApplicationJson)
    ], GetRevisionsCountUsingPostResponse.prototype, "getRevisionsCountUsingPost500ApplicationJsonObject", void 0);
    return GetRevisionsCountUsingPostResponse;
}(SpeakeasyBase));
export { GetRevisionsCountUsingPostResponse };
