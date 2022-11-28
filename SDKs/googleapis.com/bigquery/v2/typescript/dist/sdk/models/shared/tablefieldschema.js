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
// TableFieldSchemaCategories
/**
 * [Optional] The categories attached to this field, used for field-level access control.
**/
var TableFieldSchemaCategories = /** @class */ (function (_super) {
    __extends(TableFieldSchemaCategories, _super);
    function TableFieldSchemaCategories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=names" }),
        __metadata("design:type", Array)
    ], TableFieldSchemaCategories.prototype, "names", void 0);
    return TableFieldSchemaCategories;
}(SpeakeasyBase));
export { TableFieldSchemaCategories };
var TableFieldSchemaPolicyTags = /** @class */ (function (_super) {
    __extends(TableFieldSchemaPolicyTags, _super);
    function TableFieldSchemaPolicyTags() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=names" }),
        __metadata("design:type", Array)
    ], TableFieldSchemaPolicyTags.prototype, "names", void 0);
    return TableFieldSchemaPolicyTags;
}(SpeakeasyBase));
export { TableFieldSchemaPolicyTags };
var TableFieldSchema = /** @class */ (function (_super) {
    __extends(TableFieldSchema, _super);
    function TableFieldSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categories" }),
        __metadata("design:type", TableFieldSchemaCategories)
    ], TableFieldSchema.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collation" }),
        __metadata("design:type", String)
    ], TableFieldSchema.prototype, "collation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultValueExpression" }),
        __metadata("design:type", String)
    ], TableFieldSchema.prototype, "defaultValueExpression", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], TableFieldSchema.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fields", elemType: TableFieldSchema }),
        __metadata("design:type", Array)
    ], TableFieldSchema.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxLength" }),
        __metadata("design:type", String)
    ], TableFieldSchema.prototype, "maxLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mode" }),
        __metadata("design:type", String)
    ], TableFieldSchema.prototype, "mode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TableFieldSchema.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policyTags" }),
        __metadata("design:type", TableFieldSchemaPolicyTags)
    ], TableFieldSchema.prototype, "policyTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=precision" }),
        __metadata("design:type", String)
    ], TableFieldSchema.prototype, "precision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scale" }),
        __metadata("design:type", String)
    ], TableFieldSchema.prototype, "scale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TableFieldSchema.prototype, "type", void 0);
    return TableFieldSchema;
}(SpeakeasyBase));
export { TableFieldSchema };
