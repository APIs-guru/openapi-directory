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
var PostConnectorsRequestBody = /** @class */ (function (_super) {
    __extends(PostConnectorsRequestBody, _super);
    function PostConnectorsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=chargestation" }),
        __metadata("design:type", String)
    ], PostConnectorsRequestBody.prototype, "chargestation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], PostConnectorsRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=power" }),
        __metadata("design:type", Number)
    ], PostConnectorsRequestBody.prototype, "power", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=power_type" }),
        __metadata("design:type", String)
    ], PostConnectorsRequestBody.prototype, "powerType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rate" }),
        __metadata("design:type", String)
    ], PostConnectorsRequestBody.prototype, "rate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostConnectorsRequestBody.prototype, "type", void 0);
    return PostConnectorsRequestBody;
}(SpeakeasyBase));
export { PostConnectorsRequestBody };
var PostConnectors200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostConnectors200ApplicationJson, _super);
    function PostConnectors200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostConnectors200ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ok" }),
        __metadata("design:type", Boolean)
    ], PostConnectors200ApplicationJson.prototype, "ok", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", Map)
    ], PostConnectors200ApplicationJson.prototype, "result", void 0);
    return PostConnectors200ApplicationJson;
}(SpeakeasyBase));
export { PostConnectors200ApplicationJson };
var PostConnectorsRequest = /** @class */ (function (_super) {
    __extends(PostConnectorsRequest, _super);
    function PostConnectorsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostConnectorsRequestBody)
    ], PostConnectorsRequest.prototype, "request", void 0);
    return PostConnectorsRequest;
}(SpeakeasyBase));
export { PostConnectorsRequest };
var PostConnectorsResponse = /** @class */ (function (_super) {
    __extends(PostConnectorsResponse, _super);
    function PostConnectorsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostConnectorsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostConnectorsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostConnectors200ApplicationJson)
    ], PostConnectorsResponse.prototype, "postConnectors200ApplicationJsonObject", void 0);
    return PostConnectorsResponse;
}(SpeakeasyBase));
export { PostConnectorsResponse };
