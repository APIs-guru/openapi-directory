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
import { CurrencyEnum } from "./currencyenum";
var PipelineStagesInput = /** @class */ (function (_super) {
    __extends(PipelineStagesInput, _super);
    function PipelineStagesInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_order" }),
        __metadata("design:type", Number)
    ], PipelineStagesInput.prototype, "displayOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PipelineStagesInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], PipelineStagesInput.prototype, "value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=win_probability" }),
        __metadata("design:type", Number)
    ], PipelineStagesInput.prototype, "winProbability", void 0);
    return PipelineStagesInput;
}(SpeakeasyBase));
export { PipelineStagesInput };
var PipelineStages = /** @class */ (function (_super) {
    __extends(PipelineStages, _super);
    function PipelineStages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_order" }),
        __metadata("design:type", Number)
    ], PipelineStages.prototype, "displayOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PipelineStages.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PipelineStages.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], PipelineStages.prototype, "value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=win_probability" }),
        __metadata("design:type", Number)
    ], PipelineStages.prototype, "winProbability", void 0);
    return PipelineStages;
}(SpeakeasyBase));
export { PipelineStages };
var PipelineInput = /** @class */ (function (_super) {
    __extends(PipelineInput, _super);
    function PipelineInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], PipelineInput.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], PipelineInput.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_order" }),
        __metadata("design:type", Number)
    ], PipelineInput.prototype, "displayOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PipelineInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PipelineInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stages", elemType: PipelineStagesInput }),
        __metadata("design:type", Array)
    ], PipelineInput.prototype, "stages", void 0);
    return PipelineInput;
}(SpeakeasyBase));
export { PipelineInput };
var Pipeline = /** @class */ (function (_super) {
    __extends(Pipeline, _super);
    function Pipeline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], Pipeline.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], Pipeline.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], Pipeline.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_order" }),
        __metadata("design:type", Number)
    ], Pipeline.prototype, "displayOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Pipeline.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Pipeline.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stages", elemType: PipelineStages }),
        __metadata("design:type", Array)
    ], Pipeline.prototype, "stages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], Pipeline.prototype, "updatedAt", void 0);
    return Pipeline;
}(SpeakeasyBase));
export { Pipeline };
