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
var GetStatisticsResponseMonthwiseRegistationsDetails2 = /** @class */ (function (_super) {
    __extends(GetStatisticsResponseMonthwiseRegistationsDetails2, _super);
    function GetStatisticsResponseMonthwiseRegistationsDetails2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetStatisticsResponseMonthwiseRegistationsDetails2.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetStatisticsResponseMonthwiseRegistationsDetails2.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=month" }),
        __metadata("design:type", Number)
    ], GetStatisticsResponseMonthwiseRegistationsDetails2.prototype, "month", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=year" }),
        __metadata("design:type", Number)
    ], GetStatisticsResponseMonthwiseRegistationsDetails2.prototype, "year", void 0);
    return GetStatisticsResponseMonthwiseRegistationsDetails2;
}(SpeakeasyBase));
export { GetStatisticsResponseMonthwiseRegistationsDetails2 };
// GetStatisticsResponseMonthwiseRegistations
/**
 * List of last 12 months cumulative user registrations
**/
var GetStatisticsResponseMonthwiseRegistations = /** @class */ (function (_super) {
    __extends(GetStatisticsResponseMonthwiseRegistations, _super);
    function GetStatisticsResponseMonthwiseRegistations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetStatisticsResponseMonthwiseRegistations.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=details2" }),
        __metadata("design:type", GetStatisticsResponseMonthwiseRegistationsDetails2)
    ], GetStatisticsResponseMonthwiseRegistations.prototype, "details2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetStatisticsResponseMonthwiseRegistations.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=month" }),
        __metadata("design:type", Number)
    ], GetStatisticsResponseMonthwiseRegistations.prototype, "month", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=year" }),
        __metadata("design:type", Number)
    ], GetStatisticsResponseMonthwiseRegistations.prototype, "year", void 0);
    return GetStatisticsResponseMonthwiseRegistations;
}(SpeakeasyBase));
export { GetStatisticsResponseMonthwiseRegistations };
var GetStatisticsResponseYearwiseAuthenticDocumentsDetails = /** @class */ (function (_super) {
    __extends(GetStatisticsResponseYearwiseAuthenticDocumentsDetails, _super);
    function GetStatisticsResponseYearwiseAuthenticDocumentsDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetStatisticsResponseYearwiseAuthenticDocumentsDetails.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetStatisticsResponseYearwiseAuthenticDocumentsDetails.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=year" }),
        __metadata("design:type", Number)
    ], GetStatisticsResponseYearwiseAuthenticDocumentsDetails.prototype, "year", void 0);
    return GetStatisticsResponseYearwiseAuthenticDocumentsDetails;
}(SpeakeasyBase));
export { GetStatisticsResponseYearwiseAuthenticDocumentsDetails };
var GetStatisticsResponseYearwiseAuthenticDocumentsDetails1 = /** @class */ (function (_super) {
    __extends(GetStatisticsResponseYearwiseAuthenticDocumentsDetails1, _super);
    function GetStatisticsResponseYearwiseAuthenticDocumentsDetails1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetStatisticsResponseYearwiseAuthenticDocumentsDetails1.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetStatisticsResponseYearwiseAuthenticDocumentsDetails1.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=year" }),
        __metadata("design:type", Number)
    ], GetStatisticsResponseYearwiseAuthenticDocumentsDetails1.prototype, "year", void 0);
    return GetStatisticsResponseYearwiseAuthenticDocumentsDetails1;
}(SpeakeasyBase));
export { GetStatisticsResponseYearwiseAuthenticDocumentsDetails1 };
var GetStatisticsResponseYearwiseAuthenticDocumentsDetails2 = /** @class */ (function (_super) {
    __extends(GetStatisticsResponseYearwiseAuthenticDocumentsDetails2, _super);
    function GetStatisticsResponseYearwiseAuthenticDocumentsDetails2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetStatisticsResponseYearwiseAuthenticDocumentsDetails2.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetStatisticsResponseYearwiseAuthenticDocumentsDetails2.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=year" }),
        __metadata("design:type", Number)
    ], GetStatisticsResponseYearwiseAuthenticDocumentsDetails2.prototype, "year", void 0);
    return GetStatisticsResponseYearwiseAuthenticDocumentsDetails2;
}(SpeakeasyBase));
export { GetStatisticsResponseYearwiseAuthenticDocumentsDetails2 };
// GetStatisticsResponseYearwiseAuthenticDocuments
/**
 * List of cumulative year-wise counts of authentic documents in DigiLocker.
**/
var GetStatisticsResponseYearwiseAuthenticDocuments = /** @class */ (function (_super) {
    __extends(GetStatisticsResponseYearwiseAuthenticDocuments, _super);
    function GetStatisticsResponseYearwiseAuthenticDocuments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetStatisticsResponseYearwiseAuthenticDocuments.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=details" }),
        __metadata("design:type", GetStatisticsResponseYearwiseAuthenticDocumentsDetails)
    ], GetStatisticsResponseYearwiseAuthenticDocuments.prototype, "details", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=details1" }),
        __metadata("design:type", GetStatisticsResponseYearwiseAuthenticDocumentsDetails1)
    ], GetStatisticsResponseYearwiseAuthenticDocuments.prototype, "details1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=details2" }),
        __metadata("design:type", GetStatisticsResponseYearwiseAuthenticDocumentsDetails2)
    ], GetStatisticsResponseYearwiseAuthenticDocuments.prototype, "details2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetStatisticsResponseYearwiseAuthenticDocuments.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=year" }),
        __metadata("design:type", Number)
    ], GetStatisticsResponseYearwiseAuthenticDocuments.prototype, "year", void 0);
    return GetStatisticsResponseYearwiseAuthenticDocuments;
}(SpeakeasyBase));
export { GetStatisticsResponseYearwiseAuthenticDocuments };
var GetStatisticsResponse = /** @class */ (function (_super) {
    __extends(GetStatisticsResponse, _super);
    function GetStatisticsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authentic_documents" }),
        __metadata("design:type", String)
    ], GetStatisticsResponse.prototype, "authenticDocuments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count_as_on" }),
        __metadata("design:type", String)
    ], GetStatisticsResponse.prototype, "countAsOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issuers" }),
        __metadata("design:type", String)
    ], GetStatisticsResponse.prototype, "issuers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monthwise_registations" }),
        __metadata("design:type", GetStatisticsResponseMonthwiseRegistations)
    ], GetStatisticsResponse.prototype, "monthwiseRegistations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestors" }),
        __metadata("design:type", String)
    ], GetStatisticsResponse.prototype, "requestors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=users" }),
        __metadata("design:type", String)
    ], GetStatisticsResponse.prototype, "users", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=yearwise_authentic_documents" }),
        __metadata("design:type", GetStatisticsResponseYearwiseAuthenticDocuments)
    ], GetStatisticsResponse.prototype, "yearwiseAuthenticDocuments", void 0);
    return GetStatisticsResponse;
}(SpeakeasyBase));
export { GetStatisticsResponse };
