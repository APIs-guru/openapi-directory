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
import { InstanceQuota } from "./instancequota";
export var ProvisioningQuotaAssetTypeEnum;
(function (ProvisioningQuotaAssetTypeEnum) {
    ProvisioningQuotaAssetTypeEnum["AssetTypeUnspecified"] = "ASSET_TYPE_UNSPECIFIED";
    ProvisioningQuotaAssetTypeEnum["AssetTypeServer"] = "ASSET_TYPE_SERVER";
    ProvisioningQuotaAssetTypeEnum["AssetTypeStorage"] = "ASSET_TYPE_STORAGE";
    ProvisioningQuotaAssetTypeEnum["AssetTypeNetwork"] = "ASSET_TYPE_NETWORK";
})(ProvisioningQuotaAssetTypeEnum || (ProvisioningQuotaAssetTypeEnum = {}));
// ProvisioningQuota
/**
 * A provisioning quota for a given project.
**/
var ProvisioningQuota = /** @class */ (function (_super) {
    __extends(ProvisioningQuota, _super);
    function ProvisioningQuota() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetType" }),
        __metadata("design:type", String)
    ], ProvisioningQuota.prototype, "assetType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableCount" }),
        __metadata("design:type", Number)
    ], ProvisioningQuota.prototype, "availableCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gcpService" }),
        __metadata("design:type", String)
    ], ProvisioningQuota.prototype, "gcpService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceQuota" }),
        __metadata("design:type", InstanceQuota)
    ], ProvisioningQuota.prototype, "instanceQuota", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], ProvisioningQuota.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ProvisioningQuota.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkBandwidth" }),
        __metadata("design:type", String)
    ], ProvisioningQuota.prototype, "networkBandwidth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serverCount" }),
        __metadata("design:type", String)
    ], ProvisioningQuota.prototype, "serverCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storageGib" }),
        __metadata("design:type", String)
    ], ProvisioningQuota.prototype, "storageGib", void 0);
    return ProvisioningQuota;
}(SpeakeasyBase));
export { ProvisioningQuota };
