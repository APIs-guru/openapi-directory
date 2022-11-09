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
import * as shared from "../shared";
var ProtocolTelnetIpaliasListPathParams = /** @class */ (function (_super) {
    __extends(ProtocolTelnetIpaliasListPathParams, _super);
    function ProtocolTelnetIpaliasListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" }),
        __metadata("design:type", Number)
    ], ProtocolTelnetIpaliasListPathParams.prototype, "agentNum", void 0);
    return ProtocolTelnetIpaliasListPathParams;
}(SpeakeasyBase));
export { ProtocolTelnetIpaliasListPathParams };
var ProtocolTelnetIpaliasListRequest = /** @class */ (function (_super) {
    __extends(ProtocolTelnetIpaliasListRequest, _super);
    function ProtocolTelnetIpaliasListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ProtocolTelnetIpaliasListPathParams)
    ], ProtocolTelnetIpaliasListRequest.prototype, "pathParams", void 0);
    return ProtocolTelnetIpaliasListRequest;
}(SpeakeasyBase));
export { ProtocolTelnetIpaliasListRequest };
var ProtocolTelnetIpaliasListResponse = /** @class */ (function (_super) {
    __extends(ProtocolTelnetIpaliasListResponse, _super);
    function ProtocolTelnetIpaliasListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ProtocolTelnetIpaliasListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata({ elemType: shared.IpAlias }),
        __metadata("design:type", Array)
    ], ProtocolTelnetIpaliasListResponse.prototype, "ipAliases", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ProtocolTelnetIpaliasListResponse.prototype, "statusCode", void 0);
    return ProtocolTelnetIpaliasListResponse;
}(SpeakeasyBase));
export { ProtocolTelnetIpaliasListResponse };
