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
var Search2017BoulderElectionExpendituresQueryParams = /** @class */ (function (_super) {
    __extends(Search2017BoulderElectionExpendituresQueryParams, _super);
    function Search2017BoulderElectionExpendituresQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=changedate.from" }),
        __metadata("design:type", Date)
    ], Search2017BoulderElectionExpendituresQueryParams.prototype, "changedateFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=changedate.to" }),
        __metadata("design:type", Date)
    ], Search2017BoulderElectionExpendituresQueryParams.prototype, "changedateTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=createdate.from" }),
        __metadata("design:type", Date)
    ], Search2017BoulderElectionExpendituresQueryParams.prototype, "createdateFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=createdate.to" }),
        __metadata("design:type", Date)
    ], Search2017BoulderElectionExpendituresQueryParams.prototype, "createdateTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=description" }),
        __metadata("design:type", String)
    ], Search2017BoulderElectionExpendituresQueryParams.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filesuffix" }),
        __metadata("design:type", String)
    ], Search2017BoulderElectionExpendituresQueryParams.prototype, "filesuffix", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Date)
    ], Search2017BoulderElectionExpendituresQueryParams.prototype, "fromdate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=group" }),
        __metadata("design:type", String)
    ], Search2017BoulderElectionExpendituresQueryParams.prototype, "group", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", Number)
    ], Search2017BoulderElectionExpendituresQueryParams.prototype, "max", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" }),
        __metadata("design:type", Number)
    ], Search2017BoulderElectionExpendituresQueryParams.prototype, "maxlatitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" }),
        __metadata("design:type", Number)
    ], Search2017BoulderElectionExpendituresQueryParams.prototype, "maxlongitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=minlatitude" }),
        __metadata("design:type", Number)
    ], Search2017BoulderElectionExpendituresQueryParams.prototype, "minlatitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=minlongitude" }),
        __metadata("design:type", Number)
    ], Search2017BoulderElectionExpendituresQueryParams.prototype, "minlongitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], Search2017BoulderElectionExpendituresQueryParams.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_2017_boulder_election_expenditures.city" }),
        __metadata("design:type", String)
    ], Search2017BoulderElectionExpendituresQueryParams.prototype, "searchDb2017BoulderElectionExpendituresCity", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_2017_boulder_election_expenditures.committee" }),
        __metadata("design:type", String)
    ], Search2017BoulderElectionExpendituresQueryParams.prototype, "searchDb2017BoulderElectionExpendituresCommittee", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_2017_boulder_election_expenditures.expenditure" }),
        __metadata("design:type", Number)
    ], Search2017BoulderElectionExpendituresQueryParams.prototype, "searchDb2017BoulderElectionExpendituresExpenditure", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_2017_boulder_election_expenditures.name" }),
        __metadata("design:type", String)
    ], Search2017BoulderElectionExpendituresQueryParams.prototype, "searchDb2017BoulderElectionExpendituresName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_2017_boulder_election_expenditures.purpose" }),
        __metadata("design:type", String)
    ], Search2017BoulderElectionExpendituresQueryParams.prototype, "searchDb2017BoulderElectionExpendituresPurpose", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_2017_boulder_election_expenditures.state" }),
        __metadata("design:type", String)
    ], Search2017BoulderElectionExpendituresQueryParams.prototype, "searchDb2017BoulderElectionExpendituresState", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_2017_boulder_election_expenditures.street" }),
        __metadata("design:type", String)
    ], Search2017BoulderElectionExpendituresQueryParams.prototype, "searchDb2017BoulderElectionExpendituresStreet", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_2017_boulder_election_expenditures.transaction_date" }),
        __metadata("design:type", String)
    ], Search2017BoulderElectionExpendituresQueryParams.prototype, "searchDb2017BoulderElectionExpendituresTransactionDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_2017_boulder_election_expenditures.zip" }),
        __metadata("design:type", String)
    ], Search2017BoulderElectionExpendituresQueryParams.prototype, "searchDb2017BoulderElectionExpendituresZip", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], Search2017BoulderElectionExpendituresQueryParams.prototype, "skip", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], Search2017BoulderElectionExpendituresQueryParams.prototype, "text", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Date)
    ], Search2017BoulderElectionExpendituresQueryParams.prototype, "todate", void 0);
    return Search2017BoulderElectionExpendituresQueryParams;
}(SpeakeasyBase));
export { Search2017BoulderElectionExpendituresQueryParams };
var Search2017BoulderElectionExpendituresRequest = /** @class */ (function (_super) {
    __extends(Search2017BoulderElectionExpendituresRequest, _super);
    function Search2017BoulderElectionExpendituresRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Search2017BoulderElectionExpendituresQueryParams)
    ], Search2017BoulderElectionExpendituresRequest.prototype, "queryParams", void 0);
    return Search2017BoulderElectionExpendituresRequest;
}(SpeakeasyBase));
export { Search2017BoulderElectionExpendituresRequest };
var Search2017BoulderElectionExpendituresResponse = /** @class */ (function (_super) {
    __extends(Search2017BoulderElectionExpendituresResponse, _super);
    function Search2017BoulderElectionExpendituresResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], Search2017BoulderElectionExpendituresResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], Search2017BoulderElectionExpendituresResponse.prototype, "statusCode", void 0);
    return Search2017BoulderElectionExpendituresResponse;
}(SpeakeasyBase));
export { Search2017BoulderElectionExpendituresResponse };
