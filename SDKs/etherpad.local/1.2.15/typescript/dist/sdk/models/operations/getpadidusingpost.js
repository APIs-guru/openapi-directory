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
var GetPadIdUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(GetPadIdUsingPostQueryParams, _super);
    function GetPadIdUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=roID" }),
        __metadata("design:type", String)
    ], GetPadIdUsingPostQueryParams.prototype, "roId", void 0);
    return GetPadIdUsingPostQueryParams;
}(SpeakeasyBase));
export { GetPadIdUsingPostQueryParams };
var GetPadIdUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPadIdUsingPost200ApplicationJson, _super);
    function GetPadIdUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetPadIdUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetPadIdUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetPadIdUsingPost200ApplicationJson.prototype, "message", void 0);
    return GetPadIdUsingPost200ApplicationJson;
}(SpeakeasyBase));
export { GetPadIdUsingPost200ApplicationJson };
var GetPadIdUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPadIdUsingPost400ApplicationJson, _super);
    function GetPadIdUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetPadIdUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetPadIdUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetPadIdUsingPost400ApplicationJson.prototype, "message", void 0);
    return GetPadIdUsingPost400ApplicationJson;
}(SpeakeasyBase));
export { GetPadIdUsingPost400ApplicationJson };
var GetPadIdUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPadIdUsingPost401ApplicationJson, _super);
    function GetPadIdUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetPadIdUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetPadIdUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetPadIdUsingPost401ApplicationJson.prototype, "message", void 0);
    return GetPadIdUsingPost401ApplicationJson;
}(SpeakeasyBase));
export { GetPadIdUsingPost401ApplicationJson };
var GetPadIdUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPadIdUsingPost500ApplicationJson, _super);
    function GetPadIdUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetPadIdUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetPadIdUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetPadIdUsingPost500ApplicationJson.prototype, "message", void 0);
    return GetPadIdUsingPost500ApplicationJson;
}(SpeakeasyBase));
export { GetPadIdUsingPost500ApplicationJson };
var GetPadIdUsingPostRequest = /** @class */ (function (_super) {
    __extends(GetPadIdUsingPostRequest, _super);
    function GetPadIdUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPadIdUsingPostQueryParams)
    ], GetPadIdUsingPostRequest.prototype, "queryParams", void 0);
    return GetPadIdUsingPostRequest;
}(SpeakeasyBase));
export { GetPadIdUsingPostRequest };
var GetPadIdUsingPostResponse = /** @class */ (function (_super) {
    __extends(GetPadIdUsingPostResponse, _super);
    function GetPadIdUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPadIdUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPadIdUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPadIdUsingPost200ApplicationJson)
    ], GetPadIdUsingPostResponse.prototype, "getPadIdUsingPost200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPadIdUsingPost400ApplicationJson)
    ], GetPadIdUsingPostResponse.prototype, "getPadIdUsingPost400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPadIdUsingPost401ApplicationJson)
    ], GetPadIdUsingPostResponse.prototype, "getPadIdUsingPost401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPadIdUsingPost500ApplicationJson)
    ], GetPadIdUsingPostResponse.prototype, "getPadIdUsingPost500ApplicationJsonObject", void 0);
    return GetPadIdUsingPostResponse;
}(SpeakeasyBase));
export { GetPadIdUsingPostResponse };
