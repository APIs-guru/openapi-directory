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
var SetPublicStatusUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(SetPublicStatusUsingGetQueryParams, _super);
    function SetPublicStatusUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], SetPublicStatusUsingGetQueryParams.prototype, "padId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=publicStatus" }),
        __metadata("design:type", String)
    ], SetPublicStatusUsingGetQueryParams.prototype, "publicStatus", void 0);
    return SetPublicStatusUsingGetQueryParams;
}(SpeakeasyBase));
export { SetPublicStatusUsingGetQueryParams };
var SetPublicStatusUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(SetPublicStatusUsingGet200ApplicationJson, _super);
    function SetPublicStatusUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SetPublicStatusUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], SetPublicStatusUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SetPublicStatusUsingGet200ApplicationJson.prototype, "message", void 0);
    return SetPublicStatusUsingGet200ApplicationJson;
}(SpeakeasyBase));
export { SetPublicStatusUsingGet200ApplicationJson };
var SetPublicStatusUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(SetPublicStatusUsingGet400ApplicationJson, _super);
    function SetPublicStatusUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SetPublicStatusUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], SetPublicStatusUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SetPublicStatusUsingGet400ApplicationJson.prototype, "message", void 0);
    return SetPublicStatusUsingGet400ApplicationJson;
}(SpeakeasyBase));
export { SetPublicStatusUsingGet400ApplicationJson };
var SetPublicStatusUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(SetPublicStatusUsingGet401ApplicationJson, _super);
    function SetPublicStatusUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SetPublicStatusUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], SetPublicStatusUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SetPublicStatusUsingGet401ApplicationJson.prototype, "message", void 0);
    return SetPublicStatusUsingGet401ApplicationJson;
}(SpeakeasyBase));
export { SetPublicStatusUsingGet401ApplicationJson };
var SetPublicStatusUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(SetPublicStatusUsingGet500ApplicationJson, _super);
    function SetPublicStatusUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SetPublicStatusUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], SetPublicStatusUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SetPublicStatusUsingGet500ApplicationJson.prototype, "message", void 0);
    return SetPublicStatusUsingGet500ApplicationJson;
}(SpeakeasyBase));
export { SetPublicStatusUsingGet500ApplicationJson };
var SetPublicStatusUsingGetRequest = /** @class */ (function (_super) {
    __extends(SetPublicStatusUsingGetRequest, _super);
    function SetPublicStatusUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetPublicStatusUsingGetQueryParams)
    ], SetPublicStatusUsingGetRequest.prototype, "queryParams", void 0);
    return SetPublicStatusUsingGetRequest;
}(SpeakeasyBase));
export { SetPublicStatusUsingGetRequest };
var SetPublicStatusUsingGetResponse = /** @class */ (function (_super) {
    __extends(SetPublicStatusUsingGetResponse, _super);
    function SetPublicStatusUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SetPublicStatusUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SetPublicStatusUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetPublicStatusUsingGet200ApplicationJson)
    ], SetPublicStatusUsingGetResponse.prototype, "setPublicStatusUsingGet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetPublicStatusUsingGet400ApplicationJson)
    ], SetPublicStatusUsingGetResponse.prototype, "setPublicStatusUsingGet400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetPublicStatusUsingGet401ApplicationJson)
    ], SetPublicStatusUsingGetResponse.prototype, "setPublicStatusUsingGet401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetPublicStatusUsingGet500ApplicationJson)
    ], SetPublicStatusUsingGetResponse.prototype, "setPublicStatusUsingGet500ApplicationJsonObject", void 0);
    return SetPublicStatusUsingGetResponse;
}(SpeakeasyBase));
export { SetPublicStatusUsingGetResponse };
