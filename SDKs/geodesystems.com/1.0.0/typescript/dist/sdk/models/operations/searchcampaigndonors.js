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
var SearchCampaignDonorsQueryParams = /** @class */ (function (_super) {
    __extends(SearchCampaignDonorsQueryParams, _super);
    function SearchCampaignDonorsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changedate.from" }),
        __metadata("design:type", Date)
    ], SearchCampaignDonorsQueryParams.prototype, "changedateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changedate.to" }),
        __metadata("design:type", Date)
    ], SearchCampaignDonorsQueryParams.prototype, "changedateTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdate.from" }),
        __metadata("design:type", Date)
    ], SearchCampaignDonorsQueryParams.prototype, "createdateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdate.to" }),
        __metadata("design:type", Date)
    ], SearchCampaignDonorsQueryParams.prototype, "createdateTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" }),
        __metadata("design:type", String)
    ], SearchCampaignDonorsQueryParams.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filesuffix" }),
        __metadata("design:type", String)
    ], SearchCampaignDonorsQueryParams.prototype, "filesuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Date)
    ], SearchCampaignDonorsQueryParams.prototype, "fromdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" }),
        __metadata("design:type", String)
    ], SearchCampaignDonorsQueryParams.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", Number)
    ], SearchCampaignDonorsQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" }),
        __metadata("design:type", Number)
    ], SearchCampaignDonorsQueryParams.prototype, "maxlatitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" }),
        __metadata("design:type", Number)
    ], SearchCampaignDonorsQueryParams.prototype, "maxlongitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minlatitude" }),
        __metadata("design:type", Number)
    ], SearchCampaignDonorsQueryParams.prototype, "minlatitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minlongitude" }),
        __metadata("design:type", Number)
    ], SearchCampaignDonorsQueryParams.prototype, "minlongitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], SearchCampaignDonorsQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_donors.amount" }),
        __metadata("design:type", Number)
    ], SearchCampaignDonorsQueryParams.prototype, "searchDbCampaignDonorsAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_donors.city" }),
        __metadata("design:type", String)
    ], SearchCampaignDonorsQueryParams.prototype, "searchDbCampaignDonorsCity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_donors.committee" }),
        __metadata("design:type", String)
    ], SearchCampaignDonorsQueryParams.prototype, "searchDbCampaignDonorsCommittee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_donors.date" }),
        __metadata("design:type", String)
    ], SearchCampaignDonorsQueryParams.prototype, "searchDbCampaignDonorsDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_donors.donor" }),
        __metadata("design:type", String)
    ], SearchCampaignDonorsQueryParams.prototype, "searchDbCampaignDonorsDonor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_donors.employer" }),
        __metadata("design:type", String)
    ], SearchCampaignDonorsQueryParams.prototype, "searchDbCampaignDonorsEmployer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_donors.gender" }),
        __metadata("design:type", String)
    ], SearchCampaignDonorsQueryParams.prototype, "searchDbCampaignDonorsGender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_donors.location" }),
        __metadata("design:type", String)
    ], SearchCampaignDonorsQueryParams.prototype, "searchDbCampaignDonorsLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_donors.occupation" }),
        __metadata("design:type", String)
    ], SearchCampaignDonorsQueryParams.prototype, "searchDbCampaignDonorsOccupation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_donors.party" }),
        __metadata("design:type", String)
    ], SearchCampaignDonorsQueryParams.prototype, "searchDbCampaignDonorsParty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_donors.state" }),
        __metadata("design:type", String)
    ], SearchCampaignDonorsQueryParams.prototype, "searchDbCampaignDonorsState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_donors.zip_code" }),
        __metadata("design:type", String)
    ], SearchCampaignDonorsQueryParams.prototype, "searchDbCampaignDonorsZipCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], SearchCampaignDonorsQueryParams.prototype, "skip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], SearchCampaignDonorsQueryParams.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Date)
    ], SearchCampaignDonorsQueryParams.prototype, "todate", void 0);
    return SearchCampaignDonorsQueryParams;
}(SpeakeasyBase));
export { SearchCampaignDonorsQueryParams };
var SearchCampaignDonorsRequest = /** @class */ (function (_super) {
    __extends(SearchCampaignDonorsRequest, _super);
    function SearchCampaignDonorsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchCampaignDonorsQueryParams)
    ], SearchCampaignDonorsRequest.prototype, "queryParams", void 0);
    return SearchCampaignDonorsRequest;
}(SpeakeasyBase));
export { SearchCampaignDonorsRequest };
var SearchCampaignDonorsResponse = /** @class */ (function (_super) {
    __extends(SearchCampaignDonorsResponse, _super);
    function SearchCampaignDonorsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchCampaignDonorsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchCampaignDonorsResponse.prototype, "statusCode", void 0);
    return SearchCampaignDonorsResponse;
}(SpeakeasyBase));
export { SearchCampaignDonorsResponse };
