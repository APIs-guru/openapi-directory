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
var TinVerificationNameLookupQueryParams = /** @class */ (function (_super) {
    __extends(TinVerificationNameLookupQueryParams, _super);
    function TinVerificationNameLookupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=tin" }),
        __metadata("design:type", String)
    ], TinVerificationNameLookupQueryParams.prototype, "tin", void 0);
    return TinVerificationNameLookupQueryParams;
}(SpeakeasyBase));
export { TinVerificationNameLookupQueryParams };
var TinVerificationNameLookupSecurity = /** @class */ (function (_super) {
    __extends(TinVerificationNameLookupSecurity, _super);
    function TinVerificationNameLookupSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeUserKey)
    ], TinVerificationNameLookupSecurity.prototype, "userKey", void 0);
    return TinVerificationNameLookupSecurity;
}(SpeakeasyBase));
export { TinVerificationNameLookupSecurity };
var TinVerificationNameLookupRequest = /** @class */ (function (_super) {
    __extends(TinVerificationNameLookupRequest, _super);
    function TinVerificationNameLookupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", TinVerificationNameLookupQueryParams)
    ], TinVerificationNameLookupRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", TinVerificationNameLookupSecurity)
    ], TinVerificationNameLookupRequest.prototype, "security", void 0);
    return TinVerificationNameLookupRequest;
}(SpeakeasyBase));
export { TinVerificationNameLookupRequest };
var TinVerificationNameLookupResponse = /** @class */ (function (_super) {
    __extends(TinVerificationNameLookupResponse, _super);
    function TinVerificationNameLookupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], TinVerificationNameLookupResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], TinVerificationNameLookupResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], TinVerificationNameLookupResponse.prototype, "tinVerificationNameLookup200ApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], TinVerificationNameLookupResponse.prototype, "tinVerificationNameLookupDefaultApplicationJsonAny", void 0);
    return TinVerificationNameLookupResponse;
}(SpeakeasyBase));
export { TinVerificationNameLookupResponse };
