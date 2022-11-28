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
var ElectionDate = /** @class */ (function (_super) {
    __extends(ElectionDate, _super);
    function ElectionDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active_election" }),
        __metadata("design:type", Boolean)
    ], ElectionDate.prototype, "activeElection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=create_date" }),
        __metadata("design:type", Date)
    ], ElectionDate.prototype, "createDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=election_date" }),
        __metadata("design:type", Date)
    ], ElectionDate.prototype, "electionDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=election_district" }),
        __metadata("design:type", Number)
    ], ElectionDate.prototype, "electionDistrict", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=election_notes" }),
        __metadata("design:type", String)
    ], ElectionDate.prototype, "electionNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=election_party" }),
        __metadata("design:type", String)
    ], ElectionDate.prototype, "electionParty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=election_state" }),
        __metadata("design:type", String)
    ], ElectionDate.prototype, "electionState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=election_type_full" }),
        __metadata("design:type", String)
    ], ElectionDate.prototype, "electionTypeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=election_type_id" }),
        __metadata("design:type", String)
    ], ElectionDate.prototype, "electionTypeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=election_year" }),
        __metadata("design:type", Number)
    ], ElectionDate.prototype, "electionYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=office_sought" }),
        __metadata("design:type", String)
    ], ElectionDate.prototype, "officeSought", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_general_date" }),
        __metadata("design:type", Date)
    ], ElectionDate.prototype, "primaryGeneralDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=update_date" }),
        __metadata("design:type", Date)
    ], ElectionDate.prototype, "updateDate", void 0);
    return ElectionDate;
}(SpeakeasyBase));
export { ElectionDate };
