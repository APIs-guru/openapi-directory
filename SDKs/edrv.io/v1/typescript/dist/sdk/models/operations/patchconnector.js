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
var PatchConnectorPathParams = /** @class */ (function (_super) {
    __extends(PatchConnectorPathParams, _super);
    function PatchConnectorPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PatchConnectorPathParams.prototype, "id", void 0);
    return PatchConnectorPathParams;
}(SpeakeasyBase));
export { PatchConnectorPathParams };
var PatchConnectorRequestBody = /** @class */ (function (_super) {
    __extends(PatchConnectorRequestBody, _super);
    function PatchConnectorRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=chargestation" }),
        __metadata("design:type", String)
    ], PatchConnectorRequestBody.prototype, "chargestation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], PatchConnectorRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=power" }),
        __metadata("design:type", Number)
    ], PatchConnectorRequestBody.prototype, "power", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=power_type" }),
        __metadata("design:type", String)
    ], PatchConnectorRequestBody.prototype, "powerType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rate" }),
        __metadata("design:type", String)
    ], PatchConnectorRequestBody.prototype, "rate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PatchConnectorRequestBody.prototype, "type", void 0);
    return PatchConnectorRequestBody;
}(SpeakeasyBase));
export { PatchConnectorRequestBody };
var PatchConnector201ApplicationJson = /** @class */ (function (_super) {
    __extends(PatchConnector201ApplicationJson, _super);
    function PatchConnector201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PatchConnector201ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ok" }),
        __metadata("design:type", Boolean)
    ], PatchConnector201ApplicationJson.prototype, "ok", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", Map)
    ], PatchConnector201ApplicationJson.prototype, "result", void 0);
    return PatchConnector201ApplicationJson;
}(SpeakeasyBase));
export { PatchConnector201ApplicationJson };
var PatchConnectorRequest = /** @class */ (function (_super) {
    __extends(PatchConnectorRequest, _super);
    function PatchConnectorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchConnectorPathParams)
    ], PatchConnectorRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PatchConnectorRequestBody)
    ], PatchConnectorRequest.prototype, "request", void 0);
    return PatchConnectorRequest;
}(SpeakeasyBase));
export { PatchConnectorRequest };
var PatchConnectorResponse = /** @class */ (function (_super) {
    __extends(PatchConnectorResponse, _super);
    function PatchConnectorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PatchConnectorResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PatchConnectorResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchConnector201ApplicationJson)
    ], PatchConnectorResponse.prototype, "patchConnector201ApplicationJsonObject", void 0);
    return PatchConnectorResponse;
}(SpeakeasyBase));
export { PatchConnectorResponse };
