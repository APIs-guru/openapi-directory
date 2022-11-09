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
var ProtocolSnmpv3AccessDelPathParams = /** @class */ (function (_super) {
    __extends(ProtocolSnmpv3AccessDelPathParams, _super);
    function ProtocolSnmpv3AccessDelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=accessName" }),
        __metadata("design:type", String)
    ], ProtocolSnmpv3AccessDelPathParams.prototype, "accessName", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" }),
        __metadata("design:type", Number)
    ], ProtocolSnmpv3AccessDelPathParams.prototype, "agentNum", void 0);
    return ProtocolSnmpv3AccessDelPathParams;
}(SpeakeasyBase));
export { ProtocolSnmpv3AccessDelPathParams };
var ProtocolSnmpv3AccessDelRequest = /** @class */ (function (_super) {
    __extends(ProtocolSnmpv3AccessDelRequest, _super);
    function ProtocolSnmpv3AccessDelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ProtocolSnmpv3AccessDelPathParams)
    ], ProtocolSnmpv3AccessDelRequest.prototype, "pathParams", void 0);
    return ProtocolSnmpv3AccessDelRequest;
}(SpeakeasyBase));
export { ProtocolSnmpv3AccessDelRequest };
var ProtocolSnmpv3AccessDelResponse = /** @class */ (function (_super) {
    __extends(ProtocolSnmpv3AccessDelResponse, _super);
    function ProtocolSnmpv3AccessDelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ProtocolSnmpv3AccessDelResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ProtocolSnmpv3AccessDelResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ProtocolSnmpv3AccessDelResponse.prototype, "protocolSnmpv3AccessDel200ApplicationJsonString", void 0);
    return ProtocolSnmpv3AccessDelResponse;
}(SpeakeasyBase));
export { ProtocolSnmpv3AccessDelResponse };
