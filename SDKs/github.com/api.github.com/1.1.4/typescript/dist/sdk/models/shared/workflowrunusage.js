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
var WorkflowRunUsageBillableMacos = /** @class */ (function (_super) {
    __extends(WorkflowRunUsageBillableMacos, _super);
    function WorkflowRunUsageBillableMacos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobs" }),
        __metadata("design:type", Number)
    ], WorkflowRunUsageBillableMacos.prototype, "jobs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_ms" }),
        __metadata("design:type", Number)
    ], WorkflowRunUsageBillableMacos.prototype, "totalMs", void 0);
    return WorkflowRunUsageBillableMacos;
}(SpeakeasyBase));
export { WorkflowRunUsageBillableMacos };
var WorkflowRunUsageBillableUbuntu = /** @class */ (function (_super) {
    __extends(WorkflowRunUsageBillableUbuntu, _super);
    function WorkflowRunUsageBillableUbuntu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobs" }),
        __metadata("design:type", Number)
    ], WorkflowRunUsageBillableUbuntu.prototype, "jobs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_ms" }),
        __metadata("design:type", Number)
    ], WorkflowRunUsageBillableUbuntu.prototype, "totalMs", void 0);
    return WorkflowRunUsageBillableUbuntu;
}(SpeakeasyBase));
export { WorkflowRunUsageBillableUbuntu };
var WorkflowRunUsageBillableWindows = /** @class */ (function (_super) {
    __extends(WorkflowRunUsageBillableWindows, _super);
    function WorkflowRunUsageBillableWindows() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobs" }),
        __metadata("design:type", Number)
    ], WorkflowRunUsageBillableWindows.prototype, "jobs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_ms" }),
        __metadata("design:type", Number)
    ], WorkflowRunUsageBillableWindows.prototype, "totalMs", void 0);
    return WorkflowRunUsageBillableWindows;
}(SpeakeasyBase));
export { WorkflowRunUsageBillableWindows };
var WorkflowRunUsageBillable = /** @class */ (function (_super) {
    __extends(WorkflowRunUsageBillable, _super);
    function WorkflowRunUsageBillable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MACOS" }),
        __metadata("design:type", WorkflowRunUsageBillableMacos)
    ], WorkflowRunUsageBillable.prototype, "macos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UBUNTU" }),
        __metadata("design:type", WorkflowRunUsageBillableUbuntu)
    ], WorkflowRunUsageBillable.prototype, "ubuntu", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WINDOWS" }),
        __metadata("design:type", WorkflowRunUsageBillableWindows)
    ], WorkflowRunUsageBillable.prototype, "windows", void 0);
    return WorkflowRunUsageBillable;
}(SpeakeasyBase));
export { WorkflowRunUsageBillable };
// WorkflowRunUsage
/**
 * Workflow Run Usage
**/
var WorkflowRunUsage = /** @class */ (function (_super) {
    __extends(WorkflowRunUsage, _super);
    function WorkflowRunUsage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billable" }),
        __metadata("design:type", WorkflowRunUsageBillable)
    ], WorkflowRunUsage.prototype, "billable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=run_duration_ms" }),
        __metadata("design:type", Number)
    ], WorkflowRunUsage.prototype, "runDurationMs", void 0);
    return WorkflowRunUsage;
}(SpeakeasyBase));
export { WorkflowRunUsage };
