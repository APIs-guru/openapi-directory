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
import { GoogleRpcStatus } from "./googlerpcstatus";
import { GoogleCloudApigeeV1InstanceDeploymentStatus } from "./googlecloudapigeev1instancedeploymentstatus";
import { GoogleCloudApigeeV1PodStatus } from "./googlecloudapigeev1podstatus";
import { GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict } from "./googlecloudapigeev1deploymentchangereportroutingconflict";
export var GoogleCloudApigeeV1DeploymentStateEnum;
(function (GoogleCloudApigeeV1DeploymentStateEnum) {
    GoogleCloudApigeeV1DeploymentStateEnum["RuntimeStateUnspecified"] = "RUNTIME_STATE_UNSPECIFIED";
    GoogleCloudApigeeV1DeploymentStateEnum["Ready"] = "READY";
    GoogleCloudApigeeV1DeploymentStateEnum["Progressing"] = "PROGRESSING";
    GoogleCloudApigeeV1DeploymentStateEnum["Error"] = "ERROR";
})(GoogleCloudApigeeV1DeploymentStateEnum || (GoogleCloudApigeeV1DeploymentStateEnum = {}));
var GoogleCloudApigeeV1Deployment = /** @class */ (function (_super) {
    __extends(GoogleCloudApigeeV1Deployment, _super);
    function GoogleCloudApigeeV1Deployment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiProxy" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1Deployment.prototype, "apiProxy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deployStartTime" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1Deployment.prototype, "deployStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environment" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1Deployment.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: GoogleRpcStatus }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1Deployment.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instances", elemType: GoogleCloudApigeeV1InstanceDeploymentStatus }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1Deployment.prototype, "instances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pods", elemType: GoogleCloudApigeeV1PodStatus }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1Deployment.prototype, "pods", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revision" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1Deployment.prototype, "revision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routeConflicts", elemType: GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1Deployment.prototype, "routeConflicts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccount" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1Deployment.prototype, "serviceAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1Deployment.prototype, "state", void 0);
    return GoogleCloudApigeeV1Deployment;
}(SpeakeasyBase));
export { GoogleCloudApigeeV1Deployment };
