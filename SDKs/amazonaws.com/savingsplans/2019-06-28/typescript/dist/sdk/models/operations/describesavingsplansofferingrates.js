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
var DescribeSavingsPlansOfferingRatesHeaders = /** @class */ (function (_super) {
    __extends(DescribeSavingsPlansOfferingRatesHeaders, _super);
    function DescribeSavingsPlansOfferingRatesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeSavingsPlansOfferingRatesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeSavingsPlansOfferingRatesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeSavingsPlansOfferingRatesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeSavingsPlansOfferingRatesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeSavingsPlansOfferingRatesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeSavingsPlansOfferingRatesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeSavingsPlansOfferingRatesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DescribeSavingsPlansOfferingRatesHeaders;
}(SpeakeasyBase));
export { DescribeSavingsPlansOfferingRatesHeaders };
var DescribeSavingsPlansOfferingRatesRequestBody = /** @class */ (function (_super) {
    __extends(DescribeSavingsPlansOfferingRatesRequestBody, _super);
    function DescribeSavingsPlansOfferingRatesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=filters", elemType: shared.SavingsPlanOfferingRateFilterElement }),
        __metadata("design:type", Array)
    ], DescribeSavingsPlansOfferingRatesRequestBody.prototype, "filters", void 0);
    __decorate([
        Metadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], DescribeSavingsPlansOfferingRatesRequestBody.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], DescribeSavingsPlansOfferingRatesRequestBody.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "json, name=operations" }),
        __metadata("design:type", Array)
    ], DescribeSavingsPlansOfferingRatesRequestBody.prototype, "operations", void 0);
    __decorate([
        Metadata({ data: "json, name=products" }),
        __metadata("design:type", Array)
    ], DescribeSavingsPlansOfferingRatesRequestBody.prototype, "products", void 0);
    __decorate([
        Metadata({ data: "json, name=savingsPlanOfferingIds" }),
        __metadata("design:type", Array)
    ], DescribeSavingsPlansOfferingRatesRequestBody.prototype, "savingsPlanOfferingIds", void 0);
    __decorate([
        Metadata({ data: "json, name=savingsPlanPaymentOptions" }),
        __metadata("design:type", Array)
    ], DescribeSavingsPlansOfferingRatesRequestBody.prototype, "savingsPlanPaymentOptions", void 0);
    __decorate([
        Metadata({ data: "json, name=savingsPlanTypes" }),
        __metadata("design:type", Array)
    ], DescribeSavingsPlansOfferingRatesRequestBody.prototype, "savingsPlanTypes", void 0);
    __decorate([
        Metadata({ data: "json, name=serviceCodes" }),
        __metadata("design:type", Array)
    ], DescribeSavingsPlansOfferingRatesRequestBody.prototype, "serviceCodes", void 0);
    __decorate([
        Metadata({ data: "json, name=usageTypes" }),
        __metadata("design:type", Array)
    ], DescribeSavingsPlansOfferingRatesRequestBody.prototype, "usageTypes", void 0);
    return DescribeSavingsPlansOfferingRatesRequestBody;
}(SpeakeasyBase));
export { DescribeSavingsPlansOfferingRatesRequestBody };
var DescribeSavingsPlansOfferingRatesRequest = /** @class */ (function (_super) {
    __extends(DescribeSavingsPlansOfferingRatesRequest, _super);
    function DescribeSavingsPlansOfferingRatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeSavingsPlansOfferingRatesHeaders)
    ], DescribeSavingsPlansOfferingRatesRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DescribeSavingsPlansOfferingRatesRequestBody)
    ], DescribeSavingsPlansOfferingRatesRequest.prototype, "request", void 0);
    return DescribeSavingsPlansOfferingRatesRequest;
}(SpeakeasyBase));
export { DescribeSavingsPlansOfferingRatesRequest };
var DescribeSavingsPlansOfferingRatesResponse = /** @class */ (function (_super) {
    __extends(DescribeSavingsPlansOfferingRatesResponse, _super);
    function DescribeSavingsPlansOfferingRatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DescribeSavingsPlansOfferingRatesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DescribeSavingsPlansOfferingRatesResponse)
    ], DescribeSavingsPlansOfferingRatesResponse.prototype, "describeSavingsPlansOfferingRatesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeSavingsPlansOfferingRatesResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DescribeSavingsPlansOfferingRatesResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeSavingsPlansOfferingRatesResponse.prototype, "validationException", void 0);
    return DescribeSavingsPlansOfferingRatesResponse;
}(SpeakeasyBase));
export { DescribeSavingsPlansOfferingRatesResponse };
