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
var CreatePadUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(CreatePadUsingGetQueryParams, _super);
    function CreatePadUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], CreatePadUsingGetQueryParams.prototype, "padId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], CreatePadUsingGetQueryParams.prototype, "text", void 0);
    return CreatePadUsingGetQueryParams;
}(SpeakeasyBase));
export { CreatePadUsingGetQueryParams };
var CreatePadUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreatePadUsingGet200ApplicationJson, _super);
    function CreatePadUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreatePadUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CreatePadUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreatePadUsingGet200ApplicationJson.prototype, "message", void 0);
    return CreatePadUsingGet200ApplicationJson;
}(SpeakeasyBase));
export { CreatePadUsingGet200ApplicationJson };
var CreatePadUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(CreatePadUsingGet400ApplicationJson, _super);
    function CreatePadUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreatePadUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CreatePadUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreatePadUsingGet400ApplicationJson.prototype, "message", void 0);
    return CreatePadUsingGet400ApplicationJson;
}(SpeakeasyBase));
export { CreatePadUsingGet400ApplicationJson };
var CreatePadUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(CreatePadUsingGet401ApplicationJson, _super);
    function CreatePadUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreatePadUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CreatePadUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreatePadUsingGet401ApplicationJson.prototype, "message", void 0);
    return CreatePadUsingGet401ApplicationJson;
}(SpeakeasyBase));
export { CreatePadUsingGet401ApplicationJson };
var CreatePadUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(CreatePadUsingGet500ApplicationJson, _super);
    function CreatePadUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreatePadUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CreatePadUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreatePadUsingGet500ApplicationJson.prototype, "message", void 0);
    return CreatePadUsingGet500ApplicationJson;
}(SpeakeasyBase));
export { CreatePadUsingGet500ApplicationJson };
var CreatePadUsingGetRequest = /** @class */ (function (_super) {
    __extends(CreatePadUsingGetRequest, _super);
    function CreatePadUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreatePadUsingGetQueryParams)
    ], CreatePadUsingGetRequest.prototype, "queryParams", void 0);
    return CreatePadUsingGetRequest;
}(SpeakeasyBase));
export { CreatePadUsingGetRequest };
var CreatePadUsingGetResponse = /** @class */ (function (_super) {
    __extends(CreatePadUsingGetResponse, _super);
    function CreatePadUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreatePadUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreatePadUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreatePadUsingGet200ApplicationJson)
    ], CreatePadUsingGetResponse.prototype, "createPadUsingGet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreatePadUsingGet400ApplicationJson)
    ], CreatePadUsingGetResponse.prototype, "createPadUsingGet400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreatePadUsingGet401ApplicationJson)
    ], CreatePadUsingGetResponse.prototype, "createPadUsingGet401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreatePadUsingGet500ApplicationJson)
    ], CreatePadUsingGetResponse.prototype, "createPadUsingGet500ApplicationJsonObject", void 0);
    return CreatePadUsingGetResponse;
}(SpeakeasyBase));
export { CreatePadUsingGetResponse };
