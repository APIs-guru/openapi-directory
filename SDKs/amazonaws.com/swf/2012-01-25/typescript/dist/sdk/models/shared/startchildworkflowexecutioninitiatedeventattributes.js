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
import { ChildPolicyEnum } from "./childpolicyenum";
import { TaskList } from "./tasklist";
import { WorkflowType } from "./workflowtype";
// StartChildWorkflowExecutionInitiatedEventAttributes
/**
 * Provides the details of the <code>StartChildWorkflowExecutionInitiated</code> event.
**/
var StartChildWorkflowExecutionInitiatedEventAttributes = /** @class */ (function (_super) {
    __extends(StartChildWorkflowExecutionInitiatedEventAttributes, _super);
    function StartChildWorkflowExecutionInitiatedEventAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=childPolicy" }),
        __metadata("design:type", String)
    ], StartChildWorkflowExecutionInitiatedEventAttributes.prototype, "childPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=control" }),
        __metadata("design:type", String)
    ], StartChildWorkflowExecutionInitiatedEventAttributes.prototype, "control", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=decisionTaskCompletedEventId" }),
        __metadata("design:type", Number)
    ], StartChildWorkflowExecutionInitiatedEventAttributes.prototype, "decisionTaskCompletedEventId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionStartToCloseTimeout" }),
        __metadata("design:type", String)
    ], StartChildWorkflowExecutionInitiatedEventAttributes.prototype, "executionStartToCloseTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=input" }),
        __metadata("design:type", String)
    ], StartChildWorkflowExecutionInitiatedEventAttributes.prototype, "input", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lambdaRole" }),
        __metadata("design:type", String)
    ], StartChildWorkflowExecutionInitiatedEventAttributes.prototype, "lambdaRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagList" }),
        __metadata("design:type", Array)
    ], StartChildWorkflowExecutionInitiatedEventAttributes.prototype, "tagList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskList" }),
        __metadata("design:type", TaskList)
    ], StartChildWorkflowExecutionInitiatedEventAttributes.prototype, "taskList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskPriority" }),
        __metadata("design:type", String)
    ], StartChildWorkflowExecutionInitiatedEventAttributes.prototype, "taskPriority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskStartToCloseTimeout" }),
        __metadata("design:type", String)
    ], StartChildWorkflowExecutionInitiatedEventAttributes.prototype, "taskStartToCloseTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workflowId" }),
        __metadata("design:type", String)
    ], StartChildWorkflowExecutionInitiatedEventAttributes.prototype, "workflowId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workflowType" }),
        __metadata("design:type", WorkflowType)
    ], StartChildWorkflowExecutionInitiatedEventAttributes.prototype, "workflowType", void 0);
    return StartChildWorkflowExecutionInitiatedEventAttributes;
}(SpeakeasyBase));
export { StartChildWorkflowExecutionInitiatedEventAttributes };
