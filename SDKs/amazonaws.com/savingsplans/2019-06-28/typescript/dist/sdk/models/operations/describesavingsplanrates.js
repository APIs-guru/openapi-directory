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
var DescribeSavingsPlanRatesHeaders = /** @class */ (function (_super) {
    __extends(DescribeSavingsPlanRatesHeaders, _super);
    function DescribeSavingsPlanRatesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeSavingsPlanRatesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeSavingsPlanRatesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeSavingsPlanRatesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeSavingsPlanRatesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeSavingsPlanRatesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeSavingsPlanRatesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeSavingsPlanRatesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DescribeSavingsPlanRatesHeaders;
}(SpeakeasyBase));
export { DescribeSavingsPlanRatesHeaders };
var DescribeSavingsPlanRatesRequestBody = /** @class */ (function (_super) {
    __extends(DescribeSavingsPlanRatesRequestBody, _super);
    function DescribeSavingsPlanRatesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=filters", elemType: shared.SavingsPlanRateFilter }),
        __metadata("design:type", Array)
    ], DescribeSavingsPlanRatesRequestBody.prototype, "filters", void 0);
    __decorate([
        Metadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], DescribeSavingsPlanRatesRequestBody.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], DescribeSavingsPlanRatesRequestBody.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "json, name=savingsPlanId" }),
        __metadata("design:type", String)
    ], DescribeSavingsPlanRatesRequestBody.prototype, "savingsPlanId", void 0);
    return DescribeSavingsPlanRatesRequestBody;
}(SpeakeasyBase));
export { DescribeSavingsPlanRatesRequestBody };
var DescribeSavingsPlanRatesRequest = /** @class */ (function (_super) {
    __extends(DescribeSavingsPlanRatesRequest, _super);
    function DescribeSavingsPlanRatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeSavingsPlanRatesHeaders)
    ], DescribeSavingsPlanRatesRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DescribeSavingsPlanRatesRequestBody)
    ], DescribeSavingsPlanRatesRequest.prototype, "request", void 0);
    return DescribeSavingsPlanRatesRequest;
}(SpeakeasyBase));
export { DescribeSavingsPlanRatesRequest };
var DescribeSavingsPlanRatesResponse = /** @class */ (function (_super) {
    __extends(DescribeSavingsPlanRatesResponse, _super);
    function DescribeSavingsPlanRatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DescribeSavingsPlanRatesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DescribeSavingsPlanRatesResponse)
    ], DescribeSavingsPlanRatesResponse.prototype, "describeSavingsPlanRatesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeSavingsPlanRatesResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DescribeSavingsPlanRatesResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeSavingsPlanRatesResponse.prototype, "validationException", void 0);
    return DescribeSavingsPlanRatesResponse;
}(SpeakeasyBase));
export { DescribeSavingsPlanRatesResponse };
