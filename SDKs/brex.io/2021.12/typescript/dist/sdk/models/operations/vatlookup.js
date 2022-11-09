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
var VatLookupPathParams = /** @class */ (function (_super) {
    __extends(VatLookupPathParams, _super);
    function VatLookupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=country" }),
        __metadata("design:type", String)
    ], VatLookupPathParams.prototype, "country", void 0);
    return VatLookupPathParams;
}(SpeakeasyBase));
export { VatLookupPathParams };
var VatLookupRequestBody = /** @class */ (function (_super) {
    __extends(VatLookupRequestBody, _super);
    function VatLookupRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=address;" }),
        __metadata("design:type", String)
    ], VatLookupRequestBody.prototype, "address", void 0);
    __decorate([
        Metadata({ data: "form, name=name;" }),
        __metadata("design:type", String)
    ], VatLookupRequestBody.prototype, "name", void 0);
    return VatLookupRequestBody;
}(SpeakeasyBase));
export { VatLookupRequestBody };
var VatLookupSecurity = /** @class */ (function (_super) {
    __extends(VatLookupSecurity, _super);
    function VatLookupSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeUserKey)
    ], VatLookupSecurity.prototype, "userKey", void 0);
    return VatLookupSecurity;
}(SpeakeasyBase));
export { VatLookupSecurity };
var VatLookupRequest = /** @class */ (function (_super) {
    __extends(VatLookupRequest, _super);
    function VatLookupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", VatLookupPathParams)
    ], VatLookupRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", VatLookupRequestBody)
    ], VatLookupRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", VatLookupSecurity)
    ], VatLookupRequest.prototype, "security", void 0);
    return VatLookupRequest;
}(SpeakeasyBase));
export { VatLookupRequest };
var VatLookupResponse = /** @class */ (function (_super) {
    __extends(VatLookupResponse, _super);
    function VatLookupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], VatLookupResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], VatLookupResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], VatLookupResponse.prototype, "vatLookup200ApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], VatLookupResponse.prototype, "vatLookupDefaultApplicationJsonAny", void 0);
    return VatLookupResponse;
}(SpeakeasyBase));
export { VatLookupResponse };
