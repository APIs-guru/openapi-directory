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
var GetCampaignsQueryParams = /** @class */ (function (_super) {
    __extends(GetCampaignsQueryParams, _super);
    function GetCampaignsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=campaign_name" }),
        __metadata("design:type", String)
    ], GetCampaignsQueryParams.prototype, "campaignName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=campaign_status" }),
        __metadata("design:type", String)
    ], GetCampaignsQueryParams.prototype, "campaignStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date_range" }),
        __metadata("design:type", String)
    ], GetCampaignsQueryParams.prototype, "endDateRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", String)
    ], GetCampaignsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetCampaignsQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date_range" }),
        __metadata("design:type", String)
    ], GetCampaignsQueryParams.prototype, "startDateRange", void 0);
    return GetCampaignsQueryParams;
}(SpeakeasyBase));
export { GetCampaignsQueryParams };
var GetCampaignsSecurity = /** @class */ (function (_super) {
    __extends(GetCampaignsSecurity, _super);
    function GetCampaignsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], GetCampaignsSecurity.prototype, "apiAuth", void 0);
    return GetCampaignsSecurity;
}(SpeakeasyBase));
export { GetCampaignsSecurity };
var GetCampaignsRequest = /** @class */ (function (_super) {
    __extends(GetCampaignsRequest, _super);
    function GetCampaignsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCampaignsQueryParams)
    ], GetCampaignsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCampaignsSecurity)
    ], GetCampaignsRequest.prototype, "security", void 0);
    return GetCampaignsRequest;
}(SpeakeasyBase));
export { GetCampaignsRequest };
var GetCampaignsResponse = /** @class */ (function (_super) {
    __extends(GetCampaignsResponse, _super);
    function GetCampaignsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CampaignPagedCollection)
    ], GetCampaignsResponse.prototype, "campaignPagedCollection", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCampaignsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCampaignsResponse.prototype, "statusCode", void 0);
    return GetCampaignsResponse;
}(SpeakeasyBase));
export { GetCampaignsResponse };
