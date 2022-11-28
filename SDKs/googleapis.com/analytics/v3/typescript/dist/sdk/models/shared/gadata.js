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
var GaDataColumnHeaders = /** @class */ (function (_super) {
    __extends(GaDataColumnHeaders, _super);
    function GaDataColumnHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=columnType" }),
        __metadata("design:type", String)
    ], GaDataColumnHeaders.prototype, "columnType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataType" }),
        __metadata("design:type", String)
    ], GaDataColumnHeaders.prototype, "dataType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GaDataColumnHeaders.prototype, "name", void 0);
    return GaDataColumnHeaders;
}(SpeakeasyBase));
export { GaDataColumnHeaders };
var GaDataDataTableCols = /** @class */ (function (_super) {
    __extends(GaDataDataTableCols, _super);
    function GaDataDataTableCols() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GaDataDataTableCols.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], GaDataDataTableCols.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GaDataDataTableCols.prototype, "type", void 0);
    return GaDataDataTableCols;
}(SpeakeasyBase));
export { GaDataDataTableCols };
var GaDataDataTableRowsC = /** @class */ (function (_super) {
    __extends(GaDataDataTableRowsC, _super);
    function GaDataDataTableRowsC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=v" }),
        __metadata("design:type", String)
    ], GaDataDataTableRowsC.prototype, "v", void 0);
    return GaDataDataTableRowsC;
}(SpeakeasyBase));
export { GaDataDataTableRowsC };
var GaDataDataTableRows = /** @class */ (function (_super) {
    __extends(GaDataDataTableRows, _super);
    function GaDataDataTableRows() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=c", elemType: GaDataDataTableRowsC }),
        __metadata("design:type", Array)
    ], GaDataDataTableRows.prototype, "c", void 0);
    return GaDataDataTableRows;
}(SpeakeasyBase));
export { GaDataDataTableRows };
var GaDataDataTable = /** @class */ (function (_super) {
    __extends(GaDataDataTable, _super);
    function GaDataDataTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cols", elemType: GaDataDataTableCols }),
        __metadata("design:type", Array)
    ], GaDataDataTable.prototype, "cols", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rows", elemType: GaDataDataTableRows }),
        __metadata("design:type", Array)
    ], GaDataDataTable.prototype, "rows", void 0);
    return GaDataDataTable;
}(SpeakeasyBase));
export { GaDataDataTable };
// GaDataProfileInfo
/**
 * Information for the view (profile), for which the Analytics data was requested.
**/
var GaDataProfileInfo = /** @class */ (function (_super) {
    __extends(GaDataProfileInfo, _super);
    function GaDataProfileInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], GaDataProfileInfo.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=internalWebPropertyId" }),
        __metadata("design:type", String)
    ], GaDataProfileInfo.prototype, "internalWebPropertyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profileId" }),
        __metadata("design:type", String)
    ], GaDataProfileInfo.prototype, "profileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profileName" }),
        __metadata("design:type", String)
    ], GaDataProfileInfo.prototype, "profileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tableId" }),
        __metadata("design:type", String)
    ], GaDataProfileInfo.prototype, "tableId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webPropertyId" }),
        __metadata("design:type", String)
    ], GaDataProfileInfo.prototype, "webPropertyId", void 0);
    return GaDataProfileInfo;
}(SpeakeasyBase));
export { GaDataProfileInfo };
// GaDataQuery
/**
 * Analytics data request query parameters.
**/
var GaDataQuery = /** @class */ (function (_super) {
    __extends(GaDataQuery, _super);
    function GaDataQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimensions" }),
        __metadata("design:type", String)
    ], GaDataQuery.prototype, "dimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end-date" }),
        __metadata("design:type", String)
    ], GaDataQuery.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filters" }),
        __metadata("design:type", String)
    ], GaDataQuery.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ids" }),
        __metadata("design:type", String)
    ], GaDataQuery.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max-results" }),
        __metadata("design:type", Number)
    ], GaDataQuery.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metrics" }),
        __metadata("design:type", Array)
    ], GaDataQuery.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=samplingLevel" }),
        __metadata("design:type", String)
    ], GaDataQuery.prototype, "samplingLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=segment" }),
        __metadata("design:type", String)
    ], GaDataQuery.prototype, "segment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sort" }),
        __metadata("design:type", Array)
    ], GaDataQuery.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start-date" }),
        __metadata("design:type", String)
    ], GaDataQuery.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start-index" }),
        __metadata("design:type", Number)
    ], GaDataQuery.prototype, "startIndex", void 0);
    return GaDataQuery;
}(SpeakeasyBase));
export { GaDataQuery };
// GaData
/**
 * Analytics data for a given view (profile).
**/
var GaData = /** @class */ (function (_super) {
    __extends(GaData, _super);
    function GaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=columnHeaders", elemType: GaDataColumnHeaders }),
        __metadata("design:type", Array)
    ], GaData.prototype, "columnHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containsSampledData" }),
        __metadata("design:type", Boolean)
    ], GaData.prototype, "containsSampledData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataLastRefreshed" }),
        __metadata("design:type", String)
    ], GaData.prototype, "dataLastRefreshed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataTable" }),
        __metadata("design:type", GaDataDataTable)
    ], GaData.prototype, "dataTable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GaData.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemsPerPage" }),
        __metadata("design:type", Number)
    ], GaData.prototype, "itemsPerPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], GaData.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextLink" }),
        __metadata("design:type", String)
    ], GaData.prototype, "nextLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previousLink" }),
        __metadata("design:type", String)
    ], GaData.prototype, "previousLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profileInfo" }),
        __metadata("design:type", GaDataProfileInfo)
    ], GaData.prototype, "profileInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query" }),
        __metadata("design:type", GaDataQuery)
    ], GaData.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rows" }),
        __metadata("design:type", Array)
    ], GaData.prototype, "rows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sampleSize" }),
        __metadata("design:type", String)
    ], GaData.prototype, "sampleSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sampleSpace" }),
        __metadata("design:type", String)
    ], GaData.prototype, "sampleSpace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], GaData.prototype, "selfLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalResults" }),
        __metadata("design:type", Number)
    ], GaData.prototype, "totalResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalsForAllResults" }),
        __metadata("design:type", Map)
    ], GaData.prototype, "totalsForAllResults", void 0);
    return GaData;
}(SpeakeasyBase));
export { GaData };
