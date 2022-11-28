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
var AppendTextUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(AppendTextUsingPostQueryParams, _super);
    function AppendTextUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], AppendTextUsingPostQueryParams.prototype, "padId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], AppendTextUsingPostQueryParams.prototype, "text", void 0);
    return AppendTextUsingPostQueryParams;
}(SpeakeasyBase));
export { AppendTextUsingPostQueryParams };
var AppendTextUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(AppendTextUsingPost200ApplicationJson, _super);
    function AppendTextUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], AppendTextUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], AppendTextUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], AppendTextUsingPost200ApplicationJson.prototype, "message", void 0);
    return AppendTextUsingPost200ApplicationJson;
}(SpeakeasyBase));
export { AppendTextUsingPost200ApplicationJson };
var AppendTextUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(AppendTextUsingPost400ApplicationJson, _super);
    function AppendTextUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], AppendTextUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], AppendTextUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], AppendTextUsingPost400ApplicationJson.prototype, "message", void 0);
    return AppendTextUsingPost400ApplicationJson;
}(SpeakeasyBase));
export { AppendTextUsingPost400ApplicationJson };
var AppendTextUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(AppendTextUsingPost401ApplicationJson, _super);
    function AppendTextUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], AppendTextUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], AppendTextUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], AppendTextUsingPost401ApplicationJson.prototype, "message", void 0);
    return AppendTextUsingPost401ApplicationJson;
}(SpeakeasyBase));
export { AppendTextUsingPost401ApplicationJson };
var AppendTextUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(AppendTextUsingPost500ApplicationJson, _super);
    function AppendTextUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], AppendTextUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], AppendTextUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], AppendTextUsingPost500ApplicationJson.prototype, "message", void 0);
    return AppendTextUsingPost500ApplicationJson;
}(SpeakeasyBase));
export { AppendTextUsingPost500ApplicationJson };
var AppendTextUsingPostRequest = /** @class */ (function (_super) {
    __extends(AppendTextUsingPostRequest, _super);
    function AppendTextUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppendTextUsingPostQueryParams)
    ], AppendTextUsingPostRequest.prototype, "queryParams", void 0);
    return AppendTextUsingPostRequest;
}(SpeakeasyBase));
export { AppendTextUsingPostRequest };
var AppendTextUsingPostResponse = /** @class */ (function (_super) {
    __extends(AppendTextUsingPostResponse, _super);
    function AppendTextUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppendTextUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AppendTextUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppendTextUsingPost200ApplicationJson)
    ], AppendTextUsingPostResponse.prototype, "appendTextUsingPost200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppendTextUsingPost400ApplicationJson)
    ], AppendTextUsingPostResponse.prototype, "appendTextUsingPost400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppendTextUsingPost401ApplicationJson)
    ], AppendTextUsingPostResponse.prototype, "appendTextUsingPost401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppendTextUsingPost500ApplicationJson)
    ], AppendTextUsingPostResponse.prototype, "appendTextUsingPost500ApplicationJsonObject", void 0);
    return AppendTextUsingPostResponse;
}(SpeakeasyBase));
export { AppendTextUsingPostResponse };
