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
var FindCampaignByAdReferenceQueryParams = /** @class */ (function (_super) {
    __extends(FindCampaignByAdReferenceQueryParams, _super);
    function FindCampaignByAdReferenceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inventory_reference_id" }),
        __metadata("design:type", String)
    ], FindCampaignByAdReferenceQueryParams.prototype, "inventoryReferenceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inventory_reference_type" }),
        __metadata("design:type", String)
    ], FindCampaignByAdReferenceQueryParams.prototype, "inventoryReferenceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=listing_id" }),
        __metadata("design:type", String)
    ], FindCampaignByAdReferenceQueryParams.prototype, "listingId", void 0);
    return FindCampaignByAdReferenceQueryParams;
}(SpeakeasyBase));
export { FindCampaignByAdReferenceQueryParams };
var FindCampaignByAdReferenceSecurity = /** @class */ (function (_super) {
    __extends(FindCampaignByAdReferenceSecurity, _super);
    function FindCampaignByAdReferenceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], FindCampaignByAdReferenceSecurity.prototype, "apiAuth", void 0);
    return FindCampaignByAdReferenceSecurity;
}(SpeakeasyBase));
export { FindCampaignByAdReferenceSecurity };
var FindCampaignByAdReferenceRequest = /** @class */ (function (_super) {
    __extends(FindCampaignByAdReferenceRequest, _super);
    function FindCampaignByAdReferenceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FindCampaignByAdReferenceQueryParams)
    ], FindCampaignByAdReferenceRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FindCampaignByAdReferenceSecurity)
    ], FindCampaignByAdReferenceRequest.prototype, "security", void 0);
    return FindCampaignByAdReferenceRequest;
}(SpeakeasyBase));
export { FindCampaignByAdReferenceRequest };
var FindCampaignByAdReferenceResponse = /** @class */ (function (_super) {
    __extends(FindCampaignByAdReferenceResponse, _super);
    function FindCampaignByAdReferenceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Campaigns)
    ], FindCampaignByAdReferenceResponse.prototype, "campaigns", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FindCampaignByAdReferenceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FindCampaignByAdReferenceResponse.prototype, "statusCode", void 0);
    return FindCampaignByAdReferenceResponse;
}(SpeakeasyBase));
export { FindCampaignByAdReferenceResponse };
