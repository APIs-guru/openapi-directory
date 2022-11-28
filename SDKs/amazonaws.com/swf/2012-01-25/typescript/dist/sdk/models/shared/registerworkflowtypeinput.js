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
var RegisterWorkflowTypeInput = /** @class */ (function (_super) {
    __extends(RegisterWorkflowTypeInput, _super);
    function RegisterWorkflowTypeInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultChildPolicy" }),
        __metadata("design:type", String)
    ], RegisterWorkflowTypeInput.prototype, "defaultChildPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultExecutionStartToCloseTimeout" }),
        __metadata("design:type", String)
    ], RegisterWorkflowTypeInput.prototype, "defaultExecutionStartToCloseTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultLambdaRole" }),
        __metadata("design:type", String)
    ], RegisterWorkflowTypeInput.prototype, "defaultLambdaRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultTaskList" }),
        __metadata("design:type", TaskList)
    ], RegisterWorkflowTypeInput.prototype, "defaultTaskList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultTaskPriority" }),
        __metadata("design:type", String)
    ], RegisterWorkflowTypeInput.prototype, "defaultTaskPriority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultTaskStartToCloseTimeout" }),
        __metadata("design:type", String)
    ], RegisterWorkflowTypeInput.prototype, "defaultTaskStartToCloseTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], RegisterWorkflowTypeInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], RegisterWorkflowTypeInput.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], RegisterWorkflowTypeInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], RegisterWorkflowTypeInput.prototype, "version", void 0);
    return RegisterWorkflowTypeInput;
}(SpeakeasyBase));
export { RegisterWorkflowTypeInput };
