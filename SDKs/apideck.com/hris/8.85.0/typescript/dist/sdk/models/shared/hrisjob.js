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
export var HrisJobEmploymentStatusEnum;
(function (HrisJobEmploymentStatusEnum) {
    HrisJobEmploymentStatusEnum["Active"] = "active";
    HrisJobEmploymentStatusEnum["Inactive"] = "inactive";
    HrisJobEmploymentStatusEnum["Terminated"] = "terminated";
    HrisJobEmploymentStatusEnum["Other"] = "other";
})(HrisJobEmploymentStatusEnum || (HrisJobEmploymentStatusEnum = {}));
var HrisJobLocation = /** @class */ (function (_super) {
    __extends(HrisJobLocation, _super);
    function HrisJobLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], HrisJobLocation.prototype, "name", void 0);
    return HrisJobLocation;
}(SpeakeasyBase));
export { HrisJobLocation };
var HrisJob = /** @class */ (function (_super) {
    __extends(HrisJob, _super);
    function HrisJob() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=department" }),
        __metadata("design:type", String)
    ], HrisJob.prototype, "department", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=employee_id" }),
        __metadata("design:type", String)
    ], HrisJob.prototype, "employeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=employment_status" }),
        __metadata("design:type", String)
    ], HrisJob.prototype, "employmentStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_date" }),
        __metadata("design:type", Date)
    ], HrisJob.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], HrisJob.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", HrisJobLocation)
    ], HrisJob.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_date" }),
        __metadata("design:type", Date)
    ], HrisJob.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], HrisJob.prototype, "title", void 0);
    return HrisJob;
}(SpeakeasyBase));
export { HrisJob };
