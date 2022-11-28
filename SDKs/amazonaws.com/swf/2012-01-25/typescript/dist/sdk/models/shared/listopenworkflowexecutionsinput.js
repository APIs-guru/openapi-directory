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
import { WorkflowExecutionFilter } from "./workflowexecutionfilter";
import { ExecutionTimeFilter } from "./executiontimefilter";
import { TagFilter } from "./tagfilter";
import { WorkflowTypeFilter } from "./workflowtypefilter";
var ListOpenWorkflowExecutionsInput = /** @class */ (function (_super) {
    __extends(ListOpenWorkflowExecutionsInput, _super);
    function ListOpenWorkflowExecutionsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], ListOpenWorkflowExecutionsInput.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionFilter" }),
        __metadata("design:type", WorkflowExecutionFilter)
    ], ListOpenWorkflowExecutionsInput.prototype, "executionFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumPageSize" }),
        __metadata("design:type", Number)
    ], ListOpenWorkflowExecutionsInput.prototype, "maximumPageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextPageToken" }),
        __metadata("design:type", String)
    ], ListOpenWorkflowExecutionsInput.prototype, "nextPageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reverseOrder" }),
        __metadata("design:type", Boolean)
    ], ListOpenWorkflowExecutionsInput.prototype, "reverseOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTimeFilter" }),
        __metadata("design:type", ExecutionTimeFilter)
    ], ListOpenWorkflowExecutionsInput.prototype, "startTimeFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagFilter" }),
        __metadata("design:type", TagFilter)
    ], ListOpenWorkflowExecutionsInput.prototype, "tagFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=typeFilter" }),
        __metadata("design:type", WorkflowTypeFilter)
    ], ListOpenWorkflowExecutionsInput.prototype, "typeFilter", void 0);
    return ListOpenWorkflowExecutionsInput;
}(SpeakeasyBase));
export { ListOpenWorkflowExecutionsInput };
