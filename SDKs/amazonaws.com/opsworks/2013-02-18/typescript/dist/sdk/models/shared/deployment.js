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
import { DeploymentCommand } from "./deploymentcommand";
// Deployment
/**
 * Describes a deployment of a stack or app.
**/
var Deployment = /** @class */ (function (_super) {
    __extends(Deployment, _super);
    function Deployment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AppId" }),
        __metadata("design:type", String)
    ], Deployment.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Command" }),
        __metadata("design:type", DeploymentCommand)
    ], Deployment.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Comment" }),
        __metadata("design:type", String)
    ], Deployment.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompletedAt" }),
        __metadata("design:type", String)
    ], Deployment.prototype, "completedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedAt" }),
        __metadata("design:type", String)
    ], Deployment.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomJson" }),
        __metadata("design:type", String)
    ], Deployment.prototype, "customJson", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeploymentId" }),
        __metadata("design:type", String)
    ], Deployment.prototype, "deploymentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Duration" }),
        __metadata("design:type", Number)
    ], Deployment.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IamUserArn" }),
        __metadata("design:type", String)
    ], Deployment.prototype, "iamUserArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceIds" }),
        __metadata("design:type", Array)
    ], Deployment.prototype, "instanceIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StackId" }),
        __metadata("design:type", String)
    ], Deployment.prototype, "stackId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], Deployment.prototype, "status", void 0);
    return Deployment;
}(SpeakeasyBase));
export { Deployment };
