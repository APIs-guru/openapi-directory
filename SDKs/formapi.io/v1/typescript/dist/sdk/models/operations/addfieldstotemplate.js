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
import * as shared from "../shared";
var AddFieldsToTemplatePathParams = /** @class */ (function (_super) {
    __extends(AddFieldsToTemplatePathParams, _super);
    function AddFieldsToTemplatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=template_id" }),
        __metadata("design:type", String)
    ], AddFieldsToTemplatePathParams.prototype, "templateId", void 0);
    return AddFieldsToTemplatePathParams;
}(SpeakeasyBase));
export { AddFieldsToTemplatePathParams };
export var AddFieldsToTemplateAddFieldsDataFieldsAlignmentEnum;
(function (AddFieldsToTemplateAddFieldsDataFieldsAlignmentEnum) {
    AddFieldsToTemplateAddFieldsDataFieldsAlignmentEnum["Left"] = "left";
    AddFieldsToTemplateAddFieldsDataFieldsAlignmentEnum["Center"] = "center";
    AddFieldsToTemplateAddFieldsDataFieldsAlignmentEnum["Right"] = "right";
})(AddFieldsToTemplateAddFieldsDataFieldsAlignmentEnum || (AddFieldsToTemplateAddFieldsDataFieldsAlignmentEnum = {}));
export var AddFieldsToTemplateAddFieldsDataFieldsCheckCharacterEnum;
(function (AddFieldsToTemplateAddFieldsDataFieldsCheckCharacterEnum) {
    AddFieldsToTemplateAddFieldsDataFieldsCheckCharacterEnum["AndNumber10003"] = "&#10003;";
    AddFieldsToTemplateAddFieldsDataFieldsCheckCharacterEnum["AndNumber10004"] = "&#10004;";
    AddFieldsToTemplateAddFieldsDataFieldsCheckCharacterEnum["AndNumber10006"] = "&#10006;";
    AddFieldsToTemplateAddFieldsDataFieldsCheckCharacterEnum["AndNumber10007"] = "&#10007;";
    AddFieldsToTemplateAddFieldsDataFieldsCheckCharacterEnum["AndNumber10008"] = "&#10008;";
})(AddFieldsToTemplateAddFieldsDataFieldsCheckCharacterEnum || (AddFieldsToTemplateAddFieldsDataFieldsCheckCharacterEnum = {}));
export var AddFieldsToTemplateAddFieldsDataFieldsDisplayTypeEnum;
(function (AddFieldsToTemplateAddFieldsDataFieldsDisplayTypeEnum) {
    AddFieldsToTemplateAddFieldsDataFieldsDisplayTypeEnum["Text"] = "text";
    AddFieldsToTemplateAddFieldsDataFieldsDisplayTypeEnum["Check"] = "check";
    AddFieldsToTemplateAddFieldsDataFieldsDisplayTypeEnum["Qrcode"] = "qrcode";
    AddFieldsToTemplateAddFieldsDataFieldsDisplayTypeEnum["Barcode"] = "barcode";
    AddFieldsToTemplateAddFieldsDataFieldsDisplayTypeEnum["Image"] = "image";
    AddFieldsToTemplateAddFieldsDataFieldsDisplayTypeEnum["Shape"] = "shape";
})(AddFieldsToTemplateAddFieldsDataFieldsDisplayTypeEnum || (AddFieldsToTemplateAddFieldsDataFieldsDisplayTypeEnum = {}));
export var AddFieldsToTemplateAddFieldsDataFieldsImageGravityEnum;
(function (AddFieldsToTemplateAddFieldsDataFieldsImageGravityEnum) {
    AddFieldsToTemplateAddFieldsDataFieldsImageGravityEnum["NorthWest"] = "NorthWest";
    AddFieldsToTemplateAddFieldsDataFieldsImageGravityEnum["North"] = "North";
    AddFieldsToTemplateAddFieldsDataFieldsImageGravityEnum["NorthEast"] = "NorthEast";
    AddFieldsToTemplateAddFieldsDataFieldsImageGravityEnum["West"] = "West";
    AddFieldsToTemplateAddFieldsDataFieldsImageGravityEnum["Center"] = "Center";
    AddFieldsToTemplateAddFieldsDataFieldsImageGravityEnum["East"] = "East";
    AddFieldsToTemplateAddFieldsDataFieldsImageGravityEnum["SouthWest"] = "SouthWest";
    AddFieldsToTemplateAddFieldsDataFieldsImageGravityEnum["South"] = "South";
    AddFieldsToTemplateAddFieldsDataFieldsImageGravityEnum["SouthEast"] = "SouthEast";
})(AddFieldsToTemplateAddFieldsDataFieldsImageGravityEnum || (AddFieldsToTemplateAddFieldsDataFieldsImageGravityEnum = {}));
export var AddFieldsToTemplateAddFieldsDataFieldsImageScaleTypeEnum;
(function (AddFieldsToTemplateAddFieldsDataFieldsImageScaleTypeEnum) {
    AddFieldsToTemplateAddFieldsDataFieldsImageScaleTypeEnum["Fit"] = "fit";
    AddFieldsToTemplateAddFieldsDataFieldsImageScaleTypeEnum["Fill"] = "fill";
    AddFieldsToTemplateAddFieldsDataFieldsImageScaleTypeEnum["Stretch"] = "stretch";
})(AddFieldsToTemplateAddFieldsDataFieldsImageScaleTypeEnum || (AddFieldsToTemplateAddFieldsDataFieldsImageScaleTypeEnum = {}));
export var AddFieldsToTemplateAddFieldsDataFieldsNumberConditionTypeEnum;
(function (AddFieldsToTemplateAddFieldsDataFieldsNumberConditionTypeEnum) {
    AddFieldsToTemplateAddFieldsDataFieldsNumberConditionTypeEnum["Equals"] = "equals";
    AddFieldsToTemplateAddFieldsDataFieldsNumberConditionTypeEnum["Range"] = "range";
    AddFieldsToTemplateAddFieldsDataFieldsNumberConditionTypeEnum["Gte"] = "gte";
    AddFieldsToTemplateAddFieldsDataFieldsNumberConditionTypeEnum["Gt"] = "gt";
    AddFieldsToTemplateAddFieldsDataFieldsNumberConditionTypeEnum["Lte"] = "lte";
    AddFieldsToTemplateAddFieldsDataFieldsNumberConditionTypeEnum["Lt"] = "lt";
})(AddFieldsToTemplateAddFieldsDataFieldsNumberConditionTypeEnum || (AddFieldsToTemplateAddFieldsDataFieldsNumberConditionTypeEnum = {}));
export var AddFieldsToTemplateAddFieldsDataFieldsOverflowEnum;
(function (AddFieldsToTemplateAddFieldsDataFieldsOverflowEnum) {
    AddFieldsToTemplateAddFieldsDataFieldsOverflowEnum["ShrinkToFit"] = "shrink_to_fit";
    AddFieldsToTemplateAddFieldsDataFieldsOverflowEnum["Truncate"] = "truncate";
})(AddFieldsToTemplateAddFieldsDataFieldsOverflowEnum || (AddFieldsToTemplateAddFieldsDataFieldsOverflowEnum = {}));
export var AddFieldsToTemplateAddFieldsDataFieldsShapeTypeEnum;
(function (AddFieldsToTemplateAddFieldsDataFieldsShapeTypeEnum) {
    AddFieldsToTemplateAddFieldsDataFieldsShapeTypeEnum["Square"] = "square";
    AddFieldsToTemplateAddFieldsDataFieldsShapeTypeEnum["Rectangle"] = "rectangle";
    AddFieldsToTemplateAddFieldsDataFieldsShapeTypeEnum["Circle"] = "circle";
    AddFieldsToTemplateAddFieldsDataFieldsShapeTypeEnum["Ellipse"] = "ellipse";
})(AddFieldsToTemplateAddFieldsDataFieldsShapeTypeEnum || (AddFieldsToTemplateAddFieldsDataFieldsShapeTypeEnum = {}));
export var AddFieldsToTemplateAddFieldsDataFieldsStringConditionTypeEnum;
(function (AddFieldsToTemplateAddFieldsDataFieldsStringConditionTypeEnum) {
    AddFieldsToTemplateAddFieldsDataFieldsStringConditionTypeEnum["Equals"] = "equals";
    AddFieldsToTemplateAddFieldsDataFieldsStringConditionTypeEnum["Contains"] = "contains";
    AddFieldsToTemplateAddFieldsDataFieldsStringConditionTypeEnum["StartsWith"] = "starts_with";
    AddFieldsToTemplateAddFieldsDataFieldsStringConditionTypeEnum["EndsWith"] = "ends_with";
    AddFieldsToTemplateAddFieldsDataFieldsStringConditionTypeEnum["Regex"] = "regex";
})(AddFieldsToTemplateAddFieldsDataFieldsStringConditionTypeEnum || (AddFieldsToTemplateAddFieldsDataFieldsStringConditionTypeEnum = {}));
export var AddFieldsToTemplateAddFieldsDataFieldsTypeEnum;
(function (AddFieldsToTemplateAddFieldsDataFieldsTypeEnum) {
    AddFieldsToTemplateAddFieldsDataFieldsTypeEnum["String"] = "string";
    AddFieldsToTemplateAddFieldsDataFieldsTypeEnum["Number"] = "number";
    AddFieldsToTemplateAddFieldsDataFieldsTypeEnum["Boolean"] = "boolean";
    AddFieldsToTemplateAddFieldsDataFieldsTypeEnum["Date"] = "date";
    AddFieldsToTemplateAddFieldsDataFieldsTypeEnum["Address"] = "address";
    AddFieldsToTemplateAddFieldsDataFieldsTypeEnum["Country"] = "country";
    AddFieldsToTemplateAddFieldsDataFieldsTypeEnum["Email"] = "email";
    AddFieldsToTemplateAddFieldsDataFieldsTypeEnum["Url"] = "url";
    AddFieldsToTemplateAddFieldsDataFieldsTypeEnum["Image"] = "image";
    AddFieldsToTemplateAddFieldsDataFieldsTypeEnum["Signature"] = "signature";
    AddFieldsToTemplateAddFieldsDataFieldsTypeEnum["Barcode"] = "barcode";
    AddFieldsToTemplateAddFieldsDataFieldsTypeEnum["Combined"] = "combined";
})(AddFieldsToTemplateAddFieldsDataFieldsTypeEnum || (AddFieldsToTemplateAddFieldsDataFieldsTypeEnum = {}));
export var AddFieldsToTemplateAddFieldsDataFieldsVAlignmentEnum;
(function (AddFieldsToTemplateAddFieldsDataFieldsVAlignmentEnum) {
    AddFieldsToTemplateAddFieldsDataFieldsVAlignmentEnum["Bottom"] = "bottom";
    AddFieldsToTemplateAddFieldsDataFieldsVAlignmentEnum["Center"] = "center";
    AddFieldsToTemplateAddFieldsDataFieldsVAlignmentEnum["Top"] = "top";
})(AddFieldsToTemplateAddFieldsDataFieldsVAlignmentEnum || (AddFieldsToTemplateAddFieldsDataFieldsVAlignmentEnum = {}));
var AddFieldsToTemplateAddFieldsDataFields = /** @class */ (function (_super) {
    __extends(AddFieldsToTemplateAddFieldsDataFields, _super);
    function AddFieldsToTemplateAddFieldsDataFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alignment" }),
        __metadata("design:type", String)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "alignment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoCalculateMaxLength" }),
        __metadata("design:type", Boolean)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "autoCalculateMaxLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backgroundColor" }),
        __metadata("design:type", String)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "backgroundColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backgroundColorFieldName" }),
        __metadata("design:type", String)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "backgroundColorFieldName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backgroundColorFieldRequired" }),
        __metadata("design:type", Boolean)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "backgroundColorFieldRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=barcodeSymbology" }),
        __metadata("design:type", String)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "barcodeSymbology", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bold" }),
        __metadata("design:type", Boolean)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "bold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=characterSpacing" }),
        __metadata("design:type", Number)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "characterSpacing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checkCharacter" }),
        __metadata("design:type", String)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "checkCharacter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checkColor" }),
        __metadata("design:type", String)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "checkColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checkColorFieldName" }),
        __metadata("design:type", String)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "checkColorFieldName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checkColorFieldRequired" }),
        __metadata("design:type", Boolean)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "checkColorFieldRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=colorFieldName" }),
        __metadata("design:type", String)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "colorFieldName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=colorFieldRequired" }),
        __metadata("design:type", Boolean)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "colorFieldRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comb" }),
        __metadata("design:type", Boolean)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "comb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=combNumberOfCells" }),
        __metadata("design:type", Number)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "combNumberOfCells", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=combValueOffset" }),
        __metadata("design:type", Number)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "combValueOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=combinedFieldFormat" }),
        __metadata("design:type", String)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "combinedFieldFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=combinedFieldNames" }),
        __metadata("design:type", String)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "combinedFieldNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=combinedFieldSeparator" }),
        __metadata("design:type", String)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "combinedFieldSeparator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=combinedFieldType" }),
        __metadata("design:type", String)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "combinedFieldType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=condition" }),
        __metadata("design:type", String)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "condition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", Boolean)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateTimeFormat" }),
        __metadata("design:type", String)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "dateTimeFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=decimalPlaces" }),
        __metadata("design:type", Number)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "decimalPlaces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=default" }),
        __metadata("design:type", String)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "default", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayType" }),
        __metadata("design:type", String)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "displayType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exclusiveMaximum" }),
        __metadata("design:type", Boolean)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "exclusiveMaximum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exclusiveMinimum" }),
        __metadata("design:type", Boolean)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "exclusiveMinimum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=falseText" }),
        __metadata("design:type", String)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "falseText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fontSize" }),
        __metadata("design:type", Number)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "fontSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hidden" }),
        __metadata("design:type", Boolean)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "hidden", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageGravity" }),
        __metadata("design:type", String)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "imageGravity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageScaleType" }),
        __metadata("design:type", String)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "imageScaleType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includeTime" }),
        __metadata("design:type", Boolean)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "includeTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integer" }),
        __metadata("design:type", Boolean)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "integer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invertBooleanCondition" }),
        __metadata("design:type", Boolean)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "invertBooleanCondition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxLength" }),
        __metadata("design:type", Number)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "maxLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximum" }),
        __metadata("design:type", Number)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "maximum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", String)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minLength" }),
        __metadata("design:type", Number)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "minLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimum" }),
        __metadata("design:type", Number)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "minimum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=multiline" }),
        __metadata("design:type", Boolean)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "multiline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=multilineLines" }),
        __metadata("design:type", Number)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "multilineLines", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numberConditionRangeExclusiveMax" }),
        __metadata("design:type", Boolean)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "numberConditionRangeExclusiveMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numberConditionRangeExclusiveMin" }),
        __metadata("design:type", Boolean)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "numberConditionRangeExclusiveMin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numberConditionRangeMax" }),
        __metadata("design:type", Number)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "numberConditionRangeMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numberConditionRangeMin" }),
        __metadata("design:type", Number)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "numberConditionRangeMin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numberConditionType" }),
        __metadata("design:type", String)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "numberConditionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=opacity" }),
        __metadata("design:type", Number)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "opacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=optionList" }),
        __metadata("design:type", String)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "optionList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=overflow" }),
        __metadata("design:type", String)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "overflow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=qrcodeColor" }),
        __metadata("design:type", String)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "qrcodeColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=qrcodeColorFieldName" }),
        __metadata("design:type", String)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "qrcodeColorFieldName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=qrcodeColorFieldRequired" }),
        __metadata("design:type", Boolean)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "qrcodeColorFieldRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=required" }),
        __metadata("design:type", Boolean)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "required", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rotation" }),
        __metadata("design:type", Number)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "rotation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shapeBorderColor" }),
        __metadata("design:type", String)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "shapeBorderColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shapeBorderColorFieldName" }),
        __metadata("design:type", String)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "shapeBorderColorFieldName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shapeBorderColorFieldRequired" }),
        __metadata("design:type", Boolean)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "shapeBorderColorFieldRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shapeBorderWidth" }),
        __metadata("design:type", Number)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "shapeBorderWidth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shapeFillColor" }),
        __metadata("design:type", String)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "shapeFillColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shapeFillColorFieldName" }),
        __metadata("design:type", String)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "shapeFillColorFieldName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shapeFillColorFieldRequired" }),
        __metadata("design:type", Boolean)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "shapeFillColorFieldRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shapeType" }),
        __metadata("design:type", String)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "shapeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=signatureAllowDraw" }),
        __metadata("design:type", Boolean)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "signatureAllowDraw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=signatureAllowType" }),
        __metadata("design:type", Boolean)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "signatureAllowType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=static" }),
        __metadata("design:type", Boolean)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "static", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=strikethrough" }),
        __metadata("design:type", Boolean)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "strikethrough", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stringConditionType" }),
        __metadata("design:type", String)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "stringConditionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trueText" }),
        __metadata("design:type", String)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "trueText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=typeface" }),
        __metadata("design:type", String)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "typeface", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uppercase" }),
        __metadata("design:type", Boolean)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "uppercase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vAlignment" }),
        __metadata("design:type", String)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "vAlignment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "width", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=x" }),
        __metadata("design:type", Number)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "x", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=y" }),
        __metadata("design:type", Number)
    ], AddFieldsToTemplateAddFieldsDataFields.prototype, "y", void 0);
    return AddFieldsToTemplateAddFieldsDataFields;
}(SpeakeasyBase));
export { AddFieldsToTemplateAddFieldsDataFields };
var AddFieldsToTemplateAddFieldsData = /** @class */ (function (_super) {
    __extends(AddFieldsToTemplateAddFieldsData, _super);
    function AddFieldsToTemplateAddFieldsData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fields", elemType: AddFieldsToTemplateAddFieldsDataFields }),
        __metadata("design:type", Array)
    ], AddFieldsToTemplateAddFieldsData.prototype, "fields", void 0);
    return AddFieldsToTemplateAddFieldsData;
}(SpeakeasyBase));
export { AddFieldsToTemplateAddFieldsData };
var AddFieldsToTemplateSecurity = /** @class */ (function (_super) {
    __extends(AddFieldsToTemplateSecurity, _super);
    function AddFieldsToTemplateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeApiTokenBasic)
    ], AddFieldsToTemplateSecurity.prototype, "apiTokenBasic", void 0);
    return AddFieldsToTemplateSecurity;
}(SpeakeasyBase));
export { AddFieldsToTemplateSecurity };
export var AddFieldsToTemplateAddFieldsTemplateResponseStatusEnum;
(function (AddFieldsToTemplateAddFieldsTemplateResponseStatusEnum) {
    AddFieldsToTemplateAddFieldsTemplateResponseStatusEnum["Success"] = "success";
    AddFieldsToTemplateAddFieldsTemplateResponseStatusEnum["Error"] = "error";
})(AddFieldsToTemplateAddFieldsTemplateResponseStatusEnum || (AddFieldsToTemplateAddFieldsTemplateResponseStatusEnum = {}));
var AddFieldsToTemplateAddFieldsTemplateResponse = /** @class */ (function (_super) {
    __extends(AddFieldsToTemplateAddFieldsTemplateResponse, _super);
    function AddFieldsToTemplateAddFieldsTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors" }),
        __metadata("design:type", Array)
    ], AddFieldsToTemplateAddFieldsTemplateResponse.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=new_field_ids" }),
        __metadata("design:type", Array)
    ], AddFieldsToTemplateAddFieldsTemplateResponse.prototype, "newFieldIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AddFieldsToTemplateAddFieldsTemplateResponse.prototype, "status", void 0);
    return AddFieldsToTemplateAddFieldsTemplateResponse;
}(SpeakeasyBase));
export { AddFieldsToTemplateAddFieldsTemplateResponse };
var AddFieldsToTemplateRequest = /** @class */ (function (_super) {
    __extends(AddFieldsToTemplateRequest, _super);
    function AddFieldsToTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddFieldsToTemplatePathParams)
    ], AddFieldsToTemplateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddFieldsToTemplateAddFieldsData)
    ], AddFieldsToTemplateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddFieldsToTemplateSecurity)
    ], AddFieldsToTemplateRequest.prototype, "security", void 0);
    return AddFieldsToTemplateRequest;
}(SpeakeasyBase));
export { AddFieldsToTemplateRequest };
var AddFieldsToTemplateResponse = /** @class */ (function (_super) {
    __extends(AddFieldsToTemplateResponse, _super);
    function AddFieldsToTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddFieldsToTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddFieldsToTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddFieldsToTemplateAddFieldsTemplateResponse)
    ], AddFieldsToTemplateResponse.prototype, "addFieldsTemplateResponse", void 0);
    return AddFieldsToTemplateResponse;
}(SpeakeasyBase));
export { AddFieldsToTemplateResponse };
