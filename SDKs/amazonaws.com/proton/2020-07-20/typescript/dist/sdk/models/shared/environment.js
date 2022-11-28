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
import { DeploymentStatusEnum } from "./deploymentstatusenum";
import { ProvisioningEnum } from "./provisioningenum";
// Environment
/**
 * The environment detail data. An AWS Proton environment is a set resources shared across an AWS Proton service.
**/
var Environment = /** @class */ (function (_super) {
    __extends(Environment, _super);
    function Environment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], Environment.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], Environment.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deploymentStatus" }),
        __metadata("design:type", String)
    ], Environment.prototype, "deploymentStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deploymentStatusMessage" }),
        __metadata("design:type", String)
    ], Environment.prototype, "deploymentStatusMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Environment.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environmentAccountConnectionId" }),
        __metadata("design:type", String)
    ], Environment.prototype, "environmentAccountConnectionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environmentAccountId" }),
        __metadata("design:type", String)
    ], Environment.prototype, "environmentAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastDeploymentAttemptedAt" }),
        __metadata("design:type", Date)
    ], Environment.prototype, "lastDeploymentAttemptedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastDeploymentSucceededAt" }),
        __metadata("design:type", Date)
    ], Environment.prototype, "lastDeploymentSucceededAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Environment.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protonServiceRoleArn" }),
        __metadata("design:type", String)
    ], Environment.prototype, "protonServiceRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provisioning" }),
        __metadata("design:type", String)
    ], Environment.prototype, "provisioning", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spec" }),
        __metadata("design:type", String)
    ], Environment.prototype, "spec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=templateMajorVersion" }),
        __metadata("design:type", String)
    ], Environment.prototype, "templateMajorVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=templateMinorVersion" }),
        __metadata("design:type", String)
    ], Environment.prototype, "templateMinorVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=templateName" }),
        __metadata("design:type", String)
    ], Environment.prototype, "templateName", void 0);
    return Environment;
}(SpeakeasyBase));
export { Environment };
