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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DateDetails } from "./datedetails";
import { LookupDetails } from "./lookupdetails";
import { RelationshipDetails } from "./relationshipdetails";
// ColumnDescription
/**
 * Details on a column in the table.
**/
var ColumnDescription = /** @class */ (function (_super) {
    __extends(ColumnDescription, _super);
    function ColumnDescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=dataType" }),
        __metadata("design:type", String)
    ], ColumnDescription.prototype, "dataType", void 0);
    __decorate([
        Metadata({ data: "json, name=dateDetails" }),
        __metadata("design:type", DateDetails)
    ], ColumnDescription.prototype, "dateDetails", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ColumnDescription.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=labels", elemType: shared.LabeledItem }),
        __metadata("design:type", Array)
    ], ColumnDescription.prototype, "labels", void 0);
    __decorate([
        Metadata({ data: "json, name=lookupDetails" }),
        __metadata("design:type", LookupDetails)
    ], ColumnDescription.prototype, "lookupDetails", void 0);
    __decorate([
        Metadata({ data: "json, name=multipleValuesDisallowed" }),
        __metadata("design:type", Boolean)
    ], ColumnDescription.prototype, "multipleValuesDisallowed", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ColumnDescription.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=readonly" }),
        __metadata("design:type", Boolean)
    ], ColumnDescription.prototype, "readonly", void 0);
    __decorate([
        Metadata({ data: "json, name=relationshipDetails" }),
        __metadata("design:type", RelationshipDetails)
    ], ColumnDescription.prototype, "relationshipDetails", void 0);
    return ColumnDescription;
}(SpeakeasyBase));
export { ColumnDescription };
