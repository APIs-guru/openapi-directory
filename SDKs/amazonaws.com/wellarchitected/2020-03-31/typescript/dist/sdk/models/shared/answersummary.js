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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AnswerReasonEnum } from "./answerreasonenum";
import { RiskEnum } from "./riskenum";
// AnswerSummary
/**
 * An answer summary of a lens review in a workload.
**/
var AnswerSummary = /** @class */ (function (_super) {
    __extends(AnswerSummary, _super);
    function AnswerSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ChoiceAnswerSummaries", elemType: shared.ChoiceAnswerSummary }),
        __metadata("design:type", Array)
    ], AnswerSummary.prototype, "choiceAnswerSummaries", void 0);
    __decorate([
        Metadata({ data: "json, name=Choices", elemType: shared.Choice }),
        __metadata("design:type", Array)
    ], AnswerSummary.prototype, "choices", void 0);
    __decorate([
        Metadata({ data: "json, name=IsApplicable" }),
        __metadata("design:type", Boolean)
    ], AnswerSummary.prototype, "isApplicable", void 0);
    __decorate([
        Metadata({ data: "json, name=PillarId" }),
        __metadata("design:type", String)
    ], AnswerSummary.prototype, "pillarId", void 0);
    __decorate([
        Metadata({ data: "json, name=QuestionId" }),
        __metadata("design:type", String)
    ], AnswerSummary.prototype, "questionId", void 0);
    __decorate([
        Metadata({ data: "json, name=QuestionTitle" }),
        __metadata("design:type", String)
    ], AnswerSummary.prototype, "questionTitle", void 0);
    __decorate([
        Metadata({ data: "json, name=Reason" }),
        __metadata("design:type", String)
    ], AnswerSummary.prototype, "reason", void 0);
    __decorate([
        Metadata({ data: "json, name=Risk" }),
        __metadata("design:type", String)
    ], AnswerSummary.prototype, "risk", void 0);
    __decorate([
        Metadata({ data: "json, name=SelectedChoices" }),
        __metadata("design:type", Array)
    ], AnswerSummary.prototype, "selectedChoices", void 0);
    return AnswerSummary;
}(SpeakeasyBase));
export { AnswerSummary };
