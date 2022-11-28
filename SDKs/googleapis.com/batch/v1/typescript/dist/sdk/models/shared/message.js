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
export var MessageNewJobStateEnum;
(function (MessageNewJobStateEnum) {
    MessageNewJobStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    MessageNewJobStateEnum["Queued"] = "QUEUED";
    MessageNewJobStateEnum["Scheduled"] = "SCHEDULED";
    MessageNewJobStateEnum["Running"] = "RUNNING";
    MessageNewJobStateEnum["Succeeded"] = "SUCCEEDED";
    MessageNewJobStateEnum["Failed"] = "FAILED";
    MessageNewJobStateEnum["DeletionInProgress"] = "DELETION_IN_PROGRESS";
})(MessageNewJobStateEnum || (MessageNewJobStateEnum = {}));
export var MessageNewTaskStateEnum;
(function (MessageNewTaskStateEnum) {
    MessageNewTaskStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    MessageNewTaskStateEnum["Pending"] = "PENDING";
    MessageNewTaskStateEnum["Assigned"] = "ASSIGNED";
    MessageNewTaskStateEnum["Running"] = "RUNNING";
    MessageNewTaskStateEnum["Failed"] = "FAILED";
    MessageNewTaskStateEnum["Succeeded"] = "SUCCEEDED";
})(MessageNewTaskStateEnum || (MessageNewTaskStateEnum = {}));
export var MessageTypeEnum;
(function (MessageTypeEnum) {
    MessageTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    MessageTypeEnum["JobStateChanged"] = "JOB_STATE_CHANGED";
    MessageTypeEnum["TaskStateChanged"] = "TASK_STATE_CHANGED";
})(MessageTypeEnum || (MessageTypeEnum = {}));
// Message
/**
 * Message details. Describe the attribute that a message should have. Without specified message attributes, no message will be sent by default.
**/
var Message = /** @class */ (function (_super) {
    __extends(Message, _super);
    function Message() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=newJobState" }),
        __metadata("design:type", String)
    ], Message.prototype, "newJobState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=newTaskState" }),
        __metadata("design:type", String)
    ], Message.prototype, "newTaskState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Message.prototype, "type", void 0);
    return Message;
}(SpeakeasyBase));
export { Message };
