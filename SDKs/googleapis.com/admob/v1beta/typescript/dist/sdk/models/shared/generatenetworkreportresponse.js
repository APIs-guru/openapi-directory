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
import { ReportFooter } from "./reportfooter";
import { ReportHeader } from "./reportheader";
import { ReportRow } from "./reportrow";
// GenerateNetworkReportResponse
/**
 * The streaming response for the AdMob Network report where the first response contains the report header, then a stream of row responses, and finally a footer as the last response message. For example: [{ "header": { "dateRange": { "startDate": {"year": 2018, "month": 9, "day": 1}, "endDate": {"year": 2018, "month": 9, "day": 1} }, "localizationSettings": { "currencyCode": "USD", "languageCode": "en-US" } } }, { "row": { "dimensionValues": { "DATE": {"value": "20180918"}, "APP": { "value": "ca-app-pub-8123415297019784~1001342552", displayLabel: "My app name!" } }, "metricValues": { "ESTIMATED_EARNINGS": {"microsValue": 6500000} } } }, { "footer": {"matchingRowCount": 1} }]
**/
var GenerateNetworkReportResponse = /** @class */ (function (_super) {
    __extends(GenerateNetworkReportResponse, _super);
    function GenerateNetworkReportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=footer" }),
        __metadata("design:type", ReportFooter)
    ], GenerateNetworkReportResponse.prototype, "footer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=header" }),
        __metadata("design:type", ReportHeader)
    ], GenerateNetworkReportResponse.prototype, "header", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=row" }),
        __metadata("design:type", ReportRow)
    ], GenerateNetworkReportResponse.prototype, "row", void 0);
    return GenerateNetworkReportResponse;
}(SpeakeasyBase));
export { GenerateNetworkReportResponse };
