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
var CopyPadWithoutHistoryUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(CopyPadWithoutHistoryUsingGetQueryParams, _super);
    function CopyPadWithoutHistoryUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=destinationID" }),
        __metadata("design:type", String)
    ], CopyPadWithoutHistoryUsingGetQueryParams.prototype, "destinationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=force" }),
        __metadata("design:type", String)
    ], CopyPadWithoutHistoryUsingGetQueryParams.prototype, "force", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceID" }),
        __metadata("design:type", String)
    ], CopyPadWithoutHistoryUsingGetQueryParams.prototype, "sourceId", void 0);
    return CopyPadWithoutHistoryUsingGetQueryParams;
}(SpeakeasyBase));
export { CopyPadWithoutHistoryUsingGetQueryParams };
var CopyPadWithoutHistoryUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(CopyPadWithoutHistoryUsingGet200ApplicationJson, _super);
    function CopyPadWithoutHistoryUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CopyPadWithoutHistoryUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CopyPadWithoutHistoryUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CopyPadWithoutHistoryUsingGet200ApplicationJson.prototype, "message", void 0);
    return CopyPadWithoutHistoryUsingGet200ApplicationJson;
}(SpeakeasyBase));
export { CopyPadWithoutHistoryUsingGet200ApplicationJson };
var CopyPadWithoutHistoryUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(CopyPadWithoutHistoryUsingGet400ApplicationJson, _super);
    function CopyPadWithoutHistoryUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CopyPadWithoutHistoryUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CopyPadWithoutHistoryUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CopyPadWithoutHistoryUsingGet400ApplicationJson.prototype, "message", void 0);
    return CopyPadWithoutHistoryUsingGet400ApplicationJson;
}(SpeakeasyBase));
export { CopyPadWithoutHistoryUsingGet400ApplicationJson };
var CopyPadWithoutHistoryUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(CopyPadWithoutHistoryUsingGet401ApplicationJson, _super);
    function CopyPadWithoutHistoryUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CopyPadWithoutHistoryUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CopyPadWithoutHistoryUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CopyPadWithoutHistoryUsingGet401ApplicationJson.prototype, "message", void 0);
    return CopyPadWithoutHistoryUsingGet401ApplicationJson;
}(SpeakeasyBase));
export { CopyPadWithoutHistoryUsingGet401ApplicationJson };
var CopyPadWithoutHistoryUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(CopyPadWithoutHistoryUsingGet500ApplicationJson, _super);
    function CopyPadWithoutHistoryUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CopyPadWithoutHistoryUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CopyPadWithoutHistoryUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CopyPadWithoutHistoryUsingGet500ApplicationJson.prototype, "message", void 0);
    return CopyPadWithoutHistoryUsingGet500ApplicationJson;
}(SpeakeasyBase));
export { CopyPadWithoutHistoryUsingGet500ApplicationJson };
var CopyPadWithoutHistoryUsingGetRequest = /** @class */ (function (_super) {
    __extends(CopyPadWithoutHistoryUsingGetRequest, _super);
    function CopyPadWithoutHistoryUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CopyPadWithoutHistoryUsingGetQueryParams)
    ], CopyPadWithoutHistoryUsingGetRequest.prototype, "queryParams", void 0);
    return CopyPadWithoutHistoryUsingGetRequest;
}(SpeakeasyBase));
export { CopyPadWithoutHistoryUsingGetRequest };
var CopyPadWithoutHistoryUsingGetResponse = /** @class */ (function (_super) {
    __extends(CopyPadWithoutHistoryUsingGetResponse, _super);
    function CopyPadWithoutHistoryUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CopyPadWithoutHistoryUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CopyPadWithoutHistoryUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CopyPadWithoutHistoryUsingGet200ApplicationJson)
    ], CopyPadWithoutHistoryUsingGetResponse.prototype, "copyPadWithoutHistoryUsingGet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CopyPadWithoutHistoryUsingGet400ApplicationJson)
    ], CopyPadWithoutHistoryUsingGetResponse.prototype, "copyPadWithoutHistoryUsingGet400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CopyPadWithoutHistoryUsingGet401ApplicationJson)
    ], CopyPadWithoutHistoryUsingGetResponse.prototype, "copyPadWithoutHistoryUsingGet401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CopyPadWithoutHistoryUsingGet500ApplicationJson)
    ], CopyPadWithoutHistoryUsingGetResponse.prototype, "copyPadWithoutHistoryUsingGet500ApplicationJsonObject", void 0);
    return CopyPadWithoutHistoryUsingGetResponse;
}(SpeakeasyBase));
export { CopyPadWithoutHistoryUsingGetResponse };
