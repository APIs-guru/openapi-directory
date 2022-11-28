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
var RoleRolePrivileges = /** @class */ (function (_super) {
    __extends(RoleRolePrivileges, _super);
    function RoleRolePrivileges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privilegeName" }),
        __metadata("design:type", String)
    ], RoleRolePrivileges.prototype, "privilegeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceId" }),
        __metadata("design:type", String)
    ], RoleRolePrivileges.prototype, "serviceId", void 0);
    return RoleRolePrivileges;
}(SpeakeasyBase));
export { RoleRolePrivileges };
var Role = /** @class */ (function (_super) {
    __extends(Role, _super);
    function Role() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], Role.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isSuperAdminRole" }),
        __metadata("design:type", Boolean)
    ], Role.prototype, "isSuperAdminRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isSystemRole" }),
        __metadata("design:type", Boolean)
    ], Role.prototype, "isSystemRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Role.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roleDescription" }),
        __metadata("design:type", String)
    ], Role.prototype, "roleDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roleId" }),
        __metadata("design:type", String)
    ], Role.prototype, "roleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roleName" }),
        __metadata("design:type", String)
    ], Role.prototype, "roleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rolePrivileges", elemType: RoleRolePrivileges }),
        __metadata("design:type", Array)
    ], Role.prototype, "rolePrivileges", void 0);
    return Role;
}(SpeakeasyBase));
export { Role };
