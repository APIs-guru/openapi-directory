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
import { SettingTypeEnum } from "./settingtypeenum";
var SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganizationLinks = /** @class */ (function (_super) {
    __extends(SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganizationLinks, _super);
    function SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganizationLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members" }),
        __metadata("design:type", String)
    ], SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganizationLinks.prototype, "members", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=products" }),
        __metadata("design:type", String)
    ], SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganizationLinks.prototype, "products", void 0);
    return SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganizationLinks;
}(SpeakeasyBase));
export { SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganizationLinks };
var SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganization = /** @class */ (function (_super) {
    __extends(SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganization, _super);
    function SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganizationLinks)
    ], SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganization.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganization.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizationId" }),
        __metadata("design:type", String)
    ], SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganization.prototype, "organizationId", void 0);
    return SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganization;
}(SpeakeasyBase));
export { SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganization };
var SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbedded = /** @class */ (function (_super) {
    __extends(SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbedded, _super);
    function SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbedded() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization" }),
        __metadata("design:type", SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganization)
    ], SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbedded.prototype, "organization", void 0);
    return SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbedded;
}(SpeakeasyBase));
export { SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbedded };
var SettingModelHaljsonEmbeddedTagsEmbeddedProductLinks = /** @class */ (function (_super) {
    __extends(SettingModelHaljsonEmbeddedTagsEmbeddedProductLinks, _super);
    function SettingModelHaljsonEmbeddedTagsEmbeddedProductLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configs" }),
        __metadata("design:type", String)
    ], SettingModelHaljsonEmbeddedTagsEmbeddedProductLinks.prototype, "configs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environments" }),
        __metadata("design:type", String)
    ], SettingModelHaljsonEmbeddedTagsEmbeddedProductLinks.prototype, "environments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members" }),
        __metadata("design:type", String)
    ], SettingModelHaljsonEmbeddedTagsEmbeddedProductLinks.prototype, "members", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permission-groups" }),
        __metadata("design:type", String)
    ], SettingModelHaljsonEmbeddedTagsEmbeddedProductLinks.prototype, "permissionGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self" }),
        __metadata("design:type", String)
    ], SettingModelHaljsonEmbeddedTagsEmbeddedProductLinks.prototype, "self", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", String)
    ], SettingModelHaljsonEmbeddedTagsEmbeddedProductLinks.prototype, "tags", void 0);
    return SettingModelHaljsonEmbeddedTagsEmbeddedProductLinks;
}(SpeakeasyBase));
export { SettingModelHaljsonEmbeddedTagsEmbeddedProductLinks };
var SettingModelHaljsonEmbeddedTagsEmbeddedProduct = /** @class */ (function (_super) {
    __extends(SettingModelHaljsonEmbeddedTagsEmbeddedProduct, _super);
    function SettingModelHaljsonEmbeddedTagsEmbeddedProduct() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_embedded" }),
        __metadata("design:type", SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbedded)
    ], SettingModelHaljsonEmbeddedTagsEmbeddedProduct.prototype, "embedded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", SettingModelHaljsonEmbeddedTagsEmbeddedProductLinks)
    ], SettingModelHaljsonEmbeddedTagsEmbeddedProduct.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SettingModelHaljsonEmbeddedTagsEmbeddedProduct.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productId" }),
        __metadata("design:type", String)
    ], SettingModelHaljsonEmbeddedTagsEmbeddedProduct.prototype, "productId", void 0);
    return SettingModelHaljsonEmbeddedTagsEmbeddedProduct;
}(SpeakeasyBase));
export { SettingModelHaljsonEmbeddedTagsEmbeddedProduct };
var SettingModelHaljsonEmbeddedTagsEmbedded = /** @class */ (function (_super) {
    __extends(SettingModelHaljsonEmbeddedTagsEmbedded, _super);
    function SettingModelHaljsonEmbeddedTagsEmbedded() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=product" }),
        __metadata("design:type", SettingModelHaljsonEmbeddedTagsEmbeddedProduct)
    ], SettingModelHaljsonEmbeddedTagsEmbedded.prototype, "product", void 0);
    return SettingModelHaljsonEmbeddedTagsEmbedded;
}(SpeakeasyBase));
export { SettingModelHaljsonEmbeddedTagsEmbedded };
var SettingModelHaljsonEmbeddedTagsLinks = /** @class */ (function (_super) {
    __extends(SettingModelHaljsonEmbeddedTagsLinks, _super);
    function SettingModelHaljsonEmbeddedTagsLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self" }),
        __metadata("design:type", String)
    ], SettingModelHaljsonEmbeddedTagsLinks.prototype, "self", void 0);
    return SettingModelHaljsonEmbeddedTagsLinks;
}(SpeakeasyBase));
export { SettingModelHaljsonEmbeddedTagsLinks };
var SettingModelHaljsonEmbeddedTags = /** @class */ (function (_super) {
    __extends(SettingModelHaljsonEmbeddedTags, _super);
    function SettingModelHaljsonEmbeddedTags() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_embedded" }),
        __metadata("design:type", SettingModelHaljsonEmbeddedTagsEmbedded)
    ], SettingModelHaljsonEmbeddedTags.prototype, "embedded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", SettingModelHaljsonEmbeddedTagsLinks)
    ], SettingModelHaljsonEmbeddedTags.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], SettingModelHaljsonEmbeddedTags.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SettingModelHaljsonEmbeddedTags.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagId" }),
        __metadata("design:type", Number)
    ], SettingModelHaljsonEmbeddedTags.prototype, "tagId", void 0);
    return SettingModelHaljsonEmbeddedTags;
}(SpeakeasyBase));
export { SettingModelHaljsonEmbeddedTags };
var SettingModelHaljsonEmbedded = /** @class */ (function (_super) {
    __extends(SettingModelHaljsonEmbedded, _super);
    function SettingModelHaljsonEmbedded() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: SettingModelHaljsonEmbeddedTags }),
        __metadata("design:type", Array)
    ], SettingModelHaljsonEmbedded.prototype, "tags", void 0);
    return SettingModelHaljsonEmbedded;
}(SpeakeasyBase));
export { SettingModelHaljsonEmbedded };
var SettingModelHaljsonLinks = /** @class */ (function (_super) {
    __extends(SettingModelHaljsonLinks, _super);
    function SettingModelHaljsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self" }),
        __metadata("design:type", String)
    ], SettingModelHaljsonLinks.prototype, "self", void 0);
    return SettingModelHaljsonLinks;
}(SpeakeasyBase));
export { SettingModelHaljsonLinks };
var SettingModelHaljson = /** @class */ (function (_super) {
    __extends(SettingModelHaljson, _super);
    function SettingModelHaljson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_embedded" }),
        __metadata("design:type", SettingModelHaljsonEmbedded)
    ], SettingModelHaljson.prototype, "embedded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", SettingModelHaljsonLinks)
    ], SettingModelHaljson.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configId" }),
        __metadata("design:type", String)
    ], SettingModelHaljson.prototype, "configId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configName" }),
        __metadata("design:type", String)
    ], SettingModelHaljson.prototype, "configName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expirationWarningAt" }),
        __metadata("design:type", Date)
    ], SettingModelHaljson.prototype, "expirationWarningAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hint" }),
        __metadata("design:type", String)
    ], SettingModelHaljson.prototype, "hint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], SettingModelHaljson.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SettingModelHaljson.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ownerUserEmail" }),
        __metadata("design:type", String)
    ], SettingModelHaljson.prototype, "ownerUserEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ownerUserFullName" }),
        __metadata("design:type", String)
    ], SettingModelHaljson.prototype, "ownerUserFullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=settingId" }),
        __metadata("design:type", Number)
    ], SettingModelHaljson.prototype, "settingId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=settingType" }),
        __metadata("design:type", String)
    ], SettingModelHaljson.prototype, "settingType", void 0);
    return SettingModelHaljson;
}(SpeakeasyBase));
export { SettingModelHaljson };
