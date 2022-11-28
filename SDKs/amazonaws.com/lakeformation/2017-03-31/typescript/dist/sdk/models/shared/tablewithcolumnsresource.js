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
import { ColumnWildcard } from "./columnwildcard";
// TableWithColumnsResource
/**
 * <p>A structure for a table with columns object. This object is only used when granting a SELECT permission.</p> <p>This object must take a value for at least one of <code>ColumnsNames</code>, <code>ColumnsIndexes</code>, or <code>ColumnsWildcard</code>.</p>
**/
var TableWithColumnsResource = /** @class */ (function (_super) {
    __extends(TableWithColumnsResource, _super);
    function TableWithColumnsResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CatalogId" }),
        __metadata("design:type", String)
    ], TableWithColumnsResource.prototype, "catalogId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ColumnNames" }),
        __metadata("design:type", Array)
    ], TableWithColumnsResource.prototype, "columnNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ColumnWildcard" }),
        __metadata("design:type", ColumnWildcard)
    ], TableWithColumnsResource.prototype, "columnWildcard", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DatabaseName" }),
        __metadata("design:type", String)
    ], TableWithColumnsResource.prototype, "databaseName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], TableWithColumnsResource.prototype, "name", void 0);
    return TableWithColumnsResource;
}(SpeakeasyBase));
export { TableWithColumnsResource };
