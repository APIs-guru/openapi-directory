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
var EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganizationLinks = /** @class */ (function (_super) {
    __extends(EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganizationLinks, _super);
    function EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganizationLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=members" }),
        __metadata("design:type", String)
    ], EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganizationLinks.prototype, "members", void 0);
    __decorate([
        Metadata({ data: "json, name=products" }),
        __metadata("design:type", String)
    ], EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganizationLinks.prototype, "products", void 0);
    return EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganizationLinks;
}(SpeakeasyBase));
export { EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganizationLinks };
var EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganization = /** @class */ (function (_super) {
    __extends(EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganization, _super);
    function EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=_links" }),
        __metadata("design:type", EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganizationLinks)
    ], EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganization.prototype, "links", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganization.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=organizationId" }),
        __metadata("design:type", String)
    ], EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganization.prototype, "organizationId", void 0);
    return EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganization;
}(SpeakeasyBase));
export { EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganization };
var EnvironmentModelHaljsonEmbeddedProductEmbedded = /** @class */ (function (_super) {
    __extends(EnvironmentModelHaljsonEmbeddedProductEmbedded, _super);
    function EnvironmentModelHaljsonEmbeddedProductEmbedded() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=organization" }),
        __metadata("design:type", EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganization)
    ], EnvironmentModelHaljsonEmbeddedProductEmbedded.prototype, "organization", void 0);
    return EnvironmentModelHaljsonEmbeddedProductEmbedded;
}(SpeakeasyBase));
export { EnvironmentModelHaljsonEmbeddedProductEmbedded };
var EnvironmentModelHaljsonEmbeddedProductLinks = /** @class */ (function (_super) {
    __extends(EnvironmentModelHaljsonEmbeddedProductLinks, _super);
    function EnvironmentModelHaljsonEmbeddedProductLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=configs" }),
        __metadata("design:type", String)
    ], EnvironmentModelHaljsonEmbeddedProductLinks.prototype, "configs", void 0);
    __decorate([
        Metadata({ data: "json, name=environments" }),
        __metadata("design:type", String)
    ], EnvironmentModelHaljsonEmbeddedProductLinks.prototype, "environments", void 0);
    __decorate([
        Metadata({ data: "json, name=members" }),
        __metadata("design:type", String)
    ], EnvironmentModelHaljsonEmbeddedProductLinks.prototype, "members", void 0);
    __decorate([
        Metadata({ data: "json, name=permission-groups" }),
        __metadata("design:type", String)
    ], EnvironmentModelHaljsonEmbeddedProductLinks.prototype, "permissionGroups", void 0);
    __decorate([
        Metadata({ data: "json, name=self" }),
        __metadata("design:type", String)
    ], EnvironmentModelHaljsonEmbeddedProductLinks.prototype, "self", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", String)
    ], EnvironmentModelHaljsonEmbeddedProductLinks.prototype, "tags", void 0);
    return EnvironmentModelHaljsonEmbeddedProductLinks;
}(SpeakeasyBase));
export { EnvironmentModelHaljsonEmbeddedProductLinks };
var EnvironmentModelHaljsonEmbeddedProduct = /** @class */ (function (_super) {
    __extends(EnvironmentModelHaljsonEmbeddedProduct, _super);
    function EnvironmentModelHaljsonEmbeddedProduct() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=_embedded" }),
        __metadata("design:type", EnvironmentModelHaljsonEmbeddedProductEmbedded)
    ], EnvironmentModelHaljsonEmbeddedProduct.prototype, "embedded", void 0);
    __decorate([
        Metadata({ data: "json, name=_links" }),
        __metadata("design:type", EnvironmentModelHaljsonEmbeddedProductLinks)
    ], EnvironmentModelHaljsonEmbeddedProduct.prototype, "links", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EnvironmentModelHaljsonEmbeddedProduct.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=productId" }),
        __metadata("design:type", String)
    ], EnvironmentModelHaljsonEmbeddedProduct.prototype, "productId", void 0);
    return EnvironmentModelHaljsonEmbeddedProduct;
}(SpeakeasyBase));
export { EnvironmentModelHaljsonEmbeddedProduct };
var EnvironmentModelHaljsonEmbedded = /** @class */ (function (_super) {
    __extends(EnvironmentModelHaljsonEmbedded, _super);
    function EnvironmentModelHaljsonEmbedded() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=product" }),
        __metadata("design:type", EnvironmentModelHaljsonEmbeddedProduct)
    ], EnvironmentModelHaljsonEmbedded.prototype, "product", void 0);
    return EnvironmentModelHaljsonEmbedded;
}(SpeakeasyBase));
export { EnvironmentModelHaljsonEmbedded };
var EnvironmentModelHaljsonLinks = /** @class */ (function (_super) {
    __extends(EnvironmentModelHaljsonLinks, _super);
    function EnvironmentModelHaljsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=self" }),
        __metadata("design:type", String)
    ], EnvironmentModelHaljsonLinks.prototype, "self", void 0);
    return EnvironmentModelHaljsonLinks;
}(SpeakeasyBase));
export { EnvironmentModelHaljsonLinks };
var EnvironmentModelHaljson = /** @class */ (function (_super) {
    __extends(EnvironmentModelHaljson, _super);
    function EnvironmentModelHaljson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=_embedded" }),
        __metadata("design:type", EnvironmentModelHaljsonEmbedded)
    ], EnvironmentModelHaljson.prototype, "embedded", void 0);
    __decorate([
        Metadata({ data: "json, name=_links" }),
        __metadata("design:type", EnvironmentModelHaljsonLinks)
    ], EnvironmentModelHaljson.prototype, "links", void 0);
    __decorate([
        Metadata({ data: "json, name=environmentId" }),
        __metadata("design:type", String)
    ], EnvironmentModelHaljson.prototype, "environmentId", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EnvironmentModelHaljson.prototype, "name", void 0);
    return EnvironmentModelHaljson;
}(SpeakeasyBase));
export { EnvironmentModelHaljson };
