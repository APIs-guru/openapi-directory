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
import * as shared from "../shared";
var PatchChargeStationPathParams = /** @class */ (function (_super) {
    __extends(PatchChargeStationPathParams, _super);
    function PatchChargeStationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PatchChargeStationPathParams.prototype, "id", void 0);
    return PatchChargeStationPathParams;
}(SpeakeasyBase));
export { PatchChargeStationPathParams };
var PatchChargeStation200ApplicationJson = /** @class */ (function (_super) {
    __extends(PatchChargeStation200ApplicationJson, _super);
    function PatchChargeStation200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PatchChargeStation200ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ok" }),
        __metadata("design:type", Boolean)
    ], PatchChargeStation200ApplicationJson.prototype, "ok", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", Map)
    ], PatchChargeStation200ApplicationJson.prototype, "result", void 0);
    return PatchChargeStation200ApplicationJson;
}(SpeakeasyBase));
export { PatchChargeStation200ApplicationJson };
var PatchChargeStationRequest = /** @class */ (function (_super) {
    __extends(PatchChargeStationRequest, _super);
    function PatchChargeStationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchChargeStationPathParams)
    ], PatchChargeStationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Schema1)
    ], PatchChargeStationRequest.prototype, "request", void 0);
    return PatchChargeStationRequest;
}(SpeakeasyBase));
export { PatchChargeStationRequest };
var PatchChargeStationResponse = /** @class */ (function (_super) {
    __extends(PatchChargeStationResponse, _super);
    function PatchChargeStationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PatchChargeStationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PatchChargeStationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchChargeStation200ApplicationJson)
    ], PatchChargeStationResponse.prototype, "patchChargeStation200ApplicationJsonObject", void 0);
    return PatchChargeStationResponse;
}(SpeakeasyBase));
export { PatchChargeStationResponse };
