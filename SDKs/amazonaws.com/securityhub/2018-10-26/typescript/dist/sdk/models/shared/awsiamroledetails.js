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
import { AwsIamAttachedManagedPolicy } from "./awsiamattachedmanagedpolicy";
import { AwsIamInstanceProfile } from "./awsiaminstanceprofile";
import { AwsIamPermissionsBoundary } from "./awsiampermissionsboundary";
import { AwsIamRolePolicy } from "./awsiamrolepolicy";
// AwsIamRoleDetails
/**
 * Contains information about an IAM role, including all of the role's policies.
**/
var AwsIamRoleDetails = /** @class */ (function (_super) {
    __extends(AwsIamRoleDetails, _super);
    function AwsIamRoleDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AssumeRolePolicyDocument" }),
        __metadata("design:type", String)
    ], AwsIamRoleDetails.prototype, "assumeRolePolicyDocument", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AttachedManagedPolicies", elemType: AwsIamAttachedManagedPolicy }),
        __metadata("design:type", Array)
    ], AwsIamRoleDetails.prototype, "attachedManagedPolicies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreateDate" }),
        __metadata("design:type", String)
    ], AwsIamRoleDetails.prototype, "createDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceProfileList", elemType: AwsIamInstanceProfile }),
        __metadata("design:type", Array)
    ], AwsIamRoleDetails.prototype, "instanceProfileList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxSessionDuration" }),
        __metadata("design:type", Number)
    ], AwsIamRoleDetails.prototype, "maxSessionDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Path" }),
        __metadata("design:type", String)
    ], AwsIamRoleDetails.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PermissionsBoundary" }),
        __metadata("design:type", AwsIamPermissionsBoundary)
    ], AwsIamRoleDetails.prototype, "permissionsBoundary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleId" }),
        __metadata("design:type", String)
    ], AwsIamRoleDetails.prototype, "roleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleName" }),
        __metadata("design:type", String)
    ], AwsIamRoleDetails.prototype, "roleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RolePolicyList", elemType: AwsIamRolePolicy }),
        __metadata("design:type", Array)
    ], AwsIamRoleDetails.prototype, "rolePolicyList", void 0);
    return AwsIamRoleDetails;
}(SpeakeasyBase));
export { AwsIamRoleDetails };
