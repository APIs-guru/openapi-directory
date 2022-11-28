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
// SchemaFieldSpecNumericIndexingSpec
/**
 * Indexing spec for a numeric field. By default, only exact match queries will be supported for numeric fields. Setting the `numericIndexingSpec` allows range queries to be supported.
**/
var SchemaFieldSpecNumericIndexingSpec = /** @class */ (function (_super) {
    __extends(SchemaFieldSpecNumericIndexingSpec, _super);
    function SchemaFieldSpecNumericIndexingSpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxValue" }),
        __metadata("design:type", Number)
    ], SchemaFieldSpecNumericIndexingSpec.prototype, "maxValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minValue" }),
        __metadata("design:type", Number)
    ], SchemaFieldSpecNumericIndexingSpec.prototype, "minValue", void 0);
    return SchemaFieldSpecNumericIndexingSpec;
}(SpeakeasyBase));
export { SchemaFieldSpecNumericIndexingSpec };
// SchemaFieldSpec
/**
 * You can use schemas to add custom fields to user profiles. You can use these fields to store information such as the projects your users work on, their physical locations, their hire dates, or whatever else fits your business needs. For more information, see [Custom User Fields](/admin-sdk/directory/v1/guides/manage-schemas).
**/
var SchemaFieldSpec = /** @class */ (function (_super) {
    __extends(SchemaFieldSpec, _super);
    function SchemaFieldSpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], SchemaFieldSpec.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], SchemaFieldSpec.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fieldId" }),
        __metadata("design:type", String)
    ], SchemaFieldSpec.prototype, "fieldId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fieldName" }),
        __metadata("design:type", String)
    ], SchemaFieldSpec.prototype, "fieldName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fieldType" }),
        __metadata("design:type", String)
    ], SchemaFieldSpec.prototype, "fieldType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indexed" }),
        __metadata("design:type", Boolean)
    ], SchemaFieldSpec.prototype, "indexed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], SchemaFieldSpec.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=multiValued" }),
        __metadata("design:type", Boolean)
    ], SchemaFieldSpec.prototype, "multiValued", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numericIndexingSpec" }),
        __metadata("design:type", SchemaFieldSpecNumericIndexingSpec)
    ], SchemaFieldSpec.prototype, "numericIndexingSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=readAccessType" }),
        __metadata("design:type", String)
    ], SchemaFieldSpec.prototype, "readAccessType", void 0);
    return SchemaFieldSpec;
}(SpeakeasyBase));
export { SchemaFieldSpec };
