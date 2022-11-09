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
var GetTransactionHashPathParams = /** @class */ (function (_super) {
    __extends(GetTransactionHashPathParams, _super);
    function GetTransactionHashPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=hash" }),
        __metadata("design:type", String)
    ], GetTransactionHashPathParams.prototype, "hash", void 0);
    return GetTransactionHashPathParams;
}(SpeakeasyBase));
export { GetTransactionHashPathParams };
var GetTransactionHashSecurity = /** @class */ (function (_super) {
    __extends(GetTransactionHashSecurity, _super);
    function GetTransactionHashSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeKey2)
    ], GetTransactionHashSecurity.prototype, "key2", void 0);
    return GetTransactionHashSecurity;
}(SpeakeasyBase));
export { GetTransactionHashSecurity };
var GetTransactionHashRequest = /** @class */ (function (_super) {
    __extends(GetTransactionHashRequest, _super);
    function GetTransactionHashRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetTransactionHashPathParams)
    ], GetTransactionHashRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetTransactionHashSecurity)
    ], GetTransactionHashRequest.prototype, "security", void 0);
    return GetTransactionHashRequest;
}(SpeakeasyBase));
export { GetTransactionHashRequest };
var GetTransactionHashResponse = /** @class */ (function (_super) {
    __extends(GetTransactionHashResponse, _super);
    function GetTransactionHashResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetTransactionHashResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], GetTransactionHashResponse.prototype, "empty", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], GetTransactionHashResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetTransactionHashResponse.prototype, "statusCode", void 0);
    return GetTransactionHashResponse;
}(SpeakeasyBase));
export { GetTransactionHashResponse };
