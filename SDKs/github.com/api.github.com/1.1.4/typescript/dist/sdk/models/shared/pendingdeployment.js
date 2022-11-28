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
import { DeploymentReviewerTypeEnum } from "./deploymentreviewertypeenum";
var PendingDeploymentEnvironment = /** @class */ (function (_super) {
    __extends(PendingDeploymentEnvironment, _super);
    function PendingDeploymentEnvironment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], PendingDeploymentEnvironment.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PendingDeploymentEnvironment.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PendingDeploymentEnvironment.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], PendingDeploymentEnvironment.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PendingDeploymentEnvironment.prototype, "url", void 0);
    return PendingDeploymentEnvironment;
}(SpeakeasyBase));
export { PendingDeploymentEnvironment };
var PendingDeploymentReviewers = /** @class */ (function (_super) {
    __extends(PendingDeploymentReviewers, _super);
    function PendingDeploymentReviewers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reviewer" }),
        __metadata("design:type", Object)
    ], PendingDeploymentReviewers.prototype, "reviewer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PendingDeploymentReviewers.prototype, "type", void 0);
    return PendingDeploymentReviewers;
}(SpeakeasyBase));
export { PendingDeploymentReviewers };
// PendingDeployment
/**
 * Details of a deployment that is waiting for protection rules to pass
**/
var PendingDeployment = /** @class */ (function (_super) {
    __extends(PendingDeployment, _super);
    function PendingDeployment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current_user_can_approve" }),
        __metadata("design:type", Boolean)
    ], PendingDeployment.prototype, "currentUserCanApprove", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environment" }),
        __metadata("design:type", PendingDeploymentEnvironment)
    ], PendingDeployment.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reviewers", elemType: PendingDeploymentReviewers }),
        __metadata("design:type", Array)
    ], PendingDeployment.prototype, "reviewers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wait_timer" }),
        __metadata("design:type", Number)
    ], PendingDeployment.prototype, "waitTimer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wait_timer_started_at" }),
        __metadata("design:type", Date)
    ], PendingDeployment.prototype, "waitTimerStartedAt", void 0);
    return PendingDeployment;
}(SpeakeasyBase));
export { PendingDeployment };
