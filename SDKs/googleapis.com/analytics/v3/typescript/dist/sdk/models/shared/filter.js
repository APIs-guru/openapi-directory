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
import { FilterExpression } from "./filterexpression";
// FilterAdvancedDetails
/**
 * Details for the filter of the type ADVANCED.
**/
var FilterAdvancedDetails = /** @class */ (function (_super) {
    __extends(FilterAdvancedDetails, _super);
    function FilterAdvancedDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=caseSensitive" }),
        __metadata("design:type", Boolean)
    ], FilterAdvancedDetails.prototype, "caseSensitive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extractA" }),
        __metadata("design:type", String)
    ], FilterAdvancedDetails.prototype, "extractA", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extractB" }),
        __metadata("design:type", String)
    ], FilterAdvancedDetails.prototype, "extractB", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fieldA" }),
        __metadata("design:type", String)
    ], FilterAdvancedDetails.prototype, "fieldA", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fieldAIndex" }),
        __metadata("design:type", Number)
    ], FilterAdvancedDetails.prototype, "fieldAIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fieldARequired" }),
        __metadata("design:type", Boolean)
    ], FilterAdvancedDetails.prototype, "fieldARequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fieldB" }),
        __metadata("design:type", String)
    ], FilterAdvancedDetails.prototype, "fieldB", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fieldBIndex" }),
        __metadata("design:type", Number)
    ], FilterAdvancedDetails.prototype, "fieldBIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fieldBRequired" }),
        __metadata("design:type", Boolean)
    ], FilterAdvancedDetails.prototype, "fieldBRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputConstructor" }),
        __metadata("design:type", String)
    ], FilterAdvancedDetails.prototype, "outputConstructor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputToField" }),
        __metadata("design:type", String)
    ], FilterAdvancedDetails.prototype, "outputToField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputToFieldIndex" }),
        __metadata("design:type", Number)
    ], FilterAdvancedDetails.prototype, "outputToFieldIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=overrideOutputField" }),
        __metadata("design:type", Boolean)
    ], FilterAdvancedDetails.prototype, "overrideOutputField", void 0);
    return FilterAdvancedDetails;
}(SpeakeasyBase));
export { FilterAdvancedDetails };
// FilterLowercaseDetails
/**
 * Details for the filter of the type LOWER.
**/
var FilterLowercaseDetails = /** @class */ (function (_super) {
    __extends(FilterLowercaseDetails, _super);
    function FilterLowercaseDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=field" }),
        __metadata("design:type", String)
    ], FilterLowercaseDetails.prototype, "field", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fieldIndex" }),
        __metadata("design:type", Number)
    ], FilterLowercaseDetails.prototype, "fieldIndex", void 0);
    return FilterLowercaseDetails;
}(SpeakeasyBase));
export { FilterLowercaseDetails };
// FilterParentLink
/**
 * Parent link for this filter. Points to the account to which this filter belongs.
**/
var FilterParentLink = /** @class */ (function (_super) {
    __extends(FilterParentLink, _super);
    function FilterParentLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], FilterParentLink.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], FilterParentLink.prototype, "type", void 0);
    return FilterParentLink;
}(SpeakeasyBase));
export { FilterParentLink };
// FilterSearchAndReplaceDetails
/**
 * Details for the filter of the type SEARCH_AND_REPLACE.
**/
var FilterSearchAndReplaceDetails = /** @class */ (function (_super) {
    __extends(FilterSearchAndReplaceDetails, _super);
    function FilterSearchAndReplaceDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=caseSensitive" }),
        __metadata("design:type", Boolean)
    ], FilterSearchAndReplaceDetails.prototype, "caseSensitive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=field" }),
        __metadata("design:type", String)
    ], FilterSearchAndReplaceDetails.prototype, "field", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fieldIndex" }),
        __metadata("design:type", Number)
    ], FilterSearchAndReplaceDetails.prototype, "fieldIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replaceString" }),
        __metadata("design:type", String)
    ], FilterSearchAndReplaceDetails.prototype, "replaceString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchString" }),
        __metadata("design:type", String)
    ], FilterSearchAndReplaceDetails.prototype, "searchString", void 0);
    return FilterSearchAndReplaceDetails;
}(SpeakeasyBase));
export { FilterSearchAndReplaceDetails };
// FilterUppercaseDetails
/**
 * Details for the filter of the type UPPER.
**/
var FilterUppercaseDetails = /** @class */ (function (_super) {
    __extends(FilterUppercaseDetails, _super);
    function FilterUppercaseDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=field" }),
        __metadata("design:type", String)
    ], FilterUppercaseDetails.prototype, "field", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fieldIndex" }),
        __metadata("design:type", Number)
    ], FilterUppercaseDetails.prototype, "fieldIndex", void 0);
    return FilterUppercaseDetails;
}(SpeakeasyBase));
export { FilterUppercaseDetails };
// FilterInput
/**
 * JSON template for an Analytics account filter.
**/
var FilterInput = /** @class */ (function (_super) {
    __extends(FilterInput, _super);
    function FilterInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], FilterInput.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advancedDetails" }),
        __metadata("design:type", FilterAdvancedDetails)
    ], FilterInput.prototype, "advancedDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludeDetails" }),
        __metadata("design:type", FilterExpression)
    ], FilterInput.prototype, "excludeDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], FilterInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includeDetails" }),
        __metadata("design:type", FilterExpression)
    ], FilterInput.prototype, "includeDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lowercaseDetails" }),
        __metadata("design:type", FilterLowercaseDetails)
    ], FilterInput.prototype, "lowercaseDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], FilterInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentLink" }),
        __metadata("design:type", FilterParentLink)
    ], FilterInput.prototype, "parentLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchAndReplaceDetails" }),
        __metadata("design:type", FilterSearchAndReplaceDetails)
    ], FilterInput.prototype, "searchAndReplaceDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], FilterInput.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uppercaseDetails" }),
        __metadata("design:type", FilterUppercaseDetails)
    ], FilterInput.prototype, "uppercaseDetails", void 0);
    return FilterInput;
}(SpeakeasyBase));
export { FilterInput };
// Filter
/**
 * JSON template for an Analytics account filter.
**/
var Filter = /** @class */ (function (_super) {
    __extends(Filter, _super);
    function Filter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], Filter.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advancedDetails" }),
        __metadata("design:type", FilterAdvancedDetails)
    ], Filter.prototype, "advancedDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], Filter.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludeDetails" }),
        __metadata("design:type", FilterExpression)
    ], Filter.prototype, "excludeDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Filter.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includeDetails" }),
        __metadata("design:type", FilterExpression)
    ], Filter.prototype, "includeDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Filter.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lowercaseDetails" }),
        __metadata("design:type", FilterLowercaseDetails)
    ], Filter.prototype, "lowercaseDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Filter.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentLink" }),
        __metadata("design:type", FilterParentLink)
    ], Filter.prototype, "parentLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchAndReplaceDetails" }),
        __metadata("design:type", FilterSearchAndReplaceDetails)
    ], Filter.prototype, "searchAndReplaceDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], Filter.prototype, "selfLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Filter.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated" }),
        __metadata("design:type", Date)
    ], Filter.prototype, "updated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uppercaseDetails" }),
        __metadata("design:type", FilterUppercaseDetails)
    ], Filter.prototype, "uppercaseDetails", void 0);
    return Filter;
}(SpeakeasyBase));
export { Filter };
