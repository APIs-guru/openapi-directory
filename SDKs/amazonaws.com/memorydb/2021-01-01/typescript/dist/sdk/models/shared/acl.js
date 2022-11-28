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
import { AclPendingChanges } from "./aclpendingchanges";
// Acl
/**
 * An Access Control List. You can authenticate users with Access Contol Lists. ACLs enable you to control cluster access by grouping users. These Access control lists are designed as a way to organize access to clusters.
**/
var Acl = /** @class */ (function (_super) {
    __extends(Acl, _super);
    function Acl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ARN" }),
        __metadata("design:type", String)
    ], Acl.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Clusters" }),
        __metadata("design:type", Array)
    ], Acl.prototype, "clusters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumEngineVersion" }),
        __metadata("design:type", String)
    ], Acl.prototype, "minimumEngineVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], Acl.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PendingChanges" }),
        __metadata("design:type", AclPendingChanges)
    ], Acl.prototype, "pendingChanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], Acl.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserNames" }),
        __metadata("design:type", Array)
    ], Acl.prototype, "userNames", void 0);
    return Acl;
}(SpeakeasyBase));
export { Acl };
