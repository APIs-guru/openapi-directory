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
// FormFieldDefinition
/**
 * Definition of a form field for OCR data extraction from images
**/
var FormFieldDefinition = /** @class */ (function (_super) {
    __extends(FormFieldDefinition, _super);
    function FormFieldDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllowNumericDigits" }),
        __metadata("design:type", Boolean)
    ], FormFieldDefinition.prototype, "allowNumericDigits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AlternateAnchor" }),
        __metadata("design:type", String)
    ], FormFieldDefinition.prototype, "alternateAnchor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnchorMode" }),
        __metadata("design:type", String)
    ], FormFieldDefinition.prototype, "anchorMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BottomAnchor" }),
        __metadata("design:type", String)
    ], FormFieldDefinition.prototype, "bottomAnchor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DataType" }),
        __metadata("design:type", String)
    ], FormFieldDefinition.prototype, "dataType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FieldID" }),
        __metadata("design:type", String)
    ], FormFieldDefinition.prototype, "fieldId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HorizontalAlignmentType" }),
        __metadata("design:type", String)
    ], FormFieldDefinition.prototype, "horizontalAlignmentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Ignore" }),
        __metadata("design:type", Array)
    ], FormFieldDefinition.prototype, "ignore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LeftAnchor" }),
        __metadata("design:type", String)
    ], FormFieldDefinition.prototype, "leftAnchor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumCharacterCount" }),
        __metadata("design:type", Number)
    ], FormFieldDefinition.prototype, "minimumCharacterCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Options" }),
        __metadata("design:type", String)
    ], FormFieldDefinition.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetDigitCount" }),
        __metadata("design:type", Number)
    ], FormFieldDefinition.prototype, "targetDigitCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetFieldHeight_Relative" }),
        __metadata("design:type", Number)
    ], FormFieldDefinition.prototype, "targetFieldHeightRelative", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetFieldHorizontalAdjustment" }),
        __metadata("design:type", Number)
    ], FormFieldDefinition.prototype, "targetFieldHorizontalAdjustment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetFieldVerticalAdjustment" }),
        __metadata("design:type", Number)
    ], FormFieldDefinition.prototype, "targetFieldVerticalAdjustment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetFieldWidth_Relative" }),
        __metadata("design:type", Number)
    ], FormFieldDefinition.prototype, "targetFieldWidthRelative", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TopAnchor" }),
        __metadata("design:type", String)
    ], FormFieldDefinition.prototype, "topAnchor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VerticalAlignmentType" }),
        __metadata("design:type", String)
    ], FormFieldDefinition.prototype, "verticalAlignmentType", void 0);
    return FormFieldDefinition;
}(SpeakeasyBase));
export { FormFieldDefinition };
