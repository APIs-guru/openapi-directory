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
import { TrustedAdvisorCategorySpecificSummary } from "./trustedadvisorcategoryspecificsummary";
import { TrustedAdvisorResourcesSummary } from "./trustedadvisorresourcessummary";
// TrustedAdvisorCheckResult
/**
 * The results of a Trusted Advisor check returned by <a>DescribeTrustedAdvisorCheckResult</a>.
**/
var TrustedAdvisorCheckResult = /** @class */ (function (_super) {
    __extends(TrustedAdvisorCheckResult, _super);
    function TrustedAdvisorCheckResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=categorySpecificSummary" }),
        __metadata("design:type", TrustedAdvisorCategorySpecificSummary)
    ], TrustedAdvisorCheckResult.prototype, "categorySpecificSummary", void 0);
    __decorate([
        Metadata({ data: "json, name=checkId" }),
        __metadata("design:type", String)
    ], TrustedAdvisorCheckResult.prototype, "checkId", void 0);
    __decorate([
        Metadata({ data: "json, name=flaggedResources", elemType: shared.TrustedAdvisorResourceDetail }),
        __metadata("design:type", Array)
    ], TrustedAdvisorCheckResult.prototype, "flaggedResources", void 0);
    __decorate([
        Metadata({ data: "json, name=resourcesSummary" }),
        __metadata("design:type", TrustedAdvisorResourcesSummary)
    ], TrustedAdvisorCheckResult.prototype, "resourcesSummary", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], TrustedAdvisorCheckResult.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=timestamp" }),
        __metadata("design:type", String)
    ], TrustedAdvisorCheckResult.prototype, "timestamp", void 0);
    return TrustedAdvisorCheckResult;
}(SpeakeasyBase));
export { TrustedAdvisorCheckResult };
