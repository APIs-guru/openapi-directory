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
var ProductModelHaljsonEmbeddedOrganizationLinks = /** @class */ (function (_super) {
    __extends(ProductModelHaljsonEmbeddedOrganizationLinks, _super);
    function ProductModelHaljsonEmbeddedOrganizationLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=members" }),
        __metadata("design:type", String)
    ], ProductModelHaljsonEmbeddedOrganizationLinks.prototype, "members", void 0);
    __decorate([
        Metadata({ data: "json, name=products" }),
        __metadata("design:type", String)
    ], ProductModelHaljsonEmbeddedOrganizationLinks.prototype, "products", void 0);
    return ProductModelHaljsonEmbeddedOrganizationLinks;
}(SpeakeasyBase));
export { ProductModelHaljsonEmbeddedOrganizationLinks };
var ProductModelHaljsonEmbeddedOrganization = /** @class */ (function (_super) {
    __extends(ProductModelHaljsonEmbeddedOrganization, _super);
    function ProductModelHaljsonEmbeddedOrganization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=_links" }),
        __metadata("design:type", ProductModelHaljsonEmbeddedOrganizationLinks)
    ], ProductModelHaljsonEmbeddedOrganization.prototype, "links", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ProductModelHaljsonEmbeddedOrganization.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=organizationId" }),
        __metadata("design:type", String)
    ], ProductModelHaljsonEmbeddedOrganization.prototype, "organizationId", void 0);
    return ProductModelHaljsonEmbeddedOrganization;
}(SpeakeasyBase));
export { ProductModelHaljsonEmbeddedOrganization };
var ProductModelHaljsonEmbedded = /** @class */ (function (_super) {
    __extends(ProductModelHaljsonEmbedded, _super);
    function ProductModelHaljsonEmbedded() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=organization" }),
        __metadata("design:type", ProductModelHaljsonEmbeddedOrganization)
    ], ProductModelHaljsonEmbedded.prototype, "organization", void 0);
    return ProductModelHaljsonEmbedded;
}(SpeakeasyBase));
export { ProductModelHaljsonEmbedded };
var ProductModelHaljsonLinks = /** @class */ (function (_super) {
    __extends(ProductModelHaljsonLinks, _super);
    function ProductModelHaljsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=configs" }),
        __metadata("design:type", String)
    ], ProductModelHaljsonLinks.prototype, "configs", void 0);
    __decorate([
        Metadata({ data: "json, name=environments" }),
        __metadata("design:type", String)
    ], ProductModelHaljsonLinks.prototype, "environments", void 0);
    __decorate([
        Metadata({ data: "json, name=members" }),
        __metadata("design:type", String)
    ], ProductModelHaljsonLinks.prototype, "members", void 0);
    __decorate([
        Metadata({ data: "json, name=permission-groups" }),
        __metadata("design:type", String)
    ], ProductModelHaljsonLinks.prototype, "permissionGroups", void 0);
    __decorate([
        Metadata({ data: "json, name=self" }),
        __metadata("design:type", String)
    ], ProductModelHaljsonLinks.prototype, "self", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", String)
    ], ProductModelHaljsonLinks.prototype, "tags", void 0);
    return ProductModelHaljsonLinks;
}(SpeakeasyBase));
export { ProductModelHaljsonLinks };
var ProductModelHaljson = /** @class */ (function (_super) {
    __extends(ProductModelHaljson, _super);
    function ProductModelHaljson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=_embedded" }),
        __metadata("design:type", ProductModelHaljsonEmbedded)
    ], ProductModelHaljson.prototype, "embedded", void 0);
    __decorate([
        Metadata({ data: "json, name=_links" }),
        __metadata("design:type", ProductModelHaljsonLinks)
    ], ProductModelHaljson.prototype, "links", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ProductModelHaljson.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=productId" }),
        __metadata("design:type", String)
    ], ProductModelHaljson.prototype, "productId", void 0);
    return ProductModelHaljson;
}(SpeakeasyBase));
export { ProductModelHaljson };
