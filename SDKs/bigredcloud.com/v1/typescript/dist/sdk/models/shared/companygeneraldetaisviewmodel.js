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
var CompanyGeneralDetaisViewModel = /** @class */ (function (_super) {
    __extends(CompanyGeneralDetaisViewModel, _super);
    function CompanyGeneralDetaisViewModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=companyAddresses" }),
        __metadata("design:type", Array)
    ], CompanyGeneralDetaisViewModel.prototype, "companyAddresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=companyName" }),
        __metadata("design:type", String)
    ], CompanyGeneralDetaisViewModel.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], CompanyGeneralDetaisViewModel.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyDescription" }),
        __metadata("design:type", String)
    ], CompanyGeneralDetaisViewModel.prototype, "currencyDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyId" }),
        __metadata("design:type", Number)
    ], CompanyGeneralDetaisViewModel.prototype, "currencyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentcySymbol" }),
        __metadata("design:type", String)
    ], CompanyGeneralDetaisViewModel.prototype, "currentcySymbol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emails" }),
        __metadata("design:type", Array)
    ], CompanyGeneralDetaisViewModel.prototype, "emails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=faxes" }),
        __metadata("design:type", Array)
    ], CompanyGeneralDetaisViewModel.prototype, "faxes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phones" }),
        __metadata("design:type", Array)
    ], CompanyGeneralDetaisViewModel.prototype, "phones", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regionDescription" }),
        __metadata("design:type", String)
    ], CompanyGeneralDetaisViewModel.prototype, "regionDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regionId" }),
        __metadata("design:type", Number)
    ], CompanyGeneralDetaisViewModel.prototype, "regionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vatReg" }),
        __metadata("design:type", String)
    ], CompanyGeneralDetaisViewModel.prototype, "vatReg", void 0);
    return CompanyGeneralDetaisViewModel;
}(SpeakeasyBase));
export { CompanyGeneralDetaisViewModel };
