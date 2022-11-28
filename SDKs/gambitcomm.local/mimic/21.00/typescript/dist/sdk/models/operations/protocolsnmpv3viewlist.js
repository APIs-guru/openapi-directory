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
var ProtocolSnmpv3ViewListPathParams = /** @class */ (function (_super) {
    __extends(ProtocolSnmpv3ViewListPathParams, _super);
    function ProtocolSnmpv3ViewListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" }),
        __metadata("design:type", Number)
    ], ProtocolSnmpv3ViewListPathParams.prototype, "agentNum", void 0);
    return ProtocolSnmpv3ViewListPathParams;
}(SpeakeasyBase));
export { ProtocolSnmpv3ViewListPathParams };
var ProtocolSnmpv3ViewListRequest = /** @class */ (function (_super) {
    __extends(ProtocolSnmpv3ViewListRequest, _super);
    function ProtocolSnmpv3ViewListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProtocolSnmpv3ViewListPathParams)
    ], ProtocolSnmpv3ViewListRequest.prototype, "pathParams", void 0);
    return ProtocolSnmpv3ViewListRequest;
}(SpeakeasyBase));
export { ProtocolSnmpv3ViewListRequest };
var ProtocolSnmpv3ViewListResponse = /** @class */ (function (_super) {
    __extends(ProtocolSnmpv3ViewListResponse, _super);
    function ProtocolSnmpv3ViewListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProtocolSnmpv3ViewListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProtocolSnmpv3ViewListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], ProtocolSnmpv3ViewListResponse.prototype, "protocolSnmpv3ViewList200ApplicationJsonStrings", void 0);
    return ProtocolSnmpv3ViewListResponse;
}(SpeakeasyBase));
export { ProtocolSnmpv3ViewListResponse };
