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
var VatBasicPathParams = /** @class */ (function (_super) {
    __extends(VatBasicPathParams, _super);
    function VatBasicPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=country" }),
        __metadata("design:type", String)
    ], VatBasicPathParams.prototype, "country", void 0);
    return VatBasicPathParams;
}(SpeakeasyBase));
export { VatBasicPathParams };
var VatBasicRequestBody = /** @class */ (function (_super) {
    __extends(VatBasicRequestBody, _super);
    function VatBasicRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=companyAddress;" }),
        __metadata("design:type", String)
    ], VatBasicRequestBody.prototype, "companyAddress", void 0);
    __decorate([
        Metadata({ data: "form, name=companyName;" }),
        __metadata("design:type", String)
    ], VatBasicRequestBody.prototype, "companyName", void 0);
    __decorate([
        Metadata({ data: "form, name=companyNumber;" }),
        __metadata("design:type", String)
    ], VatBasicRequestBody.prototype, "companyNumber", void 0);
    __decorate([
        Metadata({ data: "form, name=vatNumber;" }),
        __metadata("design:type", String)
    ], VatBasicRequestBody.prototype, "vatNumber", void 0);
    return VatBasicRequestBody;
}(SpeakeasyBase));
export { VatBasicRequestBody };
var VatBasicSecurity = /** @class */ (function (_super) {
    __extends(VatBasicSecurity, _super);
    function VatBasicSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeUserKey)
    ], VatBasicSecurity.prototype, "userKey", void 0);
    return VatBasicSecurity;
}(SpeakeasyBase));
export { VatBasicSecurity };
var VatBasicRequest = /** @class */ (function (_super) {
    __extends(VatBasicRequest, _super);
    function VatBasicRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", VatBasicPathParams)
    ], VatBasicRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", VatBasicRequestBody)
    ], VatBasicRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", VatBasicSecurity)
    ], VatBasicRequest.prototype, "security", void 0);
    return VatBasicRequest;
}(SpeakeasyBase));
export { VatBasicRequest };
var VatBasicResponse = /** @class */ (function (_super) {
    __extends(VatBasicResponse, _super);
    function VatBasicResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], VatBasicResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], VatBasicResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], VatBasicResponse.prototype, "vatBasic200ApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], VatBasicResponse.prototype, "vatBasicDefaultApplicationJsonAny", void 0);
    return VatBasicResponse;
}(SpeakeasyBase));
export { VatBasicResponse };
