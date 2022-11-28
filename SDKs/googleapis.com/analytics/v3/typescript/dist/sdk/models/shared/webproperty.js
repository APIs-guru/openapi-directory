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
// WebpropertyChildLink
/**
 * Child link for this web property. Points to the list of views (profiles) for this web property.
**/
var WebpropertyChildLink = /** @class */ (function (_super) {
    __extends(WebpropertyChildLink, _super);
    function WebpropertyChildLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], WebpropertyChildLink.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], WebpropertyChildLink.prototype, "type", void 0);
    return WebpropertyChildLink;
}(SpeakeasyBase));
export { WebpropertyChildLink };
// WebpropertyParentLink
/**
 * Parent link for this web property. Points to the account to which this web property belongs.
**/
var WebpropertyParentLink = /** @class */ (function (_super) {
    __extends(WebpropertyParentLink, _super);
    function WebpropertyParentLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], WebpropertyParentLink.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], WebpropertyParentLink.prototype, "type", void 0);
    return WebpropertyParentLink;
}(SpeakeasyBase));
export { WebpropertyParentLink };
// WebpropertyPermissions
/**
 * Permissions the user has for this web property.
**/
var WebpropertyPermissions = /** @class */ (function (_super) {
    __extends(WebpropertyPermissions, _super);
    function WebpropertyPermissions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=effective" }),
        __metadata("design:type", Array)
    ], WebpropertyPermissions.prototype, "effective", void 0);
    return WebpropertyPermissions;
}(SpeakeasyBase));
export { WebpropertyPermissions };
// Webproperty
/**
 * JSON template for an Analytics web property.
**/
var Webproperty = /** @class */ (function (_super) {
    __extends(Webproperty, _super);
    function Webproperty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], Webproperty.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=childLink" }),
        __metadata("design:type", WebpropertyChildLink)
    ], Webproperty.prototype, "childLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], Webproperty.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataRetentionResetOnNewActivity" }),
        __metadata("design:type", Boolean)
    ], Webproperty.prototype, "dataRetentionResetOnNewActivity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataRetentionTtl" }),
        __metadata("design:type", String)
    ], Webproperty.prototype, "dataRetentionTtl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultProfileId" }),
        __metadata("design:type", String)
    ], Webproperty.prototype, "defaultProfileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Webproperty.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=industryVertical" }),
        __metadata("design:type", String)
    ], Webproperty.prototype, "industryVertical", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=internalWebPropertyId" }),
        __metadata("design:type", String)
    ], Webproperty.prototype, "internalWebPropertyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Webproperty.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=level" }),
        __metadata("design:type", String)
    ], Webproperty.prototype, "level", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Webproperty.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentLink" }),
        __metadata("design:type", WebpropertyParentLink)
    ], Webproperty.prototype, "parentLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", WebpropertyPermissions)
    ], Webproperty.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profileCount" }),
        __metadata("design:type", Number)
    ], Webproperty.prototype, "profileCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], Webproperty.prototype, "selfLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred" }),
        __metadata("design:type", Boolean)
    ], Webproperty.prototype, "starred", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated" }),
        __metadata("design:type", Date)
    ], Webproperty.prototype, "updated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=websiteUrl" }),
        __metadata("design:type", String)
    ], Webproperty.prototype, "websiteUrl", void 0);
    return Webproperty;
}(SpeakeasyBase));
export { Webproperty };
// WebpropertyInput
/**
 * JSON template for an Analytics web property.
**/
var WebpropertyInput = /** @class */ (function (_super) {
    __extends(WebpropertyInput, _super);
    function WebpropertyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], WebpropertyInput.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=childLink" }),
        __metadata("design:type", WebpropertyChildLink)
    ], WebpropertyInput.prototype, "childLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataRetentionResetOnNewActivity" }),
        __metadata("design:type", Boolean)
    ], WebpropertyInput.prototype, "dataRetentionResetOnNewActivity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataRetentionTtl" }),
        __metadata("design:type", String)
    ], WebpropertyInput.prototype, "dataRetentionTtl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultProfileId" }),
        __metadata("design:type", String)
    ], WebpropertyInput.prototype, "defaultProfileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], WebpropertyInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=industryVertical" }),
        __metadata("design:type", String)
    ], WebpropertyInput.prototype, "industryVertical", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], WebpropertyInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentLink" }),
        __metadata("design:type", WebpropertyParentLink)
    ], WebpropertyInput.prototype, "parentLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred" }),
        __metadata("design:type", Boolean)
    ], WebpropertyInput.prototype, "starred", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=websiteUrl" }),
        __metadata("design:type", String)
    ], WebpropertyInput.prototype, "websiteUrl", void 0);
    return WebpropertyInput;
}(SpeakeasyBase));
export { WebpropertyInput };
