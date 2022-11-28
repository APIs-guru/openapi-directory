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
import { AuditUserPermission } from "./audituserpermission";
import { UserInfo } from "./userinfo";
// AuditNodeResponse
/**
 * Audit node report
**/
var AuditNodeResponse = /** @class */ (function (_super) {
    __extends(AuditNodeResponse, _super);
    function AuditNodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auditUserPermissionList", elemType: AuditUserPermission }),
        __metadata("design:type", Array)
    ], AuditNodeResponse.prototype, "auditUserPermissionList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeCntChildren" }),
        __metadata("design:type", Number)
    ], AuditNodeResponse.prototype, "nodeCntChildren", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeCreatedAt" }),
        __metadata("design:type", Date)
    ], AuditNodeResponse.prototype, "nodeCreatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeCreatedBy" }),
        __metadata("design:type", UserInfo)
    ], AuditNodeResponse.prototype, "nodeCreatedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeHasActivitiesLog" }),
        __metadata("design:type", Boolean)
    ], AuditNodeResponse.prototype, "nodeHasActivitiesLog", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeHasRecycleBin" }),
        __metadata("design:type", Boolean)
    ], AuditNodeResponse.prototype, "nodeHasRecycleBin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeId" }),
        __metadata("design:type", Number)
    ], AuditNodeResponse.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeIsEncrypted" }),
        __metadata("design:type", Boolean)
    ], AuditNodeResponse.prototype, "nodeIsEncrypted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeName" }),
        __metadata("design:type", String)
    ], AuditNodeResponse.prototype, "nodeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeParentId" }),
        __metadata("design:type", Number)
    ], AuditNodeResponse.prototype, "nodeParentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeParentPath" }),
        __metadata("design:type", String)
    ], AuditNodeResponse.prototype, "nodeParentPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeQuota" }),
        __metadata("design:type", Number)
    ], AuditNodeResponse.prototype, "nodeQuota", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeRecycleBinRetentionPeriod" }),
        __metadata("design:type", Number)
    ], AuditNodeResponse.prototype, "nodeRecycleBinRetentionPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeSize" }),
        __metadata("design:type", Number)
    ], AuditNodeResponse.prototype, "nodeSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeUpdatedAt" }),
        __metadata("design:type", Date)
    ], AuditNodeResponse.prototype, "nodeUpdatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeUpdatedBy" }),
        __metadata("design:type", UserInfo)
    ], AuditNodeResponse.prototype, "nodeUpdatedBy", void 0);
    return AuditNodeResponse;
}(SpeakeasyBase));
export { AuditNodeResponse };
