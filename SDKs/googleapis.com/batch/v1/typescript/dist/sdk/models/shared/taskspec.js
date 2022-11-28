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
import { ComputeResource } from "./computeresource";
import { Environment } from "./environment";
import { LifecyclePolicy } from "./lifecyclepolicy";
import { Runnable } from "./runnable";
import { Volume } from "./volume";
// TaskSpec
/**
 * Spec of a task
**/
var TaskSpec = /** @class */ (function (_super) {
    __extends(TaskSpec, _super);
    function TaskSpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=computeResource" }),
        __metadata("design:type", ComputeResource)
    ], TaskSpec.prototype, "computeResource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environment" }),
        __metadata("design:type", Environment)
    ], TaskSpec.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environments" }),
        __metadata("design:type", Map)
    ], TaskSpec.prototype, "environments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lifecyclePolicies", elemType: LifecyclePolicy }),
        __metadata("design:type", Array)
    ], TaskSpec.prototype, "lifecyclePolicies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxRetryCount" }),
        __metadata("design:type", Number)
    ], TaskSpec.prototype, "maxRetryCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxRunDuration" }),
        __metadata("design:type", String)
    ], TaskSpec.prototype, "maxRunDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runnables", elemType: Runnable }),
        __metadata("design:type", Array)
    ], TaskSpec.prototype, "runnables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volumes", elemType: Volume }),
        __metadata("design:type", Array)
    ], TaskSpec.prototype, "volumes", void 0);
    return TaskSpec;
}(SpeakeasyBase));
export { TaskSpec };
