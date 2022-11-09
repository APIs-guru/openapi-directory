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
var EinVerificationBasicQueryParams = /** @class */ (function (_super) {
    __extends(EinVerificationBasicQueryParams, _super);
    function EinVerificationBasicQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ein" }),
        __metadata("design:type", String)
    ], EinVerificationBasicQueryParams.prototype, "ein", void 0);
    return EinVerificationBasicQueryParams;
}(SpeakeasyBase));
export { EinVerificationBasicQueryParams };
var EinVerificationBasicSecurity = /** @class */ (function (_super) {
    __extends(EinVerificationBasicSecurity, _super);
    function EinVerificationBasicSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeUserKey)
    ], EinVerificationBasicSecurity.prototype, "userKey", void 0);
    return EinVerificationBasicSecurity;
}(SpeakeasyBase));
export { EinVerificationBasicSecurity };
var EinVerificationBasicRequest = /** @class */ (function (_super) {
    __extends(EinVerificationBasicRequest, _super);
    function EinVerificationBasicRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", EinVerificationBasicQueryParams)
    ], EinVerificationBasicRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", EinVerificationBasicSecurity)
    ], EinVerificationBasicRequest.prototype, "security", void 0);
    return EinVerificationBasicRequest;
}(SpeakeasyBase));
export { EinVerificationBasicRequest };
var EinVerificationBasicResponse = /** @class */ (function (_super) {
    __extends(EinVerificationBasicResponse, _super);
    function EinVerificationBasicResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], EinVerificationBasicResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], EinVerificationBasicResponse.prototype, "einVerificationBasic200ApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], EinVerificationBasicResponse.prototype, "einVerificationBasicDefaultApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], EinVerificationBasicResponse.prototype, "statusCode", void 0);
    return EinVerificationBasicResponse;
}(SpeakeasyBase));
export { EinVerificationBasicResponse };
