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
// BucketCriteriaAdditionalProperties
/**
 * Specifies the operator to use in a property-based condition that filters the results of a query for information about S3 buckets.
**/
var BucketCriteriaAdditionalProperties = /** @class */ (function (_super) {
    __extends(BucketCriteriaAdditionalProperties, _super);
    function BucketCriteriaAdditionalProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eq" }),
        __metadata("design:type", Array)
    ], BucketCriteriaAdditionalProperties.prototype, "eq", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gt" }),
        __metadata("design:type", Number)
    ], BucketCriteriaAdditionalProperties.prototype, "gt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gte" }),
        __metadata("design:type", Number)
    ], BucketCriteriaAdditionalProperties.prototype, "gte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lt" }),
        __metadata("design:type", Number)
    ], BucketCriteriaAdditionalProperties.prototype, "lt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lte" }),
        __metadata("design:type", Number)
    ], BucketCriteriaAdditionalProperties.prototype, "lte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=neq" }),
        __metadata("design:type", Array)
    ], BucketCriteriaAdditionalProperties.prototype, "neq", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prefix" }),
        __metadata("design:type", String)
    ], BucketCriteriaAdditionalProperties.prototype, "prefix", void 0);
    return BucketCriteriaAdditionalProperties;
}(SpeakeasyBase));
export { BucketCriteriaAdditionalProperties };
