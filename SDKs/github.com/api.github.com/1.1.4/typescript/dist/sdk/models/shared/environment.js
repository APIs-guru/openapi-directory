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
import { DeploymentBranchPolicy } from "./deploymentbranchpolicy";
import { DeploymentReviewerTypeEnum } from "./deploymentreviewertypeenum";
var EnvironmentProtectionRules1 = /** @class */ (function (_super) {
    __extends(EnvironmentProtectionRules1, _super);
    function EnvironmentProtectionRules1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], EnvironmentProtectionRules1.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], EnvironmentProtectionRules1.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], EnvironmentProtectionRules1.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wait_timer" }),
        __metadata("design:type", Number)
    ], EnvironmentProtectionRules1.prototype, "waitTimer", void 0);
    return EnvironmentProtectionRules1;
}(SpeakeasyBase));
export { EnvironmentProtectionRules1 };
var EnvironmentProtectionRules2Reviewers = /** @class */ (function (_super) {
    __extends(EnvironmentProtectionRules2Reviewers, _super);
    function EnvironmentProtectionRules2Reviewers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reviewer" }),
        __metadata("design:type", Object)
    ], EnvironmentProtectionRules2Reviewers.prototype, "reviewer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], EnvironmentProtectionRules2Reviewers.prototype, "type", void 0);
    return EnvironmentProtectionRules2Reviewers;
}(SpeakeasyBase));
export { EnvironmentProtectionRules2Reviewers };
var EnvironmentProtectionRules2 = /** @class */ (function (_super) {
    __extends(EnvironmentProtectionRules2, _super);
    function EnvironmentProtectionRules2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], EnvironmentProtectionRules2.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], EnvironmentProtectionRules2.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reviewers", elemType: EnvironmentProtectionRules2Reviewers }),
        __metadata("design:type", Array)
    ], EnvironmentProtectionRules2.prototype, "reviewers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], EnvironmentProtectionRules2.prototype, "type", void 0);
    return EnvironmentProtectionRules2;
}(SpeakeasyBase));
export { EnvironmentProtectionRules2 };
var EnvironmentProtectionRules3 = /** @class */ (function (_super) {
    __extends(EnvironmentProtectionRules3, _super);
    function EnvironmentProtectionRules3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], EnvironmentProtectionRules3.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], EnvironmentProtectionRules3.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], EnvironmentProtectionRules3.prototype, "type", void 0);
    return EnvironmentProtectionRules3;
}(SpeakeasyBase));
export { EnvironmentProtectionRules3 };
// Environment
/**
 * Details of a deployment environment
**/
var Environment = /** @class */ (function (_super) {
    __extends(Environment, _super);
    function Environment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], Environment.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deployment_branch_policy" }),
        __metadata("design:type", DeploymentBranchPolicy)
    ], Environment.prototype, "deploymentBranchPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], Environment.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Environment.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Environment.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], Environment.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protection_rules" }),
        __metadata("design:type", Array)
    ], Environment.prototype, "protectionRules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], Environment.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Environment.prototype, "url", void 0);
    return Environment;
}(SpeakeasyBase));
export { Environment };
