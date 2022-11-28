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
import { SimpleUser } from "./simpleuser";
var TeamProjectPermissions = /** @class */ (function (_super) {
    __extends(TeamProjectPermissions, _super);
    function TeamProjectPermissions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=admin" }),
        __metadata("design:type", Boolean)
    ], TeamProjectPermissions.prototype, "admin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=read" }),
        __metadata("design:type", Boolean)
    ], TeamProjectPermissions.prototype, "read", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=write" }),
        __metadata("design:type", Boolean)
    ], TeamProjectPermissions.prototype, "write", void 0);
    return TeamProjectPermissions;
}(SpeakeasyBase));
export { TeamProjectPermissions };
// TeamProject
/**
 * A team's access to a project.
**/
var TeamProject = /** @class */ (function (_super) {
    __extends(TeamProject, _super);
    function TeamProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], TeamProject.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=columns_url" }),
        __metadata("design:type", String)
    ], TeamProject.prototype, "columnsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], TeamProject.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creator" }),
        __metadata("design:type", SimpleUser)
    ], TeamProject.prototype, "creator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], TeamProject.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], TeamProject.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TeamProject.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], TeamProject.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=number" }),
        __metadata("design:type", Number)
    ], TeamProject.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization_permission" }),
        __metadata("design:type", String)
    ], TeamProject.prototype, "organizationPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner_url" }),
        __metadata("design:type", String)
    ], TeamProject.prototype, "ownerUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", TeamProjectPermissions)
    ], TeamProject.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private" }),
        __metadata("design:type", Boolean)
    ], TeamProject.prototype, "private", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], TeamProject.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], TeamProject.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], TeamProject.prototype, "url", void 0);
    return TeamProject;
}(SpeakeasyBase));
export { TeamProject };
