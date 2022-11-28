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
var McfDataColumnHeaders = /** @class */ (function (_super) {
    __extends(McfDataColumnHeaders, _super);
    function McfDataColumnHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=columnType" }),
        __metadata("design:type", String)
    ], McfDataColumnHeaders.prototype, "columnType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataType" }),
        __metadata("design:type", String)
    ], McfDataColumnHeaders.prototype, "dataType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], McfDataColumnHeaders.prototype, "name", void 0);
    return McfDataColumnHeaders;
}(SpeakeasyBase));
export { McfDataColumnHeaders };
// McfDataProfileInfo
/**
 * Information for the view (profile), for which the Analytics data was requested.
**/
var McfDataProfileInfo = /** @class */ (function (_super) {
    __extends(McfDataProfileInfo, _super);
    function McfDataProfileInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], McfDataProfileInfo.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=internalWebPropertyId" }),
        __metadata("design:type", String)
    ], McfDataProfileInfo.prototype, "internalWebPropertyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profileId" }),
        __metadata("design:type", String)
    ], McfDataProfileInfo.prototype, "profileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profileName" }),
        __metadata("design:type", String)
    ], McfDataProfileInfo.prototype, "profileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tableId" }),
        __metadata("design:type", String)
    ], McfDataProfileInfo.prototype, "tableId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webPropertyId" }),
        __metadata("design:type", String)
    ], McfDataProfileInfo.prototype, "webPropertyId", void 0);
    return McfDataProfileInfo;
}(SpeakeasyBase));
export { McfDataProfileInfo };
// McfDataQuery
/**
 * Analytics data request query parameters.
**/
var McfDataQuery = /** @class */ (function (_super) {
    __extends(McfDataQuery, _super);
    function McfDataQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimensions" }),
        __metadata("design:type", String)
    ], McfDataQuery.prototype, "dimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end-date" }),
        __metadata("design:type", String)
    ], McfDataQuery.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filters" }),
        __metadata("design:type", String)
    ], McfDataQuery.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ids" }),
        __metadata("design:type", String)
    ], McfDataQuery.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max-results" }),
        __metadata("design:type", Number)
    ], McfDataQuery.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metrics" }),
        __metadata("design:type", Array)
    ], McfDataQuery.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=samplingLevel" }),
        __metadata("design:type", String)
    ], McfDataQuery.prototype, "samplingLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=segment" }),
        __metadata("design:type", String)
    ], McfDataQuery.prototype, "segment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sort" }),
        __metadata("design:type", Array)
    ], McfDataQuery.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start-date" }),
        __metadata("design:type", String)
    ], McfDataQuery.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start-index" }),
        __metadata("design:type", Number)
    ], McfDataQuery.prototype, "startIndex", void 0);
    return McfDataQuery;
}(SpeakeasyBase));
export { McfDataQuery };
var McfDataRowsConversionPathValue = /** @class */ (function (_super) {
    __extends(McfDataRowsConversionPathValue, _super);
    function McfDataRowsConversionPathValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interactionType" }),
        __metadata("design:type", String)
    ], McfDataRowsConversionPathValue.prototype, "interactionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeValue" }),
        __metadata("design:type", String)
    ], McfDataRowsConversionPathValue.prototype, "nodeValue", void 0);
    return McfDataRowsConversionPathValue;
}(SpeakeasyBase));
export { McfDataRowsConversionPathValue };
// McfDataRows
/**
 * A union object representing a dimension or metric value. Only one of "primitiveValue" or "conversionPathValue" attribute will be populated.
**/
var McfDataRows = /** @class */ (function (_super) {
    __extends(McfDataRows, _super);
    function McfDataRows() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversionPathValue", elemType: McfDataRowsConversionPathValue }),
        __metadata("design:type", Array)
    ], McfDataRows.prototype, "conversionPathValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primitiveValue" }),
        __metadata("design:type", String)
    ], McfDataRows.prototype, "primitiveValue", void 0);
    return McfDataRows;
}(SpeakeasyBase));
export { McfDataRows };
// McfData
/**
 * Multi-Channel Funnels data for a given view (profile).
**/
var McfData = /** @class */ (function (_super) {
    __extends(McfData, _super);
    function McfData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=columnHeaders", elemType: McfDataColumnHeaders }),
        __metadata("design:type", Array)
    ], McfData.prototype, "columnHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containsSampledData" }),
        __metadata("design:type", Boolean)
    ], McfData.prototype, "containsSampledData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], McfData.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemsPerPage" }),
        __metadata("design:type", Number)
    ], McfData.prototype, "itemsPerPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], McfData.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextLink" }),
        __metadata("design:type", String)
    ], McfData.prototype, "nextLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previousLink" }),
        __metadata("design:type", String)
    ], McfData.prototype, "previousLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profileInfo" }),
        __metadata("design:type", McfDataProfileInfo)
    ], McfData.prototype, "profileInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query" }),
        __metadata("design:type", McfDataQuery)
    ], McfData.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rows", elemType: McfDataRows, elemDepth: 2 }),
        __metadata("design:type", Array)
    ], McfData.prototype, "rows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sampleSize" }),
        __metadata("design:type", String)
    ], McfData.prototype, "sampleSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sampleSpace" }),
        __metadata("design:type", String)
    ], McfData.prototype, "sampleSpace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], McfData.prototype, "selfLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalResults" }),
        __metadata("design:type", Number)
    ], McfData.prototype, "totalResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalsForAllResults" }),
        __metadata("design:type", Map)
    ], McfData.prototype, "totalsForAllResults", void 0);
    return McfData;
}(SpeakeasyBase));
export { McfData };
