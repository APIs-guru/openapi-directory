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
var SearchTypeEdgarFilingQueryParams = /** @class */ (function (_super) {
    __extends(SearchTypeEdgarFilingQueryParams, _super);
    function SearchTypeEdgarFilingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changedate.from" }),
        __metadata("design:type", Date)
    ], SearchTypeEdgarFilingQueryParams.prototype, "changedateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changedate.to" }),
        __metadata("design:type", Date)
    ], SearchTypeEdgarFilingQueryParams.prototype, "changedateTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdate.from" }),
        __metadata("design:type", Date)
    ], SearchTypeEdgarFilingQueryParams.prototype, "createdateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdate.to" }),
        __metadata("design:type", Date)
    ], SearchTypeEdgarFilingQueryParams.prototype, "createdateTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" }),
        __metadata("design:type", String)
    ], SearchTypeEdgarFilingQueryParams.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filesuffix" }),
        __metadata("design:type", String)
    ], SearchTypeEdgarFilingQueryParams.prototype, "filesuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Date)
    ], SearchTypeEdgarFilingQueryParams.prototype, "fromdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" }),
        __metadata("design:type", String)
    ], SearchTypeEdgarFilingQueryParams.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", Number)
    ], SearchTypeEdgarFilingQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" }),
        __metadata("design:type", Number)
    ], SearchTypeEdgarFilingQueryParams.prototype, "maxlatitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" }),
        __metadata("design:type", Number)
    ], SearchTypeEdgarFilingQueryParams.prototype, "maxlongitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minlatitude" }),
        __metadata("design:type", Number)
    ], SearchTypeEdgarFilingQueryParams.prototype, "minlatitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minlongitude" }),
        __metadata("design:type", Number)
    ], SearchTypeEdgarFilingQueryParams.prototype, "minlongitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], SearchTypeEdgarFilingQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_edgar_filing.cik_number" }),
        __metadata("design:type", String)
    ], SearchTypeEdgarFilingQueryParams.prototype, "searchTypeEdgarFilingCikNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_edgar_filing.company_name" }),
        __metadata("design:type", String)
    ], SearchTypeEdgarFilingQueryParams.prototype, "searchTypeEdgarFilingCompanyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_edgar_filing.form_type" }),
        __metadata("design:type", String)
    ], SearchTypeEdgarFilingQueryParams.prototype, "searchTypeEdgarFilingFormType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_edgar_filing.irs_number" }),
        __metadata("design:type", String)
    ], SearchTypeEdgarFilingQueryParams.prototype, "searchTypeEdgarFilingIrsNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_edgar_filing.standard_industrial_classification" }),
        __metadata("design:type", String)
    ], SearchTypeEdgarFilingQueryParams.prototype, "searchTypeEdgarFilingStandardIndustrialClassification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_edgar_filing.state" }),
        __metadata("design:type", String)
    ], SearchTypeEdgarFilingQueryParams.prototype, "searchTypeEdgarFilingState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], SearchTypeEdgarFilingQueryParams.prototype, "skip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], SearchTypeEdgarFilingQueryParams.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Date)
    ], SearchTypeEdgarFilingQueryParams.prototype, "todate", void 0);
    return SearchTypeEdgarFilingQueryParams;
}(SpeakeasyBase));
export { SearchTypeEdgarFilingQueryParams };
var SearchTypeEdgarFilingRequest = /** @class */ (function (_super) {
    __extends(SearchTypeEdgarFilingRequest, _super);
    function SearchTypeEdgarFilingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchTypeEdgarFilingQueryParams)
    ], SearchTypeEdgarFilingRequest.prototype, "queryParams", void 0);
    return SearchTypeEdgarFilingRequest;
}(SpeakeasyBase));
export { SearchTypeEdgarFilingRequest };
var SearchTypeEdgarFilingResponse = /** @class */ (function (_super) {
    __extends(SearchTypeEdgarFilingResponse, _super);
    function SearchTypeEdgarFilingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchTypeEdgarFilingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchTypeEdgarFilingResponse.prototype, "statusCode", void 0);
    return SearchTypeEdgarFilingResponse;
}(SpeakeasyBase));
export { SearchTypeEdgarFilingResponse };
