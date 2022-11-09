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
var ProductOrderConciergeRequestBody = /** @class */ (function (_super) {
    __extends(ProductOrderConciergeRequestBody, _super);
    function ProductOrderConciergeRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=companyName;" }),
        __metadata("design:type", String)
    ], ProductOrderConciergeRequestBody.prototype, "companyName", void 0);
    __decorate([
        Metadata({ data: "form, name=contactEmail;" }),
        __metadata("design:type", String)
    ], ProductOrderConciergeRequestBody.prototype, "contactEmail", void 0);
    __decorate([
        Metadata({ data: "form, name=contactPhone;" }),
        __metadata("design:type", String)
    ], ProductOrderConciergeRequestBody.prototype, "contactPhone", void 0);
    __decorate([
        Metadata({ data: "form, name=costConfirmation;" }),
        __metadata("design:type", Boolean)
    ], ProductOrderConciergeRequestBody.prototype, "costConfirmation", void 0);
    __decorate([
        Metadata({ data: "form, name=country;" }),
        __metadata("design:type", String)
    ], ProductOrderConciergeRequestBody.prototype, "country", void 0);
    __decorate([
        Metadata({ data: "form, name=financialData;" }),
        __metadata("design:type", Boolean)
    ], ProductOrderConciergeRequestBody.prototype, "financialData", void 0);
    __decorate([
        Metadata({ data: "form, name=historicInformation;" }),
        __metadata("design:type", Boolean)
    ], ProductOrderConciergeRequestBody.prototype, "historicInformation", void 0);
    __decorate([
        Metadata({ data: "form, name=informationRequirements;" }),
        __metadata("design:type", String)
    ], ProductOrderConciergeRequestBody.prototype, "informationRequirements", void 0);
    __decorate([
        Metadata({ data: "form, name=locationInvestigation;" }),
        __metadata("design:type", Boolean)
    ], ProductOrderConciergeRequestBody.prototype, "locationInvestigation", void 0);
    __decorate([
        Metadata({ data: "form, name=priority;" }),
        __metadata("design:type", String)
    ], ProductOrderConciergeRequestBody.prototype, "priority", void 0);
    __decorate([
        Metadata({ data: "form, name=registerData;" }),
        __metadata("design:type", Boolean)
    ], ProductOrderConciergeRequestBody.prototype, "registerData", void 0);
    __decorate([
        Metadata({ data: "form, name=registerNumber;" }),
        __metadata("design:type", String)
    ], ProductOrderConciergeRequestBody.prototype, "registerNumber", void 0);
    __decorate([
        Metadata({ data: "form, name=subjectId;" }),
        __metadata("design:type", String)
    ], ProductOrderConciergeRequestBody.prototype, "subjectId", void 0);
    return ProductOrderConciergeRequestBody;
}(SpeakeasyBase));
export { ProductOrderConciergeRequestBody };
var ProductOrderConciergeSecurity = /** @class */ (function (_super) {
    __extends(ProductOrderConciergeSecurity, _super);
    function ProductOrderConciergeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeUserKey)
    ], ProductOrderConciergeSecurity.prototype, "userKey", void 0);
    return ProductOrderConciergeSecurity;
}(SpeakeasyBase));
export { ProductOrderConciergeSecurity };
var ProductOrderConciergeRequest = /** @class */ (function (_super) {
    __extends(ProductOrderConciergeRequest, _super);
    function ProductOrderConciergeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", ProductOrderConciergeRequestBody)
    ], ProductOrderConciergeRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ProductOrderConciergeSecurity)
    ], ProductOrderConciergeRequest.prototype, "security", void 0);
    return ProductOrderConciergeRequest;
}(SpeakeasyBase));
export { ProductOrderConciergeRequest };
var ProductOrderConciergeResponse = /** @class */ (function (_super) {
    __extends(ProductOrderConciergeResponse, _super);
    function ProductOrderConciergeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ProductOrderConciergeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ProductOrderConciergeResponse.prototype, "productOrderConcierge200ApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ProductOrderConciergeResponse.prototype, "productOrderConciergeDefaultApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ProductOrderConciergeResponse.prototype, "statusCode", void 0);
    return ProductOrderConciergeResponse;
}(SpeakeasyBase));
export { ProductOrderConciergeResponse };
