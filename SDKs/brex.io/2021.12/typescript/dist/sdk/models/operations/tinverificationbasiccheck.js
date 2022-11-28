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
import * as shared from "../shared";
var TinVerificationBasicCheckQueryParams = /** @class */ (function (_super) {
    __extends(TinVerificationBasicCheckQueryParams, _super);
    function TinVerificationBasicCheckQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], TinVerificationBasicCheckQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tin" }),
        __metadata("design:type", String)
    ], TinVerificationBasicCheckQueryParams.prototype, "tin", void 0);
    return TinVerificationBasicCheckQueryParams;
}(SpeakeasyBase));
export { TinVerificationBasicCheckQueryParams };
var TinVerificationBasicCheckSecurity = /** @class */ (function (_super) {
    __extends(TinVerificationBasicCheckSecurity, _super);
    function TinVerificationBasicCheckSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeUserKey)
    ], TinVerificationBasicCheckSecurity.prototype, "userKey", void 0);
    return TinVerificationBasicCheckSecurity;
}(SpeakeasyBase));
export { TinVerificationBasicCheckSecurity };
var TinVerificationBasicCheckRequest = /** @class */ (function (_super) {
    __extends(TinVerificationBasicCheckRequest, _super);
    function TinVerificationBasicCheckRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TinVerificationBasicCheckQueryParams)
    ], TinVerificationBasicCheckRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TinVerificationBasicCheckSecurity)
    ], TinVerificationBasicCheckRequest.prototype, "security", void 0);
    return TinVerificationBasicCheckRequest;
}(SpeakeasyBase));
export { TinVerificationBasicCheckRequest };
var TinVerificationBasicCheckResponse = /** @class */ (function (_super) {
    __extends(TinVerificationBasicCheckResponse, _super);
    function TinVerificationBasicCheckResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TinVerificationBasicCheckResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TinVerificationBasicCheckResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], TinVerificationBasicCheckResponse.prototype, "tinVerificationBasicCheck200ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], TinVerificationBasicCheckResponse.prototype, "tinVerificationBasicCheckDefaultApplicationJsonAny", void 0);
    return TinVerificationBasicCheckResponse;
}(SpeakeasyBase));
export { TinVerificationBasicCheckResponse };
