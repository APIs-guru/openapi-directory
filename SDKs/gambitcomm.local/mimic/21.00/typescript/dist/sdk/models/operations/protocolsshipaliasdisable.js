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
var ProtocolSshIpaliasDisablePathParams = /** @class */ (function (_super) {
    __extends(ProtocolSshIpaliasDisablePathParams, _super);
    function ProtocolSshIpaliasDisablePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" }),
        __metadata("design:type", Number)
    ], ProtocolSshIpaliasDisablePathParams.prototype, "agentNum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ipaddress" }),
        __metadata("design:type", String)
    ], ProtocolSshIpaliasDisablePathParams.prototype, "ipaddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=port" }),
        __metadata("design:type", Number)
    ], ProtocolSshIpaliasDisablePathParams.prototype, "port", void 0);
    return ProtocolSshIpaliasDisablePathParams;
}(SpeakeasyBase));
export { ProtocolSshIpaliasDisablePathParams };
var ProtocolSshIpaliasDisableRequest = /** @class */ (function (_super) {
    __extends(ProtocolSshIpaliasDisableRequest, _super);
    function ProtocolSshIpaliasDisableRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProtocolSshIpaliasDisablePathParams)
    ], ProtocolSshIpaliasDisableRequest.prototype, "pathParams", void 0);
    return ProtocolSshIpaliasDisableRequest;
}(SpeakeasyBase));
export { ProtocolSshIpaliasDisableRequest };
var ProtocolSshIpaliasDisableResponse = /** @class */ (function (_super) {
    __extends(ProtocolSshIpaliasDisableResponse, _super);
    function ProtocolSshIpaliasDisableResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProtocolSshIpaliasDisableResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProtocolSshIpaliasDisableResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProtocolSshIpaliasDisableResponse.prototype, "protocolSshIpaliasDisable200ApplicationJsonString", void 0);
    return ProtocolSshIpaliasDisableResponse;
}(SpeakeasyBase));
export { ProtocolSshIpaliasDisableResponse };
