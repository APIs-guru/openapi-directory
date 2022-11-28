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
export var GroupLicenseAcquisitionKindEnum;
(function (GroupLicenseAcquisitionKindEnum) {
    GroupLicenseAcquisitionKindEnum["Free"] = "free";
    GroupLicenseAcquisitionKindEnum["BulkPurchase"] = "bulkPurchase";
})(GroupLicenseAcquisitionKindEnum || (GroupLicenseAcquisitionKindEnum = {}));
export var GroupLicenseApprovalEnum;
(function (GroupLicenseApprovalEnum) {
    GroupLicenseApprovalEnum["Approved"] = "approved";
    GroupLicenseApprovalEnum["Unapproved"] = "unapproved";
})(GroupLicenseApprovalEnum || (GroupLicenseApprovalEnum = {}));
export var GroupLicensePermissionsEnum;
(function (GroupLicensePermissionsEnum) {
    GroupLicensePermissionsEnum["CurrentApproved"] = "currentApproved";
    GroupLicensePermissionsEnum["NeedsReapproval"] = "needsReapproval";
    GroupLicensePermissionsEnum["AllCurrentAndFutureApproved"] = "allCurrentAndFutureApproved";
})(GroupLicensePermissionsEnum || (GroupLicensePermissionsEnum = {}));
// GroupLicense
/**
 * Group license objects allow you to keep track of licenses (called entitlements) for both free and paid apps. For a free app, a group license is created when an enterprise admin first approves the product in Google Play or when the first entitlement for the product is created for a user via the API. For a paid app, a group license object is only created when an enterprise admin purchases the product in Google Play for the first time. Use the API to query group licenses. A Grouplicenses resource includes the total number of licenses purchased (paid apps only) and the total number of licenses currently in use. In other words, the total number of Entitlements that exist for the product. Only one group license object is created per product and group license objects are never deleted. If a product is unapproved, its group license remains. This allows enterprise admins to keep track of any remaining entitlements for the product.
**/
var GroupLicense = /** @class */ (function (_super) {
    __extends(GroupLicense, _super);
    function GroupLicense() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acquisitionKind" }),
        __metadata("design:type", String)
    ], GroupLicense.prototype, "acquisitionKind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=approval" }),
        __metadata("design:type", String)
    ], GroupLicense.prototype, "approval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numProvisioned" }),
        __metadata("design:type", Number)
    ], GroupLicense.prototype, "numProvisioned", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numPurchased" }),
        __metadata("design:type", Number)
    ], GroupLicense.prototype, "numPurchased", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", String)
    ], GroupLicense.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productId" }),
        __metadata("design:type", String)
    ], GroupLicense.prototype, "productId", void 0);
    return GroupLicense;
}(SpeakeasyBase));
export { GroupLicense };
