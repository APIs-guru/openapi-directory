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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ChatChannel } from "./chatchannel";
import { IncidentRecordSource } from "./incidentrecordsource";
import { IncidentRecordStatusEnum } from "./incidentrecordstatusenum";
// IncidentRecord
/**
 * The record of the incident that's created when an incident occurs.
**/
var IncidentRecord = /** @class */ (function (_super) {
    __extends(IncidentRecord, _super);
    function IncidentRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], IncidentRecord.prototype, "arn", void 0);
    __decorate([
        Metadata({ data: "json, name=automationExecutions", elemType: shared.AutomationExecution }),
        __metadata("design:type", Array)
    ], IncidentRecord.prototype, "automationExecutions", void 0);
    __decorate([
        Metadata({ data: "json, name=chatChannel" }),
        __metadata("design:type", ChatChannel)
    ], IncidentRecord.prototype, "chatChannel", void 0);
    __decorate([
        Metadata({ data: "json, name=creationTime" }),
        __metadata("design:type", Date)
    ], IncidentRecord.prototype, "creationTime", void 0);
    __decorate([
        Metadata({ data: "json, name=dedupeString" }),
        __metadata("design:type", String)
    ], IncidentRecord.prototype, "dedupeString", void 0);
    __decorate([
        Metadata({ data: "json, name=impact" }),
        __metadata("design:type", Number)
    ], IncidentRecord.prototype, "impact", void 0);
    __decorate([
        Metadata({ data: "json, name=incidentRecordSource" }),
        __metadata("design:type", IncidentRecordSource)
    ], IncidentRecord.prototype, "incidentRecordSource", void 0);
    __decorate([
        Metadata({ data: "json, name=lastModifiedBy" }),
        __metadata("design:type", String)
    ], IncidentRecord.prototype, "lastModifiedBy", void 0);
    __decorate([
        Metadata({ data: "json, name=lastModifiedTime" }),
        __metadata("design:type", Date)
    ], IncidentRecord.prototype, "lastModifiedTime", void 0);
    __decorate([
        Metadata({ data: "json, name=notificationTargets", elemType: shared.NotificationTargetItem }),
        __metadata("design:type", Array)
    ], IncidentRecord.prototype, "notificationTargets", void 0);
    __decorate([
        Metadata({ data: "json, name=resolvedTime" }),
        __metadata("design:type", Date)
    ], IncidentRecord.prototype, "resolvedTime", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], IncidentRecord.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=summary" }),
        __metadata("design:type", String)
    ], IncidentRecord.prototype, "summary", void 0);
    __decorate([
        Metadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], IncidentRecord.prototype, "title", void 0);
    return IncidentRecord;
}(SpeakeasyBase));
export { IncidentRecord };
