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
var CreateAssociationRequest = /** @class */ (function (_super) {
    __extends(CreateAssociationRequest, _super);
    function CreateAssociationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApplyOnlyAtCronInterval" }),
        __metadata("design:type", Boolean)
    ], CreateAssociationRequest.prototype, "applyOnlyAtCronInterval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AssociationName" }),
        __metadata("design:type", String)
    ], CreateAssociationRequest.prototype, "associationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutomationTargetParameterName" }),
        __metadata("design:type", String)
    ], CreateAssociationRequest.prototype, "automationTargetParameterName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CalendarNames" }),
        __metadata("design:type", Array)
    ], CreateAssociationRequest.prototype, "calendarNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ComplianceSeverity" }),
        __metadata("design:type", String)
    ], CreateAssociationRequest.prototype, "complianceSeverity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DocumentVersion" }),
        __metadata("design:type", String)
    ], CreateAssociationRequest.prototype, "documentVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceId" }),
        __metadata("design:type", String)
    ], CreateAssociationRequest.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxConcurrency" }),
        __metadata("design:type", String)
    ], CreateAssociationRequest.prototype, "maxConcurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxErrors" }),
        __metadata("design:type", String)
    ], CreateAssociationRequest.prototype, "maxErrors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CreateAssociationRequest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutputLocation" }),
        __metadata("design:type", InstanceAssociationOutputLocation)
    ], CreateAssociationRequest.prototype, "outputLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Parameters" }),
        __metadata("design:type", Map)
    ], CreateAssociationRequest.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScheduleExpression" }),
        __metadata("design:type", String)
    ], CreateAssociationRequest.prototype, "scheduleExpression", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SyncCompliance" }),
        __metadata("design:type", String)
    ], CreateAssociationRequest.prototype, "syncCompliance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetLocations", elemType: TargetLocation }),
        __metadata("design:type", Array)
    ], CreateAssociationRequest.prototype, "targetLocations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Targets", elemType: Target }),
        __metadata("design:type", Array)
    ], CreateAssociationRequest.prototype, "targets", void 0);
    return CreateAssociationRequest;
}(SpeakeasyBase));
export { CreateAssociationRequest };
