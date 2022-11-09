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
var DescribeSavingsPlansOfferingsHeaders = /** @class */ (function (_super) {
    __extends(DescribeSavingsPlansOfferingsHeaders, _super);
    function DescribeSavingsPlansOfferingsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeSavingsPlansOfferingsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeSavingsPlansOfferingsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeSavingsPlansOfferingsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeSavingsPlansOfferingsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeSavingsPlansOfferingsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeSavingsPlansOfferingsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeSavingsPlansOfferingsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DescribeSavingsPlansOfferingsHeaders;
}(SpeakeasyBase));
export { DescribeSavingsPlansOfferingsHeaders };
export var DescribeSavingsPlansOfferingsRequestBodyProductTypeEnum;
(function (DescribeSavingsPlansOfferingsRequestBodyProductTypeEnum) {
    DescribeSavingsPlansOfferingsRequestBodyProductTypeEnum["Ec2"] = "EC2";
    DescribeSavingsPlansOfferingsRequestBodyProductTypeEnum["Fargate"] = "Fargate";
    DescribeSavingsPlansOfferingsRequestBodyProductTypeEnum["Lambda"] = "Lambda";
    DescribeSavingsPlansOfferingsRequestBodyProductTypeEnum["SageMaker"] = "SageMaker";
})(DescribeSavingsPlansOfferingsRequestBodyProductTypeEnum || (DescribeSavingsPlansOfferingsRequestBodyProductTypeEnum = {}));
var DescribeSavingsPlansOfferingsRequestBody = /** @class */ (function (_super) {
    __extends(DescribeSavingsPlansOfferingsRequestBody, _super);
    function DescribeSavingsPlansOfferingsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=currencies" }),
        __metadata("design:type", Array)
    ], DescribeSavingsPlansOfferingsRequestBody.prototype, "currencies", void 0);
    __decorate([
        Metadata({ data: "json, name=descriptions" }),
        __metadata("design:type", Array)
    ], DescribeSavingsPlansOfferingsRequestBody.prototype, "descriptions", void 0);
    __decorate([
        Metadata({ data: "json, name=durations" }),
        __metadata("design:type", Array)
    ], DescribeSavingsPlansOfferingsRequestBody.prototype, "durations", void 0);
    __decorate([
        Metadata({ data: "json, name=filters", elemType: shared.SavingsPlanOfferingFilterElement }),
        __metadata("design:type", Array)
    ], DescribeSavingsPlansOfferingsRequestBody.prototype, "filters", void 0);
    __decorate([
        Metadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], DescribeSavingsPlansOfferingsRequestBody.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], DescribeSavingsPlansOfferingsRequestBody.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "json, name=offeringIds" }),
        __metadata("design:type", Array)
    ], DescribeSavingsPlansOfferingsRequestBody.prototype, "offeringIds", void 0);
    __decorate([
        Metadata({ data: "json, name=operations" }),
        __metadata("design:type", Array)
    ], DescribeSavingsPlansOfferingsRequestBody.prototype, "operations", void 0);
    __decorate([
        Metadata({ data: "json, name=paymentOptions" }),
        __metadata("design:type", Array)
    ], DescribeSavingsPlansOfferingsRequestBody.prototype, "paymentOptions", void 0);
    __decorate([
        Metadata({ data: "json, name=planTypes" }),
        __metadata("design:type", Array)
    ], DescribeSavingsPlansOfferingsRequestBody.prototype, "planTypes", void 0);
    __decorate([
        Metadata({ data: "json, name=productType" }),
        __metadata("design:type", String)
    ], DescribeSavingsPlansOfferingsRequestBody.prototype, "productType", void 0);
    __decorate([
        Metadata({ data: "json, name=serviceCodes" }),
        __metadata("design:type", Array)
    ], DescribeSavingsPlansOfferingsRequestBody.prototype, "serviceCodes", void 0);
    __decorate([
        Metadata({ data: "json, name=usageTypes" }),
        __metadata("design:type", Array)
    ], DescribeSavingsPlansOfferingsRequestBody.prototype, "usageTypes", void 0);
    return DescribeSavingsPlansOfferingsRequestBody;
}(SpeakeasyBase));
export { DescribeSavingsPlansOfferingsRequestBody };
var DescribeSavingsPlansOfferingsRequest = /** @class */ (function (_super) {
    __extends(DescribeSavingsPlansOfferingsRequest, _super);
    function DescribeSavingsPlansOfferingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeSavingsPlansOfferingsHeaders)
    ], DescribeSavingsPlansOfferingsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DescribeSavingsPlansOfferingsRequestBody)
    ], DescribeSavingsPlansOfferingsRequest.prototype, "request", void 0);
    return DescribeSavingsPlansOfferingsRequest;
}(SpeakeasyBase));
export { DescribeSavingsPlansOfferingsRequest };
var DescribeSavingsPlansOfferingsResponse = /** @class */ (function (_super) {
    __extends(DescribeSavingsPlansOfferingsResponse, _super);
    function DescribeSavingsPlansOfferingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DescribeSavingsPlansOfferingsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DescribeSavingsPlansOfferingsResponse)
    ], DescribeSavingsPlansOfferingsResponse.prototype, "describeSavingsPlansOfferingsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeSavingsPlansOfferingsResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DescribeSavingsPlansOfferingsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeSavingsPlansOfferingsResponse.prototype, "validationException", void 0);
    return DescribeSavingsPlansOfferingsResponse;
}(SpeakeasyBase));
export { DescribeSavingsPlansOfferingsResponse };
