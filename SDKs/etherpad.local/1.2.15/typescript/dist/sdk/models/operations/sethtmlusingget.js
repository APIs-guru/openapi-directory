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
var SetHtmlUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(SetHtmlUsingGetQueryParams, _super);
    function SetHtmlUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=html" }),
        __metadata("design:type", String)
    ], SetHtmlUsingGetQueryParams.prototype, "html", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], SetHtmlUsingGetQueryParams.prototype, "padId", void 0);
    return SetHtmlUsingGetQueryParams;
}(SpeakeasyBase));
export { SetHtmlUsingGetQueryParams };
var SetHtmlUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(SetHtmlUsingGet200ApplicationJson, _super);
    function SetHtmlUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SetHtmlUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], SetHtmlUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SetHtmlUsingGet200ApplicationJson.prototype, "message", void 0);
    return SetHtmlUsingGet200ApplicationJson;
}(SpeakeasyBase));
export { SetHtmlUsingGet200ApplicationJson };
var SetHtmlUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(SetHtmlUsingGet400ApplicationJson, _super);
    function SetHtmlUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SetHtmlUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], SetHtmlUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SetHtmlUsingGet400ApplicationJson.prototype, "message", void 0);
    return SetHtmlUsingGet400ApplicationJson;
}(SpeakeasyBase));
export { SetHtmlUsingGet400ApplicationJson };
var SetHtmlUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(SetHtmlUsingGet401ApplicationJson, _super);
    function SetHtmlUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SetHtmlUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], SetHtmlUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SetHtmlUsingGet401ApplicationJson.prototype, "message", void 0);
    return SetHtmlUsingGet401ApplicationJson;
}(SpeakeasyBase));
export { SetHtmlUsingGet401ApplicationJson };
var SetHtmlUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(SetHtmlUsingGet500ApplicationJson, _super);
    function SetHtmlUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SetHtmlUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], SetHtmlUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SetHtmlUsingGet500ApplicationJson.prototype, "message", void 0);
    return SetHtmlUsingGet500ApplicationJson;
}(SpeakeasyBase));
export { SetHtmlUsingGet500ApplicationJson };
var SetHtmlUsingGetRequest = /** @class */ (function (_super) {
    __extends(SetHtmlUsingGetRequest, _super);
    function SetHtmlUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetHtmlUsingGetQueryParams)
    ], SetHtmlUsingGetRequest.prototype, "queryParams", void 0);
    return SetHtmlUsingGetRequest;
}(SpeakeasyBase));
export { SetHtmlUsingGetRequest };
var SetHtmlUsingGetResponse = /** @class */ (function (_super) {
    __extends(SetHtmlUsingGetResponse, _super);
    function SetHtmlUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SetHtmlUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SetHtmlUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetHtmlUsingGet200ApplicationJson)
    ], SetHtmlUsingGetResponse.prototype, "setHtmlUsingGet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetHtmlUsingGet400ApplicationJson)
    ], SetHtmlUsingGetResponse.prototype, "setHtmlUsingGet400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetHtmlUsingGet401ApplicationJson)
    ], SetHtmlUsingGetResponse.prototype, "setHtmlUsingGet401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetHtmlUsingGet500ApplicationJson)
    ], SetHtmlUsingGetResponse.prototype, "setHtmlUsingGet500ApplicationJsonObject", void 0);
    return SetHtmlUsingGetResponse;
}(SpeakeasyBase));
export { SetHtmlUsingGetResponse };
