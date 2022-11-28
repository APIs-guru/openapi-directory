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
var CompanyAlternativeSearchPathParams = /** @class */ (function (_super) {
    __extends(CompanyAlternativeSearchPathParams, _super);
    function CompanyAlternativeSearchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=country" }),
        __metadata("design:type", String)
    ], CompanyAlternativeSearchPathParams.prototype, "country", void 0);
    return CompanyAlternativeSearchPathParams;
}(SpeakeasyBase));
export { CompanyAlternativeSearchPathParams };
var CompanyAlternativeSearchRequestBody = /** @class */ (function (_super) {
    __extends(CompanyAlternativeSearchRequestBody, _super);
    function CompanyAlternativeSearchRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=address;" }),
        __metadata("design:type", String)
    ], CompanyAlternativeSearchRequestBody.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=name;" }),
        __metadata("design:type", String)
    ], CompanyAlternativeSearchRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=number;" }),
        __metadata("design:type", String)
    ], CompanyAlternativeSearchRequestBody.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=phone;" }),
        __metadata("design:type", String)
    ], CompanyAlternativeSearchRequestBody.prototype, "phone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=url;" }),
        __metadata("design:type", String)
    ], CompanyAlternativeSearchRequestBody.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=vat;" }),
        __metadata("design:type", String)
    ], CompanyAlternativeSearchRequestBody.prototype, "vat", void 0);
    return CompanyAlternativeSearchRequestBody;
}(SpeakeasyBase));
export { CompanyAlternativeSearchRequestBody };
var CompanyAlternativeSearchSecurity = /** @class */ (function (_super) {
    __extends(CompanyAlternativeSearchSecurity, _super);
    function CompanyAlternativeSearchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeUserKey)
    ], CompanyAlternativeSearchSecurity.prototype, "userKey", void 0);
    return CompanyAlternativeSearchSecurity;
}(SpeakeasyBase));
export { CompanyAlternativeSearchSecurity };
var CompanyAlternativeSearchRequest = /** @class */ (function (_super) {
    __extends(CompanyAlternativeSearchRequest, _super);
    function CompanyAlternativeSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CompanyAlternativeSearchPathParams)
    ], CompanyAlternativeSearchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CompanyAlternativeSearchRequestBody)
    ], CompanyAlternativeSearchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CompanyAlternativeSearchSecurity)
    ], CompanyAlternativeSearchRequest.prototype, "security", void 0);
    return CompanyAlternativeSearchRequest;
}(SpeakeasyBase));
export { CompanyAlternativeSearchRequest };
var CompanyAlternativeSearchResponse = /** @class */ (function (_super) {
    __extends(CompanyAlternativeSearchResponse, _super);
    function CompanyAlternativeSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], CompanyAlternativeSearchResponse.prototype, "companyAlternativeSearch200ApplicationJsonAnies", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CompanyAlternativeSearchResponse.prototype, "companyAlternativeSearchDefaultApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CompanyAlternativeSearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CompanyAlternativeSearchResponse.prototype, "statusCode", void 0);
    return CompanyAlternativeSearchResponse;
}(SpeakeasyBase));
export { CompanyAlternativeSearchResponse };
