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
import { PatchComplianceDataStateEnum } from "./patchcompliancedatastateenum";
// PatchComplianceData
/**
 * Information about the state of a patch on a particular instance as it relates to the patch baseline used to patch the instance.
**/
var PatchComplianceData = /** @class */ (function (_super) {
    __extends(PatchComplianceData, _super);
    function PatchComplianceData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CVEIds" }),
        __metadata("design:type", String)
    ], PatchComplianceData.prototype, "cveIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Classification" }),
        __metadata("design:type", String)
    ], PatchComplianceData.prototype, "classification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstalledTime" }),
        __metadata("design:type", Date)
    ], PatchComplianceData.prototype, "installedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KBId" }),
        __metadata("design:type", String)
    ], PatchComplianceData.prototype, "kbId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Severity" }),
        __metadata("design:type", String)
    ], PatchComplianceData.prototype, "severity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], PatchComplianceData.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Title" }),
        __metadata("design:type", String)
    ], PatchComplianceData.prototype, "title", void 0);
    return PatchComplianceData;
}(SpeakeasyBase));
export { PatchComplianceData };
