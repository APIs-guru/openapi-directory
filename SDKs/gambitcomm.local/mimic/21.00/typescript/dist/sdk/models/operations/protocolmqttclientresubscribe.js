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
var ProtocolMqttClientResubscribePathParams = /** @class */ (function (_super) {
    __extends(ProtocolMqttClientResubscribePathParams, _super);
    function ProtocolMqttClientResubscribePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" }),
        __metadata("design:type", Number)
    ], ProtocolMqttClientResubscribePathParams.prototype, "agentNum", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=subNum" }),
        __metadata("design:type", Number)
    ], ProtocolMqttClientResubscribePathParams.prototype, "subNum", void 0);
    return ProtocolMqttClientResubscribePathParams;
}(SpeakeasyBase));
export { ProtocolMqttClientResubscribePathParams };
var ProtocolMqttClientResubscribeRequest = /** @class */ (function (_super) {
    __extends(ProtocolMqttClientResubscribeRequest, _super);
    function ProtocolMqttClientResubscribeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ProtocolMqttClientResubscribePathParams)
    ], ProtocolMqttClientResubscribeRequest.prototype, "pathParams", void 0);
    return ProtocolMqttClientResubscribeRequest;
}(SpeakeasyBase));
export { ProtocolMqttClientResubscribeRequest };
var ProtocolMqttClientResubscribeResponse = /** @class */ (function (_super) {
    __extends(ProtocolMqttClientResubscribeResponse, _super);
    function ProtocolMqttClientResubscribeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ProtocolMqttClientResubscribeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ProtocolMqttClientResubscribeResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ProtocolMqttClientResubscribeResponse.prototype, "protocolMqttClientResubscribe200ApplicationJsonString", void 0);
    return ProtocolMqttClientResubscribeResponse;
}(SpeakeasyBase));
export { ProtocolMqttClientResubscribeResponse };
