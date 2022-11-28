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
var PostFormFieldSetsFormFields = /** @class */ (function (_super) {
    __extends(PostFormFieldSetsFormFields, _super);
    function PostFormFieldSetsFormFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=default_option" }),
        __metadata("design:type", String)
    ], PostFormFieldSetsFormFields.prototype, "defaultOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=field_type" }),
        __metadata("design:type", String)
    ], PostFormFieldSetsFormFields.prototype, "fieldType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=help_text" }),
        __metadata("design:type", String)
    ], PostFormFieldSetsFormFields.prototype, "helpText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostFormFieldSetsFormFields.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], PostFormFieldSetsFormFields.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options_for_select" }),
        __metadata("design:type", String)
    ], PostFormFieldSetsFormFields.prototype, "optionsForSelect", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=required" }),
        __metadata("design:type", Boolean)
    ], PostFormFieldSetsFormFields.prototype, "required", void 0);
    return PostFormFieldSetsFormFields;
}(SpeakeasyBase));
export { PostFormFieldSetsFormFields };
// PostFormFieldSets
/**
 * Create Form Field Set
**/
var PostFormFieldSets = /** @class */ (function (_super) {
    __extends(PostFormFieldSets, _super);
    function PostFormFieldSets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=form_fields", elemType: PostFormFieldSetsFormFields }),
        __metadata("design:type", Array)
    ], PostFormFieldSets.prototype, "formFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skip_company" }),
        __metadata("design:type", Boolean)
    ], PostFormFieldSets.prototype, "skipCompany", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skip_email" }),
        __metadata("design:type", Boolean)
    ], PostFormFieldSets.prototype, "skipEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skip_name" }),
        __metadata("design:type", Boolean)
    ], PostFormFieldSets.prototype, "skipName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], PostFormFieldSets.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_id" }),
        __metadata("design:type", Number)
    ], PostFormFieldSets.prototype, "userId", void 0);
    return PostFormFieldSets;
}(SpeakeasyBase));
export { PostFormFieldSets };
