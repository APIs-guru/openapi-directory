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
var ProtocolSnmpv3UserListPathParams = /** @class */ (function (_super) {
    __extends(ProtocolSnmpv3UserListPathParams, _super);
    function ProtocolSnmpv3UserListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" }),
        __metadata("design:type", Number)
    ], ProtocolSnmpv3UserListPathParams.prototype, "agentNum", void 0);
    return ProtocolSnmpv3UserListPathParams;
}(SpeakeasyBase));
export { ProtocolSnmpv3UserListPathParams };
var ProtocolSnmpv3UserListRequest = /** @class */ (function (_super) {
    __extends(ProtocolSnmpv3UserListRequest, _super);
    function ProtocolSnmpv3UserListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ProtocolSnmpv3UserListPathParams)
    ], ProtocolSnmpv3UserListRequest.prototype, "pathParams", void 0);
    return ProtocolSnmpv3UserListRequest;
}(SpeakeasyBase));
export { ProtocolSnmpv3UserListRequest };
var ProtocolSnmpv3UserListResponse = /** @class */ (function (_super) {
    __extends(ProtocolSnmpv3UserListResponse, _super);
    function ProtocolSnmpv3UserListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ProtocolSnmpv3UserListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ProtocolSnmpv3UserListResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Array)
    ], ProtocolSnmpv3UserListResponse.prototype, "protocolSnmpv3UserList200ApplicationJsonStrings", void 0);
    return ProtocolSnmpv3UserListResponse;
}(SpeakeasyBase));
export { ProtocolSnmpv3UserListResponse };
