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
import { InputConfig } from "./inputconfig";
// TableSpec
/**
 * A specification of a relational table. The table's schema is represented via its child column specs. It is pre-populated as part of ImportData by schema inference algorithm, the version of which is a required parameter of ImportData InputConfig. Note: While working with a table, at times the schema may be inconsistent with the data in the table (e.g. string in a FLOAT64 column). The consistency validation is done upon creation of a model. Used by: * Tables
**/
var TableSpec = /** @class */ (function (_super) {
    __extends(TableSpec, _super);
    function TableSpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=columnCount" }),
        __metadata("design:type", String)
    ], TableSpec.prototype, "columnCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], TableSpec.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputConfigs", elemType: InputConfig }),
        __metadata("design:type", Array)
    ], TableSpec.prototype, "inputConfigs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TableSpec.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rowCount" }),
        __metadata("design:type", String)
    ], TableSpec.prototype, "rowCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeColumnSpecId" }),
        __metadata("design:type", String)
    ], TableSpec.prototype, "timeColumnSpecId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validRowCount" }),
        __metadata("design:type", String)
    ], TableSpec.prototype, "validRowCount", void 0);
    return TableSpec;
}(SpeakeasyBase));
export { TableSpec };
