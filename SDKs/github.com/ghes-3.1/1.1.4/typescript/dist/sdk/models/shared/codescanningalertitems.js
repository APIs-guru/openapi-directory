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
import { SimpleUser } from "./simpleuser";
import { CodeScanningAlertDismissedReasonEnum } from "./codescanningalertdismissedreasonenum";
import { CodeScanningAlertInstance } from "./codescanningalertinstance";
import { CodeScanningAlertRuleSummary } from "./codescanningalertrulesummary";
import { CodeScanningAlertStateEnum } from "./codescanningalertstateenum";
import { CodeScanningAnalysisTool } from "./codescanninganalysistool";
var CodeScanningAlertItems = /** @class */ (function (_super) {
    __extends(CodeScanningAlertItems, _super);
    function CodeScanningAlertItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], CodeScanningAlertItems.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dismissed_at" }),
        __metadata("design:type", Date)
    ], CodeScanningAlertItems.prototype, "dismissedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dismissed_by" }),
        __metadata("design:type", SimpleUser)
    ], CodeScanningAlertItems.prototype, "dismissedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dismissed_reason" }),
        __metadata("design:type", String)
    ], CodeScanningAlertItems.prototype, "dismissedReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], CodeScanningAlertItems.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instances_url" }),
        __metadata("design:type", String)
    ], CodeScanningAlertItems.prototype, "instancesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=most_recent_instance" }),
        __metadata("design:type", CodeScanningAlertInstance)
    ], CodeScanningAlertItems.prototype, "mostRecentInstance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=number" }),
        __metadata("design:type", Number)
    ], CodeScanningAlertItems.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rule" }),
        __metadata("design:type", CodeScanningAlertRuleSummary)
    ], CodeScanningAlertItems.prototype, "rule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], CodeScanningAlertItems.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tool" }),
        __metadata("design:type", CodeScanningAnalysisTool)
    ], CodeScanningAlertItems.prototype, "tool", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], CodeScanningAlertItems.prototype, "url", void 0);
    return CodeScanningAlertItems;
}(SpeakeasyBase));
export { CodeScanningAlertItems };
