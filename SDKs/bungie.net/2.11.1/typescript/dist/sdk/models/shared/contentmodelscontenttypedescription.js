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
import { ContentModelsContentPreview } from "./contentmodelscontentpreview";
import { ContentModelsContentTypeProperty } from "./contentmodelscontenttypeproperty";
import { ContentModelsContentTypePropertySection } from "./contentmodelscontenttypepropertysection";
import { ContentModelsTagMetadataDefinition } from "./contentmodelstagmetadatadefinition";
import { ContentModelsTagMetadataItem } from "./contentmodelstagmetadataitem";
var ContentModelsContentTypeDescription = /** @class */ (function (_super) {
    __extends(ContentModelsContentTypeDescription, _super);
    function ContentModelsContentTypeDescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], ContentModelsContentTypeDescription.prototype, "allowComments", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], ContentModelsContentTypeDescription.prototype, "autoEnglishPropertyFallback", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentModelsContentTypeDescription.prototype, "bindIdentifierToProperty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentModelsContentTypeDescription.prototype, "boundRegex", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], ContentModelsContentTypeDescription.prototype, "bulkUploadable", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentModelsContentTypeDescription.prototype, "cType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentModelsContentTypeDescription.prototype, "contentDescription", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], ContentModelsContentTypeDescription.prototype, "forceIdentifierBinding", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentModelsContentTypeDescription.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentModelsContentTypeDescription.prototype, "previewImage", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: ContentModelsContentPreview }),
        __metadata("design:type", Array)
    ], ContentModelsContentTypeDescription.prototype, "previews", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentModelsContentTypeDescription.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: ContentModelsContentTypeProperty }),
        __metadata("design:type", Array)
    ], ContentModelsContentTypeDescription.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: ContentModelsContentTypePropertySection }),
        __metadata("design:type", Array)
    ], ContentModelsContentTypeDescription.prototype, "propertySections", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentModelsContentTypeDescription.prototype, "reminder", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], ContentModelsContentTypeDescription.prototype, "showInContentEditor", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], ContentModelsContentTypeDescription.prototype, "suppressCmsPath", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: ContentModelsTagMetadataDefinition }),
        __metadata("design:type", Array)
    ], ContentModelsContentTypeDescription.prototype, "tagMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: ContentModelsTagMetadataItem }),
        __metadata("design:type", Map)
    ], ContentModelsContentTypeDescription.prototype, "tagMetadataItems", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentModelsContentTypeDescription.prototype, "typeOf", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], ContentModelsContentTypeDescription.prototype, "usageExamples", void 0);
    return ContentModelsContentTypeDescription;
}(SpeakeasyBase));
export { ContentModelsContentTypeDescription };
