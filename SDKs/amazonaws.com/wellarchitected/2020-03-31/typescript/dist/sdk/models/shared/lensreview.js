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
import { LensStatusEnum } from "./lensstatusenum";
import { PillarReviewSummary } from "./pillarreviewsummary";
// LensReview
/**
 * A lens review of a question.
**/
var LensReview = /** @class */ (function (_super) {
    __extends(LensReview, _super);
    function LensReview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LensAlias" }),
        __metadata("design:type", String)
    ], LensReview.prototype, "lensAlias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LensName" }),
        __metadata("design:type", String)
    ], LensReview.prototype, "lensName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LensStatus" }),
        __metadata("design:type", String)
    ], LensReview.prototype, "lensStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LensVersion" }),
        __metadata("design:type", String)
    ], LensReview.prototype, "lensVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], LensReview.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", String)
    ], LensReview.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PillarReviewSummaries", elemType: PillarReviewSummary }),
        __metadata("design:type", Array)
    ], LensReview.prototype, "pillarReviewSummaries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RiskCounts" }),
        __metadata("design:type", Map)
    ], LensReview.prototype, "riskCounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UpdatedAt" }),
        __metadata("design:type", Date)
    ], LensReview.prototype, "updatedAt", void 0);
    return LensReview;
}(SpeakeasyBase));
export { LensReview };
