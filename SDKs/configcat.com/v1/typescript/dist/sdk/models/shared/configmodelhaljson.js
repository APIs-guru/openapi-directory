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
var ConfigModelHaljsonEmbeddedProductEmbeddedOrganizationLinks = /** @class */ (function (_super) {
    __extends(ConfigModelHaljsonEmbeddedProductEmbeddedOrganizationLinks, _super);
    function ConfigModelHaljsonEmbeddedProductEmbeddedOrganizationLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members" }),
        __metadata("design:type", String)
    ], ConfigModelHaljsonEmbeddedProductEmbeddedOrganizationLinks.prototype, "members", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=products" }),
        __metadata("design:type", String)
    ], ConfigModelHaljsonEmbeddedProductEmbeddedOrganizationLinks.prototype, "products", void 0);
    return ConfigModelHaljsonEmbeddedProductEmbeddedOrganizationLinks;
}(SpeakeasyBase));
export { ConfigModelHaljsonEmbeddedProductEmbeddedOrganizationLinks };
var ConfigModelHaljsonEmbeddedProductEmbeddedOrganization = /** @class */ (function (_super) {
    __extends(ConfigModelHaljsonEmbeddedProductEmbeddedOrganization, _super);
    function ConfigModelHaljsonEmbeddedProductEmbeddedOrganization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", ConfigModelHaljsonEmbeddedProductEmbeddedOrganizationLinks)
    ], ConfigModelHaljsonEmbeddedProductEmbeddedOrganization.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ConfigModelHaljsonEmbeddedProductEmbeddedOrganization.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizationId" }),
        __metadata("design:type", String)
    ], ConfigModelHaljsonEmbeddedProductEmbeddedOrganization.prototype, "organizationId", void 0);
    return ConfigModelHaljsonEmbeddedProductEmbeddedOrganization;
}(SpeakeasyBase));
export { ConfigModelHaljsonEmbeddedProductEmbeddedOrganization };
var ConfigModelHaljsonEmbeddedProductEmbedded = /** @class */ (function (_super) {
    __extends(ConfigModelHaljsonEmbeddedProductEmbedded, _super);
    function ConfigModelHaljsonEmbeddedProductEmbedded() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization" }),
        __metadata("design:type", ConfigModelHaljsonEmbeddedProductEmbeddedOrganization)
    ], ConfigModelHaljsonEmbeddedProductEmbedded.prototype, "organization", void 0);
    return ConfigModelHaljsonEmbeddedProductEmbedded;
}(SpeakeasyBase));
export { ConfigModelHaljsonEmbeddedProductEmbedded };
var ConfigModelHaljsonEmbeddedProductLinks = /** @class */ (function (_super) {
    __extends(ConfigModelHaljsonEmbeddedProductLinks, _super);
    function ConfigModelHaljsonEmbeddedProductLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configs" }),
        __metadata("design:type", String)
    ], ConfigModelHaljsonEmbeddedProductLinks.prototype, "configs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environments" }),
        __metadata("design:type", String)
    ], ConfigModelHaljsonEmbeddedProductLinks.prototype, "environments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members" }),
        __metadata("design:type", String)
    ], ConfigModelHaljsonEmbeddedProductLinks.prototype, "members", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permission-groups" }),
        __metadata("design:type", String)
    ], ConfigModelHaljsonEmbeddedProductLinks.prototype, "permissionGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self" }),
        __metadata("design:type", String)
    ], ConfigModelHaljsonEmbeddedProductLinks.prototype, "self", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", String)
    ], ConfigModelHaljsonEmbeddedProductLinks.prototype, "tags", void 0);
    return ConfigModelHaljsonEmbeddedProductLinks;
}(SpeakeasyBase));
export { ConfigModelHaljsonEmbeddedProductLinks };
var ConfigModelHaljsonEmbeddedProduct = /** @class */ (function (_super) {
    __extends(ConfigModelHaljsonEmbeddedProduct, _super);
    function ConfigModelHaljsonEmbeddedProduct() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_embedded" }),
        __metadata("design:type", ConfigModelHaljsonEmbeddedProductEmbedded)
    ], ConfigModelHaljsonEmbeddedProduct.prototype, "embedded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", ConfigModelHaljsonEmbeddedProductLinks)
    ], ConfigModelHaljsonEmbeddedProduct.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ConfigModelHaljsonEmbeddedProduct.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productId" }),
        __metadata("design:type", String)
    ], ConfigModelHaljsonEmbeddedProduct.prototype, "productId", void 0);
    return ConfigModelHaljsonEmbeddedProduct;
}(SpeakeasyBase));
export { ConfigModelHaljsonEmbeddedProduct };
var ConfigModelHaljsonEmbedded = /** @class */ (function (_super) {
    __extends(ConfigModelHaljsonEmbedded, _super);
    function ConfigModelHaljsonEmbedded() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=product" }),
        __metadata("design:type", ConfigModelHaljsonEmbeddedProduct)
    ], ConfigModelHaljsonEmbedded.prototype, "product", void 0);
    return ConfigModelHaljsonEmbedded;
}(SpeakeasyBase));
export { ConfigModelHaljsonEmbedded };
var ConfigModelHaljsonLinks = /** @class */ (function (_super) {
    __extends(ConfigModelHaljsonLinks, _super);
    function ConfigModelHaljsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self" }),
        __metadata("design:type", String)
    ], ConfigModelHaljsonLinks.prototype, "self", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=settings" }),
        __metadata("design:type", String)
    ], ConfigModelHaljsonLinks.prototype, "settings", void 0);
    return ConfigModelHaljsonLinks;
}(SpeakeasyBase));
export { ConfigModelHaljsonLinks };
var ConfigModelHaljson = /** @class */ (function (_super) {
    __extends(ConfigModelHaljson, _super);
    function ConfigModelHaljson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_embedded" }),
        __metadata("design:type", ConfigModelHaljsonEmbedded)
    ], ConfigModelHaljson.prototype, "embedded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", ConfigModelHaljsonLinks)
    ], ConfigModelHaljson.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configId" }),
        __metadata("design:type", String)
    ], ConfigModelHaljson.prototype, "configId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ConfigModelHaljson.prototype, "name", void 0);
    return ConfigModelHaljson;
}(SpeakeasyBase));
export { ConfigModelHaljson };
