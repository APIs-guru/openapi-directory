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
import { PaginationCoverage } from "./paginationcoverage";
import { SupportedProperty } from "./supportedproperty";
import { ResourceStatusEnum } from "./resourcestatusenum";
var ApiResourceCoverageCoverage = /** @class */ (function (_super) {
    __extends(ApiResourceCoverageCoverage, _super);
    function ApiResourceCoverageCoverage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downstream_id" }),
        __metadata("design:type", String)
    ], ApiResourceCoverageCoverage.prototype, "downstreamId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downstream_name" }),
        __metadata("design:type", String)
    ], ApiResourceCoverageCoverage.prototype, "downstreamName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pagination" }),
        __metadata("design:type", PaginationCoverage)
    ], ApiResourceCoverageCoverage.prototype, "pagination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pagination_supported" }),
        __metadata("design:type", Boolean)
    ], ApiResourceCoverageCoverage.prototype, "paginationSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supported_fields", elemType: SupportedProperty }),
        __metadata("design:type", Array)
    ], ApiResourceCoverageCoverage.prototype, "supportedFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supported_filters" }),
        __metadata("design:type", Array)
    ], ApiResourceCoverageCoverage.prototype, "supportedFilters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supported_list_fields", elemType: SupportedProperty }),
        __metadata("design:type", Array)
    ], ApiResourceCoverageCoverage.prototype, "supportedListFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supported_operations" }),
        __metadata("design:type", Array)
    ], ApiResourceCoverageCoverage.prototype, "supportedOperations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supported_sort_by" }),
        __metadata("design:type", Array)
    ], ApiResourceCoverageCoverage.prototype, "supportedSortBy", void 0);
    return ApiResourceCoverageCoverage;
}(SpeakeasyBase));
export { ApiResourceCoverageCoverage };
var ApiResourceCoverage = /** @class */ (function (_super) {
    __extends(ApiResourceCoverage, _super);
    function ApiResourceCoverage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coverage", elemType: ApiResourceCoverageCoverage }),
        __metadata("design:type", Array)
    ], ApiResourceCoverage.prototype, "coverage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ApiResourceCoverage.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ApiResourceCoverage.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ApiResourceCoverage.prototype, "status", void 0);
    return ApiResourceCoverage;
}(SpeakeasyBase));
export { ApiResourceCoverage };
