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
var GetSavedRevisionsCountUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(GetSavedRevisionsCountUsingPostQueryParams, _super);
    function GetSavedRevisionsCountUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], GetSavedRevisionsCountUsingPostQueryParams.prototype, "padId", void 0);
    return GetSavedRevisionsCountUsingPostQueryParams;
}(SpeakeasyBase));
export { GetSavedRevisionsCountUsingPostQueryParams };
var GetSavedRevisionsCountUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSavedRevisionsCountUsingPost200ApplicationJson, _super);
    function GetSavedRevisionsCountUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetSavedRevisionsCountUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetSavedRevisionsCountUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSavedRevisionsCountUsingPost200ApplicationJson.prototype, "message", void 0);
    return GetSavedRevisionsCountUsingPost200ApplicationJson;
}(SpeakeasyBase));
export { GetSavedRevisionsCountUsingPost200ApplicationJson };
var GetSavedRevisionsCountUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSavedRevisionsCountUsingPost400ApplicationJson, _super);
    function GetSavedRevisionsCountUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetSavedRevisionsCountUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetSavedRevisionsCountUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSavedRevisionsCountUsingPost400ApplicationJson.prototype, "message", void 0);
    return GetSavedRevisionsCountUsingPost400ApplicationJson;
}(SpeakeasyBase));
export { GetSavedRevisionsCountUsingPost400ApplicationJson };
var GetSavedRevisionsCountUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSavedRevisionsCountUsingPost401ApplicationJson, _super);
    function GetSavedRevisionsCountUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetSavedRevisionsCountUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetSavedRevisionsCountUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSavedRevisionsCountUsingPost401ApplicationJson.prototype, "message", void 0);
    return GetSavedRevisionsCountUsingPost401ApplicationJson;
}(SpeakeasyBase));
export { GetSavedRevisionsCountUsingPost401ApplicationJson };
var GetSavedRevisionsCountUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSavedRevisionsCountUsingPost500ApplicationJson, _super);
    function GetSavedRevisionsCountUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetSavedRevisionsCountUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetSavedRevisionsCountUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSavedRevisionsCountUsingPost500ApplicationJson.prototype, "message", void 0);
    return GetSavedRevisionsCountUsingPost500ApplicationJson;
}(SpeakeasyBase));
export { GetSavedRevisionsCountUsingPost500ApplicationJson };
var GetSavedRevisionsCountUsingPostRequest = /** @class */ (function (_super) {
    __extends(GetSavedRevisionsCountUsingPostRequest, _super);
    function GetSavedRevisionsCountUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedRevisionsCountUsingPostQueryParams)
    ], GetSavedRevisionsCountUsingPostRequest.prototype, "queryParams", void 0);
    return GetSavedRevisionsCountUsingPostRequest;
}(SpeakeasyBase));
export { GetSavedRevisionsCountUsingPostRequest };
var GetSavedRevisionsCountUsingPostResponse = /** @class */ (function (_super) {
    __extends(GetSavedRevisionsCountUsingPostResponse, _super);
    function GetSavedRevisionsCountUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSavedRevisionsCountUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSavedRevisionsCountUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedRevisionsCountUsingPost200ApplicationJson)
    ], GetSavedRevisionsCountUsingPostResponse.prototype, "getSavedRevisionsCountUsingPost200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedRevisionsCountUsingPost400ApplicationJson)
    ], GetSavedRevisionsCountUsingPostResponse.prototype, "getSavedRevisionsCountUsingPost400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedRevisionsCountUsingPost401ApplicationJson)
    ], GetSavedRevisionsCountUsingPostResponse.prototype, "getSavedRevisionsCountUsingPost401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedRevisionsCountUsingPost500ApplicationJson)
    ], GetSavedRevisionsCountUsingPostResponse.prototype, "getSavedRevisionsCountUsingPost500ApplicationJsonObject", void 0);
    return GetSavedRevisionsCountUsingPostResponse;
}(SpeakeasyBase));
export { GetSavedRevisionsCountUsingPostResponse };
