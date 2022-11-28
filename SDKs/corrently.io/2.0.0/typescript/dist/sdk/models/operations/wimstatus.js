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
var WimstatusQueryParams = /** @class */ (function (_super) {
    __extends(WimstatusQueryParams, _super);
    function WimstatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vid" }),
        __metadata("design:type", String)
    ], WimstatusQueryParams.prototype, "vid", void 0);
    return WimstatusQueryParams;
}(SpeakeasyBase));
export { WimstatusQueryParams };
var Wimstatus200ApplicationJson = /** @class */ (function (_super) {
    __extends(Wimstatus200ApplicationJson, _super);
    function Wimstatus200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wim_started" }),
        __metadata("design:type", Number)
    ], Wimstatus200ApplicationJson.prototype, "wimStarted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wim_status" }),
        __metadata("design:type", String)
    ], Wimstatus200ApplicationJson.prototype, "wimStatus", void 0);
    return Wimstatus200ApplicationJson;
}(SpeakeasyBase));
export { Wimstatus200ApplicationJson };
var WimstatusRequest = /** @class */ (function (_super) {
    __extends(WimstatusRequest, _super);
    function WimstatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WimstatusQueryParams)
    ], WimstatusRequest.prototype, "queryParams", void 0);
    return WimstatusRequest;
}(SpeakeasyBase));
export { WimstatusRequest };
var WimstatusResponse = /** @class */ (function (_super) {
    __extends(WimstatusResponse, _super);
    function WimstatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], WimstatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], WimstatusResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Wimstatus200ApplicationJson)
    ], WimstatusResponse.prototype, "wimstatus200ApplicationJsonObject", void 0);
    return WimstatusResponse;
}(SpeakeasyBase));
export { WimstatusResponse };
