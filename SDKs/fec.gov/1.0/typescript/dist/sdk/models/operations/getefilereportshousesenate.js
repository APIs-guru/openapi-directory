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
var GetEfileReportsHouseSenateQueryParams = /** @class */ (function (_super) {
    __extends(GetEfileReportsHouseSenateQueryParams, _super);
    function GetEfileReportsHouseSenateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetEfileReportsHouseSenateQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=committee_id" }),
        __metadata("design:type", Array)
    ], GetEfileReportsHouseSenateQueryParams.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=file_number" }),
        __metadata("design:type", Array)
    ], GetEfileReportsHouseSenateQueryParams.prototype, "fileNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_receipt_date" }),
        __metadata("design:type", Date)
    ], GetEfileReportsHouseSenateQueryParams.prototype, "maxReceiptDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_receipt_date" }),
        __metadata("design:type", Date)
    ], GetEfileReportsHouseSenateQueryParams.prototype, "minReceiptDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetEfileReportsHouseSenateQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetEfileReportsHouseSenateQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetEfileReportsHouseSenateQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetEfileReportsHouseSenateQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetEfileReportsHouseSenateQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" }),
        __metadata("design:type", Boolean)
    ], GetEfileReportsHouseSenateQueryParams.prototype, "sortNullsLast", void 0);
    return GetEfileReportsHouseSenateQueryParams;
}(SpeakeasyBase));
export { GetEfileReportsHouseSenateQueryParams };
var GetEfileReportsHouseSenateRequest = /** @class */ (function (_super) {
    __extends(GetEfileReportsHouseSenateRequest, _super);
    function GetEfileReportsHouseSenateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEfileReportsHouseSenateQueryParams)
    ], GetEfileReportsHouseSenateRequest.prototype, "queryParams", void 0);
    return GetEfileReportsHouseSenateRequest;
}(SpeakeasyBase));
export { GetEfileReportsHouseSenateRequest };
var GetEfileReportsHouseSenateResponse = /** @class */ (function (_super) {
    __extends(GetEfileReportsHouseSenateResponse, _super);
    function GetEfileReportsHouseSenateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BaseF3FilingPage)
    ], GetEfileReportsHouseSenateResponse.prototype, "baseF3FilingPage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEfileReportsHouseSenateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEfileReportsHouseSenateResponse.prototype, "statusCode", void 0);
    return GetEfileReportsHouseSenateResponse;
}(SpeakeasyBase));
export { GetEfileReportsHouseSenateResponse };
