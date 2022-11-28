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
var RestoreRevisionUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(RestoreRevisionUsingGetQueryParams, _super);
    function RestoreRevisionUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], RestoreRevisionUsingGetQueryParams.prototype, "padId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rev" }),
        __metadata("design:type", String)
    ], RestoreRevisionUsingGetQueryParams.prototype, "rev", void 0);
    return RestoreRevisionUsingGetQueryParams;
}(SpeakeasyBase));
export { RestoreRevisionUsingGetQueryParams };
var RestoreRevisionUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(RestoreRevisionUsingGet200ApplicationJson, _super);
    function RestoreRevisionUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], RestoreRevisionUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], RestoreRevisionUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], RestoreRevisionUsingGet200ApplicationJson.prototype, "message", void 0);
    return RestoreRevisionUsingGet200ApplicationJson;
}(SpeakeasyBase));
export { RestoreRevisionUsingGet200ApplicationJson };
var RestoreRevisionUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(RestoreRevisionUsingGet400ApplicationJson, _super);
    function RestoreRevisionUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], RestoreRevisionUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], RestoreRevisionUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], RestoreRevisionUsingGet400ApplicationJson.prototype, "message", void 0);
    return RestoreRevisionUsingGet400ApplicationJson;
}(SpeakeasyBase));
export { RestoreRevisionUsingGet400ApplicationJson };
var RestoreRevisionUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(RestoreRevisionUsingGet401ApplicationJson, _super);
    function RestoreRevisionUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], RestoreRevisionUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], RestoreRevisionUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], RestoreRevisionUsingGet401ApplicationJson.prototype, "message", void 0);
    return RestoreRevisionUsingGet401ApplicationJson;
}(SpeakeasyBase));
export { RestoreRevisionUsingGet401ApplicationJson };
var RestoreRevisionUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(RestoreRevisionUsingGet500ApplicationJson, _super);
    function RestoreRevisionUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], RestoreRevisionUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], RestoreRevisionUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], RestoreRevisionUsingGet500ApplicationJson.prototype, "message", void 0);
    return RestoreRevisionUsingGet500ApplicationJson;
}(SpeakeasyBase));
export { RestoreRevisionUsingGet500ApplicationJson };
var RestoreRevisionUsingGetRequest = /** @class */ (function (_super) {
    __extends(RestoreRevisionUsingGetRequest, _super);
    function RestoreRevisionUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RestoreRevisionUsingGetQueryParams)
    ], RestoreRevisionUsingGetRequest.prototype, "queryParams", void 0);
    return RestoreRevisionUsingGetRequest;
}(SpeakeasyBase));
export { RestoreRevisionUsingGetRequest };
var RestoreRevisionUsingGetResponse = /** @class */ (function (_super) {
    __extends(RestoreRevisionUsingGetResponse, _super);
    function RestoreRevisionUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RestoreRevisionUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RestoreRevisionUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RestoreRevisionUsingGet200ApplicationJson)
    ], RestoreRevisionUsingGetResponse.prototype, "restoreRevisionUsingGet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RestoreRevisionUsingGet400ApplicationJson)
    ], RestoreRevisionUsingGetResponse.prototype, "restoreRevisionUsingGet400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RestoreRevisionUsingGet401ApplicationJson)
    ], RestoreRevisionUsingGetResponse.prototype, "restoreRevisionUsingGet401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RestoreRevisionUsingGet500ApplicationJson)
    ], RestoreRevisionUsingGetResponse.prototype, "restoreRevisionUsingGet500ApplicationJsonObject", void 0);
    return RestoreRevisionUsingGetResponse;
}(SpeakeasyBase));
export { RestoreRevisionUsingGetResponse };
