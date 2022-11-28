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
var ReserveRequestBody = /** @class */ (function (_super) {
    __extends(ReserveRequestBody, _super);
    function ReserveRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=chargestation" }),
        __metadata("design:type", String)
    ], ReserveRequestBody.prototype, "chargestation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connector" }),
        __metadata("design:type", String)
    ], ReserveRequestBody.prototype, "connector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=driver" }),
        __metadata("design:type", String)
    ], ReserveRequestBody.prototype, "driver", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endDate" }),
        __metadata("design:type", String)
    ], ReserveRequestBody.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], ReserveRequestBody.prototype, "token", void 0);
    return ReserveRequestBody;
}(SpeakeasyBase));
export { ReserveRequestBody };
var Reserve201ApplicationJson = /** @class */ (function (_super) {
    __extends(Reserve201ApplicationJson, _super);
    function Reserve201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", Map)
    ], Reserve201ApplicationJson.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], Reserve201ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ok" }),
        __metadata("design:type", Boolean)
    ], Reserve201ApplicationJson.prototype, "ok", void 0);
    return Reserve201ApplicationJson;
}(SpeakeasyBase));
export { Reserve201ApplicationJson };
var ReserveRequest = /** @class */ (function (_super) {
    __extends(ReserveRequest, _super);
    function ReserveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReserveRequestBody)
    ], ReserveRequest.prototype, "request", void 0);
    return ReserveRequest;
}(SpeakeasyBase));
export { ReserveRequest };
var ReserveResponse = /** @class */ (function (_super) {
    __extends(ReserveResponse, _super);
    function ReserveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReserveResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReserveResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Reserve201ApplicationJson)
    ], ReserveResponse.prototype, "reserve201ApplicationJsonObject", void 0);
    return ReserveResponse;
}(SpeakeasyBase));
export { ReserveResponse };
