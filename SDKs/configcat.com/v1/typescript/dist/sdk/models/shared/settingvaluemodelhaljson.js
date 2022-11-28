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
import { IntegrationLinkTypeEnum } from "./integrationlinktypeenum";
import { SettingTypeEnum } from "./settingtypeenum";
import { RolloutPercentageItemModel } from "./rolloutpercentageitemmodel";
import { RolloutRuleModel } from "./rolloutrulemodel";
var SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganizationLinks = /** @class */ (function (_super) {
    __extends(SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganizationLinks, _super);
    function SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganizationLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganizationLinks.prototype, "members", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=products" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganizationLinks.prototype, "products", void 0);
    return SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganizationLinks;
}(SpeakeasyBase));
export { SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganizationLinks };
var SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganization = /** @class */ (function (_super) {
    __extends(SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganization, _super);
    function SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganizationLinks)
    ], SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganization.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganization.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizationId" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganization.prototype, "organizationId", void 0);
    return SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganization;
}(SpeakeasyBase));
export { SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganization };
var SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbedded = /** @class */ (function (_super) {
    __extends(SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbedded, _super);
    function SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbedded() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization" }),
        __metadata("design:type", SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganization)
    ], SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbedded.prototype, "organization", void 0);
    return SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbedded;
}(SpeakeasyBase));
export { SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbedded };
var SettingValueModelHaljsonEmbeddedConfigEmbeddedProductLinks = /** @class */ (function (_super) {
    __extends(SettingValueModelHaljsonEmbeddedConfigEmbeddedProductLinks, _super);
    function SettingValueModelHaljsonEmbeddedConfigEmbeddedProductLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configs" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedConfigEmbeddedProductLinks.prototype, "configs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environments" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedConfigEmbeddedProductLinks.prototype, "environments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedConfigEmbeddedProductLinks.prototype, "members", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permission-groups" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedConfigEmbeddedProductLinks.prototype, "permissionGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedConfigEmbeddedProductLinks.prototype, "self", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedConfigEmbeddedProductLinks.prototype, "tags", void 0);
    return SettingValueModelHaljsonEmbeddedConfigEmbeddedProductLinks;
}(SpeakeasyBase));
export { SettingValueModelHaljsonEmbeddedConfigEmbeddedProductLinks };
var SettingValueModelHaljsonEmbeddedConfigEmbeddedProduct = /** @class */ (function (_super) {
    __extends(SettingValueModelHaljsonEmbeddedConfigEmbeddedProduct, _super);
    function SettingValueModelHaljsonEmbeddedConfigEmbeddedProduct() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_embedded" }),
        __metadata("design:type", SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbedded)
    ], SettingValueModelHaljsonEmbeddedConfigEmbeddedProduct.prototype, "embedded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", SettingValueModelHaljsonEmbeddedConfigEmbeddedProductLinks)
    ], SettingValueModelHaljsonEmbeddedConfigEmbeddedProduct.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedConfigEmbeddedProduct.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productId" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedConfigEmbeddedProduct.prototype, "productId", void 0);
    return SettingValueModelHaljsonEmbeddedConfigEmbeddedProduct;
}(SpeakeasyBase));
export { SettingValueModelHaljsonEmbeddedConfigEmbeddedProduct };
var SettingValueModelHaljsonEmbeddedConfigEmbedded = /** @class */ (function (_super) {
    __extends(SettingValueModelHaljsonEmbeddedConfigEmbedded, _super);
    function SettingValueModelHaljsonEmbeddedConfigEmbedded() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=product" }),
        __metadata("design:type", SettingValueModelHaljsonEmbeddedConfigEmbeddedProduct)
    ], SettingValueModelHaljsonEmbeddedConfigEmbedded.prototype, "product", void 0);
    return SettingValueModelHaljsonEmbeddedConfigEmbedded;
}(SpeakeasyBase));
export { SettingValueModelHaljsonEmbeddedConfigEmbedded };
var SettingValueModelHaljsonEmbeddedConfigLinks = /** @class */ (function (_super) {
    __extends(SettingValueModelHaljsonEmbeddedConfigLinks, _super);
    function SettingValueModelHaljsonEmbeddedConfigLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedConfigLinks.prototype, "self", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=settings" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedConfigLinks.prototype, "settings", void 0);
    return SettingValueModelHaljsonEmbeddedConfigLinks;
}(SpeakeasyBase));
export { SettingValueModelHaljsonEmbeddedConfigLinks };
var SettingValueModelHaljsonEmbeddedConfig = /** @class */ (function (_super) {
    __extends(SettingValueModelHaljsonEmbeddedConfig, _super);
    function SettingValueModelHaljsonEmbeddedConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_embedded" }),
        __metadata("design:type", SettingValueModelHaljsonEmbeddedConfigEmbedded)
    ], SettingValueModelHaljsonEmbeddedConfig.prototype, "embedded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", SettingValueModelHaljsonEmbeddedConfigLinks)
    ], SettingValueModelHaljsonEmbeddedConfig.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configId" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedConfig.prototype, "configId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedConfig.prototype, "name", void 0);
    return SettingValueModelHaljsonEmbeddedConfig;
}(SpeakeasyBase));
export { SettingValueModelHaljsonEmbeddedConfig };
var SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganizationLinks = /** @class */ (function (_super) {
    __extends(SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganizationLinks, _super);
    function SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganizationLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganizationLinks.prototype, "members", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=products" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganizationLinks.prototype, "products", void 0);
    return SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganizationLinks;
}(SpeakeasyBase));
export { SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganizationLinks };
var SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganization = /** @class */ (function (_super) {
    __extends(SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganization, _super);
    function SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganizationLinks)
    ], SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganization.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganization.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizationId" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganization.prototype, "organizationId", void 0);
    return SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganization;
}(SpeakeasyBase));
export { SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganization };
var SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbedded = /** @class */ (function (_super) {
    __extends(SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbedded, _super);
    function SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbedded() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization" }),
        __metadata("design:type", SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganization)
    ], SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbedded.prototype, "organization", void 0);
    return SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbedded;
}(SpeakeasyBase));
export { SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbedded };
var SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductLinks = /** @class */ (function (_super) {
    __extends(SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductLinks, _super);
    function SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configs" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductLinks.prototype, "configs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environments" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductLinks.prototype, "environments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductLinks.prototype, "members", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permission-groups" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductLinks.prototype, "permissionGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductLinks.prototype, "self", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductLinks.prototype, "tags", void 0);
    return SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductLinks;
}(SpeakeasyBase));
export { SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductLinks };
var SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProduct = /** @class */ (function (_super) {
    __extends(SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProduct, _super);
    function SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProduct() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_embedded" }),
        __metadata("design:type", SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbedded)
    ], SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProduct.prototype, "embedded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductLinks)
    ], SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProduct.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProduct.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productId" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProduct.prototype, "productId", void 0);
    return SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProduct;
}(SpeakeasyBase));
export { SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProduct };
var SettingValueModelHaljsonEmbeddedEnvironmentEmbedded = /** @class */ (function (_super) {
    __extends(SettingValueModelHaljsonEmbeddedEnvironmentEmbedded, _super);
    function SettingValueModelHaljsonEmbeddedEnvironmentEmbedded() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=product" }),
        __metadata("design:type", SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProduct)
    ], SettingValueModelHaljsonEmbeddedEnvironmentEmbedded.prototype, "product", void 0);
    return SettingValueModelHaljsonEmbeddedEnvironmentEmbedded;
}(SpeakeasyBase));
export { SettingValueModelHaljsonEmbeddedEnvironmentEmbedded };
var SettingValueModelHaljsonEmbeddedEnvironmentLinks = /** @class */ (function (_super) {
    __extends(SettingValueModelHaljsonEmbeddedEnvironmentLinks, _super);
    function SettingValueModelHaljsonEmbeddedEnvironmentLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedEnvironmentLinks.prototype, "self", void 0);
    return SettingValueModelHaljsonEmbeddedEnvironmentLinks;
}(SpeakeasyBase));
export { SettingValueModelHaljsonEmbeddedEnvironmentLinks };
var SettingValueModelHaljsonEmbeddedEnvironment = /** @class */ (function (_super) {
    __extends(SettingValueModelHaljsonEmbeddedEnvironment, _super);
    function SettingValueModelHaljsonEmbeddedEnvironment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_embedded" }),
        __metadata("design:type", SettingValueModelHaljsonEmbeddedEnvironmentEmbedded)
    ], SettingValueModelHaljsonEmbeddedEnvironment.prototype, "embedded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", SettingValueModelHaljsonEmbeddedEnvironmentLinks)
    ], SettingValueModelHaljsonEmbeddedEnvironment.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environmentId" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedEnvironment.prototype, "environmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedEnvironment.prototype, "name", void 0);
    return SettingValueModelHaljsonEmbeddedEnvironment;
}(SpeakeasyBase));
export { SettingValueModelHaljsonEmbeddedEnvironment };
var SettingValueModelHaljsonEmbeddedIntegrationLinks = /** @class */ (function (_super) {
    __extends(SettingValueModelHaljsonEmbeddedIntegrationLinks, _super);
    function SettingValueModelHaljsonEmbeddedIntegrationLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedIntegrationLinks.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integrationLinkType" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedIntegrationLinks.prototype, "integrationLinkType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedIntegrationLinks.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedIntegrationLinks.prototype, "url", void 0);
    return SettingValueModelHaljsonEmbeddedIntegrationLinks;
}(SpeakeasyBase));
export { SettingValueModelHaljsonEmbeddedIntegrationLinks };
var SettingValueModelHaljsonEmbeddedSetting = /** @class */ (function (_super) {
    __extends(SettingValueModelHaljsonEmbeddedSetting, _super);
    function SettingValueModelHaljsonEmbeddedSetting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], SettingValueModelHaljsonEmbeddedSetting.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creatorEmail" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedSetting.prototype, "creatorEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creatorFullName" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedSetting.prototype, "creatorFullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expirationWarningAt" }),
        __metadata("design:type", Date)
    ], SettingValueModelHaljsonEmbeddedSetting.prototype, "expirationWarningAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hint" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedSetting.prototype, "hint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isWatching" }),
        __metadata("design:type", Boolean)
    ], SettingValueModelHaljsonEmbeddedSetting.prototype, "isWatching", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedSetting.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedSetting.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ownerEmail" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedSetting.prototype, "ownerEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ownerFullName" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedSetting.prototype, "ownerFullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=settingId" }),
        __metadata("design:type", Number)
    ], SettingValueModelHaljsonEmbeddedSetting.prototype, "settingId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=settingType" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedSetting.prototype, "settingType", void 0);
    return SettingValueModelHaljsonEmbeddedSetting;
}(SpeakeasyBase));
export { SettingValueModelHaljsonEmbeddedSetting };
var SettingValueModelHaljsonEmbeddedSettingTags = /** @class */ (function (_super) {
    __extends(SettingValueModelHaljsonEmbeddedSettingTags, _super);
    function SettingValueModelHaljsonEmbeddedSettingTags() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedSettingTags.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonEmbeddedSettingTags.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=settingTagId" }),
        __metadata("design:type", Number)
    ], SettingValueModelHaljsonEmbeddedSettingTags.prototype, "settingTagId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagId" }),
        __metadata("design:type", Number)
    ], SettingValueModelHaljsonEmbeddedSettingTags.prototype, "tagId", void 0);
    return SettingValueModelHaljsonEmbeddedSettingTags;
}(SpeakeasyBase));
export { SettingValueModelHaljsonEmbeddedSettingTags };
var SettingValueModelHaljsonEmbedded = /** @class */ (function (_super) {
    __extends(SettingValueModelHaljsonEmbedded, _super);
    function SettingValueModelHaljsonEmbedded() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=config" }),
        __metadata("design:type", SettingValueModelHaljsonEmbeddedConfig)
    ], SettingValueModelHaljsonEmbedded.prototype, "config", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environment" }),
        __metadata("design:type", SettingValueModelHaljsonEmbeddedEnvironment)
    ], SettingValueModelHaljsonEmbedded.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integrationLinks", elemType: SettingValueModelHaljsonEmbeddedIntegrationLinks }),
        __metadata("design:type", Array)
    ], SettingValueModelHaljsonEmbedded.prototype, "integrationLinks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=setting" }),
        __metadata("design:type", SettingValueModelHaljsonEmbeddedSetting)
    ], SettingValueModelHaljsonEmbedded.prototype, "setting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=settingTags", elemType: SettingValueModelHaljsonEmbeddedSettingTags }),
        __metadata("design:type", Array)
    ], SettingValueModelHaljsonEmbedded.prototype, "settingTags", void 0);
    return SettingValueModelHaljsonEmbedded;
}(SpeakeasyBase));
export { SettingValueModelHaljsonEmbedded };
var SettingValueModelHaljsonLinks = /** @class */ (function (_super) {
    __extends(SettingValueModelHaljsonLinks, _super);
    function SettingValueModelHaljsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljsonLinks.prototype, "self", void 0);
    return SettingValueModelHaljsonLinks;
}(SpeakeasyBase));
export { SettingValueModelHaljsonLinks };
var SettingValueModelHaljson = /** @class */ (function (_super) {
    __extends(SettingValueModelHaljson, _super);
    function SettingValueModelHaljson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_embedded" }),
        __metadata("design:type", SettingValueModelHaljsonEmbedded)
    ], SettingValueModelHaljson.prototype, "embedded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", SettingValueModelHaljsonLinks)
    ], SettingValueModelHaljson.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdaterUserEmail" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljson.prototype, "lastUpdaterUserEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdaterUserFullName" }),
        __metadata("design:type", String)
    ], SettingValueModelHaljson.prototype, "lastUpdaterUserFullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=readOnly" }),
        __metadata("design:type", Boolean)
    ], SettingValueModelHaljson.prototype, "readOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rolloutPercentageItems", elemType: RolloutPercentageItemModel }),
        __metadata("design:type", Array)
    ], SettingValueModelHaljson.prototype, "rolloutPercentageItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rolloutRules", elemType: RolloutRuleModel }),
        __metadata("design:type", Array)
    ], SettingValueModelHaljson.prototype, "rolloutRules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", Date)
    ], SettingValueModelHaljson.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", Map)
    ], SettingValueModelHaljson.prototype, "value", void 0);
    return SettingValueModelHaljson;
}(SpeakeasyBase));
export { SettingValueModelHaljson };
