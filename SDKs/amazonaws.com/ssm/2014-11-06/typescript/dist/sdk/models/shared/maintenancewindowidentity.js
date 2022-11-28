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
// MaintenanceWindowIdentity
/**
 * Information about the maintenance window.
**/
var MaintenanceWindowIdentity = /** @class */ (function (_super) {
    __extends(MaintenanceWindowIdentity, _super);
    function MaintenanceWindowIdentity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Cutoff" }),
        __metadata("design:type", Number)
    ], MaintenanceWindowIdentity.prototype, "cutoff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], MaintenanceWindowIdentity.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Duration" }),
        __metadata("design:type", Number)
    ], MaintenanceWindowIdentity.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Enabled" }),
        __metadata("design:type", Boolean)
    ], MaintenanceWindowIdentity.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndDate" }),
        __metadata("design:type", String)
    ], MaintenanceWindowIdentity.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], MaintenanceWindowIdentity.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NextExecutionTime" }),
        __metadata("design:type", String)
    ], MaintenanceWindowIdentity.prototype, "nextExecutionTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Schedule" }),
        __metadata("design:type", String)
    ], MaintenanceWindowIdentity.prototype, "schedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScheduleOffset" }),
        __metadata("design:type", Number)
    ], MaintenanceWindowIdentity.prototype, "scheduleOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScheduleTimezone" }),
        __metadata("design:type", String)
    ], MaintenanceWindowIdentity.prototype, "scheduleTimezone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartDate" }),
        __metadata("design:type", String)
    ], MaintenanceWindowIdentity.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WindowId" }),
        __metadata("design:type", String)
    ], MaintenanceWindowIdentity.prototype, "windowId", void 0);
    return MaintenanceWindowIdentity;
}(SpeakeasyBase));
export { MaintenanceWindowIdentity };
