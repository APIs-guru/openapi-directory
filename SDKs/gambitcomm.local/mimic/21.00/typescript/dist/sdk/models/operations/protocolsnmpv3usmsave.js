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
var ProtocolSnmpv3UsmSavePathParams = /** @class */ (function (_super) {
    __extends(ProtocolSnmpv3UsmSavePathParams, _super);
    function ProtocolSnmpv3UsmSavePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" }),
        __metadata("design:type", Number)
    ], ProtocolSnmpv3UsmSavePathParams.prototype, "agentNum", void 0);
    return ProtocolSnmpv3UsmSavePathParams;
}(SpeakeasyBase));
export { ProtocolSnmpv3UsmSavePathParams };
var ProtocolSnmpv3UsmSaveRequest = /** @class */ (function (_super) {
    __extends(ProtocolSnmpv3UsmSaveRequest, _super);
    function ProtocolSnmpv3UsmSaveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ProtocolSnmpv3UsmSavePathParams)
    ], ProtocolSnmpv3UsmSaveRequest.prototype, "pathParams", void 0);
    return ProtocolSnmpv3UsmSaveRequest;
}(SpeakeasyBase));
export { ProtocolSnmpv3UsmSaveRequest };
var ProtocolSnmpv3UsmSaveResponse = /** @class */ (function (_super) {
    __extends(ProtocolSnmpv3UsmSaveResponse, _super);
    function ProtocolSnmpv3UsmSaveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ProtocolSnmpv3UsmSaveResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ProtocolSnmpv3UsmSaveResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Array)
    ], ProtocolSnmpv3UsmSaveResponse.prototype, "protocolSnmpv3UsmSave200ApplicationJsonStrings", void 0);
    return ProtocolSnmpv3UsmSaveResponse;
}(SpeakeasyBase));
export { ProtocolSnmpv3UsmSaveResponse };
