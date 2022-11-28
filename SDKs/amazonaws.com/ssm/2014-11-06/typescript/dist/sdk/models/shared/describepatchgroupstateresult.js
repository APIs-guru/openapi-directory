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
var DescribePatchGroupStateResult = /** @class */ (function (_super) {
    __extends(DescribePatchGroupStateResult, _super);
    function DescribePatchGroupStateResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Instances" }),
        __metadata("design:type", Number)
    ], DescribePatchGroupStateResult.prototype, "instances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstancesWithCriticalNonCompliantPatches" }),
        __metadata("design:type", Number)
    ], DescribePatchGroupStateResult.prototype, "instancesWithCriticalNonCompliantPatches", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstancesWithFailedPatches" }),
        __metadata("design:type", Number)
    ], DescribePatchGroupStateResult.prototype, "instancesWithFailedPatches", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstancesWithInstalledOtherPatches" }),
        __metadata("design:type", Number)
    ], DescribePatchGroupStateResult.prototype, "instancesWithInstalledOtherPatches", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstancesWithInstalledPatches" }),
        __metadata("design:type", Number)
    ], DescribePatchGroupStateResult.prototype, "instancesWithInstalledPatches", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstancesWithInstalledPendingRebootPatches" }),
        __metadata("design:type", Number)
    ], DescribePatchGroupStateResult.prototype, "instancesWithInstalledPendingRebootPatches", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstancesWithInstalledRejectedPatches" }),
        __metadata("design:type", Number)
    ], DescribePatchGroupStateResult.prototype, "instancesWithInstalledRejectedPatches", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstancesWithMissingPatches" }),
        __metadata("design:type", Number)
    ], DescribePatchGroupStateResult.prototype, "instancesWithMissingPatches", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstancesWithNotApplicablePatches" }),
        __metadata("design:type", Number)
    ], DescribePatchGroupStateResult.prototype, "instancesWithNotApplicablePatches", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstancesWithOtherNonCompliantPatches" }),
        __metadata("design:type", Number)
    ], DescribePatchGroupStateResult.prototype, "instancesWithOtherNonCompliantPatches", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstancesWithSecurityNonCompliantPatches" }),
        __metadata("design:type", Number)
    ], DescribePatchGroupStateResult.prototype, "instancesWithSecurityNonCompliantPatches", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstancesWithUnreportedNotApplicablePatches" }),
        __metadata("design:type", Number)
    ], DescribePatchGroupStateResult.prototype, "instancesWithUnreportedNotApplicablePatches", void 0);
    return DescribePatchGroupStateResult;
}(SpeakeasyBase));
export { DescribePatchGroupStateResult };
