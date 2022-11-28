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
var ProtocolSnmpv3UserAddPathParams = /** @class */ (function (_super) {
    __extends(ProtocolSnmpv3UserAddPathParams, _super);
    function ProtocolSnmpv3UserAddPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" }),
        __metadata("design:type", Number)
    ], ProtocolSnmpv3UserAddPathParams.prototype, "agentNum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=authKey" }),
        __metadata("design:type", String)
    ], ProtocolSnmpv3UserAddPathParams.prototype, "authKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=authProtocol" }),
        __metadata("design:type", String)
    ], ProtocolSnmpv3UserAddPathParams.prototype, "authProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=privKey" }),
        __metadata("design:type", String)
    ], ProtocolSnmpv3UserAddPathParams.prototype, "privKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=privProtocol" }),
        __metadata("design:type", String)
    ], ProtocolSnmpv3UserAddPathParams.prototype, "privProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=securityName" }),
        __metadata("design:type", String)
    ], ProtocolSnmpv3UserAddPathParams.prototype, "securityName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userName" }),
        __metadata("design:type", String)
    ], ProtocolSnmpv3UserAddPathParams.prototype, "userName", void 0);
    return ProtocolSnmpv3UserAddPathParams;
}(SpeakeasyBase));
export { ProtocolSnmpv3UserAddPathParams };
var ProtocolSnmpv3UserAddRequest = /** @class */ (function (_super) {
    __extends(ProtocolSnmpv3UserAddRequest, _super);
    function ProtocolSnmpv3UserAddRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProtocolSnmpv3UserAddPathParams)
    ], ProtocolSnmpv3UserAddRequest.prototype, "pathParams", void 0);
    return ProtocolSnmpv3UserAddRequest;
}(SpeakeasyBase));
export { ProtocolSnmpv3UserAddRequest };
var ProtocolSnmpv3UserAddResponse = /** @class */ (function (_super) {
    __extends(ProtocolSnmpv3UserAddResponse, _super);
    function ProtocolSnmpv3UserAddResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProtocolSnmpv3UserAddResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProtocolSnmpv3UserAddResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProtocolSnmpv3UserAddResponse.prototype, "protocolSnmpv3UserAdd200ApplicationJsonString", void 0);
    return ProtocolSnmpv3UserAddResponse;
}(SpeakeasyBase));
export { ProtocolSnmpv3UserAddResponse };
