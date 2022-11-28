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
// ServiceInstanceSummary
/**
 * A summary of the service instance detail data.
**/
var ServiceInstanceSummary = /** @class */ (function (_super) {
    __extends(ServiceInstanceSummary, _super);
    function ServiceInstanceSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], ServiceInstanceSummary.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], ServiceInstanceSummary.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deploymentStatus" }),
        __metadata("design:type", String)
    ], ServiceInstanceSummary.prototype, "deploymentStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deploymentStatusMessage" }),
        __metadata("design:type", String)
    ], ServiceInstanceSummary.prototype, "deploymentStatusMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environmentName" }),
        __metadata("design:type", String)
    ], ServiceInstanceSummary.prototype, "environmentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastDeploymentAttemptedAt" }),
        __metadata("design:type", Date)
    ], ServiceInstanceSummary.prototype, "lastDeploymentAttemptedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastDeploymentSucceededAt" }),
        __metadata("design:type", Date)
    ], ServiceInstanceSummary.prototype, "lastDeploymentSucceededAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ServiceInstanceSummary.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceName" }),
        __metadata("design:type", String)
    ], ServiceInstanceSummary.prototype, "serviceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=templateMajorVersion" }),
        __metadata("design:type", String)
    ], ServiceInstanceSummary.prototype, "templateMajorVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=templateMinorVersion" }),
        __metadata("design:type", String)
    ], ServiceInstanceSummary.prototype, "templateMinorVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=templateName" }),
        __metadata("design:type", String)
    ], ServiceInstanceSummary.prototype, "templateName", void 0);
    return ServiceInstanceSummary;
}(SpeakeasyBase));
export { ServiceInstanceSummary };
