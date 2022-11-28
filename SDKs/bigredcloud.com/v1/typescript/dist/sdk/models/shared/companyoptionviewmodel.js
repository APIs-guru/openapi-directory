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
var CompanyOptionViewModel = /** @class */ (function (_super) {
    __extends(CompanyOptionViewModel, _super);
    function CompanyOptionViewModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowEntryOfGrossPriceInInvoicing" }),
        __metadata("design:type", Boolean)
    ], CompanyOptionViewModel.prototype, "allowEntryOfGrossPriceInInvoicing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditInputForReverseChargeVAT" }),
        __metadata("design:type", Boolean)
    ], CompanyOptionViewModel.prototype, "creditInputForReverseChargeVat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditNoteJournalAgeingName" }),
        __metadata("design:type", String)
    ], CompanyOptionViewModel.prototype, "creditNoteJournalAgeingName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditNoteJournalAgeingValue" }),
        __metadata("design:type", Number)
    ], CompanyOptionViewModel.prototype, "creditNoteJournalAgeingValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discrepancyAllowed" }),
        __metadata("design:type", Number)
    ], CompanyOptionViewModel.prototype, "discrepancyAllowed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableVOCRReporting" }),
        __metadata("design:type", Boolean)
    ], CompanyOptionViewModel.prototype, "enableVocrReporting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=marginVatScheme" }),
        __metadata("design:type", Boolean)
    ], CompanyOptionViewModel.prototype, "marginVatScheme", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=printOSItemsOnly" }),
        __metadata("design:type", Boolean)
    ], CompanyOptionViewModel.prototype, "printOsItemsOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purchasesVatAnalysisType" }),
        __metadata("design:type", Number)
    ], CompanyOptionViewModel.prototype, "purchasesVatAnalysisType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=salesVatAnalysisType" }),
        __metadata("design:type", Number)
    ], CompanyOptionViewModel.prototype, "salesVatAnalysisType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useAllocations" }),
        __metadata("design:type", Boolean)
    ], CompanyOptionViewModel.prototype, "useAllocations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useNominal" }),
        __metadata("design:type", Boolean)
    ], CompanyOptionViewModel.prototype, "useNominal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useNominalCode" }),
        __metadata("design:type", Boolean)
    ], CompanyOptionViewModel.prototype, "useNominalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vocrSettingValue" }),
        __metadata("design:type", Boolean)
    ], CompanyOptionViewModel.prototype, "vocrSettingValue", void 0);
    return CompanyOptionViewModel;
}(SpeakeasyBase));
export { CompanyOptionViewModel };
