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
import { AssignmentStatusEnum } from "./assignmentstatusenum";
// Assignment
/**
 *  The Assignment data structure represents a single assignment of a HIT to a Worker. The assignment tracks the Worker's efforts to complete the HIT, and contains the results for later retrieval.
**/
var Assignment = /** @class */ (function (_super) {
    __extends(Assignment, _super);
    function Assignment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AcceptTime" }),
        __metadata("design:type", Date)
    ], Assignment.prototype, "acceptTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Answer" }),
        __metadata("design:type", String)
    ], Assignment.prototype, "answer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApprovalTime" }),
        __metadata("design:type", Date)
    ], Assignment.prototype, "approvalTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AssignmentId" }),
        __metadata("design:type", String)
    ], Assignment.prototype, "assignmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AssignmentStatus" }),
        __metadata("design:type", String)
    ], Assignment.prototype, "assignmentStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoApprovalTime" }),
        __metadata("design:type", Date)
    ], Assignment.prototype, "autoApprovalTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Deadline" }),
        __metadata("design:type", Date)
    ], Assignment.prototype, "deadline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HITId" }),
        __metadata("design:type", String)
    ], Assignment.prototype, "hitId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RejectionTime" }),
        __metadata("design:type", Date)
    ], Assignment.prototype, "rejectionTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequesterFeedback" }),
        __metadata("design:type", String)
    ], Assignment.prototype, "requesterFeedback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubmitTime" }),
        __metadata("design:type", Date)
    ], Assignment.prototype, "submitTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WorkerId" }),
        __metadata("design:type", String)
    ], Assignment.prototype, "workerId", void 0);
    return Assignment;
}(SpeakeasyBase));
export { Assignment };
