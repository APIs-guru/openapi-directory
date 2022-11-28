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
export var FormFieldEntityFieldTypeEnum;
(function (FormFieldEntityFieldTypeEnum) {
    FormFieldEntityFieldTypeEnum["Text"] = "text";
    FormFieldEntityFieldTypeEnum["TextArea"] = "text_area";
    FormFieldEntityFieldTypeEnum["Dropdown"] = "dropdown";
    FormFieldEntityFieldTypeEnum["Radio"] = "radio";
})(FormFieldEntityFieldTypeEnum || (FormFieldEntityFieldTypeEnum = {}));
var FormFieldEntity = /** @class */ (function (_super) {
    __extends(FormFieldEntity, _super);
    function FormFieldEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=default_option" }),
        __metadata("design:type", String)
    ], FormFieldEntity.prototype, "defaultOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=field_type" }),
        __metadata("design:type", String)
    ], FormFieldEntity.prototype, "fieldType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=form_field_set_id" }),
        __metadata("design:type", Number)
    ], FormFieldEntity.prototype, "formFieldSetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=help_text" }),
        __metadata("design:type", String)
    ], FormFieldEntity.prototype, "helpText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], FormFieldEntity.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], FormFieldEntity.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options_for_select" }),
        __metadata("design:type", String)
    ], FormFieldEntity.prototype, "optionsForSelect", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=required" }),
        __metadata("design:type", Boolean)
    ], FormFieldEntity.prototype, "required", void 0);
    return FormFieldEntity;
}(SpeakeasyBase));
export { FormFieldEntity };
