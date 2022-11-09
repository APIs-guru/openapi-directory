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
var EinVerificationLookupQueryParams = /** @class */ (function (_super) {
    __extends(EinVerificationLookupQueryParams, _super);
    function EinVerificationLookupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], EinVerificationLookupQueryParams.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], EinVerificationLookupQueryParams.prototype, "state", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=tight" }),
        __metadata("design:type", Boolean)
    ], EinVerificationLookupQueryParams.prototype, "tight", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=zip" }),
        __metadata("design:type", String)
    ], EinVerificationLookupQueryParams.prototype, "zip", void 0);
    return EinVerificationLookupQueryParams;
}(SpeakeasyBase));
export { EinVerificationLookupQueryParams };
var EinVerificationLookupSecurity = /** @class */ (function (_super) {
    __extends(EinVerificationLookupSecurity, _super);
    function EinVerificationLookupSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeUserKey)
    ], EinVerificationLookupSecurity.prototype, "userKey", void 0);
    return EinVerificationLookupSecurity;
}(SpeakeasyBase));
export { EinVerificationLookupSecurity };
var EinVerificationLookupRequest = /** @class */ (function (_super) {
    __extends(EinVerificationLookupRequest, _super);
    function EinVerificationLookupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", EinVerificationLookupQueryParams)
    ], EinVerificationLookupRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", EinVerificationLookupSecurity)
    ], EinVerificationLookupRequest.prototype, "security", void 0);
    return EinVerificationLookupRequest;
}(SpeakeasyBase));
export { EinVerificationLookupRequest };
var EinVerificationLookupResponse = /** @class */ (function (_super) {
    __extends(EinVerificationLookupResponse, _super);
    function EinVerificationLookupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], EinVerificationLookupResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], EinVerificationLookupResponse.prototype, "einVerificationLookup200ApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], EinVerificationLookupResponse.prototype, "einVerificationLookupDefaultApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], EinVerificationLookupResponse.prototype, "statusCode", void 0);
    return EinVerificationLookupResponse;
}(SpeakeasyBase));
export { EinVerificationLookupResponse };
