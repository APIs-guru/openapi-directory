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
import { ContentModelsContentTypeDefaultValue } from "./contentmodelscontenttypedefaultvalue";
var ContentModelsContentTypeProperty = /** @class */ (function (_super) {
    __extends(ContentModelsContentTypeProperty, _super);
    function ContentModelsContentTypeProperty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ContentModelsContentTypeProperty.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentModelsContentTypeProperty.prototype, "bindToProperty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentModelsContentTypeProperty.prototype, "boundRegex", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: ContentModelsContentTypeProperty }),
        __metadata("design:type", Array)
    ], ContentModelsContentTypeProperty.prototype, "childProperties", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentModelsContentTypeProperty.prototype, "contentTypeAllowed", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentModelsContentTypeProperty.prototype, "datatype", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: ContentModelsContentTypeDefaultValue }),
        __metadata("design:type", Array)
    ], ContentModelsContentTypeProperty.prototype, "defaultValues", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], ContentModelsContentTypeProperty.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentModelsContentTypeProperty.prototype, "entitytype", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], ContentModelsContentTypeProperty.prototype, "fallback", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], ContentModelsContentTypeProperty.prototype, "isCombo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], ContentModelsContentTypeProperty.prototype, "isExternalAllowed", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], ContentModelsContentTypeProperty.prototype, "isImage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], ContentModelsContentTypeProperty.prototype, "isTitle", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], ContentModelsContentTypeProperty.prototype, "isVideo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], ContentModelsContentTypeProperty.prototype, "legalContentTypes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], ContentModelsContentTypeProperty.prototype, "localizable", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentModelsContentTypeProperty.prototype, "maxByteLength", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentModelsContentTypeProperty.prototype, "maxFileSize", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentModelsContentTypeProperty.prototype, "maxHeight", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentModelsContentTypeProperty.prototype, "maxLength", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentModelsContentTypeProperty.prototype, "maxWidth", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentModelsContentTypeProperty.prototype, "minHeight", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentModelsContentTypeProperty.prototype, "minWidth", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentModelsContentTypeProperty.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentModelsContentTypeProperty.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentModelsContentTypeProperty.prototype, "propertyDescription", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentModelsContentTypeProperty.prototype, "propertySection", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentModelsContentTypeProperty.prototype, "readableName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentModelsContentTypeProperty.prototype, "regexp", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ContentModelsContentTypeProperty.prototype, "representationSelection", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentModelsContentTypeProperty.prototype, "representationValidationString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], ContentModelsContentTypeProperty.prototype, "required", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentModelsContentTypeProperty.prototype, "rootPropertyName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentModelsContentTypeProperty.prototype, "rssAttribute", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], ContentModelsContentTypeProperty.prototype, "suppressProperty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentModelsContentTypeProperty.prototype, "validateAs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentModelsContentTypeProperty.prototype, "value", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], ContentModelsContentTypeProperty.prototype, "visible", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentModelsContentTypeProperty.prototype, "visibleDependency", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentModelsContentTypeProperty.prototype, "visibleOn", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentModelsContentTypeProperty.prototype, "weight", void 0);
    return ContentModelsContentTypeProperty;
}(SpeakeasyBase));
export { ContentModelsContentTypeProperty };
