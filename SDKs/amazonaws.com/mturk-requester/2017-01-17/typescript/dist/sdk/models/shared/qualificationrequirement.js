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
import { HitAccessActionsEnum } from "./hitaccessactionsenum";
import { ComparatorEnum } from "./comparatorenum";
import { Locale } from "./locale";
// QualificationRequirement
/**
 *  The QualificationRequirement data structure describes a Qualification that a Worker must have before the Worker is allowed to accept a HIT. A requirement may optionally state that a Worker must have the Qualification in order to preview the HIT, or see the HIT in search results.
**/
var QualificationRequirement = /** @class */ (function (_super) {
    __extends(QualificationRequirement, _super);
    function QualificationRequirement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActionsGuarded" }),
        __metadata("design:type", String)
    ], QualificationRequirement.prototype, "actionsGuarded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Comparator" }),
        __metadata("design:type", String)
    ], QualificationRequirement.prototype, "comparator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IntegerValues" }),
        __metadata("design:type", Array)
    ], QualificationRequirement.prototype, "integerValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocaleValues", elemType: Locale }),
        __metadata("design:type", Array)
    ], QualificationRequirement.prototype, "localeValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=QualificationTypeId" }),
        __metadata("design:type", String)
    ], QualificationRequirement.prototype, "qualificationTypeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequiredToPreview" }),
        __metadata("design:type", Boolean)
    ], QualificationRequirement.prototype, "requiredToPreview", void 0);
    return QualificationRequirement;
}(SpeakeasyBase));
export { QualificationRequirement };
