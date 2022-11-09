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
// ProvisioningPreferences
/**
 * <p>The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product type</p> <p>One or more AWS accounts that will have access to the provisioned product.</p> <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p> <p>The AWS accounts specified should be within the list of accounts in the <code>STACKSET</code> constraint. To get the list of accounts in the <code>STACKSET</code> constraint, use the <code>DescribeProvisioningParameters</code> operation.</p> <p>If no values are specified, the default value is all accounts from the <code>STACKSET</code> constraint.</p>
**/
var ProvisioningPreferences = /** @class */ (function (_super) {
    __extends(ProvisioningPreferences, _super);
    function ProvisioningPreferences() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=StackSetAccounts" }),
        __metadata("design:type", Array)
    ], ProvisioningPreferences.prototype, "stackSetAccounts", void 0);
    __decorate([
        Metadata({ data: "json, name=StackSetFailureToleranceCount" }),
        __metadata("design:type", Number)
    ], ProvisioningPreferences.prototype, "stackSetFailureToleranceCount", void 0);
    __decorate([
        Metadata({ data: "json, name=StackSetFailureTolerancePercentage" }),
        __metadata("design:type", Number)
    ], ProvisioningPreferences.prototype, "stackSetFailureTolerancePercentage", void 0);
    __decorate([
        Metadata({ data: "json, name=StackSetMaxConcurrencyCount" }),
        __metadata("design:type", Number)
    ], ProvisioningPreferences.prototype, "stackSetMaxConcurrencyCount", void 0);
    __decorate([
        Metadata({ data: "json, name=StackSetMaxConcurrencyPercentage" }),
        __metadata("design:type", Number)
    ], ProvisioningPreferences.prototype, "stackSetMaxConcurrencyPercentage", void 0);
    __decorate([
        Metadata({ data: "json, name=StackSetRegions" }),
        __metadata("design:type", Array)
    ], ProvisioningPreferences.prototype, "stackSetRegions", void 0);
    return ProvisioningPreferences;
}(SpeakeasyBase));
export { ProvisioningPreferences };
