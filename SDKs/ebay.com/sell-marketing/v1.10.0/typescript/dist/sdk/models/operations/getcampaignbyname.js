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
var GetCampaignByNameQueryParams = /** @class */ (function (_super) {
    __extends(GetCampaignByNameQueryParams, _super);
    function GetCampaignByNameQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=campaign_name" }),
        __metadata("design:type", String)
    ], GetCampaignByNameQueryParams.prototype, "campaignName", void 0);
    return GetCampaignByNameQueryParams;
}(SpeakeasyBase));
export { GetCampaignByNameQueryParams };
var GetCampaignByNameSecurity = /** @class */ (function (_super) {
    __extends(GetCampaignByNameSecurity, _super);
    function GetCampaignByNameSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], GetCampaignByNameSecurity.prototype, "apiAuth", void 0);
    return GetCampaignByNameSecurity;
}(SpeakeasyBase));
export { GetCampaignByNameSecurity };
var GetCampaignByNameRequest = /** @class */ (function (_super) {
    __extends(GetCampaignByNameRequest, _super);
    function GetCampaignByNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCampaignByNameQueryParams)
    ], GetCampaignByNameRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCampaignByNameSecurity)
    ], GetCampaignByNameRequest.prototype, "security", void 0);
    return GetCampaignByNameRequest;
}(SpeakeasyBase));
export { GetCampaignByNameRequest };
var GetCampaignByNameResponse = /** @class */ (function (_super) {
    __extends(GetCampaignByNameResponse, _super);
    function GetCampaignByNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Campaign)
    ], GetCampaignByNameResponse.prototype, "campaign", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCampaignByNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCampaignByNameResponse.prototype, "statusCode", void 0);
    return GetCampaignByNameResponse;
}(SpeakeasyBase));
export { GetCampaignByNameResponse };
