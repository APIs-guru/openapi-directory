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
import { MaintenanceWindowExecutionStatusEnum } from "./maintenancewindowexecutionstatusenum";
import { MaintenanceWindowTaskTypeEnum } from "./maintenancewindowtasktypeenum";
// MaintenanceWindowExecutionTaskIdentity
/**
 * Information about a task execution performed as part of a maintenance window execution.
**/
var MaintenanceWindowExecutionTaskIdentity = /** @class */ (function (_super) {
    __extends(MaintenanceWindowExecutionTaskIdentity, _super);
    function MaintenanceWindowExecutionTaskIdentity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndTime" }),
        __metadata("design:type", Date)
    ], MaintenanceWindowExecutionTaskIdentity.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartTime" }),
        __metadata("design:type", Date)
    ], MaintenanceWindowExecutionTaskIdentity.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], MaintenanceWindowExecutionTaskIdentity.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusDetails" }),
        __metadata("design:type", String)
    ], MaintenanceWindowExecutionTaskIdentity.prototype, "statusDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaskArn" }),
        __metadata("design:type", String)
    ], MaintenanceWindowExecutionTaskIdentity.prototype, "taskArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaskExecutionId" }),
        __metadata("design:type", String)
    ], MaintenanceWindowExecutionTaskIdentity.prototype, "taskExecutionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaskType" }),
        __metadata("design:type", String)
    ], MaintenanceWindowExecutionTaskIdentity.prototype, "taskType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WindowExecutionId" }),
        __metadata("design:type", String)
    ], MaintenanceWindowExecutionTaskIdentity.prototype, "windowExecutionId", void 0);
    return MaintenanceWindowExecutionTaskIdentity;
}(SpeakeasyBase));
export { MaintenanceWindowExecutionTaskIdentity };
