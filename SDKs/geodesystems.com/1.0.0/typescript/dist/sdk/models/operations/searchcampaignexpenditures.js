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
var SearchCampaignExpendituresQueryParams = /** @class */ (function (_super) {
    __extends(SearchCampaignExpendituresQueryParams, _super);
    function SearchCampaignExpendituresQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changedate.from" }),
        __metadata("design:type", Date)
    ], SearchCampaignExpendituresQueryParams.prototype, "changedateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changedate.to" }),
        __metadata("design:type", Date)
    ], SearchCampaignExpendituresQueryParams.prototype, "changedateTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdate.from" }),
        __metadata("design:type", Date)
    ], SearchCampaignExpendituresQueryParams.prototype, "createdateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdate.to" }),
        __metadata("design:type", Date)
    ], SearchCampaignExpendituresQueryParams.prototype, "createdateTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" }),
        __metadata("design:type", String)
    ], SearchCampaignExpendituresQueryParams.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filesuffix" }),
        __metadata("design:type", String)
    ], SearchCampaignExpendituresQueryParams.prototype, "filesuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Date)
    ], SearchCampaignExpendituresQueryParams.prototype, "fromdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" }),
        __metadata("design:type", String)
    ], SearchCampaignExpendituresQueryParams.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", Number)
    ], SearchCampaignExpendituresQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" }),
        __metadata("design:type", Number)
    ], SearchCampaignExpendituresQueryParams.prototype, "maxlatitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" }),
        __metadata("design:type", Number)
    ], SearchCampaignExpendituresQueryParams.prototype, "maxlongitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minlatitude" }),
        __metadata("design:type", Number)
    ], SearchCampaignExpendituresQueryParams.prototype, "minlatitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minlongitude" }),
        __metadata("design:type", Number)
    ], SearchCampaignExpendituresQueryParams.prototype, "minlongitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], SearchCampaignExpendituresQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_expenditures.amount" }),
        __metadata("design:type", Number)
    ], SearchCampaignExpendituresQueryParams.prototype, "searchDbCampaignExpendituresAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_expenditures.city" }),
        __metadata("design:type", String)
    ], SearchCampaignExpendituresQueryParams.prototype, "searchDbCampaignExpendituresCity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_expenditures.committee" }),
        __metadata("design:type", String)
    ], SearchCampaignExpendituresQueryParams.prototype, "searchDbCampaignExpendituresCommittee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_expenditures.location" }),
        __metadata("design:type", String)
    ], SearchCampaignExpendituresQueryParams.prototype, "searchDbCampaignExpendituresLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_expenditures.memo_text" }),
        __metadata("design:type", String)
    ], SearchCampaignExpendituresQueryParams.prototype, "searchDbCampaignExpendituresMemoText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_expenditures.party" }),
        __metadata("design:type", String)
    ], SearchCampaignExpendituresQueryParams.prototype, "searchDbCampaignExpendituresParty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_expenditures.purpose" }),
        __metadata("design:type", String)
    ], SearchCampaignExpendituresQueryParams.prototype, "searchDbCampaignExpendituresPurpose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_expenditures.recipient" }),
        __metadata("design:type", String)
    ], SearchCampaignExpendituresQueryParams.prototype, "searchDbCampaignExpendituresRecipient", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_expenditures.state" }),
        __metadata("design:type", String)
    ], SearchCampaignExpendituresQueryParams.prototype, "searchDbCampaignExpendituresState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_expenditures.transaction_date" }),
        __metadata("design:type", String)
    ], SearchCampaignExpendituresQueryParams.prototype, "searchDbCampaignExpendituresTransactionDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_expenditures.zip_code" }),
        __metadata("design:type", String)
    ], SearchCampaignExpendituresQueryParams.prototype, "searchDbCampaignExpendituresZipCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], SearchCampaignExpendituresQueryParams.prototype, "skip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], SearchCampaignExpendituresQueryParams.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Date)
    ], SearchCampaignExpendituresQueryParams.prototype, "todate", void 0);
    return SearchCampaignExpendituresQueryParams;
}(SpeakeasyBase));
export { SearchCampaignExpendituresQueryParams };
var SearchCampaignExpendituresRequest = /** @class */ (function (_super) {
    __extends(SearchCampaignExpendituresRequest, _super);
    function SearchCampaignExpendituresRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchCampaignExpendituresQueryParams)
    ], SearchCampaignExpendituresRequest.prototype, "queryParams", void 0);
    return SearchCampaignExpendituresRequest;
}(SpeakeasyBase));
export { SearchCampaignExpendituresRequest };
var SearchCampaignExpendituresResponse = /** @class */ (function (_super) {
    __extends(SearchCampaignExpendituresResponse, _super);
    function SearchCampaignExpendituresResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchCampaignExpendituresResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchCampaignExpendituresResponse.prototype, "statusCode", void 0);
    return SearchCampaignExpendituresResponse;
}(SpeakeasyBase));
export { SearchCampaignExpendituresResponse };
