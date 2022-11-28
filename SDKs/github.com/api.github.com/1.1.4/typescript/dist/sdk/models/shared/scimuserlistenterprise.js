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
var ScimUserListEnterpriseResourcesEmails = /** @class */ (function (_super) {
    __extends(ScimUserListEnterpriseResourcesEmails, _super);
    function ScimUserListEnterpriseResourcesEmails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary" }),
        __metadata("design:type", Boolean)
    ], ScimUserListEnterpriseResourcesEmails.prototype, "primary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ScimUserListEnterpriseResourcesEmails.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ScimUserListEnterpriseResourcesEmails.prototype, "value", void 0);
    return ScimUserListEnterpriseResourcesEmails;
}(SpeakeasyBase));
export { ScimUserListEnterpriseResourcesEmails };
var ScimUserListEnterpriseResourcesGroups = /** @class */ (function (_super) {
    __extends(ScimUserListEnterpriseResourcesGroups, _super);
    function ScimUserListEnterpriseResourcesGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ScimUserListEnterpriseResourcesGroups.prototype, "value", void 0);
    return ScimUserListEnterpriseResourcesGroups;
}(SpeakeasyBase));
export { ScimUserListEnterpriseResourcesGroups };
var ScimUserListEnterpriseResourcesMeta = /** @class */ (function (_super) {
    __extends(ScimUserListEnterpriseResourcesMeta, _super);
    function ScimUserListEnterpriseResourcesMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], ScimUserListEnterpriseResourcesMeta.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModified" }),
        __metadata("design:type", String)
    ], ScimUserListEnterpriseResourcesMeta.prototype, "lastModified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], ScimUserListEnterpriseResourcesMeta.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceType" }),
        __metadata("design:type", String)
    ], ScimUserListEnterpriseResourcesMeta.prototype, "resourceType", void 0);
    return ScimUserListEnterpriseResourcesMeta;
}(SpeakeasyBase));
export { ScimUserListEnterpriseResourcesMeta };
var ScimUserListEnterpriseResourcesName = /** @class */ (function (_super) {
    __extends(ScimUserListEnterpriseResourcesName, _super);
    function ScimUserListEnterpriseResourcesName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=familyName" }),
        __metadata("design:type", String)
    ], ScimUserListEnterpriseResourcesName.prototype, "familyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=givenName" }),
        __metadata("design:type", String)
    ], ScimUserListEnterpriseResourcesName.prototype, "givenName", void 0);
    return ScimUserListEnterpriseResourcesName;
}(SpeakeasyBase));
export { ScimUserListEnterpriseResourcesName };
var ScimUserListEnterpriseResources = /** @class */ (function (_super) {
    __extends(ScimUserListEnterpriseResources, _super);
    function ScimUserListEnterpriseResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], ScimUserListEnterpriseResources.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emails", elemType: ScimUserListEnterpriseResourcesEmails }),
        __metadata("design:type", Array)
    ], ScimUserListEnterpriseResources.prototype, "emails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalId" }),
        __metadata("design:type", String)
    ], ScimUserListEnterpriseResources.prototype, "externalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groups", elemType: ScimUserListEnterpriseResourcesGroups }),
        __metadata("design:type", Array)
    ], ScimUserListEnterpriseResources.prototype, "groups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ScimUserListEnterpriseResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ScimUserListEnterpriseResourcesMeta)
    ], ScimUserListEnterpriseResources.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", ScimUserListEnterpriseResourcesName)
    ], ScimUserListEnterpriseResources.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schemas" }),
        __metadata("design:type", Array)
    ], ScimUserListEnterpriseResources.prototype, "schemas", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userName" }),
        __metadata("design:type", String)
    ], ScimUserListEnterpriseResources.prototype, "userName", void 0);
    return ScimUserListEnterpriseResources;
}(SpeakeasyBase));
export { ScimUserListEnterpriseResources };
var ScimUserListEnterprise = /** @class */ (function (_super) {
    __extends(ScimUserListEnterprise, _super);
    function ScimUserListEnterprise() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Resources", elemType: ScimUserListEnterpriseResources }),
        __metadata("design:type", Array)
    ], ScimUserListEnterprise.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemsPerPage" }),
        __metadata("design:type", Number)
    ], ScimUserListEnterprise.prototype, "itemsPerPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schemas" }),
        __metadata("design:type", Array)
    ], ScimUserListEnterprise.prototype, "schemas", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startIndex" }),
        __metadata("design:type", Number)
    ], ScimUserListEnterprise.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalResults" }),
        __metadata("design:type", Number)
    ], ScimUserListEnterprise.prototype, "totalResults", void 0);
    return ScimUserListEnterprise;
}(SpeakeasyBase));
export { ScimUserListEnterprise };
