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
import { ReviewPolicy } from "./reviewpolicy";
import { HitLayoutParameter } from "./hitlayoutparameter";
import { QualificationRequirement } from "./qualificationrequirement";
var CreateHitRequest = /** @class */ (function (_super) {
    __extends(CreateHitRequest, _super);
    function CreateHitRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AssignmentDurationInSeconds" }),
        __metadata("design:type", Number)
    ], CreateHitRequest.prototype, "assignmentDurationInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AssignmentReviewPolicy" }),
        __metadata("design:type", ReviewPolicy)
    ], CreateHitRequest.prototype, "assignmentReviewPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoApprovalDelayInSeconds" }),
        __metadata("design:type", Number)
    ], CreateHitRequest.prototype, "autoApprovalDelayInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], CreateHitRequest.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HITLayoutId" }),
        __metadata("design:type", String)
    ], CreateHitRequest.prototype, "hitLayoutId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HITLayoutParameters", elemType: HitLayoutParameter }),
        __metadata("design:type", Array)
    ], CreateHitRequest.prototype, "hitLayoutParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HITReviewPolicy" }),
        __metadata("design:type", ReviewPolicy)
    ], CreateHitRequest.prototype, "hitReviewPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Keywords" }),
        __metadata("design:type", String)
    ], CreateHitRequest.prototype, "keywords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LifetimeInSeconds" }),
        __metadata("design:type", Number)
    ], CreateHitRequest.prototype, "lifetimeInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxAssignments" }),
        __metadata("design:type", Number)
    ], CreateHitRequest.prototype, "maxAssignments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=QualificationRequirements", elemType: QualificationRequirement }),
        __metadata("design:type", Array)
    ], CreateHitRequest.prototype, "qualificationRequirements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Question" }),
        __metadata("design:type", String)
    ], CreateHitRequest.prototype, "question", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequesterAnnotation" }),
        __metadata("design:type", String)
    ], CreateHitRequest.prototype, "requesterAnnotation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Reward" }),
        __metadata("design:type", String)
    ], CreateHitRequest.prototype, "reward", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Title" }),
        __metadata("design:type", String)
    ], CreateHitRequest.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UniqueRequestToken" }),
        __metadata("design:type", String)
    ], CreateHitRequest.prototype, "uniqueRequestToken", void 0);
    return CreateHitRequest;
}(SpeakeasyBase));
export { CreateHitRequest };
