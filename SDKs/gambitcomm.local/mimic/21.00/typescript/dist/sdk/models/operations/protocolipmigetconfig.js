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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var ProtocolIpmiGetConfigPathParams = /** @class */ (function (_super) {
    __extends(ProtocolIpmiGetConfigPathParams, _super);
    function ProtocolIpmiGetConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" }),
        __metadata("design:type", Number)
    ], ProtocolIpmiGetConfigPathParams.prototype, "agentNum", void 0);
    return ProtocolIpmiGetConfigPathParams;
}(SpeakeasyBase));
export { ProtocolIpmiGetConfigPathParams };
var ProtocolIpmiGetConfigRequest = /** @class */ (function (_super) {
    __extends(ProtocolIpmiGetConfigRequest, _super);
    function ProtocolIpmiGetConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ProtocolIpmiGetConfigPathParams)
    ], ProtocolIpmiGetConfigRequest.prototype, "pathParams", void 0);
    return ProtocolIpmiGetConfigRequest;
}(SpeakeasyBase));
export { ProtocolIpmiGetConfigRequest };
var ProtocolIpmiGetConfigResponse = /** @class */ (function (_super) {
    __extends(ProtocolIpmiGetConfigResponse, _super);
    function ProtocolIpmiGetConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ConfigIpmi)
    ], ProtocolIpmiGetConfigResponse.prototype, "configIpmi", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ProtocolIpmiGetConfigResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ProtocolIpmiGetConfigResponse.prototype, "statusCode", void 0);
    return ProtocolIpmiGetConfigResponse;
}(SpeakeasyBase));
export { ProtocolIpmiGetConfigResponse };
