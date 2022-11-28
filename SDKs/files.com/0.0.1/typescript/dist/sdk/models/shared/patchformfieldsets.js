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
var PatchFormFieldSetsFormFields = /** @class */ (function (_super) {
    __extends(PatchFormFieldSetsFormFields, _super);
    function PatchFormFieldSetsFormFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=default_option" }),
        __metadata("design:type", String)
    ], PatchFormFieldSetsFormFields.prototype, "defaultOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=field_type" }),
        __metadata("design:type", String)
    ], PatchFormFieldSetsFormFields.prototype, "fieldType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=help_text" }),
        __metadata("design:type", String)
    ], PatchFormFieldSetsFormFields.prototype, "helpText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PatchFormFieldSetsFormFields.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], PatchFormFieldSetsFormFields.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options_for_select" }),
        __metadata("design:type", String)
    ], PatchFormFieldSetsFormFields.prototype, "optionsForSelect", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=required" }),
        __metadata("design:type", Boolean)
    ], PatchFormFieldSetsFormFields.prototype, "required", void 0);
    return PatchFormFieldSetsFormFields;
}(SpeakeasyBase));
export { PatchFormFieldSetsFormFields };
// PatchFormFieldSets
/**
 * Update Form Field Set
**/
var PatchFormFieldSets = /** @class */ (function (_super) {
    __extends(PatchFormFieldSets, _super);
    function PatchFormFieldSets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=form_fields", elemType: PatchFormFieldSetsFormFields }),
        __metadata("design:type", Array)
    ], PatchFormFieldSets.prototype, "formFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skip_company" }),
        __metadata("design:type", Boolean)
    ], PatchFormFieldSets.prototype, "skipCompany", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skip_email" }),
        __metadata("design:type", Boolean)
    ], PatchFormFieldSets.prototype, "skipEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skip_name" }),
        __metadata("design:type", Boolean)
    ], PatchFormFieldSets.prototype, "skipName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], PatchFormFieldSets.prototype, "title", void 0);
    return PatchFormFieldSets;
}(SpeakeasyBase));
export { PatchFormFieldSets };
