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
var EnvironmentApprovalsEnvironments = /** @class */ (function (_super) {
    __extends(EnvironmentApprovalsEnvironments, _super);
    function EnvironmentApprovalsEnvironments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], EnvironmentApprovalsEnvironments.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], EnvironmentApprovalsEnvironments.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], EnvironmentApprovalsEnvironments.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EnvironmentApprovalsEnvironments.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], EnvironmentApprovalsEnvironments.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], EnvironmentApprovalsEnvironments.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], EnvironmentApprovalsEnvironments.prototype, "url", void 0);
    return EnvironmentApprovalsEnvironments;
}(SpeakeasyBase));
export { EnvironmentApprovalsEnvironments };
export var EnvironmentApprovalsStateEnum;
(function (EnvironmentApprovalsStateEnum) {
    EnvironmentApprovalsStateEnum["Approved"] = "approved";
    EnvironmentApprovalsStateEnum["Rejected"] = "rejected";
})(EnvironmentApprovalsStateEnum || (EnvironmentApprovalsStateEnum = {}));
// EnvironmentApprovals
/**
 * An entry in the reviews log for environment deployments
**/
var EnvironmentApprovals = /** @class */ (function (_super) {
    __extends(EnvironmentApprovals, _super);
    function EnvironmentApprovals() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], EnvironmentApprovals.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environments", elemType: EnvironmentApprovalsEnvironments }),
        __metadata("design:type", Array)
    ], EnvironmentApprovals.prototype, "environments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], EnvironmentApprovals.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", SimpleUser)
    ], EnvironmentApprovals.prototype, "user", void 0);
    return EnvironmentApprovals;
}(SpeakeasyBase));
export { EnvironmentApprovals };
