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
// GenerateMediationReportResponse
/**
 * The streaming response for the AdMob mediation report where the first response contains the report header, then a stream of row responses, and finally a footer as the last response message. For example: [{ "header": { "date_range": { "start_date": {"year": 2018, "month": 9, "day": 1}, "end_date": {"year": 2018, "month": 9, "day": 1} }, "localization_settings": { "currency_code": "USD", "language_code": "en-US" } } }, { "row": { "dimension_values": { "DATE": {"value": "20180918"}, "APP": { "value": "ca-app-pub-8123415297019784~1001342552", "display_label": "My app name!" } }, "metric_values": { "ESTIMATED_EARNINGS": {"decimal_value": "1324746"} } } }, { "footer": {"matching_row_count": 1} }]
**/
var GenerateMediationReportResponse = /** @class */ (function (_super) {
    __extends(GenerateMediationReportResponse, _super);
    function GenerateMediationReportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=footer" }),
        __metadata("design:type", ReportFooter)
    ], GenerateMediationReportResponse.prototype, "footer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=header" }),
        __metadata("design:type", ReportHeader)
    ], GenerateMediationReportResponse.prototype, "header", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=row" }),
        __metadata("design:type", ReportRow)
    ], GenerateMediationReportResponse.prototype, "row", void 0);
    return GenerateMediationReportResponse;
}(SpeakeasyBase));
export { GenerateMediationReportResponse };
