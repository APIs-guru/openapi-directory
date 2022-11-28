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
import { Environment } from "./environment";
import { TaskSpec } from "./taskspec";
// TaskGroup
/**
 * A TaskGroup contains one or multiple Tasks that share the same Runnable but with different runtime parameters.
**/
var TaskGroup = /** @class */ (function (_super) {
    __extends(TaskGroup, _super);
    function TaskGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TaskGroup.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parallelism" }),
        __metadata("design:type", String)
    ], TaskGroup.prototype, "parallelism", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissiveSsh" }),
        __metadata("design:type", Boolean)
    ], TaskGroup.prototype, "permissiveSsh", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requireHostsFile" }),
        __metadata("design:type", Boolean)
    ], TaskGroup.prototype, "requireHostsFile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskCount" }),
        __metadata("design:type", String)
    ], TaskGroup.prototype, "taskCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskCountPerNode" }),
        __metadata("design:type", String)
    ], TaskGroup.prototype, "taskCountPerNode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskEnvironments", elemType: Environment }),
        __metadata("design:type", Array)
    ], TaskGroup.prototype, "taskEnvironments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskSpec" }),
        __metadata("design:type", TaskSpec)
    ], TaskGroup.prototype, "taskSpec", void 0);
    return TaskGroup;
}(SpeakeasyBase));
export { TaskGroup };
// TaskGroupInput
/**
 * A TaskGroup contains one or multiple Tasks that share the same Runnable but with different runtime parameters.
**/
var TaskGroupInput = /** @class */ (function (_super) {
    __extends(TaskGroupInput, _super);
    function TaskGroupInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parallelism" }),
        __metadata("design:type", String)
    ], TaskGroupInput.prototype, "parallelism", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissiveSsh" }),
        __metadata("design:type", Boolean)
    ], TaskGroupInput.prototype, "permissiveSsh", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requireHostsFile" }),
        __metadata("design:type", Boolean)
    ], TaskGroupInput.prototype, "requireHostsFile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskCount" }),
        __metadata("design:type", String)
    ], TaskGroupInput.prototype, "taskCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskCountPerNode" }),
        __metadata("design:type", String)
    ], TaskGroupInput.prototype, "taskCountPerNode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskEnvironments", elemType: Environment }),
        __metadata("design:type", Array)
    ], TaskGroupInput.prototype, "taskEnvironments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskSpec" }),
        __metadata("design:type", TaskSpec)
    ], TaskGroupInput.prototype, "taskSpec", void 0);
    return TaskGroupInput;
}(SpeakeasyBase));
export { TaskGroupInput };
