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
var SearchCommitteeDonationsQueryParams = /** @class */ (function (_super) {
    __extends(SearchCommitteeDonationsQueryParams, _super);
    function SearchCommitteeDonationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changedate.from" }),
        __metadata("design:type", Date)
    ], SearchCommitteeDonationsQueryParams.prototype, "changedateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changedate.to" }),
        __metadata("design:type", Date)
    ], SearchCommitteeDonationsQueryParams.prototype, "changedateTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdate.from" }),
        __metadata("design:type", Date)
    ], SearchCommitteeDonationsQueryParams.prototype, "createdateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdate.to" }),
        __metadata("design:type", Date)
    ], SearchCommitteeDonationsQueryParams.prototype, "createdateTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" }),
        __metadata("design:type", String)
    ], SearchCommitteeDonationsQueryParams.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filesuffix" }),
        __metadata("design:type", String)
    ], SearchCommitteeDonationsQueryParams.prototype, "filesuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Date)
    ], SearchCommitteeDonationsQueryParams.prototype, "fromdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" }),
        __metadata("design:type", String)
    ], SearchCommitteeDonationsQueryParams.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", Number)
    ], SearchCommitteeDonationsQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" }),
        __metadata("design:type", Number)
    ], SearchCommitteeDonationsQueryParams.prototype, "maxlatitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" }),
        __metadata("design:type", Number)
    ], SearchCommitteeDonationsQueryParams.prototype, "maxlongitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minlatitude" }),
        __metadata("design:type", Number)
    ], SearchCommitteeDonationsQueryParams.prototype, "minlatitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minlongitude" }),
        __metadata("design:type", Number)
    ], SearchCommitteeDonationsQueryParams.prototype, "minlongitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], SearchCommitteeDonationsQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_committee_donations.amount" }),
        __metadata("design:type", Number)
    ], SearchCommitteeDonationsQueryParams.prototype, "searchDbCommitteeDonationsAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_committee_donations.city" }),
        __metadata("design:type", String)
    ], SearchCommitteeDonationsQueryParams.prototype, "searchDbCommitteeDonationsCity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_committee_donations.committee" }),
        __metadata("design:type", String)
    ], SearchCommitteeDonationsQueryParams.prototype, "searchDbCommitteeDonationsCommittee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_committee_donations.date" }),
        __metadata("design:type", String)
    ], SearchCommitteeDonationsQueryParams.prototype, "searchDbCommitteeDonationsDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_committee_donations.employer" }),
        __metadata("design:type", String)
    ], SearchCommitteeDonationsQueryParams.prototype, "searchDbCommitteeDonationsEmployer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_committee_donations.location" }),
        __metadata("design:type", String)
    ], SearchCommitteeDonationsQueryParams.prototype, "searchDbCommitteeDonationsLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_committee_donations.occupation" }),
        __metadata("design:type", String)
    ], SearchCommitteeDonationsQueryParams.prototype, "searchDbCommitteeDonationsOccupation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_committee_donations.recipient" }),
        __metadata("design:type", String)
    ], SearchCommitteeDonationsQueryParams.prototype, "searchDbCommitteeDonationsRecipient", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_committee_donations.state" }),
        __metadata("design:type", String)
    ], SearchCommitteeDonationsQueryParams.prototype, "searchDbCommitteeDonationsState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_committee_donations.zip_code" }),
        __metadata("design:type", String)
    ], SearchCommitteeDonationsQueryParams.prototype, "searchDbCommitteeDonationsZipCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], SearchCommitteeDonationsQueryParams.prototype, "skip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], SearchCommitteeDonationsQueryParams.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Date)
    ], SearchCommitteeDonationsQueryParams.prototype, "todate", void 0);
    return SearchCommitteeDonationsQueryParams;
}(SpeakeasyBase));
export { SearchCommitteeDonationsQueryParams };
var SearchCommitteeDonationsRequest = /** @class */ (function (_super) {
    __extends(SearchCommitteeDonationsRequest, _super);
    function SearchCommitteeDonationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchCommitteeDonationsQueryParams)
    ], SearchCommitteeDonationsRequest.prototype, "queryParams", void 0);
    return SearchCommitteeDonationsRequest;
}(SpeakeasyBase));
export { SearchCommitteeDonationsRequest };
var SearchCommitteeDonationsResponse = /** @class */ (function (_super) {
    __extends(SearchCommitteeDonationsResponse, _super);
    function SearchCommitteeDonationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchCommitteeDonationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchCommitteeDonationsResponse.prototype, "statusCode", void 0);
    return SearchCommitteeDonationsResponse;
}(SpeakeasyBase));
export { SearchCommitteeDonationsResponse };
