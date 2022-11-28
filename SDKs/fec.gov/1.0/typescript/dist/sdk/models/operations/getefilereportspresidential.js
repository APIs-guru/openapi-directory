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
var GetEfileReportsPresidentialQueryParams = /** @class */ (function (_super) {
    __extends(GetEfileReportsPresidentialQueryParams, _super);
    function GetEfileReportsPresidentialQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetEfileReportsPresidentialQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=committee_id" }),
        __metadata("design:type", Array)
    ], GetEfileReportsPresidentialQueryParams.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=file_number" }),
        __metadata("design:type", Array)
    ], GetEfileReportsPresidentialQueryParams.prototype, "fileNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_receipt_date" }),
        __metadata("design:type", Date)
    ], GetEfileReportsPresidentialQueryParams.prototype, "maxReceiptDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_receipt_date" }),
        __metadata("design:type", Date)
    ], GetEfileReportsPresidentialQueryParams.prototype, "minReceiptDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetEfileReportsPresidentialQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetEfileReportsPresidentialQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetEfileReportsPresidentialQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetEfileReportsPresidentialQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetEfileReportsPresidentialQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" }),
        __metadata("design:type", Boolean)
    ], GetEfileReportsPresidentialQueryParams.prototype, "sortNullsLast", void 0);
    return GetEfileReportsPresidentialQueryParams;
}(SpeakeasyBase));
export { GetEfileReportsPresidentialQueryParams };
var GetEfileReportsPresidentialRequest = /** @class */ (function (_super) {
    __extends(GetEfileReportsPresidentialRequest, _super);
    function GetEfileReportsPresidentialRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEfileReportsPresidentialQueryParams)
    ], GetEfileReportsPresidentialRequest.prototype, "queryParams", void 0);
    return GetEfileReportsPresidentialRequest;
}(SpeakeasyBase));
export { GetEfileReportsPresidentialRequest };
var GetEfileReportsPresidentialResponse = /** @class */ (function (_super) {
    __extends(GetEfileReportsPresidentialResponse, _super);
    function GetEfileReportsPresidentialResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BaseF3PFilingPage)
    ], GetEfileReportsPresidentialResponse.prototype, "baseF3PFilingPage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEfileReportsPresidentialResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEfileReportsPresidentialResponse.prototype, "statusCode", void 0);
    return GetEfileReportsPresidentialResponse;
}(SpeakeasyBase));
export { GetEfileReportsPresidentialResponse };
