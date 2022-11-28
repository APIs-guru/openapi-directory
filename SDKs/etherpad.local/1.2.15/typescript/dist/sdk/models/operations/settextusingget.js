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
var SetTextUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(SetTextUsingGetQueryParams, _super);
    function SetTextUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], SetTextUsingGetQueryParams.prototype, "padId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], SetTextUsingGetQueryParams.prototype, "text", void 0);
    return SetTextUsingGetQueryParams;
}(SpeakeasyBase));
export { SetTextUsingGetQueryParams };
var SetTextUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(SetTextUsingGet200ApplicationJson, _super);
    function SetTextUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SetTextUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], SetTextUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SetTextUsingGet200ApplicationJson.prototype, "message", void 0);
    return SetTextUsingGet200ApplicationJson;
}(SpeakeasyBase));
export { SetTextUsingGet200ApplicationJson };
var SetTextUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(SetTextUsingGet400ApplicationJson, _super);
    function SetTextUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SetTextUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], SetTextUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SetTextUsingGet400ApplicationJson.prototype, "message", void 0);
    return SetTextUsingGet400ApplicationJson;
}(SpeakeasyBase));
export { SetTextUsingGet400ApplicationJson };
var SetTextUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(SetTextUsingGet401ApplicationJson, _super);
    function SetTextUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SetTextUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], SetTextUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SetTextUsingGet401ApplicationJson.prototype, "message", void 0);
    return SetTextUsingGet401ApplicationJson;
}(SpeakeasyBase));
export { SetTextUsingGet401ApplicationJson };
var SetTextUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(SetTextUsingGet500ApplicationJson, _super);
    function SetTextUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SetTextUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], SetTextUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SetTextUsingGet500ApplicationJson.prototype, "message", void 0);
    return SetTextUsingGet500ApplicationJson;
}(SpeakeasyBase));
export { SetTextUsingGet500ApplicationJson };
var SetTextUsingGetRequest = /** @class */ (function (_super) {
    __extends(SetTextUsingGetRequest, _super);
    function SetTextUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetTextUsingGetQueryParams)
    ], SetTextUsingGetRequest.prototype, "queryParams", void 0);
    return SetTextUsingGetRequest;
}(SpeakeasyBase));
export { SetTextUsingGetRequest };
var SetTextUsingGetResponse = /** @class */ (function (_super) {
    __extends(SetTextUsingGetResponse, _super);
    function SetTextUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SetTextUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SetTextUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetTextUsingGet200ApplicationJson)
    ], SetTextUsingGetResponse.prototype, "setTextUsingGet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetTextUsingGet400ApplicationJson)
    ], SetTextUsingGetResponse.prototype, "setTextUsingGet400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetTextUsingGet401ApplicationJson)
    ], SetTextUsingGetResponse.prototype, "setTextUsingGet401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetTextUsingGet500ApplicationJson)
    ], SetTextUsingGetResponse.prototype, "setTextUsingGet500ApplicationJsonObject", void 0);
    return SetTextUsingGetResponse;
}(SpeakeasyBase));
export { SetTextUsingGetResponse };
