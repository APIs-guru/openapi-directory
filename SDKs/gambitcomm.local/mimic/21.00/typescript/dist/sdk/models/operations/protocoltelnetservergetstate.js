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
var ProtocolTelnetServerGetStatePathParams = /** @class */ (function (_super) {
    __extends(ProtocolTelnetServerGetStatePathParams, _super);
    function ProtocolTelnetServerGetStatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" }),
        __metadata("design:type", Number)
    ], ProtocolTelnetServerGetStatePathParams.prototype, "agentNum", void 0);
    return ProtocolTelnetServerGetStatePathParams;
}(SpeakeasyBase));
export { ProtocolTelnetServerGetStatePathParams };
var ProtocolTelnetServerGetStateRequest = /** @class */ (function (_super) {
    __extends(ProtocolTelnetServerGetStateRequest, _super);
    function ProtocolTelnetServerGetStateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ProtocolTelnetServerGetStatePathParams)
    ], ProtocolTelnetServerGetStateRequest.prototype, "pathParams", void 0);
    return ProtocolTelnetServerGetStateRequest;
}(SpeakeasyBase));
export { ProtocolTelnetServerGetStateRequest };
var ProtocolTelnetServerGetStateResponse = /** @class */ (function (_super) {
    __extends(ProtocolTelnetServerGetStateResponse, _super);
    function ProtocolTelnetServerGetStateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ProtocolTelnetServerGetStateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ProtocolTelnetServerGetStateResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Array)
    ], ProtocolTelnetServerGetStateResponse.prototype, "protocolTelnetServerGetState200ApplicationJsonInt32Integers", void 0);
    return ProtocolTelnetServerGetStateResponse;
}(SpeakeasyBase));
export { ProtocolTelnetServerGetStateResponse };
