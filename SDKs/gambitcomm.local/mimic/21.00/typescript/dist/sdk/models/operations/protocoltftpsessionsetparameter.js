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
var ProtocolTftpSessionSetParameterPathParams = /** @class */ (function (_super) {
    __extends(ProtocolTftpSessionSetParameterPathParams, _super);
    function ProtocolTftpSessionSetParameterPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" }),
        __metadata("design:type", Number)
    ], ProtocolTftpSessionSetParameterPathParams.prototype, "agentNum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parameter" }),
        __metadata("design:type", String)
    ], ProtocolTftpSessionSetParameterPathParams.prototype, "parameter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sessionID" }),
        __metadata("design:type", String)
    ], ProtocolTftpSessionSetParameterPathParams.prototype, "sessionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=value" }),
        __metadata("design:type", String)
    ], ProtocolTftpSessionSetParameterPathParams.prototype, "value", void 0);
    return ProtocolTftpSessionSetParameterPathParams;
}(SpeakeasyBase));
export { ProtocolTftpSessionSetParameterPathParams };
var ProtocolTftpSessionSetParameterRequest = /** @class */ (function (_super) {
    __extends(ProtocolTftpSessionSetParameterRequest, _super);
    function ProtocolTftpSessionSetParameterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProtocolTftpSessionSetParameterPathParams)
    ], ProtocolTftpSessionSetParameterRequest.prototype, "pathParams", void 0);
    return ProtocolTftpSessionSetParameterRequest;
}(SpeakeasyBase));
export { ProtocolTftpSessionSetParameterRequest };
var ProtocolTftpSessionSetParameterResponse = /** @class */ (function (_super) {
    __extends(ProtocolTftpSessionSetParameterResponse, _super);
    function ProtocolTftpSessionSetParameterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProtocolTftpSessionSetParameterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProtocolTftpSessionSetParameterResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProtocolTftpSessionSetParameterResponse.prototype, "protocolTftpSessionSetParameter200ApplicationJsonString", void 0);
    return ProtocolTftpSessionSetParameterResponse;
}(SpeakeasyBase));
export { ProtocolTftpSessionSetParameterResponse };
