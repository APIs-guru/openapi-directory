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
import { IsDefinedInJobEnum } from "./isdefinedinjobenum";
import { IsMonitoredByJobEnum } from "./ismonitoredbyjobenum";
// JobDetails
/**
 * Specifies whether any one-time or recurring classification jobs are configured to analyze data in an S3 bucket, and, if so, the details of the job that ran most recently.
**/
var JobDetails = /** @class */ (function (_super) {
    __extends(JobDetails, _super);
    function JobDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isDefinedInJob" }),
        __metadata("design:type", String)
    ], JobDetails.prototype, "isDefinedInJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isMonitoredByJob" }),
        __metadata("design:type", String)
    ], JobDetails.prototype, "isMonitoredByJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastJobId" }),
        __metadata("design:type", String)
    ], JobDetails.prototype, "lastJobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastJobRunTime" }),
        __metadata("design:type", Date)
    ], JobDetails.prototype, "lastJobRunTime", void 0);
    return JobDetails;
}(SpeakeasyBase));
export { JobDetails };
