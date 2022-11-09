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
var GetEthereumBalanceHeaders = /** @class */ (function (_super) {
    __extends(GetEthereumBalanceHeaders, _super);
    function GetEthereumBalanceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetEthereumBalanceHeaders.prototype, "authorization", void 0);
    return GetEthereumBalanceHeaders;
}(SpeakeasyBase));
export { GetEthereumBalanceHeaders };
var GetEthereumBalanceRequest = /** @class */ (function (_super) {
    __extends(GetEthereumBalanceRequest, _super);
    function GetEthereumBalanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetEthereumBalanceHeaders)
    ], GetEthereumBalanceRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetEthereumBalanceRequest)
    ], GetEthereumBalanceRequest.prototype, "request", void 0);
    return GetEthereumBalanceRequest;
}(SpeakeasyBase));
export { GetEthereumBalanceRequest };
var GetEthereumBalanceResponse = /** @class */ (function (_super) {
    __extends(GetEthereumBalanceResponse, _super);
    function GetEthereumBalanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetEthereumBalanceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetEthereumBalanceResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetEthereumBalance)
    ], GetEthereumBalanceResponse.prototype, "getEthereumBalance", void 0);
    return GetEthereumBalanceResponse;
}(SpeakeasyBase));
export { GetEthereumBalanceResponse };
