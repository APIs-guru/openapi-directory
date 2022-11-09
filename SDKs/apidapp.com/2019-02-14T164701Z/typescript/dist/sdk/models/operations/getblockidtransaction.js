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
var GetBlockIdTransactionPathParams = /** @class */ (function (_super) {
    __extends(GetBlockIdTransactionPathParams, _super);
    function GetBlockIdTransactionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetBlockIdTransactionPathParams.prototype, "id", void 0);
    return GetBlockIdTransactionPathParams;
}(SpeakeasyBase));
export { GetBlockIdTransactionPathParams };
var GetBlockIdTransactionSecurity = /** @class */ (function (_super) {
    __extends(GetBlockIdTransactionSecurity, _super);
    function GetBlockIdTransactionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeKey2)
    ], GetBlockIdTransactionSecurity.prototype, "key2", void 0);
    return GetBlockIdTransactionSecurity;
}(SpeakeasyBase));
export { GetBlockIdTransactionSecurity };
var GetBlockIdTransactionRequest = /** @class */ (function (_super) {
    __extends(GetBlockIdTransactionRequest, _super);
    function GetBlockIdTransactionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetBlockIdTransactionPathParams)
    ], GetBlockIdTransactionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetBlockIdTransactionSecurity)
    ], GetBlockIdTransactionRequest.prototype, "security", void 0);
    return GetBlockIdTransactionRequest;
}(SpeakeasyBase));
export { GetBlockIdTransactionRequest };
var GetBlockIdTransactionResponse = /** @class */ (function (_super) {
    __extends(GetBlockIdTransactionResponse, _super);
    function GetBlockIdTransactionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetBlockIdTransactionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], GetBlockIdTransactionResponse.prototype, "empty", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], GetBlockIdTransactionResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetBlockIdTransactionResponse.prototype, "statusCode", void 0);
    return GetBlockIdTransactionResponse;
}(SpeakeasyBase));
export { GetBlockIdTransactionResponse };
