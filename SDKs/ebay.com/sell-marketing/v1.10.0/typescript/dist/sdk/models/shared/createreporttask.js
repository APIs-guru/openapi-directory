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
import { Dimension } from "./dimension";
import { InventoryReference } from "./inventoryreference";
// CreateReportTask
/**
 * This type defines the rules that govern the generation of a report task and the criteria that's used to create the report. The report-generation rules include the starting and ending dates for the report. Report-task criteria includes the report dimensions, metrics, listings covered in the report, and so on. For information on the required and optional fields for each report type, see Reading Promoted Listings reports.
**/
var CreateReportTask = /** @class */ (function (_super) {
    __extends(CreateReportTask, _super);
    function CreateReportTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=campaignIds" }),
        __metadata("design:type", Array)
    ], CreateReportTask.prototype, "campaignIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateFrom" }),
        __metadata("design:type", String)
    ], CreateReportTask.prototype, "dateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateTo" }),
        __metadata("design:type", String)
    ], CreateReportTask.prototype, "dateTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimensions", elemType: Dimension }),
        __metadata("design:type", Array)
    ], CreateReportTask.prototype, "dimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inventoryReferences", elemType: InventoryReference }),
        __metadata("design:type", Array)
    ], CreateReportTask.prototype, "inventoryReferences", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listingIds" }),
        __metadata("design:type", Array)
    ], CreateReportTask.prototype, "listingIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=marketplaceId" }),
        __metadata("design:type", String)
    ], CreateReportTask.prototype, "marketplaceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metricKeys" }),
        __metadata("design:type", Array)
    ], CreateReportTask.prototype, "metricKeys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reportFormat" }),
        __metadata("design:type", String)
    ], CreateReportTask.prototype, "reportFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reportType" }),
        __metadata("design:type", String)
    ], CreateReportTask.prototype, "reportType", void 0);
    return CreateReportTask;
}(SpeakeasyBase));
export { CreateReportTask };
