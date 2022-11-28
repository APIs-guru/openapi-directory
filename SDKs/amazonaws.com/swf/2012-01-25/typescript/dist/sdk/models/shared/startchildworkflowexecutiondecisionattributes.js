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
// StartChildWorkflowExecutionDecisionAttributes
/**
 * <p>Provides the details of the <code>StartChildWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tagList.member.N</code> – The key is "swf:tagList.N" where N is the tag number from 0 to 4, inclusive.</p> </li> <li> <p> <code>taskList</code> – String constraint. The key is <code>swf:taskList.name</code>.</p> </li> <li> <p> <code>workflowType.name</code> – String constraint. The key is <code>swf:workflowType.name</code>.</p> </li> <li> <p> <code>workflowType.version</code> – String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
**/
var StartChildWorkflowExecutionDecisionAttributes = /** @class */ (function (_super) {
    __extends(StartChildWorkflowExecutionDecisionAttributes, _super);
    function StartChildWorkflowExecutionDecisionAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=childPolicy" }),
        __metadata("design:type", String)
    ], StartChildWorkflowExecutionDecisionAttributes.prototype, "childPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=control" }),
        __metadata("design:type", String)
    ], StartChildWorkflowExecutionDecisionAttributes.prototype, "control", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionStartToCloseTimeout" }),
        __metadata("design:type", String)
    ], StartChildWorkflowExecutionDecisionAttributes.prototype, "executionStartToCloseTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=input" }),
        __metadata("design:type", String)
    ], StartChildWorkflowExecutionDecisionAttributes.prototype, "input", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lambdaRole" }),
        __metadata("design:type", String)
    ], StartChildWorkflowExecutionDecisionAttributes.prototype, "lambdaRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagList" }),
        __metadata("design:type", Array)
    ], StartChildWorkflowExecutionDecisionAttributes.prototype, "tagList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskList" }),
        __metadata("design:type", TaskList)
    ], StartChildWorkflowExecutionDecisionAttributes.prototype, "taskList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskPriority" }),
        __metadata("design:type", String)
    ], StartChildWorkflowExecutionDecisionAttributes.prototype, "taskPriority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskStartToCloseTimeout" }),
        __metadata("design:type", String)
    ], StartChildWorkflowExecutionDecisionAttributes.prototype, "taskStartToCloseTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workflowId" }),
        __metadata("design:type", String)
    ], StartChildWorkflowExecutionDecisionAttributes.prototype, "workflowId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workflowType" }),
        __metadata("design:type", WorkflowType)
    ], StartChildWorkflowExecutionDecisionAttributes.prototype, "workflowType", void 0);
    return StartChildWorkflowExecutionDecisionAttributes;
}(SpeakeasyBase));
export { StartChildWorkflowExecutionDecisionAttributes };
