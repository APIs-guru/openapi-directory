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
import * as shared from "../shared";
// AccessApprovalSettings
/**
 * Settings on a Project/Folder/Organization related to Access Approval.
**/
var AccessApprovalSettings = /** @class */ (function (_super) {
    __extends(AccessApprovalSettings, _super);
    function AccessApprovalSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=activeKeyVersion" }),
        __metadata("design:type", String)
    ], AccessApprovalSettings.prototype, "activeKeyVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=ancestorHasActiveKeyVersion" }),
        __metadata("design:type", Boolean)
    ], AccessApprovalSettings.prototype, "ancestorHasActiveKeyVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=enrolledAncestor" }),
        __metadata("design:type", Boolean)
    ], AccessApprovalSettings.prototype, "enrolledAncestor", void 0);
    __decorate([
        Metadata({ data: "json, name=enrolledServices", elemType: shared.EnrolledService }),
        __metadata("design:type", Array)
    ], AccessApprovalSettings.prototype, "enrolledServices", void 0);
    __decorate([
        Metadata({ data: "json, name=invalidKeyVersion" }),
        __metadata("design:type", Boolean)
    ], AccessApprovalSettings.prototype, "invalidKeyVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AccessApprovalSettings.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=notificationEmails" }),
        __metadata("design:type", Array)
    ], AccessApprovalSettings.prototype, "notificationEmails", void 0);
    return AccessApprovalSettings;
}(SpeakeasyBase));
export { AccessApprovalSettings };
