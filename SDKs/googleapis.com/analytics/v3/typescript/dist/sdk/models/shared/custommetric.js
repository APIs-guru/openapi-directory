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
// CustomMetricParentLink
/**
 * Parent link for the custom metric. Points to the property to which the custom metric belongs.
**/
var CustomMetricParentLink = /** @class */ (function (_super) {
    __extends(CustomMetricParentLink, _super);
    function CustomMetricParentLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], CustomMetricParentLink.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CustomMetricParentLink.prototype, "type", void 0);
    return CustomMetricParentLink;
}(SpeakeasyBase));
export { CustomMetricParentLink };
// CustomMetric
/**
 * JSON template for Analytics Custom Metric.
**/
var CustomMetric = /** @class */ (function (_super) {
    __extends(CustomMetric, _super);
    function CustomMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], CustomMetric.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], CustomMetric.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], CustomMetric.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CustomMetric.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=index" }),
        __metadata("design:type", Number)
    ], CustomMetric.prototype, "index", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], CustomMetric.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_value" }),
        __metadata("design:type", String)
    ], CustomMetric.prototype, "maxValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=min_value" }),
        __metadata("design:type", String)
    ], CustomMetric.prototype, "minValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CustomMetric.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentLink" }),
        __metadata("design:type", CustomMetricParentLink)
    ], CustomMetric.prototype, "parentLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scope" }),
        __metadata("design:type", String)
    ], CustomMetric.prototype, "scope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], CustomMetric.prototype, "selfLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CustomMetric.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated" }),
        __metadata("design:type", Date)
    ], CustomMetric.prototype, "updated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webPropertyId" }),
        __metadata("design:type", String)
    ], CustomMetric.prototype, "webPropertyId", void 0);
    return CustomMetric;
}(SpeakeasyBase));
export { CustomMetric };
// CustomMetricInput
/**
 * JSON template for Analytics Custom Metric.
**/
var CustomMetricInput = /** @class */ (function (_super) {
    __extends(CustomMetricInput, _super);
    function CustomMetricInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], CustomMetricInput.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], CustomMetricInput.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CustomMetricInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_value" }),
        __metadata("design:type", String)
    ], CustomMetricInput.prototype, "maxValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=min_value" }),
        __metadata("design:type", String)
    ], CustomMetricInput.prototype, "minValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CustomMetricInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentLink" }),
        __metadata("design:type", CustomMetricParentLink)
    ], CustomMetricInput.prototype, "parentLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scope" }),
        __metadata("design:type", String)
    ], CustomMetricInput.prototype, "scope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CustomMetricInput.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webPropertyId" }),
        __metadata("design:type", String)
    ], CustomMetricInput.prototype, "webPropertyId", void 0);
    return CustomMetricInput;
}(SpeakeasyBase));
export { CustomMetricInput };
