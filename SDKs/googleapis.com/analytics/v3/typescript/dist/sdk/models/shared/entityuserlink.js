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
import { UserRef } from "./userref";
import { AccountRef } from "./accountref";
import { ProfileRef } from "./profileref";
import { WebPropertyRef } from "./webpropertyref";
// EntityUserLinkPermissionsInput
/**
 * Permissions the user has for this entity.
**/
var EntityUserLinkPermissionsInput = /** @class */ (function (_super) {
    __extends(EntityUserLinkPermissionsInput, _super);
    function EntityUserLinkPermissionsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=local" }),
        __metadata("design:type", Array)
    ], EntityUserLinkPermissionsInput.prototype, "local", void 0);
    return EntityUserLinkPermissionsInput;
}(SpeakeasyBase));
export { EntityUserLinkPermissionsInput };
// EntityUserLinkEntity
/**
 * Entity for this link. It can be an account, a web property, or a view (profile).
**/
var EntityUserLinkEntity = /** @class */ (function (_super) {
    __extends(EntityUserLinkEntity, _super);
    function EntityUserLinkEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountRef" }),
        __metadata("design:type", AccountRef)
    ], EntityUserLinkEntity.prototype, "accountRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profileRef" }),
        __metadata("design:type", ProfileRef)
    ], EntityUserLinkEntity.prototype, "profileRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webPropertyRef" }),
        __metadata("design:type", WebPropertyRef)
    ], EntityUserLinkEntity.prototype, "webPropertyRef", void 0);
    return EntityUserLinkEntity;
}(SpeakeasyBase));
export { EntityUserLinkEntity };
// EntityUserLinkPermissions
/**
 * Permissions the user has for this entity.
**/
var EntityUserLinkPermissions = /** @class */ (function (_super) {
    __extends(EntityUserLinkPermissions, _super);
    function EntityUserLinkPermissions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=effective" }),
        __metadata("design:type", Array)
    ], EntityUserLinkPermissions.prototype, "effective", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=local" }),
        __metadata("design:type", Array)
    ], EntityUserLinkPermissions.prototype, "local", void 0);
    return EntityUserLinkPermissions;
}(SpeakeasyBase));
export { EntityUserLinkPermissions };
// EntityUserLinkInput
/**
 * JSON template for an Analytics Entity-User Link. Returns permissions that a user has for an entity.
**/
var EntityUserLinkInput = /** @class */ (function (_super) {
    __extends(EntityUserLinkInput, _super);
    function EntityUserLinkInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entity" }),
        __metadata("design:type", EntityUserLinkEntity)
    ], EntityUserLinkInput.prototype, "entity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], EntityUserLinkInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], EntityUserLinkInput.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", EntityUserLinkPermissionsInput)
    ], EntityUserLinkInput.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], EntityUserLinkInput.prototype, "selfLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userRef" }),
        __metadata("design:type", UserRef)
    ], EntityUserLinkInput.prototype, "userRef", void 0);
    return EntityUserLinkInput;
}(SpeakeasyBase));
export { EntityUserLinkInput };
// EntityUserLink
/**
 * JSON template for an Analytics Entity-User Link. Returns permissions that a user has for an entity.
**/
var EntityUserLink = /** @class */ (function (_super) {
    __extends(EntityUserLink, _super);
    function EntityUserLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entity" }),
        __metadata("design:type", EntityUserLinkEntity)
    ], EntityUserLink.prototype, "entity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], EntityUserLink.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], EntityUserLink.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", EntityUserLinkPermissions)
    ], EntityUserLink.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], EntityUserLink.prototype, "selfLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userRef" }),
        __metadata("design:type", UserRef)
    ], EntityUserLink.prototype, "userRef", void 0);
    return EntityUserLink;
}(SpeakeasyBase));
export { EntityUserLink };
