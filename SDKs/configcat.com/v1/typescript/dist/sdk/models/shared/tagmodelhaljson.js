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
var TagModelHaljsonEmbeddedProductEmbeddedOrganizationLinks = /** @class */ (function (_super) {
    __extends(TagModelHaljsonEmbeddedProductEmbeddedOrganizationLinks, _super);
    function TagModelHaljsonEmbeddedProductEmbeddedOrganizationLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members" }),
        __metadata("design:type", String)
    ], TagModelHaljsonEmbeddedProductEmbeddedOrganizationLinks.prototype, "members", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=products" }),
        __metadata("design:type", String)
    ], TagModelHaljsonEmbeddedProductEmbeddedOrganizationLinks.prototype, "products", void 0);
    return TagModelHaljsonEmbeddedProductEmbeddedOrganizationLinks;
}(SpeakeasyBase));
export { TagModelHaljsonEmbeddedProductEmbeddedOrganizationLinks };
var TagModelHaljsonEmbeddedProductEmbeddedOrganization = /** @class */ (function (_super) {
    __extends(TagModelHaljsonEmbeddedProductEmbeddedOrganization, _super);
    function TagModelHaljsonEmbeddedProductEmbeddedOrganization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", TagModelHaljsonEmbeddedProductEmbeddedOrganizationLinks)
    ], TagModelHaljsonEmbeddedProductEmbeddedOrganization.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TagModelHaljsonEmbeddedProductEmbeddedOrganization.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizationId" }),
        __metadata("design:type", String)
    ], TagModelHaljsonEmbeddedProductEmbeddedOrganization.prototype, "organizationId", void 0);
    return TagModelHaljsonEmbeddedProductEmbeddedOrganization;
}(SpeakeasyBase));
export { TagModelHaljsonEmbeddedProductEmbeddedOrganization };
var TagModelHaljsonEmbeddedProductEmbedded = /** @class */ (function (_super) {
    __extends(TagModelHaljsonEmbeddedProductEmbedded, _super);
    function TagModelHaljsonEmbeddedProductEmbedded() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization" }),
        __metadata("design:type", TagModelHaljsonEmbeddedProductEmbeddedOrganization)
    ], TagModelHaljsonEmbeddedProductEmbedded.prototype, "organization", void 0);
    return TagModelHaljsonEmbeddedProductEmbedded;
}(SpeakeasyBase));
export { TagModelHaljsonEmbeddedProductEmbedded };
var TagModelHaljsonEmbeddedProductLinks = /** @class */ (function (_super) {
    __extends(TagModelHaljsonEmbeddedProductLinks, _super);
    function TagModelHaljsonEmbeddedProductLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configs" }),
        __metadata("design:type", String)
    ], TagModelHaljsonEmbeddedProductLinks.prototype, "configs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environments" }),
        __metadata("design:type", String)
    ], TagModelHaljsonEmbeddedProductLinks.prototype, "environments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members" }),
        __metadata("design:type", String)
    ], TagModelHaljsonEmbeddedProductLinks.prototype, "members", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permission-groups" }),
        __metadata("design:type", String)
    ], TagModelHaljsonEmbeddedProductLinks.prototype, "permissionGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self" }),
        __metadata("design:type", String)
    ], TagModelHaljsonEmbeddedProductLinks.prototype, "self", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", String)
    ], TagModelHaljsonEmbeddedProductLinks.prototype, "tags", void 0);
    return TagModelHaljsonEmbeddedProductLinks;
}(SpeakeasyBase));
export { TagModelHaljsonEmbeddedProductLinks };
var TagModelHaljsonEmbeddedProduct = /** @class */ (function (_super) {
    __extends(TagModelHaljsonEmbeddedProduct, _super);
    function TagModelHaljsonEmbeddedProduct() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_embedded" }),
        __metadata("design:type", TagModelHaljsonEmbeddedProductEmbedded)
    ], TagModelHaljsonEmbeddedProduct.prototype, "embedded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", TagModelHaljsonEmbeddedProductLinks)
    ], TagModelHaljsonEmbeddedProduct.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TagModelHaljsonEmbeddedProduct.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productId" }),
        __metadata("design:type", String)
    ], TagModelHaljsonEmbeddedProduct.prototype, "productId", void 0);
    return TagModelHaljsonEmbeddedProduct;
}(SpeakeasyBase));
export { TagModelHaljsonEmbeddedProduct };
var TagModelHaljsonEmbedded = /** @class */ (function (_super) {
    __extends(TagModelHaljsonEmbedded, _super);
    function TagModelHaljsonEmbedded() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=product" }),
        __metadata("design:type", TagModelHaljsonEmbeddedProduct)
    ], TagModelHaljsonEmbedded.prototype, "product", void 0);
    return TagModelHaljsonEmbedded;
}(SpeakeasyBase));
export { TagModelHaljsonEmbedded };
var TagModelHaljsonLinks = /** @class */ (function (_super) {
    __extends(TagModelHaljsonLinks, _super);
    function TagModelHaljsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self" }),
        __metadata("design:type", String)
    ], TagModelHaljsonLinks.prototype, "self", void 0);
    return TagModelHaljsonLinks;
}(SpeakeasyBase));
export { TagModelHaljsonLinks };
var TagModelHaljson = /** @class */ (function (_super) {
    __extends(TagModelHaljson, _super);
    function TagModelHaljson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_embedded" }),
        __metadata("design:type", TagModelHaljsonEmbedded)
    ], TagModelHaljson.prototype, "embedded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", TagModelHaljsonLinks)
    ], TagModelHaljson.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], TagModelHaljson.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TagModelHaljson.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagId" }),
        __metadata("design:type", Number)
    ], TagModelHaljson.prototype, "tagId", void 0);
    return TagModelHaljson;
}(SpeakeasyBase));
export { TagModelHaljson };
