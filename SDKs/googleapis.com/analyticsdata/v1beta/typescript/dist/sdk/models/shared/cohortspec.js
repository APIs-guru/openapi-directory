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
import { CohortReportSettings } from "./cohortreportsettings";
import { Cohort } from "./cohort";
import { CohortsRange } from "./cohortsrange";
// CohortSpec
/**
 * The specification of cohorts for a cohort report. Cohort reports create a time series of user retention for the cohort. For example, you could select the cohort of users that were acquired in the first week of September and follow that cohort for the next six weeks. Selecting the users acquired in the first week of September cohort is specified in the `cohort` object. Following that cohort for the next six weeks is specified in the `cohortsRange` object. For examples, see [Cohort Report Examples](https://developers.google.com/analytics/devguides/reporting/data/v1/advanced#cohort_report_examples). The report response could show a weekly time series where say your app has retained 60% of this cohort after three weeks and 25% of this cohort after six weeks. These two percentages can be calculated by the metric `cohortActiveUsers/cohortTotalUsers` and will be separate rows in the report.
**/
var CohortSpec = /** @class */ (function (_super) {
    __extends(CohortSpec, _super);
    function CohortSpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cohortReportSettings" }),
        __metadata("design:type", CohortReportSettings)
    ], CohortSpec.prototype, "cohortReportSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cohorts", elemType: Cohort }),
        __metadata("design:type", Array)
    ], CohortSpec.prototype, "cohorts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cohortsRange" }),
        __metadata("design:type", CohortsRange)
    ], CohortSpec.prototype, "cohortsRange", void 0);
    return CohortSpec;
}(SpeakeasyBase));
export { CohortSpec };
