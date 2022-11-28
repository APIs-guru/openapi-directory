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
var UpdatereservationPathParams = /** @class */ (function (_super) {
    __extends(UpdatereservationPathParams, _super);
    function UpdatereservationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], UpdatereservationPathParams.prototype, "id", void 0);
    return UpdatereservationPathParams;
}(SpeakeasyBase));
export { UpdatereservationPathParams };
var UpdatereservationRequestBody = /** @class */ (function (_super) {
    __extends(UpdatereservationRequestBody, _super);
    function UpdatereservationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connector" }),
        __metadata("design:type", Number)
    ], UpdatereservationRequestBody.prototype, "connector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=driver" }),
        __metadata("design:type", String)
    ], UpdatereservationRequestBody.prototype, "driver", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endDate" }),
        __metadata("design:type", String)
    ], UpdatereservationRequestBody.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=evse" }),
        __metadata("design:type", Number)
    ], UpdatereservationRequestBody.prototype, "evse", void 0);
    return UpdatereservationRequestBody;
}(SpeakeasyBase));
export { UpdatereservationRequestBody };
var Updatereservation201ApplicationJson = /** @class */ (function (_super) {
    __extends(Updatereservation201ApplicationJson, _super);
    function Updatereservation201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], Updatereservation201ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ok" }),
        __metadata("design:type", Boolean)
    ], Updatereservation201ApplicationJson.prototype, "ok", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", Map)
    ], Updatereservation201ApplicationJson.prototype, "result", void 0);
    return Updatereservation201ApplicationJson;
}(SpeakeasyBase));
export { Updatereservation201ApplicationJson };
var UpdatereservationRequest = /** @class */ (function (_super) {
    __extends(UpdatereservationRequest, _super);
    function UpdatereservationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdatereservationPathParams)
    ], UpdatereservationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdatereservationRequestBody)
    ], UpdatereservationRequest.prototype, "request", void 0);
    return UpdatereservationRequest;
}(SpeakeasyBase));
export { UpdatereservationRequest };
var UpdatereservationResponse = /** @class */ (function (_super) {
    __extends(UpdatereservationResponse, _super);
    function UpdatereservationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdatereservationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdatereservationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Updatereservation201ApplicationJson)
    ], UpdatereservationResponse.prototype, "updatereservation201ApplicationJsonObject", void 0);
    return UpdatereservationResponse;
}(SpeakeasyBase));
export { UpdatereservationResponse };
