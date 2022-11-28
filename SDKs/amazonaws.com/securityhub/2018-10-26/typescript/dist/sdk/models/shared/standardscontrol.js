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
import { ControlStatusEnum } from "./controlstatusenum";
import { SeverityRatingEnum } from "./severityratingenum";
// StandardsControl
/**
 * Details for an individual security standard control.
**/
var StandardsControl = /** @class */ (function (_super) {
    __extends(StandardsControl, _super);
    function StandardsControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ControlId" }),
        __metadata("design:type", String)
    ], StandardsControl.prototype, "controlId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ControlStatus" }),
        __metadata("design:type", String)
    ], StandardsControl.prototype, "controlStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ControlStatusUpdatedAt" }),
        __metadata("design:type", Date)
    ], StandardsControl.prototype, "controlStatusUpdatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], StandardsControl.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisabledReason" }),
        __metadata("design:type", String)
    ], StandardsControl.prototype, "disabledReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RelatedRequirements" }),
        __metadata("design:type", Array)
    ], StandardsControl.prototype, "relatedRequirements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemediationUrl" }),
        __metadata("design:type", String)
    ], StandardsControl.prototype, "remediationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SeverityRating" }),
        __metadata("design:type", String)
    ], StandardsControl.prototype, "severityRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StandardsControlArn" }),
        __metadata("design:type", String)
    ], StandardsControl.prototype, "standardsControlArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Title" }),
        __metadata("design:type", String)
    ], StandardsControl.prototype, "title", void 0);
    return StandardsControl;
}(SpeakeasyBase));
export { StandardsControl };
