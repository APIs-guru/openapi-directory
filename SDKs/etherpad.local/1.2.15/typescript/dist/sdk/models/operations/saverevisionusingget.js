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
var SaveRevisionUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(SaveRevisionUsingGetQueryParams, _super);
    function SaveRevisionUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], SaveRevisionUsingGetQueryParams.prototype, "padId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rev" }),
        __metadata("design:type", String)
    ], SaveRevisionUsingGetQueryParams.prototype, "rev", void 0);
    return SaveRevisionUsingGetQueryParams;
}(SpeakeasyBase));
export { SaveRevisionUsingGetQueryParams };
var SaveRevisionUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(SaveRevisionUsingGet200ApplicationJson, _super);
    function SaveRevisionUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SaveRevisionUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], SaveRevisionUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SaveRevisionUsingGet200ApplicationJson.prototype, "message", void 0);
    return SaveRevisionUsingGet200ApplicationJson;
}(SpeakeasyBase));
export { SaveRevisionUsingGet200ApplicationJson };
var SaveRevisionUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(SaveRevisionUsingGet400ApplicationJson, _super);
    function SaveRevisionUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SaveRevisionUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], SaveRevisionUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SaveRevisionUsingGet400ApplicationJson.prototype, "message", void 0);
    return SaveRevisionUsingGet400ApplicationJson;
}(SpeakeasyBase));
export { SaveRevisionUsingGet400ApplicationJson };
var SaveRevisionUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(SaveRevisionUsingGet401ApplicationJson, _super);
    function SaveRevisionUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SaveRevisionUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], SaveRevisionUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SaveRevisionUsingGet401ApplicationJson.prototype, "message", void 0);
    return SaveRevisionUsingGet401ApplicationJson;
}(SpeakeasyBase));
export { SaveRevisionUsingGet401ApplicationJson };
var SaveRevisionUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(SaveRevisionUsingGet500ApplicationJson, _super);
    function SaveRevisionUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SaveRevisionUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], SaveRevisionUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SaveRevisionUsingGet500ApplicationJson.prototype, "message", void 0);
    return SaveRevisionUsingGet500ApplicationJson;
}(SpeakeasyBase));
export { SaveRevisionUsingGet500ApplicationJson };
var SaveRevisionUsingGetRequest = /** @class */ (function (_super) {
    __extends(SaveRevisionUsingGetRequest, _super);
    function SaveRevisionUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SaveRevisionUsingGetQueryParams)
    ], SaveRevisionUsingGetRequest.prototype, "queryParams", void 0);
    return SaveRevisionUsingGetRequest;
}(SpeakeasyBase));
export { SaveRevisionUsingGetRequest };
var SaveRevisionUsingGetResponse = /** @class */ (function (_super) {
    __extends(SaveRevisionUsingGetResponse, _super);
    function SaveRevisionUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SaveRevisionUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SaveRevisionUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SaveRevisionUsingGet200ApplicationJson)
    ], SaveRevisionUsingGetResponse.prototype, "saveRevisionUsingGet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SaveRevisionUsingGet400ApplicationJson)
    ], SaveRevisionUsingGetResponse.prototype, "saveRevisionUsingGet400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SaveRevisionUsingGet401ApplicationJson)
    ], SaveRevisionUsingGetResponse.prototype, "saveRevisionUsingGet401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SaveRevisionUsingGet500ApplicationJson)
    ], SaveRevisionUsingGetResponse.prototype, "saveRevisionUsingGet500ApplicationJsonObject", void 0);
    return SaveRevisionUsingGetResponse;
}(SpeakeasyBase));
export { SaveRevisionUsingGetResponse };
