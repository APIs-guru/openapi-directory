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
var ProtocolTftpSessionWritePathParams = /** @class */ (function (_super) {
    __extends(ProtocolTftpSessionWritePathParams, _super);
    function ProtocolTftpSessionWritePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" }),
        __metadata("design:type", Number)
    ], ProtocolTftpSessionWritePathParams.prototype, "agentNum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=srcfile" }),
        __metadata("design:type", String)
    ], ProtocolTftpSessionWritePathParams.prototype, "srcfile", void 0);
    return ProtocolTftpSessionWritePathParams;
}(SpeakeasyBase));
export { ProtocolTftpSessionWritePathParams };
var ProtocolTftpSessionWriteRequest = /** @class */ (function (_super) {
    __extends(ProtocolTftpSessionWriteRequest, _super);
    function ProtocolTftpSessionWriteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProtocolTftpSessionWritePathParams)
    ], ProtocolTftpSessionWriteRequest.prototype, "pathParams", void 0);
    return ProtocolTftpSessionWriteRequest;
}(SpeakeasyBase));
export { ProtocolTftpSessionWriteRequest };
var ProtocolTftpSessionWriteResponse = /** @class */ (function (_super) {
    __extends(ProtocolTftpSessionWriteResponse, _super);
    function ProtocolTftpSessionWriteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProtocolTftpSessionWriteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProtocolTftpSessionWriteResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], ProtocolTftpSessionWriteResponse.prototype, "protocolTftpSessionWrite200ApplicationJsonInt32Integers", void 0);
    return ProtocolTftpSessionWriteResponse;
}(SpeakeasyBase));
export { ProtocolTftpSessionWriteResponse };
