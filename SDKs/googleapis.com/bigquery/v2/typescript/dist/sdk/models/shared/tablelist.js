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
import { Clustering } from "./clustering";
import { RangePartitioning } from "./rangepartitioning";
import { TableReference } from "./tablereference";
import { TimePartitioning } from "./timepartitioning";
// TableListTablesView
/**
 * Additional details for a view.
**/
var TableListTablesView = /** @class */ (function (_super) {
    __extends(TableListTablesView, _super);
    function TableListTablesView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useLegacySql" }),
        __metadata("design:type", Boolean)
    ], TableListTablesView.prototype, "useLegacySql", void 0);
    return TableListTablesView;
}(SpeakeasyBase));
export { TableListTablesView };
var TableListTables = /** @class */ (function (_super) {
    __extends(TableListTables, _super);
    function TableListTables() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clustering" }),
        __metadata("design:type", Clustering)
    ], TableListTables.prototype, "clustering", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationTime" }),
        __metadata("design:type", String)
    ], TableListTables.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expirationTime" }),
        __metadata("design:type", String)
    ], TableListTables.prototype, "expirationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=friendlyName" }),
        __metadata("design:type", String)
    ], TableListTables.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], TableListTables.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], TableListTables.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], TableListTables.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rangePartitioning" }),
        __metadata("design:type", RangePartitioning)
    ], TableListTables.prototype, "rangePartitioning", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tableReference" }),
        __metadata("design:type", TableReference)
    ], TableListTables.prototype, "tableReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timePartitioning" }),
        __metadata("design:type", TimePartitioning)
    ], TableListTables.prototype, "timePartitioning", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TableListTables.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=view" }),
        __metadata("design:type", TableListTablesView)
    ], TableListTables.prototype, "view", void 0);
    return TableListTables;
}(SpeakeasyBase));
export { TableListTables };
var TableList = /** @class */ (function (_super) {
    __extends(TableList, _super);
    function TableList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], TableList.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], TableList.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextPageToken" }),
        __metadata("design:type", String)
    ], TableList.prototype, "nextPageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tables", elemType: TableListTables }),
        __metadata("design:type", Array)
    ], TableList.prototype, "tables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalItems" }),
        __metadata("design:type", Number)
    ], TableList.prototype, "totalItems", void 0);
    return TableList;
}(SpeakeasyBase));
export { TableList };
