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
var WorkflowUsageBillableMacos = /** @class */ (function (_super) {
    __extends(WorkflowUsageBillableMacos, _super);
    function WorkflowUsageBillableMacos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_ms" }),
        __metadata("design:type", Number)
    ], WorkflowUsageBillableMacos.prototype, "totalMs", void 0);
    return WorkflowUsageBillableMacos;
}(SpeakeasyBase));
export { WorkflowUsageBillableMacos };
var WorkflowUsageBillableUbuntu = /** @class */ (function (_super) {
    __extends(WorkflowUsageBillableUbuntu, _super);
    function WorkflowUsageBillableUbuntu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_ms" }),
        __metadata("design:type", Number)
    ], WorkflowUsageBillableUbuntu.prototype, "totalMs", void 0);
    return WorkflowUsageBillableUbuntu;
}(SpeakeasyBase));
export { WorkflowUsageBillableUbuntu };
var WorkflowUsageBillableWindows = /** @class */ (function (_super) {
    __extends(WorkflowUsageBillableWindows, _super);
    function WorkflowUsageBillableWindows() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_ms" }),
        __metadata("design:type", Number)
    ], WorkflowUsageBillableWindows.prototype, "totalMs", void 0);
    return WorkflowUsageBillableWindows;
}(SpeakeasyBase));
export { WorkflowUsageBillableWindows };
var WorkflowUsageBillable = /** @class */ (function (_super) {
    __extends(WorkflowUsageBillable, _super);
    function WorkflowUsageBillable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MACOS" }),
        __metadata("design:type", WorkflowUsageBillableMacos)
    ], WorkflowUsageBillable.prototype, "macos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UBUNTU" }),
        __metadata("design:type", WorkflowUsageBillableUbuntu)
    ], WorkflowUsageBillable.prototype, "ubuntu", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WINDOWS" }),
        __metadata("design:type", WorkflowUsageBillableWindows)
    ], WorkflowUsageBillable.prototype, "windows", void 0);
    return WorkflowUsageBillable;
}(SpeakeasyBase));
export { WorkflowUsageBillable };
// WorkflowUsage
/**
 * Workflow Usage
**/
var WorkflowUsage = /** @class */ (function (_super) {
    __extends(WorkflowUsage, _super);
    function WorkflowUsage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billable" }),
        __metadata("design:type", WorkflowUsageBillable)
    ], WorkflowUsage.prototype, "billable", void 0);
    return WorkflowUsage;
}(SpeakeasyBase));
export { WorkflowUsage };
