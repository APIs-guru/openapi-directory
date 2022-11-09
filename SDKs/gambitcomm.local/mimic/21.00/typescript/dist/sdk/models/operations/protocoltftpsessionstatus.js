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
var ProtocolTftpSessionStatusPathParams = /** @class */ (function (_super) {
    __extends(ProtocolTftpSessionStatusPathParams, _super);
    function ProtocolTftpSessionStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" }),
        __metadata("design:type", Number)
    ], ProtocolTftpSessionStatusPathParams.prototype, "agentNum", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=sessionID" }),
        __metadata("design:type", String)
    ], ProtocolTftpSessionStatusPathParams.prototype, "sessionId", void 0);
    return ProtocolTftpSessionStatusPathParams;
}(SpeakeasyBase));
export { ProtocolTftpSessionStatusPathParams };
var ProtocolTftpSessionStatusRequest = /** @class */ (function (_super) {
    __extends(ProtocolTftpSessionStatusRequest, _super);
    function ProtocolTftpSessionStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ProtocolTftpSessionStatusPathParams)
    ], ProtocolTftpSessionStatusRequest.prototype, "pathParams", void 0);
    return ProtocolTftpSessionStatusRequest;
}(SpeakeasyBase));
export { ProtocolTftpSessionStatusRequest };
var ProtocolTftpSessionStatusResponse = /** @class */ (function (_super) {
    __extends(ProtocolTftpSessionStatusResponse, _super);
    function ProtocolTftpSessionStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ProtocolTftpSessionStatusResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ProtocolTftpSessionStatusResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ProtocolTftpSessionStatusResponse.prototype, "protocolTftpSessionStatus200ApplicationJsonString", void 0);
    return ProtocolTftpSessionStatusResponse;
}(SpeakeasyBase));
export { ProtocolTftpSessionStatusResponse };
