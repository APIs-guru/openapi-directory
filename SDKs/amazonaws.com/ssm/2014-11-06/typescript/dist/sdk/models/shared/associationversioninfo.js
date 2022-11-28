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
import { AssociationComplianceSeverityEnum } from "./associationcomplianceseverityenum";
import { InstanceAssociationOutputLocation } from "./instanceassociationoutputlocation";
import { AssociationSyncComplianceEnum } from "./associationsynccomplianceenum";
import { TargetLocation } from "./targetlocation";
import { Target } from "./target";
// AssociationVersionInfo
/**
 * Information about the association version.
**/
var AssociationVersionInfo = /** @class */ (function (_super) {
    __extends(AssociationVersionInfo, _super);
    function AssociationVersionInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApplyOnlyAtCronInterval" }),
        __metadata("design:type", Boolean)
    ], AssociationVersionInfo.prototype, "applyOnlyAtCronInterval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AssociationId" }),
        __metadata("design:type", String)
    ], AssociationVersionInfo.prototype, "associationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AssociationName" }),
        __metadata("design:type", String)
    ], AssociationVersionInfo.prototype, "associationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AssociationVersion" }),
        __metadata("design:type", String)
    ], AssociationVersionInfo.prototype, "associationVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CalendarNames" }),
        __metadata("design:type", Array)
    ], AssociationVersionInfo.prototype, "calendarNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ComplianceSeverity" }),
        __metadata("design:type", String)
    ], AssociationVersionInfo.prototype, "complianceSeverity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedDate" }),
        __metadata("design:type", Date)
    ], AssociationVersionInfo.prototype, "createdDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DocumentVersion" }),
        __metadata("design:type", String)
    ], AssociationVersionInfo.prototype, "documentVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxConcurrency" }),
        __metadata("design:type", String)
    ], AssociationVersionInfo.prototype, "maxConcurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxErrors" }),
        __metadata("design:type", String)
    ], AssociationVersionInfo.prototype, "maxErrors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], AssociationVersionInfo.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutputLocation" }),
        __metadata("design:type", InstanceAssociationOutputLocation)
    ], AssociationVersionInfo.prototype, "outputLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Parameters" }),
        __metadata("design:type", Map)
    ], AssociationVersionInfo.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScheduleExpression" }),
        __metadata("design:type", String)
    ], AssociationVersionInfo.prototype, "scheduleExpression", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SyncCompliance" }),
        __metadata("design:type", String)
    ], AssociationVersionInfo.prototype, "syncCompliance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetLocations", elemType: TargetLocation }),
        __metadata("design:type", Array)
    ], AssociationVersionInfo.prototype, "targetLocations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Targets", elemType: Target }),
        __metadata("design:type", Array)
    ], AssociationVersionInfo.prototype, "targets", void 0);
    return AssociationVersionInfo;
}(SpeakeasyBase));
export { AssociationVersionInfo };
