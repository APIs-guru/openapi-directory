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
var GetDomainDeliverabilityCampaignPathParams = /** @class */ (function (_super) {
    __extends(GetDomainDeliverabilityCampaignPathParams, _super);
    function GetDomainDeliverabilityCampaignPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CampaignId" }),
        __metadata("design:type", String)
    ], GetDomainDeliverabilityCampaignPathParams.prototype, "campaignId", void 0);
    return GetDomainDeliverabilityCampaignPathParams;
}(SpeakeasyBase));
export { GetDomainDeliverabilityCampaignPathParams };
var GetDomainDeliverabilityCampaignHeaders = /** @class */ (function (_super) {
    __extends(GetDomainDeliverabilityCampaignHeaders, _super);
    function GetDomainDeliverabilityCampaignHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDomainDeliverabilityCampaignHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDomainDeliverabilityCampaignHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDomainDeliverabilityCampaignHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDomainDeliverabilityCampaignHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDomainDeliverabilityCampaignHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDomainDeliverabilityCampaignHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDomainDeliverabilityCampaignHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDomainDeliverabilityCampaignHeaders;
}(SpeakeasyBase));
export { GetDomainDeliverabilityCampaignHeaders };
var GetDomainDeliverabilityCampaignRequest = /** @class */ (function (_super) {
    __extends(GetDomainDeliverabilityCampaignRequest, _super);
    function GetDomainDeliverabilityCampaignRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomainDeliverabilityCampaignPathParams)
    ], GetDomainDeliverabilityCampaignRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomainDeliverabilityCampaignHeaders)
    ], GetDomainDeliverabilityCampaignRequest.prototype, "headers", void 0);
    return GetDomainDeliverabilityCampaignRequest;
}(SpeakeasyBase));
export { GetDomainDeliverabilityCampaignRequest };
var GetDomainDeliverabilityCampaignResponse = /** @class */ (function (_super) {
    __extends(GetDomainDeliverabilityCampaignResponse, _super);
    function GetDomainDeliverabilityCampaignResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetDomainDeliverabilityCampaignResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDomainDeliverabilityCampaignResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetDomainDeliverabilityCampaignResponse)
    ], GetDomainDeliverabilityCampaignResponse.prototype, "getDomainDeliverabilityCampaignResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetDomainDeliverabilityCampaignResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDomainDeliverabilityCampaignResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetDomainDeliverabilityCampaignResponse.prototype, "tooManyRequestsException", void 0);
    return GetDomainDeliverabilityCampaignResponse;
}(SpeakeasyBase));
export { GetDomainDeliverabilityCampaignResponse };
