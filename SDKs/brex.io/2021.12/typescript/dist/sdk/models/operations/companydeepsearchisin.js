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
var CompanyDeepsearchIsinRequestBody = /** @class */ (function (_super) {
    __extends(CompanyDeepsearchIsinRequestBody, _super);
    function CompanyDeepsearchIsinRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=isin;" }),
        __metadata("design:type", String)
    ], CompanyDeepsearchIsinRequestBody.prototype, "isin", void 0);
    return CompanyDeepsearchIsinRequestBody;
}(SpeakeasyBase));
export { CompanyDeepsearchIsinRequestBody };
var CompanyDeepsearchIsinSecurity = /** @class */ (function (_super) {
    __extends(CompanyDeepsearchIsinSecurity, _super);
    function CompanyDeepsearchIsinSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeUserKey)
    ], CompanyDeepsearchIsinSecurity.prototype, "userKey", void 0);
    return CompanyDeepsearchIsinSecurity;
}(SpeakeasyBase));
export { CompanyDeepsearchIsinSecurity };
var CompanyDeepsearchIsinRequest = /** @class */ (function (_super) {
    __extends(CompanyDeepsearchIsinRequest, _super);
    function CompanyDeepsearchIsinRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CompanyDeepsearchIsinRequestBody)
    ], CompanyDeepsearchIsinRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CompanyDeepsearchIsinSecurity)
    ], CompanyDeepsearchIsinRequest.prototype, "security", void 0);
    return CompanyDeepsearchIsinRequest;
}(SpeakeasyBase));
export { CompanyDeepsearchIsinRequest };
var CompanyDeepsearchIsinResponse = /** @class */ (function (_super) {
    __extends(CompanyDeepsearchIsinResponse, _super);
    function CompanyDeepsearchIsinResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], CompanyDeepsearchIsinResponse.prototype, "companyDeepsearchIsin200ApplicationJsonAnies", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CompanyDeepsearchIsinResponse.prototype, "companyDeepsearchIsinDefaultApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CompanyDeepsearchIsinResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CompanyDeepsearchIsinResponse.prototype, "statusCode", void 0);
    return CompanyDeepsearchIsinResponse;
}(SpeakeasyBase));
export { CompanyDeepsearchIsinResponse };
