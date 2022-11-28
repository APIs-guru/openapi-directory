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
import { ResourceStatusEnum } from "./resourcestatusenum";
import { SupportedProperty } from "./supportedproperty";
var ConnectorResource = /** @class */ (function (_super) {
    __extends(ConnectorResource, _super);
    function ConnectorResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom_fields_supported" }),
        __metadata("design:type", Boolean)
    ], ConnectorResource.prototype, "customFieldsSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downstream_id" }),
        __metadata("design:type", String)
    ], ConnectorResource.prototype, "downstreamId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downstream_name" }),
        __metadata("design:type", String)
    ], ConnectorResource.prototype, "downstreamName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downstream_unsupported_operations" }),
        __metadata("design:type", Array)
    ], ConnectorResource.prototype, "downstreamUnsupportedOperations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ConnectorResource.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ConnectorResource.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pagination" }),
        __metadata("design:type", PaginationCoverage)
    ], ConnectorResource.prototype, "pagination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pagination_supported" }),
        __metadata("design:type", Boolean)
    ], ConnectorResource.prototype, "paginationSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ConnectorResource.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supported_fields", elemType: SupportedProperty }),
        __metadata("design:type", Array)
    ], ConnectorResource.prototype, "supportedFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supported_filters" }),
        __metadata("design:type", Array)
    ], ConnectorResource.prototype, "supportedFilters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supported_list_fields", elemType: SupportedProperty }),
        __metadata("design:type", Array)
    ], ConnectorResource.prototype, "supportedListFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supported_operations" }),
        __metadata("design:type", Array)
    ], ConnectorResource.prototype, "supportedOperations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supported_sort_by" }),
        __metadata("design:type", Array)
    ], ConnectorResource.prototype, "supportedSortBy", void 0);
    return ConnectorResource;
}(SpeakeasyBase));
export { ConnectorResource };
