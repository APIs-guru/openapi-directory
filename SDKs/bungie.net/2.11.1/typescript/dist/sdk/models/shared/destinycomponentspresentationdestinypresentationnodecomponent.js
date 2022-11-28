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
// DestinyComponentsPresentationDestinyPresentationNodeComponentObjective
/**
 * An optional property: presentation nodes MAY have objectives, which can be used to infer more human readable data about the progress. However, progressValue and completionValue ought to be considered the canonical values for progress on Progression Nodes.
**/
var DestinyComponentsPresentationDestinyPresentationNodeComponentObjective = /** @class */ (function (_super) {
    __extends(DestinyComponentsPresentationDestinyPresentationNodeComponentObjective, _super);
    function DestinyComponentsPresentationDestinyPresentationNodeComponentObjective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyComponentsPresentationDestinyPresentationNodeComponentObjective.prototype, "activityHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyComponentsPresentationDestinyPresentationNodeComponentObjective.prototype, "complete", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyComponentsPresentationDestinyPresentationNodeComponentObjective.prototype, "completionValue", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyComponentsPresentationDestinyPresentationNodeComponentObjective.prototype, "destinationHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyComponentsPresentationDestinyPresentationNodeComponentObjective.prototype, "objectiveHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyComponentsPresentationDestinyPresentationNodeComponentObjective.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyComponentsPresentationDestinyPresentationNodeComponentObjective.prototype, "visible", void 0);
    return DestinyComponentsPresentationDestinyPresentationNodeComponentObjective;
}(SpeakeasyBase));
export { DestinyComponentsPresentationDestinyPresentationNodeComponentObjective };
var DestinyComponentsPresentationDestinyPresentationNodeComponent = /** @class */ (function (_super) {
    __extends(DestinyComponentsPresentationDestinyPresentationNodeComponent, _super);
    function DestinyComponentsPresentationDestinyPresentationNodeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyComponentsPresentationDestinyPresentationNodeComponent.prototype, "completionValue", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyComponentsPresentationDestinyPresentationNodeComponentObjective)
    ], DestinyComponentsPresentationDestinyPresentationNodeComponent.prototype, "objective", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyComponentsPresentationDestinyPresentationNodeComponent.prototype, "progressValue", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyComponentsPresentationDestinyPresentationNodeComponent.prototype, "recordCategoryScore", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyComponentsPresentationDestinyPresentationNodeComponent.prototype, "state", void 0);
    return DestinyComponentsPresentationDestinyPresentationNodeComponent;
}(SpeakeasyBase));
export { DestinyComponentsPresentationDestinyPresentationNodeComponent };
