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
var SaveRevisionUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(SaveRevisionUsingPostQueryParams, _super);
    function SaveRevisionUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], SaveRevisionUsingPostQueryParams.prototype, "padId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rev" }),
        __metadata("design:type", String)
    ], SaveRevisionUsingPostQueryParams.prototype, "rev", void 0);
    return SaveRevisionUsingPostQueryParams;
}(SpeakeasyBase));
export { SaveRevisionUsingPostQueryParams };
var SaveRevisionUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(SaveRevisionUsingPost200ApplicationJson, _super);
    function SaveRevisionUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SaveRevisionUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], SaveRevisionUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SaveRevisionUsingPost200ApplicationJson.prototype, "message", void 0);
    return SaveRevisionUsingPost200ApplicationJson;
}(SpeakeasyBase));
export { SaveRevisionUsingPost200ApplicationJson };
var SaveRevisionUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(SaveRevisionUsingPost400ApplicationJson, _super);
    function SaveRevisionUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SaveRevisionUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], SaveRevisionUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SaveRevisionUsingPost400ApplicationJson.prototype, "message", void 0);
    return SaveRevisionUsingPost400ApplicationJson;
}(SpeakeasyBase));
export { SaveRevisionUsingPost400ApplicationJson };
var SaveRevisionUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(SaveRevisionUsingPost401ApplicationJson, _super);
    function SaveRevisionUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SaveRevisionUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], SaveRevisionUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SaveRevisionUsingPost401ApplicationJson.prototype, "message", void 0);
    return SaveRevisionUsingPost401ApplicationJson;
}(SpeakeasyBase));
export { SaveRevisionUsingPost401ApplicationJson };
var SaveRevisionUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(SaveRevisionUsingPost500ApplicationJson, _super);
    function SaveRevisionUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SaveRevisionUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], SaveRevisionUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SaveRevisionUsingPost500ApplicationJson.prototype, "message", void 0);
    return SaveRevisionUsingPost500ApplicationJson;
}(SpeakeasyBase));
export { SaveRevisionUsingPost500ApplicationJson };
var SaveRevisionUsingPostRequest = /** @class */ (function (_super) {
    __extends(SaveRevisionUsingPostRequest, _super);
    function SaveRevisionUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SaveRevisionUsingPostQueryParams)
    ], SaveRevisionUsingPostRequest.prototype, "queryParams", void 0);
    return SaveRevisionUsingPostRequest;
}(SpeakeasyBase));
export { SaveRevisionUsingPostRequest };
var SaveRevisionUsingPostResponse = /** @class */ (function (_super) {
    __extends(SaveRevisionUsingPostResponse, _super);
    function SaveRevisionUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SaveRevisionUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SaveRevisionUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SaveRevisionUsingPost200ApplicationJson)
    ], SaveRevisionUsingPostResponse.prototype, "saveRevisionUsingPost200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SaveRevisionUsingPost400ApplicationJson)
    ], SaveRevisionUsingPostResponse.prototype, "saveRevisionUsingPost400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SaveRevisionUsingPost401ApplicationJson)
    ], SaveRevisionUsingPostResponse.prototype, "saveRevisionUsingPost401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SaveRevisionUsingPost500ApplicationJson)
    ], SaveRevisionUsingPostResponse.prototype, "saveRevisionUsingPost500ApplicationJsonObject", void 0);
    return SaveRevisionUsingPostResponse;
}(SpeakeasyBase));
export { SaveRevisionUsingPostResponse };
