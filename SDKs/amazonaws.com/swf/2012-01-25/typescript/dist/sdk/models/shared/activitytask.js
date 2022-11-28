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
import { ActivityType } from "./activitytype";
import { WorkflowExecution } from "./workflowexecution";
// ActivityTask
/**
 * Unit of work sent to an activity worker.
**/
var ActivityTask = /** @class */ (function (_super) {
    __extends(ActivityTask, _super);
    function ActivityTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activityId" }),
        __metadata("design:type", String)
    ], ActivityTask.prototype, "activityId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activityType" }),
        __metadata("design:type", ActivityType)
    ], ActivityTask.prototype, "activityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=input" }),
        __metadata("design:type", String)
    ], ActivityTask.prototype, "input", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startedEventId" }),
        __metadata("design:type", Number)
    ], ActivityTask.prototype, "startedEventId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskToken" }),
        __metadata("design:type", String)
    ], ActivityTask.prototype, "taskToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workflowExecution" }),
        __metadata("design:type", WorkflowExecution)
    ], ActivityTask.prototype, "workflowExecution", void 0);
    return ActivityTask;
}(SpeakeasyBase));
export { ActivityTask };
