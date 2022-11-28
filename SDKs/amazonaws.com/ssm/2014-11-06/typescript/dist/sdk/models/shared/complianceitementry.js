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
import { ComplianceSeverityEnum } from "./complianceseverityenum";
import { ComplianceStatusEnum } from "./compliancestatusenum";
// ComplianceItemEntry
/**
 * Information about a compliance item.
**/
var ComplianceItemEntry = /** @class */ (function (_super) {
    __extends(ComplianceItemEntry, _super);
    function ComplianceItemEntry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Details" }),
        __metadata("design:type", Map)
    ], ComplianceItemEntry.prototype, "details", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], ComplianceItemEntry.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Severity" }),
        __metadata("design:type", String)
    ], ComplianceItemEntry.prototype, "severity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ComplianceItemEntry.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Title" }),
        __metadata("design:type", String)
    ], ComplianceItemEntry.prototype, "title", void 0);
    return ComplianceItemEntry;
}(SpeakeasyBase));
export { ComplianceItemEntry };
