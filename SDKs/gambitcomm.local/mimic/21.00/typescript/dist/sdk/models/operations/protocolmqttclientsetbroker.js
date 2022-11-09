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
var ProtocolMqttClientSetBrokerPathParams = /** @class */ (function (_super) {
    __extends(ProtocolMqttClientSetBrokerPathParams, _super);
    function ProtocolMqttClientSetBrokerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" }),
        __metadata("design:type", Number)
    ], ProtocolMqttClientSetBrokerPathParams.prototype, "agentNum", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=brokerAddr" }),
        __metadata("design:type", String)
    ], ProtocolMqttClientSetBrokerPathParams.prototype, "brokerAddr", void 0);
    return ProtocolMqttClientSetBrokerPathParams;
}(SpeakeasyBase));
export { ProtocolMqttClientSetBrokerPathParams };
var ProtocolMqttClientSetBrokerRequest = /** @class */ (function (_super) {
    __extends(ProtocolMqttClientSetBrokerRequest, _super);
    function ProtocolMqttClientSetBrokerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ProtocolMqttClientSetBrokerPathParams)
    ], ProtocolMqttClientSetBrokerRequest.prototype, "pathParams", void 0);
    return ProtocolMqttClientSetBrokerRequest;
}(SpeakeasyBase));
export { ProtocolMqttClientSetBrokerRequest };
var ProtocolMqttClientSetBrokerResponse = /** @class */ (function (_super) {
    __extends(ProtocolMqttClientSetBrokerResponse, _super);
    function ProtocolMqttClientSetBrokerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ProtocolMqttClientSetBrokerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ProtocolMqttClientSetBrokerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Array)
    ], ProtocolMqttClientSetBrokerResponse.prototype, "protocolMqttClientSetBroker200ApplicationJsonInt32Integers", void 0);
    return ProtocolMqttClientSetBrokerResponse;
}(SpeakeasyBase));
export { ProtocolMqttClientSetBrokerResponse };
