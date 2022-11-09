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
// Answer
/**
 * An answer of the question.
**/
var Answer = /** @class */ (function (_super) {
    __extends(Answer, _super);
    function Answer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ChoiceAnswers", elemType: shared.ChoiceAnswer }),
        __metadata("design:type", Array)
    ], Answer.prototype, "choiceAnswers", void 0);
    __decorate([
        Metadata({ data: "json, name=Choices", elemType: shared.Choice }),
        __metadata("design:type", Array)
    ], Answer.prototype, "choices", void 0);
    __decorate([
        Metadata({ data: "json, name=HelpfulResourceUrl" }),
        __metadata("design:type", String)
    ], Answer.prototype, "helpfulResourceUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=ImprovementPlanUrl" }),
        __metadata("design:type", String)
    ], Answer.prototype, "improvementPlanUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=IsApplicable" }),
        __metadata("design:type", Boolean)
    ], Answer.prototype, "isApplicable", void 0);
    __decorate([
        Metadata({ data: "json, name=Notes" }),
        __metadata("design:type", String)
    ], Answer.prototype, "notes", void 0);
    __decorate([
        Metadata({ data: "json, name=PillarId" }),
        __metadata("design:type", String)
    ], Answer.prototype, "pillarId", void 0);
    __decorate([
        Metadata({ data: "json, name=QuestionDescription" }),
        __metadata("design:type", String)
    ], Answer.prototype, "questionDescription", void 0);
    __decorate([
        Metadata({ data: "json, name=QuestionId" }),
        __metadata("design:type", String)
    ], Answer.prototype, "questionId", void 0);
    __decorate([
        Metadata({ data: "json, name=QuestionTitle" }),
        __metadata("design:type", String)
    ], Answer.prototype, "questionTitle", void 0);
    __decorate([
        Metadata({ data: "json, name=Reason" }),
        __metadata("design:type", String)
    ], Answer.prototype, "reason", void 0);
    __decorate([
        Metadata({ data: "json, name=Risk" }),
        __metadata("design:type", String)
    ], Answer.prototype, "risk", void 0);
    __decorate([
        Metadata({ data: "json, name=SelectedChoices" }),
        __metadata("design:type", Array)
    ], Answer.prototype, "selectedChoices", void 0);
    return Answer;
}(SpeakeasyBase));
export { Answer };
